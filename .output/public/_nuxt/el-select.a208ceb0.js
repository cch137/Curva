import{bs as Zl,bi as ml,bl as Jl,bt as xl,b as Sl,H as me,j as x,aj as ke,l as de,r as I,m as y,b2 as Kl,af as hl,aQ as zl,o as C,c as q,y as P,ap as Se,t as D,v as T,u as W,F as J,aD as Ke,aw as bl,aZ as Cl,s as B,C as re,R as ze,a as _l,h as ge,p as kl,w as K,bo as Ol,I as R,ar as wl,Q as $e,q as Fe,aF as en,ah as ve,z as gl,A as j,am as yl,K as Fl,bu as ln,k as El,an as qe,bv as U,as as Tl,B as se,G as ie,aH as Ll,ac as $l,aE as pe,bw as Me,bx as cl,aG as Pl,f as jl,E as nn,i as Al,by as tn,b1 as on,bz as an,aC as oe,bA as rn,S as fl,x as Q,bB as sn,b3 as un,at as Ql}from"./entry.cbeed785.js";import{a as dn,E as cn,b as fn,t as pn,d as vn}from"./el-popper.4bea26b6.js";import{t as mn,d as hn,U as ue,s as bn,a as gn,C as Ul,E as yn}from"./el-input.1544486f.js";import{b as Sn,u as Cn,a as On}from"./el-button.89f4a0c5.js";import{c as Hl}from"./isEqual.4fb46b28.js";import{i as wn}from"./focus-trap.4dd40eca.js";var En=/\s/;function Tn(e){for(var l=e.length;l--&&En.test(e.charAt(l)););return l}var Ln=/^\s+/;function In(e){return e&&e.slice(0,Tn(e)+1).replace(Ln,"")}var Vl=0/0,Mn=/^[-+]0x[0-9a-f]+$/i,zn=/^0b[01]+$/i,kn=/^0o[0-7]+$/i,$n=parseInt;function Bl(e){if(typeof e=="number")return e;if(Zl(e))return Vl;if(ml(e)){var l=typeof e.valueOf=="function"?e.valueOf():e;e=ml(l)?l+"":l}if(typeof e!="string")return e===0?e:+e;e=In(e);var o=zn.test(e);return o||kn.test(e)?$n(e.slice(2),o?2:8):Mn.test(e)?Vl:+e}var Pn=function(){return Jl.Date.now()};const pl=Pn;var An="Expected a function",Hn=Math.max,Vn=Math.min;function Dl(e,l,o){var s,v,c,a,f,r,S=0,h=!1,u=!1,O=!0;if(typeof e!="function")throw new TypeError(An);l=Bl(l)||0,ml(o)&&(h=!!o.leading,u="maxWait"in o,c=u?Hn(Bl(o.maxWait)||0,l):c,O="trailing"in o?!!o.trailing:O);function w(m){var p=s,L=v;return s=v=void 0,S=m,a=e.apply(L,p),a}function M(m){return S=m,f=setTimeout(E,l),h?w(m):a}function i(m){var p=m-r,L=m-S,A=l-p;return u?Vn(A,c-L):A}function b(m){var p=m-r,L=m-S;return r===void 0||p>=l||p<0||u&&L>=c}function E(){var m=pl();if(b(m))return $(m);f=setTimeout(E,i(m))}function $(m){return f=void 0,O&&s?w(m):(s=v=void 0,a)}function G(){f!==void 0&&clearTimeout(f),S=0,s=r=v=f=void 0}function N(){return f===void 0?a:$(pl())}function F(){var m=pl(),p=b(m);if(s=arguments,v=this,r=m,p){if(f===void 0)return M(r);if(u)return clearTimeout(f),f=setTimeout(E,l),w(r)}return f===void 0&&(f=setTimeout(E,l)),a}return F.cancel=G,F.flush=N,F}const Bn=(e="")=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),Dn=e=>xl[e||"default"],Wn=e=>({focus:()=>{var l,o;(o=(l=e.value)==null?void 0:l.focus)==null||o.call(l)}}),ye=4,Rn={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},Nn=({move:e,size:l,bar:o})=>({[o.size]:l,transform:`translate${o.axis}(${e}%)`}),Gl=Symbol("scrollbarContextKey"),qn=Sl({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),Kn="Thumb",Fn=x({__name:"thumb",props:qn,setup(e){const l=e,o=ke(Gl),s=de("scrollbar");o||mn(Kn,"can not inject scrollbar context");const v=I(),c=I(),a=I({}),f=I(!1);let r=!1,S=!1,h=Cl?document.onselectstart:null;const u=y(()=>Rn[l.vertical?"vertical":"horizontal"]),O=y(()=>Nn({size:l.size,move:l.move,bar:u.value})),w=y(()=>v.value[u.value.offset]**2/o.wrapElement[u.value.scrollSize]/l.ratio/c.value[u.value.offset]),M=m=>{var p;if(m.stopPropagation(),m.ctrlKey||[1,2].includes(m.button))return;(p=window.getSelection())==null||p.removeAllRanges(),b(m);const L=m.currentTarget;L&&(a.value[u.value.axis]=L[u.value.offset]-(m[u.value.client]-L.getBoundingClientRect()[u.value.direction]))},i=m=>{if(!c.value||!v.value||!o.wrapElement)return;const p=Math.abs(m.target.getBoundingClientRect()[u.value.direction]-m[u.value.client]),L=c.value[u.value.offset]/2,A=(p-L)*100*w.value/v.value[u.value.offset];o.wrapElement[u.value.scroll]=A*o.wrapElement[u.value.scrollSize]/100},b=m=>{m.stopImmediatePropagation(),r=!0,document.addEventListener("mousemove",E),document.addEventListener("mouseup",$),h=document.onselectstart,document.onselectstart=()=>!1},E=m=>{if(!v.value||!c.value||r===!1)return;const p=a.value[u.value.axis];if(!p)return;const L=(v.value.getBoundingClientRect()[u.value.direction]-m[u.value.client])*-1,A=c.value[u.value.offset]-p,k=(L-A)*100*w.value/v.value[u.value.offset];o.wrapElement[u.value.scroll]=k*o.wrapElement[u.value.scrollSize]/100},$=()=>{r=!1,a.value[u.value.axis]=0,document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",$),F(),S&&(f.value=!1)},G=()=>{S=!1,f.value=!!l.size},N=()=>{S=!0,f.value=r};Kl(()=>{F(),document.removeEventListener("mouseup",$)});const F=()=>{document.onselectstart!==h&&(document.onselectstart=h)};return hl(zl(o,"scrollbarElement"),"mousemove",G),hl(zl(o,"scrollbarElement"),"mouseleave",N),(m,p)=>(C(),q(bl,{name:W(s).b("fade"),persisted:""},{default:P(()=>[Se(D("div",{ref_key:"instance",ref:v,class:T([W(s).e("bar"),W(s).is(W(u).key)]),onMousedown:i},[D("div",{ref_key:"thumb",ref:c,class:T(W(s).e("thumb")),style:J(W(O)),onMousedown:M},null,38)],34),[[Ke,m.always||f.value]])]),_:1},8,["name"]))}});var Wl=me(Fn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);const jn=Sl({always:{type:Boolean,default:!0},width:String,height:String,ratioX:{type:Number,default:1},ratioY:{type:Number,default:1}}),Qn=x({__name:"bar",props:jn,setup(e,{expose:l}){const o=e,s=I(0),v=I(0);return l({handleScroll:a=>{if(a){const f=a.offsetHeight-ye,r=a.offsetWidth-ye;v.value=a.scrollTop*100/f*o.ratioY,s.value=a.scrollLeft*100/r*o.ratioX}}}),(a,f)=>(C(),B(ze,null,[re(Wl,{move:s.value,ratio:a.ratioX,size:a.width,always:a.always},null,8,["move","ratio","size","always"]),re(Wl,{move:v.value,ratio:a.ratioY,size:a.height,vertical:"",always:a.always},null,8,["move","ratio","size","always"])],64))}});var Un=me(Qn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);const Gn=Sl({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:_l([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20}}),Xn={scroll:({scrollTop:e,scrollLeft:l})=>[e,l].every(ge)},Yn="ElScrollbar",Zn=x({name:Yn}),Jn=x({...Zn,props:Gn,emits:Xn,setup(e,{expose:l,emit:o}){const s=e,v=de("scrollbar");let c,a;const f=I(),r=I(),S=I(),h=I("0"),u=I("0"),O=I(),w=I(1),M=I(1),i=y(()=>{const p={};return s.height&&(p.height=kl(s.height)),s.maxHeight&&(p.maxHeight=kl(s.maxHeight)),[s.wrapStyle,p]}),b=y(()=>[s.wrapClass,v.e("wrap"),{[v.em("wrap","hidden-default")]:!s.native}]),E=y(()=>[v.e("view"),s.viewClass]),$=()=>{var p;r.value&&((p=O.value)==null||p.handleScroll(r.value),o("scroll",{scrollTop:r.value.scrollTop,scrollLeft:r.value.scrollLeft}))};function G(p,L){yl(p)?r.value.scrollTo(p):ge(p)&&ge(L)&&r.value.scrollTo(p,L)}const N=p=>{ge(p)&&(r.value.scrollTop=p)},F=p=>{ge(p)&&(r.value.scrollLeft=p)},m=()=>{if(!r.value)return;const p=r.value.offsetHeight-ye,L=r.value.offsetWidth-ye,A=p**2/r.value.scrollHeight,k=L**2/r.value.scrollWidth,_=Math.max(A,s.minSize),ee=Math.max(k,s.minSize);w.value=A/(p-A)/(_/(p-_)),M.value=k/(L-k)/(ee/(L-ee)),u.value=_+ye<p?`${_}px`:"",h.value=ee+ye<L?`${ee}px`:""};return K(()=>s.noresize,p=>{p?(c==null||c(),a==null||a()):({stop:c}=Ol(S,m),a=hl("resize",m))},{immediate:!0}),K(()=>[s.maxHeight,s.height],()=>{s.native||R(()=>{var p;m(),r.value&&((p=O.value)==null||p.handleScroll(r.value))})}),wl(Gl,$e({scrollbarElement:f,wrapElement:r})),Fe(()=>{s.native||R(()=>{m()})}),en(()=>m()),l({wrapRef:r,update:m,scrollTo:G,setScrollTop:N,setScrollLeft:F,handleScroll:$}),(p,L)=>(C(),B("div",{ref_key:"scrollbarRef",ref:f,class:T(W(v).b())},[D("div",{ref_key:"wrapRef",ref:r,class:T(W(b)),style:J(W(i)),onScroll:$},[(C(),q(gl(p.tag),{ref_key:"resizeRef",ref:S,class:T(W(E)),style:J(p.viewStyle)},{default:P(()=>[ve(p.$slots,"default")]),_:3},8,["class","style"]))],38),p.native?j("v-if",!0):(C(),q(Un,{key:0,ref_key:"barRef",ref:O,height:u.value,width:h.value,always:p.always,"ratio-x":M.value,"ratio-y":w.value},null,8,["height","width","always","ratio-x","ratio-y"]))],2))}});var xn=me(Jn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);const _n=Fl(xn),ae=new Map;let Rl;Cl&&(document.addEventListener("mousedown",e=>Rl=e),document.addEventListener("mouseup",e=>{for(const l of ae.values())for(const{documentHandler:o}of l)o(e,Rl)}));function Nl(e,l){let o=[];return Array.isArray(l.arg)?o=l.arg:ln(l.arg)&&o.push(l.arg),function(s,v){const c=l.instance.popperRef,a=s.target,f=v==null?void 0:v.target,r=!l||!l.instance,S=!a||!f,h=e.contains(a)||e.contains(f),u=e===a,O=o.length&&o.some(M=>M==null?void 0:M.contains(a))||o.length&&o.includes(f),w=c&&(c.contains(a)||c.contains(f));r||S||h||u||O||w||l.value(s,v)}}const et={beforeMount(e,l){ae.has(e)||ae.set(e,[]),ae.get(e).push({documentHandler:Nl(e,l),bindingFn:l.value})},updated(e,l){ae.has(e)||ae.set(e,[]);const o=ae.get(e),s=o.findIndex(c=>c.bindingFn===l.oldValue),v={documentHandler:Nl(e,l),bindingFn:l.value};s>=0?o.splice(s,1,v):o.push(v)},unmounted(e){ae.delete(e)}},Xl=Symbol("ElSelectGroup"),je=Symbol("ElSelect");function lt(e,l){const o=ke(je),s=ke(Xl,{disabled:!1}),v=y(()=>Object.prototype.toString.call(e.value).toLowerCase()==="[object object]"),c=y(()=>o.props.multiple?u(o.props.modelValue,e.value):O(e.value,o.props.modelValue)),a=y(()=>{if(o.props.multiple){const i=o.props.modelValue||[];return!c.value&&i.length>=o.props.multipleLimit&&o.props.multipleLimit>0}else return!1}),f=y(()=>e.label||(v.value?"":e.value)),r=y(()=>e.value||e.label||""),S=y(()=>e.disabled||l.groupDisabled||a.value),h=El(),u=(i=[],b)=>{if(v.value){const E=o.props.valueKey;return i&&i.some($=>qe(U($,E))===U(b,E))}else return i&&i.includes(b)},O=(i,b)=>{if(v.value){const{valueKey:E}=o.props;return U(i,E)===U(b,E)}else return i===b},w=()=>{!e.disabled&&!s.disabled&&(o.hoverIndex=o.optionsArray.indexOf(h.proxy))};K(()=>f.value,()=>{!e.created&&!o.props.remote&&o.setSelected()}),K(()=>e.value,(i,b)=>{const{remote:E,valueKey:$}=o.props;if(Object.is(i,b)||(o.onOptionDestroy(b,h.proxy),o.onOptionCreate(h.proxy)),!e.created&&!E){if($&&typeof i=="object"&&typeof b=="object"&&i[$]===b[$])return;o.setSelected()}}),K(()=>s.disabled,()=>{l.groupDisabled=s.disabled},{immediate:!0});const{queryChange:M}=qe(o);return K(M,i=>{const{query:b}=W(i),E=new RegExp(Bn(b),"i");l.visible=E.test(f.value)||e.created,l.visible||o.filteredOptionsCount--},{immediate:!0}),{select:o,currentLabel:f,currentValue:r,itemSelected:c,isDisabled:S,hoverItem:w}}const nt=x({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:{type:Boolean,default:!1}},setup(e){const l=de("select"),o=$e({index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}),{currentLabel:s,itemSelected:v,isDisabled:c,select:a,hoverItem:f}=lt(e,o),{visible:r,hover:S}=Tl(o),h=El().proxy;a.onOptionCreate(h),Kl(()=>{const O=h.value,{selected:w}=a,i=(a.props.multiple?w:[w]).some(b=>b.value===h.value);R(()=>{a.cachedOptions.get(O)===h&&!i&&a.cachedOptions.delete(O)}),a.onOptionDestroy(O,h)});function u(){e.disabled!==!0&&o.groupDisabled!==!0&&a.handleOptionSelect(h)}return{ns:l,currentLabel:s,itemSelected:v,isDisabled:c,select:a,hoverItem:f,visible:r,hover:S,selectOptionClick:u,states:o}}});function tt(e,l,o,s,v,c){return Se((C(),B("li",{class:T([e.ns.be("dropdown","item"),e.ns.is("disabled",e.isDisabled),{selected:e.itemSelected,hover:e.hover}]),onMouseenter:l[0]||(l[0]=(...a)=>e.hoverItem&&e.hoverItem(...a)),onClick:l[1]||(l[1]=ie((...a)=>e.selectOptionClick&&e.selectOptionClick(...a),["stop"]))},[ve(e.$slots,"default",{},()=>[D("span",null,se(e.currentLabel),1)])],34)),[[Ke,e.visible]])}var Il=me(nt,[["render",tt],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);const ot=x({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=ke(je),l=de("select"),o=y(()=>e.props.popperClass),s=y(()=>e.props.multiple),v=y(()=>e.props.fitInputWidth),c=I("");function a(){var f;c.value=`${(f=e.selectWrapper)==null?void 0:f.offsetWidth}px`}return Fe(()=>{a(),Ol(e.selectWrapper,a)}),{ns:l,minWidth:c,popperClass:o,isMultiple:s,isFitInputWidth:v}}});function it(e,l,o,s,v,c){return C(),B("div",{class:T([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:J({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[ve(e.$slots,"default")],6)}var at=me(ot,[["render",it],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);function rt(e){const{t:l}=Ll();return $e({options:new Map,cachedOptions:new Map,createdLabel:null,createdSelected:!1,selected:e.multiple?[]:{},inputLength:20,inputWidth:0,optionsCount:0,filteredOptionsCount:0,visible:!1,selectedLabel:"",hoverIndex:-1,query:"",previousQuery:null,inputHovering:!1,cachedPlaceHolder:"",currentPlaceholder:l("el.select.placeholder"),menuVisibleOnFocus:!1,isOnComposition:!1,prefixWidth:11,tagInMultiLine:!1,mouseEnter:!1})}let vl=!1;const st=(e,l,o)=>{const{t:s}=Ll(),v=de("select");Sn({from:"suffixTransition",replacement:"override style scheme",version:"2.3.0",scope:"props",ref:"https://element-plus.org/en-US/component/select.html#select-attributes"},y(()=>e.suffixTransition===!1));const c=I(null),a=I(null),f=I(null),r=I(null),S=I(null),h=I(null),u=I(null),O=I(-1),w=$l({query:""}),M=$l(""),i=I([]);let b=0;const{form:E,formItem:$}=Cn(),G=y(()=>!e.filterable||e.multiple||!l.visible),N=y(()=>e.disabled||(E==null?void 0:E.disabled)),F=y(()=>{const n=e.multiple?Array.isArray(e.modelValue)&&e.modelValue.length>0:e.modelValue!==void 0&&e.modelValue!==null&&e.modelValue!=="";return e.clearable&&!N.value&&l.inputHovering&&n}),m=y(()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon),p=y(()=>v.is("reverse",m.value&&l.visible&&e.suffixTransition)),L=y(()=>e.remote?300:0),A=y(()=>e.loading?e.loadingText||s("el.select.loading"):e.remote&&l.query===""&&l.options.size===0?!1:e.filterable&&l.query&&l.options.size>0&&l.filteredOptionsCount===0?e.noMatchText||s("el.select.noMatch"):l.options.size===0?e.noDataText||s("el.select.noData"):null),k=y(()=>{const n=Array.from(l.options.values()),t=[];return i.value.forEach(d=>{const g=n.findIndex(H=>H.currentLabel===d);g>-1&&t.push(n[g])}),t.length?t:n}),_=y(()=>Array.from(l.cachedOptions.values())),ee=y(()=>{const n=k.value.filter(t=>!t.created).some(t=>t.currentLabel===l.query);return e.filterable&&e.allowCreate&&l.query!==""&&!n}),ce=On(),Qe=y(()=>["small"].includes(ce.value)?"small":"default"),Ue=y({get(){return l.visible&&A.value!==!1},set(n){l.visible=n}});K([()=>N.value,()=>ce.value,()=>E==null?void 0:E.size],()=>{R(()=>{X()})}),K(()=>e.placeholder,n=>{l.cachedPlaceHolder=l.currentPlaceholder=n,e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(l.currentPlaceholder="")}),K(()=>e.modelValue,(n,t)=>{e.multiple&&(X(),n&&n.length>0||a.value&&l.query!==""?l.currentPlaceholder="":l.currentPlaceholder=l.cachedPlaceHolder,e.filterable&&!e.reserveKeyword&&(l.query="",le(l.query))),Ce(),e.filterable&&!e.multiple&&(l.inputLength=20),!Hl(n,t)&&e.validateEvent&&($==null||$.validate("change").catch(d=>hn()))},{flush:"post",deep:!0}),K(()=>l.visible,n=>{var t,d,g,H,V;n?((d=(t=r.value)==null?void 0:t.updatePopper)==null||d.call(t),e.filterable&&(l.filteredOptionsCount=l.optionsCount,l.query=e.remote?"":l.selectedLabel,(H=(g=f.value)==null?void 0:g.focus)==null||H.call(g),e.multiple?(V=a.value)==null||V.focus():l.selectedLabel&&(l.currentPlaceholder=`${l.selectedLabel}`,l.selectedLabel=""),le(l.query),!e.multiple&&!e.remote&&(w.value.query="",Me(w),Me(M)))):(e.filterable&&(pe(e.filterMethod)&&e.filterMethod(""),pe(e.remoteMethod)&&e.remoteMethod("")),a.value&&a.value.blur(),l.query="",l.previousQuery=null,l.selectedLabel="",l.inputLength=20,l.menuVisibleOnFocus=!1,Ge(),R(()=>{a.value&&a.value.value===""&&l.selected.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)}),e.multiple||(l.selected&&(e.filterable&&e.allowCreate&&l.createdSelected&&l.createdLabel?l.selectedLabel=l.createdLabel:l.selectedLabel=l.selected.currentLabel,e.filterable&&(l.query=l.selectedLabel)),e.filterable&&(l.currentPlaceholder=l.cachedPlaceHolder))),o.emit("visible-change",n)}),K(()=>l.options.entries(),()=>{var n,t,d;if(!Cl)return;(t=(n=r.value)==null?void 0:n.updatePopper)==null||t.call(n),e.multiple&&X();const g=((d=h.value)==null?void 0:d.querySelectorAll("input"))||[];Array.from(g).includes(document.activeElement)||Ce(),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&Ae()},{flush:"post"}),K(()=>l.hoverIndex,n=>{ge(n)&&n>-1?O.value=k.value[n]||{}:O.value={},k.value.forEach(t=>{t.hover=O.value===t})});const X=()=>{R(()=>{var n,t;if(!c.value)return;const d=c.value.$el.querySelector("input");b=b||(d.clientHeight>0?d.clientHeight+2:0);const g=S.value,H=Dn(ce.value||(E==null?void 0:E.size)),V=ce.value||H===b||b<=0?H:b;!(d.offsetParent===null)&&(d.style.height=`${(l.selected.length===0?V:Math.max(g?g.clientHeight+(g.clientHeight>V?6:0):0,V))-2}px`),l.tagInMultiLine=Number.parseFloat(d.style.height)>=V,l.visible&&A.value!==!1&&((t=(n=r.value)==null?void 0:n.updatePopper)==null||t.call(n))})},le=async n=>{if(!(l.previousQuery===n||l.isOnComposition)){if(l.previousQuery===null&&(pe(e.filterMethod)||pe(e.remoteMethod))){l.previousQuery=n;return}l.previousQuery=n,R(()=>{var t,d;l.visible&&((d=(t=r.value)==null?void 0:t.updatePopper)==null||d.call(t))}),l.hoverIndex=-1,e.multiple&&e.filterable&&R(()=>{const t=a.value.value.length*15+20;l.inputLength=e.collapseTags?Math.min(50,t):t,Pe(),X()}),e.remote&&pe(e.remoteMethod)?(l.hoverIndex=-1,e.remoteMethod(n)):pe(e.filterMethod)?(e.filterMethod(n),Me(M)):(l.filteredOptionsCount=l.optionsCount,w.value.query=n,Me(w),Me(M)),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&(await R(),Ae())}},Pe=()=>{l.currentPlaceholder!==""&&(l.currentPlaceholder=a.value.value?"":l.cachedPlaceHolder)},Ae=()=>{const n=k.value.filter(g=>g.visible&&!g.disabled&&!g.states.groupDisabled),t=n.find(g=>g.created),d=n[0];l.hoverIndex=Be(k.value,t||d)},Ce=()=>{var n;if(e.multiple)l.selectedLabel="";else{const d=He(e.modelValue);(n=d.props)!=null&&n.created?(l.createdLabel=d.props.value,l.createdSelected=!0):l.createdSelected=!1,l.selectedLabel=d.currentLabel,l.selected=d,e.filterable&&(l.query=l.selectedLabel);return}const t=[];Array.isArray(e.modelValue)&&e.modelValue.forEach(d=>{t.push(He(d))}),l.selected=t,R(()=>{X()})},He=n=>{let t;const d=cl(n).toLowerCase()==="object",g=cl(n).toLowerCase()==="null",H=cl(n).toLowerCase()==="undefined";for(let te=l.cachedOptions.size-1;te>=0;te--){const z=_.value[te];if(d?U(z.value,e.valueKey)===U(n,e.valueKey):z.value===n){t={value:n,currentLabel:z.currentLabel,isDisabled:z.isDisabled};break}}if(t)return t;const V=d?n.label:!g&&!H?n:"",Z={value:n,currentLabel:V};return e.multiple&&(Z.hitState=!1),Z},Ge=()=>{setTimeout(()=>{const n=e.valueKey;e.multiple?l.selected.length>0?l.hoverIndex=Math.min.apply(null,l.selected.map(t=>k.value.findIndex(d=>U(d,n)===U(t,n)))):l.hoverIndex=-1:l.hoverIndex=k.value.findIndex(t=>Le(t)===Le(l.selected))},300)},Xe=()=>{var n,t;Ye(),(t=(n=r.value)==null?void 0:n.updatePopper)==null||t.call(n),e.multiple&&X()},Ye=()=>{var n;l.inputWidth=(n=c.value)==null?void 0:n.$el.offsetWidth},Ze=()=>{e.filterable&&l.query!==l.selectedLabel&&(l.query=l.selectedLabel,le(l.query))},Je=Dl(()=>{Ze()},L.value),xe=Dl(n=>{le(n.target.value)},L.value),fe=n=>{Hl(e.modelValue,n)||o.emit(Ul,n)},he=n=>{if(n.code!==Pl.delete){if(n.target.value.length<=0&&!Ee()){const t=e.modelValue.slice();t.pop(),o.emit(ue,t),fe(t)}n.target.value.length===1&&e.modelValue.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)}},_e=(n,t)=>{const d=l.selected.indexOf(t);if(d>-1&&!N.value){const g=e.modelValue.slice();g.splice(d,1),o.emit(ue,g),fe(g),o.emit("remove-tag",t.value)}n.stopPropagation()},Ve=n=>{n.stopPropagation();const t=e.multiple?[]:"";if(!jl(t))for(const d of l.selected)d.isDisabled&&t.push(d.value);o.emit(ue,t),fe(t),l.hoverIndex=-1,l.visible=!1,o.emit("clear")},Oe=n=>{var t;if(e.multiple){const d=(e.modelValue||[]).slice(),g=Be(d,n.value);g>-1?d.splice(g,1):(e.multipleLimit<=0||d.length<e.multipleLimit)&&d.push(n.value),o.emit(ue,d),fe(d),n.created&&(l.query="",le(""),l.inputLength=20),e.filterable&&((t=a.value)==null||t.focus())}else o.emit(ue,n.value),fe(n.value),l.visible=!1;we(),!l.visible&&R(()=>{be(n)})},Be=(n=[],t)=>{if(!yl(t))return n.indexOf(t);const d=e.valueKey;let g=-1;return n.some((H,V)=>qe(U(H,d))===U(t,d)?(g=V,!0):!1),g},we=()=>{const n=a.value||c.value;n&&(n==null||n.focus())},be=n=>{var t,d,g,H,V;const Z=Array.isArray(n)?n[0]:n;let te=null;if(Z!=null&&Z.value){const z=k.value.filter(Y=>Y.value===Z.value);z.length>0&&(te=z[0].$el)}if(r.value&&te){const z=(H=(g=(d=(t=r.value)==null?void 0:t.popperRef)==null?void 0:d.contentRef)==null?void 0:g.querySelector)==null?void 0:H.call(g,`.${v.be("dropdown","wrap")}`);z&&bn(z,te)}(V=u.value)==null||V.handleScroll()},el=n=>{l.optionsCount++,l.filteredOptionsCount++,l.options.set(n.value,n),l.cachedOptions.set(n.value,n)},ll=(n,t)=>{l.options.get(n)===t&&(l.optionsCount--,l.filteredOptionsCount--,l.options.delete(n))},nl=n=>{n.code!==Pl.backspace&&Ee(!1),l.inputLength=a.value.value.length*15+20,X()},Ee=n=>{if(!Array.isArray(l.selected))return;const t=l.selected[l.selected.length-1];if(t)return n===!0||n===!1?(t.hitState=n,n):(t.hitState=!t.hitState,t.hitState)},tl=n=>{const t=n.target.value;if(n.type==="compositionend")l.isOnComposition=!1,R(()=>le(t));else{const d=t[t.length-1]||"";l.isOnComposition=!gn(d)}},ol=()=>{R(()=>be(l.selected))},il=n=>{vl?vl=!1:((e.automaticDropdown||e.filterable)&&(e.filterable&&!l.visible&&(l.menuVisibleOnFocus=!0),l.visible=!0),o.emit("focus",n))},ne=()=>{var n,t,d;l.visible=!1,(n=c.value)==null||n.blur(),(d=(t=f.value)==null?void 0:t.blur)==null||d.call(t)},De=n=>{setTimeout(()=>{var t;if((t=r.value)!=null&&t.isFocusInsideContent()){vl=!0;return}l.visible&&Te(),o.emit("blur",n)})},al=n=>{Ve(n)},Te=()=>{l.visible=!1},rl=n=>{l.visible&&(n.preventDefault(),n.stopPropagation(),l.visible=!1)},We=n=>{var t;n&&!l.mouseEnter||N.value||(l.menuVisibleOnFocus?l.menuVisibleOnFocus=!1:(!r.value||!r.value.isFocusInsideContent())&&(l.visible=!l.visible),l.visible&&((t=a.value||c.value)==null||t.focus()))},Re=()=>{l.visible?k.value[l.hoverIndex]&&Oe(k.value[l.hoverIndex]):We()},Le=n=>yl(n.value)?U(n.value,e.valueKey):n.value,sl=y(()=>k.value.filter(n=>n.visible).every(n=>n.disabled)),Ie=y(()=>l.selected.slice(0,e.maxCollapseTags)),ul=y(()=>l.selected.slice(e.maxCollapseTags)),Ne=n=>{if(!l.visible){l.visible=!0;return}if(!(l.options.size===0||l.filteredOptionsCount===0)&&!l.isOnComposition&&!sl.value){n==="next"?(l.hoverIndex++,l.hoverIndex===l.options.size&&(l.hoverIndex=0)):n==="prev"&&(l.hoverIndex--,l.hoverIndex<0&&(l.hoverIndex=l.options.size-1));const t=k.value[l.hoverIndex];(t.disabled===!0||t.states.groupDisabled===!0||!t.visible)&&Ne(n),R(()=>be(O.value))}};return{optionList:i,optionsArray:k,selectSize:ce,handleResize:Xe,debouncedOnInputChange:Je,debouncedQueryChange:xe,deletePrevTag:he,deleteTag:_e,deleteSelected:Ve,handleOptionSelect:Oe,scrollToOption:be,readonly:G,resetInputHeight:X,showClose:F,iconComponent:m,iconReverse:p,showNewOption:ee,collapseTagSize:Qe,setSelected:Ce,managePlaceholder:Pe,selectDisabled:N,emptyText:A,toggleLastOptionHitState:Ee,resetInputState:nl,handleComposition:tl,onOptionCreate:el,onOptionDestroy:ll,handleMenuEnter:ol,handleFocus:il,blur:ne,handleBlur:De,handleClearClick:al,handleClose:Te,handleKeydownEscape:rl,toggleMenu:We,selectOption:Re,getValueKey:Le,navigateOptions:Ne,dropMenuVisible:Ue,queryChange:w,groupQueryChange:M,showTagList:Ie,collapseTagList:ul,reference:c,input:a,iOSInput:f,tooltipRef:r,tags:S,selectWrapper:h,scrollbar:u,handleMouseEnter:()=>{l.mouseEnter=!0},handleMouseLeave:()=>{l.mouseEnter=!1}}};var ut=x({name:"ElOptions",emits:["update-options"],setup(e,{slots:l,emit:o}){let s=[];function v(c,a){if(c.length!==a.length)return!1;for(const[f]of c.entries())if(c[f]!=a[f])return!1;return!0}return()=>{var c,a;const f=(c=l.default)==null?void 0:c.call(l),r=[];function S(h){Array.isArray(h)&&h.forEach(u=>{var O,w,M,i;const b=(O=(u==null?void 0:u.type)||{})==null?void 0:O.name;b==="ElOptionGroup"?S(!jl(u.children)&&!Array.isArray(u.children)&&pe((w=u.children)==null?void 0:w.default)?(M=u.children)==null?void 0:M.default():u.children):b==="ElOption"?r.push((i=u.props)==null?void 0:i.label):Array.isArray(u.children)&&S(u.children)})}return f.length&&S((a=f[0])==null?void 0:a.children),v(r,s)||(s=r,o("update-options",r)),f}}});const ql="ElSelect",dt=x({name:ql,componentName:ql,components:{ElInput:yn,ElSelectMenu:at,ElOption:Il,ElOptions:ut,ElTag:dn,ElScrollbar:_n,ElTooltip:cn,ElIcon:nn},directives:{ClickOutside:et},props:{name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:{type:String,validator:wn},effect:{type:String,default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:Object,default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},maxCollapseTags:{type:Number,default:1},teleported:fn.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:Al,default:tn},fitInputWidth:{type:Boolean,default:!1},suffixIcon:{type:Al,default:on},tagType:{...pn.type,default:"info"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:{type:Boolean,default:!1},suffixTransition:{type:Boolean,default:!0},placement:{type:String,values:vn,default:"bottom-start"}},emits:[ue,Ul,"remove-tag","clear","visible-change","focus","blur"],setup(e,l){const o=de("select"),s=de("input"),{t:v}=Ll(),c=rt(e),{optionList:a,optionsArray:f,selectSize:r,readonly:S,handleResize:h,collapseTagSize:u,debouncedOnInputChange:O,debouncedQueryChange:w,deletePrevTag:M,deleteTag:i,deleteSelected:b,handleOptionSelect:E,scrollToOption:$,setSelected:G,resetInputHeight:N,managePlaceholder:F,showClose:m,selectDisabled:p,iconComponent:L,iconReverse:A,showNewOption:k,emptyText:_,toggleLastOptionHitState:ee,resetInputState:ce,handleComposition:Qe,onOptionCreate:Ue,onOptionDestroy:X,handleMenuEnter:le,handleFocus:Pe,blur:Ae,handleBlur:Ce,handleClearClick:He,handleClose:Ge,handleKeydownEscape:Xe,toggleMenu:Ye,selectOption:Ze,getValueKey:Je,navigateOptions:xe,dropMenuVisible:fe,reference:he,input:_e,iOSInput:Ve,tooltipRef:Oe,tags:Be,selectWrapper:we,scrollbar:be,queryChange:el,groupQueryChange:ll,handleMouseEnter:nl,handleMouseLeave:Ee,showTagList:tl,collapseTagList:ol}=st(e,c,l),{focus:il}=Wn(he),{inputWidth:ne,selected:De,inputLength:al,filteredOptionsCount:Te,visible:rl,selectedLabel:We,hoverIndex:Re,query:Le,inputHovering:sl,currentPlaceholder:Ie,menuVisibleOnFocus:ul,isOnComposition:Ne,options:dl,cachedOptions:Ml,optionsCount:n,prefixWidth:t,tagInMultiLine:d}=Tl(c),g=y(()=>{const z=[o.b()],Y=W(r);return Y&&z.push(o.m(Y)),e.disabled&&z.push(o.m("disabled")),z}),H=y(()=>({maxWidth:`${W(ne)-32}px`,width:"100%"})),V=y(()=>({maxWidth:`${W(ne)>123?W(ne)-123:W(ne)-75}px`}));wl(je,$e({props:e,options:dl,optionsArray:f,cachedOptions:Ml,optionsCount:n,filteredOptionsCount:Te,hoverIndex:Re,handleOptionSelect:E,onOptionCreate:Ue,onOptionDestroy:X,selectWrapper:we,selected:De,setSelected:G,queryChange:el,groupQueryChange:ll})),Fe(()=>{c.cachedPlaceHolder=Ie.value=e.placeholder||(()=>v("el.select.placeholder")),e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(Ie.value=""),Ol(we,h),e.remote&&e.multiple&&N(),R(()=>{const z=he.value&&he.value.$el;if(z&&(ne.value=z.getBoundingClientRect().width,l.slots.prefix)){const Y=z.querySelector(`.${s.e("prefix")}`);t.value=Math.max(Y.getBoundingClientRect().width+5,30)}}),G()}),e.multiple&&!Array.isArray(e.modelValue)&&l.emit(ue,[]),!e.multiple&&Array.isArray(e.modelValue)&&l.emit(ue,"");const Z=y(()=>{var z,Y;return(Y=(z=Oe.value)==null?void 0:z.popperRef)==null?void 0:Y.contentRef});return{isIOS:an,onOptionsRendered:z=>{a.value=z},tagInMultiLine:d,prefixWidth:t,selectSize:r,readonly:S,handleResize:h,collapseTagSize:u,debouncedOnInputChange:O,debouncedQueryChange:w,deletePrevTag:M,deleteTag:i,deleteSelected:b,handleOptionSelect:E,scrollToOption:$,inputWidth:ne,selected:De,inputLength:al,filteredOptionsCount:Te,visible:rl,selectedLabel:We,hoverIndex:Re,query:Le,inputHovering:sl,currentPlaceholder:Ie,menuVisibleOnFocus:ul,isOnComposition:Ne,options:dl,resetInputHeight:N,managePlaceholder:F,showClose:m,selectDisabled:p,iconComponent:L,iconReverse:A,showNewOption:k,emptyText:_,toggleLastOptionHitState:ee,resetInputState:ce,handleComposition:Qe,handleMenuEnter:le,handleFocus:Pe,blur:Ae,handleBlur:Ce,handleClearClick:He,handleClose:Ge,handleKeydownEscape:Xe,toggleMenu:Ye,selectOption:Ze,getValueKey:Je,navigateOptions:xe,dropMenuVisible:fe,focus:il,reference:he,input:_e,iOSInput:Ve,tooltipRef:Oe,popperPaneRef:Z,tags:Be,selectWrapper:we,scrollbar:be,wrapperKls:g,selectTagsStyle:H,nsSelect:o,tagTextStyle:V,handleMouseEnter:nl,handleMouseLeave:Ee,showTagList:tl,collapseTagList:ol}}}),ct=["disabled","autocomplete"],ft=["disabled"],pt={style:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}};function vt(e,l,o,s,v,c){const a=oe("el-tag"),f=oe("el-tooltip"),r=oe("el-icon"),S=oe("el-input"),h=oe("el-option"),u=oe("el-options"),O=oe("el-scrollbar"),w=oe("el-select-menu"),M=rn("click-outside");return Se((C(),B("div",{ref:"selectWrapper",class:T(e.wrapperKls),onMouseenter:l[21]||(l[21]=(...i)=>e.handleMouseEnter&&e.handleMouseEnter(...i)),onMouseleave:l[22]||(l[22]=(...i)=>e.handleMouseLeave&&e.handleMouseLeave(...i)),onClick:l[23]||(l[23]=ie((...i)=>e.toggleMenu&&e.toggleMenu(...i),["stop"]))},[re(f,{ref:"tooltipRef",visible:e.dropMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":["bottom-start","top-start","right","left"],effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onShow:e.handleMenuEnter},{default:P(()=>[D("div",{class:"select-trigger",onMouseenter:l[19]||(l[19]=i=>e.inputHovering=!0),onMouseleave:l[20]||(l[20]=i=>e.inputHovering=!1)},[e.multiple?(C(),B("div",{key:0,ref:"tags",class:T([e.nsSelect.e("tags"),e.nsSelect.is("disabled",e.selectDisabled)]),style:J(e.selectTagsStyle)},[e.collapseTags&&e.selected.length?(C(),q(bl,{key:0,onAfterLeave:e.resetInputHeight},{default:P(()=>[D("span",{class:T([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[(C(!0),B(ze,null,fl(e.showTagList,i=>(C(),q(a,{key:e.getValueKey(i),closable:!e.selectDisabled&&!i.isDisabled,size:e.collapseTagSize,hit:i.hitState,type:e.tagType,"disable-transitions":"",onClose:b=>e.deleteTag(b,i)},{default:P(()=>[D("span",{class:T(e.nsSelect.e("tags-text")),style:J(e.tagTextStyle)},se(i.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128)),e.selected.length>e.maxCollapseTags?(C(),q(a,{key:0,closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":""},{default:P(()=>[e.collapseTagsTooltip?(C(),q(f,{key:0,disabled:e.dropMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:P(()=>[D("span",{class:T(e.nsSelect.e("tags-text"))},"+ "+se(e.selected.length-e.maxCollapseTags),3)]),content:P(()=>[D("div",{class:T(e.nsSelect.e("collapse-tags"))},[(C(!0),B(ze,null,fl(e.collapseTagList,i=>(C(),B("div",{key:e.getValueKey(i),class:T(e.nsSelect.e("collapse-tag"))},[re(a,{class:"in-tooltip",closable:!e.selectDisabled&&!i.isDisabled,size:e.collapseTagSize,hit:i.hitState,type:e.tagType,"disable-transitions":"",style:{margin:"2px"},onClose:b=>e.deleteTag(b,i)},{default:P(()=>[D("span",{class:T(e.nsSelect.e("tags-text")),style:J({maxWidth:e.inputWidth-75+"px"})},se(i.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"])],2))),128))],2)]),_:1},8,["disabled","effect","teleported"])):(C(),B("span",{key:1,class:T(e.nsSelect.e("tags-text"))},"+ "+se(e.selected.length-e.maxCollapseTags),3))]),_:1},8,["size","type"])):j("v-if",!0)],2)]),_:1},8,["onAfterLeave"])):j("v-if",!0),e.collapseTags?j("v-if",!0):(C(),q(bl,{key:1,onAfterLeave:e.resetInputHeight},{default:P(()=>[D("span",{class:T([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[(C(!0),B(ze,null,fl(e.selected,i=>(C(),q(a,{key:e.getValueKey(i),closable:!e.selectDisabled&&!i.isDisabled,size:e.collapseTagSize,hit:i.hitState,type:e.tagType,"disable-transitions":"",onClose:b=>e.deleteTag(b,i)},{default:P(()=>[D("span",{class:T(e.nsSelect.e("tags-text")),style:J({maxWidth:e.inputWidth-75+"px"})},se(i.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128))],2)]),_:1},8,["onAfterLeave"])),e.filterable?Se((C(),B("input",{key:2,ref:"input","onUpdate:modelValue":l[0]||(l[0]=i=>e.query=i),type:"text",class:T([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize),e.nsSelect.is("disabled",e.selectDisabled)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:J({marginLeft:e.prefixWidth&&!e.selected.length||e.tagInMultiLine?`${e.prefixWidth}px`:"",flexGrow:1,width:`${e.inputLength/(e.inputWidth-32)}%`,maxWidth:`${e.inputWidth-42}px`}),onFocus:l[1]||(l[1]=(...i)=>e.handleFocus&&e.handleFocus(...i)),onBlur:l[2]||(l[2]=(...i)=>e.handleBlur&&e.handleBlur(...i)),onKeyup:l[3]||(l[3]=(...i)=>e.managePlaceholder&&e.managePlaceholder(...i)),onKeydown:[l[4]||(l[4]=(...i)=>e.resetInputState&&e.resetInputState(...i)),l[5]||(l[5]=Q(ie(i=>e.navigateOptions("next"),["prevent"]),["down"])),l[6]||(l[6]=Q(ie(i=>e.navigateOptions("prev"),["prevent"]),["up"])),l[7]||(l[7]=Q((...i)=>e.handleKeydownEscape&&e.handleKeydownEscape(...i),["esc"])),l[8]||(l[8]=Q(ie((...i)=>e.selectOption&&e.selectOption(...i),["stop","prevent"]),["enter"])),l[9]||(l[9]=Q((...i)=>e.deletePrevTag&&e.deletePrevTag(...i),["delete"])),l[10]||(l[10]=Q(i=>e.visible=!1,["tab"]))],onCompositionstart:l[11]||(l[11]=(...i)=>e.handleComposition&&e.handleComposition(...i)),onCompositionupdate:l[12]||(l[12]=(...i)=>e.handleComposition&&e.handleComposition(...i)),onCompositionend:l[13]||(l[13]=(...i)=>e.handleComposition&&e.handleComposition(...i)),onInput:l[14]||(l[14]=(...i)=>e.debouncedQueryChange&&e.debouncedQueryChange(...i))},null,46,ct)),[[sn,e.query]]):j("v-if",!0)],6)):j("v-if",!0),j(" fix: https://github.com/element-plus/element-plus/issues/11415 "),e.isIOS&&!e.multiple&&e.filterable&&e.readonly?(C(),B("input",{key:1,ref:"iOSInput",class:T([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize),e.nsSelect.em("input","iOS")]),disabled:e.selectDisabled,type:"text"},null,10,ft)):j("v-if",!0),re(S,{id:e.id,ref:"reference",modelValue:e.selectedLabel,"onUpdate:modelValue":l[15]||(l[15]=i=>e.selectedLabel=i),type:"text",placeholder:typeof e.currentPlaceholder=="function"?e.currentPlaceholder():e.currentPlaceholder,name:e.name,autocomplete:e.autocomplete,size:e.selectSize,disabled:e.selectDisabled,readonly:e.readonly,"validate-event":!1,class:T([e.nsSelect.is("focus",e.visible)]),tabindex:e.multiple&&e.filterable?-1:void 0,onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.debouncedOnInputChange,onPaste:e.debouncedOnInputChange,onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onKeydown:[l[16]||(l[16]=Q(ie(i=>e.navigateOptions("next"),["stop","prevent"]),["down"])),l[17]||(l[17]=Q(ie(i=>e.navigateOptions("prev"),["stop","prevent"]),["up"])),Q(ie(e.selectOption,["stop","prevent"]),["enter"]),Q(e.handleKeydownEscape,["esc"]),l[18]||(l[18]=Q(i=>e.visible=!1,["tab"]))]},un({suffix:P(()=>[e.iconComponent&&!e.showClose?(C(),q(r,{key:0,class:T([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:P(()=>[(C(),q(gl(e.iconComponent)))]),_:1},8,["class"])):j("v-if",!0),e.showClose&&e.clearIcon?(C(),q(r,{key:1,class:T([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:P(()=>[(C(),q(gl(e.clearIcon)))]),_:1},8,["class","onClick"])):j("v-if",!0)]),_:2},[e.$slots.prefix?{name:"prefix",fn:P(()=>[D("div",pt,[ve(e.$slots,"prefix")])])}:void 0]),1032,["id","modelValue","placeholder","name","autocomplete","size","disabled","readonly","class","tabindex","onFocus","onBlur","onInput","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onKeydown"])],32)]),content:P(()=>[re(w,null,{default:P(()=>[Se(re(O,{ref:"scrollbar",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:T([e.nsSelect.is("empty",!e.allowCreate&&!!e.query&&e.filteredOptionsCount===0)])},{default:P(()=>[e.showNewOption?(C(),q(h,{key:0,value:e.query,created:!0},null,8,["value"])):j("v-if",!0),re(u,{onUpdateOptions:e.onOptionsRendered},{default:P(()=>[ve(e.$slots,"default")]),_:3},8,["onUpdateOptions"])]),_:3},8,["wrap-class","view-class","class"]),[[Ke,e.options.size>0&&!e.loading]]),e.emptyText&&(!e.allowCreate||e.loading||e.allowCreate&&e.options.size===0)?(C(),B(ze,{key:0},[e.$slots.empty?ve(e.$slots,"empty",{key:0}):(C(),B("p",{key:1,class:T(e.nsSelect.be("dropdown","empty"))},se(e.emptyText),3))],64)):j("v-if",!0)]),_:3})]),_:3},8,["visible","placement","teleported","popper-class","popper-options","effect","transition","persistent","onShow"])],34)),[[M,e.handleClose,e.popperPaneRef]])}var mt=me(dt,[["render",vt],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);const ht=x({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:{type:Boolean,default:!1}},setup(e){const l=de("select"),o=I(!0),s=El(),v=I([]);wl(Xl,$e({...Tl(e)}));const c=ke(je);Fe(()=>{v.value=a(s.subTree)});const a=r=>{const S=[];return Array.isArray(r.children)&&r.children.forEach(h=>{var u;h.type&&h.type.name==="ElOption"&&h.component&&h.component.proxy?S.push(h.component.proxy):(u=h.children)!=null&&u.length&&S.push(...a(h))}),S},{groupQueryChange:f}=qe(c);return K(f,()=>{o.value=v.value.some(r=>r.visible===!0)},{flush:"post"}),{visible:o,ns:l}}});function bt(e,l,o,s,v,c){return Se((C(),B("ul",{class:T(e.ns.be("group","wrap"))},[D("li",{class:T(e.ns.be("group","title"))},se(e.label),3),D("li",null,[D("ul",{class:T(e.ns.b("group"))},[ve(e.$slots,"default")],2)])],2)),[[Ke,e.visible]])}var Yl=me(ht,[["render",bt],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);const Et=Fl(mt,{Option:Il,OptionGroup:Yl}),Tt=Ql(Il);Ql(Yl);export{Tt as E,Et as a,_n as b};
