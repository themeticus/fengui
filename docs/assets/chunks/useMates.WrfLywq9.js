import{J as c,h as g,K as l}from"./components.u6JCWBCK.js";import{aj as m,s as u}from"./framework.TCUxwrzd.js";function k(e){e||(e=c.pub);const s=m({}),n=g();return n.user(e).get("mates").map().once((t,o)=>{if(t){const a={emoji:i(t),text:t};s[o]=a,n.user(o).get("mates").get(e).on(r=>{r?s[o].back=i(r):delete s[o].back})}else delete s[o]}),s}function i(e,s="👋"){if(!e||typeof e!="string")return"";let n=l.break(e)[0];return p(n)?n:s}function p(e){return new RegExp("\\p{Extended_Pictographic}","u").test(e)}function E(e){var a,r;const s=u("👋"),n=u(!1),t=(r=(a=c)==null?void 0:a.db)==null?void 0:r.get("mates").get(e);t==null||t.on(f=>{n.value=i(f)});function o(){t==null||t.put(n.value?!1:i(s.value))}return{emoji:s,isMate:n,toggleMate:o}}export{k as a,i as g,p as i,E as u};
