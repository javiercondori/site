"use strict";(self.webpackChunktukiweb=self.webpackChunktukiweb||[]).push([[274],{8555:(v,u,n)=>{n.d(u,{r:()=>t});var c=n(5289),m=n(698);class t{constructor(){this.id=0,this.entidad=new c.$,this.tipo="",this.nombre="",this.descripcion="",this.estado="ACTIVO",this.saldo=0,this.establecimiento=new m.A}}},5289:(v,u,n)=>{n.d(u,{$:()=>c});class c{constructor(){this.id=0,this.nombre="",this.direccion="",this.telefono=""}}},3297:(v,u,n)=>{n.d(u,{y:()=>c});class c{constructor(){this.id=0,this.sid=0,this.str="",this.sstr="",this.dec=0,this.sdec=0,this.date=new Date,this.sdate=new Date,this.ordersby=[],this.limit=0,this.offset=0}}},3274:(v,u,n)=>{n.r(u),n.d(u,{RelcostogalponModule:()=>B});var c=n(6814),m=n(7664),t=n(4946);let d=(()=>{class l{static#t=this.\u0275fac=function(i){return new(i||l)};static#e=this.\u0275cmp=t.Xpm({type:l,selectors:[["app-relcostogalpon-main"]],decls:1,vars:0,template:function(i,a){1&i&&t._UZ(0,"router-outlet")},dependencies:[m.lC],encapsulation:2})}return l})();var f=n(5289),o=n(3297),s=n(2848),r=n(1106),g=n(3259),y=n(707),b=n(9324),T=n(7492),S=n(8555),w=n(7773);class E{constructor(){this.costo=new S.r,this.galpon=new w.e}}var C=n(7213);const A=function(){return{width:"70vw"}},Z=function(){return{"960px":"75vw"}};let N=(()=>{class l{constructor(e,i){this.dataService=e,this.confirmService=i,this.addEvent=new t.vpe,this.display=!1,this.relcostogalpon=new E,this.entidad=new f.$,this.report={content:[],columns:[{field:"cuenta.id",columnName:"Id"},{field:"cuenta.nombre",columnName:"Nombre"},{field:"fechainicio",columnName:"Fecha Inicio",type:"date"},{actions:[{iconname:"check_circle",iconclass:"material-symbols-outlined",event:"add",condition:a=>!0}]}]},this.entidadconfig={path:"/all/entidad/byname",columns:["id","nombre","direccion"]}}open(e){this.entidad=new f.$,this.relcostogalpon=e,this.report.content=[],this.display=!0}entidadSelected(e){this.entidad=e,this.getdata()}reportEvent(e){"add"===e.event&&(this.relcostogalpon.galpon=e.row,this.addEvent.emit(this.relcostogalpon),this.display=!1)}getdata(){var e=new o.y;e.id=this.entidad.id,e.ordersby=["cu.id desc"],this.dataService.postdata("/plgalpon/relcostogalpon/r/galponbyentidad",e).subscribe(i=>{this.report.content=i})}static#t=this.\u0275fac=function(i){return new(i||l)(t.Y36(s.D),t.Y36(r.I))};static#e=this.\u0275cmp=t.Xpm({type:l,selectors:[["relcostogalpon-addgalpon"]],outputs:{addEvent:"addEvent"},decls:24,vars:16,consts:[[3,"visible","modal","breakpoints","draggable","resizable","visibleChange"],[1,"grid"],[1,"col-12"],[1,"card"],[1,"mo-toolsbar"],[1,"mo-first"],[1,"mo-second","form-group"],["for","entidad"],["id","entidad",3,"config","itemSelected"],[1,"mo-panel-content"],[1,"form-group"],["for","entidaddata"],[1,"input-control-info"],[3,"data","action"]],template:function(i,a){1&i&&(t.TgZ(0,"p-dialog",0),t.NdJ("visibleChange",function(p){return a.display=p}),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h2"),t._uU(7,"Agregar galpon a cuenta de Costo"),t.qZA()(),t.TgZ(8,"div",6)(9,"label",7),t._uU(10,"Buscar entidad:"),t.qZA(),t.TgZ(11,"mo-autocomplete",8),t.NdJ("itemSelected",function(p){return a.entidadSelected(p)}),t.qZA()()(),t.TgZ(12,"div",9)(13,"span",10)(14,"label",11),t._uU(15,"Entidad:"),t.qZA(),t.TgZ(16,"span",12),t._uU(17),t.qZA()(),t.TgZ(18,"span",10)(19,"label",11),t._uU(20,"Entidad:"),t.qZA(),t.TgZ(21,"span",12),t._uU(22),t.qZA()(),t.TgZ(23,"mo-report",13),t.NdJ("action",function(p){return a.reportEvent(p)}),t.qZA()()()()()()),2&i&&(t.Akn(t.DdM(14,A)),t.Q6J("visible",a.display)("modal",!0)("breakpoints",t.DdM(15,Z))("draggable",!0)("resizable",!0),t.xp6(11),t.Q6J("config",a.entidadconfig),t.xp6(6),t.AsE("",a.relcostogalpon.costo.id," - ",a.relcostogalpon.costo.nombre,""),t.xp6(5),t.lnq("",a.entidad.id," - ",a.entidad.nombre," ",a.entidad.direccion,""),t.xp6(1),t.Q6J("data",a.report))},dependencies:[b.t,T.J,C.V],encapsulation:2})}return l})();const _=["addgalpon"],M=[{path:"",component:d,children:[{path:"",component:(()=>{class l{constructor(e,i){this.dataservice=e,this.confirmservice=i,this.display=!0,this.entidad=new f.$,this.report={content:[],columns:[{field:"costo.id",columnName:"Id"},{field:"costo.nombre",columnName:"Cuenta Costo"},{field:"galpon.cuenta.id",columnName:"Galpon ID"},{field:"galpon.cuenta.nombre",columnName:"Galpon"},{field:"galpon.fechainicio",columnName:"Fecha Inicio",type:"date"},{field:"galpon.cantidad",columnName:"Nro Pollo",align:"right"},{actions:[{iconname:"add",iconclass:"material-symbols-outlined",event:"add",condition:a=>null!==a.costo.id},{iconname:"delete",iconclass:"material-symbols-outlined",event:"delete",condition:a=>0!==a.galpon.cuenta.id}]}]},this.entidadconfig={path:"/all/entidad/byname",columns:["id","nombre","direccion"]}}ngOnInit(){}openNewForm(){}getdata(){var e=new o.y;e.id=this.entidad.id,e.ordersby=["costo.id desc"],this.dataservice.postdata("/plgalpon/relcostogalpon/r/relsbyent",e).subscribe(i=>{this.report.content=i})}autocompleteSelected(e){this.entidad=e,this.getdata()}tableAction(e){switch(e.event){case"add":this.addgalpon.open(e.row);break;case"delete":this.confirmservice.setconfirm({message:"Eliminar galpon "+e.row.galpon.cuenta.id+" de la Cta de Costo ?",accept:()=>{this.dataservice.postdata("/plgalpon/relcostogalpon/d/rel",e.row.galpon).subscribe(a=>{this.getdata()})}})}}addGalponEvent(e){this.dataservice.postdata("/plgalpon/relcostogalpon/w/rel",e).subscribe(i=>{this.getdata()})}static#t=this.\u0275fac=function(i){return new(i||l)(t.Y36(s.D),t.Y36(r.I))};static#e=this.\u0275cmp=t.Xpm({type:l,selectors:[["app-relcostogalpon-manage"]],viewQuery:function(i,a){if(1&i&&t.Gf(_,7),2&i){let h;t.iGM(h=t.CRH())&&(a.addgalpon=h.first)}},decls:22,vars:6,consts:[[1,"mo-layout-content",3,"hidden"],[1,"grid"],[1,"col-12"],[1,"card"],[1,"mo-toolsbar"],[1,"mo-first"],[1,"mo-second","form-group"],["for","entidad"],["id","entidad",3,"config","itemSelected"],["pButton","","pRipple","","type","button","icon","pi pi-plus","pTooltip","Registrar Transporte",1,"p-button-rounded","p-button-text",3,"click"],[1,"mo-panel-content"],[1,"form-group"],["for","entidaddata"],[1,"input-control-info"],[3,"data","action"],[3,"addEvent"],["addgalpon",""]],template:function(i,a){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h2"),t._uU(7,"Relacion Costo Galpones"),t.qZA()(),t.TgZ(8,"div",6)(9,"label",7),t._uU(10,"Buscar entidad:"),t.qZA(),t.TgZ(11,"mo-autocomplete",8),t.NdJ("itemSelected",function(p){return a.autocompleteSelected(p)}),t.qZA(),t.TgZ(12,"button",9),t.NdJ("click",function(){return a.openNewForm()}),t.qZA()()(),t.TgZ(13,"div",10)(14,"span",11)(15,"label",12),t._uU(16,"Entidad:"),t.qZA(),t.TgZ(17,"span",13),t._uU(18),t.qZA()(),t.TgZ(19,"mo-report",14),t.NdJ("action",function(p){return a.tableAction(p)}),t.qZA()()()()()(),t.TgZ(20,"relcostogalpon-addgalpon",15,16),t.NdJ("addEvent",function(p){return a.addGalponEvent(p)}),t.qZA()),2&i&&(t.Q6J("hidden",!a.display),t.xp6(11),t.Q6J("config",a.entidadconfig),t.xp6(7),t.lnq("",a.entidad.id," - ",a.entidad.nombre," ",a.entidad.direccion,""),t.xp6(1),t.Q6J("data",a.report))},dependencies:[g.u,y.Hq,b.t,T.J,N],encapsulation:2})}return l})()},{path:"**",redirectTo:""}]}];let D=(()=>{class l{static#t=this.\u0275fac=function(i){return new(i||l)};static#e=this.\u0275mod=t.oAB({type:l});static#n=this.\u0275inj=t.cJS({imports:[m.Bz.forChild(M),m.Bz]})}return l})();var R=n(8368),F=n(4553),J=n(2454),P=n(9920);let B=(()=>{class l{static#t=this.\u0275fac=function(i){return new(i||l)};static#e=this.\u0275mod=t.oAB({type:l});static#n=this.\u0275inj=t.cJS({imports:[c.ez,D,R.U,F.W,J.q,C.S,P.K]})}return l})()},9920:(v,u,n)=>{n.d(u,{I:()=>m,K:()=>t});var c=n(4946);let m=(()=>{class d{constructor(){this._printStyle=[],this.previewOnly=!1,this.useExistingCss=!1,this.printDelay=0,this._styleSheetFile=""}set printStyle(o){for(let s in o)o.hasOwnProperty(s)&&this._printStyle.push((s+JSON.stringify(o[s])).replace(/['"]+/g,""));this.returnStyleValues()}returnStyleValues(){return`<style> ${this._printStyle.join(" ").replace(/,/g,";")} </style>`}set styleSheetFile(o){let s=function(r){return`<link rel="stylesheet" type="text/css" href="${r}">`};if(-1!==o.indexOf(",")){const r=o.split(",");for(let g of r)this._styleSheetFile=this._styleSheetFile+s(g)}else this._styleSheetFile=s(o)}returnStyleSheetLinkTags(){return this._styleSheetFile}getElementTag(o){const s=[],r=document.getElementsByTagName(o);for(let g=0;g<r.length;g++)s.push(r[g].outerHTML);return s.join("\r\n")}getFormData(o){for(var s=0;s<o.length;s++)o[s].defaultValue=o[s].value,o[s].checked&&(o[s].defaultChecked=!0)}getHtmlContents(){let o=document.getElementById(this.printSectionId),s=o.getElementsByTagName("input");this.getFormData(s);let r=o.getElementsByTagName("textarea");return this.getFormData(r),o.innerHTML}print(){let o,s,r="",g="";const y=this.getElementTag("base");this.useExistingCss&&(r=this.getElementTag("style"),g=this.getElementTag("link")),o=this.getHtmlContents(),s=window.open("","_blank","top=0,left=0,height=auto,width=auto"),s.document.open(),s.document.write(`\n      <html>\n        <head>\n          <title>${this.printTitle?this.printTitle:""}</title>\n          ${y}\n          ${this.returnStyleValues()}\n          ${this.returnStyleSheetLinkTags()}\n          ${r}\n          ${g}\n        </head>\n        <body>\n          ${o}\n          <script defer>\n            function triggerPrint(event) {\n              window.removeEventListener('load', triggerPrint, false);\n              ${this.previewOnly?"":`setTimeout(function() {\n                closeWindow(window.print());\n              }, ${this.printDelay});`}\n            }\n            function closeWindow(){\n                window.close();\n            }\n            window.addEventListener('load', triggerPrint, false);\n          <\/script>\n        </body>\n      </html>`),s.document.close()}}return d.\u0275fac=function(o){return new(o||d)},d.\u0275dir=c.lG2({type:d,selectors:[["button","ngxPrint",""]],hostBindings:function(o,s){1&o&&c.NdJ("click",function(){return s.print()})},inputs:{previewOnly:"previewOnly",printSectionId:"printSectionId",printTitle:"printTitle",useExistingCss:"useExistingCss",printDelay:"printDelay",printStyle:"printStyle",styleSheetFile:"styleSheetFile"}}),d})(),t=(()=>{class d{}return d.\u0275fac=function(o){return new(o||d)},d.\u0275mod=c.oAB({type:d}),d.\u0275inj=c.cJS({}),d})()}}]);