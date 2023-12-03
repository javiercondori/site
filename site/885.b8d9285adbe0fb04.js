"use strict";(self.webpackChunktukiweb=self.webpackChunktukiweb||[]).push([[885],{8885:(T,_,i)=>{i.r(_),i.d(_,{ProductocostoModule:()=>J});var t=i(6814),m=i(7664),o=i(4946),d=i(2655);let v=(()=>{class l{constructor(){}ngOnInit(){this.items=[{label:"Ventas"},{label:"Costos de Productos"}],this.home={icon:"pi pi-home",routerLink:"/"}}static#t=this.\u0275fac=function(s){return new(s||l)};static#o=this.\u0275cmp=o.Xpm({type:l,selectors:[["app-productocosto-main"]],decls:2,vars:2,consts:[[3,"model","home"]],template:function(s,r){1&s&&o._UZ(0,"p-breadcrumb",0)(1,"router-outlet"),2&s&&o.Q6J("model",r.items)("home",r.home)},dependencies:[m.lC,d.a],encapsulation:2})}return l})();var f=i(8196),g=i(7757),x=i(1106),P=i(2105),E=i(156),y=i(9709);class C{constructor(){this.id=0,this.nombre="",this.tipo="",this.valor=0,this.producto=0}}var O=i(3259),w=i(707),A=i(3714),Z=i(5043);const I=["tableeditor"];let U=(()=>{class l{constructor(n,s){this.dataService=n,this.confirmService=s,this.formEvent=new o.vpe,this.costos=[],this.display=!1,this.producto=new y.U,this.tablecols=[{editable:!1,field:"id",columnName:"ID"},{editable:!0,field:"nombre",columnName:"Nombre",input:{type:"text"}},{editable:!0,field:"tipo",columnName:"Tipo",input:{type:"autocomplete",path:"/ventas/costos/costotipos",columns:["id","nombre"]}},{editable:!0,field:"valor",columnName:"Valor",input:{type:"numeric",precision:"15",scale:"5"}},{actions:[{icon:"pi pi-trash",event:"delete",condition:r=>0!==r.id}]}]}ngOnInit(){}open(n){this.producto=n,this.dataService.getdata("/ventas/costos",{producto:this.producto.id}).subscribe(s=>{this.costos=s,this.tableeditor.updateData(this.costos),this.tableeditor.addRow(new C,"id")}),this.display=!0}salir(){this.display=!1,this.formEvent.emit()}enterValue(n){"tipo"===n.field?mosetfieldvalue(this.costos[n.row],n.field,n.value.nombre):mosetfieldvalue(this.costos[n.row],n.field,n.value);let s=this.costos[n.row];0===this.producto.id||""===s.nombre||""===s.tipo||0===s.valor||(s.producto=this.producto.id,this.dataService.postdata("/ventas/costos",s).subscribe(r=>{this.costos[n.row]=r,this.tableeditor.addRow(new C,"id")}))}rowActionEvent(n){"delete"===n.event&&this.confirmService.setconfirm({message:"Eliminar costo '"+n.row.id+"' ?",accept:()=>{this.dataService.postdata("/ventas/costos/delete",n.row).subscribe(r=>{this.tableeditor.deleteRow("id",n.row.id)})}})}static#t=this.\u0275fac=function(s){return new(s||l)(o.Y36(g.D),o.Y36(x.I))};static#o=this.\u0275cmp=o.Xpm({type:l,selectors:[["productocosto-form"]],viewQuery:function(s,r){if(1&s&&o.Gf(I,5),2&s){let h;o.iGM(h=o.CRH())&&(r.tableeditor=h.first)}},outputs:{formEvent:"formEvent"},decls:20,vars:3,consts:[[1,"mo-layout-content",3,"hidden"],[1,"grid"],[1,"col-12"],[1,"card"],[1,"mo-toolsbar"],[1,"mo-first"],[1,"mo-second"],["pButton","","pRipple","","type","button","icon","pi pi-arrow-left","pTooltip","Salir",1,"p-button-rounded","p-button-text",3,"click"],[1,"mo-panel-content"],[1,"p-fluid","grid"],[1,"p-field","col-12","md:col-12"],[1,"p-float-label"],["type","text","id","producto","pInputText","","disabled","",3,"value"],["for","producto"],[3,"columns","cellEnterValueEvent","rowActionEvent"],["tableeditor",""]],template:function(s,r){1&s&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h2"),o._uU(7,"Formula de Producto"),o.qZA()(),o.TgZ(8,"div",6)(9,"button",7),o.NdJ("click",function(){return r.salir()}),o.qZA()()(),o.TgZ(10,"div",8)(11,"div",9)(12,"div",10)(13,"span",11),o._UZ(14,"input",12),o.TgZ(15,"label",13),o._uU(16,"Producto"),o.qZA()()(),o.TgZ(17,"div",10)(18,"mo-tableeditor",14,15),o.NdJ("cellEnterValueEvent",function(M){return r.enterValue(M)})("rowActionEvent",function(M){return r.rowActionEvent(M)}),o.qZA()()()()()()()()),2&s&&(o.Q6J("hidden",!r.display),o.xp6(14),o.Q6J("value",r.producto.id+" | "+r.producto.nombre+" | "+r.producto.comentario),o.xp6(4),o.Q6J("columns",r.tablecols))},dependencies:[O.u,w.Hq,A.o,Z.O],encapsulation:2})}return l})();const c=["form"];function p(l,N){if(1&l){const n=o.EpF();o.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6)(4,"div",7)(5,"div",8)(6,"h2"),o._uU(7,"Costos: Lista de productos"),o.qZA()(),o.TgZ(8,"div",9)(9,"p-dropdown",10),o.NdJ("onChange",function(r){o.CHM(n);const h=o.oxw();return o.KtG(h.onChangeTipo(r))}),o.qZA()()(),o.TgZ(10,"div",11)(11,"mo-table",12),o.NdJ("action",function(r){o.CHM(n);const h=o.oxw();return o.KtG(h.tableAction(r))}),o.qZA()()()()()()}if(2&l){const n=o.oxw();o.xp6(9),o.Q6J("options",n.tipos),o.xp6(2),o.Q6J("datatable",n.productos)("columns",n.columns)}}const a=[{path:"",component:v,children:[{path:"",component:(()=>{class l{constructor(n,s){this.dataService=n,this.confirmService=s,this.display=!0,this.currentTipo=new f.o,this.tipos=[],this.productos=[],this.columns=[{field:"id",columnName:"Id"},{field:"nombre",columnName:"Producto"},{field:"comentario",columnName:"Comentario"},{field:"tipo.nombre",columnName:"Tipo"},{actions:[{icon:"pi pi-pencil",event:"costos",condition:r=>!0}]}]}ngOnInit(){this.dataService.getdata("/ventas/costos/tipos",{}).subscribe(n=>{this.tipos=n,this.currentTipo=this.tipos[0],this.getdata()})}saveForm(){this.getdata()}getdata(){this.dataService.getdata("/ventas/costos/productos",{tipo:this.currentTipo.id}).subscribe(n=>{this.productos=n})}tableAction(n){switch(n.event){case"costos":this.display=!1,this.form.open(n.row);break;case"delete":this.confirmService.setconfirm({message:"Eliminar el Producto '"+n.row.nombre+"'?",accept:()=>{this.dataService.deletedata("/almacen/producto",{id:n.row.id}).subscribe(r=>{this.getdata()})}})}}onChangeTipo(n){this.currentTipo=n.value,this.getdata()}formEvent(n){this.display=!0,console.log(n)}static#t=this.\u0275fac=function(s){return new(s||l)(o.Y36(g.D),o.Y36(x.I))};static#o=this.\u0275cmp=o.Xpm({type:l,selectors:[["productocosto-manage"]],viewQuery:function(s,r){if(1&s&&o.Gf(c,7),2&s){let h;o.iGM(h=o.CRH())&&(r.form=h.first)}},decls:3,vars:1,consts:[["class","mo-layout-content",4,"ngIf"],[3,"formEvent"],["form",""],[1,"mo-layout-content"],[1,"grid"],[1,"col-12"],[1,"card"],[1,"mo-toolsbar"],[1,"mo-first"],[1,"mo-second"],["appendTo","body","optionLabel","nombre",3,"options","onChange"],[1,"mo-panel-content"],[3,"datatable","columns","action"]],template:function(s,r){1&s&&(o.YNc(0,p,12,3,"div",0),o.TgZ(1,"productocosto-form",1,2),o.NdJ("formEvent",function(M){return r.formEvent(M)}),o.qZA()),2&s&&o.Q6J("ngIf",r.display)},dependencies:[t.O5,P.Lt,E.I,U],encapsulation:2})}return l})()},{path:"**",redirectTo:""}]}];let u=(()=>{class l{static#t=this.\u0275fac=function(s){return new(s||l)};static#o=this.\u0275mod=o.oAB({type:l});static#n=this.\u0275inj=o.cJS({imports:[m.Bz.forChild(a),m.Bz]})}return l})();var b=i(8368),D=i(3092),F=i(1494);let J=(()=>{class l{static#t=this.\u0275fac=function(s){return new(s||l)};static#o=this.\u0275mod=o.oAB({type:l});static#n=this.\u0275inj=o.cJS({imports:[t.ez,u,b.U,D.$,F.l]})}return l})()},9709:(T,_,i)=>{i.d(_,{U:()=>m});var t=i(8196);class m{constructor(){this.id=0,this.nombre="",this.comentario="",this.tipo=new t.o,this.estado="ACTIVO",this.factorinventario="1",this.orden=1}}},8196:(T,_,i)=>{i.d(_,{o:()=>t});class t{constructor(){this.id=0,this.nombre=""}}},156:(T,_,i)=>{i.d(_,{I:()=>U});var t=i(4946),m=i(6814),o=i(4621),d=i(2415);function v(c,p){if(1&c&&(t.TgZ(0,"th",5),t._uU(1),t.qZA()),2&c){const e=t.oxw(),a=e.index,u=e.$implicit,b=t.oxw();t.Udp("text-align",b.columns[a].align),t.xp6(1),t.hij("",u.columnName," ")}}function f(c,p){1&c&&t._UZ(0,"th",5)}function g(c,p){if(1&c&&(t.ynx(0),t.YNc(1,v,2,3,"th",3),t.YNc(2,f,1,0,"th",4),t.BQk()),2&c){const e=p.$implicit;t.xp6(1),t.Q6J("ngIf",e.field),t.xp6(1),t.Q6J("ngIf",!e.field)}}function x(c,p){if(1&c&&(t.ynx(0),t.TgZ(1,"th",5),t._uU(2),t.qZA(),t.BQk()),2&c){const e=p.$implicit,a=t.oxw(2);t.xp6(1),t.Udp("text-align",e.align),t.uIk("colspan",e.colspan),t.xp6(1),t.hij("",a.foot.content[e.index]," ")}}function P(c,p){if(1&c&&(t.TgZ(0,"tfoot")(1,"tr"),t.YNc(2,x,3,4,"ng-container",1),t.qZA()()),2&c){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.foot.cols)}}function E(c,p){if(1&c&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&c){const e=t.oxw().index,a=t.oxw().index,u=t.oxw();t.Udp("text-align",u.columns[e].align),t.xp6(1),t.Oqu(u.getfieldvalue(a,e))}}function y(c,p){if(1&c&&(t.TgZ(0,"td"),t._uU(1),t.ALo(2,"dateFormat"),t.qZA()),2&c){const e=t.oxw().index,a=t.oxw().index,u=t.oxw();t.Udp("text-align",u.columns[e].align),t.xp6(1),t.Oqu(t.lcZ(2,3,u.getfieldvalue(a,e)))}}function C(c,p){if(1&c&&(t.TgZ(0,"td"),t._uU(1),t.ALo(2,"datetimeFormat"),t.qZA()),2&c){const e=t.oxw().index,a=t.oxw().index,u=t.oxw();t.Udp("text-align",u.columns[e].align),t.xp6(1),t.Oqu(t.lcZ(2,3,u.getfieldvalue(a,e)))}}function O(c,p){if(1&c){const e=t.EpF();t.TgZ(0,"a",8),t.NdJ("click",function(u){t.CHM(e);const b=t.oxw().$implicit,D=t.oxw(3).$implicit,F=t.oxw();return t.KtG(F.actionEvent(u,D,b.event))}),t._UZ(1,"i"),t.qZA()}if(2&c){const e=t.oxw().$implicit;t.xp6(1),t.Tol(e.icon)}}function w(c,p){if(1&c&&(t.ynx(0),t.YNc(1,O,2,3,"a",7),t.BQk()),2&c){const e=p.$implicit,a=t.oxw(3).$implicit;t.xp6(1),t.Q6J("ngIf",e.condition(a))}}function A(c,p){if(1&c&&(t.TgZ(0,"td"),t.YNc(1,w,2,1,"ng-container",1),t.qZA()),2&c){const e=t.oxw().index,a=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",a.columns[e].actions)}}function Z(c,p){if(1&c&&(t.ynx(0),t.YNc(1,E,2,3,"td",6),t.YNc(2,y,3,5,"td",6),t.YNc(3,C,3,5,"td",6),t.YNc(4,A,2,1,"td",2),t.BQk()),2&c){const e=p.index,a=t.oxw(2);t.xp6(1),t.Q6J("ngIf",a.columns[e].field&&void 0===a.columns[e].type),t.xp6(1),t.Q6J("ngIf",a.columns[e].field&&"date"===a.columns[e].type),t.xp6(1),t.Q6J("ngIf",a.columns[e].field&&"datetime"===a.columns[e].type),t.xp6(1),t.Q6J("ngIf",!a.columns[e].field)}}function I(c,p){if(1&c&&(t.TgZ(0,"tr"),t.YNc(1,Z,5,4,"ng-container",1),t.qZA()),2&c){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.columns)}}let U=(()=>{class c{constructor(){this.fielddefault={align:"left"},this.action=new t.vpe}ngOnInit(){for(let e of this.columns)void 0!==e.field&&mosetdefaults(this.fielddefault,e)}getfieldvalue(e,a){return mogetfieldvalue(this.datatable[e],this.columns[a].field)}actionEvent(e,a,u){e.preventDefault(),this.action.emit({event:u,row:a})}static#t=this.\u0275fac=function(a){return new(a||c)};static#o=this.\u0275cmp=t.Xpm({type:c,selectors:[["mo-table"]],inputs:{datatable:"datatable",columns:"columns",foot:"foot"},outputs:{action:"action"},decls:8,vars:3,consts:[[1,"customers"],[4,"ngFor","ngForOf"],[4,"ngIf"],["scope","col",3,"text-align",4,"ngIf"],["scope","col",4,"ngIf"],["scope","col"],[3,"text-align",4,"ngIf"],["href","#",3,"click",4,"ngIf"],["href","#",3,"click"]],template:function(a,u){1&a&&(t.TgZ(0,"table",0),t._UZ(1,"caption"),t.TgZ(2,"thead")(3,"tr"),t.YNc(4,g,3,2,"ng-container",1),t.qZA()(),t.YNc(5,P,3,1,"tfoot",2),t.TgZ(6,"tbody"),t.YNc(7,I,2,1,"tr",1),t.qZA()()),2&a&&(t.xp6(4),t.Q6J("ngForOf",u.columns),t.xp6(1),t.Q6J("ngIf",u.foot),t.xp6(2),t.Q6J("ngForOf",u.datatable))},dependencies:[m.sg,m.O5,o.L,d.E],styles:[".customers[_ngcontent-%COMP%]{border-collapse:collapse;width:100%}.customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:4px}.customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f2f2}.customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#ddd}.customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-top:3px;padding-bottom:3px;text-align:center;background-color:#0059b3;color:#fff}"]})}return c})()},3092:(T,_,i)=>{i.d(_,{$:()=>d});var t=i(6814),m=i(9177),o=i(4946);let d=(()=>{class v{static#t=this.\u0275fac=function(x){return new(x||v)};static#o=this.\u0275mod=o.oAB({type:v});static#n=this.\u0275inj=o.cJS({imports:[t.ez,m.A]})}return v})()},2415:(T,_,i)=>{i.d(_,{E:()=>o});var t=i(4946),m=i(6814);let o=(()=>{class d{constructor(f){this.datePipe=f}transform(f,...g){return this.datePipe.transform(f,"dd/MM/yyyy")}static#t=this.\u0275fac=function(g){return new(g||d)(t.Y36(m.uU,16))};static#o=this.\u0275pipe=t.Yjl({name:"dateFormat",type:d,pure:!0})}return d})()},4621:(T,_,i)=>{i.d(_,{L:()=>o});var t=i(4946),m=i(6814);let o=(()=>{class d{constructor(f){this.datePipe=f}transform(f,...g){return this.datePipe.transform(f,"dd/MM/yyyy H:mm:ss")}static#t=this.\u0275fac=function(g){return new(g||d)(t.Y36(m.uU,16))};static#o=this.\u0275pipe=t.Yjl({name:"datetimeFormat",type:d,pure:!0})}return d})()},9177:(T,_,i)=>{i.d(_,{A:()=>o});var t=i(6814),m=i(4946);let o=(()=>{class d{static#t=this.\u0275fac=function(g){return new(g||d)};static#o=this.\u0275mod=m.oAB({type:d});static#n=this.\u0275inj=m.cJS({providers:[t.uU],imports:[t.ez]})}return d})()}}]);