import{_ as S,r as a,o as l,c as n,b as e,j as O,v as A,k as m,p as W,i as I,d as i,e as s,w,u as r,a as P,g as b,f as y,h as x}from"./app.55c00825.js";const c=u=>(W("data-v-03760881"),u=u(),I(),u),D={class:"newsletter"},V={key:0,method:"get",class:"email_form",id:"email_form"},N={key:0},L={key:1,class:"tip custom-block info_message"},R=c(()=>e("p",{class:"custom-block-title"},"Info",-1)),$=c(()=>e("p",null,[i("We got your Email! What can be the next step? Join us on "),e("a",{href:"https://www.linkedin.com/showcase/dialogware/"},"linkedin")],-1)),G=[R,$],M={key:2,class:"warning custom-block warning_message"},j=c(()=>e("p",{class:"custom-block-title"},"Error",-1)),z=c(()=>e("p",null,"Please fill the fields with min. 6 characters",-1)),C=[j,z],B={key:3,class:"warning custom-block error_message"},q=c(()=>e("p",{class:"custom-block-title"},"Error",-1)),H=c(()=>e("p",null,[i("Sending message is not possible, contact me please on "),e("a",{href:"https://www.linkedin.com/in/tom-sapletta-com"},"linkedin")],-1)),J=[q,H],U={__name:"Newsletter",setup(u){const d=a(""),o=a(""),g=a(""),h=a(""),p=a(!1),_=a(!1),v=a(!1),f=a(!0);function E(){if(h.value="DIALOGWARE-ian",d.value="Thank You  for a registration on DIALOGWARE NEWSLETTER.",_.value=!1,p.value=!1,h.value.length<2||o.value.length<4||d.value.length<4)p.value=!0;else{p.value=!1;var k=`https://email.dialogware.com/?type=NEWSLETTER&name=${h.value}&message=${d.value}&email=${o.value}`;fetch(k,{method:"get"}).then(t=>t.json()).then(t=>{o.value=t.email,g.value=t.text,h.value=t.name,t.found>5?_.value=!0:(_.value=!1,p.value=!1,f.value=!1,v.value=!0)})}}return(k,t)=>(l(),n("div",D,[f.value?(l(),n("form",V,[e("div",null,[e("fieldset",null,[O(e("input",{"onUpdate:modelValue":t[0]||(t[0]=T=>o.value=T),placeholder:"@"},null,512),[[A,o.value]])])]),f.value?(l(),n("div",N,[e("fieldset",{class:"button_send"},[e("button",{onClick:E},"Subscribe")])])):m("",!0)])):m("",!0),v.value?(l(),n("div",L,G)):m("",!0),p.value?(l(),n("div",M,C)):m("",!0),_.value?(l(),n("div",B,J)):m("",!0)]))}},Y=S(U,[["__scopeId","data-v-03760881"]]),F=P("",11),K=e("h2",{id:"our-story",tabindex:"-1"},[i("Our Story "),e("a",{class:"header-anchor",href:"#our-story","aria-hidden":"true"},"#")],-1),Q=e("p",null,"We started in 2019 as Software House with an idea to build developer tools. During the Years we have created modularized tools for frontend and backend development. Today we want to bring the software development to the next level.",-1),X=e("p",null,"Our goal is building software in minutes with humanless software development systems.",-1),Z=e("h2",{id:"our-team",tabindex:"-1"},[i("Our Team "),e("a",{class:"header-anchor",href:"#our-team","aria-hidden":"true"},"#")],-1),ee=e("p",null,"The development of DIALOGWARE is guided by an international team, some of whom have chosen to be featured below.",-1),te=e("h2",{id:"our-partners",tabindex:"-1"},[i("Our Partners "),e("a",{class:"header-anchor",href:"#our-partners","aria-hidden":"true"},"#")],-1),ae=e("p",null,"Organization they support our project",-1),oe=e("h2",{id:"our-hashtags",tabindex:"-1"},[i("Our Hashtags "),e("a",{class:"header-anchor",href:"#our-hashtags","aria-hidden":"true"},"#")],-1),se=e("ul",null,[e("li",null,"text2software"),e("li",null,"text2app"),e("li",null,"text2srs"),e("li",null,"text2api"),e("li",null,"domain-specific language")],-1),re=JSON.parse('{"title":"DIALOGWARE is a text2software platform, build any app MVP in minutes","description":"","frontmatter":{"layout":"docs","title":"DIALOGWARE is a text2software platform, build any app MVP in minutes","lang":"en-US"},"headers":[{"level":2,"title":"NEWSLETTER","slug":"newsletter","link":"#newsletter","children":[]},{"level":2,"title":"Our Story","slug":"our-story","link":"#our-story","children":[]},{"level":2,"title":"Our Team","slug":"our-team","link":"#our-team","children":[]},{"level":2,"title":"Our Partners","slug":"our-partners","link":"#our-partners","children":[]},{"level":2,"title":"Our Hashtags","slug":"our-hashtags","link":"#our-hashtags","children":[]}],"relativePath":"index.md"}'),le={name:"index.md"},ie=Object.assign(le,{setup(u){const d=[{avatar:"https://avatars.githubusercontent.com/u/5669657?s=96&v=4",name:"Tom Sapletta",title:"Creator",links:[{icon:"linkedin",link:"https://www.linkedin.com/in/tom-sapletta-com"}]},{avatar:"https://logo.dialogware.com/dialogware-logo-pivot.png",name:"Join us!",title:"Software Developer",links:[{icon:"linkedin",link:"https://www.linkedin.com/showcase/dialogware/"}]}],o=[{avatar:"/img/ionos.png",name:"Ionos",title:"Service provider",links:[{icon:"linkedin",link:"https://www.ionos.de"}]},{avatar:"https://softreck.pl/wp-content/uploads/2020/10/softreck-logo-kwadrat-biale-tlo-1024x1024.png",name:"softreck.com",title:"DevOps",links:[{icon:"linkedin",link:"https://softreck.pl"}]}];return(g,h)=>(l(),n("div",null,[F,s(Y),K,Q,X,Z,ee,s(r(x),null,{default:w(()=>[s(r(b),null,{members:w(()=>[s(r(y),{size:"small",members:d})]),_:1})]),_:1}),te,ae,s(r(x),null,{default:w(()=>[s(r(b),null,{members:w(()=>[s(r(y),{size:"small",members:o})]),_:1})]),_:1}),oe,se]))}});export{re as __pageData,ie as default};
