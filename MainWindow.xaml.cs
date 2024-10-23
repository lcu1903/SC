using PCSC.Monitoring;
using PCSC;
using RAR.IdCard.Sdk.Reader;
using System.Windows;
using System.Net.Http;
using System.IO;

namespace SC
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        // eID
        private static bool _continue = true;
        private static VnIdcard _vnIdcard = new VnIdcard();
        public static string dataCCCDNumber = null;
        public static string dataCCCDFullName = null;
        public static string dataImageChipCCCD = null;
        public MainWindow()
        {
            InitializeComponent();
            FrontImg.Text = _vnIdcard.GetChipFaceImage();
        }

        private async void ScanCardButton_Click(object sender, RoutedEventArgs e)
        {

            UserEnrollmentAutomation();

        }
        private static bool TryScanCard()
        {
            Console.WriteLine("Trying scan card...");
            try
            {
                bool scanResult = _vnIdcard.ScanCard(true);
                //Convert to jpeg base64
                if (scanResult && _vnIdcard.GetScanImage() != null && _vnIdcard.GetScanImage().Front != null)
                {
                    var jpgFront = _vnIdcard.GetScanImage().Front.ToMemoryStream(".jpg").ToArray();
                    //File.WriteAllBytes("D:/front.jpg", jpgFront);
                    var scanFront = Convert.ToBase64String(jpgFront);
                    Console.WriteLine($"Scan image front side: {scanFront.Substring(0, 100)}...");
                }
                if (scanResult && _vnIdcard.GetScanImage() != null && _vnIdcard.GetScanImage().Back != null)
                {
                    var jpgBack = _vnIdcard.GetScanImage().Back.ToMemoryStream(".jpg").ToArray();
                    var scanBack = Convert.ToBase64String(jpgBack);
                    var a = _vnIdcard.GetChipFaceImage();
                    File.WriteAllText("D:/ss.txt", _vnIdcard.GetChipFaceImage());
                    Console.WriteLine($"Scan image back side: {scanBack.Substring(0, 100)}...");
                }
                //var cancode = _vnIdcard.GetOcrCanCode();
                //if (!string.IsNullOrEmpty(cancode))
                //{
                //    Console.WriteLine($"CanCode from Image OCR: {cancode}");
                //}
            }
            catch (Exception ex)
            {
                Console.WriteLine("Scan error: " + ex.Message);
            }
            return false;
        }
        private static void UserEnrollmentAutomation()
        {
            Console.WriteLine("Monitor card event (press q to exit): ");
            _vnIdcard.OnStatusChanged += Vn_OnStatusChanged;
            _vnIdcard.StartMonitor(false);
            while (_continue)
            {
               
                Thread.Sleep(100);
            }
            _vnIdcard.StopMonitor();
        }
        private static void Vn_OnStatusChanged(object sender, StatusChangeEventArgs e)
        {
            Console.WriteLine($"Device {e.ReaderName} change stated from: {e.LastState} to: {e.NewState}.");
            if (e.LastState != SCRState.Empty || e.NewState != SCRState.Present)
                return;

            try
            {
                string canCode = ""; //You can get it from OCR scan image; Example: 009904, 
                string MRZ = ""; //You can get it from OCR scan image; Example: "IDVNM0d580000221034058000026<<45810262M9912315VNM<<<<<<<<<<<0NGUYEN<<VAN<TY<<<<<<<<<<<<<<<<";

                TryScanCard(); //Only support on SCAN-READER
                canCode = _vnIdcard.GetOcrCanCode();
                if (string.IsNullOrEmpty(MRZ) && string.IsNullOrEmpty(canCode))
                {
                    // INPUT CANCODE
                    Console.Write("Input CAN (q to exit application): ");
                    var p = Console.ReadLine();
                    Console.WriteLine(p);
                    if (p == "q")
                    {
                        _continue = false;
                        return;
                    }
                    canCode = p;
                }

                _vnIdcard.ReadCard(e.ReaderName, canCode, MRZ);
                //Console.WriteLine($"FaceImage lafffff: {_vnIdcard.GetChipFaceImage().Substring(0, 200)}...");
                PrintResult(_vnIdcard);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error occured: " + ex.ToString());
            }
            finally
            {
                _vnIdcard.RejectCard(); //Only support on SCAN-READER
            }
        }
        private static void PrintResult(VnIdcard vnid)
        {
            /*OUTPUT RESULT*/
            Console.WriteLine("-----------------------OUTPUT----------------");
            //Console.WriteLine($"Reader Serial Number: {vnid.GetDeviceSN()}");
            Console.WriteLine($"Personal detail:");
            Console.WriteLine($"Name: {vnid.GetPersonalDetail().Name}");
            Console.WriteLine($"Number: {vnid.GetPersonalDetail().DocumentNumber}");
            Console.WriteLine($"OldNumber: {vnid.GetPersonalDetail().PreviousNumber}");
            Console.WriteLine($"HomeTown: {vnid.GetPersonalDetail().Hometown}");
            Console.WriteLine($"BirthDay: {vnid.GetPersonalDetail().DateOfBirth}");

            Console.WriteLine($"...");
            //Console.WriteLine($"FaceImage: {vnid.GetChipFaceImage().Substring(0, 200)}...");        
            dataCCCDNumber = vnid.GetPersonalDetail().DocumentNumber;
            dataCCCDFullName = vnid.GetPersonalDetail().Name;
            dataImageChipCCCD = vnid.GetChipFaceImage();
            //File.WriteAllText("D:/face.txt", vnid.GetChipFaceImage());
            //Console.WriteLine($"DSCert (base64 PEMFile format): {vnid.GetDSCert().Substring(0, 200)}...");
            //Console.WriteLine($"MRZ={vnid.GetChipMRZ()}");
            //Console.WriteLine("==================READ CARD DATA SUCCESSFULLY============");

            Console.WriteLine("-----------------------SYNC TO BIOSTAR 2 SERVER----------------");
            //check user exist
            //bool existUser = checkExistUsers(dataCCCDNumber).Result;
            ////Console.WriteLine(existUser);
            //if (existUser)
            //{
            //    Console.WriteLine("User '" + dataCCCDFullName + "' updated successfully!");
            //    updateUserBio2(dataCCCDNumber, dataCCCDFullName, dataImageChipCCCD).Wait();
            //}
            //else
            //{
            //    createUserBio2(dataCCCDNumber, dataCCCDFullName, dataImageChipCCCD).Wait();
            //    Console.WriteLine("User '" + dataCCCDFullName + "' is created successfully!");
            //}

            //dataImageChipCCCD = null;
        }
        static HttpClient CreateInsecureHttpClient()
        {
            HttpClientHandler handler = new HttpClientHandler();
            handler.ServerCertificateCustomValidationCallback = (sender, cert, chain, sslPolicyErrors) => true; // Bỏ qua xác minh chứng chỉ

            return new HttpClient(handler);
        }
    }
}