"use strict";(self.webpackChunktukiweb=self.webpackChunktukiweb||[]).push([[357],{7492:(M,I,u)=>{u.d(I,{J:()=>O});var a=u(4946),e=u(7757),T=u(6814),m=u(7327),d=u(5219);const E=["moautocomplete"];function g(_,y){if(1&_&&(a.ynx(0),a._uU(1),a.BQk()),2&_){const c=y.$implicit,r=a.oxw().$implicit,h=a.oxw();a.xp6(1),a.hij(" ",h.getfieldvalue(r,c)," | ")}}function w(_,y){if(1&_&&(a._uU(0," | "),a.YNc(1,g,2,1,"ng-container",3)),2&_){const c=a.oxw();a.xp6(1),a.Q6J("ngForOf",c.config.columns)}}let O=(()=>{class _{constructor(c){this.datasevice=c,this.defaulconfig={path:"/find",columns:["id","nombre"],minlength:2},this.path="",this.itemSelected=new a.vpe,this.results=[]}ngOnInit(){mosetdefaults(this.defaulconfig,this.config)}getfieldvalue(c,r){return mogetfieldvalue(c,r)}setFocus(){this.autocomplete.focusInput()}search(c){this.datasevice.getdata(this.path+this.config.path,{q:c.query}).subscribe(r=>{this.results=r})}selected(c){this.itemSelected.emit(c)}static#e=this.\u0275fac=function(r){return new(r||_)(a.Y36(e.D))};static#t=this.\u0275cmp=a.Xpm({type:_,selectors:[["mo-autocomplete"]],viewQuery:function(r,h){if(1&r&&a.Gf(E,5),2&r){let C;a.iGM(C=a.CRH())&&(h.autocomplete=C.first)}},inputs:{path:"path",config:"config"},outputs:{itemSelected:"itemSelected"},decls:3,vars:3,consts:[["field","autocomplete",3,"suggestions","showEmptyMessage","minLength","completeMethod","onSelect"],["moautocomplete",""],["pTemplate","item"],[4,"ngFor","ngForOf"]],template:function(r,h){1&r&&(a.TgZ(0,"p-autoComplete",0,1),a.NdJ("completeMethod",function(v){return h.search(v)})("onSelect",function(v){return h.selected(v)}),a.YNc(2,w,2,1,"ng-template",2),a.qZA()),2&r&&a.Q6J("suggestions",h.results)("showEmptyMessage",!0)("minLength",h.config.minlength)},dependencies:[T.sg,m.Qc,d.jx],encapsulation:2})}return _})()},961:(M,I,u)=>{u.d(I,{q:()=>m});var a=u(6814),e=u(7327),T=u(4946);let m=(()=>{class d{static#e=this.\u0275fac=function(w){return new(w||d)};static#t=this.\u0275mod=T.oAB({type:d});static#n=this.\u0275inj=T.cJS({imports:[a.ez,e.WN]})}return d})()},7327:(M,I,u)=>{u.d(I,{Qc:()=>k,WN:()=>Pe});var a=u(6814),e=u(4946),T=u(95),m=u(5219),d=u(218),E=u(707),g=u(2076),w=u(3714),O=u(5807),_=u(4480),y=u(6489),c=u(2332),r=u(8468),h=u(8717),C=u(7778),v=u(6005);const L=["container"],D=["in"],F=["multiIn"],G=["multiContainer"],K=["ddBtn"],Q=["items"],J=["scroller"],Z=["overlay"],N=function(n,s){return{"p-autocomplete-dd-input":n,"p-disabled":s}};function B(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"input",11,12),e.NdJ("click",function(i){e.CHM(t);const l=e.oxw();return e.KtG(l.onInputClick(i))})("input",function(i){e.CHM(t);const l=e.oxw();return e.KtG(l.onInput(i))})("keydown",function(i){e.CHM(t);const l=e.oxw();return e.KtG(l.onKeydown(i))})("keyup",function(i){e.CHM(t);const l=e.oxw();return e.KtG(l.onKeyup(i))})("focus",function(i){e.CHM(t);const l=e.oxw();return e.KtG(l.onInputFocus(i))})("blur",function(i){e.CHM(t);const l=e.oxw();return e.KtG(l.onInputBlur(i))})("change",function(i){e.CHM(t);const l=e.oxw();return e.KtG(l.onInputChange(i))})("paste",function(i){e.CHM(t);const l=e.oxw();return e.KtG(l.onInputPaste(i))}),e.qZA()}if(2&n){const t=e.oxw();e.Tol(t.inputStyleClass),e.Q6J("autofocus",t.autofocus)("ngStyle",t.inputStyle)("autocomplete",t.autocomplete)("ngClass",e.WLB(20,N,t.dropdown,t.disabled))("value",t.inputFieldValue)("readonly",t.readonly)("disabled",t.disabled),e.uIk("type",t.type)("id",t.inputId)("required",t.required)("name",t.name)("placeholder",t.placeholder)("size",t.size)("maxlength",t.maxlength)("tabindex",t.tabindex)("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledBy)("aria-required",t.required)}}function U(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"TimesIcon",15),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.clear())}),e.qZA()}2&n&&e.Q6J("styleClass","p-autocomplete-clear-icon")}function Y(n,s){}function H(n,s){1&n&&e.YNc(0,Y,0,0,"ng-template")}function P(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"span",16),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.clear())}),e.YNc(1,H,1,0,null,8),e.qZA()}if(2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngTemplateOutlet",t.clearIconTemplate)}}function V(n,s){if(1&n&&(e.ynx(0),e.YNc(1,U,1,1,"TimesIcon",13),e.YNc(2,P,2,1,"span",14),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",!t.clearIconTemplate),e.xp6(1),e.Q6J("ngIf",t.clearIconTemplate)}}function z(n,s){1&n&&e.GkF(0)}function R(n,s){if(1&n&&(e.TgZ(0,"span",30),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit,o=e.oxw(2);e.xp6(1),e.Oqu(o.resolveFieldData(t))}}function W(n,s){1&n&&e._UZ(0,"TimesCircleIcon",31),2&n&&e.Q6J("styleClass","p-autocomplete-token-icon")}function q(n,s){}function $(n,s){1&n&&e.YNc(0,q,0,0,"ng-template")}function j(n,s){if(1&n&&(e.TgZ(0,"span",32),e.YNc(1,$,1,0,null,8),e.qZA()),2&n){const t=e.oxw(3);e.xp6(1),e.Q6J("ngTemplateOutlet",t.removeIconTemplate)}}const A=function(n){return{$implicit:n}};function X(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"li",23,24),e.YNc(2,z,1,0,"ng-container",25),e.YNc(3,R,2,1,"span",26),e.TgZ(4,"span",27),e.NdJ("click",function(){e.CHM(t);const i=e.MAs(1),l=e.oxw(2);return e.KtG(l.removeItem(i))}),e.YNc(5,W,1,1,"TimesCircleIcon",28),e.YNc(6,j,2,1,"span",29),e.qZA()()}if(2&n){const t=s.$implicit,o=e.oxw(2);e.xp6(2),e.Q6J("ngTemplateOutlet",o.selectedItemTemplate)("ngTemplateOutletContext",e.VKq(5,A,t)),e.xp6(1),e.Q6J("ngIf",!o.selectedItemTemplate),e.xp6(2),e.Q6J("ngIf",!o.removeIconTemplate),e.xp6(1),e.Q6J("ngIf",o.removeIconTemplate)}}const ee=function(n,s){return{"p-disabled":n,"p-focus":s}};function te(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"ul",17,18),e.NdJ("click",function(){e.CHM(t);const i=e.MAs(5);return e.KtG(i.focus())}),e.YNc(2,X,7,7,"li",19),e.TgZ(3,"li",20)(4,"input",21,22),e.NdJ("input",function(i){e.CHM(t);const l=e.oxw();return e.KtG(l.onInput(i))})("click",function(i){e.CHM(t);const l=e.oxw();return e.KtG(l.onInputClick(i))})("keydown",function(i){e.CHM(t);const l=e.oxw();return e.KtG(l.onKeydown(i))})("keyup",function(i){e.CHM(t);const l=e.oxw();return e.KtG(l.onKeyup(i))})("focus",function(i){e.CHM(t);const l=e.oxw();return e.KtG(l.onInputFocus(i))})("blur",function(i){e.CHM(t);const l=e.oxw();return e.KtG(l.onInputBlur(i))})("change",function(i){e.CHM(t);const l=e.oxw();return e.KtG(l.onInputChange(i))})("paste",function(i){e.CHM(t);const l=e.oxw();return e.KtG(l.onInputPaste(i))}),e.qZA()()()}if(2&n){const t=e.oxw();e.Q6J("ngClass",e.WLB(20,ee,t.disabled,t.focus)),e.xp6(2),e.Q6J("ngForOf",t.value),e.xp6(2),e.Tol(t.inputStyleClass),e.Q6J("autofocus",t.autofocus)("disabled",t.disabled)("readonly",t.readonly)("autocomplete",t.autocomplete)("ngStyle",t.inputStyle),e.uIk("type",t.type)("id",t.inputId)("placeholder",t.value&&t.value.length?null:t.placeholder)("tabindex",t.tabindex)("maxlength",t.maxlength)("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledBy)("aria-required",t.required)("aria-controls",t.listId)("aria-expanded",t.overlayVisible)("aria-activedescendant","p-highlighted-option")}}function ne(n,s){1&n&&e._UZ(0,"SpinnerIcon",35),2&n&&e.Q6J("styleClass","p-autocomplete-loader")("spin",!0)}function ie(n,s){}function oe(n,s){1&n&&e.YNc(0,ie,0,0,"ng-template")}function le(n,s){if(1&n&&(e.TgZ(0,"span",36),e.YNc(1,oe,1,0,null,8),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngTemplateOutlet",t.loadingIconTemplate)}}function se(n,s){if(1&n&&(e.ynx(0),e.YNc(1,ne,1,2,"SpinnerIcon",33),e.YNc(2,le,2,1,"span",34),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",!t.loadingIconTemplate),e.xp6(1),e.Q6J("ngIf",t.loadingIconTemplate)}}function ae(n,s){if(1&n&&e._UZ(0,"span",40),2&n){const t=e.oxw(2);e.Q6J("ngClass",t.dropdownIcon)}}function pe(n,s){1&n&&e._UZ(0,"ChevronDownIcon")}function ue(n,s){}function ce(n,s){1&n&&e.YNc(0,ue,0,0,"ng-template")}function re(n,s){if(1&n&&(e.ynx(0),e.YNc(1,pe,1,0,"ChevronDownIcon",3),e.YNc(2,ce,1,0,null,8),e.BQk()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",!t.dropdownIconTemplate),e.xp6(1),e.Q6J("ngTemplateOutlet",t.dropdownIconTemplate)}}function _e(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"button",37,38),e.NdJ("click",function(i){e.CHM(t);const l=e.oxw();return e.KtG(l.handleDropdownClick(i))}),e.YNc(2,ae,1,1,"span",39),e.YNc(3,re,3,2,"ng-container",3),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("disabled",t.disabled),e.uIk("aria-label",t.dropdownAriaLabel)("tabindex",t.tabindex),e.xp6(2),e.Q6J("ngIf",t.dropdownIcon),e.xp6(1),e.Q6J("ngIf",!t.dropdownIcon)}}function me(n,s){1&n&&e.GkF(0)}function he(n,s){1&n&&e.GkF(0)}const S=function(n,s){return{$implicit:n,options:s}};function de(n,s){if(1&n&&e.YNc(0,he,1,0,"ng-container",25),2&n){const t=s.$implicit,o=s.options;e.oxw(2);const i=e.MAs(14);e.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",e.WLB(2,S,t,o))}}function ge(n,s){1&n&&e.GkF(0)}const fe=function(n){return{options:n}};function Ce(n,s){if(1&n&&e.YNc(0,ge,1,0,"ng-container",25),2&n){const t=s.options,o=e.oxw(3);e.Q6J("ngTemplateOutlet",o.loaderTemplate)("ngTemplateOutletContext",e.VKq(2,fe,t))}}function xe(n,s){1&n&&(e.ynx(0),e.YNc(1,Ce,1,4,"ng-template",44),e.BQk())}const b=function(n){return{height:n}};function Te(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"p-scroller",41,42),e.NdJ("onLazyLoad",function(i){e.CHM(t);const l=e.oxw();return e.KtG(l.onLazyLoad.emit(i))}),e.YNc(2,de,1,5,"ng-template",43),e.YNc(3,xe,2,0,"ng-container",3),e.qZA()}if(2&n){const t=e.oxw();e.Akn(e.VKq(8,b,t.scrollHeight)),e.Q6J("items",t.suggestions)("itemSize",t.virtualScrollItemSize||t._itemSize)("autoSize",!0)("lazy",t.lazy)("options",t.virtualScrollOptions),e.xp6(3),e.Q6J("ngIf",t.loaderTemplate)}}function ye(n,s){1&n&&e.GkF(0)}const ve=function(){return{}};function Ie(n,s){if(1&n&&(e.ynx(0),e.YNc(1,ye,1,0,"ng-container",25),e.BQk()),2&n){const t=e.oxw(),o=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",o)("ngTemplateOutletContext",e.WLB(3,S,t.suggestions,e.DdM(2,ve)))}}function we(n,s){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit,o=e.oxw(3);e.xp6(1),e.Oqu(o.getOptionGroupLabel(t)||"empty")}}function Oe(n,s){1&n&&e.GkF(0)}function Ee(n,s){1&n&&e.GkF(0)}function Ae(n,s){if(1&n&&(e.TgZ(0,"li",50),e.YNc(1,we,2,1,"span",3),e.YNc(2,Oe,1,0,"ng-container",25),e.qZA(),e.YNc(3,Ee,1,0,"ng-container",25)),2&n){const t=s.$implicit,o=e.oxw(2).options,i=e.MAs(5),l=e.oxw();e.Q6J("ngStyle",e.VKq(6,b,o.itemSize+"px")),e.xp6(1),e.Q6J("ngIf",!l.groupTemplate),e.xp6(1),e.Q6J("ngTemplateOutlet",l.groupTemplate)("ngTemplateOutletContext",e.VKq(8,A,t)),e.xp6(1),e.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",e.VKq(10,A,l.getOptionGroupChildren(t)))}}function be(n,s){if(1&n&&(e.ynx(0),e.YNc(1,Ae,4,12,"ng-template",49),e.BQk()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngForOf",t)}}function Me(n,s){1&n&&e.GkF(0)}function Se(n,s){if(1&n&&(e.ynx(0),e.YNc(1,Me,1,0,"ng-container",25),e.BQk()),2&n){const t=e.oxw().$implicit,o=e.MAs(5);e.xp6(1),e.Q6J("ngTemplateOutlet",o)("ngTemplateOutletContext",e.VKq(2,A,t))}}function ke(n,s){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit,o=e.oxw(3);e.xp6(1),e.Oqu(o.resolveFieldData(t))}}function Le(n,s){1&n&&e.GkF(0)}const De=function(n){return{"p-highlight":n}},Fe=function(n,s){return{$implicit:n,index:s}};function Ge(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"li",52),e.NdJ("click",function(){const l=e.CHM(t).$implicit,p=e.oxw(3);return e.KtG(p.selectItem(l))}),e.YNc(1,ke,2,1,"span",3),e.YNc(2,Le,1,0,"ng-container",25),e.qZA()}if(2&n){const t=s.$implicit,o=s.index,i=e.oxw(2).options,l=e.oxw();e.Q6J("ngStyle",e.VKq(6,b,i.itemSize+"px"))("ngClass",e.VKq(8,De,t===l.highlightOption))("id",l.highlightOption==t?"p-highlighted-option":""),e.xp6(1),e.Q6J("ngIf",!l.itemTemplate),e.xp6(1),e.Q6J("ngTemplateOutlet",l.itemTemplate)("ngTemplateOutletContext",e.WLB(10,Fe,t,i.getOptions?i.getOptions(o):o))}}function Ke(n,s){1&n&&e.YNc(0,Ge,3,13,"li",51),2&n&&e.Q6J("ngForOf",s.$implicit)}function Qe(n,s){if(1&n&&(e.ynx(0),e._uU(1),e.BQk()),2&n){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.emptyMessageLabel," ")}}function Je(n,s){1&n&&e.GkF(0,null,55)}function Ze(n,s){if(1&n&&(e.TgZ(0,"li",53),e.YNc(1,Qe,2,1,"ng-container",54),e.YNc(2,Je,2,0,"ng-container",8),e.qZA()),2&n){const t=e.oxw().options,o=e.oxw();e.Q6J("ngStyle",e.VKq(4,b,t.itemSize+"px")),e.xp6(1),e.Q6J("ngIf",!o.emptyTemplate)("ngIfElse",o.empty),e.xp6(1),e.Q6J("ngTemplateOutlet",o.emptyTemplate)}}function Ne(n,s){if(1&n&&(e.TgZ(0,"ul",45,46),e.YNc(2,be,2,1,"ng-container",3),e.YNc(3,Se,2,4,"ng-container",3),e.YNc(4,Ke,1,1,"ng-template",null,47,e.W1O),e.YNc(6,Ze,3,6,"li",48),e.qZA()),2&n){const t=s.options,o=e.oxw();e.Akn(t.contentStyle),e.Q6J("ngClass",t.contentStyleClass),e.uIk("id",o.listId),e.xp6(2),e.Q6J("ngIf",o.group),e.xp6(1),e.Q6J("ngIf",!o.group),e.xp6(3),e.Q6J("ngIf",o.noResults&&o.showEmptyMessage)}}function Be(n,s){1&n&&e.GkF(0)}const Ue=function(n,s){return{"p-autocomplete p-component":!0,"p-autocomplete-dd":n,"p-autocomplete-multiple":s}},Ye=function(){return["p-autocomplete-panel p-component"]},He={provide:T.JU,useExisting:(0,e.Gpc)(()=>k),multi:!0};let k=(()=>{class n{document;el;renderer;cd;differs;config;overlayService;zone;minLength=1;delay=300;style;panelStyle;styleClass;panelStyleClass;inputStyle;inputId;inputStyleClass;placeholder;readonly;disabled;scrollHeight="200px";lazy=!1;virtualScroll;virtualScrollItemSize;virtualScrollOptions;maxlength;name;required;size;appendTo;autoHighlight;forceSelection;type="text";_autoZIndex;get autoZIndex(){return this._autoZIndex}set autoZIndex(t){this._autoZIndex=t,console.warn("The autoZIndex property is deprecated since v14.2.0, use overlayOptions property instead.")}_baseZIndex;get baseZIndex(){return this._baseZIndex}set baseZIndex(t){this._baseZIndex=t,console.warn("The baseZIndex property is deprecated since v14.2.0, use overlayOptions property instead.")}ariaLabel;dropdownAriaLabel;ariaLabelledBy;dropdownIcon;unique=!0;group;completeOnFocus=!1;showClear=!1;field;dropdown;showEmptyMessage;dropdownMode="blank";multiple;tabindex;dataKey;emptyMessage;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autofocus;autocomplete="off";optionGroupChildren;optionGroupLabel;overlayOptions;get suggestions(){return this._suggestions}set suggestions(t){this._suggestions=t,this.handleSuggestionsChange()}get itemSize(){return this._itemSize}set itemSize(t){this._itemSize=t,console.warn("The itemSize property is deprecated, use virtualScrollItemSize property instead.")}completeMethod=new e.vpe;onSelect=new e.vpe;onUnselect=new e.vpe;onFocus=new e.vpe;onBlur=new e.vpe;onDropdownClick=new e.vpe;onClear=new e.vpe;onKeyUp=new e.vpe;onShow=new e.vpe;onHide=new e.vpe;onLazyLoad=new e.vpe;containerEL;inputEL;multiInputEl;multiContainerEL;dropdownButton;itemsViewChild;scroller;overlayViewChild;templates;_itemSize;itemsWrapper;itemTemplate;emptyTemplate;headerTemplate;footerTemplate;selectedItemTemplate;groupTemplate;loaderTemplate;removeIconTemplate;loadingIconTemplate;clearIconTemplate;dropdownIconTemplate;value;_suggestions;onModelChange=()=>{};onModelTouched=()=>{};timeout;overlayVisible=!1;suggestionsUpdated;highlightOption;highlightOptionChanged;focus=!1;filled;inputClick;inputKeyDown;noResults;differ;inputFieldValue=null;loading;scrollHandler;documentResizeListener;forceSelectionUpdateModelTimeout;listId;itemClicked;inputValue=null;isSearching=!1;constructor(t,o,i,l,p,x,f,Ve){this.document=t,this.el=o,this.renderer=i,this.cd=l,this.differs=p,this.config=x,this.overlayService=f,this.zone=Ve,this.differ=p.find([]).create(void 0),this.listId=(0,c.Th)()+"_list"}ngAfterViewChecked(){this.suggestionsUpdated&&this.overlayViewChild&&this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild&&this.overlayViewChild.alignOverlay()},1),this.suggestionsUpdated=!1}),this.highlightOptionChanged&&this.zone.runOutsideAngular(()=>{setTimeout(()=>{if(this.overlayViewChild&&this.itemsWrapper){let t=g.p.findSingle(this.overlayViewChild.overlayViewChild.nativeElement,"li.p-highlight");t&&g.p.scrollInView(this.itemsWrapper,t)}},1),this.highlightOptionChanged=!1})}handleSuggestionsChange(){null!=this._suggestions&&this.loading&&(this.highlightOption=null,this._suggestions.length?(this.noResults=!1,this.show(),this.suggestionsUpdated=!0,this.autoHighlight&&(this.highlightOption=this._suggestions[0])):(this.noResults=!0,this.showEmptyMessage?(this.show(),this.suggestionsUpdated=!0):this.hide()),this.loading=!1,this.isSearching=!1)}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"item":default:this.itemTemplate=t.template;break;case"group":this.groupTemplate=t.template;break;case"selectedItem":this.selectedItemTemplate=t.template;break;case"header":this.headerTemplate=t.template;break;case"empty":this.emptyTemplate=t.template;break;case"footer":this.footerTemplate=t.template;break;case"loader":this.loaderTemplate=t.template;break;case"removetokenicon":this.removeIconTemplate=t.template;break;case"loadingicon":this.loadingIconTemplate=t.template;break;case"clearicon":this.clearIconTemplate=t.template;break;case"dropdownicon":this.dropdownIconTemplate=t.template}})}writeValue(t){this.value=t,this.filled=!(!this.value||!this.value.length),this.updateInputField(),this.cd.markForCheck()}getOptionGroupChildren(t){return this.optionGroupChildren?c.gb.resolveFieldData(t,this.optionGroupChildren):t.items}getOptionGroupLabel(t){return this.optionGroupLabel?c.gb.resolveFieldData(t,this.optionGroupLabel):null!=t.label?t.label:t}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}onInput(t){if(!this.inputKeyDown&&g.p.isIE())return;this.timeout&&clearTimeout(this.timeout);let o=t.target.value;this.inputValue=o,!this.multiple&&!this.forceSelection&&this.onModelChange(o),0===o.length&&!this.multiple&&(this.value=null,this.hide(),this.onClear.emit(t),this.onModelChange(o)),o.length>=this.minLength?this.timeout=setTimeout(()=>{this.search(t,o)},this.delay):this.hide(),this.updateFilledState(),this.inputKeyDown=!1}onInputClick(t){this.inputClick=!0}search(t,o){this.isSearching||(this.isSearching=!0,this.loading=!0,this.completeMethod.emit({originalEvent:t,query:o}),setTimeout(()=>{this.isSearching=!1},100))}selectItem(t,o=!0){this.forceSelectionUpdateModelTimeout&&(clearTimeout(this.forceSelectionUpdateModelTimeout),this.forceSelectionUpdateModelTimeout=null),this.multiple?(this.multiInputEl.nativeElement.value="",this.value=this.value||[],(!this.isSelected(t)||!this.unique)&&(this.value=[...this.value,t],this.onModelChange(this.value))):(this.inputEL.nativeElement.value=this.resolveFieldData(t),this.value=t,this.onModelChange(this.value)),this.onSelect.emit(t),this.updateFilledState(),o&&(this.itemClicked=!0,this.focusInput()),this.hide()}show(t){(this.multiInputEl||this.inputEL)&&!this.overlayVisible&&(this.multiple?this.multiInputEl?.nativeElement.ownerDocument.activeElement==this.multiInputEl?.nativeElement:this.inputEL?.nativeElement.ownerDocument.activeElement==this.inputEL?.nativeElement)&&(this.overlayVisible=!0),this.onShow.emit(t),this.cd.markForCheck()}clear(){this.value=null,this.inputValue=null,this.multiple?this.multiInputEl.nativeElement.value="":(this.inputValue=null,this.inputEL.nativeElement.value=""),this.updateFilledState(),this.onModelChange(this.value),this.onClear.emit()}onOverlayAnimationStart(t){"visible"===t.toState&&(this.itemsWrapper=g.p.findSingle(this.overlayViewChild.overlayViewChild?.nativeElement,this.virtualScroll?".p-scroller":".p-autocomplete-panel"),this.virtualScroll&&this.scroller?.setContentEl(this.itemsViewChild?.nativeElement))}resolveFieldData(t){let o=this.field?c.gb.resolveFieldData(t,this.field):t;return void 0!==o?o:""}hide(t){this.overlayVisible=!1,this.onHide.emit(t),this.cd.markForCheck()}handleDropdownClick(t){if(this.overlayVisible)this.hide(t);else{this.focusInput();let o=this.multiple?this.multiInputEl.nativeElement.value:this.inputEL.nativeElement.value;"blank"===this.dropdownMode?(this.onDropdownClick.emit({originalEvent:t,query:""}),this.search(t,"")):"current"===this.dropdownMode&&(this.onDropdownClick.emit({originalEvent:t,query:o}),this.search(t,o))}}focusInput(){this.multiple?this.multiInputEl.nativeElement.focus():this.inputEL?.nativeElement.focus()}get emptyMessageLabel(){return this.emptyMessage||this.config.getTranslation(m.ws.EMPTY_MESSAGE)}removeItem(t){let o=g.p.index(t),i=this.value[o];this.value=this.value.filter((l,p)=>p!=o),this.onModelChange(this.value),this.updateFilledState(),this.onUnselect.emit(i)}onKeydown(t){if(this.overlayVisible)switch(t.which){case 40:if(this.group){let i=this.findOptionGroupIndex(this.highlightOption,this.suggestions);if(-1!==i){let l=i.itemIndex+1;l<this.getOptionGroupChildren(this.suggestions[i.groupIndex]).length?(this.highlightOption=this.getOptionGroupChildren(this.suggestions[i.groupIndex])[l],this.highlightOptionChanged=!0):this.suggestions[i.groupIndex+1]&&(this.highlightOption=this.getOptionGroupChildren(this.suggestions[i.groupIndex+1])[0],this.highlightOptionChanged=!0)}else this.highlightOption=this.getOptionGroupChildren(this.suggestions[0])[0]}else{let i=this.findOptionIndex(this.highlightOption,this.suggestions);if(-1!=i){var o=i+1;o!=this.suggestions.length&&(this.highlightOption=this.suggestions[o],this.highlightOptionChanged=!0)}else this.highlightOption=this.suggestions[0]}t.preventDefault();break;case 38:if(this.group){let i=this.findOptionGroupIndex(this.highlightOption,this.suggestions);if(-1!==i){let l=i.itemIndex-1;if(l>=0)this.highlightOption=this.getOptionGroupChildren(this.suggestions[i.groupIndex])[l],this.highlightOptionChanged=!0;else if(l<0){let p=this.suggestions[i.groupIndex-1];p&&(this.highlightOption=this.getOptionGroupChildren(p)[this.getOptionGroupChildren(p).length-1],this.highlightOptionChanged=!0)}}}else{let i=this.findOptionIndex(this.highlightOption,this.suggestions);i>0&&(this.highlightOption=this.suggestions[i-1],this.highlightOptionChanged=!0)}t.preventDefault();break;case 13:this.highlightOption&&(this.selectItem(this.highlightOption),this.hide()),t.preventDefault();break;case 27:this.hide(),t.preventDefault();break;case 9:this.highlightOption&&this.selectItem(this.highlightOption),this.hide()}else 40===t.which&&this.suggestions?this.search(t,t.target.value):t.ctrlKey&&"z"===t.key&&!this.multiple?(this.inputEL.nativeElement.value=this.resolveFieldData(null),this.value="",this.onModelChange(this.value)):t.ctrlKey&&"z"===t.key&&this.multiple&&(this.value.pop(),this.onModelChange(this.value),this.updateFilledState());if(this.multiple&&8===t.which&&this.value&&this.value.length&&!this.multiInputEl?.nativeElement.value){this.value=[...this.value];const i=this.value.pop();this.onModelChange(this.value),this.updateFilledState(),this.onUnselect.emit(i)}this.inputKeyDown=!0}onKeyup(t){this.onKeyUp.emit(t)}onInputFocus(t){!this.itemClicked&&this.completeOnFocus&&this.search(t,this.multiple?this.multiInputEl?.nativeElement.value:this.inputEL?.nativeElement.value),this.focus=!0,this.onFocus.emit(t),this.itemClicked=!1}onInputBlur(t){this.focus=!1,this.onModelTouched(),this.onBlur.emit(t)}onInputChange(t){if(this.forceSelection){let o=!1,l=t.target.value.trim();if(this.suggestions){let p=[...this.suggestions];if(this.group){let x=this.suggestions.filter(f=>f[this.optionGroupChildren]).flatMap(f=>f[this.optionGroupChildren]);p=p.concat(x)}for(let x of p){let f=this.field?c.gb.resolveFieldData(x,this.field):x;if(f&&l.toLowerCase()===f.toLowerCase().trim()){o=!0,this.forceSelectionUpdateModelTimeout=setTimeout(()=>{this.selectItem(x,!1)},250);break}}}o||(this.multiple?this.multiInputEl.nativeElement.value="":(this.value=null,this.inputEL.nativeElement.value=""),this.onClear.emit(t),this.onModelChange(this.value),this.updateFilledState())}}onInputPaste(t){this.onKeydown(t)}isSelected(t){let o=!1;if(this.value&&this.value.length)for(let i=0;i<this.value.length;i++)if(c.gb.equals(this.value[i],t,this.dataKey)){o=!0;break}return o}findOptionIndex(t,o){let i=-1;if(o)for(let l=0;l<o.length;l++)if(c.gb.equals(t,o[l])){i=l;break}return i}findOptionGroupIndex(t,o){let i,l;if(o)for(let p=0;p<o.length&&(i=p,l=this.findOptionIndex(t,this.getOptionGroupChildren(o[p])),-1===l);p++);return-1!==l?{groupIndex:i,itemIndex:l}:-1}updateFilledState(){this.filled=this.multiple?this.value&&this.value.length||this.multiInputEl&&this.multiInputEl.nativeElement&&""!=this.multiInputEl.nativeElement.value:this.inputFieldValue&&""!=this.inputFieldValue||this.inputEL&&this.inputEL.nativeElement&&""!=this.inputEL.nativeElement.value}updateInputField(){let t=this.resolveFieldData(this.value);this.inputFieldValue=t,this.inputEL&&this.inputEL.nativeElement&&(this.inputEL.nativeElement.value=t),this.updateFilledState()}ngOnDestroy(){this.forceSelectionUpdateModelTimeout&&(clearTimeout(this.forceSelectionUpdateModelTimeout),this.forceSelectionUpdateModelTimeout=null),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null)}static \u0275fac=function(o){return new(o||n)(e.Y36(a.K0),e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(e.sBO),e.Y36(e.ZZ4),e.Y36(m.b4),e.Y36(m.F0),e.Y36(e.R0b))};static \u0275cmp=e.Xpm({type:n,selectors:[["p-autoComplete"]],contentQueries:function(o,i,l){if(1&o&&e.Suo(l,m.jx,4),2&o){let p;e.iGM(p=e.CRH())&&(i.templates=p)}},viewQuery:function(o,i){if(1&o&&(e.Gf(L,5),e.Gf(D,5),e.Gf(F,5),e.Gf(G,5),e.Gf(K,5),e.Gf(Q,5),e.Gf(J,5),e.Gf(Z,5)),2&o){let l;e.iGM(l=e.CRH())&&(i.containerEL=l.first),e.iGM(l=e.CRH())&&(i.inputEL=l.first),e.iGM(l=e.CRH())&&(i.multiInputEl=l.first),e.iGM(l=e.CRH())&&(i.multiContainerEL=l.first),e.iGM(l=e.CRH())&&(i.dropdownButton=l.first),e.iGM(l=e.CRH())&&(i.itemsViewChild=l.first),e.iGM(l=e.CRH())&&(i.scroller=l.first),e.iGM(l=e.CRH())&&(i.overlayViewChild=l.first)}},hostAttrs:[1,"p-element","p-inputwrapper"],hostVars:6,hostBindings:function(o,i){2&o&&e.ekj("p-inputwrapper-filled",i.filled)("p-inputwrapper-focus",i.focus&&!i.disabled||i.autofocus||i.overlayVisible)("p-autocomplete-clearable",i.showClear&&!i.disabled)},inputs:{minLength:"minLength",delay:"delay",style:"style",panelStyle:"panelStyle",styleClass:"styleClass",panelStyleClass:"panelStyleClass",inputStyle:"inputStyle",inputId:"inputId",inputStyleClass:"inputStyleClass",placeholder:"placeholder",readonly:"readonly",disabled:"disabled",scrollHeight:"scrollHeight",lazy:"lazy",virtualScroll:"virtualScroll",virtualScrollItemSize:"virtualScrollItemSize",virtualScrollOptions:"virtualScrollOptions",maxlength:"maxlength",name:"name",required:"required",size:"size",appendTo:"appendTo",autoHighlight:"autoHighlight",forceSelection:"forceSelection",type:"type",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",ariaLabel:"ariaLabel",dropdownAriaLabel:"dropdownAriaLabel",ariaLabelledBy:"ariaLabelledBy",dropdownIcon:"dropdownIcon",unique:"unique",group:"group",completeOnFocus:"completeOnFocus",showClear:"showClear",field:"field",dropdown:"dropdown",showEmptyMessage:"showEmptyMessage",dropdownMode:"dropdownMode",multiple:"multiple",tabindex:"tabindex",dataKey:"dataKey",emptyMessage:"emptyMessage",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autofocus:"autofocus",autocomplete:"autocomplete",optionGroupChildren:"optionGroupChildren",optionGroupLabel:"optionGroupLabel",overlayOptions:"overlayOptions",suggestions:"suggestions",itemSize:"itemSize"},outputs:{completeMethod:"completeMethod",onSelect:"onSelect",onUnselect:"onUnselect",onFocus:"onFocus",onBlur:"onBlur",onDropdownClick:"onDropdownClick",onClear:"onClear",onKeyUp:"onKeyUp",onShow:"onShow",onHide:"onHide",onLazyLoad:"onLazyLoad"},features:[e._Bn([He])],decls:16,vars:31,consts:[[3,"ngClass","ngStyle"],["container",""],["pAutoFocus","","class","p-autocomplete-input p-inputtext p-component","aria-autocomplete","list","role","searchbox",3,"autofocus","ngStyle","class","autocomplete","ngClass","value","readonly","disabled","click","input","keydown","keyup","focus","blur","change","paste",4,"ngIf"],[4,"ngIf"],["class","p-autocomplete-multiple-container p-component p-inputtext",3,"ngClass","click",4,"ngIf"],["type","button","pButton","","class","p-autocomplete-dropdown p-button-icon-only","pRipple","",3,"disabled","click",4,"ngIf"],[3,"visible","options","target","appendTo","autoZIndex","baseZIndex","showTransitionOptions","hideTransitionOptions","visibleChange","onAnimationStart","onShow","onHide"],["overlay",""],[4,"ngTemplateOutlet"],[3,"items","style","itemSize","autoSize","lazy","options","onLazyLoad",4,"ngIf"],["buildInItems",""],["pAutoFocus","","aria-autocomplete","list","role","searchbox",1,"p-autocomplete-input","p-inputtext","p-component",3,"autofocus","ngStyle","autocomplete","ngClass","value","readonly","disabled","click","input","keydown","keyup","focus","blur","change","paste"],["in",""],[3,"styleClass","click",4,"ngIf"],["class","p-autocomplete-clear-icon",3,"click",4,"ngIf"],[3,"styleClass","click"],[1,"p-autocomplete-clear-icon",3,"click"],[1,"p-autocomplete-multiple-container","p-component","p-inputtext",3,"ngClass","click"],["multiContainer",""],["class","p-autocomplete-token",4,"ngFor","ngForOf"],[1,"p-autocomplete-input-token"],["pAutoFocus","","aria-autocomplete","list","role","searchbox","aria-haspopup","true",3,"autofocus","disabled","readonly","autocomplete","ngStyle","input","click","keydown","keyup","focus","blur","change","paste"],["multiIn",""],[1,"p-autocomplete-token"],["token",""],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","p-autocomplete-token-label",4,"ngIf"],[1,"p-autocomplete-token-icon",3,"click"],[3,"styleClass",4,"ngIf"],["class","p-autocomplete-token-icon",4,"ngIf"],[1,"p-autocomplete-token-label"],[3,"styleClass"],[1,"p-autocomplete-token-icon"],[3,"styleClass","spin",4,"ngIf"],["class","p-autocomplete-loader pi-spin ",4,"ngIf"],[3,"styleClass","spin"],[1,"p-autocomplete-loader","pi-spin"],["type","button","pButton","","pRipple","",1,"p-autocomplete-dropdown","p-button-icon-only",3,"disabled","click"],["ddBtn",""],[3,"ngClass",4,"ngIf"],[3,"ngClass"],[3,"items","itemSize","autoSize","lazy","options","onLazyLoad"],["scroller",""],["pTemplate","content"],["pTemplate","loader"],["role","listbox",1,"p-autocomplete-items",3,"ngClass"],["items",""],["itemslist",""],["class","p-autocomplete-empty-message",3,"ngStyle",4,"ngIf"],["ngFor","",3,"ngForOf"],[1,"p-autocomplete-item-group",3,"ngStyle"],["role","option","class","p-autocomplete-item","pRipple","",3,"ngStyle","ngClass","id","click",4,"ngFor","ngForOf"],["role","option","pRipple","",1,"p-autocomplete-item",3,"ngStyle","ngClass","id","click"],[1,"p-autocomplete-empty-message",3,"ngStyle"],[4,"ngIf","ngIfElse"],["empty",""]],template:function(o,i){1&o&&(e.TgZ(0,"span",0,1),e.YNc(2,B,2,23,"input",2),e.YNc(3,V,3,2,"ng-container",3),e.YNc(4,te,6,23,"ul",4),e.YNc(5,se,3,2,"ng-container",3),e.YNc(6,_e,4,5,"button",5),e.TgZ(7,"p-overlay",6,7),e.NdJ("visibleChange",function(p){return i.overlayVisible=p})("onAnimationStart",function(p){return i.onOverlayAnimationStart(p)})("onShow",function(p){return i.show(p)})("onHide",function(p){return i.hide(p)}),e.TgZ(9,"div",0),e.YNc(10,me,1,0,"ng-container",8),e.YNc(11,Te,4,10,"p-scroller",9),e.YNc(12,Ie,2,6,"ng-container",3),e.YNc(13,Ne,7,7,"ng-template",null,10,e.W1O),e.YNc(15,Be,1,0,"ng-container",8),e.qZA()()()),2&o&&(e.Tol(i.styleClass),e.Q6J("ngClass",e.WLB(27,Ue,i.dropdown,i.multiple))("ngStyle",i.style),e.xp6(2),e.Q6J("ngIf",!i.multiple),e.xp6(1),e.Q6J("ngIf",i.filled&&!i.disabled&&i.showClear&&!i.loading),e.xp6(1),e.Q6J("ngIf",i.multiple),e.xp6(1),e.Q6J("ngIf",i.loading),e.xp6(1),e.Q6J("ngIf",i.dropdown),e.xp6(1),e.Q6J("visible",i.overlayVisible)("options",i.overlayOptions)("target","@parent")("appendTo",i.appendTo)("autoZIndex",i.autoZIndex)("baseZIndex",i.baseZIndex)("showTransitionOptions",i.showTransitionOptions)("hideTransitionOptions",i.hideTransitionOptions),e.xp6(2),e.Tol(i.panelStyleClass),e.Udp("max-height",i.virtualScroll?"auto":i.scrollHeight),e.Q6J("ngClass",e.DdM(30,Ye))("ngStyle",i.panelStyle),e.xp6(1),e.Q6J("ngTemplateOutlet",i.headerTemplate),e.xp6(1),e.Q6J("ngIf",i.virtualScroll),e.xp6(1),e.Q6J("ngIf",!i.virtualScroll),e.xp6(3),e.Q6J("ngTemplateOutlet",i.footerTemplate))},dependencies:function(){return[a.mk,a.sg,a.O5,a.tP,a.PC,O.aV,m.jx,E.Hq,_.H,y.T,d.P,r.x,h.L,C.q,v.v]},styles:["@layer primeng{.p-autocomplete{display:inline-flex;position:relative}.p-autocomplete-loader{position:absolute;top:50%;margin-top:-.5rem}.p-autocomplete-dd .p-autocomplete-input{flex:1 1 auto;width:1%}.p-autocomplete-dd .p-autocomplete-input,.p-autocomplete-dd .p-autocomplete-multiple-container{border-top-right-radius:0;border-bottom-right-radius:0}.p-autocomplete-dd .p-autocomplete-dropdown{border-top-left-radius:0;border-bottom-left-radius:0}.p-autocomplete-panel{overflow:auto}.p-autocomplete-items{margin:0;padding:0;list-style-type:none}.p-autocomplete-item{cursor:pointer;white-space:nowrap;position:relative;overflow:hidden}.p-autocomplete-multiple-container{margin:0;padding:0;list-style-type:none;cursor:text;overflow:hidden;display:flex;align-items:center;flex-wrap:wrap}.p-autocomplete-token{width:-moz-fit-content;width:fit-content;cursor:default;display:inline-flex;align-items:center;flex:0 0 auto}.p-autocomplete-token-icon{display:flex;cursor:pointer}.p-autocomplete-input-token{flex:1 1 auto;display:inline-flex}.p-autocomplete-input-token input{border:0 none;outline:0 none;background-color:transparent;margin:0;padding:0;box-shadow:none;border-radius:0;width:100%}.p-fluid .p-autocomplete{display:flex}.p-fluid .p-autocomplete-dd .p-autocomplete-input{width:1%}.p-autocomplete-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-autocomplete-clearable{position:relative}}\n"],encapsulation:2,changeDetection:0})}return n})(),Pe=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=e.oAB({type:n});static \u0275inj=e.cJS({imports:[a.ez,O.U8,w.j,E.hJ,m.m8,_.T,y.v,d.E,r.x,h.L,C.q,v.v,O.U8,m.m8,y.v,d.E]})}return n})()}}]);