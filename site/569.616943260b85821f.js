"use strict";(self.webpackChunktukiweb=self.webpackChunktukiweb||[]).push([[569],{8555:(b,g,i)=>{i.d(g,{r:()=>t});var c=i(5289),f=i(698);class t{constructor(){this.id=0,this.entidad=new c.$,this.tipo="",this.nombre="",this.descripcion="",this.estado="ACTIVO",this.saldo=0,this.establecimiento=new f.A}}},5289:(b,g,i)=>{i.d(g,{$:()=>c});class c{constructor(){this.id=0,this.nombre="",this.direccion="",this.telefono=""}}},3297:(b,g,i)=>{i.d(g,{y:()=>c});class c{constructor(){this.id=0,this.sid=0,this.str="",this.sstr="",this.dec=0,this.sdec=0,this.date=new Date,this.sdate=new Date,this.ordersby=[],this.limit=0,this.offset=0}}},7588:(b,g,i)=>{i.r(g),i.d(g,{GalponModule:()=>L});var c=i(6814),f=i(7664),t=i(4946);let d=(()=>{class a{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(o){return new(o||a)};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-galpon-main"]],decls:1,vars:0,template:function(o,e){1&o&&t._UZ(0,"router-outlet")},dependencies:[f.lC],encapsulation:2})}return a})();var v=i(5289),l=i(3297),s=i(7757),p=i(1106),m=i(3259),y=i(707),S=i(9324),A=i(7492),u=i(95),T=i(7773),N=i(3714),_=i(7213),Z=i(1532);function w(a,C){1&a&&(t.TgZ(0,"small",19),t._uU(1," No v\xe1\u013aido"),t.qZA())}function G(a,C){1&a&&(t.TgZ(0,"small",19),t._uU(1," No v\xe1\u013aido"),t.qZA())}function F(a,C){1&a&&(t.TgZ(0,"small",19),t._uU(1," No v\xe1\u013aido"),t.qZA())}const M=function(){return{width:"70vw"}},D=function(){return{"960px":"75vw"}};let I=(()=>{class a{constructor(n,o){this.formBuilder=n,this.dataService=o,this.formEvent=new t.vpe,this.display=!1,this.galpon=new T.e,this.form=this.formBuilder.group({nombre:["",u.kI.required],descripcion:["",u.kI.required],cantidad:[0,u.kI.min(.001)],fecha:[new Date,u.kI.required]})}ngOnInit(){}newForm(n){this.form.reset(),this.galpon=new T.e,this.galpon.cuenta.entidad=n,this.form.controls.fecha.setValue(new Date(this.galpon.fechainicio)),this.display=!0}updateform(n){this.galpon=n,this.form.reset(),this.form.controls.nombre.setValue(n.cuenta.nombre),this.form.controls.descripcion.setValue(n.cuenta.descripcion),this.form.controls.cantidad.setValue(n.cantidad),this.form.controls.fecha.setValue(new Date(this.galpon.fechainicio)),this.display=!0}submit(){let n=this.form.getRawValue();this.galpon.cuenta.nombre=n.nombre,this.galpon.cuenta.descripcion=n.descripcion,this.galpon.cantidad=n.cantidad,this.galpon.fechainicio=n.fecha,this.dataService.postdata("/plgalpon/galpon",this.galpon).subscribe(o=>{this.display=!1,this.formEvent.emit({})})}get nombre(){return this.form.get("nombre")}get descripcion(){return this.form.get("descripcion")}get cantidad(){return this.form.get("cantidad")}static#t=this.\u0275fac=function(o){return new(o||a)(t.Y36(u.QS),t.Y36(s.D))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["galpon-form"]],outputs:{formEvent:"formEvent"},decls:29,vars:17,consts:[["header","Registro de Galpon",3,"visible","modal","breakpoints","draggable","resizable","visibleChange"],[3,"formGroup","submit"],[1,"p-fluid","grid"],[1,"p-field","col-12","md:col-12","form-group"],["for","entidaddata"],[1,"input-control-info"],[1,"p-field","col-12","md:col-8","form-group"],["for","galnombre"],["type","text","id","galnombre","pInputText","","formControlName","nombre",1,"input-control"],["class","p-error",4,"ngIf"],[1,"p-field","col-12","md:col-4","form-group"],["for","galcantidad"],["type","text","id","galcantidad","pInputText","","formControlName","cantidad",1,"input-control"],["for","galfecha"],["appendTo","body","formControlName","fecha","dateFormat","dd MM yy","inputId","galfecha",1,"input-control"],["for","galdescripcion"],["type","text","id","galdescripcion","pInputText","","formControlName","descripcion",1,"input-control"],["type","submit","label","Guardar","styleClass","p-button-text",3,"disabled"],["type","button","label","Salir","styleClass","p-button-text",3,"click"],[1,"p-error"]],template:function(o,e){1&o&&(t.TgZ(0,"p-dialog",0),t.NdJ("visibleChange",function(h){return e.display=h}),t.TgZ(1,"form",1),t.NdJ("submit",function(){return e.submit()}),t.TgZ(2,"div",2)(3,"span",3)(4,"label",4),t._uU(5,"Entidad:"),t.qZA(),t.TgZ(6,"span",5),t._uU(7),t.qZA()(),t.TgZ(8,"div",6)(9,"label",7),t._uU(10,"Galpon:"),t.qZA(),t._UZ(11,"input",8),t.YNc(12,w,2,0,"small",9),t.qZA(),t.TgZ(13,"div",10)(14,"label",11),t._uU(15,"Cantidad:"),t.qZA(),t._UZ(16,"input",12),t.YNc(17,G,2,0,"small",9),t.qZA(),t.TgZ(18,"div",10)(19,"label",13),t._uU(20,"Fecha dia uno:"),t.qZA(),t._UZ(21,"p-calendar",14),t.qZA(),t.TgZ(22,"div",6)(23,"label",15),t._uU(24,"Descripcion:"),t.qZA(),t._UZ(25,"input",16),t.YNc(26,F,2,0,"small",9),t.qZA()(),t._UZ(27,"p-button",17),t.TgZ(28,"p-button",18),t.NdJ("click",function(){return e.display=!1}),t.qZA()()()),2&o&&(t.Akn(t.DdM(15,M)),t.Q6J("visible",e.display)("modal",!0)("breakpoints",t.DdM(16,D))("draggable",!1)("resizable",!0),t.xp6(1),t.Q6J("formGroup",e.form),t.xp6(6),t.lnq("",e.galpon.cuenta.entidad.id," - ",e.galpon.cuenta.entidad.nombre," ",e.galpon.cuenta.entidad.direccion,""),t.xp6(5),t.Q6J("ngIf",(null==e.nombre?null:e.nombre.invalid)&&((null==e.nombre?null:e.nombre.dirty)||(null==e.nombre?null:e.nombre.touched))),t.xp6(5),t.Q6J("ngIf",(null==e.cantidad?null:e.cantidad.invalid)&&((null==e.cantidad?null:e.cantidad.dirty)||(null==e.cantidad?null:e.cantidad.touched))),t.xp6(9),t.Q6J("ngIf",(null==e.descripcion?null:e.descripcion.invalid)&&((null==e.descripcion?null:e.descripcion.dirty)||(null==e.descripcion?null:e.descripcion.touched))),t.xp6(1),t.Q6J("disabled",e.form.invalid||0===e.galpon.cuenta.entidad.id))},dependencies:[c.O5,y.zx,N.o,u._Y,u.Fj,u.JJ,u.JL,_.V,u.sg,u.u,Z.f],encapsulation:2})}return a})();var E=i(9920),J=i(98);const U=["gec"];let P=(()=>{class a{constructor(n){this.dataService=n,this.display=!1,this.galpon=new T.e,this.onEvent=new t.vpe}ngOnInit(){}open(n){this.gec.open(n),this.display=!0}close(){this.display=!1,this.onEvent.emit({})}print(){}static#t=this.\u0275fac=function(o){return new(o||a)(t.Y36(s.D))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["galpon-estado"]],viewQuery:function(o,e){if(1&o&&t.Gf(U,7),2&o){let r;t.iGM(r=t.CRH())&&(e.gec=r.first)}},outputs:{onEvent:"onEvent"},decls:14,vars:1,consts:[[1,"mo-layout-content",3,"hidden"],[1,"grid"],[1,"col-12"],[1,"card"],[1,"mo-toolsbar"],[1,"mo-first"],[1,"mo-second"],["pButton","","pRipple","","type","button","icon","pi pi-arrow-left","pTooltip","Salir",1,"p-button-rounded","p-button-text",3,"click"],["pButton","","pRipple","","type","button","icon","pi pi-print","pTooltip","Imprimir","printSectionId","holahola","ngxPrint","","styleSheetFile","assets/css/print.css",1,"p-button-rounded","p-button-text"],["id","holahola",1,"mo-panel-content"],["gec",""]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h2"),t._uU(7,"ESTADO DE CUENTA (GALPON)"),t.qZA()(),t.TgZ(8,"div",6)(9,"button",7),t.NdJ("click",function(){return e.close()}),t.qZA(),t._UZ(10,"button",8),t.qZA()(),t.TgZ(11,"div",9),t._UZ(12,"galpon-estado-cuenta",null,10),t.qZA()()()()()),2&o&&t.Q6J("hidden",!e.display)},dependencies:[m.u,y.Hq,E.I,J.R],encapsulation:2})}return a})();const B=["form"],O=["galponestado"],k=[{path:"",component:d,children:[{path:"",component:(()=>{class a{constructor(n,o){this.dataService=n,this.confirmService=o,this.display=!0,this.entidad=new v.$,this.report={content:[],columns:[{field:"cuenta.id",columnName:"Id"},{field:"cuenta.nombre",columnName:"Nombre"},{field:"cantidad",columnName:"Nro Pollos"},{field:"fechainicio",columnName:"Inicio",type:"date"},{field:"cuenta.saldo",columnName:"Saldo",align:"right"},{actions:[{iconclass:"pi pi-pencil",event:"modify",condition:e=>!0},{iconclass:"pi pi-table",event:"galponestado",condition:e=>!0}]}]},this.entidadconfig={path:"/plgalpon/galpon/entidades",columns:["id","nombre","direccion"]}}ngOnInit(){}openNewForm(){this.form.newForm(this.entidad)}openModifyForm(n){this.form.updateform(n)}formEvent(n){this.getdata()}getdata(){var n=new l.y;n.id=this.entidad.id,n.ordersby=["cu.id desc"],this.dataService.postdata("/plgalpon/galpon/galpones",n).subscribe(o=>{console.log("res:",o),this.report.content=o,console.log("content:",this.report.content)})}autocompleteSelected(n){this.entidad=n,this.getdata()}tableAction(n){switch(n.event){case"modify":this.openModifyForm(n.row);break;case"galponestado":this.galponestado.open(n.row),this.display=!1}}galponEstadoEvent(n){this.display=!0}static#t=this.\u0275fac=function(o){return new(o||a)(t.Y36(s.D),t.Y36(p.I))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["galpon-manage"]],viewQuery:function(o,e){if(1&o&&(t.Gf(B,7),t.Gf(O,7)),2&o){let r;t.iGM(r=t.CRH())&&(e.form=r.first),t.iGM(r=t.CRH())&&(e.galponestado=r.first)}},decls:24,vars:6,consts:[[1,"mo-layout-content",3,"hidden"],[1,"grid"],[1,"col-12"],[1,"card"],[1,"mo-toolsbar"],[1,"mo-first"],[1,"mo-second","form-group"],["for","entidad"],["id","entidad",3,"config","itemSelected"],["pButton","","pRipple","","type","button","icon","pi pi-plus","pTooltip","Registrar Transporte",1,"p-button-rounded","p-button-text",3,"click"],[1,"mo-panel-content"],[1,"form-group"],["for","entidaddata"],[1,"input-control-info"],[3,"data","action"],[3,"onEvent"],["galponestado",""],[3,"formEvent"],["form",""]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h2"),t._uU(7,"Listado de galpones"),t.qZA()(),t.TgZ(8,"div",6)(9,"label",7),t._uU(10,"Buscar entidad:"),t.qZA(),t.TgZ(11,"mo-autocomplete",8),t.NdJ("itemSelected",function(h){return e.autocompleteSelected(h)}),t.qZA(),t.TgZ(12,"button",9),t.NdJ("click",function(){return e.openNewForm()}),t.qZA()()(),t.TgZ(13,"div",10)(14,"span",11)(15,"label",12),t._uU(16,"Entidad:"),t.qZA(),t.TgZ(17,"span",13),t._uU(18),t.qZA()(),t.TgZ(19,"mo-report",14),t.NdJ("action",function(h){return e.tableAction(h)}),t.qZA()()()()()(),t.TgZ(20,"galpon-estado",15,16),t.NdJ("onEvent",function(h){return e.galponEstadoEvent(h)}),t.qZA(),t.TgZ(22,"galpon-form",17,18),t.NdJ("formEvent",function(h){return e.formEvent(h)}),t.qZA()),2&o&&(t.Q6J("hidden",!e.display),t.xp6(11),t.Q6J("config",e.entidadconfig),t.xp6(7),t.lnq("",e.entidad.id," - ",e.entidad.nombre," ",e.entidad.direccion,""),t.xp6(1),t.Q6J("data",e.report))},dependencies:[m.u,y.Hq,S.t,A.J,I,P],encapsulation:2})}return a})()},{path:"**",redirectTo:""}]}];let Q=(()=>{class a{static#t=this.\u0275fac=function(o){return new(o||a)};static#e=this.\u0275mod=t.oAB({type:a});static#n=this.\u0275inj=t.cJS({imports:[f.Bz.forChild(k),f.Bz]})}return a})();var R=i(8368),$=i(2454),H=i(4553),V=i(7799);let L=(()=>{class a{static#t=this.\u0275fac=function(o){return new(o||a)};static#e=this.\u0275mod=t.oAB({type:a});static#n=this.\u0275inj=t.cJS({imports:[c.ez,Q,R.U,H.W,$.q,_.S,u.UX,Z._8,E.K,V.d]})}return a})()},9920:(b,g,i)=>{i.d(g,{I:()=>f,K:()=>t});var c=i(4946);let f=(()=>{class d{constructor(){this._printStyle=[],this.previewOnly=!1,this.useExistingCss=!1,this.printDelay=0,this._styleSheetFile=""}set printStyle(l){for(let s in l)l.hasOwnProperty(s)&&this._printStyle.push((s+JSON.stringify(l[s])).replace(/['"]+/g,""));this.returnStyleValues()}returnStyleValues(){return`<style> ${this._printStyle.join(" ").replace(/,/g,";")} </style>`}set styleSheetFile(l){let s=function(p){return`<link rel="stylesheet" type="text/css" href="${p}">`};if(-1!==l.indexOf(",")){const p=l.split(",");for(let m of p)this._styleSheetFile=this._styleSheetFile+s(m)}else this._styleSheetFile=s(l)}returnStyleSheetLinkTags(){return this._styleSheetFile}getElementTag(l){const s=[],p=document.getElementsByTagName(l);for(let m=0;m<p.length;m++)s.push(p[m].outerHTML);return s.join("\r\n")}getFormData(l){for(var s=0;s<l.length;s++)l[s].defaultValue=l[s].value,l[s].checked&&(l[s].defaultChecked=!0)}getHtmlContents(){let l=document.getElementById(this.printSectionId),s=l.getElementsByTagName("input");this.getFormData(s);let p=l.getElementsByTagName("textarea");return this.getFormData(p),l.innerHTML}print(){let l,s,p="",m="";const y=this.getElementTag("base");this.useExistingCss&&(p=this.getElementTag("style"),m=this.getElementTag("link")),l=this.getHtmlContents(),s=window.open("","_blank","top=0,left=0,height=auto,width=auto"),s.document.open(),s.document.write(`\n      <html>\n        <head>\n          <title>${this.printTitle?this.printTitle:""}</title>\n          ${y}\n          ${this.returnStyleValues()}\n          ${this.returnStyleSheetLinkTags()}\n          ${p}\n          ${m}\n        </head>\n        <body>\n          ${l}\n          <script defer>\n            function triggerPrint(event) {\n              window.removeEventListener('load', triggerPrint, false);\n              ${this.previewOnly?"":`setTimeout(function() {\n                closeWindow(window.print());\n              }, ${this.printDelay});`}\n            }\n            function closeWindow(){\n                window.close();\n            }\n            window.addEventListener('load', triggerPrint, false);\n          <\/script>\n        </body>\n      </html>`),s.document.close()}}return d.\u0275fac=function(l){return new(l||d)},d.\u0275dir=c.lG2({type:d,selectors:[["button","ngxPrint",""]],hostBindings:function(l,s){1&l&&c.NdJ("click",function(){return s.print()})},inputs:{previewOnly:"previewOnly",printSectionId:"printSectionId",printTitle:"printTitle",useExistingCss:"useExistingCss",printDelay:"printDelay",printStyle:"printStyle",styleSheetFile:"styleSheetFile"}}),d})(),t=(()=>{class d{}return d.\u0275fac=function(l){return new(l||d)},d.\u0275mod=c.oAB({type:d}),d.\u0275inj=c.cJS({}),d})()}}]);