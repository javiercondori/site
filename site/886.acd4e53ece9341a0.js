"use strict";(self.webpackChunktukiweb=self.webpackChunktukiweb||[]).push([[886],{1886:(v,u,a)=>{a.r(u),a.d(u,{GastoscuentasModule:()=>S});var t=a(6814),p=a(7664),n=a(4946),h=a(2655);let g=(()=>{class l{constructor(){}ngOnInit(){this.items=[{label:"Gastos"},{label:"Cuentas"}],this.home={icon:"pi pi-home",routerLink:"/"}}static#t=this.\u0275fac=function(r){return new(r||l)};static#n=this.\u0275cmp=n.Xpm({type:l,selectors:[["gcuentas-main"]],decls:2,vars:2,consts:[[3,"model","home"]],template:function(r,i){1&r&&n._UZ(0,"p-breadcrumb",0)(1,"router-outlet"),2&r&&n.Q6J("model",i.items)("home",i.home)},dependencies:[p.lC,h.a],encapsulation:2})}return l})();var x=a(7757),C=a(1106),b=a(3259),M=a(707),y=a(156),_=a(95),Z=a(8555),E=a(3714),O=a(7492),A=a(7213);function I(l,G){if(1&l){const s=n.EpF();n.TgZ(0,"div",15)(1,"span",5)(2,"mo-autocomplete",16),n.NdJ("itemSelected",function(i){n.CHM(s);const f=n.oxw();return n.KtG(f.autocompleteSelected(i))}),n.qZA()()()}if(2&l){const s=n.oxw();n.xp6(2),n.Q6J("config",s.entidadconfig)}}function N(l,G){1&l&&(n.TgZ(0,"small",17),n._uU(1," No v\xe1\u013aido"),n.qZA())}function w(l,G){1&l&&(n.TgZ(0,"small",17),n._uU(1," No v\xe1\u013aido"),n.qZA())}const o=function(){return{width:"70vw"}},d=function(){return{"960px":"75vw"}};let e=(()=>{class l{constructor(s,r){this.formBuilder=s,this.dataService=r,this.formSaveEvent=new n.vpe,this.display=!1,this.cuentagastos=new Z.r,this.entidadconfig={path:"/proveedores/proveedor/entidades",columns:["id","nombre","direccion"]},this.form=this.formBuilder.group({nombre:["",_.kI.required],descripcion:["",_.kI.required]})}ngOnInit(){}newForm(){this.form.reset(),this.cuentagastos=new Z.r,this.display=!0}updateform(s){this.cuentagastos=s,this.form.controls.nombre.setValue(s.nombre),this.form.controls.descripcion.setValue(s.descripcion),this.display=!0}submit(){let s=this.form.getRawValue();this.cuentagastos.nombre=s.nombre,this.cuentagastos.descripcion=s.descripcion,this.dataService.postdata("/gastos/cuentas",this.cuentagastos).subscribe(r=>{this.display=!1,this.formSaveEvent.emit()})}get nombre(){return this.form.get("nombre")}get descripcion(){return this.form.get("descripcion")}autocompleteSelected(s){this.cuentagastos.entidad=s}static#t=this.\u0275fac=function(r){return new(r||l)(n.Y36(_.QS),n.Y36(x.D))};static#n=this.\u0275cmp=n.Xpm({type:l,selectors:[["gcuentas-form"]],outputs:{formSaveEvent:"formSaveEvent"},decls:23,vars:15,consts:[["header","Registro Cuenta de Gastos",3,"visible","modal","breakpoints","draggable","resizable","visibleChange"],[3,"formGroup","submit"],[1,"p-fluid","grid"],["class","p-field col-12",4,"ngIf"],[1,"p-field","col-12","md:col-12"],[1,"p-float-label"],["type","text","id","entidaddata","pInputText","","disabled","",3,"value"],["for","entidadnombre"],["type","text","id","provnombre","pInputText","","formControlName","nombre"],["for","provnombre"],["class","p-error",4,"ngIf"],["type","text","id","provdescripcion","pInputText","","formControlName","descripcion"],["for","provdescripcion"],["type","submit","label","Guardar","styleClass","p-button-text",3,"disabled"],["type","button","label","Salir","styleClass","p-button-text",3,"click"],[1,"p-field","col-12"],[3,"config","itemSelected"],[1,"p-error"]],template:function(r,i){1&r&&(n.TgZ(0,"p-dialog",0),n.NdJ("visibleChange",function(U){return i.display=U}),n.TgZ(1,"form",1),n.NdJ("submit",function(){return i.submit()}),n.TgZ(2,"div",2),n.YNc(3,I,3,1,"div",3),n.TgZ(4,"div",4)(5,"span",5),n._UZ(6,"input",6),n.TgZ(7,"label",7),n._uU(8,"Entidad"),n.qZA()()(),n.TgZ(9,"div",4)(10,"span",5),n._UZ(11,"input",8),n.TgZ(12,"label",9),n._uU(13,"Nombre:"),n.qZA(),n.YNc(14,N,2,0,"small",10),n.qZA()(),n.TgZ(15,"div",4)(16,"span",5),n._UZ(17,"input",11),n.TgZ(18,"label",12),n._uU(19,"Descripcion:"),n.qZA(),n.YNc(20,w,2,0,"small",10),n.qZA()()(),n._UZ(21,"p-button",13),n.TgZ(22,"p-button",14),n.NdJ("click",function(){return i.display=!1}),n.qZA()()()),2&r&&(n.Akn(n.DdM(13,o)),n.Q6J("visible",i.display)("modal",!0)("breakpoints",n.DdM(14,d))("draggable",!1)("resizable",!0),n.xp6(1),n.Q6J("formGroup",i.form),n.xp6(2),n.Q6J("ngIf",0===i.cuentagastos.id),n.xp6(3),n.Q6J("value",i.cuentagastos.entidad.id+" | "+i.cuentagastos.entidad.nombre+" | "+i.cuentagastos.entidad.direccion),n.xp6(8),n.Q6J("ngIf",(null==i.nombre?null:i.nombre.invalid)&&((null==i.nombre?null:i.nombre.dirty)||(null==i.nombre?null:i.nombre.touched))),n.xp6(6),n.Q6J("ngIf",(null==i.descripcion?null:i.descripcion.invalid)&&((null==i.descripcion?null:i.descripcion.dirty)||(null==i.descripcion?null:i.descripcion.touched))),n.xp6(1),n.Q6J("disabled",i.form.invalid||0===i.cuentagastos.entidad.id))},dependencies:[t.O5,M.zx,E.o,_._Y,_.Fj,_.JJ,_.JL,O.J,_.sg,_.u,A.V],encapsulation:2})}return l})();const c=["form"],T=[{path:"",component:g,children:[{path:"",component:(()=>{class l{constructor(s,r){this.dataService=s,this.confirmService=r,this.list=[],this.columns=[{field:"id",columnName:"Id"},{field:"nombre",columnName:"Nombre"},{field:"descripcion",columnName:"Descripcion"},{field:"estado",columnName:"Estado"},{field:"saldo",columnName:"Saldo",align:"right"},{actions:[{icon:"pi pi-pencil",event:"modify",condition:i=>!0},{icon:"pi pi-trash",event:"delete",condition:i=>!0}]}]}ngOnInit(){this.getdata()}openNewForm(){this.form.newForm()}openModifyForm(s){this.form.updateform(s)}saveForm(){this.getdata()}getdata(){this.dataService.getdata("/gastos/cuentas",{}).subscribe(s=>{this.list=s})}tableAction(s){switch(s.event){case"modify":this.openModifyForm(s.row);break;case"delete":this.confirmService.setconfirm({message:"Eliminar el Cuenta de Gastos '"+s.row.nombre+"'?",accept:()=>{this.dataService.deletedata("/gastos/cuentas",{id:s.row.id}).subscribe(i=>{this.getdata()})}})}}static#t=this.\u0275fac=function(r){return new(r||l)(n.Y36(x.D),n.Y36(C.I))};static#n=this.\u0275cmp=n.Xpm({type:l,selectors:[["gcuentas-manage"]],viewQuery:function(r,i){if(1&r&&n.Gf(c,7),2&r){let f;n.iGM(f=n.CRH())&&(i.form=f.first)}},decls:14,vars:2,consts:[[1,"mo-layout-content"],[1,"grid"],[1,"col-12"],[1,"card"],[1,"mo-toolsbar"],[1,"mo-first"],[1,"mo-second"],["pButton","","pRipple","","type","button","icon","pi pi-plus","pTooltip","Nueva Cuena de Gastos",1,"p-button-rounded","p-button-text",3,"click"],[1,"mo-panel-content"],[3,"datatable","columns","action"],[3,"formSaveEvent"],["form",""]],template:function(r,i){1&r&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h2"),n._uU(7,"Cuentas de Gastos"),n.qZA()(),n.TgZ(8,"div",6)(9,"button",7),n.NdJ("click",function(){return i.openNewForm()}),n.qZA()()(),n.TgZ(10,"div",8)(11,"mo-table",9),n.NdJ("action",function(U){return i.tableAction(U)}),n.qZA()()()()(),n.TgZ(12,"gcuentas-form",10,11),n.NdJ("formSaveEvent",function(){return i.saveForm()}),n.qZA()()),2&r&&(n.xp6(11),n.Q6J("datatable",i.list)("columns",i.columns))},dependencies:[b.u,M.Hq,y.I,e],encapsulation:2})}return l})()},{path:"**",redirectTo:""}]}];let J=(()=>{class l{static#t=this.\u0275fac=function(r){return new(r||l)};static#n=this.\u0275mod=n.oAB({type:l});static#e=this.\u0275inj=n.cJS({imports:[p.Bz.forChild(T),p.Bz]})}return l})();var F=a(8368),Q=a(3092),P=a(961);let S=(()=>{class l{static#t=this.\u0275fac=function(r){return new(r||l)};static#n=this.\u0275mod=n.oAB({type:l});static#e=this.\u0275inj=n.cJS({imports:[t.ez,J,F.U,Q.$,P.q,_.UX,A.S]})}return l})()},8555:(v,u,a)=>{a.d(u,{r:()=>n});var t=a(5289),p=a(698);class n{constructor(){this.id=0,this.entidad=new t.$,this.tipo="",this.nombre="",this.descripcion="",this.estado="ACTIVO",this.saldo=0,this.establecimiento=new p.A}}},5289:(v,u,a)=>{a.d(u,{$:()=>t});class t{constructor(){this.id=0,this.nombre="",this.direccion="",this.telefono=""}}},698:(v,u,a)=>{a.d(u,{A:()=>t});class t{constructor(){this.id="0",this.nombre="",this.descripcion="",this.estado="ACTIVO"}}},156:(v,u,a)=>{a.d(u,{I:()=>w});var t=a(4946),p=a(6814),n=a(4621),h=a(2415);function g(o,d){if(1&o&&(t.TgZ(0,"th",5),t._uU(1),t.qZA()),2&o){const e=t.oxw(),c=e.index,m=e.$implicit,T=t.oxw();t.Udp("text-align",T.columns[c].align),t.xp6(1),t.hij("",m.columnName," ")}}function x(o,d){1&o&&t._UZ(0,"th",5)}function C(o,d){if(1&o&&(t.ynx(0),t.YNc(1,g,2,3,"th",3),t.YNc(2,x,1,0,"th",4),t.BQk()),2&o){const e=d.$implicit;t.xp6(1),t.Q6J("ngIf",e.field),t.xp6(1),t.Q6J("ngIf",!e.field)}}function b(o,d){if(1&o&&(t.ynx(0),t.TgZ(1,"th",5),t._uU(2),t.qZA(),t.BQk()),2&o){const e=d.$implicit,c=t.oxw(2);t.xp6(1),t.Udp("text-align",e.align),t.uIk("colspan",e.colspan),t.xp6(1),t.hij("",c.foot.content[e.index]," ")}}function M(o,d){if(1&o&&(t.TgZ(0,"tfoot")(1,"tr"),t.YNc(2,b,3,4,"ng-container",1),t.qZA()()),2&o){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.foot.cols)}}function y(o,d){if(1&o&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&o){const e=t.oxw().index,c=t.oxw().index,m=t.oxw();t.Udp("text-align",m.columns[e].align),t.xp6(1),t.Oqu(m.getfieldvalue(c,e))}}function _(o,d){if(1&o&&(t.TgZ(0,"td"),t._uU(1),t.ALo(2,"dateFormat"),t.qZA()),2&o){const e=t.oxw().index,c=t.oxw().index,m=t.oxw();t.Udp("text-align",m.columns[e].align),t.xp6(1),t.Oqu(t.lcZ(2,3,m.getfieldvalue(c,e)))}}function Z(o,d){if(1&o&&(t.TgZ(0,"td"),t._uU(1),t.ALo(2,"datetimeFormat"),t.qZA()),2&o){const e=t.oxw().index,c=t.oxw().index,m=t.oxw();t.Udp("text-align",m.columns[e].align),t.xp6(1),t.Oqu(t.lcZ(2,3,m.getfieldvalue(c,e)))}}function E(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"a",8),t.NdJ("click",function(m){t.CHM(e);const T=t.oxw().$implicit,J=t.oxw(3).$implicit,F=t.oxw();return t.KtG(F.actionEvent(m,J,T.event))}),t._UZ(1,"i"),t.qZA()}if(2&o){const e=t.oxw().$implicit;t.xp6(1),t.Tol(e.icon)}}function O(o,d){if(1&o&&(t.ynx(0),t.YNc(1,E,2,3,"a",7),t.BQk()),2&o){const e=d.$implicit,c=t.oxw(3).$implicit;t.xp6(1),t.Q6J("ngIf",e.condition(c))}}function A(o,d){if(1&o&&(t.TgZ(0,"td"),t.YNc(1,O,2,1,"ng-container",1),t.qZA()),2&o){const e=t.oxw().index,c=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",c.columns[e].actions)}}function I(o,d){if(1&o&&(t.ynx(0),t.YNc(1,y,2,3,"td",6),t.YNc(2,_,3,5,"td",6),t.YNc(3,Z,3,5,"td",6),t.YNc(4,A,2,1,"td",2),t.BQk()),2&o){const e=d.index,c=t.oxw(2);t.xp6(1),t.Q6J("ngIf",c.columns[e].field&&void 0===c.columns[e].type),t.xp6(1),t.Q6J("ngIf",c.columns[e].field&&"date"===c.columns[e].type),t.xp6(1),t.Q6J("ngIf",c.columns[e].field&&"datetime"===c.columns[e].type),t.xp6(1),t.Q6J("ngIf",!c.columns[e].field)}}function N(o,d){if(1&o&&(t.TgZ(0,"tr"),t.YNc(1,I,5,4,"ng-container",1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.columns)}}let w=(()=>{class o{constructor(){this.fielddefault={align:"left"},this.action=new t.vpe}ngOnInit(){for(let e of this.columns)void 0!==e.field&&mosetdefaults(this.fielddefault,e)}getfieldvalue(e,c){return mogetfieldvalue(this.datatable[e],this.columns[c].field)}actionEvent(e,c,m){e.preventDefault(),this.action.emit({event:m,row:c})}static#t=this.\u0275fac=function(c){return new(c||o)};static#n=this.\u0275cmp=t.Xpm({type:o,selectors:[["mo-table"]],inputs:{datatable:"datatable",columns:"columns",foot:"foot"},outputs:{action:"action"},decls:8,vars:3,consts:[[1,"customers"],[4,"ngFor","ngForOf"],[4,"ngIf"],["scope","col",3,"text-align",4,"ngIf"],["scope","col",4,"ngIf"],["scope","col"],[3,"text-align",4,"ngIf"],["href","#",3,"click",4,"ngIf"],["href","#",3,"click"]],template:function(c,m){1&c&&(t.TgZ(0,"table",0),t._UZ(1,"caption"),t.TgZ(2,"thead")(3,"tr"),t.YNc(4,C,3,2,"ng-container",1),t.qZA()(),t.YNc(5,M,3,1,"tfoot",2),t.TgZ(6,"tbody"),t.YNc(7,N,2,1,"tr",1),t.qZA()()),2&c&&(t.xp6(4),t.Q6J("ngForOf",m.columns),t.xp6(1),t.Q6J("ngIf",m.foot),t.xp6(2),t.Q6J("ngForOf",m.datatable))},dependencies:[p.sg,p.O5,n.L,h.E],styles:[".customers[_ngcontent-%COMP%]{border-collapse:collapse;width:100%}.customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:4px}.customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f2f2}.customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#ddd}.customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-top:3px;padding-bottom:3px;text-align:center;background-color:#0059b3;color:#fff}"]})}return o})()},3092:(v,u,a)=>{a.d(u,{$:()=>h});var t=a(6814),p=a(9177),n=a(4946);let h=(()=>{class g{static#t=this.\u0275fac=function(b){return new(b||g)};static#n=this.\u0275mod=n.oAB({type:g});static#e=this.\u0275inj=n.cJS({imports:[t.ez,p.A]})}return g})()}}]);