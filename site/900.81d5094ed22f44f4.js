"use strict";(self.webpackChunktukiweb=self.webpackChunktukiweb||[]).push([[900],{1900:(h,u,e)=>{e.r(u),e.d(u,{ExistenciasModule:()=>y});var t=e(6814),m=e(7664),i=e(4946),c=e(7757),x=e(1106),l=e(9324),p=e(7492);let M=(()=>{class r{constructor(g,_){this.dataService=g,this.confirmService=_,this.display=!0,this.dataFindProducto={path:"/almacen/stock/productos",columns:["id","nombre"]},this.historial={content:[],columns:[{field:"nota.cuenta.nombre",columnName:"Cuenta"},{field:"fecha",columnName:"Fecha",type:"datetime"},{field:"cantidad",columnName:"Cantidad"},{field:"pu",columnName:"Pu"},{field:"inventario.saldo",columnName:"Saldo",align:"right"}],foot:{content:["TOTAL SALDO:",0],cols:[{colspan:"4",index:0,align:"right"},{colspan:"1",index:1,align:"right"}]}}}ngOnInit(){}findProductoSelected(g){this.dataService.getdata("/almacen/stock/entrada",{id:g.id}).subscribe(_=>{this.historial.content=_,console.log("RES",_)})}static#t=this.\u0275fac=function(_){return new(_||r)(i.Y36(c.D),i.Y36(x.I))};static#n=this.\u0275cmp=i.Xpm({type:r,selectors:[["app-existencias-historial"]],decls:14,vars:3,consts:[[1,"mo-layout-content",3,"hidden"],[1,"grid"],[1,"col-12"],[1,"card"],[1,"mo-toolsbar"],[1,"mo-first"],[1,"mo-second"],["for","entidad"],["id","producto",3,"config","itemSelected"],[1,"mo-panel-content"],[3,"data"]],template:function(_,f){1&_&&(i.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h2"),i._uU(7,"Historial de existencias:"),i.qZA()(),i.TgZ(8,"div",6)(9,"label",7),i._uU(10,"Buscar Producto:"),i.qZA(),i.TgZ(11,"mo-autocomplete",8),i.NdJ("itemSelected",function(d){return f.findProductoSelected(d)}),i.qZA()()(),i.TgZ(12,"div",9),i._UZ(13,"mo-report",10),i.qZA()()()()()),2&_&&(i.Q6J("hidden",!f.display),i.xp6(11),i.Q6J("config",f.dataFindProducto),i.xp6(2),i.Q6J("data",f.historial))},dependencies:[l.t,p.J],encapsulation:2})}return r})();var O=e(2655);const C=[{path:"",component:(()=>{class r{constructor(){}ngOnInit(){this.items=[{label:"Almacen"},{label:"Existencias"}],this.home={icon:"pi pi-home",routerLink:"/"}}static#t=this.\u0275fac=function(_){return new(_||r)};static#n=this.\u0275cmp=i.Xpm({type:r,selectors:[["app-existencias-main"]],decls:2,vars:2,consts:[[3,"model","home"]],template:function(_,f){1&_&&i._UZ(0,"p-breadcrumb",0)(1,"router-outlet"),2&_&&i.Q6J("model",f.items)("home",f.home)},dependencies:[m.lC,O.a],encapsulation:2})}return r})(),children:[{path:"",component:M},{path:"**",redirectTo:""}]}];let P=(()=>{class r{static#t=this.\u0275fac=function(_){return new(_||r)};static#n=this.\u0275mod=i.oAB({type:r});static#o=this.\u0275inj=i.cJS({imports:[m.Bz.forChild(C),m.Bz]})}return r})();var E=e(8368),v=e(4553),T=e(961);let y=(()=>{class r{static#t=this.\u0275fac=function(_){return new(_||r)};static#n=this.\u0275mod=i.oAB({type:r});static#o=this.\u0275inj=i.cJS({imports:[t.ez,P,E.U,v.W,T.q]})}return r})()},9324:(h,u,e)=>{e.d(u,{t:()=>f});var t=e(4946),m=e(6814),i=e(4621),c=e(2415),x=e(7635);function l(o,d){if(1&o&&(t.ynx(0),t._uU(1),t.BQk()),2&o){const n=t.oxw();t.xp6(1),t.Oqu(n.data.caption)}}function p(o,d){if(1&o&&(t.TgZ(0,"th",5),t._uU(1),t.qZA()),2&o){const n=t.oxw(),a=n.index,s=n.$implicit,A=t.oxw();t.Udp("text-align",A.data.columns[a].align),t.xp6(1),t.hij("",s.columnName," ")}}function M(o,d){1&o&&t._UZ(0,"th",5)}function O(o,d){if(1&o&&(t.ynx(0),t.YNc(1,p,2,3,"th",3),t.YNc(2,M,1,0,"th",4),t.BQk()),2&o){const n=d.$implicit;t.xp6(1),t.Q6J("ngIf",n.field),t.xp6(1),t.Q6J("ngIf",!n.field)}}function Z(o,d){if(1&o&&(t.ynx(0),t.TgZ(1,"td",5),t._uU(2),t.qZA(),t.BQk()),2&o){const n=d.$implicit,a=t.oxw(2);t.xp6(1),t.Udp("text-align",n.align),t.uIk("colspan",n.colspan),t.xp6(1),t.hij("",a.data.foot.content[n.index]," ")}}function C(o,d){if(1&o&&(t.TgZ(0,"tfoot")(1,"tr"),t.YNc(2,Z,3,4,"ng-container",2),t.qZA()()),2&o){const n=t.oxw();t.xp6(2),t.Q6J("ngForOf",n.data.foot.cols)}}function P(o,d){if(1&o&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&o){const n=t.oxw().index,a=t.oxw().index,s=t.oxw();t.Udp("text-align",s.data.columns[n].align),t.xp6(1),t.Oqu(s.getfieldvalue(a,n))}}function E(o,d){if(1&o&&(t.TgZ(0,"td"),t._uU(1),t.ALo(2,"dateFormat"),t.qZA()),2&o){const n=t.oxw().index,a=t.oxw().index,s=t.oxw();t.Udp("text-align",s.data.columns[n].align),t.xp6(1),t.Oqu(t.lcZ(2,3,s.getfieldvalue(a,n)))}}function v(o,d){if(1&o&&(t.TgZ(0,"td"),t._uU(1),t.ALo(2,"datetimeFormat"),t.qZA()),2&o){const n=t.oxw().index,a=t.oxw().index,s=t.oxw();t.Udp("text-align",s.data.columns[n].align),t.xp6(1),t.Oqu(t.lcZ(2,3,s.getfieldvalue(a,n)))}}function T(o,d){if(1&o&&(t.TgZ(0,"td"),t._uU(1),t.ALo(2,"periodmonthFormat"),t.qZA()),2&o){const n=t.oxw().index,a=t.oxw().index,s=t.oxw();t.Udp("text-align",s.data.columns[n].align),t.xp6(1),t.Oqu(t.lcZ(2,3,s.getfieldvalue(a,n)))}}function y(o,d){if(1&o){const n=t.EpF();t.TgZ(0,"a",12),t.NdJ("click",function(s){t.CHM(n);const A=t.oxw().$implicit,D=t.oxw(3).$implicit,I=t.oxw();return t.KtG(I.actionEvent(s,D,A.event))}),t.TgZ(1,"span"),t._uU(2),t.qZA()()}if(2&o){const n=t.oxw().$implicit;t.xp6(1),t.Tol(n.iconclass),t.xp6(1),t.Oqu(n.iconname)}}function r(o,d){if(1&o&&(t.ynx(0),t.YNc(1,y,3,4,"a",11),t.BQk()),2&o){const n=d.$implicit,a=t.oxw(3).$implicit;t.xp6(1),t.Q6J("ngIf",n.condition(a))}}function U(o,d){if(1&o&&(t.TgZ(0,"td",9)(1,"div",10),t.YNc(2,r,2,1,"ng-container",2),t.qZA()()),2&o){const n=t.oxw().index,a=t.oxw(2);t.xp6(2),t.Q6J("ngForOf",a.data.columns[n].actions)}}function g(o,d){if(1&o&&(t.ynx(0),t.YNc(1,P,2,3,"td",7),t.YNc(2,E,3,5,"td",7),t.YNc(3,v,3,5,"td",7),t.YNc(4,T,3,5,"td",7),t.YNc(5,U,3,1,"td",8),t.BQk()),2&o){const n=d.index,a=t.oxw(2);t.xp6(1),t.Q6J("ngIf",a.data.columns[n].field&&void 0===a.data.columns[n].type),t.xp6(1),t.Q6J("ngIf",a.data.columns[n].field&&"date"===a.data.columns[n].type),t.xp6(1),t.Q6J("ngIf",a.data.columns[n].field&&"datetime"===a.data.columns[n].type),t.xp6(1),t.Q6J("ngIf",a.data.columns[n].field&&"periodmonth"===a.data.columns[n].type),t.xp6(1),t.Q6J("ngIf",!a.data.columns[n].field)}}function _(o,d){if(1&o&&(t.ynx(0),t.TgZ(1,"tr",6),t.YNc(2,g,6,5,"ng-container",2),t.qZA(),t.BQk()),2&o){const n=d.$implicit,a=t.oxw();t.xp6(1),t.Q6J("ngClass",a.data.rows.condition(n)?a.data.rows.class:""),t.xp6(1),t.Q6J("ngForOf",a.data.columns)}}let f=(()=>{class o{constructor(){this.fielddefault={align:"left"},this.rows={class:"",condition:n=>!1},this.action=new t.vpe}ngOnInit(){for(let n of this.data.columns)void 0!==n.field&&mosetdefaults(this.fielddefault,n);void 0===this.data.rows&&(this.data.rows=this.rows)}getfieldvalue(n,a){return mogetfieldvalue(this.data.content[n],this.data.columns[a].field)}actionEvent(n,a,s){n.preventDefault(),this.action.emit({event:s,row:a})}static#t=this.\u0275fac=function(a){return new(a||o)};static#n=this.\u0275cmp=t.Xpm({type:o,selectors:[["mo-report"]],inputs:{data:"data"},outputs:{action:"action"},decls:9,vars:4,consts:[[1,"customers","report"],[4,"ngIf"],[4,"ngFor","ngForOf"],["scope","col",3,"text-align",4,"ngIf"],["scope","col",4,"ngIf"],["scope","col"],[3,"ngClass"],[3,"text-align",4,"ngIf"],["style","padding: 0;",4,"ngIf"],[2,"padding","0"],[1,"mo-reportactions"],["href","#",3,"click",4,"ngIf"],["href","#",3,"click"]],template:function(a,s){1&a&&(t.TgZ(0,"table",0)(1,"caption"),t.YNc(2,l,2,1,"ng-container",1),t.qZA(),t.TgZ(3,"thead")(4,"tr"),t.YNc(5,O,3,2,"ng-container",2),t.qZA()(),t.YNc(6,C,3,1,"tfoot",1),t.TgZ(7,"tbody"),t.YNc(8,_,3,2,"ng-container",2),t.qZA()()),2&a&&(t.xp6(2),t.Q6J("ngIf",s.data.caption),t.xp6(3),t.Q6J("ngForOf",s.data.columns),t.xp6(1),t.Q6J("ngIf",s.data.foot),t.xp6(2),t.Q6J("ngForOf",s.data.content))},dependencies:[m.mk,m.sg,m.O5,i.L,c.E,x.v],styles:[".customers[_ngcontent-%COMP%]{border-collapse:collapse;width:100%}.customers[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:1.4em;color:#3e3e3e;font-weight:700}.customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:4px}.customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:1px solid #f2f2f2}.customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#ddd}.customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-top:3px;padding-bottom:3px;text-align:center;background-color:#464646;color:#fff}.customers[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{padding-top:2px;padding-bottom:2px;color:#383838;font-weight:700}"]})}return o})()},4553:(h,u,e)=>{e.d(u,{W:()=>c});var t=e(6814),m=e(9177),i=e(4946);let c=(()=>{class x{static#t=this.\u0275fac=function(M){return new(M||x)};static#n=this.\u0275mod=i.oAB({type:x});static#o=this.\u0275inj=i.cJS({imports:[t.ez,m.A]})}return x})()},2415:(h,u,e)=>{e.d(u,{E:()=>i});var t=e(4946),m=e(6814);let i=(()=>{class c{constructor(l){this.datePipe=l}transform(l,...p){return this.datePipe.transform(l,"dd/MM/yyyy")}static#t=this.\u0275fac=function(p){return new(p||c)(t.Y36(m.uU,16))};static#n=this.\u0275pipe=t.Yjl({name:"dateFormat",type:c,pure:!0})}return c})()},4621:(h,u,e)=>{e.d(u,{L:()=>i});var t=e(4946),m=e(6814);let i=(()=>{class c{constructor(l){this.datePipe=l}transform(l,...p){return this.datePipe.transform(l,"dd/MM/yyyy H:mm:ss")}static#t=this.\u0275fac=function(p){return new(p||c)(t.Y36(m.uU,16))};static#n=this.\u0275pipe=t.Yjl({name:"datetimeFormat",type:c,pure:!0})}return c})()},9177:(h,u,e)=>{e.d(u,{A:()=>i});var t=e(6814),m=e(4946);let i=(()=>{class c{static#t=this.\u0275fac=function(p){return new(p||c)};static#n=this.\u0275mod=m.oAB({type:c});static#o=this.\u0275inj=m.cJS({providers:[t.uU],imports:[t.ez]})}return c})()},7635:(h,u,e)=>{e.d(u,{v:()=>i});var t=e(4946),m=e(6814);let i=(()=>{class c{constructor(l){this.datePipe=l}transform(l,...p){return this.datePipe.transform(l,"MM/yyyy")}static#t=this.\u0275fac=function(p){return new(p||c)(t.Y36(m.uU,16))};static#n=this.\u0275pipe=t.Yjl({name:"periodmonthFormat",type:c,pure:!0})}return c})()}}]);