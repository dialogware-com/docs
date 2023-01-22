import{_ as A,r,o as n,c as s,b as e,j as P,v as O,k as w,p as I,i as E,d as g,e as o,w as f,u as l,a as D,g as v,f as y,h as x}from"./app.0de8b606.js";const i=d=>(I("data-v-df0ef695"),d=d(),E(),d),R={class:"newsletter"},L={key:0,method:"get",class:"email_form",id:"email_form",action:"#",onsubmit:"return false;"},W={key:0},G={key:1,class:"tip custom-block info_message"},M=i(()=>e("p",{class:"custom-block-title"},"Info",-1)),V=i(()=>e("p",null,[g("We got your Email! What can be the next step? Join us on "),e("a",{href:"https://www.linkedin.com/showcase/dialogware/"},"linkedin")],-1)),C=[M,V],N={key:2,class:"warning custom-block warning_message"},j=i(()=>e("p",{class:"custom-block-title"},"Error",-1)),B=i(()=>e("p",null,"Please fill the fields with min. 6 characters",-1)),$=[j,B],F={key:3,class:"warning custom-block error_message"},q=i(()=>e("p",{class:"custom-block-title"},"Error",-1)),z=i(()=>e("p",null,[g("Sending message is not possible, contact me please on "),e("a",{href:"https://www.linkedin.com/in/tom-sapletta-com"},"linkedin")],-1)),H=[q,z],J={__name:"Newsletter",setup(d){const h=r(""),a=r(""),_=r(""),c=r(""),p=r(!1),u=r(!1),b=r(!1),m=r(!0);function S(){if(c.value="DIALOGWARE-ian",h.value="Thank You  for a registration on DIALOGWARE NEWSLETTER.",u.value=!1,p.value=!1,c.value.length<2||a.value.length<4||h.value.length<4)p.value=!0;else{p.value=!1;var k=`https://email.dialogware.com/?type=NEWSLETTER&name=${c.value}&message=${h.value}&email=${a.value}`;fetch(k,{method:"get"}).then(t=>t.json()).then(t=>{a.value=t.email,_.value=t.text,c.value=t.name,t.found>5?u.value=!0:(u.value=!1,p.value=!1,m.value=!1,b.value=!0)})}}return(k,t)=>(n(),s("div",R,[m.value?(n(),s("form",L,[e("div",null,[e("fieldset",null,[P(e("input",{"onUpdate:modelValue":t[0]||(t[0]=T=>a.value=T),placeholder:"@"},null,512),[[O,a.value]])])]),m.value?(n(),s("div",W,[e("fieldset",{class:"button_send"},[e("button",{onClick:S},"Subscribe")])])):w("",!0)])):w("",!0),b.value?(n(),s("div",G,C)):w("",!0),p.value?(n(),s("div",N,$)):w("",!0),u.value?(n(),s("div",F,H)):w("",!0)]))}},U=A(J,[["__scopeId","data-v-df0ef695"]]);const Y=D("",34),K=e("h2",{id:"our-story",tabindex:"-1"},[g("Our Story "),e("a",{class:"header-anchor",href:"#our-story","aria-hidden":"true"},"#")],-1),Q=e("p",null,"We started in 2019 as Software House with an idea to build developer tools. During the Years we have created modularized tools for frontend and backend development. Today we want to bring the software development to the next level.",-1),X=e("p",null,"Our goal is building software in minutes with humanless software development systems.",-1),Z=e("h2",{id:"our-team",tabindex:"-1"},[g("Our Team "),e("a",{class:"header-anchor",href:"#our-team","aria-hidden":"true"},"#")],-1),ee=e("p",null,"The development of DIALOGWARE is guided by an international team, some of whom have chosen to be featured below.",-1),te=e("h2",{id:"our-partners",tabindex:"-1"},[g("Our Partners "),e("a",{class:"header-anchor",href:"#our-partners","aria-hidden":"true"},"#")],-1),re=e("p",null,"Organization they support our project",-1),ae=D("",4),se=JSON.parse(`{"title":"DIALOGWARE is a text2software platform, build any app MVP in minutes","description":"","frontmatter":{"layout":"docs","title":"DIALOGWARE is a text2software platform, build any app MVP in minutes","lang":"en-US"},"headers":[{"level":2,"title":"Build any software in minutes with these simple steps","slug":"build-any-software-in-minutes-with-these-simple-steps","link":"#build-any-software-in-minutes-with-these-simple-steps","children":[]},{"level":2,"title":"How it work's?","slug":"how-it-work-s","link":"#how-it-work-s","children":[]},{"level":2,"title":"Benefits?","slug":"benefits","link":"#benefits","children":[]},{"level":2,"title":"Try it!","slug":"try-it","link":"#try-it","children":[]},{"level":2,"title":"Why DIALOGWARE?","slug":"why-dialogware","link":"#why-dialogware","children":[{"level":3,"title":"Video presentation","slug":"video-presentation","link":"#video-presentation","children":[]}]},{"level":2,"title":"Dialogware ecosystem","slug":"dialogware-ecosystem","link":"#dialogware-ecosystem","children":[{"level":3,"title":"SaaS Services","slug":"saas-services","link":"#saas-services","children":[]},{"level":3,"title":"Libraries","slug":"libraries","link":"#libraries","children":[]},{"level":3,"title":"API Gateway","slug":"api-gateway","link":"#api-gateway","children":[]},{"level":3,"title":"Others","slug":"others","link":"#others","children":[]},{"level":3,"title":"Text To * <- Software, Documentation, Code Generators","slug":"text-to-software-documentation-code-generators","link":"#text-to-software-documentation-code-generators","children":[]}]},{"level":2,"title":"NEWSLETTER","slug":"newsletter","link":"#newsletter","children":[]},{"level":2,"title":"Our Story","slug":"our-story","link":"#our-story","children":[]},{"level":2,"title":"Our Team","slug":"our-team","link":"#our-team","children":[]},{"level":2,"title":"Our Partners","slug":"our-partners","link":"#our-partners","children":[]},{"level":2,"title":"Hashtags","slug":"hashtags","link":"#hashtags","children":[]},{"level":2,"title":"Privacy","slug":"privacy","link":"#privacy","children":[]}],"relativePath":"index.md"}`),oe={name:"index.md"},le=Object.assign(oe,{setup(d){const h=[{avatar:"https://avatars.githubusercontent.com/u/5669657?s=96&v=4",name:"Tom Sapletta",title:"Platform Engineer",links:[{icon:"linkedin",link:"https://www.linkedin.com/in/tom-sapletta-com"}]},{avatar:"https://logo.dialogware.com/dialogware-logo-pivot.png",name:"Join us!",title:"Software Developer",links:[{icon:"linkedin",link:"https://www.linkedin.com/showcase/dialogware/"}]}],a=[{avatar:"https://img.dialogware.com/ionos.png",name:"Ionos",title:"Service provider",links:[{icon:"linkedin",link:"https://www.ionos.de"}]},{avatar:"https://softreck.pl/wp-content/uploads/2020/10/softreck-logo-kwadrat-biale-tlo-1024x1024.png",name:"softreck.com",title:"DevOps",links:[{icon:"linkedin",link:"https://softreck.pl"}]}];return(_,c)=>(n(),s("div",null,[Y,o(U),K,Q,X,Z,ee,o(l(x),null,{default:f(()=>[o(l(v),null,{members:f(()=>[o(l(y),{size:"small",members:h})]),_:1})]),_:1}),te,re,o(l(x),null,{default:f(()=>[o(l(v),null,{members:f(()=>[o(l(y),{size:"small",members:a})]),_:1})]),_:1}),ae]))}});export{se as __pageData,le as default};