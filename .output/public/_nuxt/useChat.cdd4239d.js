var on=Object.defineProperty;var rn=(e,t,o)=>t in e?on(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var pe=(e,t,o)=>(rn(e,typeof t!="symbol"?t+"":t,o),o);import{q as yt,aa as sn,aN as bt,p as et,N as an,l as Ye,bE as ln,aX as Et,bF as tt,w as K,bG as cn,at as un,bH as fn,as as dn,bp as Ie,I as fe,az as vn,b as wt,a as nt,j as Me,C as F,P as Ae,ar as hn,aM as mn,m as Z,o as W,c as Y,y as V,v as O,u as pn,z as de,H as St,K as gn,E as yn,bI as bn,bJ as En,r as $,Q as Ct,bK as ot,aP as rt,al as wn,av as re,ai as He,t as j,F as st,G as ge,s as Oe,A as se,B as le,x as ye,O as Le,aw as $e,ap as Sn,f as Bt,bL as Tt,bM as At,aq as at,af as Cn,ad as Bn,ax as it,bu as lt,bN as Tn,bO as ee,bP as _t,bQ as An,aC as xt,b7 as _n,M as xn,aB as ve,bh as Mn,bR as Mt}from"./entry.305510e6.js";import{a as kn,E as Rn}from"./el-button.f740bc1f.js";import{t as In,b as Hn,E as On}from"./el-input.5a30c3fd.js";import{a as Ln,i as $n}from"./el-tag.e5917811.js";const Dn='a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])',zn=e=>getComputedStyle(e).position==="fixed"?!1:e.offsetParent!==null,ct=e=>Array.from(e.querySelectorAll(Dn)).filter(t=>Nn(t)&&zn(t)),Nn=e=>{if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.disabled)return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return!(e.type==="hidden"||e.type==="file");case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}};var Se=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(Se||{});const Wn=(e,t,o)=>{let r={offsetX:0,offsetY:0};const a=E=>{const _=E.clientX,n=E.clientY,{offsetX:p,offsetY:C}=r,b=e.value.getBoundingClientRect(),x=b.left,T=b.top,g=b.width,v=b.height,B=document.documentElement.clientWidth,s=document.documentElement.clientHeight,d=-x+p,h=-T+C,y=B-x-g+p,w=s-T-v+C,S=A=>{const M=Math.min(Math.max(p+A.clientX-_,d),y),R=Math.min(Math.max(C+A.clientY-n,h),w);r={offsetX:M,offsetY:R},e.value.style.transform=`translate(${et(M)}, ${et(R)})`},k=()=>{document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",k)};document.addEventListener("mousemove",S),document.addEventListener("mouseup",k)},i=()=>{t.value&&e.value&&t.value.addEventListener("mousedown",a)},m=()=>{t.value&&e.value&&t.value.removeEventListener("mousedown",a)};yt(()=>{sn(()=>{o.value?i():m()})}),bt(()=>{m()})},Pn=(e,t={})=>{an(e)||In("[useLockscreen]","You need to pass a ref param to this function");const o=t.ns||Ye("popup"),r=ln(()=>o.bm("parent","hidden"));if(!Et||tt(document.body,r.value))return;let a=0,i=!1,m="0";const E=()=>{setTimeout(()=>{dn(document==null?void 0:document.body,r.value),i&&document&&(document.body.style.width=m)},200)};K(e,_=>{if(!_){E();return}i=!tt(document.body,r.value),i&&(m=document.body.style.width),a=Hn(o.namespace.value);const n=document.documentElement.clientHeight<document.body.scrollHeight,p=cn(document.body,"overflowY");a>0&&(n||p==="scroll")&&i&&(document.body.style.width=`calc(100% - ${a}px)`),un(document.body,r.value)}),fn(()=>E())},kt=e=>{if(!e)return{onClick:Ie,onMousedown:Ie,onMouseup:Ie};let t=!1,o=!1;return{onClick:m=>{t&&o&&e(m),t=o=!1},onMousedown:m=>{t=m.target===m.currentTarget},onMouseup:m=>{o=m.target===m.currentTarget}}},qe="_trap-focus-children",te=[],ut=e=>{if(te.length===0)return;const t=te[te.length-1][qe];if(t.length>0&&e.code===vn.tab){if(t.length===1){e.preventDefault(),document.activeElement!==t[0]&&t[0].focus();return}const o=e.shiftKey,r=e.target===t[0],a=e.target===t[t.length-1];r&&o&&(e.preventDefault(),t[t.length-1].focus()),a&&!o&&(e.preventDefault(),t[0].focus())}},Vn={beforeMount(e){e[qe]=ct(e),te.push(e),te.length<=1&&document.addEventListener("keydown",ut)},updated(e){fe(()=>{e[qe]=ct(e)})},unmounted(){te.shift(),te.length===0&&document.removeEventListener("keydown",ut)}},qn=wt({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:nt([String,Array,Object])},zIndex:{type:nt([String,Number])}}),Un={click:e=>e instanceof MouseEvent},Xn="overlay";var jn=Me({name:"ElOverlay",props:qn,emits:Un,setup(e,{slots:t,emit:o}){const r=Ye(Xn),a=_=>{o("click",_)},{onClick:i,onMousedown:m,onMouseup:E}=kt(e.customMaskEvent?void 0:a);return()=>e.mask?F("div",{class:[r.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:i,onMousedown:m,onMouseup:E},[Ae(t,"default")],Se.STYLE|Se.CLASS|Se.PROPS,["onClick","onMouseup","onMousedown"]):hn("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[Ae(t,"default")])}});const Yn=jn,Gn=wt({type:{type:String,values:["primary","success","info","warning","danger",""],default:""},size:{type:String,values:mn,default:""},truncated:{type:Boolean},tag:{type:String,default:"span"}}),Fn=Me({name:"ElText"}),Kn=Me({...Fn,props:Gn,setup(e){const t=e,o=kn(),r=Ye("text"),a=Z(()=>[r.b(),r.m(t.type),r.m(o.value),r.is("truncated",t.truncated)]);return(i,m)=>(W(),Y(de(i.tag),{class:O(pn(a))},{default:V(()=>[Ae(i.$slots,"default")]),_:3},8,["class"]))}});var Qn=St(Kn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/text/src/text.vue"]]);const dr=gn(Qn),Zn=Me({name:"ElMessageBox",directives:{TrapFocus:Vn},components:{ElButton:Rn,ElFocusTrap:Ln,ElInput:On,ElOverlay:Yn,ElIcon:yn,...bn},inheritAttrs:!1,props:{buttonSize:{type:String,validator:$n},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:t}){const{locale:o,zIndex:r,ns:a,size:i}=En("message-box",Z(()=>e.buttonSize)),{t:m}=o,{nextZIndex:E}=r,_=$(!1),n=Ct({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:E()}),p=Z(()=>{const I=n.type;return{[a.bm("icon",I)]:I&&ot[I]}}),C=rt(),b=rt(),x=Z(()=>n.icon||ot[n.type]||""),T=Z(()=>!!n.message),g=$(),v=$(),B=$(),s=$(),d=$(),h=Z(()=>n.confirmButtonClass);K(()=>n.inputValue,async I=>{await fe(),e.boxType==="prompt"&&I!==null&&R()},{immediate:!0}),K(()=>_.value,I=>{var D,N;I&&(e.boxType!=="prompt"&&(n.autofocus?B.value=(N=(D=d.value)==null?void 0:D.$el)!=null?N:g.value:B.value=g.value),n.zIndex=E()),e.boxType==="prompt"&&(I?fe().then(()=>{var z;s.value&&s.value.$el&&(n.autofocus?B.value=(z=H())!=null?z:g.value:B.value=g.value)}):(n.editorErrorMessage="",n.validateError=!1))});const y=Z(()=>e.draggable);Wn(g,v,y),yt(async()=>{await fe(),e.closeOnHashChange&&window.addEventListener("hashchange",w)}),bt(()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",w)});function w(){_.value&&(_.value=!1,fe(()=>{n.action&&t("action",n.action)}))}const S=()=>{e.closeOnClickModal&&M(n.distinguishCancelAndClose?"close":"cancel")},k=kt(S),A=I=>{if(n.inputType!=="textarea")return I.preventDefault(),M("confirm")},M=I=>{var D;e.boxType==="prompt"&&I==="confirm"&&!R()||(n.action=I,n.beforeClose?(D=n.beforeClose)==null||D.call(n,I,n,w):w())},R=()=>{if(e.boxType==="prompt"){const I=n.inputPattern;if(I&&!I.test(n.inputValue||""))return n.editorErrorMessage=n.inputErrorMessage||m("el.messagebox.error"),n.validateError=!0,!1;const D=n.inputValidator;if(typeof D=="function"){const N=D(n.inputValue);if(N===!1)return n.editorErrorMessage=n.inputErrorMessage||m("el.messagebox.error"),n.validateError=!0,!1;if(typeof N=="string")return n.editorErrorMessage=N,n.validateError=!0,!1}}return n.editorErrorMessage="",n.validateError=!1,!0},H=()=>{const I=s.value.$refs;return I.input||I.textarea},P=()=>{M("close")},q=()=>{e.closeOnPressEscape&&P()};return e.lockScroll&&Pn(_),{...wn(n),ns:a,overlayEvent:k,visible:_,hasMessage:T,typeClass:p,contentId:C,inputId:b,btnSize:i,iconComponent:x,confirmButtonClasses:h,rootRef:g,focusStartRef:B,headerRef:v,inputRef:s,confirmRef:d,doClose:w,handleClose:P,onCloseRequested:q,handleWrapperClick:S,handleInputEnter:A,handleAction:M,t:m}}}),Jn=["aria-label","aria-describedby"],eo=["aria-label"],to=["id"];function no(e,t,o,r,a,i){const m=re("el-icon"),E=re("close"),_=re("el-input"),n=re("el-button"),p=re("el-focus-trap"),C=re("el-overlay");return W(),Y(Sn,{name:"fade-in-linear",onAfterLeave:t[11]||(t[11]=b=>e.$emit("vanish")),persisted:""},{default:V(()=>[He(F(C,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:V(()=>[j("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:O(`${e.ns.namespace.value}-overlay-message-box`),onClick:t[8]||(t[8]=(...b)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...b)),onMousedown:t[9]||(t[9]=(...b)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...b)),onMouseup:t[10]||(t[10]=(...b)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...b))},[F(p,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:V(()=>[j("div",{ref:"rootRef",class:O([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:st(e.customStyle),tabindex:"-1",onClick:t[7]||(t[7]=ge(()=>{},["stop"]))},[e.title!==null&&e.title!==void 0?(W(),Oe("div",{key:0,ref:"headerRef",class:O(e.ns.e("header"))},[j("div",{class:O(e.ns.e("title"))},[e.iconComponent&&e.center?(W(),Y(m,{key:0,class:O([e.ns.e("status"),e.typeClass])},{default:V(()=>[(W(),Y(de(e.iconComponent)))]),_:1},8,["class"])):se("v-if",!0),j("span",null,le(e.title),1)],2),e.showClose?(W(),Oe("button",{key:0,type:"button",class:O(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:t[0]||(t[0]=b=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:t[1]||(t[1]=ye(ge(b=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"]))},[F(m,{class:O(e.ns.e("close"))},{default:V(()=>[F(E)]),_:1},8,["class"])],42,eo)):se("v-if",!0)],2)):se("v-if",!0),j("div",{id:e.contentId,class:O(e.ns.e("content"))},[j("div",{class:O(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(W(),Y(m,{key:0,class:O([e.ns.e("status"),e.typeClass])},{default:V(()=>[(W(),Y(de(e.iconComponent)))]),_:1},8,["class"])):se("v-if",!0),e.hasMessage?(W(),Oe("div",{key:1,class:O(e.ns.e("message"))},[Ae(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(W(),Y(de(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(W(),Y(de(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:V(()=>[Le(le(e.dangerouslyUseHTMLString?"":e.message),1)]),_:1},8,["for"]))])],2)):se("v-if",!0)],2),He(j("div",{class:O(e.ns.e("input"))},[F(_,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":t[2]||(t[2]=b=>e.inputValue=b),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:O({invalid:e.validateError}),onKeydown:ye(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),j("div",{class:O(e.ns.e("errormsg")),style:st({visibility:e.editorErrorMessage?"visible":"hidden"})},le(e.editorErrorMessage),7)],2),[[$e,e.showInput]])],10,to),j("div",{class:O(e.ns.e("btns"))},[e.showCancelButton?(W(),Y(n,{key:0,loading:e.cancelButtonLoading,class:O([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:t[3]||(t[3]=b=>e.handleAction("cancel")),onKeydown:t[4]||(t[4]=ye(ge(b=>e.handleAction("cancel"),["prevent"]),["enter"]))},{default:V(()=>[Le(le(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","class","round","size"])):se("v-if",!0),He(F(n,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:O([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:t[5]||(t[5]=b=>e.handleAction("confirm")),onKeydown:t[6]||(t[6]=ye(ge(b=>e.handleAction("confirm"),["prevent"]),["enter"]))},{default:V(()=>[Le(le(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","class","round","disabled","size"]),[[$e,e.showConfirmButton]])],2)],6)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,Jn)]),_:3},8,["z-index","overlay-class","mask"]),[[$e,e.visible]])]),_:3})}var oo=St(Zn,[["render",no],["__file","/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);const he=new Map,ro=e=>{let t=document.body;return e.appendTo&&(Bt(e.appendTo)&&(t=document.querySelector(e.appendTo)),lt(e.appendTo)&&(t=e.appendTo),lt(t)||(t=document.body)),t},so=(e,t,o=null)=>{const r=F(oo,e,it(e.message)||Tt(e.message)?{default:it(e.message)?e.message:()=>e.message}:null);return r.appContext=o,At(r,t),ro(e).appendChild(t.firstElementChild),r.component},ao=()=>document.createElement("div"),io=(e,t)=>{const o=ao();e.onVanish=()=>{At(null,o),he.delete(a)},e.onAction=i=>{const m=he.get(a);let E;e.showInput?E={value:a.inputValue,action:i}:E=i,e.callback?e.callback(E,r.proxy):i==="cancel"||i==="close"?e.distinguishCancelAndClose&&i!=="cancel"?m.reject("close"):m.reject("cancel"):m.resolve(E)};const r=so(e,o,t),a=r.proxy;for(const i in e)at(e,i)&&!at(a.$props,i)&&(a[i]=e[i]);return a.visible=!0,a};function ie(e,t=null){if(!Et)return Promise.reject();let o;return Bt(e)||Tt(e)?e={message:e}:o=e.callback,new Promise((r,a)=>{const i=io(e,t??ie._context);he.set(i,{options:e,callback:o,resolve:r,reject:a})})}const lo=["alert","confirm","prompt"],co={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};lo.forEach(e=>{ie[e]=uo(e)});function uo(e){return(t,o,r,a)=>{let i="";return Cn(o)?(r=o,i=""):Bn(o)?i="":i=o,ie(Object.assign({title:i,message:t,type:"",...co[e]},r,{boxType:e}),a)}}ie.close=()=>{he.forEach((e,t)=>{t.doClose()}),he.clear()};ie._context=null;const G=ie;G.install=e=>{G._context=e._context,e.config.globalProperties.$msgbox=G,e.config.globalProperties.$messageBox=G,e.config.globalProperties.$alert=G.alert,e.config.globalProperties.$confirm=G.confirm,e.config.globalProperties.$prompt=G.prompt};const fo=G,vo={},ho=Object.freeze(Object.defineProperty({__proto__:null,default:vo},Symbol.toStringTag,{value:"Module"})),mo=Tn(ho);async function Ue(){return await new Promise((e,t)=>{setTimeout(()=>{try{window.scrollTo(0,document.body.scrollHeight),e(null)}catch(o){t(o)}})})}const po={get isMobileScreen(){return window.innerWidth<600},get isTouchScreen(){return"ontouchstart"in document||navigator.maxTouchPoints>0}};function ft(){return po}const dt="web-browsing",vt="temperature-suffix",ke=e=>(e==null?void 0:e.toString)===void 0?"":e.toString(),go=e=>ke(e).toLowerCase(),Rt="01",It="0123456789",Ht="0123456789abcdef",Ot="0123456789abcdefghijklmnopqrstuvwxyz",Lt="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",ne="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",$t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",Xe=e=>{switch(typeof e!="string"&&(e=go(e)),e){case"2":return Rt;case"10":return It;case"16":return Ht;case"36":return Ot;case"62":return Lt;case"64":return ne;case"64w":case"64+":return $t;default:return e}},yo=(e,t,o,r=0)=>{typeof e!="string"&&(e=ke(e));let a=0;if(+t==10)a=+Number(e);else if(+t<37)a=parseInt(e,+t);else{t=Xe(t);const m=t.length;for(let E=0;E<e.length;E++)a+=t.indexOf(e[E])*Math.pow(m,e.length-1-E)}let i="";if(+o<37&&(i=a.toString(+o),r<=1))return i;if(o=Xe(o),i===""){const m=o.length;for(;a>0;)i=o.charAt(a%m)+i,a=Math.floor(a/m)}return(i===""?o.charAt(0):i).padStart(r,o[0])},bo=e=>{const t=e.split("").map(i=>i.charCodeAt(0)),o=[];let r=0;for(;r<t.length;){const[i,m=0,E=0]=t.slice(r,r+=3),_=(i<<16)+(m<<8)+E,n=_>>18,p=_>>12&63,C=_>>6&63,b=_&63;o.push(ne[n],ne[p],ne[C],ne[b])}const a=t.length%3;return o.join("").slice(0,1+o.length-a)+(a===2?"==":a===1?"=":"")},Eo=/[^A-Za-z0-9+/]/g,Dt=e=>e.replace(Eo,""),De=e=>String.fromCharCode(+e),wo=e=>{const t=Dt(e).split(""),o=[];let r=0;for(;r<t.length;){const[a,i,m,E]=t.slice(r,r+=4).map(_=>ne.indexOf(_));o.push(De(a<<2|i>>4)),m!==64&&o.push(De((i&15)<<4|m>>2)),E!==64&&o.push(De((m&3)<<6|E))}return o.join("").replaceAll("\0","")},Re={BASE2_CHARSET:Rt,BASE10_CHARSET:It,BASE16_CHARSET:Ht,BASE36_CHARSET:Ot,BASE62_CHARSET:Lt,BASE64_CHARSET:ne,BASE64WEB_CHARSET:$t,convert:yo,getCharset:Xe,secureBase64:Dt,textToBase64:bo,base64ToText:wo};var zt={exports:{}};function So(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ze={exports:{}},ht;function Ge(){return ht||(ht=1,function(e,t){(function(o,r){e.exports=r()})(ee,function(){var o=o||function(r,a){var i;if(typeof window<"u"&&window.crypto&&(i=window.crypto),typeof self<"u"&&self.crypto&&(i=self.crypto),typeof globalThis<"u"&&globalThis.crypto&&(i=globalThis.crypto),!i&&typeof window<"u"&&window.msCrypto&&(i=window.msCrypto),!i&&typeof ee<"u"&&ee.crypto&&(i=ee.crypto),!i&&typeof So=="function")try{i=mo}catch{}var m=function(){if(i){if(typeof i.getRandomValues=="function")try{return i.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof i.randomBytes=="function")try{return i.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},E=Object.create||function(){function s(){}return function(d){var h;return s.prototype=d,h=new s,s.prototype=null,h}}(),_={},n=_.lib={},p=n.Base=function(){return{extend:function(s){var d=E(this);return s&&d.mixIn(s),(!d.hasOwnProperty("init")||this.init===d.init)&&(d.init=function(){d.$super.init.apply(this,arguments)}),d.init.prototype=d,d.$super=this,d},create:function(){var s=this.extend();return s.init.apply(s,arguments),s},init:function(){},mixIn:function(s){for(var d in s)s.hasOwnProperty(d)&&(this[d]=s[d]);s.hasOwnProperty("toString")&&(this.toString=s.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),C=n.WordArray=p.extend({init:function(s,d){s=this.words=s||[],d!=a?this.sigBytes=d:this.sigBytes=s.length*4},toString:function(s){return(s||x).stringify(this)},concat:function(s){var d=this.words,h=s.words,y=this.sigBytes,w=s.sigBytes;if(this.clamp(),y%4)for(var S=0;S<w;S++){var k=h[S>>>2]>>>24-S%4*8&255;d[y+S>>>2]|=k<<24-(y+S)%4*8}else for(var A=0;A<w;A+=4)d[y+A>>>2]=h[A>>>2];return this.sigBytes+=w,this},clamp:function(){var s=this.words,d=this.sigBytes;s[d>>>2]&=4294967295<<32-d%4*8,s.length=r.ceil(d/4)},clone:function(){var s=p.clone.call(this);return s.words=this.words.slice(0),s},random:function(s){for(var d=[],h=0;h<s;h+=4)d.push(m());return new C.init(d,s)}}),b=_.enc={},x=b.Hex={stringify:function(s){for(var d=s.words,h=s.sigBytes,y=[],w=0;w<h;w++){var S=d[w>>>2]>>>24-w%4*8&255;y.push((S>>>4).toString(16)),y.push((S&15).toString(16))}return y.join("")},parse:function(s){for(var d=s.length,h=[],y=0;y<d;y+=2)h[y>>>3]|=parseInt(s.substr(y,2),16)<<24-y%8*4;return new C.init(h,d/2)}},T=b.Latin1={stringify:function(s){for(var d=s.words,h=s.sigBytes,y=[],w=0;w<h;w++){var S=d[w>>>2]>>>24-w%4*8&255;y.push(String.fromCharCode(S))}return y.join("")},parse:function(s){for(var d=s.length,h=[],y=0;y<d;y++)h[y>>>2]|=(s.charCodeAt(y)&255)<<24-y%4*8;return new C.init(h,d)}},g=b.Utf8={stringify:function(s){try{return decodeURIComponent(escape(T.stringify(s)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(s){return T.parse(unescape(encodeURIComponent(s)))}},v=n.BufferedBlockAlgorithm=p.extend({reset:function(){this._data=new C.init,this._nDataBytes=0},_append:function(s){typeof s=="string"&&(s=g.parse(s)),this._data.concat(s),this._nDataBytes+=s.sigBytes},_process:function(s){var d,h=this._data,y=h.words,w=h.sigBytes,S=this.blockSize,k=S*4,A=w/k;s?A=r.ceil(A):A=r.max((A|0)-this._minBufferSize,0);var M=A*S,R=r.min(M*4,w);if(M){for(var H=0;H<M;H+=S)this._doProcessBlock(y,H);d=y.splice(0,M),h.sigBytes-=R}return new C.init(d,R)},clone:function(){var s=p.clone.call(this);return s._data=this._data.clone(),s},_minBufferSize:0});n.Hasher=v.extend({cfg:p.extend(),init:function(s){this.cfg=this.cfg.extend(s),this.reset()},reset:function(){v.reset.call(this),this._doReset()},update:function(s){return this._append(s),this._process(),this},finalize:function(s){s&&this._append(s);var d=this._doFinalize();return d},blockSize:16,_createHelper:function(s){return function(d,h){return new s.init(h).finalize(d)}},_createHmacHelper:function(s){return function(d,h){return new B.HMAC.init(s,h).finalize(d)}}});var B=_.algo={};return _}(Math);return o})}(ze)),ze.exports}var Ne={exports:{}},mt;function Co(){return mt||(mt=1,function(e,t){(function(o,r){e.exports=r(Ge())})(ee,function(o){return function(r){var a=o,i=a.lib,m=i.Base,E=i.WordArray,_=a.x64={};_.Word=m.extend({init:function(n,p){this.high=n,this.low=p}}),_.WordArray=m.extend({init:function(n,p){n=this.words=n||[],p!=r?this.sigBytes=p:this.sigBytes=n.length*8},toX32:function(){for(var n=this.words,p=n.length,C=[],b=0;b<p;b++){var x=n[b];C.push(x.high),C.push(x.low)}return E.create(C,this.sigBytes)},clone:function(){for(var n=m.clone.call(this),p=n.words=this.words.slice(0),C=p.length,b=0;b<C;b++)p[b]=p[b].clone();return n}})}(),o})}(Ne)),Ne.exports}(function(e,t){(function(o,r,a){e.exports=r(Ge(),Co())})(ee,function(o){return function(r){var a=o,i=a.lib,m=i.WordArray,E=i.Hasher,_=a.x64,n=_.Word,p=a.algo,C=[],b=[],x=[];(function(){for(var v=1,B=0,s=0;s<24;s++){C[v+5*B]=(s+1)*(s+2)/2%64;var d=B%5,h=(2*v+3*B)%5;v=d,B=h}for(var v=0;v<5;v++)for(var B=0;B<5;B++)b[v+5*B]=B+(2*v+3*B)%5*5;for(var y=1,w=0;w<24;w++){for(var S=0,k=0,A=0;A<7;A++){if(y&1){var M=(1<<A)-1;M<32?k^=1<<M:S^=1<<M-32}y&128?y=y<<1^113:y<<=1}x[w]=n.create(S,k)}})();var T=[];(function(){for(var v=0;v<25;v++)T[v]=n.create()})();var g=p.SHA3=E.extend({cfg:E.cfg.extend({outputLength:512}),_doReset:function(){for(var v=this._state=[],B=0;B<25;B++)v[B]=new n.init;this.blockSize=(1600-2*this.cfg.outputLength)/32},_doProcessBlock:function(v,B){for(var s=this._state,d=this.blockSize/2,h=0;h<d;h++){var y=v[B+2*h],w=v[B+2*h+1];y=(y<<8|y>>>24)&16711935|(y<<24|y>>>8)&4278255360,w=(w<<8|w>>>24)&16711935|(w<<24|w>>>8)&4278255360;var S=s[h];S.high^=w,S.low^=y}for(var k=0;k<24;k++){for(var A=0;A<5;A++){for(var M=0,R=0,H=0;H<5;H++){var S=s[A+5*H];M^=S.high,R^=S.low}var P=T[A];P.high=M,P.low=R}for(var A=0;A<5;A++)for(var q=T[(A+4)%5],I=T[(A+1)%5],D=I.high,N=I.low,M=q.high^(D<<1|N>>>31),R=q.low^(N<<1|D>>>31),H=0;H<5;H++){var S=s[A+5*H];S.high^=M,S.low^=R}for(var z=1;z<25;z++){var M,R,S=s[z],U=S.high,X=S.low,l=C[z];l<32?(M=U<<l|X>>>32-l,R=X<<l|U>>>32-l):(M=X<<l-32|U>>>64-l,R=U<<l-32|X>>>64-l);var c=T[b[z]];c.high=M,c.low=R}var u=T[0],f=s[0];u.high=f.high,u.low=f.low;for(var A=0;A<5;A++)for(var H=0;H<5;H++){var z=A+5*H,S=s[z],Ke=T[z],Qe=T[(A+1)%5+5*H],Ze=T[(A+2)%5+5*H];S.high=Ke.high^~Qe.high&Ze.high,S.low=Ke.low^~Qe.low&Ze.low}var S=s[0],Je=x[k];S.high^=Je.high,S.low^=Je.low}},_doFinalize:function(){var v=this._data,B=v.words;this._nDataBytes*8;var s=v.sigBytes*8,d=this.blockSize*32;B[s>>>5]|=1<<24-s%32,B[(r.ceil((s+1)/d)*d>>>5)-1]|=128,v.sigBytes=B.length*4,this._process();for(var h=this._state,y=this.cfg.outputLength/8,w=y/8,S=[],k=0;k<w;k++){var A=h[k],M=A.high,R=A.low;M=(M<<8|M>>>24)&16711935|(M<<24|M>>>8)&4278255360,R=(R<<8|R>>>24)&16711935|(R<<24|R>>>8)&4278255360,S.push(R),S.push(M)}return new m.init(S,y)},clone:function(){for(var v=E.clone.call(this),B=v._state=this._state.slice(0),s=0;s<25;s++)B[s]=B[s].clone();return v}});a.SHA3=E._createHelper(g),a.HmacSHA3=E._createHmacHelper(g)}(Math),o.SHA3})})(zt);var Bo=zt.exports;const Nt=_t(Bo);function To(...e){return e.reduce((t,o)=>t+o,0)}function Ao(e){try{return typeof e[Symbol==null?void 0:Symbol.iterator]=="function"}catch{return!1}}function Wt(e){const t=new Set;return JSON.stringify(e,(r,a)=>{if(typeof a=="object"&&a!==null){if(t.has(a))return;t.add(a),Ao(a)&&(a=[...a])}return a})}const _o=e=>Nt(e,{outputLength:256}).toString(),xo=/0b[0-1]+/i;function me(e){if(typeof e=="number")return Math.round(e);if(e instanceof Object&&(e=Wt(e)),typeof e=="string"){if(xo.test(e))return parseInt(e.substring(2,e.length-1),2);const t=parseInt(e);return Number.isNaN(t)?t:To(parseInt(_o(e),16))}else return Date.now()}const L=624,be=397,Mo=2567483615,We=2147483648,Pe=2147483647;class ko{constructor(t){pe(this,"mt",new Array(L));pe(this,"mti",L+1);pe(this,"seed");return this.seed=t=me(t),Array.isArray(t)?this.init_by_array(t,t.length):this.init_seed(t),this}init_seed(t){for(this.mt[0]=t>>>0,this.mti=1;this.mti<L;this.mti++)t=this.mt[this.mti-1]^this.mt[this.mti-1]>>>30,this.mt[this.mti]=(((t&4294901760)>>>16)*1812433253<<16)+(t&65535)*1812433253+this.mti,this.mt[this.mti]>>>=0}init_by_array(t,o){let r,a,i;for(this.init_seed(19650218),r=1,a=0,i=L>o?L:o;i!==0;i--){const m=this.mt[r-1]^this.mt[r-1]>>>30;this.mt[r]=(this.mt[r]^(((m&4294901760)>>>16)*1664525<<16)+(m&65535)*1664525)+t[a]+a,this.mt[r]>>>=0,r++,a++,r>=L&&(this.mt[0]=this.mt[L-1],r=1),a>=o&&(a=0)}for(i=L-1;i!==0;i--){const m=this.mt[r-1]^this.mt[r-1]>>>30;this.mt[r]=(this.mt[r]^(((m&4294901760)>>>16)*1566083941<<16)+(m&65535)*1566083941)-r,this.mt[r]>>>=0,r++,r>=L&&(this.mt[0]=this.mt[L-1],r=1)}this.mt[0]=2147483648}random_int(){let t;const o=new Array(0,Mo);if(this.mti>=L){let r;for(this.mti===L+1&&this.init_seed(5489),r=0;r<L-be;r++)t=this.mt[r]&We|this.mt[r+1]&Pe,this.mt[r]=this.mt[r+be]^t>>>1^o[t&1];for(;r<L-1;r++)t=this.mt[r]&We|this.mt[r+1]&Pe,this.mt[r]=this.mt[r+(be-L)]^t>>>1^o[t&1];t=this.mt[L-1]&We|this.mt[0]&Pe,this.mt[L-1]=this.mt[be-1]^t>>>1^o[t&1],this.mti=0}return t=this.mt[this.mti++],t^=t>>>11,t^=t<<7&2636928640,t^=t<<15&4022730752,t^=t>>>18,t>>>0}random_int31(){return this.random_int()>>>1}random_incl(){return this.random_int()*(1/4294967295)}random(){return this.random_int()*(1/4294967296)}random_excl(){return(this.random_int()+.5)*(1/4294967296)}random_long(){return((this.random_int()>>>5)*67108864+(this.random_int()>>>6))*(1/9007199254740992)}}function Pt(e){return new ko(e)}const{BASE10_CHARSET:Ro,BASE16_CHARSET:Io,BASE64WEB_CHARSET:Ho}=Re,Oo=Pt(),Vt=(e=Oo)=>e.random(),Fe=(e,t,o)=>((t===void 0||t===0)&&(t=e,e=0),Math.floor(e+Vt(o)*t)),qt=(e,t)=>e[Fe(0,e.length,t)],Ut=(e,t=1,o)=>{const r=[],a=[];for(let i=0;i<t;i++)a.length===0&&a.push(...e),r.push(a.splice(Fe(0,a.length,o),1)[0]);return r},Lo=(e,t)=>Ut(e,e.length,t),Ee=(e,t=8,o)=>new Array(t).fill(0).map(r=>qt(e,o)).join(""),Xt={MT:Pt,toSeed:me,rand:Vt,randInt:Fe,charset:Ee,choice:qt,choices:Ut,shuffle:Lo,base10:(e=6,t)=>Ee(Ro,e,t),base16:(e=32,t)=>Ee(Io,e,t),base64:(e=32,t)=>Ee(Ho,e,t),lcg(e){let t=me(e);return()=>(t=(t*1664525+1013904223)%4294967296)/4294967296}};var jt={exports:{}};(function(e,t){(function(o,r){e.exports=r(Ge())})(ee,function(o){return function(r){var a=o,i=a.lib,m=i.WordArray,E=i.Hasher,_=a.algo,n=[];(function(){for(var g=0;g<64;g++)n[g]=r.abs(r.sin(g+1))*4294967296|0})();var p=_.MD5=E.extend({_doReset:function(){this._hash=new m.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(g,v){for(var B=0;B<16;B++){var s=v+B,d=g[s];g[s]=(d<<8|d>>>24)&16711935|(d<<24|d>>>8)&4278255360}var h=this._hash.words,y=g[v+0],w=g[v+1],S=g[v+2],k=g[v+3],A=g[v+4],M=g[v+5],R=g[v+6],H=g[v+7],P=g[v+8],q=g[v+9],I=g[v+10],D=g[v+11],N=g[v+12],z=g[v+13],U=g[v+14],X=g[v+15],l=h[0],c=h[1],u=h[2],f=h[3];l=C(l,c,u,f,y,7,n[0]),f=C(f,l,c,u,w,12,n[1]),u=C(u,f,l,c,S,17,n[2]),c=C(c,u,f,l,k,22,n[3]),l=C(l,c,u,f,A,7,n[4]),f=C(f,l,c,u,M,12,n[5]),u=C(u,f,l,c,R,17,n[6]),c=C(c,u,f,l,H,22,n[7]),l=C(l,c,u,f,P,7,n[8]),f=C(f,l,c,u,q,12,n[9]),u=C(u,f,l,c,I,17,n[10]),c=C(c,u,f,l,D,22,n[11]),l=C(l,c,u,f,N,7,n[12]),f=C(f,l,c,u,z,12,n[13]),u=C(u,f,l,c,U,17,n[14]),c=C(c,u,f,l,X,22,n[15]),l=b(l,c,u,f,w,5,n[16]),f=b(f,l,c,u,R,9,n[17]),u=b(u,f,l,c,D,14,n[18]),c=b(c,u,f,l,y,20,n[19]),l=b(l,c,u,f,M,5,n[20]),f=b(f,l,c,u,I,9,n[21]),u=b(u,f,l,c,X,14,n[22]),c=b(c,u,f,l,A,20,n[23]),l=b(l,c,u,f,q,5,n[24]),f=b(f,l,c,u,U,9,n[25]),u=b(u,f,l,c,k,14,n[26]),c=b(c,u,f,l,P,20,n[27]),l=b(l,c,u,f,z,5,n[28]),f=b(f,l,c,u,S,9,n[29]),u=b(u,f,l,c,H,14,n[30]),c=b(c,u,f,l,N,20,n[31]),l=x(l,c,u,f,M,4,n[32]),f=x(f,l,c,u,P,11,n[33]),u=x(u,f,l,c,D,16,n[34]),c=x(c,u,f,l,U,23,n[35]),l=x(l,c,u,f,w,4,n[36]),f=x(f,l,c,u,A,11,n[37]),u=x(u,f,l,c,H,16,n[38]),c=x(c,u,f,l,I,23,n[39]),l=x(l,c,u,f,z,4,n[40]),f=x(f,l,c,u,y,11,n[41]),u=x(u,f,l,c,k,16,n[42]),c=x(c,u,f,l,R,23,n[43]),l=x(l,c,u,f,q,4,n[44]),f=x(f,l,c,u,N,11,n[45]),u=x(u,f,l,c,X,16,n[46]),c=x(c,u,f,l,S,23,n[47]),l=T(l,c,u,f,y,6,n[48]),f=T(f,l,c,u,H,10,n[49]),u=T(u,f,l,c,U,15,n[50]),c=T(c,u,f,l,M,21,n[51]),l=T(l,c,u,f,N,6,n[52]),f=T(f,l,c,u,k,10,n[53]),u=T(u,f,l,c,I,15,n[54]),c=T(c,u,f,l,w,21,n[55]),l=T(l,c,u,f,P,6,n[56]),f=T(f,l,c,u,X,10,n[57]),u=T(u,f,l,c,R,15,n[58]),c=T(c,u,f,l,z,21,n[59]),l=T(l,c,u,f,A,6,n[60]),f=T(f,l,c,u,D,10,n[61]),u=T(u,f,l,c,S,15,n[62]),c=T(c,u,f,l,q,21,n[63]),h[0]=h[0]+l|0,h[1]=h[1]+c|0,h[2]=h[2]+u|0,h[3]=h[3]+f|0},_doFinalize:function(){var g=this._data,v=g.words,B=this._nDataBytes*8,s=g.sigBytes*8;v[s>>>5]|=128<<24-s%32;var d=r.floor(B/4294967296),h=B;v[(s+64>>>9<<4)+15]=(d<<8|d>>>24)&16711935|(d<<24|d>>>8)&4278255360,v[(s+64>>>9<<4)+14]=(h<<8|h>>>24)&16711935|(h<<24|h>>>8)&4278255360,g.sigBytes=(v.length+1)*4,this._process();for(var y=this._hash,w=y.words,S=0;S<4;S++){var k=w[S];w[S]=(k<<8|k>>>24)&16711935|(k<<24|k>>>8)&4278255360}return y},clone:function(){var g=E.clone.call(this);return g._hash=this._hash.clone(),g}});function C(g,v,B,s,d,h,y){var w=g+(v&B|~v&s)+d+y;return(w<<h|w>>>32-h)+v}function b(g,v,B,s,d,h,y){var w=g+(v&s|B&~s)+d+y;return(w<<h|w>>>32-h)+v}function x(g,v,B,s,d,h,y){var w=g+(v^B^s)+d+y;return(w<<h|w>>>32-h)+v}function T(g,v,B,s,d,h,y){var w=g+(B^(v|~s))+d+y;return(w<<h|w>>>32-h)+v}a.MD5=E._createHelper(p),a.HmacMD5=E._createHmacHelper(p)}(Math),o.MD5})})(jt);var $o=jt.exports;const Do=_t($o),{MT:_e,shuffle:zo,randInt:Ce}=Xt,{convert:Yt,getCharset:Gt}=Re,Ft=(e,t)=>{const o=zo(e,t);return()=>(o.push(o.shift()),o)},Kt=(e,t=16,o=1,r)=>{const a=Number.isNaN(+t)?64:+t,i=Gt(t),m=me(r!==void 0?r:Ce(0,a)),E=_e(m),_=Ft(i,_e(Ce(0,1e6,E))),n=typeof e=="string"?e.split(""):e,p=[r!==void 0?i[Ce(0,a)]:Yt(m,10,t),...n.map(C=>_()[i.indexOf(C)])];return--o<1?p.join(""):Kt(p,t,o,r)},Qt=(e,t=16,o=1,r)=>{const a=Gt(t),i=me(r!==void 0?r:+Yt(e[0],t,10)),m=_e(i),E=Ft(a,_e(Ce(0,1e6,m))),n=(typeof e=="string"?e.split(""):e).slice(1,e.length).map(p=>a[E().indexOf(p)]);return--o<1?n.join(""):Qt(n,t,o,r)},{textToBase64:No,base64ToText:Wo,secureBase64:Po}=Re;function Zt(e,t=1,o){return typeof e=="object"?e=Wt(e):typeof e!="string"&&(e=ke(e)),Kt(Po(No(e)),64,t,o)}function Vo(e,t=1,o,r=!0){if(e=Wo(Qt(e,64,t,o)),!r)return e;try{return JSON.parse(e)}catch{return e}}function qo(e,t=512,o){const r=Zt(e,1,o).substring(1);return t==="MD5"?Do(r).toString():Nt(r,{outputLength:t}).toString()}const Uo={e:Zt,d:Vo,h:qo},Jt=$("gpt4"),Xo=2048,Q=[],en=()=>{for(;Q.length>1&&Q.slice(1,Q.length).join("").length>Xo;)Q.shift()},jo=()=>{if(!nn.value)return"";en();const e=Q.join(`
---
`);return e.length===0?"":`Conversation history
===
${e}`},Yo=(e="",t="",o=!0)=>{Q.push(`Question: ${e}
Answer: ${t}`),o&&en()},Go=()=>{Q.splice(0,Q.length)},Fo=["OFF","BASIC","ADVANCED"],Ko="OFF",Be=$(Ko),oe=$([]),xe=$([]),ae={add:Yo,get:jo,clear:Go},Qo=$(""),Ve=()=>{document.querySelector(".InputBox textarea").focus()},je=async function(e){return await $fetch("/api/more",{method:"POST",body:{question:e}})},tn=()=>new Promise((e,t)=>{$fetch("/api/token/check",{method:"POST"}).then(o=>{const{list:r,named:a}=o;xe.value=r.sort().map(i=>({id:i,name:a[i]})),e(!0)}).catch(o=>{ve.error("Initialization Failed"),t(o)})}),Zo=e=>new Promise((t,o)=>{const r=Re.convert(e,"64w",10);if(Qo.value=r,e==null)return ae.clear(),t(!0);$fetch("/api/history",{method:"POST",body:{id:e}}).then(async a=>{const i=a;i.length===0&&Mt("/c/");const m=[];for(const n of i){const{Q:p,A:C,urls:b,queries:x,dt:T,t:g}=n,v=new Date(g);m.push({type:"Q",text:p,t:v},{type:"A",text:C,urls:b,queries:x,dt:T,t:v}),ae.add(p,C,!1)}oe.value.unshift(...m),t(!0);const E=oe.value.at(-2),_=oe.value.at(-1);_.more=await je(E.text)}).catch(a=>{ve.error("There was an error loading the conversation."),o(a)})}),pt=(e,t=!1)=>{if(!t){ae.clear();const o=Mn.service();Promise.all([e===null?null:tn(),Zo(e)]).finally(()=>{Ue(),o!==null&&setTimeout(()=>{o.close(),Ue()},500)})}},Jo="_t05",Te=$(Jo),nn=$(!0),J=$(!1),ce=$(J.value),ue=$(J.value),we=$(""),{h:er}=Uo,tr=()=>`${Jt.value}${Te.value}`,nr=()=>Be.value,or=()=>[77,68,53].map(e=>String.fromCharCode(e)).join(""),rr=(e,t,o)=>{const r=er(`${e}${t}`,or(),o),a=ke(o);return{hash:r,timestamp:a}},sr=(e,t,o,r,a)=>{var m,E;let i=(E=(m=xt()._route)==null?void 0:m.params)==null?void 0:E.conv;return i||(i=Xt.base64(8),xe.value.push({id:i,name:void 0}),Mt(`/c/${i}`)),{conv:i,context:ae.get(),prompt:e,model:t,web:o,t:r,tz:a}},ar=e=>{const t=new Date,o=t.getTime(),r=t.getTimezoneOffset()/60*-1,a=sr(e,tr(),nr(),o,r),i=rr(e,a.context,o);return $fetch("/api/chat",{method:"POST",headers:i,body:a})},gt=(e="T",t="")=>Ct({type:e,text:t,queries:[],urls:[],dt:void 0,t:new Date});function vr(){const e=An(),t=e.get(dt);Fo.includes(t)&&(Be.value=t);const o=e.get(vt)||"";/_t(?:0[0-9]|10)/.test(o)&&(Te.value=o),K(Be,p=>{typeof p=="string"&&e.set(dt,p,{path:"/"})}),K(Te,p=>{e.set(vt,p,{path:"/"})});const r=xt(),a=()=>{var p,C;return(C=(p=r._route)==null?void 0:p.params)==null?void 0:C.conv},i=()=>{const p=a();return xe.value.filter(C=>C.id===p)[0].name||""};K(J,p=>{ft().isMobileScreen?(ce.value=!1,ue.value!==p&&(ue.value=p)):(ue.value=!1,ce.value!==p&&(ce.value=p))}),K(ue,p=>{J.value=p}),K(ce,p=>{J.value=p});const m=(p,C=!1,b=!1)=>{const x=a();(C||x!==p||p===null)&&(oe.value=[],pt(p,b)),ft().isMobileScreen&&(J.value=!1),Ve()},E=_n().t,_=xn("version");return{model:Jt,conversations:xe,messages:oe,context:ae,webBrowsingMode:Be,temperatureSuffix:Te,contextMode:nn,openMenu:J,openSidebar:ce,openDrawer:ue,inputValue:we,getCurrentConvId:a,getCurrentConvName:i,checkTokenAndGetConversations:tn,initPage:pt,goToChat:m,sendMessage:p=>{if(document.querySelectorAll(".Message.T").length>1)return ve.info("Thinking too many questions."),!1;const b=p||we.value,x=b.trim();if(b===we.value&&(we.value=""),x==="")return!1;const T=gt();return oe.value.push(gt("Q",x)),oe.value.push(T),Ue(),ar(x).then(g=>{const v=g.answer,B=g.urls,s=g.queries,d=g.dt,h="complete"in g?g.complete:!0,y=g.version;if(h||ve.warning(E("error.qTooLong")),!v)throw E("error.plzRefresh");T.text=v,T.urls=B||[],T.queries=s||[],T.dt=d||void 0,ae.add(x,v),y!==_.value&&fo.confirm(E("action.newVersion"),E("message.notice"),{confirmButtonText:E("message.ok"),cancelButtonText:E("message.cancel"),type:"warning"}).then(()=>{location.reload()}).finally(()=>{Ve()})}).catch(g=>{ve.error(g||"Oops! Something went wrong!"),T.text="Oops! Something went wrong!"}).finally(()=>{T.type="A",T.t=new Date}),je(x).then(g=>{T.more=g}).catch(()=>{}),!0},focusInput:Ve,predictMoreQuestions:je}}export{dr as E,Pn as a,Yn as b,Re as c,fo as d,ft as e,Xt as r,ke as s,vr as u};