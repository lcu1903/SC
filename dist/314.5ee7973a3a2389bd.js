"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[314],{32950:(F,C,i)=>{i.d(C,{F:()=>f});var c=i(22223);let f=(()=>{class m{constructor(r){this.el=r,this.fallbackSrc="assets/images/fallback-image/blank-image.svg"}onError(){const r=this.el.nativeElement;r&&(r.src=this.fallbackSrc)}}return m.\u0275fac=function(r){return new(r||m)(c.Y36(c.SBq))},m.\u0275dir=c.lG2({type:m,selectors:[["img","nzSrc",""]],hostBindings:function(r,v){1&r&&c.NdJ("error",function(){return v.onError()})},inputs:{fallbackSrc:"fallbackSrc"}}),m})()},92982:(F,C,i)=>{i.d(C,{F:()=>f});var c=i(22223);let f=(()=>{class m{}return m.\u0275fac=function(r){return new(r||m)},m.\u0275mod=c.oAB({type:m}),m.\u0275inj=c.cJS({}),m})()},3914:(F,C,i)=>{i.d(C,{G:()=>f});var c=i(22223);let f=(()=>{class m{}return m.\u0275fac=function(r){return new(r||m)},m.\u0275mod=c.oAB({type:m}),m.\u0275inj=c.cJS({}),m})()},78314:(F,C,i)=>{i.r(C),i.d(C,{CompanyModule:()=>Ue});var c=i(31531),f=i(99114),m=i(69609),u=i(11292),r=i(58016),v=i(51728),N=i(430),G=i(83649),te=i(56467),ne=i(61972),b=i(39401),h=i(30430),w=i(74050),_=i(44755),K=i(50877),oe=i(74473),e=i(22223);let ae=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-company"]],decls:1,vars:0,template:function(n,t){1&n&&e._UZ(0,"router-outlet")},dependencies:[c.lC],encapsulation:2}),a})();var A=i(77579),le=i(78372),p=i(82722),L=i(70262),z=i(62843),U=i(28746),J=i(38642),O=i(20054),$=i(14039),M=i(89040),Q=i(47148),R=i(90504),D=i(17406),j=i(32950);function ie(a,s){if(1&a){const n=e.EpF();e.TgZ(0,"tr",28),e.NdJ("dblclick",function(){const o=e.CHM(n).$implicit,d=e.oxw();return e.KtG(d.clickDetail(o.companyId))}),e.TgZ(1,"td")(2,"span",29)(3,"button",30)(4,"mat-icon"),e._uU(5," more_vert "),e.qZA(),e.TgZ(6,"mat-menu",null,31),e.ynx(8),e.TgZ(9,"button",32),e.NdJ("click",function(){const o=e.CHM(n).$implicit,d=e.oxw();return e.KtG(d.clickDetail(o.companyId))}),e._UZ(10,"mat-icon",33),e._uU(11),e.ALo(12,"transloco"),e.qZA(),e.TgZ(13,"button",32),e.NdJ("click",function(){const o=e.CHM(n).$implicit,d=e.oxw();return e.KtG(d.clickEdit(o.companyId))}),e.TgZ(14,"mat-icon"),e._uU(15,"edit"),e.qZA(),e._uU(16),e.ALo(17,"transloco"),e.qZA(),e.BQk(),e.qZA()()()(),e.TgZ(18,"td")(19,"div",34),e._uU(20),e.qZA()(),e.TgZ(21,"td"),e._UZ(22,"img",35),e.qZA(),e.TgZ(23,"td",36),e._uU(24),e.qZA(),e.TgZ(25,"td",37),e._uU(26),e.qZA(),e.TgZ(27,"td",37),e._uU(28),e.qZA(),e.TgZ(29,"td",37),e._uU(30),e.qZA(),e.TgZ(31,"td",37),e._uU(32),e.qZA(),e.TgZ(33,"td",37),e._uU(34),e.qZA(),e.TgZ(35,"td",37),e._uU(36),e.qZA(),e.TgZ(37,"td",36),e._uU(38),e.qZA()()}if(2&a){const n=s.$implicit,t=s.index,l=e.MAs(7);e.oxw();const o=e.MAs(29);e.xp6(3),e.Q6J("matMenuTriggerFor",l),e.xp6(8),e.hij(" ",e.lcZ(12,21,"view")," "),e.xp6(5),e.hij(" ",e.lcZ(17,23,"edit")," "),e.xp6(4),e.Oqu((o.nzPageIndex-1)*o.nzPageSize+t+1),e.xp6(2),e.Q6J("nzSrc",n.logo),e.xp6(1),e.Q6J("matTooltip",n.companyName),e.xp6(1),e.hij(" ",n.companyName," "),e.xp6(1),e.Q6J("matTooltip",n.taxCode),e.xp6(1),e.hij(" ",n.taxCode," "),e.xp6(1),e.Q6J("matTooltip",n.phoneNumber),e.xp6(1),e.hij(" ",n.phoneNumber," "),e.xp6(1),e.Q6J("matTooltip",n.email),e.xp6(1),e.hij(" ",n.email," "),e.xp6(1),e.Q6J("matTooltip",n.floorName),e.xp6(1),e.hij(" ",n.floorName," "),e.xp6(1),e.Q6J("matTooltip",n.blockName),e.xp6(1),e.hij(" ",n.blockName," "),e.xp6(1),e.Q6J("matTooltip",n.customerCount),e.xp6(1),e.hij(" ",n.customerCount," "),e.xp6(1),e.Q6J("matTooltip",n.description),e.xp6(1),e.hij(" ",n.description," ")}}let se=(()=>{class a{constructor(n,t,l,o,d,g){this._activatedRoute=n,this._companyService=t,this._tenantService=l,this._floorService=o,this._blockService=d,this._router=g,this._unsubscribeAll$=new A.x,this.debounce$=new A.x,this.listData=[],this.isLoading=!1,this.filter={textSearch:null,floorId:null,blockId:null,isUse:!0},this.floorCodes=[],this.blockCodes=[]}ngOnInit(){this.getData(),this.debounce$.pipe((0,le.b)(300),(0,p.R)(this._unsubscribeAll$)).subscribe(()=>{this.getData()}),this._floorService.get({isUse:!0}).pipe((0,p.R)(this._unsubscribeAll$)).subscribe(({data:n})=>{this.floorCodes=n.map(t=>({id:t.floorId,name:t.floorName}))}),this._blockService.get({isUse:!0}).pipe((0,p.R)(this._unsubscribeAll$)).subscribe(({data:n})=>{this.blockCodes=n.map(t=>({id:t.blockId,name:t.blockName}))})}ngOnDestroy(){this._unsubscribeAll$.next(null),this._unsubscribeAll$.complete()}getData(){this.isLoading=!0,this._companyService.get(this.filter).pipe((0,p.R)(this._unsubscribeAll$),(0,L.K)(n=>(this.isLoading=!1,(0,z._)(()=>n))),(0,U.x)(()=>this.isLoading=!1)).subscribe(({data:n})=>{this.listData=n})}onSearch(){this.debounce$.next()}onClickAdd(){this._router.navigateByUrl(`${this._tenantService.currentTenantId}/companies/create`)}onRefreshData(){this.filter={textSearch:null,floorId:null,blockId:null,isUse:!0},this.getData()}clickDetail(n){this._router.navigate(["detail",n],{relativeTo:this._activatedRoute})}clickEdit(n){this._router.navigate(["edit",n],{relativeTo:this._activatedRoute})}}return a.\u0275fac=function(n){return new(n||a)(e.Y36(c.gz),e.Y36(J.J),e.Y36(O.g),e.Y36($.w),e.Y36(M.g),e.Y36(c.F0))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-company-list"]],decls:67,vars:57,consts:[[1,"flex","flex-col","flex-auto","w-full"],[1,"flex","flex-col"],[1,"flex","justify-between","items-center","bg-card","border-b","dark:bg-transparent","px-6","sm:py-5","md:px-8","gap-8"],[1,"leading-none","text-3xl","font-extrabold","tracking-tight"],[1,"space-x-4","flex","items-center"],["mat-flat-button","",1,"w-min",3,"color","click"],[3,"svgIcon"],["transloco","add",1,"ml-2"],["mat-icon-button","",3,"matTooltip","click"],["svgIcon","heroicons_outline:arrow-path",1,"text-slate-500"],[1,"bg-card","m-6","rounded-md","shadow"],[1,"p-6","space-y-6"],[1,"flex-col","flex","sm:flex-row","sm:justify-between"],[1,"flex","flex-col","w-full","h-full","space-y-6"],[1,"flex","gap-4"],["label","search",1,"flex-1",3,"model","isDisableLength","placeholder","modelChange","keyup"],["label","master.floor",1,"flex-1",3,"listData","model","modelChange"],["label","master.block",1,"flex-1",3,"listData","model","modelChange"],[1,"flex-1","flex","items-end"],["color","primary",1,"text-lg","font-medium",3,"ngModel","ngModelChange"],[1,"border-b","w-full"],["nzShowSizeChanger","","nzBordered","true",3,"nzLoading","nzData"],["basicTable",""],["nzWidth","111px","nzAlign","center"],["nzAlign","center","nzWidth","70px"],["nzWidth","115px"],["nzWidth","390px"],["class","hover:cursor-pointer",3,"dblclick",4,"ngFor","ngForOf"],[1,"hover:cursor-pointer",3,"dblclick"],[1,"flex","justify-center"],["mat-icon-button","",3,"matMenuTriggerFor"],["headerMenu",""],["mat-menu-item","",3,"click"],["svgIcon","heroicons_outline:eye"],[1,"h-full","flex","justify-center","items-center"],["nz-image","",1,"object-cover","max-h-10","w-26",3,"nzSrc"],[1,"max-w-360","truncate",3,"matTooltip"],[3,"matTooltip"]],template:function(n,t){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._uU(4),e.ALo(5,"transloco"),e.qZA(),e.TgZ(6,"div",4)(7,"button",5),e.NdJ("click",function(){return t.onClickAdd()}),e._UZ(8,"mat-icon",6)(9,"label",7),e.qZA(),e.TgZ(10,"button",8),e.NdJ("click",function(){return t.onRefreshData()}),e.ALo(11,"transloco"),e._UZ(12,"mat-icon",9),e.qZA()()()(),e.TgZ(13,"div",10)(14,"div",11)(15,"div",12)(16,"div",13)(17,"div",14)(18,"cm-input",15),e.NdJ("modelChange",function(o){return t.filter.textSearch=o})("keyup",function(){return t.onSearch()}),e.ALo(19,"transloco"),e.qZA(),e.TgZ(20,"cm-select",16),e.NdJ("modelChange",function(o){return t.filter.floorId=o})("modelChange",function(){return t.onSearch()}),e.qZA(),e.TgZ(21,"cm-select",17),e.NdJ("modelChange",function(o){return t.filter.blockId=o})("modelChange",function(){return t.onSearch()}),e.qZA(),e.TgZ(22,"div",18)(23,"mat-slide-toggle",19),e.NdJ("ngModelChange",function(o){return t.filter.isUse=o})("ngModelChange",function(){return t.onSearch()}),e._uU(24),e.ALo(25,"transloco"),e.qZA()()(),e._UZ(26,"div",20),e.qZA()(),e.TgZ(27,"div")(28,"nz-table",21,22)(30,"thead")(31,"tr")(32,"th",23),e._uU(33),e.ALo(34,"transloco"),e.qZA(),e.TgZ(35,"th",24),e._uU(36),e.ALo(37,"transloco"),e.qZA(),e.TgZ(38,"th"),e._uU(39),e.ALo(40,"transloco"),e.qZA(),e.TgZ(41,"th"),e._uU(42),e.ALo(43,"transloco"),e.qZA(),e.TgZ(44,"th"),e._uU(45),e.ALo(46,"transloco"),e.qZA(),e.TgZ(47,"th"),e._uU(48),e.ALo(49,"transloco"),e.qZA(),e.TgZ(50,"th"),e._uU(51),e.ALo(52,"transloco"),e.qZA(),e.TgZ(53,"th"),e._uU(54),e.ALo(55,"transloco"),e.qZA(),e.TgZ(56,"th"),e._uU(57),e.ALo(58,"transloco"),e.qZA(),e.TgZ(59,"th",25),e._uU(60),e.ALo(61,"transloco"),e.qZA(),e.TgZ(62,"th",26),e._uU(63),e.ALo(64,"transloco"),e.qZA()()(),e.TgZ(65,"tbody"),e.YNc(66,ie,39,25,"tr",27),e.qZA()()()()()()),2&n){const l=e.MAs(29);e.xp6(4),e.hij("",e.lcZ(5,27,"nav.companies")," "),e.xp6(3),e.Q6J("color","primary"),e.xp6(1),e.Q6J("svgIcon","add"),e.xp6(2),e.s9C("matTooltip",e.lcZ(11,29,"com.refresh")),e.xp6(8),e.s9C("placeholder",e.lcZ(19,31,"plHolder.searchCompanyName")),e.Q6J("model",t.filter.textSearch)("isDisableLength",!0),e.xp6(2),e.Q6J("listData",t.floorCodes)("model",t.filter.floorId),e.xp6(1),e.Q6J("listData",t.blockCodes)("model",t.filter.blockId),e.xp6(2),e.Q6J("ngModel",t.filter.isUse),e.xp6(1),e.hij(" ",e.lcZ(25,33,"used")," "),e.xp6(4),e.Q6J("nzLoading",t.isLoading)("nzData",t.listData),e.xp6(5),e.Oqu(e.lcZ(34,35,"master.function")),e.xp6(3),e.Oqu(e.lcZ(37,37,"master.no")),e.xp6(3),e.Oqu(e.lcZ(40,39,"logo")),e.xp6(3),e.Oqu(e.lcZ(43,41,"master.companyName")),e.xp6(3),e.Oqu(e.lcZ(46,43,"master.taxCode")),e.xp6(3),e.Oqu(e.lcZ(49,45,"master.companyPhoneNumber*")),e.xp6(3),e.Oqu(e.lcZ(52,47,"master.companyEmail")),e.xp6(3),e.Oqu(e.lcZ(55,49,"master.floor")),e.xp6(3),e.Oqu(e.lcZ(58,51,"master.block")),e.xp6(3),e.Oqu(e.lcZ(61,53,"master.employeeCapacity*")),e.xp6(3),e.Oqu(e.lcZ(64,55,"master.description")),e.xp6(3),e.Q6J("ngForOf",l.data)}},dependencies:[r.N8,r.Uo,r._C,r.Om,r.p0,r.$Z,r.UX,v.lW,v.RK,N.Hw,G.gM,b.JJ,b.On,h.KI,w.Ie,_.sg,K.Rr,Q.f,R.W,D.VK,D.OP,D.p6,j.F,h.Ot],encapsulation:2}),a})();var H=i(18505),T=i(96119),q=i(82004),X=i(92369),E=i(71683),Y=i(21352),P=i(8551),B=i(23697);const re=function(){return{width:"100%"}};function ce(a,s){if(1&a&&e._UZ(0,"img",32),2&a){const n=e.oxw();e.Q6J("src",n.previewImage,e.LSH)("ngStyle",e.DdM(2,re))}}const me=function(){return{showDownloadIcon:!1,showPreviewIcon:!0,showRemoveIcon:!0}};let de=(()=>{class a{constructor(n,t,l,o,d,g,Z,x,y){this._uploadService=n,this._companyService=t,this._fuseConfirmationService=l,this._translocoService=o,this._floorService=d,this._blockService=g,this._tenantService=Z,this._router=x,this._location=y,this.isLoading=!1,this._unsubscribeAll$=new A.x,this.req={companyCode:null,companyName:null,logo:null,isUse:!0},this.floorCodes=[],this.blockCodes=[],this.uploadUrl=this._uploadService.uploadUrl,this.deleteFileNz=this._uploadService.deleteFileNz,this.handlePreview=this._uploadService.handlePreview,this.imageFileLists=[],this.previewVisible=this._uploadService.previewVisible,this.previewImage=this._uploadService.previewImage}ngOnInit(){this._floorService.get({isUse:!0}).pipe((0,p.R)(this._unsubscribeAll$)).subscribe(({data:n})=>{this.floorCodes=n.map(t=>({id:t.floorId,name:t.floorName}))}),this._blockService.get({isUse:!0}).pipe((0,p.R)(this._unsubscribeAll$)).subscribe(({data:n})=>{this.blockCodes=n.map(t=>({id:t.blockId,name:t.blockName}))})}ngOnDestroy(){this._unsubscribeAll$.next(null),this._unsubscribeAll$.complete()}onSave(){this.isLoading=!0,(0,T.TF)(this.req.companyCode)||(0,T.TF)(this.req.companyName)?(0,q.tl)(this._fuseConfirmationService,"message.workOrderFormInvalid",2e3):(this.req.logo=this.imageFileLists[0]?.response?.data,this._companyService.add(this.req).pipe((0,p.R)(this._unsubscribeAll$),(0,L.K)(n=>(this.isLoading=!1,(0,z._)(()=>n))),(0,U.x)(()=>this.isLoading=!1),(0,H.b)(()=>{(0,q.Df)(this._fuseConfirmationService,"message.savedDataSuccessfully",2e3)})).subscribe(({success:n,data:t})=>{n&&this._router.navigateByUrl(`${this._tenantService.currentTenantId}/companies/detail/${t.companyId}`)}))}onCancel(){(0,q.WD)(this._fuseConfirmationService,this._translocoService.translate("message.confirmUnSaveChange"),this._translocoService.translate("message.unsavedChangesAreYouSure")).afterClosed().subscribe(n=>{"confirmed"==n&&this._location.back()})}}return a.\u0275fac=function(n){return new(n||a)(e.Y36(X.C),e.Y36(J.J),e.Y36(E.R),e.Y36(h.Vn),e.Y36($.w),e.Y36(M.g),e.Y36(O.g),e.Y36(c.F0),e.Y36(_.Ye))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-create-company"]],decls:52,vars:46,consts:[[1,"flex","flex-col","min-w-0","w-full","mb-6"],[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col"],[1,"flex","flex-col","gap-0","bg-card","dark:bg-transparent","mb-6","px-6","items-start","sm:pt-6","md:px-8"],[1,"flex","flex-col","flex-1","w-full","sm:flex-row","bg-card","dark:bg-transparent","items-start","sm:items-center","sm:justify-between","pb-5"],[1,"leading-none","text-3xl","font-bold","tracking-tight"],[1,"flex","md:flex-row","flex-col","md:gap-2.5","gap-2"],["mat-button","",3,"click"],["mat-flat-button","","color","primary",3,"disabled","click"],[1,"flex","flex-col","w-full","px-6","gap-4"],[1,"flex","flex-col","gap-6","p-6","bg-card","dark:bg-gray-900","rounded-md","shadow"],[1,"pb-4","flex","border-b"],[1,"text-xl","font-medium"],[1,"flex","flex-col","gap-2"],[1,"font-medium","leading-10"],["nzListType","picture-card","nzAccept","image/*",1,"flex",3,"nzAction","nzShowUploadList","nzRemove","nzMultiple","nzFileList","nzPreview","nzShowButton","nzFileListChange"],["nz-icon","","nzType","plus"],[2,"margin-top","8px"],[3,"nzVisible","nzContent","nzFooter","nzOnCancel"],["modalContent",""],[1,"flex","md:flex-row","flex-col","md:gap-4","gap-2.5"],["label","master.companyCode","isDisableLength","true",1,"flex-1","w-full",3,"model","isRequired","modelChange"],["label","master.companyName","isDisableLength","true",1,"flex-1","w-full",3,"model","isRequired","modelChange"],["label","master.taxCode","isDisableLength","true",1,"flex-1","w-full",3,"model","modelChange"],["label","master.companyPhoneNumber","isDisableLength","true",1,"flex-1","w-full",3,"model","modelChange"],["label","master.companyEmail","isDisableLength","true",1,"flex-1","w-full",3,"model","modelChange"],["label","master.floor",1,"flex-1","w-full",3,"model","listData","modelChange"],["label","master.block",1,"flex-1","w-full",3,"model","listData","modelChange"],[1,"flex-1"],["label","master.description","type","textarea","isDisableLength","true",1,"flex-1","w-full",3,"model","modelChange"],[1,"flex","md:flex-row","flex-col","md:gap-4","gap-2.5","items-center"],["color","primary",3,"ngModel","ngModelChange"],[3,"src","ngStyle"]],template:function(n,t){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"span",5),e._uU(6),e.ALo(7,"transloco"),e.qZA(),e.TgZ(8,"div",6)(9,"button",7),e.NdJ("click",function(){return t.onCancel()}),e.TgZ(10,"span"),e._uU(11),e.ALo(12,"transloco"),e.qZA()(),e.TgZ(13,"button",8),e.NdJ("click",function(){return t.onSave()}),e.TgZ(14,"span"),e._uU(15),e.ALo(16,"transloco"),e.qZA()()()()(),e.TgZ(17,"div",9)(18,"div",10)(19,"div",11)(20,"span",12),e._uU(21),e.ALo(22,"transloco"),e.qZA()(),e.TgZ(23,"div",13)(24,"mat-label",14),e._uU(25),e.ALo(26,"transloco"),e.qZA(),e.TgZ(27,"nz-upload",15),e.NdJ("nzFileListChange",function(o){return t.imageFileLists=o}),e.TgZ(28,"div"),e._UZ(29,"span",16),e.TgZ(30,"div",17),e._uU(31),e.ALo(32,"transloco"),e.qZA()()(),e.TgZ(33,"nz-modal",18),e.NdJ("nzOnCancel",function(){return t.previewVisible=!1}),e.YNc(34,ce,1,3,"ng-template",null,19,e.W1O),e.qZA()(),e.TgZ(36,"div",20)(37,"cm-input",21),e.NdJ("modelChange",function(o){return t.req.companyCode=o}),e.qZA(),e.TgZ(38,"cm-input",22),e.NdJ("modelChange",function(o){return t.req.companyName=o}),e.qZA(),e.TgZ(39,"cm-input",23),e.NdJ("modelChange",function(o){return t.req.taxCode=o}),e.qZA(),e.TgZ(40,"cm-input",24),e.NdJ("modelChange",function(o){return t.req.phoneNumber=o}),e.qZA()(),e.TgZ(41,"div",20)(42,"cm-input",25),e.NdJ("modelChange",function(o){return t.req.email=o}),e.qZA(),e.TgZ(43,"cm-select",26),e.NdJ("modelChange",function(o){return t.req.floorId=o}),e.qZA(),e.TgZ(44,"cm-select",27),e.NdJ("modelChange",function(o){return t.req.blockId=o}),e.qZA(),e._UZ(45,"div",28),e.qZA(),e.TgZ(46,"div",20)(47,"cm-input",29),e.NdJ("modelChange",function(o){return t.req.description=o}),e.qZA()(),e.TgZ(48,"div",30)(49,"mat-checkbox",31),e.NdJ("ngModelChange",function(o){return t.req.isUse=o}),e.qZA(),e._uU(50),e.ALo(51,"transloco"),e.qZA()()()()()()),2&n){const l=e.MAs(35);e.xp6(6),e.Oqu(e.lcZ(7,31,"nav.addCompany")),e.xp6(5),e.Oqu(e.lcZ(12,33,"cancel")),e.xp6(2),e.Q6J("disabled",t.isLoading),e.xp6(2),e.Oqu(e.lcZ(16,35,"save")),e.xp6(6),e.Oqu(e.lcZ(22,37,"master.general")),e.xp6(4),e.Oqu(e.lcZ(26,39,"nav.pictureUpload")),e.xp6(2),e.Q6J("nzAction",t.uploadUrl)("nzShowUploadList",e.DdM(45,me))("nzRemove",t.deleteFileNz)("nzMultiple",!0)("nzFileList",t.imageFileLists)("nzPreview",t.handlePreview)("nzShowButton",0==t.imageFileLists.length),e.xp6(4),e.Oqu(e.lcZ(32,41,"vime.pictureUpload")),e.xp6(2),e.Q6J("nzVisible",t.previewVisible)("nzContent",l)("nzFooter",null),e.xp6(4),e.Q6J("model",t.req.companyCode)("isRequired",!0),e.xp6(1),e.Q6J("model",t.req.companyName)("isRequired",!0),e.xp6(1),e.Q6J("model",t.req.taxCode),e.xp6(1),e.Q6J("model",t.req.phoneNumber),e.xp6(2),e.Q6J("model",t.req.email),e.xp6(1),e.Q6J("model",t.req.floorId)("listData",t.floorCodes),e.xp6(1),e.Q6J("model",t.req.blockId)("listData",t.blockCodes),e.xp6(3),e.Q6J("model",t.req.description),e.xp6(2),e.Q6J("ngModel",t.req.isUse),e.xp6(1),e.hij(" ",e.lcZ(51,43,"isRenting")," ")}},dependencies:[f.hX,u.oG,v.lW,b.JJ,b.On,_.PC,Q.f,R.W,Y.FY,P.du,B.Ls,h.Ot],encapsulation:2}),a})();var k=i(17489),pe=i(61135),ue=i(4707);let W=(()=>{class a{constructor(){this._isLoading$=new pe.X(!1),this._data$=new ue.t(1)}get data$(){return this._data$.asObservable()}get loading$(){return this._isLoading$.asObservable()}set data(n){this._data$.next(n)}set loading(n){this._isLoading$.next(n)}complete(){this._data$.complete()}}return a.\u0275fac=function(n){return new(n||a)},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac}),a})();var I=i(13617);function ge(a,s){if(1&a&&(e.TgZ(0,"a",26,27)(2,"span"),e._uU(3),e.ALo(4,"transloco"),e.qZA()()),2&a){const n=s.$implicit,t=e.MAs(1);e.Q6J("routerLink",n.path)("queryParams",n.query)("active",t.isActive),e.xp6(3),e.Oqu(e.lcZ(4,4,n.name))}}let he=(()=>{class a{constructor(n,t,l,o,d,g){this._companyService=n,this._router=t,this._activatedRoute=l,this._companyDetailService=o,this._fuseConfirmationService=d,this._translocoService=g,this._unsubscribeAll$=new A.x,this.isLoading=!1,this.data={companyCode:null,companyId:null,companyName:null,customers:[],isUse:!1}}initialTabs(){this.tabs=[{name:"master.generalInformation",path:"general"}]}ngOnInit(){this.initialTabs(),this._activatedRoute.paramMap.pipe((0,p.R)(this._unsubscribeAll$)).subscribe(n=>{n&&this.getById(n.get("companyId"))})}ngOnDestroy(){this._companyDetailService.complete(),this._unsubscribeAll$.next(),this._unsubscribeAll$.complete()}getById(n){this.isLoading=!0,this._companyDetailService.loading=this.isLoading,this._companyService.getById(n).pipe((0,p.R)(this._unsubscribeAll$),(0,L.K)(t=>(this.isLoading=!1,this._companyDetailService.loading=this.isLoading,(0,z._)(()=>t))),(0,U.x)(()=>{this.isLoading=!1,this._companyDetailService.loading=this.isLoading})).subscribe(({data:t})=>{t&&(this.data=(0,k.cloneDeep)({...t}),this._companyDetailService.data=(0,k.cloneDeep)({...t}))})}onBack(){this._router.navigate(["../.."],{relativeTo:this._activatedRoute})}onEdit(){this._router.navigate([`../../edit/${this.data.companyId}`],{relativeTo:this._activatedRoute})}}return a.\u0275fac=function(n){return new(n||a)(e.Y36(J.J),e.Y36(c.F0),e.Y36(c.gz),e.Y36(W),e.Y36(E.R),e.Y36(h.Vn))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-company-detail"]],features:[e._Bn([W])],decls:40,vars:13,consts:[[1,"flex","flex-col","min-w-0","w-full","mb-6"],[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col"],[1,"flex","flex-col","bg-card","dark:bg-transparent","p-6","pb-0","items-center","border-b"],[1,"flex","flex-row","items-center","justify-between","w-full"],[1,"flex","md:flex-row","gap-5"],["nz-image","",1,"h-20","w-20","object-contain",3,"nzSrc"],[1,"flex","gap-6"],[1,"flex","flex-col","gap-3","flex-1"],[1,"text-3xl","font-medium","tracking-tight"],[1,"flex","flex-col","sm:flex-row","space-x-3","w-full"],[1,"flex","gap-2","items-center"],["svgIcon","heroicons_solid:rectangle-stack",1,"icon-size-4"],[1,"px-2.5","justify-center","items-center","rounded","bg-slate-100"],[1,"text-slate-500","md","leading-6"],["svgIcon","heroicons_solid:swatch",1,"icon-size-4"],[1,"flex","md:flex-row","md:gap-2.5","gap-2"],["mat-flat-button","","color","accent",1,"gap-2",3,"click"],["svgIcon","heroicons_solid:arrow-uturn-left",1,"icon-size-5"],["mat-flat-button","","color","primary",1,"gap-2",3,"click"],["svgIcon","heroicons_solid:pencil",1,"icon-size-5"],[1,"z-10","relative","flex","flex-col","flex-0","w-full","bg-card"],["mat-tab-nav-bar","","mat-align-tabs","start","mat-stretch-tabs","false",1,"w-full",3,"tabPanel"],["class","px-6","routerLinkActive","","mat-tab-link","",3,"routerLink","queryParams","active",4,"ngFor","ngForOf"],["tabPanel",""],[1,"flex","p-6"],["routerLinkActive","","mat-tab-link","",1,"px-6",3,"routerLink","queryParams","active"],["rla","routerLinkActive"]],template:function(n,t){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),e._UZ(6,"img",6),e.TgZ(7,"div",7)(8,"div",8)(9,"div",9),e._uU(10),e.qZA(),e.TgZ(11,"div",10)(12,"div",11),e._UZ(13,"mat-icon",12),e.TgZ(14,"div",13)(15,"span",14),e._uU(16),e.qZA()()(),e.TgZ(17,"div",11),e._UZ(18,"mat-icon",15),e.TgZ(19,"div",13)(20,"span",14),e._uU(21),e.qZA()()()()()()(),e.TgZ(22,"div",16)(23,"button",17),e.NdJ("click",function(){return t.onBack()}),e._UZ(24,"mat-icon",18),e.TgZ(25,"span"),e._uU(26),e.ALo(27,"transloco"),e.qZA()(),e.TgZ(28,"button",19),e.NdJ("click",function(){return t.onEdit()}),e._UZ(29,"mat-icon",20),e.TgZ(30,"span"),e._uU(31),e.ALo(32,"transloco"),e.qZA()()()(),e.TgZ(33,"div",21)(34,"nav",22),e.YNc(35,ge,5,6,"a",23),e.qZA(),e._UZ(36,"mat-tab-nav-panel",null,24),e.qZA()(),e.TgZ(38,"div",25),e._UZ(39,"router-outlet"),e.qZA()()()()),2&n){const l=e.MAs(37);let o,d;e.xp6(6),e.Q6J("nzSrc",t.data.logo),e.xp6(4),e.AsE(" [",t.data.companyCode,"] ",t.data.companyName," "),e.xp6(6),e.hij(" ",null!==(o=t.data.floorName)&&void 0!==o?o:"_",""),e.xp6(5),e.hij(" ",null!==(d=t.data.blockName)&&void 0!==d?d:"_",""),e.xp6(5),e.Oqu(e.lcZ(27,9,"master.back")),e.xp6(5),e.Oqu(e.lcZ(32,11,"edit")),e.xp6(3),e.Q6J("tabPanel",l),e.xp6(1),e.Q6J("ngForOf",t.tabs)}},dependencies:[c.lC,c.rH,c.Od,v.lW,N.Hw,w.Ie,_.sg,I.BU,I.sW,I.Nj,j.F,h.Ot],encapsulation:2}),a})();var fe=i(3990);function _e(a,s){if(1&a&&(e.TgZ(0,"tr")(1,"td",21),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"img",22),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA()()),2&a){const n=s.$implicit,t=s.index;e.oxw();const l=e.MAs(70);e.xp6(2),e.Oqu((l.nzPageIndex-1)*l.nzPageSize+t+1),e.xp6(2),e.Q6J("nzSrc",n.avatar),e.xp6(2),e.hij(" ",n.fullName," "),e.xp6(2),e.hij(" ",n.phoneNumber," "),e.xp6(2),e.hij(" ",n.email," ")}}const ve=function(){return{width:"100%"}};function be(a,s){if(1&a&&e._UZ(0,"img",32),2&a){const n=e.oxw();e.Q6J("src",n.previewImage,e.LSH)("ngStyle",e.DdM(2,ve))}}const Ze=function(){return{showDownloadIcon:!1,showPreviewIcon:!0,showRemoveIcon:!0}},xe=[{path:"companies",component:ae,children:[{path:"",component:se},{path:"create",component:de},{path:"detail/:companyId",component:he,children:[{path:"",pathMatch:"full",redirectTo:"general"},{path:"general",component:(()=>{class a{constructor(n){this._companyDetailService=n,this._unsubscribeAll$=new A.x,this.isLoading=!1,this.data={companyCode:null,companyId:null,companyName:null,customers:[],isUse:!1}}initialTabs(){this.tabs=[{name:"master.generalInformation",path:":id"}]}ngOnInit(){this.initialTabs(),this._companyDetailService.loading$.pipe((0,p.R)(this._unsubscribeAll$)).subscribe(n=>this.isLoading=n),this._companyDetailService.data$.pipe((0,p.R)(this._unsubscribeAll$)).subscribe(n=>{n&&(this.data=(0,k.cloneDeep)({...n}))})}ngOnDestroy(){this._unsubscribeAll$.next(),this._unsubscribeAll$.complete()}}return a.\u0275fac=function(n){return new(n||a)(e.Y36(W))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-company-detail-general"]],decls:90,vars:61,consts:[[1,"flex","flex-1","flex-col","dark:bg-gray-900","rounded-md","gap-6"],[1,"flex","flex-1","flex-col","gap-6","p-6","bg-card","dark:bg-gray-900","rounded-md","shadow"],[1,"py-2","flex","border-b"],[1,"text-xl","font-medium"],[1,"flex","md:flex-row","flex-col","md:gap-4","gap-2.5"],[1,"flex","flex-1","flex-col","gap-2.5","md:gap-4"],[1,"flex-1","text-slate-500","font-medium"],[1,"flex-1"],[1,"flex-1","flex","items-center"],["color","primary",1,"w-10","h-10","-ml-2",3,"checked","readOnly"],[1,"text-secondary","font-medium"],[1,"flex","flex-col","md:gap-4","gap-2.5","pb-4"],[1,"mt-6","flex","flex-col","p-6","bg-card","dark:bg-gray-900","rounded-md","shadow"],[1,"flex","justify-between"],[1,"mt-4","mb-6","border-b"],[1,"flex","flex-row","gap-2"],["nzShowSizeChanger","","nzBordered","true","nzSize","small",1,"flex-1",3,"nzData","nzLoading"],["basicTable",""],["nzWidth","70px","nzAlign","center"],["width","112px"],[4,"ngFor","ngForOf"],["nzAlign","center"],["nz-image","",1,"object-cover","h-10","w-10","rounded-full",3,"nzSrc"]],template:function(n,t){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),e._uU(4),e.ALo(5,"transloco"),e.qZA()(),e.TgZ(6,"div",4)(7,"div",5)(8,"div",6),e._uU(9),e.ALo(10,"transloco"),e.qZA(),e.TgZ(11,"div",7),e._uU(12),e.qZA()(),e.TgZ(13,"div",5)(14,"div",6),e._uU(15),e.ALo(16,"transloco"),e.qZA(),e.TgZ(17,"div",7),e._uU(18),e.qZA()(),e.TgZ(19,"div",5)(20,"div",6),e._uU(21),e.ALo(22,"transloco"),e.qZA(),e.TgZ(23,"div",7),e._uU(24),e.qZA()(),e.TgZ(25,"div",5)(26,"div",6),e._uU(27),e.ALo(28,"transloco"),e.qZA(),e.TgZ(29,"div",7),e._uU(30),e.qZA()()(),e.TgZ(31,"div",4)(32,"div",5)(33,"div",6),e._uU(34),e.ALo(35,"transloco"),e.qZA(),e.TgZ(36,"div",7),e._uU(37),e.qZA()(),e.TgZ(38,"div",5)(39,"div",6),e._uU(40),e.ALo(41,"transloco"),e.qZA(),e.TgZ(42,"div",7),e._uU(43),e.qZA()(),e.TgZ(44,"div",5)(45,"div",6),e._uU(46),e.ALo(47,"transloco"),e.qZA(),e.TgZ(48,"div",7),e._uU(49),e.qZA()(),e.TgZ(50,"div",8),e._UZ(51,"mat-checkbox",9),e.TgZ(52,"span",10),e._uU(53),e.ALo(54,"transloco"),e.qZA()()(),e.TgZ(55,"div",11)(56,"div",6),e._uU(57),e.ALo(58,"transloco"),e.qZA(),e.TgZ(59,"div",7),e._uU(60),e.qZA()()(),e.TgZ(61,"div",12)(62,"div",13)(63,"div")(64,"span",3),e._uU(65),e.ALo(66,"transloco"),e.qZA()()(),e._UZ(67,"div",14),e.TgZ(68,"div",15)(69,"nz-table",16,17)(71,"thead")(72,"tr")(73,"th",18),e._uU(74),e.ALo(75,"transloco"),e.qZA(),e.TgZ(76,"th",19),e._uU(77),e.ALo(78,"transloco"),e.qZA(),e.TgZ(79,"th"),e._uU(80),e.ALo(81,"transloco"),e.qZA(),e.TgZ(82,"th"),e._uU(83),e.ALo(84,"transloco"),e.qZA(),e.TgZ(85,"th"),e._uU(86),e.ALo(87,"transloco"),e.qZA()()(),e.TgZ(88,"tbody"),e.YNc(89,_e,11,5,"tr",20),e.qZA()()()()()),2&n){const l=e.MAs(70);let o,d,g,Z,x,y,S,V;e.xp6(4),e.Oqu(e.lcZ(5,29,"master.general")),e.xp6(5),e.hij(" ",e.lcZ(10,31,"master.companyCode")," "),e.xp6(3),e.hij(" ",null!==(o=t.data.companyCode)&&void 0!==o?o:"_"," "),e.xp6(3),e.hij(" ",e.lcZ(16,33,"master.companyName")," "),e.xp6(3),e.hij(" ",null!==(d=t.data.companyName)&&void 0!==d?d:"_"," "),e.xp6(3),e.hij(" ",e.lcZ(22,35,"master.taxCode")," "),e.xp6(3),e.hij(" ",null!==(g=t.data.taxCode)&&void 0!==g?g:"_"," "),e.xp6(3),e.hij(" ",e.lcZ(28,37,"master.companyPhoneNumber")," "),e.xp6(3),e.hij(" ",null!==(Z=t.data.phoneNumber)&&void 0!==Z?Z:"_"," "),e.xp6(4),e.hij(" ",e.lcZ(35,39,"master.companyEmail")," "),e.xp6(3),e.hij(" ",null!==(x=t.data.email)&&void 0!==x?x:"_"," "),e.xp6(3),e.hij(" ",e.lcZ(41,41,"master.floor")," "),e.xp6(3),e.hij(" ",null!==(y=t.data.floorName)&&void 0!==y?y:"_"," "),e.xp6(3),e.hij(" ",e.lcZ(47,43,"master.block")," "),e.xp6(3),e.hij(" ",null!==(S=t.data.blockName)&&void 0!==S?S:"_"," "),e.xp6(2),e.Q6J("checked",t.data.isUse)("readOnly",!0),e.xp6(2),e.Oqu(e.lcZ(54,45,"isRenting")),e.xp6(4),e.hij(" ",e.lcZ(58,47,"system.description")," "),e.xp6(3),e.hij(" ",null!==(V=t.data.description)&&void 0!==V?V:"_"," "),e.xp6(5),e.Oqu(e.lcZ(66,49,"master.rentedCustomerList")),e.xp6(4),e.Q6J("nzData",t.data.customers)("nzLoading",t.isLoading),e.xp6(5),e.Oqu(e.lcZ(75,51,"no")),e.xp6(3),e.Oqu(e.lcZ(78,53,"master.avatar")),e.xp6(3),e.Oqu(e.lcZ(81,55,"master.fullName")),e.xp6(3),e.Oqu(e.lcZ(84,57,"master.phoneNumber")),e.xp6(3),e.Oqu(e.lcZ(87,59,"master.email")),e.xp6(3),e.Q6J("ngForOf",l.data)}},dependencies:[u.oG,r.N8,r.Uo,r._C,r.Om,r.p0,r.$Z,r.UX,w.Ie,_.sg,j.F,fe.i,h.Ot],encapsulation:2}),a})()}]},{path:"edit/:companyId",component:(()=>{class a{constructor(n,t,l,o,d,g,Z,x,y,S){this._activatedRoute=n,this._uploadService=t,this._companyService=l,this._fuseConfirmationService=o,this._translocoService=d,this._floorService=g,this._blockService=Z,this._tenantService=x,this._location=y,this._router=S,this.isLoading=!1,this._unsubscribeAll$=new A.x,this.data={companyCode:null,companyId:null,companyName:null,customers:[],isUse:!1},this.floorCodes=[],this.blockCodes=[],this.uploadUrl=this._uploadService.uploadUrl,this.deleteFileNz=this._uploadService.deleteFileNz,this.handlePreview=this._uploadService.handlePreview,this.imageFileLists=[],this.previewVisible=this._uploadService.previewVisible,this.previewImage=this._uploadService.previewImage}ngOnInit(){this._activatedRoute.paramMap.pipe((0,p.R)(this._unsubscribeAll$)).subscribe(n=>{n&&this.getById(n.get("companyId"))}),this._floorService.get({isUse:!0}).pipe((0,p.R)(this._unsubscribeAll$)).subscribe(({data:n})=>{this.floorCodes=n.map(t=>({id:t.floorId,name:t.floorName}))}),this._blockService.get({isUse:!0}).pipe((0,p.R)(this._unsubscribeAll$)).subscribe(({data:n})=>{this.blockCodes=n.map(t=>({id:t.blockId,name:t.blockName}))})}ngOnDestroy(){this._unsubscribeAll$.next(null),this._unsubscribeAll$.complete()}getById(n){this.isLoading=!0,this._companyService.getById(n).pipe((0,p.R)(this._unsubscribeAll$),(0,L.K)(t=>(this.isLoading=!1,(0,z._)(()=>t))),(0,U.x)(()=>{this.isLoading=!1})).subscribe(({data:t})=>{t&&(this.data=(0,k.cloneDeep)({...t}),(0,T.TF)(this.data.logo)||(this.imageFileLists=[{uid:`${this.imageFileLists.length}`,name:this.data.logo,status:"done",url:this.data.logo}]))})}onSave(){this.isLoading=!0,(0,T.TF)(this.data.companyCode)||(0,T.TF)(this.data.companyName)?(0,q.tl)(this._fuseConfirmationService,"message.workOrderFormInvalid",2e3):(this.data.logo=this.imageFileLists.length?(0,T.TF)(this.imageFileLists[0].url)?this.imageFileLists[0]?.response?.data:this.imageFileLists[0]?.url:null,this._companyService.update(this.data.companyId,this.data).pipe((0,p.R)(this._unsubscribeAll$),(0,L.K)(n=>(this.isLoading=!1,(0,z._)(()=>n))),(0,U.x)(()=>this.isLoading=!1),(0,H.b)(()=>{(0,q.Df)(this._fuseConfirmationService,this._translocoService.translate("message.savedDataSuccessfully"),3e3)})).subscribe(({success:n,data:t})=>{n&&this._router.navigateByUrl(`${this._tenantService.currentTenantId}/companies/detail/${t.companyId}`)}))}onCancel(){this._location.back()}}return a.\u0275fac=function(n){return new(n||a)(e.Y36(c.gz),e.Y36(X.C),e.Y36(J.J),e.Y36(E.R),e.Y36(h.Vn),e.Y36($.w),e.Y36(M.g),e.Y36(O.g),e.Y36(_.Ye),e.Y36(c.F0))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-create-edit"]],decls:52,vars:45,consts:[[1,"flex","flex-col","min-w-0","w-full","mb-6"],[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col"],[1,"flex","flex-col","gap-0","bg-card","dark:bg-transparent","mb-6","px-6","items-start","sm:pt-6","md:px-8"],[1,"flex","flex-col","flex-1","w-full","sm:flex-row","bg-card","dark:bg-transparent","items-start","sm:items-center","sm:justify-between","pb-5"],[1,"leading-none","text-3xl","font-bold","tracking-tight"],[1,"flex","md:flex-row","flex-col"],["mat-button","",3,"click"],["mat-flat-button","","color","primary",3,"disabled","click"],[1,"flex","flex-col","w-full","px-6","gap-4"],[1,"flex","flex-col","gap-6","p-6","bg-card","dark:bg-gray-900","rounded-md","shadow"],[1,"py-2","flex","border-b"],[1,"text-xl","font-medium"],[1,"flex","flex-col","gap-4"],[1,"font-medium","leading-10"],["nzListType","picture-card","nzAccept","image/*",1,"flex",3,"nzAction","nzShowUploadList","nzRemove","nzMultiple","nzFileList","nzShowButton","nzFileListChange"],["nz-icon","","nzType","plus"],[2,"margin-top","8px"],[3,"nzVisible","nzContent","nzFooter","nzOnCancel"],["modalContent",""],[1,"flex","md:flex-row","flex-col","md:gap-4","gap-2.5"],["label","master.companyCode","isDisableLength","true",1,"flex-1","w-full",3,"model","isRequired","modelChange"],["label","master.companyName","isDisableLength","true",1,"flex-1","w-full",3,"model","isRequired","modelChange"],["label","master.taxCode","isDisableLength","true",1,"flex-1","w-full",3,"model","modelChange"],["label","master.companyPhoneNumber","isDisableLength","true",1,"flex-1","w-full",3,"model","modelChange"],["label","master.companyEmail","isDisableLength","true",1,"flex-1","w-full",3,"model","modelChange"],["label","master.floor",1,"flex-1","w-full",3,"model","listData","modelChange"],["label","master.block",1,"flex-1","w-full",3,"model","listData","modelChange"],[1,"flex-1"],["label","master.description","type","textarea","isDisableLength","true",1,"flex-1","w-full",3,"model","modelChange"],[1,"flex","md:flex-row","flex-col","md:gap-4","gap-2.5","items-center"],["color","primary",3,"ngModel","ngModelChange"],[3,"src","ngStyle"]],template:function(n,t){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"span",5),e._uU(6),e.ALo(7,"transloco"),e.qZA(),e.TgZ(8,"div",6)(9,"button",7),e.NdJ("click",function(){return t.onCancel()}),e.TgZ(10,"span"),e._uU(11),e.ALo(12,"transloco"),e.qZA()(),e.TgZ(13,"button",8),e.NdJ("click",function(){return t.onSave()}),e.TgZ(14,"span"),e._uU(15),e.ALo(16,"transloco"),e.qZA()()()()(),e.TgZ(17,"div",9)(18,"div",10)(19,"div",11)(20,"span",12),e._uU(21),e.ALo(22,"transloco"),e.qZA()(),e.TgZ(23,"div",13)(24,"mat-label",14),e._uU(25),e.ALo(26,"transloco"),e.qZA(),e.TgZ(27,"nz-upload",15),e.NdJ("nzFileListChange",function(o){return t.imageFileLists=o}),e.TgZ(28,"div"),e._UZ(29,"span",16),e.TgZ(30,"div",17),e._uU(31),e.ALo(32,"transloco"),e.qZA()()(),e.TgZ(33,"nz-modal",18),e.NdJ("nzOnCancel",function(){return t.previewVisible=!1}),e.YNc(34,be,1,3,"ng-template",null,19,e.W1O),e.qZA()(),e.TgZ(36,"div",20)(37,"cm-input",21),e.NdJ("modelChange",function(o){return t.data.companyCode=o}),e.qZA(),e.TgZ(38,"cm-input",22),e.NdJ("modelChange",function(o){return t.data.companyName=o}),e.qZA(),e.TgZ(39,"cm-input",23),e.NdJ("modelChange",function(o){return t.data.taxCode=o}),e.qZA(),e.TgZ(40,"cm-input",24),e.NdJ("modelChange",function(o){return t.data.phoneNumber=o}),e.qZA()(),e.TgZ(41,"div",20)(42,"cm-input",25),e.NdJ("modelChange",function(o){return t.data.email=o}),e.qZA(),e.TgZ(43,"cm-select",26),e.NdJ("modelChange",function(o){return t.data.floorId=o}),e.qZA(),e.TgZ(44,"cm-select",27),e.NdJ("modelChange",function(o){return t.data.blockId=o}),e.qZA(),e._UZ(45,"div",28),e.qZA(),e.TgZ(46,"div",20)(47,"cm-input",29),e.NdJ("modelChange",function(o){return t.data.description=o}),e.qZA()(),e.TgZ(48,"div",30)(49,"mat-checkbox",31),e.NdJ("ngModelChange",function(o){return t.data.isUse=o}),e.qZA(),e._uU(50),e.ALo(51,"transloco"),e.qZA()()()()()()),2&n){const l=e.MAs(35);e.xp6(6),e.Oqu(e.lcZ(7,30,"nav.addCompany")),e.xp6(5),e.Oqu(e.lcZ(12,32,"cancel")),e.xp6(2),e.Q6J("disabled",t.isLoading),e.xp6(2),e.Oqu(e.lcZ(16,34,"save")),e.xp6(6),e.Oqu(e.lcZ(22,36,"master.general")),e.xp6(4),e.Oqu(e.lcZ(26,38,"nav.pictureUpload")),e.xp6(2),e.Q6J("nzAction",t.uploadUrl)("nzShowUploadList",e.DdM(44,Ze))("nzRemove",t.deleteFileNz)("nzMultiple",!0)("nzFileList",t.imageFileLists)("nzShowButton",0==t.imageFileLists.length),e.xp6(4),e.Oqu(e.lcZ(32,40,"vime.pictureUpload")),e.xp6(2),e.Q6J("nzVisible",t.previewVisible)("nzContent",l)("nzFooter",null),e.xp6(4),e.Q6J("model",t.data.companyCode)("isRequired",!0),e.xp6(1),e.Q6J("model",t.data.companyName)("isRequired",!0),e.xp6(1),e.Q6J("model",t.data.taxCode),e.xp6(1),e.Q6J("model",t.data.phoneNumber),e.xp6(2),e.Q6J("model",t.data.email),e.xp6(1),e.Q6J("model",t.data.floorId)("listData",t.floorCodes),e.xp6(1),e.Q6J("model",t.data.blockId)("listData",t.blockCodes),e.xp6(3),e.Q6J("model",t.data.description),e.xp6(2),e.Q6J("ngModel",t.data.isUse),e.xp6(1),e.hij(" ",e.lcZ(51,42,"isRenting")," ")}},dependencies:[f.hX,u.oG,v.lW,b.JJ,b.On,_.PC,Q.f,R.W,Y.FY,P.du,B.Ls,h.Ot],encapsulation:2}),a})()}]}];var ye=i(9436),ee=i(22497),Ae=i(33770),Te=i(92982),Le=i(3914);(0,_.qS)(Ae.Z);const ze={table:{nzBordered:!0,nzShowSizeChanger:!0,nzSize:"middle",nzShowQuickJumper:!0},image:{nzFallback:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-v52yldUi548vKbW8lSgCvEdj2pW4aMivFg&usqp=CAU"}};let Ue=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({providers:[{provide:ye.d_,useValue:ze},{provide:ee.u7,useValue:ee.iF}],imports:[c.Bz.forChild(xe),f.lN,m.c,u.p9,r.HQ,v.ot,N.Ps,G.AV,te.vO,ne.qw,b.u5,h.y4,w.Gb,_.ez,K.rP,oe.c,D.Tx,Y.cS,P.Qp,I.Nh,B.PV,Te.F,Le.G]}),a})()}}]);