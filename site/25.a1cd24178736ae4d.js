"use strict";(self.webpackChunktukiweb=self.webpackChunktukiweb||[]).push([[25],{3025:(M,_,s)=>{s.r(_),s.d(_,{EresultadosModule:()=>a});var t=s(6814),l=s(7664),e=s(4946);let d=(()=>{class i{static#t=this.\u0275fac=function(c){return new(c||i)};static#n=this.\u0275cmp=e.Xpm({type:i,selectors:[["eresultados-main"]],decls:1,vars:0,template:function(c,r){1&c&&e._UZ(0,"router-outlet")},dependencies:[l.lC],encapsulation:2})}return i})();var p=s(7757),m=s(3259),u=s(707),g=s(9324);class v{constructor(){this.id=0,this.periodo=new Date,this.tipo="",this.resultado=0,this.detalle=[]}}var h=s(7213),C=s(7635);const T=function(){return{width:"70vw"}},E=function(){return{"960px":"75vw"}};let O=(()=>{class i{constructor(n){this.dataService=n,this.display=!1,this.eres=new v,this.data={content:[],columns:[{field:"id",columnName:"Id"},{field:"nombre",columnName:"Concepto"},{field:"valor",columnName:"Monto",align:"right"}],foot:{content:["Resultado:",0],cols:[{colspan:"2",index:0,align:"right"},{colspan:"1",index:1,align:"right"}]}}}open(n){this.eres.id=n,this.getEstado(),this.display=!0}getEstado(){this.dataService.getdata("/contabilidad/eres/detalle",{id:this.eres.id}).subscribe(n=>{this.eres=n,this.data.content=this.eres.detalle,this.data.foot.content[1]=this.eres.resultado})}static#t=this.\u0275fac=function(c){return new(c||i)(e.Y36(p.D))};static#n=this.\u0275cmp=e.Xpm({type:i,selectors:[["eres-detalle"]],decls:8,vars:14,consts:[[3,"header","visible","modal","breakpoints","draggable","resizable","visibleChange"],[1,"form-group"],[1,"input-control-info"],[3,"data"]],template:function(c,r){1&c&&(e.TgZ(0,"p-dialog",0),e.NdJ("visibleChange",function(x){return r.display=x}),e.ALo(1,"periodmonthFormat"),e.TgZ(2,"div",1)(3,"label"),e._uU(4,"TIPO:"),e.qZA(),e.TgZ(5,"span",2),e._uU(6),e.qZA()(),e._UZ(7,"mo-report",3),e.qZA()),2&c&&(e.Akn(e.DdM(12,T)),e.MGl("header","Estado de Resultado ",e.lcZ(1,10,r.eres.periodo)," "),e.Q6J("visible",r.display)("modal",!0)("breakpoints",e.DdM(13,E))("draggable",!1)("resizable",!0),e.xp6(6),e.Oqu(r.eres.tipo),e.xp6(1),e.Q6J("data",r.data))},dependencies:[g.t,h.V,C.v],encapsulation:2})}return i})();const Z=["eresdetalle"],P=[{path:"",component:d,children:[{path:"",component:(()=>{class i{constructor(n){this.dataService=n,this.data={content:[],columns:[{field:"id",columnName:"Id"},{field:"periodo",columnName:"Periodo",type:"periodmonth"},{field:"tipo",columnName:"Tipo",align:"right"},{field:"resultado",columnName:"Resultado",align:"right"},{actions:[{iconclass:"pi pi-search",event:"search",condition:c=>!0}]}],foot:{content:["TOTAL",0],cols:[{colspan:"1",index:0,align:"right"},{colspan:"1",index:1,align:"right"}]}}}ngOnInit(){this.getdata()}reportEvents(n){"search"===n.event&&this.eresdetalle.open(n.row.id)}getdata(){this.dataService.getdata("/contabilidad/eres",{}).subscribe(n=>{this.data.content=n})}static#t=this.\u0275fac=function(c){return new(c||i)(e.Y36(p.D))};static#n=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-eresultados-manage"]],viewQuery:function(c,r){if(1&c&&e.Gf(Z,7),2&c){let f;e.iGM(f=e.CRH())&&(r.eresdetalle=f.first)}},decls:14,vars:1,consts:[[1,"mo-layout-content"],[1,"grid"],[1,"col-12"],[1,"card"],[1,"mo-toolsbar"],[1,"mo-first"],[1,"mo-second"],["pButton","","pRipple","","type","button","icon","pi pi-plus","routerLink","form/0","pTooltip","Nuevo descargo",1,"p-button-rounded","p-button-text"],[1,"mo-panel-content"],[3,"data","action"],["eresdetalle",""]],template:function(c,r){1&c&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h2"),e._uU(7,"Estado de Resultados por Periodo"),e.qZA()(),e.TgZ(8,"div",6),e._UZ(9,"button",7),e.qZA()(),e.TgZ(10,"div",8)(11,"mo-report",9),e.NdJ("action",function(x){return r.reportEvents(x)}),e.qZA()()()()()(),e._UZ(12,"eres-detalle",null,10)),2&c&&(e.xp6(11),e.Q6J("data",r.data))},dependencies:[l.rH,m.u,u.Hq,g.t,O],encapsulation:2})}return i})()},{path:"**",redirectTo:""}]}];let w=(()=>{class i{static#t=this.\u0275fac=function(c){return new(c||i)};static#n=this.\u0275mod=e.oAB({type:i});static#o=this.\u0275inj=e.cJS({imports:[l.Bz.forChild(P),l.Bz]})}return i})();var y=s(4553),A=s(8368),R=s(9177);let a=(()=>{class i{static#t=this.\u0275fac=function(c){return new(c||i)};static#n=this.\u0275mod=e.oAB({type:i});static#o=this.\u0275inj=e.cJS({imports:[t.ez,w,A.U,y.W,R.A,h.S]})}return i})()},9324:(M,_,s)=>{s.d(_,{t:()=>R});var t=s(4946),l=s(6814),e=s(4621),d=s(2415),p=s(7635);function m(a,i){if(1&a&&(t.ynx(0),t._uU(1),t.BQk()),2&a){const o=t.oxw();t.xp6(1),t.Oqu(o.data.caption)}}function u(a,i){if(1&a&&(t.TgZ(0,"th",5),t._uU(1),t.qZA()),2&a){const o=t.oxw(),n=o.index,c=o.$implicit,r=t.oxw();t.Udp("text-align",r.data.columns[n].align),t.xp6(1),t.hij("",c.columnName," ")}}function g(a,i){1&a&&t._UZ(0,"th",5)}function v(a,i){if(1&a&&(t.ynx(0),t.YNc(1,u,2,3,"th",3),t.YNc(2,g,1,0,"th",4),t.BQk()),2&a){const o=i.$implicit;t.xp6(1),t.Q6J("ngIf",o.field),t.xp6(1),t.Q6J("ngIf",!o.field)}}function h(a,i){if(1&a&&(t.ynx(0),t.TgZ(1,"td",5),t._uU(2),t.qZA(),t.BQk()),2&a){const o=i.$implicit,n=t.oxw(2);t.xp6(1),t.Udp("text-align",o.align),t.uIk("colspan",o.colspan),t.xp6(1),t.hij("",n.data.foot.content[o.index]," ")}}function C(a,i){if(1&a&&(t.TgZ(0,"tfoot")(1,"tr"),t.YNc(2,h,3,4,"ng-container",2),t.qZA()()),2&a){const o=t.oxw();t.xp6(2),t.Q6J("ngForOf",o.data.foot.cols)}}function T(a,i){if(1&a&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&a){const o=t.oxw().index,n=t.oxw().index,c=t.oxw();t.Udp("text-align",c.data.columns[o].align),t.xp6(1),t.Oqu(c.getfieldvalue(n,o))}}function E(a,i){if(1&a&&(t.TgZ(0,"td"),t._uU(1),t.ALo(2,"dateFormat"),t.qZA()),2&a){const o=t.oxw().index,n=t.oxw().index,c=t.oxw();t.Udp("text-align",c.data.columns[o].align),t.xp6(1),t.Oqu(t.lcZ(2,3,c.getfieldvalue(n,o)))}}function O(a,i){if(1&a&&(t.TgZ(0,"td"),t._uU(1),t.ALo(2,"datetimeFormat"),t.qZA()),2&a){const o=t.oxw().index,n=t.oxw().index,c=t.oxw();t.Udp("text-align",c.data.columns[o].align),t.xp6(1),t.Oqu(t.lcZ(2,3,c.getfieldvalue(n,o)))}}function Z(a,i){if(1&a&&(t.TgZ(0,"td"),t._uU(1),t.ALo(2,"periodmonthFormat"),t.qZA()),2&a){const o=t.oxw().index,n=t.oxw().index,c=t.oxw();t.Udp("text-align",c.data.columns[o].align),t.xp6(1),t.Oqu(t.lcZ(2,3,c.getfieldvalue(n,o)))}}function U(a,i){if(1&a){const o=t.EpF();t.TgZ(0,"a",12),t.NdJ("click",function(c){t.CHM(o);const r=t.oxw().$implicit,f=t.oxw(3).$implicit,x=t.oxw();return t.KtG(x.actionEvent(c,f,r.event))}),t.TgZ(1,"span"),t._uU(2),t.qZA()()}if(2&a){const o=t.oxw().$implicit;t.xp6(1),t.Tol(o.iconclass),t.xp6(1),t.Oqu(o.iconname)}}function P(a,i){if(1&a&&(t.ynx(0),t.YNc(1,U,3,4,"a",11),t.BQk()),2&a){const o=i.$implicit,n=t.oxw(3).$implicit;t.xp6(1),t.Q6J("ngIf",o.condition(n))}}function w(a,i){if(1&a&&(t.TgZ(0,"td",9)(1,"div",10),t.YNc(2,P,2,1,"ng-container",2),t.qZA()()),2&a){const o=t.oxw().index,n=t.oxw(2);t.xp6(2),t.Q6J("ngForOf",n.data.columns[o].actions)}}function y(a,i){if(1&a&&(t.ynx(0),t.YNc(1,T,2,3,"td",7),t.YNc(2,E,3,5,"td",7),t.YNc(3,O,3,5,"td",7),t.YNc(4,Z,3,5,"td",7),t.YNc(5,w,3,1,"td",8),t.BQk()),2&a){const o=i.index,n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",n.data.columns[o].field&&void 0===n.data.columns[o].type),t.xp6(1),t.Q6J("ngIf",n.data.columns[o].field&&"date"===n.data.columns[o].type),t.xp6(1),t.Q6J("ngIf",n.data.columns[o].field&&"datetime"===n.data.columns[o].type),t.xp6(1),t.Q6J("ngIf",n.data.columns[o].field&&"periodmonth"===n.data.columns[o].type),t.xp6(1),t.Q6J("ngIf",!n.data.columns[o].field)}}function A(a,i){if(1&a&&(t.ynx(0),t.TgZ(1,"tr",6),t.YNc(2,y,6,5,"ng-container",2),t.qZA(),t.BQk()),2&a){const o=i.$implicit,n=t.oxw();t.xp6(1),t.Q6J("ngClass",n.data.rows.condition(o)?n.data.rows.class:""),t.xp6(1),t.Q6J("ngForOf",n.data.columns)}}let R=(()=>{class a{constructor(){this.fielddefault={align:"left"},this.rows={class:"",condition:o=>!1},this.action=new t.vpe}ngOnInit(){for(let o of this.data.columns)void 0!==o.field&&mosetdefaults(this.fielddefault,o);void 0===this.data.rows&&(this.data.rows=this.rows)}getfieldvalue(o,n){return mogetfieldvalue(this.data.content[o],this.data.columns[n].field)}actionEvent(o,n,c){o.preventDefault(),this.action.emit({event:c,row:n})}static#t=this.\u0275fac=function(n){return new(n||a)};static#n=this.\u0275cmp=t.Xpm({type:a,selectors:[["mo-report"]],inputs:{data:"data"},outputs:{action:"action"},decls:9,vars:4,consts:[[1,"customers","report"],[4,"ngIf"],[4,"ngFor","ngForOf"],["scope","col",3,"text-align",4,"ngIf"],["scope","col",4,"ngIf"],["scope","col"],[3,"ngClass"],[3,"text-align",4,"ngIf"],["style","padding: 0;",4,"ngIf"],[2,"padding","0"],[1,"mo-reportactions"],["href","#",3,"click",4,"ngIf"],["href","#",3,"click"]],template:function(n,c){1&n&&(t.TgZ(0,"table",0)(1,"caption"),t.YNc(2,m,2,1,"ng-container",1),t.qZA(),t.TgZ(3,"thead")(4,"tr"),t.YNc(5,v,3,2,"ng-container",2),t.qZA()(),t.YNc(6,C,3,1,"tfoot",1),t.TgZ(7,"tbody"),t.YNc(8,A,3,2,"ng-container",2),t.qZA()()),2&n&&(t.xp6(2),t.Q6J("ngIf",c.data.caption),t.xp6(3),t.Q6J("ngForOf",c.data.columns),t.xp6(1),t.Q6J("ngIf",c.data.foot),t.xp6(2),t.Q6J("ngForOf",c.data.content))},dependencies:[l.mk,l.sg,l.O5,e.L,d.E,p.v],styles:[".customers[_ngcontent-%COMP%]{border-collapse:collapse;width:100%}.customers[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:1.4em;color:#3e3e3e;font-weight:700}.customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:4px}.customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:1px solid #f2f2f2}.customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#ddd}.customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-top:3px;padding-bottom:3px;text-align:center;background-color:#464646;color:#fff}.customers[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{padding-top:2px;padding-bottom:2px;color:#383838;font-weight:700}"]})}return a})()},4553:(M,_,s)=>{s.d(_,{W:()=>d});var t=s(6814),l=s(9177),e=s(4946);let d=(()=>{class p{static#t=this.\u0275fac=function(g){return new(g||p)};static#n=this.\u0275mod=e.oAB({type:p});static#o=this.\u0275inj=e.cJS({imports:[t.ez,l.A]})}return p})()},7635:(M,_,s)=>{s.d(_,{v:()=>e});var t=s(4946),l=s(6814);let e=(()=>{class d{constructor(m){this.datePipe=m}transform(m,...u){return this.datePipe.transform(m,"MM/yyyy")}static#t=this.\u0275fac=function(u){return new(u||d)(t.Y36(l.uU,16))};static#n=this.\u0275pipe=t.Yjl({name:"periodmonthFormat",type:d,pure:!0})}return d})()}}]);