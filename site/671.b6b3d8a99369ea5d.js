"use strict";(self.webpackChunktukiweb=self.webpackChunktukiweb||[]).push([[671],{9709:(_,s,e)=>{e.d(s,{U:()=>i});var t=e(8196);class i{constructor(){this.id=0,this.nombre="",this.comentario="",this.tipo=new t.o,this.estado="ACTIVO",this.facprn="1",this.orden=1}}},8196:(_,s,e)=>{e.d(s,{o:()=>t});class t{constructor(){this.id=0,this.nombre=""}}},8555:(_,s,e)=>{e.d(s,{r:()=>u});var t=e(5289),i=e(698);class u{constructor(){this.id=0,this.entidad=new t.$,this.tipo="",this.nombre="",this.descripcion="",this.estado="ACTIVO",this.saldo=0,this.establecimiento=new i.A}}},5289:(_,s,e)=>{e.d(s,{$:()=>t});class t{constructor(){this.id=0,this.nombre="",this.direccion="",this.telefono=""}}},6084:(_,s,e)=>{e.d(s,{Q:()=>d});var t=e(8555),i=e(5413),u=e(8223);class d{constructor(){this.id=0,this.total="0.0",this.fechapendiente=new Date,this.transporte=new i.e,this.cuenta=new t.r,this.cuentadst=new t.r,this.estado="",this.tipo="",this.voucher=new u.c,this.detalle=[],this.devrel=0}}},5569:(_,s,e)=>{e.d(s,{y:()=>i});var t=e(9709);class i{constructor(){this.id=0,this.producto=new t.U,this.cantidad=0,this.pu=0,this.total=0,this.devrel=0}}},5413:(_,s,e)=>{e.d(s,{e:()=>i});var t=e(698);class i{constructor(){this.id=0,this.fecha=new Date,this.conductor="",this.comentario="",this.placa="",this.estado="",this.cantidad=0,this.establecimiento=new t.A}}},3297:(_,s,e)=>{e.d(s,{y:()=>t});class t{constructor(){this.id=0,this.sid=0,this.str="",this.sstr="",this.dec=0,this.sdec=0,this.date=new Date,this.sdate=new Date,this.ordersby=[],this.limit=0,this.offset=0}}},8223:(_,s,e)=>{e.d(s,{c:()=>t});class t{constructor(){this.id=0,this.vdate=new Date,this.doccode=0,this.vtype="",this.fechatra=new Date,this.agreement="",this.comment="",this.description="",this.amount=0,this.literal="",this.username="",this.estab_id=0}}},7163:(_,s,e)=>{e.d(s,{o:()=>n});var t=e(6814),i=e(7213),u=e(9920),d=e(707),h=e(4553),o=e(4946);let n=(()=>{class c{static#t=this.\u0275fac=function(p){return new(p||c)};static#e=this.\u0275mod=o.oAB({type:c});static#n=this.\u0275inj=o.cJS({imports:[t.ez,i.S,d.hJ,u.K,h.W]})}return c})()},6130:(_,s,e)=>{e.d(s,{T:()=>M});var t=e(4946),i=e(5413),u=e(2848),d=e(1106),h=e(9324),o=e(6084),n=e(7213),c=e(9920),m=e(6814);const E=function(){return{width:"70vw"}},p=function(){return{"960px":"75vw"}};let g=(()=>{class f{constructor(r){this.dataService=r,this.nota=new o.Q,this.display=!1,this.formSaveEvent=new t.vpe,this.report={content:[],columns:[{field:"id",columnName:"ID"},{field:"producto.nombre",columnName:"Producto"},{field:"cantidad",columnName:"Cantidad",align:"right"},{field:"pu",columnName:"PU",align:"right"},{field:"total",columnName:"SubTotal",align:"right"}]}}ngOnInit(){}open(r){this.dataService.getdata(r.url,{id:r.id}).subscribe(l=>{this.display=!0,this.nota=l,this.report.content=this.nota.detalle})}static#t=this.\u0275fac=function(l){return new(l||f)(t.Y36(u.D))};static#e=this.\u0275cmp=t.Xpm({type:f,selectors:[["app-notaview"]],outputs:{formSaveEvent:"formSaveEvent"},decls:52,vars:23,consts:[["header"," ",3,"visible","modal","breakpoints","draggable","resizable","visibleChange"],["id","print-section"],[1,"grid"],[1,"col-12"],[2,"width","100%"],["colspan","3",1,"test"],[3,"data"],[1,"test"],[1,"test",2,"text-align","right"],[1,"test",2,"text-align","center"],["printSectionId","print-section","ngxPrint","","styleSheetFile","assets/css/print.css"]],template:function(l,a){1&l&&(t.TgZ(0,"p-dialog",0),t.NdJ("visibleChange",function(T){return a.display=T}),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"table",4)(5,"tr")(6,"td",5)(7,"h2"),t._uU(8),t.qZA()()(),t.TgZ(9,"tr")(10,"td"),t._uU(11,"Entidad:"),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.ALo(16,"date"),t.qZA()(),t.TgZ(17,"tr")(18,"td"),t._uU(19,"CUENTA:"),t.qZA(),t.TgZ(20,"td"),t._uU(21),t.qZA(),t.TgZ(22,"td"),t._uU(23),t.qZA()()(),t._UZ(24,"mo-report",6),t.TgZ(25,"table",4)(26,"tr")(27,"td",7)(28,"h2"),t._uU(29,"TOTAL:"),t.qZA()(),t.TgZ(30,"td",8)(31,"h2"),t._uU(32),t.qZA()()()(),t._UZ(33,"br"),t.TgZ(34,"table",4)(35,"tr")(36,"td",9),t._uU(37,"--------------------------------------"),t.qZA(),t.TgZ(38,"td",9),t._uU(39,"--------------------------------------"),t.qZA()(),t.TgZ(40,"tr")(41,"td",9),t._uU(42,"Conformidad"),t.qZA(),t.TgZ(43,"td",9),t._uU(44,"Conformidad"),t.qZA()(),t.TgZ(45,"tr")(46,"td",9),t._uU(47,"Molino"),t.qZA(),t.TgZ(48,"td",9),t._uU(49),t.qZA()()()()()(),t.TgZ(50,"button",10),t._uU(51,"Imprimir"),t.qZA()()),2&l&&(t.Akn(t.DdM(21,E)),t.Q6J("visible",a.display)("modal",!0)("breakpoints",t.DdM(22,p))("draggable",!1)("resizable",!0),t.xp6(8),t.AsE("NOTA DE ",a.nota.tipo," N.",a.nota.voucher.doccode,""),t.xp6(5),t.lnq("",a.nota.cuenta.entidad.id," - ",a.nota.cuenta.entidad.nombre," | ",a.nota.cuenta.entidad.direccion,""),t.xp6(2),t.Oqu(t.lcZ(16,19,a.nota.fecharealizado)),t.xp6(6),t.AsE("",a.nota.cuenta.id," | ",a.nota.cuenta.nombre," "),t.xp6(2),t.hij("N.ID: ",a.nota.id,""),t.xp6(1),t.Q6J("data",a.report),t.xp6(8),t.Oqu(a.nota.total),t.xp6(17),t.Oqu(a.nota.transporte.conductor))},dependencies:[n.V,c.I,h.t,m.uU],encapsulation:2})}return f})();const v=["notaprint"];let M=(()=>{class f{constructor(r,l){this.dataService=r,this.confirmService=l,this.notaManageEvent=new t.vpe,this.path="",this.transporte=new i.e,this.datanotas={columns:[{field:"nota.id",columnName:"Id"},{field:"nota.estado",columnName:"Estado"},{field:"nota.cuenta.nombre",columnName:"Cuenta"},{field:"notadetalle.producto.nombre",columnName:"Producto"},{field:"notadetalle.cantidad",columnName:"Cant."},{field:"notadetalle.pu",columnName:"PU"},{field:"notadetalle.total",columnName:"Tot."},{actions:[{iconclass:"pi pi-print",event:"print",condition:a=>"REALIZADO"==a.nota.estado},{iconclass:"pi pi-pencil",event:"update",condition:a=>"PENDIENTE"===a.nota.estado},{iconclass:"pi pi-trash",event:"delete",condition:a=>"PENDIENTE"===a.nota.estado},{iconclass:"pi pi-times",event:"pending",condition:a=>"REALIZADO"===a.nota.estado},{iconclass:"pi pi-arrow-circle-right",event:"realize",condition:a=>"PENDIENTE"===a.nota.estado}]}],content:[]}}ngOnInit(){}update(r){this.transporte.id=r,this.getdata()}reportActionEvent(r){switch(r.event){case"update":this.notaManageEvent.emit({action:"update",value:r.row});break;case"delete":this.confirmService.setconfirm({message:"Eliminar Nota Nro '"+r.row.nota.id+"'?",accept:()=>{this.dataService.getdata(this.path+"/d/ndelete",{id:r.row.nota.id}).subscribe(a=>{this.notaManageEvent.emit({action:"delete",value:r.row}),this.getdata()})}});break;case"realize":this.confirmService.setconfirm({message:"Realizar Nota Nro '"+r.row.nota.id+"'?",accept:()=>{this.dataService.getdata(this.path+"/w/realizar",{id:r.row.nota.id}).subscribe(a=>{this.notaManageEvent.emit({action:"realize",value:r.row}),this.getdata(),this.print.open({url:this.path+"/r/nota",id:r.row.nota.id})})}});break;case"pending":this.confirmService.setconfirm({message:"Anular Nota Nro '"+r.row.nota.id+"'?",accept:()=>{this.dataService.getdata(this.path+"/d/pending",{id:r.row.nota.id}).subscribe(a=>{this.notaManageEvent.emit({action:"pending",value:r.row}),this.getdata()})}});break;case"print":this.print.open({url:this.path+"/r/nota",id:r.row.nota.id})}}getdata(){this.dataService.getdata(this.path+"/r/respnotas",{id:this.transporte.id}).subscribe(r=>{this.datanotas.content=r})}static#t=this.\u0275fac=function(l){return new(l||f)(t.Y36(u.D),t.Y36(d.I))};static#e=this.\u0275cmp=t.Xpm({type:f,selectors:[["notas-manage"]],viewQuery:function(l,a){if(1&l&&t.Gf(v,7),2&l){let D;t.iGM(D=t.CRH())&&(a.print=D.first)}},inputs:{path:"path"},outputs:{notaManageEvent:"notaManageEvent"},decls:3,vars:1,consts:[[3,"data","action"],["notaprint",""]],template:function(l,a){1&l&&(t.TgZ(0,"mo-report",0),t.NdJ("action",function(T){return a.reportActionEvent(T)}),t.qZA(),t._UZ(1,"app-notaview",null,1)),2&l&&t.Q6J("data",a.datanotas)},dependencies:[h.t,g],encapsulation:2})}return f})()},9604:(_,s,e)=>{e.d(s,{w:()=>o});var t=e(6814),i=e(8368),u=e(4553),d=e(7163),h=e(4946);let o=(()=>{class n{static#t=this.\u0275fac=function(E){return new(E||n)};static#e=this.\u0275mod=h.oAB({type:n});static#n=this.\u0275inj=h.cJS({imports:[t.ez,i.U,u.W,d.o]})}return n})()},2772:(_,s,e)=>{e.d(s,{Z:()=>c});var t=e(4946),i=e(95),u=e(5413),d=e(2848),h=e(707),o=e(3714),n=e(1532);let c=(()=>{class m{constructor(p,g){this.formBuilder=p,this.dataService=g,this.path="",this.formEvent=new t.vpe,this.transporte=new u.e,this.form=this.formBuilder.group({fecha:[this.transporte.fecha],conductor:[this.transporte.conductor,i.kI.required],comentario:[this.transporte.comentario],placa:[this.transporte.placa]})}ngOnInit(){}open(p){this.form.reset(),this.transporte=p,this.form.controls.fecha.setValue(new Date(p.fecha)),this.form.controls.conductor.setValue(p.conductor),this.form.controls.comentario.setValue(p.comentario),this.form.controls.placa.setValue(p.placa)}onSubmit(){let p=new u.e,g=this.form.getRawValue();p.id=this.transporte.id,p.conductor=g.conductor,p.comentario=g.comentario,p.fecha=g.fecha,this.dataService.postdata(this.path+"/w/respsave",p).subscribe(v=>{this.transporte=v,this.formEvent.emit(this.transporte)})}static#t=this.\u0275fac=function(g){return new(g||m)(t.Y36(i.QS),t.Y36(d.D))};static#e=this.\u0275cmp=t.Xpm({type:m,selectors:[["resp-form"]],inputs:{path:"path"},outputs:{formEvent:"formEvent"},decls:24,vars:3,consts:[[3,"formGroup","submit"],[1,"p-fluid","grid"],[1,"p-field","col-12","md:col-3","form-group"],["for","transid"],[1,"input-control-info"],[1,"p-field","col-12","md:col-9","form-group"],["for","transfecha"],["appendTo","body","formControlName","fecha","dateFormat","dd MM yy","inputId","transfecha",1,"input-control"],["for","transplaca"],["type","text","id","transplaca","pInputText","","formControlName","placa",1,"input-control"],["for","transconductor"],["type","text","id","transconductor","pInputText","","formControlName","conductor",1,"input-control"],[1,"p-field","col-12","md:col-12","form-group"],["for","transcomentario"],["type","text","id","transcomentario","pInputText","","formControlName","comentario",1,"input-control"],["type","submit","label","Guardar","styleClass","p-button-text",3,"disabled"]],template:function(g,v){1&g&&(t.TgZ(0,"form",0),t.NdJ("submit",function(){return v.onSubmit()}),t.TgZ(1,"div",1)(2,"div",2)(3,"label",3),t._uU(4,"ID:"),t.qZA(),t.TgZ(5,"span",4),t._uU(6),t.qZA()(),t.TgZ(7,"div",5)(8,"label",6),t._uU(9,"Fecha:"),t.qZA(),t._UZ(10,"p-calendar",7),t.qZA(),t.TgZ(11,"div",2)(12,"label",8),t._uU(13,"Placa:"),t.qZA(),t._UZ(14,"input",9),t.qZA(),t.TgZ(15,"div",5)(16,"label",10),t._uU(17,"Conductor:"),t.qZA(),t._UZ(18,"input",11),t.qZA(),t.TgZ(19,"div",12)(20,"label",13),t._uU(21,"Comentario:"),t.qZA(),t._UZ(22,"input",14),t.qZA()(),t._UZ(23,"p-button",15),t.qZA()),2&g&&(t.Q6J("formGroup",v.form),t.xp6(6),t.Oqu(v.transporte.id),t.xp6(17),t.Q6J("disabled",v.form.invalid))},dependencies:[h.zx,o.o,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,n.f],encapsulation:2})}return m})()},1310:(_,s,e)=>{e.d(s,{H:()=>o});var t=e(6814),i=e(8368),u=e(95),d=e(1532),h=e(4946);let o=(()=>{class n{static#t=this.\u0275fac=function(E){return new(E||n)};static#e=this.\u0275mod=h.oAB({type:n});static#n=this.\u0275inj=h.cJS({imports:[t.ez,i.U,u.UX,d._8]})}return n})()},9920:(_,s,e)=>{e.d(s,{I:()=>i,K:()=>u});var t=e(4946);let i=(()=>{class d{constructor(){this._printStyle=[],this.previewOnly=!1,this.useExistingCss=!1,this.printDelay=0,this._styleSheetFile=""}set printStyle(o){for(let n in o)o.hasOwnProperty(n)&&this._printStyle.push((n+JSON.stringify(o[n])).replace(/['"]+/g,""));this.returnStyleValues()}returnStyleValues(){return`<style> ${this._printStyle.join(" ").replace(/,/g,";")} </style>`}set styleSheetFile(o){let n=function(c){return`<link rel="stylesheet" type="text/css" href="${c}">`};if(-1!==o.indexOf(",")){const c=o.split(",");for(let m of c)this._styleSheetFile=this._styleSheetFile+n(m)}else this._styleSheetFile=n(o)}returnStyleSheetLinkTags(){return this._styleSheetFile}getElementTag(o){const n=[],c=document.getElementsByTagName(o);for(let m=0;m<c.length;m++)n.push(c[m].outerHTML);return n.join("\r\n")}getFormData(o){for(var n=0;n<o.length;n++)o[n].defaultValue=o[n].value,o[n].checked&&(o[n].defaultChecked=!0)}getHtmlContents(){let o=document.getElementById(this.printSectionId),n=o.getElementsByTagName("input");this.getFormData(n);let c=o.getElementsByTagName("textarea");return this.getFormData(c),o.innerHTML}print(){let o,n,c="",m="";const E=this.getElementTag("base");this.useExistingCss&&(c=this.getElementTag("style"),m=this.getElementTag("link")),o=this.getHtmlContents(),n=window.open("","_blank","top=0,left=0,height=auto,width=auto"),n.document.open(),n.document.write(`\n      <html>\n        <head>\n          <title>${this.printTitle?this.printTitle:""}</title>\n          ${E}\n          ${this.returnStyleValues()}\n          ${this.returnStyleSheetLinkTags()}\n          ${c}\n          ${m}\n        </head>\n        <body>\n          ${o}\n          <script defer>\n            function triggerPrint(event) {\n              window.removeEventListener('load', triggerPrint, false);\n              ${this.previewOnly?"":`setTimeout(function() {\n                closeWindow(window.print());\n              }, ${this.printDelay});`}\n            }\n            function closeWindow(){\n                window.close();\n            }\n            window.addEventListener('load', triggerPrint, false);\n          <\/script>\n        </body>\n      </html>`),n.document.close()}}return d.\u0275fac=function(o){return new(o||d)},d.\u0275dir=t.lG2({type:d,selectors:[["button","ngxPrint",""]],hostBindings:function(o,n){1&o&&t.NdJ("click",function(){return n.print()})},inputs:{previewOnly:"previewOnly",printSectionId:"printSectionId",printTitle:"printTitle",useExistingCss:"useExistingCss",printDelay:"printDelay",printStyle:"printStyle",styleSheetFile:"styleSheetFile"}}),d})(),u=(()=>{class d{}return d.\u0275fac=function(o){return new(o||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({}),d})()}}]);