"use strict";(self.webpackChunktukiweb=self.webpackChunktukiweb||[]).push([[818],{9274:(T,m,o)=>{o.r(m),o.d(m,{DescargoModule:()=>L});var t=o(6814),g=o(8368),f=o(95),l=o(7664),e=o(4946),v=o(2655);let b=(()=>{class r{constructor(){}ngOnInit(){this.items=[{label:"Gastos"},{label:"Descargos"}],this.home={icon:"pi pi-home",routerLink:"/"}}static#t=this.\u0275fac=function(s){return new(s||r)};static#e=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-gasto-descargo-main"]],decls:2,vars:2,consts:[[3,"model","home"]],template:function(s,i){1&s&&e._UZ(0,"p-breadcrumb",0)(1,"router-outlet"),2&s&&e.Q6J("model",i.items)("home",i.home)},dependencies:[v.a,l.lC],encapsulation:2})}return r})();var M=o(8528),x=o(6042),E=o(7757),y=o(1106),D=o(3259),Z=o(3714),O=o(5043),A=o(7492);const I=["gtableeditor"];function P(r,Q){if(1&r){const a=e.EpF();e.TgZ(0,"div",13)(1,"div",30)(2,"span",31)(3,"mo-autocomplete",32),e.NdJ("itemSelected",function(i){e.CHM(a);const u=e.oxw();return e.KtG(u.findcuentaevent(i))}),e.qZA()()()()}if(2&r){const a=e.oxw();e.xp6(3),e.Q6J("config",a.findcuentaconfig)}}let w=(()=>{class r{constructor(a,s,i,u){this.datasevice=a,this.confirmService=s,this.router=i,this.route=u,this.update=!1,this.findcuentaconfig={path:"/gastos/descargo/entidadctas",columns:["nombre","id","entidad.nombre"]},this.descargo=new M.G,this.tablecols=[{editable:!1,field:"id",columnName:"Id"},{editable:!0,field:"fecha",columnName:"Fecha",input:{type:"date"}},{editable:!0,field:"cuenta.nombre",columnName:"Cuenta",input:{type:"autocomplete",path:"/gastos/descargo/findcuenta",columns:["id","nombre","entidad.id","entidad.nombre"]}},{editable:!0,field:"catalogo.nombre",columnName:"Gasto",input:{type:"autocomplete",path:"/gastos/descargo/findcatalogo",columns:["id","nombre"]}},{editable:!0,field:"detalle",columnName:"Detalle",input:{type:"text"}},{editable:!0,field:"nronota",columnName:"Nro Nota",input:{type:"text"}},{editable:!0,field:"cantidad",columnName:"CANTIDAD",input:{type:"numeric",precision:"15",scale:"2"}},{editable:!0,field:"pu",columnName:"PU",align:"right",input:{type:"text"}},{editable:!1,field:"total",columnName:"Sub Total",align:"right"}]}ngOnInit(){let a=this.route.snapshot.paramMap.get("id");null!==a&&"0"!==a&&(this.update=!0,this.datasevice.getdata("/gastos/descargo/findbyid",{id:a}).subscribe(s=>{this.descargo=s,this.descargo.gastos.push(new x.j),this.tableeditor.updateData(this.descargo.gastos)}))}ngAfterViewInit(){}findcuentaevent(a){this.descargo.cuenta=a,this.descargo.gastos.length<=0&&this.descargo.gastos.push(new x.j),this.tableeditor.updateData(this.descargo.gastos)}enterValue(a){switch(a.field){case"cuenta.nombre":mosetfieldvalue(this.descargo.gastos[a.row],"cuenta.id",a.value.id),mosetfieldvalue(this.descargo.gastos[a.row],"cuenta.nombre",a.value.nombre);break;case"catalogo.nombre":mosetfieldvalue(this.descargo.gastos[a.row],"catalogo.id",a.value.id),mosetfieldvalue(this.descargo.gastos[a.row],"catalogo.nombre",a.value.nombre);break;default:mosetfieldvalue(this.descargo.gastos[a.row],a.field,a.value)}let s=this.descargo.gastos[a.row];if(0!==this.descargo.cuenta.id&&void 0!==s.fecha&&0!==s.cuenta.id&&0!==s.catalogo.id&&0!==s.cantidad&&0!==s.pu){let i=new M.G;i.id=this.descargo.id,i.cuenta.id=this.descargo.cuenta.id,i.gastos.push(new x.j),i.gastos[0].id=s.id,i.gastos[0].fecha=s.fecha,i.gastos[0].cuenta.id=s.cuenta.id,i.gastos[0].catalogo.id=s.catalogo.id,i.gastos[0].detalle=s.detalle,i.gastos[0].nronota=s.nronota,i.gastos[0].cantidad=s.cantidad,i.gastos[0].pu=s.pu,console.log("mander",i),this.datasevice.postdata("/gastos/descargo",i).subscribe(u=>{this.descargo.id=u.id,this.descargo.fecha=u.fecha,this.descargo.total=u.total,this.descargo.cuenta=u.cuenta,this.descargo.gastos[a.row]=u.gastos[0],this.tableeditor.addRow(new x.j,"id")})}}uploadFileSelected(a){this.selectedFile=a.target.files[0],this.confirmService.setconfirm({message:"Esta seguro cargar el archivo '"+this.selectedFile.name+"'?",accept:()=>{let i=new FormData;i.append("file",this.selectedFile,this.selectedFile.name),i.append("id",this.descargo.cuenta.id+""),this.datasevice.postdata("/gastos/descargo/upload",i).subscribe(u=>{this.descargo=u,this.update=!0,this.datasevice.getdata("/gastos/descargo/findbyid",{id:this.descargo.id}).subscribe(p=>{this.descargo=p,this.descargo.gastos.push(new x.j),this.tableeditor.updateData(this.descargo.gastos)})})}})}static#t=this.\u0275fac=function(s){return new(s||r)(e.Y36(E.D),e.Y36(y.I),e.Y36(l.F0),e.Y36(l.gz))};static#e=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-gastos-descargo-form"]],viewQuery:function(s,i){if(1&s&&e.Gf(I,7),2&s){let u;e.iGM(u=e.CRH())&&(i.tableeditor=u.first)}},decls:47,vars:6,consts:[[1,"mo-layout-content"],[1,"grid"],[1,"col-12"],[1,"card"],[1,"mo-toolsbar"],[1,"mo-first"],[1,"mo-second"],["for","fupload",1,"mo-input-file","mo-icons-center"],["pTooltip","Cargar archivo de excel",1,"mo-button"],[1,"material-icons-outlined"],["id","fupload","type","file",3,"change"],["type","button","routerLink","../../","pTooltip","Salir",1,"mo-button"],["class","p-fluid grid",4,"ngIf"],[1,"p-fluid","grid"],[1,"p-field","col-12","md:col-5"],[1,"p-float-label"],["type","text","id","entidadnombre","pInputText","","disabled","",3,"value"],["for","entidadnombre"],[1,"p-field","col-12","md:col-7"],["type","text","id","entidaddir","pInputText","","disabled","",3,"value"],["for","entidaddir"],["id","cuentanombre","type","text","pInputText","","disabled","",3,"value"],["for","cuentanombre"],["id","cuentadescripcion","type","text","pInputText","","disabled","",3,"value"],["for","cuentadescripcion"],[1,"p-field","col-12","md:col-6"],["type","text","id","gastofecha","pInputText","","disabled","","value","19/08/21"],["for","gastofecha"],[3,"columns","cellEnterValueEvent"],["gtableeditor",""],[1,"p-field","col-12"],[1,"p-float-label","p-input-icon-right"],[3,"config","itemSelected"]],template:function(s,i){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h2"),e._uU(7,"Formulario de descargo"),e.qZA()(),e.TgZ(8,"div",6)(9,"label",7)(10,"span",8)(11,"i",9),e._uU(12,"file_upload"),e.qZA()(),e.TgZ(13,"input",10),e.NdJ("change",function(p){return i.uploadFileSelected(p)}),e.qZA()(),e.TgZ(14,"button",11)(15,"i",9),e._uU(16,"arrow_back"),e.qZA()()()(),e.YNc(17,P,4,1,"div",12),e.TgZ(18,"div",13)(19,"div",14)(20,"span",15),e._UZ(21,"input",16),e.TgZ(22,"label",17),e._uU(23,"Entidad"),e.qZA()()(),e.TgZ(24,"div",18)(25,"span",15),e._UZ(26,"input",19),e.TgZ(27,"label",20),e._uU(28,"Direcci\xf3n"),e.qZA()()(),e.TgZ(29,"div",14)(30,"span",15),e._UZ(31,"input",21),e.TgZ(32,"label",22),e._uU(33,"Cuenta"),e.qZA()()(),e.TgZ(34,"div",18)(35,"span",15),e._UZ(36,"input",23),e.TgZ(37,"label",24),e._uU(38,"Descripci\xf3n"),e.qZA()()()(),e.TgZ(39,"div",13)(40,"div",25)(41,"span",15),e._UZ(42,"input",26),e.TgZ(43,"label",27),e._uU(44,"Fecha"),e.qZA()()()(),e.TgZ(45,"mo-tableeditor",28,29),e.NdJ("cellEnterValueEvent",function(p){return i.enterValue(p)}),e.qZA()()()()()),2&s&&(e.xp6(17),e.Q6J("ngIf",!i.update),e.xp6(4),e.Q6J("value",i.descargo.cuenta.entidad.id+" - "+i.descargo.cuenta.entidad.nombre),e.xp6(5),e.Q6J("value",i.descargo.cuenta.entidad.direccion),e.xp6(5),e.Q6J("value",i.descargo.cuenta.id+" - "+i.descargo.cuenta.nombre),e.xp6(5),e.Q6J("value",i.descargo.cuenta.descripcion),e.xp6(9),e.Q6J("columns",i.tablecols))},dependencies:[t.O5,l.rH,D.u,Z.o,O.O,A.J],encapsulation:2})}return r})();var c=o(707),h=o(156),n=o(1532);const _=[{path:"",component:b,children:[{path:"",component:(()=>{class r{constructor(a,s,i,u){this.dataService=a,this.router=s,this.route=i,this.confirmService=u,this.currentDate=new Date,this.list=[],this.columns=[{field:"id",columnName:"Id"},{field:"fecha",columnName:"Fecha"},{field:"cuenta.id",columnName:"Cuenta ID"},{field:"cuenta.nombre",columnName:"Cuenta Nombre"},{field:"cuenta.descripcion",columnName:"C Descripcion"},{field:"estado",columnName:"Estado"},{field:"total",columnName:"Total",align:"right"},{actions:[{icon:"pi pi-pencil",event:"modify",condition:p=>!0},{icon:"pi pi-trash",event:"delete",condition:p=>"PENDIENTE"===p.estado},{icon:"pi pi-money-bill",event:"realizar",condition:p=>"PENDIENTE"===p.estado},{icon:"pi pi-trash",event:"anular",condition:p=>"REALIZADO"===p.estado}]}]}ngOnInit(){this.getdata()}getdata(){this.dataService.getdata("/gastos/descargo/month",{date:this.currentDate}).subscribe(a=>{this.list=a})}actionDataTable(a){switch(a.event){case"modify":this.openForm(a.row.id);break;case"delete":this.confirmService.setconfirm({message:"Eliminar descargo '"+a.row.id+"'?",accept:()=>{this.dataService.deletedata("/gastos/descargo",{id:a.row.id}).subscribe(p=>{this.getdata()})}});break;case"realizar":this.confirmService.setconfirm({message:"Realizar gastos '"+a.row.id+"'?",accept:()=>{this.dataService.getdata("/gastos/descargo/realizar",{id:a.row.id}).subscribe(p=>{this.getdata()})}});break;case"anular":this.confirmService.setconfirm({message:"Anular gastos '"+a.row.id+"'?",accept:()=>{this.dataService.getdata("/gastos/descargo/anular",{id:a.row.id}).subscribe(p=>{this.getdata()})}})}}openForm(a){this.router.navigate(["form",a],{relativeTo:this.route})}onSelectedMonth(a){this.currentDate=a,this.getdata()}static#t=this.\u0275fac=function(s){return new(s||r)(e.Y36(E.D),e.Y36(l.F0),e.Y36(l.gz),e.Y36(y.I))};static#e=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-gastos-descargo-list"]],decls:14,vars:7,consts:[[1,"mo-layout-content"],[1,"grid"],[1,"col-12"],[1,"card"],[1,"mo-toolsbar"],[1,"mo-first"],[1,"mo-second"],["view","month","dateFormat","MM yy","inputId","dateformat",3,"ngModel","ngModelChange","onSelect"],["pButton","","pRipple","","type","button","icon","pi pi-plus","routerLink","form/0","pTooltip","Nuevo descargo",1,"p-button-rounded","p-button-text"],[1,"mo-panel-content"],[3,"datatable","columns","action"]],template:function(s,i){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h2"),e._uU(7),e.ALo(8,"date"),e.qZA()(),e.TgZ(9,"div",6)(10,"p-calendar",7),e.NdJ("ngModelChange",function(p){return i.currentDate=p})("onSelect",function(p){return i.onSelectedMonth(p)}),e.qZA(),e._UZ(11,"button",8),e.qZA()(),e.TgZ(12,"div",9)(13,"mo-table",10),e.NdJ("action",function(p){return i.actionDataTable(p)}),e.qZA()()()()()()),2&s&&(e.xp6(7),e.hij("Descargos Mensuales ",e.xi3(8,4,i.currentDate,"MMMM yyyy")," "),e.xp6(3),e.Q6J("ngModel",i.currentDate),e.xp6(3),e.Q6J("datatable",i.list)("columns",i.columns))},dependencies:[l.rH,D.u,c.Hq,f.JJ,f.On,h.I,n.f,t.uU],encapsulation:2})}return r})()},{path:"form/:id",component:w},{path:"**",redirectTo:""}]}];let C=(()=>{class r{static#t=this.\u0275fac=function(s){return new(s||r)};static#e=this.\u0275mod=e.oAB({type:r});static#o=this.\u0275inj=e.cJS({imports:[l.Bz.forChild(_),l.Bz]})}return r})();var F=o(3092),U=o(961);let N=(()=>{class r{constructor(){this.userDateFormat="dd/MMMM/yyyy"}static#t=this.\u0275fac=function(s){return new(s||r)};static#e=this.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac})}return r})();var J=o(1494);let L=(()=>{class r{static#t=this.\u0275fac=function(s){return new(s||r)};static#e=this.\u0275mod=e.oAB({type:r});static#o=this.\u0275inj=e.cJS({providers:[N],imports:[t.ez,g.U,C,f.u5,F.$,J.l,U.q,D.z,Z.j,n._8]})}return r})()},8555:(T,m,o)=>{o.d(m,{r:()=>f});var t=o(5289),g=o(698);class f{constructor(){this.id=0,this.entidad=new t.$,this.tipo="",this.nombre="",this.descripcion="",this.estado="ACTIVO",this.saldo=0,this.establecimiento=new g.A}}},5289:(T,m,o)=>{o.d(m,{$:()=>t});class t{constructor(){this.id=0,this.nombre="",this.direccion="",this.telefono=""}}},698:(T,m,o)=>{o.d(m,{A:()=>t});class t{constructor(){this.id="0",this.nombre="",this.descripcion="",this.estado="ACTIVO"}}},2743:(T,m,o)=>{o.d(m,{F:()=>f});var t=o(8555),g=o(8223);class f{constructor(){this.id=0,this.originAccount=new t.r,this.destinationAccount=new t.r,this.voucher=new g.c}}},8223:(T,m,o)=>{o.d(m,{c:()=>t});class t{constructor(){this.id=0,this.vdate=new Date,this.doccode=0,this.vtype="",this.agreement="",this.comment="",this.description="",this.amount=0,this.literal=""}}},156:(T,m,o)=>{o.d(m,{I:()=>w});var t=o(4946),g=o(6814),f=o(4621),l=o(2415);function e(c,h){if(1&c&&(t.TgZ(0,"th",5),t._uU(1),t.qZA()),2&c){const n=t.oxw(),d=n.index,_=n.$implicit,C=t.oxw();t.Udp("text-align",C.columns[d].align),t.xp6(1),t.hij("",_.columnName," ")}}function v(c,h){1&c&&t._UZ(0,"th",5)}function b(c,h){if(1&c&&(t.ynx(0),t.YNc(1,e,2,3,"th",3),t.YNc(2,v,1,0,"th",4),t.BQk()),2&c){const n=h.$implicit;t.xp6(1),t.Q6J("ngIf",n.field),t.xp6(1),t.Q6J("ngIf",!n.field)}}function M(c,h){if(1&c&&(t.ynx(0),t.TgZ(1,"th",5),t._uU(2),t.qZA(),t.BQk()),2&c){const n=h.$implicit,d=t.oxw(2);t.xp6(1),t.Udp("text-align",n.align),t.uIk("colspan",n.colspan),t.xp6(1),t.hij("",d.foot.content[n.index]," ")}}function x(c,h){if(1&c&&(t.TgZ(0,"tfoot")(1,"tr"),t.YNc(2,M,3,4,"ng-container",1),t.qZA()()),2&c){const n=t.oxw();t.xp6(2),t.Q6J("ngForOf",n.foot.cols)}}function E(c,h){if(1&c&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&c){const n=t.oxw().index,d=t.oxw().index,_=t.oxw();t.Udp("text-align",_.columns[n].align),t.xp6(1),t.Oqu(_.getfieldvalue(d,n))}}function y(c,h){if(1&c&&(t.TgZ(0,"td"),t._uU(1),t.ALo(2,"dateFormat"),t.qZA()),2&c){const n=t.oxw().index,d=t.oxw().index,_=t.oxw();t.Udp("text-align",_.columns[n].align),t.xp6(1),t.Oqu(t.lcZ(2,3,_.getfieldvalue(d,n)))}}function D(c,h){if(1&c&&(t.TgZ(0,"td"),t._uU(1),t.ALo(2,"datetimeFormat"),t.qZA()),2&c){const n=t.oxw().index,d=t.oxw().index,_=t.oxw();t.Udp("text-align",_.columns[n].align),t.xp6(1),t.Oqu(t.lcZ(2,3,_.getfieldvalue(d,n)))}}function Z(c,h){if(1&c){const n=t.EpF();t.TgZ(0,"a",8),t.NdJ("click",function(_){t.CHM(n);const C=t.oxw().$implicit,F=t.oxw(3).$implicit,U=t.oxw();return t.KtG(U.actionEvent(_,F,C.event))}),t._UZ(1,"i"),t.qZA()}if(2&c){const n=t.oxw().$implicit;t.xp6(1),t.Tol(n.icon)}}function O(c,h){if(1&c&&(t.ynx(0),t.YNc(1,Z,2,3,"a",7),t.BQk()),2&c){const n=h.$implicit,d=t.oxw(3).$implicit;t.xp6(1),t.Q6J("ngIf",n.condition(d))}}function A(c,h){if(1&c&&(t.TgZ(0,"td"),t.YNc(1,O,2,1,"ng-container",1),t.qZA()),2&c){const n=t.oxw().index,d=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",d.columns[n].actions)}}function I(c,h){if(1&c&&(t.ynx(0),t.YNc(1,E,2,3,"td",6),t.YNc(2,y,3,5,"td",6),t.YNc(3,D,3,5,"td",6),t.YNc(4,A,2,1,"td",2),t.BQk()),2&c){const n=h.index,d=t.oxw(2);t.xp6(1),t.Q6J("ngIf",d.columns[n].field&&void 0===d.columns[n].type),t.xp6(1),t.Q6J("ngIf",d.columns[n].field&&"date"===d.columns[n].type),t.xp6(1),t.Q6J("ngIf",d.columns[n].field&&"datetime"===d.columns[n].type),t.xp6(1),t.Q6J("ngIf",!d.columns[n].field)}}function P(c,h){if(1&c&&(t.TgZ(0,"tr"),t.YNc(1,I,5,4,"ng-container",1),t.qZA()),2&c){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.columns)}}let w=(()=>{class c{constructor(){this.fielddefault={align:"left"},this.action=new t.vpe}ngOnInit(){for(let n of this.columns)void 0!==n.field&&mosetdefaults(this.fielddefault,n)}getfieldvalue(n,d){return mogetfieldvalue(this.datatable[n],this.columns[d].field)}actionEvent(n,d,_){n.preventDefault(),this.action.emit({event:_,row:d})}static#t=this.\u0275fac=function(d){return new(d||c)};static#e=this.\u0275cmp=t.Xpm({type:c,selectors:[["mo-table"]],inputs:{datatable:"datatable",columns:"columns",foot:"foot"},outputs:{action:"action"},decls:8,vars:3,consts:[[1,"customers"],[4,"ngFor","ngForOf"],[4,"ngIf"],["scope","col",3,"text-align",4,"ngIf"],["scope","col",4,"ngIf"],["scope","col"],[3,"text-align",4,"ngIf"],["href","#",3,"click",4,"ngIf"],["href","#",3,"click"]],template:function(d,_){1&d&&(t.TgZ(0,"table",0),t._UZ(1,"caption"),t.TgZ(2,"thead")(3,"tr"),t.YNc(4,b,3,2,"ng-container",1),t.qZA()(),t.YNc(5,x,3,1,"tfoot",2),t.TgZ(6,"tbody"),t.YNc(7,P,2,1,"tr",1),t.qZA()()),2&d&&(t.xp6(4),t.Q6J("ngForOf",_.columns),t.xp6(1),t.Q6J("ngIf",_.foot),t.xp6(2),t.Q6J("ngForOf",_.datatable))},dependencies:[g.sg,g.O5,f.L,l.E],styles:[".customers[_ngcontent-%COMP%]{border-collapse:collapse;width:100%}.customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:4px}.customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f2f2}.customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#ddd}.customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-top:3px;padding-bottom:3px;text-align:center;background-color:#0059b3;color:#fff}"]})}return c})()},3092:(T,m,o)=>{o.d(m,{$:()=>l});var t=o(6814),g=o(9177),f=o(4946);let l=(()=>{class e{static#t=this.\u0275fac=function(M){return new(M||e)};static#e=this.\u0275mod=f.oAB({type:e});static#o=this.\u0275inj=f.cJS({imports:[t.ez,g.A]})}return e})()},2415:(T,m,o)=>{o.d(m,{E:()=>f});var t=o(4946),g=o(6814);let f=(()=>{class l{constructor(v){this.datePipe=v}transform(v,...b){return this.datePipe.transform(v,"dd/MM/yyyy")}static#t=this.\u0275fac=function(b){return new(b||l)(t.Y36(g.uU,16))};static#e=this.\u0275pipe=t.Yjl({name:"dateFormat",type:l,pure:!0})}return l})()},4621:(T,m,o)=>{o.d(m,{L:()=>f});var t=o(4946),g=o(6814);let f=(()=>{class l{constructor(v){this.datePipe=v}transform(v,...b){return this.datePipe.transform(v,"dd/MM/yyyy H:mm:ss")}static#t=this.\u0275fac=function(b){return new(b||l)(t.Y36(g.uU,16))};static#e=this.\u0275pipe=t.Yjl({name:"datetimeFormat",type:l,pure:!0})}return l})()},9177:(T,m,o)=>{o.d(m,{A:()=>f});var t=o(6814),g=o(4946);let f=(()=>{class l{static#t=this.\u0275fac=function(b){return new(b||l)};static#e=this.\u0275mod=g.oAB({type:l});static#o=this.\u0275inj=g.cJS({providers:[t.uU],imports:[t.ez]})}return l})()}}]);