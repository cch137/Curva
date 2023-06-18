import{E as b}from"./el-input.1544486f.js";import{E as V,a as k,_ as L}from"./el-form.b43ca5c3.js";import{E as I}from"./el-button.89f4a0c5.js";import{E as N}from"./el-text.02decdaa.js";import{_ as B}from"./nuxt-link.ec247449.js";import{E as C}from"./el-link.9ab2a5f6.js";import{_ as F}from"./client-only.497685b8.js";import{j as q,a1 as z,r as A,Q as f,M as R,o as T,c as M,y as t,C as e,t as s,B as p,u as o,O as m,a2 as S,T as W,a3 as U}from"./entry.cbeed785.js";import{u as j}from"./useAuth.48430fce.js";import{u as D}from"./useTitle.e6c786a3.js";import"./isEqual.4fb46b28.js";import"./el-select.a208ceb0.js";import"./el-popper.4bea26b6.js";import"./focus-trap.4dd40eca.js";import"./useChat.6908b388.js";const P={class:"mt-0 mb-6"},Q=s("div",{class:"p-6"},null,-1),G={class:"flex-center"},H=s("div",{class:"p-2"},null,-1),J={class:"flex-center flex-col gap-1"},K={class:"flex-center gap-1"},X=s("div",{class:"p-8"},null,-1),Y={class:"absolute w-screen flex-center gap-2 p-3",style:{bottom:"0"}},Z={style:{width:"120px"}},he=q({__name:"login",setup(ee){const{login:g}=j(),i=z().t,_=A(),n=f({usernameOrEmail:"",password:""}),h=f({usernameOrEmail:[{required:!0,message:i("auth.usernameOrEmailRequired"),trigger:"change"}],password:[{required:!0,message:i("auth.passwdRequired"),trigger:"change"}]}),x=async a=>{await a.validate((l,u)=>{l?g(n.usernameOrEmail,n.password):S.error(i("auth.formIncomplete"))})};return D(`${i("auth.login")} - ${R("appName").value}`),(a,l)=>{const u=b,c=V,y=I,d=N,E=B,w=C,v=k,O=L,$=F;return T(),M($,null,{default:t(()=>[e(v,{ref_key:"ruleFormRef",ref:_,model:o(n),rules:o(h),"label-position":"top",class:"flex-col flex-center w-full max-w-xs px-4 m-auto",style:{height:"calc(100vh - 56px)"}},{default:t(()=>[s("h1",P,p(a.$t("auth.login")),1),e(c,{label:a.$t("auth.usernameOrEmail"),prop:"usernameOrEmail",class:"inputWrapper LoginInputAnim1"},{default:t(()=>[e(u,{modelValue:o(n).usernameOrEmail,"onUpdate:modelValue":l[0]||(l[0]=r=>o(n).usernameOrEmail=r),type:"text",size:"large","prefix-icon":o(W)},null,8,["modelValue","prefix-icon"])]),_:1},8,["label"]),e(c,{label:a.$t("auth.passwd"),prop:"password",class:"inputWrapper LoginInputAnim2 LoginPasswordInputWrapper"},{default:t(()=>[e(u,{modelValue:o(n).password,"onUpdate:modelValue":l[1]||(l[1]=r=>o(n).password=r),type:"password",size:"large","prefix-icon":o(U),formatter:r=>r.trim(),parser:r=>r.trim(),"show-password":""},null,8,["modelValue","prefix-icon","formatter","parser"])]),_:1},8,["label"]),Q,s("div",G,[e(y,{size:"large",type:"primary",onClick:l[2]||(l[2]=r=>x(o(_)))},{default:t(()=>[m(p(a.$t("auth.login")),1)]),_:1})]),H,s("div",J,[s("div",K,[e(d,{type:"info"},{default:t(()=>[m(p(a.$t("auth.createNewAcc")),1)]),_:1}),e(w,{type:"primary"},{default:t(()=>[e(E,{to:"/signup"},{default:t(()=>[m(p(a.$t("auth.signup")),1)]),_:1})]),_:1})])]),X]),_:1},8,["model","rules"]),s("div",Y,[e(d,{type:"info",class:"opacity-75"},{default:t(()=>[m("More languages:")]),_:1}),s("span",Z,[e(O,{size:"small"})])])]),_:1})}}});export{he as default};