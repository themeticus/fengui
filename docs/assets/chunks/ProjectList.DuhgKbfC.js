import{h as d,o as l,c as n,j as o,aC as m,aD as v,I as p,w as f,F as h,E as _,b as r,k as x,P as k,aM as y,e as g}from"./framework.TCUxwrzd.js";import{j as C,P as w}from"./components.u6JCWBCK.js";import{u as P}from"./useProjects.BKNCO_-k.js";import"./theme.CmUgV4yx.js";import B from"./ProjectForm.CcgLxAjb.js";import"./useProject.BRAcEuYN.js";const V={class:"flex flex-col"},$={class:"p-2 flex flex-col gap-2"},b={class:"flex flex-wrap gap-4 p-2"},N={class:"p-2 flex flex-col gap-2"},A={__name:"ProjectList",emits:["open"],setup(D){const t=d(()=>{var a;return P((a=C)==null?void 0:a.pub)});return(a,s)=>(l(),n("div",V,[o("div",$,[m(o("input",{class:"p-2 rounded-xl shadow dark-bg-dark-400","onUpdate:modelValue":s[0]||(s[0]=e=>t.value.search.value=e),placeholder:"Start typing a project title"},null,512),[[v,t.value.search.value]])]),o("div",b,[p(y,{name:"list"},{default:f(()=>[(l(!0),n(h,null,_(t.value.candidates.value,(e,u)=>{var c;return l(),r(x(w),{key:u,project:e==null?void 0:e.item,path:(c=e==null?void 0:e.item)==null?void 0:c.path,style:k({opacity:1-(e==null?void 0:e.score)}),onClick:E=>{var i;return a.$emit("open",(i=e==null?void 0:e.item)==null?void 0:i.path)}},null,8,["project","path","style","onClick"])}),128))]),_:1})]),o("div",N,[t.value.search.value?(l(),r(B,{key:0,title:t.value.search.value,onAdded:s[1]||(s[1]=e=>t.value.search.value="")},null,8,["title"])):g("",!0)])]))}};export{A as default};
