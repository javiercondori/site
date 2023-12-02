"use strict";(self.webpackChunktukiweb=self.webpackChunktukiweb||[]).push([[686],{686:(x,p,i)=>{i.r(p),i.d(p,{FormulaModule:()=>U});var t=i(6814),u=i(7664),o=i(4946),d=i(2655);let v=(()=>{class l{constructor(){}ngOnInit(){this.items=[{label:"Producci\xf3n"},{label:"Formula"}],this.home={icon:"pi pi-home",routerLink:"/"}}static#t=this.\u0275fac=function(c){return new(c||l)};static#o=this.\u0275cmp=o.Xpm({type:l,selectors:[["formula-main"]],decls:2,vars:2,consts:[[3,"model","home"]],template:function(c,s){1&c&&o._UZ(0,"p-breadcrumb",0)(1,"router-outlet"),2&c&&o.Q6J("model",s.items)("home",s.home)},dependencies:[u.lC,d.a],encapsulation:2})}return l})();var f=i(7757),g=i(156),T=i(9709);class b{constructor(){this.id=0,this.producto=new T.U,this.fproducto=new T.U,this.cantidad=0}}var C=i(1106),E=i(3259),F=i(707),y=i(3714),O=i(5043);const w=["tableeditor"];function P(l,D){if(1&l){const n=o.EpF();o.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"div",6)(6,"h2"),o._uU(7,"Formula de Producto"),o.qZA()(),o.TgZ(8,"div",7)(9,"button",8),o.NdJ("click",function(){o.CHM(n);const s=o.oxw();return o.KtG(s.salir())}),o.qZA()()(),o.TgZ(10,"div",9)(11,"div",10)(12,"div",11)(13,"span",12),o._UZ(14,"input",13),o.TgZ(15,"label",14),o._uU(16,"Producto"),o.qZA()()(),o.TgZ(17,"div",11)(18,"mo-tableeditor",15,16),o.NdJ("cellEnterValueEvent",function(s){o.CHM(n);const h=o.oxw();return o.KtG(h.enterValue(s))})("rowActionEvent",function(s){o.CHM(n);const h=o.oxw();return o.KtG(h.rowActionEvent(s))}),o.qZA()()()()()()()()}if(2&l){const n=o.oxw();o.xp6(14),o.Q6J("value",n.producto.id+" | "+n.producto.nombre+" | "+n.producto.comentario),o.xp6(4),o.Q6J("columns",n.tablecols)}}let A=(()=>{class l{constructor(n,c){this.dataService=n,this.confirmService=c,this.formEvent=new o.vpe,this.display=!1,this.producto=new T.U,this.formula=[],this.tablecols=[{editable:!1,field:"id",columnName:"ID"},{editable:!1,field:"fproducto.id",columnName:"P.Id"},{editable:!0,field:"fproducto.nombre",columnName:"Producto",input:{type:"autocomplete",path:"/produccion/formula/findproductos",columns:["id","nombre"]}},{editable:!0,field:"cantidad",columnName:"CANTIDAD",input:{type:"numeric",precision:"15",scale:"2"}},{actions:[{icon:"pi pi-trash",event:"delete",condition:s=>0!==s.id}]}]}ngOnInit(){}open(n){this.producto=n,this.dataService.getdata("/produccion/formula",{productoid:this.producto.id}).subscribe(c=>{this.formula=c,this.tableeditor.updateData(this.formula),this.tableeditor.addRow(new b,"id")}),this.display=!0}salir(){this.display=!1,this.formEvent.emit()}enterValue(n){"fproducto.nombre"===n.field?(mosetfieldvalue(this.formula[n.row],"fproducto.id",n.value.id),mosetfieldvalue(this.formula[n.row],"fproducto.nombre",n.value.nombre)):mosetfieldvalue(this.formula[n.row],n.field,n.value);let c=this.formula[n.row];0===this.producto.id||0===c.fproducto.id||0===c.cantidad||(c.producto.id=this.producto.id,this.dataService.postdata("/produccion/formula",c).subscribe(s=>{this.formula[n.row]=s,this.tableeditor.addRow(new b,"id")}))}rowActionEvent(n){"delete"===(console.log("formula form:",n),n.event)&&this.confirmService.setconfirm({message:"Eliminar item '"+n.row.fproducto.nombre+"' de la f\xf3rmula?",accept:()=>{this.dataService.postdata("/produccion/formula/delete",n.row).subscribe(s=>{this.tableeditor.deleteRow("id",n.row.id)})}})}static#t=this.\u0275fac=function(c){return new(c||l)(o.Y36(f.D),o.Y36(C.I))};static#o=this.\u0275cmp=o.Xpm({type:l,selectors:[["formula-form"]],viewQuery:function(c,s){if(1&c&&o.Gf(w,5),2&c){let h;o.iGM(h=o.CRH())&&(s.tableeditor=h.first)}},outputs:{formEvent:"formEvent"},decls:1,vars:1,consts:[["class","mo-layout-content",4,"ngIf"],[1,"mo-layout-content"],[1,"grid"],[1,"col-12"],[1,"card"],[1,"mo-toolsbar"],[1,"mo-first"],[1,"mo-second"],["pButton","","pRipple","","type","button","icon","pi pi-arrow-left","pTooltip","Salir",1,"p-button-rounded","p-button-text",3,"click"],[1,"mo-panel-content"],[1,"p-fluid","grid"],[1,"p-field","col-12","md:col-12"],[1,"p-float-label"],["type","text","id","producto","pInputText","","disabled","",3,"value"],["for","producto"],[3,"columns","cellEnterValueEvent","rowActionEvent"],["tableeditor",""]],template:function(c,s){1&c&&o.YNc(0,P,20,2,"div",0),2&c&&o.Q6J("ngIf",s.display)},dependencies:[t.O5,E.u,F.Hq,y.o,O.O],encapsulation:2})}return l})();const Z=["form"];function a(l,D){if(1&l){const n=o.EpF();o.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6)(4,"div",7)(5,"div",8)(6,"h2"),o._uU(7,"Listado de Productos"),o.qZA()(),o._UZ(8,"div",9),o.qZA(),o.TgZ(9,"div",10)(10,"mo-table",11),o.NdJ("action",function(s){o.CHM(n);const h=o.oxw();return o.KtG(h.tableAction(s))}),o.qZA()()()()()()}if(2&l){const n=o.oxw();o.xp6(10),o.Q6J("datatable",n.list)("columns",n.columns)}}const e=[{path:"",component:v,children:[{path:"",component:(()=>{class l{constructor(n){this.dataService=n,this.display=!0,this.currentDate=new Date,this.list=[],this.columns=[{field:"id",columnName:"Id"},{field:"nombre",columnName:"Nombre"},{field:"comentario",columnName:"Comentario"},{field:"estado",columnName:"Estado"},{field:"factorinventario",columnName:"Factor"},{actions:[{icon:"pi pi-cog",event:"formula",condition:c=>!0}]}]}ngOnInit(){this.getdata()}saveForm(){this.getdata()}getdata(){this.dataService.getdata("/produccion/formula/productos",{date:this.currentDate}).subscribe(n=>{this.list=n})}tableAction(n){"formula"===n.event&&(this.display=!1,this.form.open(n.row))}formulaFormEvent(n){this.display=!0,console.log("javier")}static#t=this.\u0275fac=function(c){return new(c||l)(o.Y36(f.D))};static#o=this.\u0275cmp=o.Xpm({type:l,selectors:[["formula-manage"]],viewQuery:function(c,s){if(1&c&&o.Gf(Z,7),2&c){let h;o.iGM(h=o.CRH())&&(s.form=h.first)}},decls:3,vars:1,consts:[["class","mo-layout-content",4,"ngIf"],[3,"formEvent"],["form",""],[1,"mo-layout-content"],[1,"grid"],[1,"col-12"],[1,"card"],[1,"mo-toolsbar"],[1,"mo-first"],[1,"mo-second"],[1,"mo-panel-content"],[3,"datatable","columns","action"]],template:function(c,s){1&c&&(o.YNc(0,a,11,2,"div",0),o.TgZ(1,"formula-form",1,2),o.NdJ("formEvent",function(N){return s.formulaFormEvent(N)}),o.qZA()),2&c&&o.Q6J("ngIf",s.display)},dependencies:[t.O5,g.I,A],encapsulation:2})}return l})()},{path:"**",redirectTo:""}]}];let r=(()=>{class l{static#t=this.\u0275fac=function(c){return new(c||l)};static#o=this.\u0275mod=o.oAB({type:l});static#n=this.\u0275inj=o.cJS({imports:[u.Bz.forChild(e),u.Bz]})}return l})();var m=i(8368),M=i(3092),I=i(1494);let U=(()=>{class l{static#t=this.\u0275fac=function(c){return new(c||l)};static#o=this.\u0275mod=o.oAB({type:l});static#n=this.\u0275inj=o.cJS({imports:[t.ez,r,m.U,M.$,I.l]})}return l})()},9709:(x,p,i)=>{i.d(p,{U:()=>u});var t=i(8196);class u{constructor(){this.id=0,this.nombre="",this.comentario="",this.tipo=new t.o,this.estado="ACTIVO",this.factorinventario="1",this.orden=1}}},8196:(x,p,i)=>{i.d(p,{o:()=>t});class t{constructor(){this.id=0,this.nombre=""}}},156:(x,p,i)=>{i.d(p,{I:()=>Z});var t=i(4946),u=i(6814),o=i(4621),d=i(2415);function v(a,_){if(1&a&&(t.TgZ(0,"th",5),t._uU(1),t.qZA()),2&a){const e=t.oxw(),r=e.index,m=e.$implicit,M=t.oxw();t.Udp("text-align",M.columns[r].align),t.xp6(1),t.hij("",m.columnName," ")}}function f(a,_){1&a&&t._UZ(0,"th",5)}function g(a,_){if(1&a&&(t.ynx(0),t.YNc(1,v,2,3,"th",3),t.YNc(2,f,1,0,"th",4),t.BQk()),2&a){const e=_.$implicit;t.xp6(1),t.Q6J("ngIf",e.field),t.xp6(1),t.Q6J("ngIf",!e.field)}}function T(a,_){if(1&a&&(t.ynx(0),t.TgZ(1,"th",5),t._uU(2),t.qZA(),t.BQk()),2&a){const e=_.$implicit,r=t.oxw(2);t.xp6(1),t.Udp("text-align",e.align),t.uIk("colspan",e.colspan),t.xp6(1),t.hij("",r.foot.content[e.index]," ")}}function b(a,_){if(1&a&&(t.TgZ(0,"tfoot")(1,"tr"),t.YNc(2,T,3,4,"ng-container",1),t.qZA()()),2&a){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.foot.cols)}}function C(a,_){if(1&a&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&a){const e=t.oxw().index,r=t.oxw().index,m=t.oxw();t.Udp("text-align",m.columns[e].align),t.xp6(1),t.Oqu(m.getfieldvalue(r,e))}}function E(a,_){if(1&a&&(t.TgZ(0,"td"),t._uU(1),t.ALo(2,"dateFormat"),t.qZA()),2&a){const e=t.oxw().index,r=t.oxw().index,m=t.oxw();t.Udp("text-align",m.columns[e].align),t.xp6(1),t.Oqu(t.lcZ(2,3,m.getfieldvalue(r,e)))}}function F(a,_){if(1&a&&(t.TgZ(0,"td"),t._uU(1),t.ALo(2,"datetimeFormat"),t.qZA()),2&a){const e=t.oxw().index,r=t.oxw().index,m=t.oxw();t.Udp("text-align",m.columns[e].align),t.xp6(1),t.Oqu(t.lcZ(2,3,m.getfieldvalue(r,e)))}}function y(a,_){if(1&a){const e=t.EpF();t.TgZ(0,"a",8),t.NdJ("click",function(m){t.CHM(e);const M=t.oxw().$implicit,I=t.oxw(3).$implicit,U=t.oxw();return t.KtG(U.actionEvent(m,I,M.event))}),t._UZ(1,"i"),t.qZA()}if(2&a){const e=t.oxw().$implicit;t.xp6(1),t.Tol(e.icon)}}function O(a,_){if(1&a&&(t.ynx(0),t.YNc(1,y,2,3,"a",7),t.BQk()),2&a){const e=_.$implicit,r=t.oxw(3).$implicit;t.xp6(1),t.Q6J("ngIf",e.condition(r))}}function w(a,_){if(1&a&&(t.TgZ(0,"td"),t.YNc(1,O,2,1,"ng-container",1),t.qZA()),2&a){const e=t.oxw().index,r=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",r.columns[e].actions)}}function P(a,_){if(1&a&&(t.ynx(0),t.YNc(1,C,2,3,"td",6),t.YNc(2,E,3,5,"td",6),t.YNc(3,F,3,5,"td",6),t.YNc(4,w,2,1,"td",2),t.BQk()),2&a){const e=_.index,r=t.oxw(2);t.xp6(1),t.Q6J("ngIf",r.columns[e].field&&void 0===r.columns[e].type),t.xp6(1),t.Q6J("ngIf",r.columns[e].field&&"date"===r.columns[e].type),t.xp6(1),t.Q6J("ngIf",r.columns[e].field&&"datetime"===r.columns[e].type),t.xp6(1),t.Q6J("ngIf",!r.columns[e].field)}}function A(a,_){if(1&a&&(t.TgZ(0,"tr"),t.YNc(1,P,5,4,"ng-container",1),t.qZA()),2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.columns)}}let Z=(()=>{class a{constructor(){this.fielddefault={align:"left"},this.action=new t.vpe}ngOnInit(){for(let e of this.columns)void 0!==e.field&&mosetdefaults(this.fielddefault,e)}getfieldvalue(e,r){return mogetfieldvalue(this.datatable[e],this.columns[r].field)}actionEvent(e,r,m){e.preventDefault(),this.action.emit({event:m,row:r})}static#t=this.\u0275fac=function(r){return new(r||a)};static#o=this.\u0275cmp=t.Xpm({type:a,selectors:[["mo-table"]],inputs:{datatable:"datatable",columns:"columns",foot:"foot"},outputs:{action:"action"},decls:8,vars:3,consts:[[1,"customers"],[4,"ngFor","ngForOf"],[4,"ngIf"],["scope","col",3,"text-align",4,"ngIf"],["scope","col",4,"ngIf"],["scope","col"],[3,"text-align",4,"ngIf"],["href","#",3,"click",4,"ngIf"],["href","#",3,"click"]],template:function(r,m){1&r&&(t.TgZ(0,"table",0),t._UZ(1,"caption"),t.TgZ(2,"thead")(3,"tr"),t.YNc(4,g,3,2,"ng-container",1),t.qZA()(),t.YNc(5,b,3,1,"tfoot",2),t.TgZ(6,"tbody"),t.YNc(7,A,2,1,"tr",1),t.qZA()()),2&r&&(t.xp6(4),t.Q6J("ngForOf",m.columns),t.xp6(1),t.Q6J("ngIf",m.foot),t.xp6(2),t.Q6J("ngForOf",m.datatable))},dependencies:[u.sg,u.O5,o.L,d.E],styles:[".customers[_ngcontent-%COMP%]{border-collapse:collapse;width:100%}.customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:4px}.customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f2f2}.customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#ddd}.customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-top:3px;padding-bottom:3px;text-align:center;background-color:#0059b3;color:#fff}"]})}return a})()},3092:(x,p,i)=>{i.d(p,{$:()=>d});var t=i(6814),u=i(9177),o=i(4946);let d=(()=>{class v{static#t=this.\u0275fac=function(T){return new(T||v)};static#o=this.\u0275mod=o.oAB({type:v});static#n=this.\u0275inj=o.cJS({imports:[t.ez,u.A]})}return v})()},2415:(x,p,i)=>{i.d(p,{E:()=>o});var t=i(4946),u=i(6814);let o=(()=>{class d{constructor(f){this.datePipe=f}transform(f,...g){return this.datePipe.transform(f,"dd/MM/yyyy")}static#t=this.\u0275fac=function(g){return new(g||d)(t.Y36(u.uU,16))};static#o=this.\u0275pipe=t.Yjl({name:"dateFormat",type:d,pure:!0})}return d})()},4621:(x,p,i)=>{i.d(p,{L:()=>o});var t=i(4946),u=i(6814);let o=(()=>{class d{constructor(f){this.datePipe=f}transform(f,...g){return this.datePipe.transform(f,"dd/MM/yyyy H:mm:ss")}static#t=this.\u0275fac=function(g){return new(g||d)(t.Y36(u.uU,16))};static#o=this.\u0275pipe=t.Yjl({name:"datetimeFormat",type:d,pure:!0})}return d})()},9177:(x,p,i)=>{i.d(p,{A:()=>o});var t=i(6814),u=i(4946);let o=(()=>{class d{static#t=this.\u0275fac=function(g){return new(g||d)};static#o=this.\u0275mod=u.oAB({type:d});static#n=this.\u0275inj=u.cJS({providers:[t.uU],imports:[t.ez]})}return d})()}}]);