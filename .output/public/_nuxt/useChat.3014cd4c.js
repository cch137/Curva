import{B as F,aI as L,G as B,H as U,L as W,o as G,c as j,w as q,R as Q,j as X,u as $,a8 as K,U as V,V as Z,r as h,bH as J,N as x,aw as Y,a as tt,av as y,bD as et,bE as nt}from"./entry.96412067.js";import{b as st}from"./el-button.63b6d215.js";const ot=F({type:{type:String,values:["primary","success","info","warning","danger",""],default:""},size:{type:String,values:L,default:""},truncated:{type:Boolean},tag:{type:String,default:"span"}}),rt=B({name:"ElText"}),ct=B({...rt,props:ot,setup(t){const e=t,n=st(),c=U("text"),r=W(()=>[c.b(),c.m(e.type),c.m(n.value),c.is("truncated",e.truncated)]);return(s,a)=>(G(),j(K(s.tag),{class:X($(r))},{default:q(()=>[Q(s.$slots,"default")]),_:3},8,["class"]))}});var at=V(ct,[["__file","/home/runner/work/element-plus/element-plus/packages/components/text/src/text.vue"]]);const vt=Z(at);function it(){setTimeout(()=>{window.scrollTo(0,document.body.scrollHeight)})}const A="web-browsing",lt="temperature-suffix",v=t=>(t==null?void 0:t.toString)===void 0?"":t.toString(),ut=t=>v(t).toLowerCase(),b="01",H="0123456789",I="0123456789abcdef",k="0123456789abcdefghijklmnopqrstuvwxyz",R="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",D="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",S=t=>{switch(typeof t!="string"&&(t=ut(t)),t){case"2":return b;case"10":return H;case"16":return I;case"36":return k;case"62":return R;case"64":return u;case"64w":case"64+":return D;default:return t}},pt=(t,e,n,c=0)=>{typeof t!="string"&&(t=v(t));let r=0;if(+e==10)r=+Number(t);else if(+e<37)r=parseInt(t,+e);else{e=S(e);const a=e.length;for(let o=0;o<t.length;o++)r+=e.indexOf(t[o])*Math.pow(a,t.length-1-o)}let s="";if(+n<37&&(s=r.toString(+n),c<=1))return s;if(n=S(n),s===""){const a=n.length;for(;r>0;)s=n.charAt(r%a)+s,r=Math.floor(r/a)}return(s===""?n.charAt(0):s).padStart(c,n[0])},ht=t=>{const e=t.split("").map(s=>s.charCodeAt(0)),n=[];let c=0;for(;c<e.length;){const[s,a=0,o=0]=e.slice(c,c+=3),i=(s<<16)+(a<<8)+o,p=i>>18,d=i>>12&63,f=i>>6&63,O=i&63;n.push(u[p],u[d],u[f],u[O])}const r=e.length%3;return n.join("").slice(0,1+n.length-r)+(r===2?"==":r===1?"=":"")},ft=/[^A-Za-z0-9+/]/g,M=t=>t.replace(ft,""),g=t=>String.fromCharCode(+t),dt=t=>{const e=M(t).split(""),n=[];let c=0;for(;c<e.length;){const[r,s,a,o]=e.slice(c,c+=4).map(i=>u.indexOf(i));n.push(g(r<<2|s>>4)),a!==64&&n.push(g((s&15)<<4|a>>2)),o!==64&&n.push(g((a&3)<<6|o))}return n.join("").replaceAll("\0","")},gt={BASE2_CHARSET:b,BASE10_CHARSET:H,BASE16_CHARSET:I,BASE36_CHARSET:k,BASE62_CHARSET:R,BASE64_CHARSET:u,BASE64WEB_CHARSET:D,convert:pt,getCharset:S,secureBase64:M,textToBase64:ht,base64ToText:dt},P=2048,l=[],z=()=>{for(;l.length>1&&l.slice(1,l.length).join("").length>P;)l.shift()},mt=()=>{z();const t=[...l].reverse().join(`
---
`);return t.length===0?"":`Here are your replies, from newest to oldest:
${t}`.substring(0,P)},St=(...t)=>{l.push(...t),z()},wt=()=>{l.splice(0,l.length)},Tt=["OFF","BASIC"],Et="BASIC",m=h(Et),w=h([]),T=h([]),E={add:St,get:mt,clear:wt},xt=h(""),At=()=>{document.querySelector(".InputBox textarea").focus()},N=()=>new Promise((t,e)=>{$fetch("/api/token/check",{method:"POST"}).then(n=>{const{list:c,named:r}=n;T.value=c.sort().map(s=>({id:s,name:r[s]})),t(!0)}).catch(n=>{y.error("Initialization Failed"),e(n)})}),Ct=t=>new Promise((e,n)=>{const c=gt.convert(t,"64w",10);if(xt.value=c,t==null)return E.clear(),e(!0);$fetch("/api/history",{method:"POST",body:{id:t}}).then(r=>{const s=r;s.length===0&&nt("/");const a=[];E.add(...s.map(o=>{const{Q:i,A:p,t:d}=o,f=new Date(d);return a.push({type:"Q",text:i,t:f},{type:"A",text:p,t:f}),p})),w.value.unshift(...a),e(!0)}).catch(r=>{y.error("There was an error loading the conversation."),n(r)})}),C=t=>{const e=et.service();Promise.all([t===null?null:N(),Ct(t)]).finally(()=>{it(),setTimeout(()=>{e.close()},500)})},_t="_05",_=h(_t);function bt(){const t=J(),e=t.get(A);Tt.includes(e)&&(m.value=e),x(m,o=>{typeof o=="string"&&t.set(A,o,{path:"/"})}),x(_,o=>{t.set(lt,o,{path:"/"})});const n=Y(),c=()=>{var o,i;return(i=(o=n._route)==null?void 0:o.params)==null?void 0:i.conv},r=()=>{const o=c();return T.value.filter(i=>i.id===o)[0].name||""},s=tt("openDrawer",()=>!1);return{conversations:T,messages:w,context:E,webBrowsingMode:m,temperatureSuffix:_,getCurrentConvId:c,getCurrentConvName:r,checkTokenAndGetConversations:N,initPage:C,goToChat:(o,i=!1)=>{const p=c();(i||p!==o||o===null)&&(w.value=[],C(o)),s.value=!1,At()}}}export{vt as E,it as a,gt as b,v as s,bt as u};