import{s as f,X as R,d as T,h as F,aO as V,aP as D,o as l,c as p,j as e,t as v,k as n,a2 as I,I as $,w as H,e as h,T as N,b as U,F as P,E as Q,v as G}from"./framework.TCUxwrzd.js";import"./theme.CmUgV4yx.js";import{G as O,a6 as j,U as q,h as A,a as M}from"./components.u6JCWBCK.js";import{p as X}from"./index.BuUnCgYx.js";function z(w){const m=f();return R(()=>import("./webtorrent.min.BhVmPWDQ.js"),[]).then(b=>{new b.default().seed(w,function(i){console.log("Client is seeding "+i.magnetURI),m.value=i})}),{torrent:m}}const J={class:"flex flex-col gap-4 p-4 break-all"},K={key:0,class:"p-2 flex flex-wrap gap-2 bg-light-100 dark-bg-dark-400 rounded cursor-pointer items-center"},W=e("div",{class:"font-bold"},"Share a file",-1),Y=e("div",{class:"font-bold"},"Sharing a file:",-1),Z={class:"text-md max-w-55ch"},ee={class:"flex-1 font-mono text-xs min-w-10"},se={class:"p-0"},te={class:"flex flex-wrap gap-2 p-4 items-start"},ae={key:0,class:"flex flex-col gap-2"},oe=e("div",{class:"text-xl"},"Sharing the torrent",-1),le={class:"font-mono text-sm"},ne=["href"],ie=e("div",{class:"i-la-link"},null,-1),re=e("div",{class:"p-0"},"Download URL",-1),de=[ie,re],ue=e("div",{class:"i-la-copy"},null,-1),ce={class:"p-0"},pe=e("div",{class:"i-la-share"},null,-1),ve=e("div",{class:"p-0"}," Share",-1),fe=[pe,ve],_e=e("div",{class:"i-la-qrcode"},null,-1),he={class:"p-0"},me=e("div",{class:"i-la-file"},null,-1),ge={class:"p-0"},ye=T({__name:"TorrentUpload",emits:["uploaded"],setup(w,{emit:m}){const b=m,t=f();f();const i=f(!1),g=f(!1),k=f(!1);function B(a){var r;const{torrent:s}=z((r=a==null?void 0:a.target)==null?void 0:r.files);A();const{user:u}=M();G(s,async c=>{t.value=c,i.value=!0;const o={infoHash:c.infoHash,length:c.length,name:c.name,author:u.pub};b("uploaded",o)})}const _=F(()=>{var s,u,r;if(!((s=t.value)!=null&&s.infoHash))return"";let a=new URL((u=window==null?void 0:window.location)==null?void 0:u.href);return`${a.protocol}//${a.hostname}${a.port?`:${a.port}`:""}/#/files/${(r=t.value)==null?void 0:r.infoHash}`}),x=V({source:_}),{share:E,isSupported:L}=D();return(a,s)=>{var u,r,c;return l(),p("div",J,[t.value?(l(),p("div",{key:1,class:"p-2 flex flex-wrap gap-2 bg-light-100 dark-bg-dark-400 rounded cursor-pointer items-center break-all",onClick:s[2]||(s[2]=o=>i.value=!i.value)},[Y,e("div",Z,v((u=t.value)==null?void 0:u.name),1),e("div",ee,v((r=t.value)==null?void 0:r.infoHash),1),e("div",se,v(n(X)((c=t.value)==null?void 0:c.length)),1),e("div",{class:"i-la-times",onClick:s[1]||(s[1]=I(o=>t.value=null,["prevent","stop"]))})])):(l(),p("label",K,[W,e("input",{class:"max-w-30",type:"file",accept:"image/*",onChange:s[0]||(s[0]=o=>B(o))},null,32)])),$(n(q),{open:i.value,onClose:s[7]||(s[7]=o=>i.value=!1)},{default:H(()=>{var o,y,C;return[e("div",te,[t.value?(l(),p("div",ae,[oe,e("div",le,v((o=t.value)==null?void 0:o.infoHash),1),e("a",{class:"gap-2 button underline font-bold break-all",href:_.value,target:"_blank"},de,8,ne),n(x).isSupported.value?(l(),p("button",{key:0,class:"p-2 button gap-2",onClick:s[3]||(s[3]=d=>n(x).copy())},[ue,e("div",ce,v((y=n(x))!=null&&y.copied.value?"Copied!":"Copy"),1)])):h("",!0),n(L)?(l(),p("button",{key:1,class:"p-2 button gap-2",onClick:s[4]||(s[4]=d=>{var S;return n(E)({title:(S=t.value)==null?void 0:S.name,url:_.value})})},fe)):h("",!0),e("button",{class:"button p-2 gap-2",onClick:s[5]||(s[5]=d=>g.value=!g.value)},[_e,e("div",he,v(g.value?"Hide":"Show")+" QR ",1)]),e("button",{class:"button p-2 gap-2",onClick:s[6]||(s[6]=d=>k.value=!k.value)},[me,e("div",ge,v(k.value?"Hide":"Show")+" file ",1)])])):h("",!0),$(N,{name:"fade"},{default:H(()=>[_.value&&g.value?(l(),U(n(O),{key:0,data:_.value},null,8,["data"])):h("",!0)]),_:1}),k.value?(l(!0),p(P,{key:1},Q((C=t.value)==null?void 0:C.files,d=>(l(),U(n(j),{class:"flex-auto",key:d==null?void 0:d.name,file:d},null,8,["file"]))),128)):h("",!0)])]}),_:1},8,["open"])])}}});export{ye as default};
