"use strict";(self.webpackChunktukiweb=self.webpackChunktukiweb||[]).push([[478],{7478:(S,d,r)=>{r.r(d),r.d(d,{IngresoModule:()=>N});var m=r(6814),c=r(7664),t=r(4946);let l=(()=>{class n{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-ingreso-main"]],decls:1,vars:0,template:function(o,i){1&o&&t._UZ(0,"router-outlet")},dependencies:[c.lC],encapsulation:2})}return n})();var p=r(2743),u=r(3297),f=r(7757),g=r(7492),v=r(9324),h=r(4963);const Z=["form"];let y=(()=>{class n{constructor(e){this.dataService=e,this.display=!0,this.findcuentaconfig={path:"/all/entidad/byentidad",columns:["id","nombre","direccion"]},this.transfer=new p.F,this.report={content:[],columns:[{field:"id",columnName:"Id"},{field:"nombre",columnName:"Nombre"},{field:"descripcion",columnName:"Descripcion"},{field:"saldo",columnName:"Saldo",align:"right"},{actions:[{iconclass:"pi pi-arrow-circle-right",event:"cobranza",condition:o=>!0}]}]}}ngOnInit(){}findCuentasEvent(e){this.transfer.originAccount.entidad=e,this.getdata()}tableAction(e){this.display=!1,this.transfer.voucher.vtype="INGRESO",this.transfer.originAccount=e.row,this.form.open(this.transfer,"/caja/ingreso")}formEvent(e){this.display=!0,this.getdata()}getdata(){let e=new u.y;e.id=this.transfer.originAccount.entidad.id,e.ordersby=["cu.id desc"],this.dataService.postdata("/caja/ingreso/cuentas",e).subscribe(o=>{this.report.content=o})}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(f.D))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["ingreso-form"]],viewQuery:function(o,i){if(1&o&&t.Gf(Z,7),2&o){let a;t.iGM(a=t.CRH())&&(i.form=a.first)}},decls:33,vars:7,consts:[[1,"mo-layout-content"],[1,"grid"],[1,"col-12"],[1,"card"],[1,"mo-toolsbar"],[1,"mo-first"],[1,"mo-second"],[1,"mo-panel-content",3,"hidden"],[1,"p-fluid","grid"],[1,"p-field","col-12","form-group"],["for","buscar"],["id","buscar",1,"input-control",3,"config","itemSelected"],[1,"p-field","col-12","md:col-5","form-group"],["for","entidadnombre"],[1,"input-control-info"],[1,"p-field","col-12","md:col-7","form-group"],["for","entidaddir"],[3,"data","action"],[3,"formEvent"],["form",""]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h2"),t._uU(7,"Ingresos de Caja"),t.qZA()(),t._UZ(8,"div",6),t.qZA(),t.TgZ(9,"div",7)(10,"div",8)(11,"div",9)(12,"label",10),t._uU(13,"Buscar Entidad:"),t.qZA(),t.TgZ(14,"mo-autocomplete",11),t.NdJ("itemSelected",function(s){return i.findCuentasEvent(s)}),t.qZA()(),t.TgZ(15,"div",12)(16,"label",13),t._uU(17,"Entidad:"),t.qZA(),t.TgZ(18,"span",14),t._uU(19),t.qZA()(),t.TgZ(20,"div",15)(21,"label",16),t._uU(22,"Direcci\xf3n"),t.qZA(),t.TgZ(23,"span",14),t._uU(24),t.qZA()(),t.TgZ(25,"div",12)(26,"label"),t._uU(27,"Tel\xe9fono:"),t.qZA(),t.TgZ(28,"span",14),t._uU(29),t.qZA()()(),t.TgZ(30,"mo-report",17),t.NdJ("action",function(s){return i.tableAction(s)}),t.qZA()(),t.TgZ(31,"comprobante-form",18,19),t.NdJ("formEvent",function(s){return i.formEvent(s)}),t.qZA()()()()()),2&o&&(t.xp6(9),t.Q6J("hidden",!i.display),t.xp6(5),t.Q6J("config",i.findcuentaconfig),t.xp6(5),t.AsE("",i.transfer.originAccount.entidad.id," - ",i.transfer.originAccount.entidad.nombre,""),t.xp6(5),t.Oqu(i.transfer.originAccount.entidad.direccion),t.xp6(5),t.Oqu(i.transfer.originAccount.entidad.telefono),t.xp6(1),t.Q6J("data",i.report))},dependencies:[g.J,v.t,h.a],encapsulation:2})}return n})(),A=(()=>{class n{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["ingreso-manage"]],decls:1,vars:0,template:function(o,i){1&o&&t._UZ(0,"ingreso-form")},dependencies:[y],encapsulation:2})}return n})();var I=r(4131);const C=[{path:"",component:l,children:[{path:"",component:A},{path:"report",component:(()=>{class n{constructor(){this.reportconfig={path:"/caja/ingreso",type:"INGRESO"}}ngOnInit(){}static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["ingreso-report"]],decls:4,vars:1,consts:[[1,"mo-layout-content"],[1,"grid"],[1,"col-12"],[3,"config"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"transfer-report",3),t.qZA()()()),2&o&&(t.xp6(3),t.Q6J("config",i.reportconfig))},dependencies:[I.Z],encapsulation:2})}return n})()},{path:"**",redirectTo:""}]}];let T=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(C),c.Bz]})}return n})();var F=r(8368),E=r(2454),U=r(1749),b=r(8989),J=r(4553);let N=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[m.ez,T,b.y,F.U,E.q,J.W,U._]})}return n})()}}]);