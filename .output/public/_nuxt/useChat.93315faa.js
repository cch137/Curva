import{B as O,aI as P,G as E,H as F,L,o as W,c as G,w as U,R as j,j as q,u as Q,a8 as V,U as X,V as K,r as d,bD as Z,N as $,aw as J,a as Y,av as B,bz as tt,bA as et}from"./entry.7dae1efa.js";import{b as nt}from"./el-button.04fc5030.js";const st=O({type:{type:String,values:["primary","success","info","warning","danger",""],default:""},size:{type:String,values:P,default:""},truncated:{type:Boolean},tag:{type:String,default:"span"}}),ot=E({name:"ElText"}),rt=E({...ot,props:st,setup(t){const e=t,n=nt(),c=F("text"),s=L(()=>[c.b(),c.m(e.type),c.m(n.value),c.is("truncated",e.truncated)]);return(o,r)=>(W(),G(V(o.tag),{class:q(Q(s))},{default:U(()=>[j(o.$slots,"default")]),_:3},8,["class"]))}});var ct=X(rt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/text/src/text.vue"]]);const Ct=K(ct);function at(){setTimeout(()=>{window.scrollTo(0,document.body.scrollHeight)})}const T="web-browsing",C=t=>(t==null?void 0:t.toString)===void 0?"":t.toString(),it=t=>C(t).toLowerCase(),_="01",y="0123456789",b="0123456789abcdef",v="0123456789abcdefghijklmnopqrstuvwxyz",k="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",H="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",w=t=>{switch(typeof t!="string"&&(t=it(t)),t){case"2":return _;case"10":return y;case"16":return b;case"36":return v;case"62":return k;case"64":return u;case"64w":case"64+":return H;default:return t}},lt=(t,e,n,c=0)=>{typeof t!="string"&&(t=C(t));let s=0;if(+e==10)s=+Number(t);else if(+e<37)s=parseInt(t,+e);else{e=w(e);const r=e.length;for(let a=0;a<t.length;a++)s+=e.indexOf(t[a])*Math.pow(r,t.length-1-a)}let o="";if(+n<37&&(o=s.toString(+n),c<=1))return o;if(n=w(n),o===""){const r=n.length;for(;s>0;)o=n.charAt(s%r)+o,s=Math.floor(s/r)}return(o===""?n.charAt(0):o).padStart(c,n[0])},ut=t=>{const e=t.split("").map(o=>o.charCodeAt(0)),n=[];let c=0;for(;c<e.length;){const[o,r=0,a=0]=e.slice(c,c+=3),i=(o<<16)+(r<<8)+a,p=i>>18,g=i>>12&63,h=i>>6&63,N=i&63;n.push(u[p],u[g],u[h],u[N])}const s=e.length%3;return n.join("").slice(0,1+n.length-s)+(s===2?"==":s===1?"=":"")},pt=/[^A-Za-z0-9+/]/g,I=t=>t.replace(pt,""),f=t=>String.fromCharCode(+t),ht=t=>{const e=I(t).split(""),n=[];let c=0;for(;c<e.length;){const[s,o,r,a]=e.slice(c,c+=4).map(i=>u.indexOf(i));n.push(f(s<<2|o>>4)),r!==64&&n.push(f((o&15)<<4|r>>2)),a!==64&&n.push(f((r&3)<<6|a))}return n.join("").replaceAll("\0","")},dt={BASE2_CHARSET:_,BASE10_CHARSET:y,BASE16_CHARSET:b,BASE36_CHARSET:v,BASE62_CHARSET:k,BASE64_CHARSET:u,BASE64WEB_CHARSET:H,convert:lt,getCharset:w,secureBase64:I,textToBase64:ut,base64ToText:ht},D=2048,l=[],R=()=>{for(;l.length>1&&l.slice(1,l.length).join("").length>D;)l.shift()},gt=()=>{R();const t=[...l].reverse().join(`
---
`);return t.length===0?"":`Here are your replies, from newest to oldest:
${t}`.substring(0,D)},ft=(...t)=>{l.push(...t),R()},mt=()=>{l.splice(0,l.length)},wt=["OFF","BASIC","ADVANCED"],St="BASIC",m=d(St),S=d([]),z=d([]),A={add:ft,get:gt,clear:mt},At=d(""),Tt=()=>{document.querySelector(".InputBox textarea").focus()},M=()=>new Promise((t,e)=>{$fetch("/api/token/check",{method:"POST"}).then(n=>{const{list:c,named:s}=n;z.value=c.sort().map(o=>({id:o,name:s[o]})),t(!0)}).catch(n=>{B.error("Initialization Failed"),e(n)})}),xt=t=>new Promise((e,n)=>{const c=dt.convert(t,"64w",10);if(At.value=c,t==null)return A.clear(),e(!0);$fetch("/api/history",{method:"POST",body:{id:t}}).then(s=>{const o=s;o.length===0&&et("/");const r=[];A.add(...o.map(a=>{const{Q:i,A:p,t:g}=a,h=new Date(g);return r.push({type:"Q",text:i,t:h},{type:"A",text:p,t:h}),p})),S.value.unshift(...r),e(!0)}).catch(s=>{B.error("There was an error loading the conversation."),n(s)})}),x=t=>{const e=tt.service();Promise.all([t===null?null:M(),xt(t)]).finally(()=>{at(),setTimeout(()=>{e.close()},500)})};function _t(){const t=Z(),e=t.get(T);wt.includes(e)&&(m.value=e),$(m,r=>{typeof r=="string"&&t.set(T,r,{path:"/"})});const n=J(),c=()=>{var r,a;return(a=(r=n._route)==null?void 0:r.params)==null?void 0:a.conv},s=Y("openDrawer",()=>!1);return{conversations:z,messages:S,context:A,webBrowsingMode:m,getCurrentConvId:c,checkTokenAndGetConversations:M,initPage:x,goToChat:(r,a=!1)=>{const i=c();(a||i!==r||r===null)&&(S.value=[],x(r)),s.value=!1,Tt()}}}export{Ct as E,at as a,dt as b,C as s,_t as u};
