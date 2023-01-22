import{_ as P,r,o as n,c as l,b as e,j as A,v as O,k as g,p as L,i as I,d as m,e as o,w as f,u as s,a as D,g as v,f as y,h as x}from"./app.0de8b606.js";const i=d=>(L("data-v-df0ef695"),d=d(),I(),d),R={class:"newsletter"},E={key:0,method:"get",class:"email_form",id:"email_form",action:"#",onsubmit:"return false;"},W={key:0},G={key:1,class:"tip custom-block info_message"},M=i(()=>e("p",{class:"custom-block-title"},"Info",-1)),V=i(()=>e("p",null,[m("We got your Email! What can be the next step? Join us on "),e("a",{href:"https://www.linkedin.com/showcase/dialogware/"},"linkedin")],-1)),C=[M,V],N={key:2,class:"warning custom-block warning_message"},j=i(()=>e("p",{class:"custom-block-title"},"Error",-1)),B=i(()=>e("p",null,"Please fill the fields with min. 6 characters",-1)),$=[j,B],F={key:3,class:"warning custom-block error_message"},q=i(()=>e("p",{class:"custom-block-title"},"Error",-1)),z=i(()=>e("p",null,[m("Sending message is not possible, contact me please on "),e("a",{href:"https://www.linkedin.com/in/tom-sapletta-com"},"linkedin")],-1)),H=[q,z],J={__name:"Newsletter",setup(d){const h=r(""),a=r(""),_=r(""),c=r(""),p=r(!1),w=r(!1),b=r(!1),u=r(!0);function S(){if(c.value="DIALOGWARE-ian",h.value="Thank You  for a registration on DIALOGWARE NEWSLETTER.",w.value=!1,p.value=!1,c.value.length<2||a.value.length<4||h.value.length<4)p.value=!0;else{p.value=!1;var k=`https://email.dialogware.com/?type=NEWSLETTER&name=${c.value}&message=${h.value}&email=${a.value}`;fetch(k,{method:"get"}).then(t=>t.json()).then(t=>{a.value=t.email,_.value=t.text,c.value=t.name,t.found>5?w.value=!0:(w.value=!1,p.value=!1,u.value=!1,b.value=!0)})}}return(k,t)=>(n(),l("div",R,[u.value?(n(),l("form",E,[e("div",null,[e("fieldset",null,[A(e("input",{"onUpdate:modelValue":t[0]||(t[0]=T=>a.value=T),placeholder:"@"},null,512),[[O,a.value]])])]),u.value?(n(),l("div",W,[e("fieldset",{class:"button_send"},[e("button",{onClick:S},"Subscribe")])])):g("",!0)])):g("",!0),b.value?(n(),l("div",G,C)):g("",!0),p.value?(n(),l("div",N,$)):g("",!0),w.value?(n(),l("div",F,H)):g("",!0)]))}},U=P(J,[["__scopeId","data-v-df0ef695"]]);const Y=D('<h1 id="dialogware" tabindex="-1"><a href="http://www.dialogware.com/" target="_blank" rel="noreferrer">DIALOGWARE</a> <a class="header-anchor" href="#dialogware" aria-hidden="true">#</a></h1><h2 id="build-any-software-in-minutes-with-these-simple-steps" tabindex="-1">Build any software in minutes with these simple steps <a class="header-anchor" href="#build-any-software-in-minutes-with-these-simple-steps" aria-hidden="true">#</a></h2><ul><li>grab the &quot;Idea&quot;</li><li>describe it</li><li>implement it with a single click</li><li>use your application</li></ul><p><strong>DIALOGWARE</strong> is a <a href="https://www.text2software.com/" target="_blank" rel="noreferrer">#text2software</a> platform for building your first MVP application in minutes.</p><p><a href="http://www.dialogware.com/" target="_blank" rel="noreferrer"><img src="http://logo.dialogware.com/dialogware-2lines.png" alt="DIALOGWARE"></a></p><h2 id="how-it-work-s" tabindex="-1">How it work&#39;s? <a class="header-anchor" href="#how-it-work-s" aria-hidden="true">#</a></h2><p>After you have answered our questions with a few sentences about your expectations, you will implement your first MVP version of a web/mobile application yourself and within minutes rather than weeks.</p><h2 id="benefits" tabindex="-1">Benefits? <a class="header-anchor" href="#benefits" aria-hidden="true">#</a></h2><p>This is a much cheaper and easier way than no-code or low-code solutions, you can save much more time and money than today. We &quot;twitterize&quot; the software development and will build any software just with the (con)text of description, specification, documentation...</p><h2 id="try-it" tabindex="-1">Try it! <a class="header-anchor" href="#try-it" aria-hidden="true">#</a></h2><p>Our demo version is currently available only for linux distributions on desktop: <a href="http://download.dialogware.com/" target="_blank" rel="noreferrer">download.dialogware.com</a></p><p>Please find more details about desktop application: <a href="https://www.dialogware.com/app/desktop.html" target="_blank" rel="noreferrer">Desktop Application</a></p><p><img src="https://img.dialogware.com/animation.png" alt="dialogware-opened-tab.png"></p><h2 id="why-dialogware" tabindex="-1">Why DIALOGWARE? <a class="header-anchor" href="#why-dialogware" aria-hidden="true">#</a></h2><p>We are the first global #text2software provider!</p><p>We are appreciated on <a href="https://pioneer.app/join/dialogware.com" target="_blank" rel="noreferrer">Pioneer</a> voting platform over worldwide community.</p><p>Our impressive progress every week bring us among 30 startups out of hundreds of participants.</p><h3 id="video-presentation" tabindex="-1"><a href="https://www.dialogware.com/about/review.html" target="_blank" rel="noreferrer">Video presentation</a> <a class="header-anchor" href="#video-presentation" aria-hidden="true">#</a></h3><p>Please find more details about DIALOGWARE Review on our video presentation</p><video controls="controls" src="https://www.dialogware.com/DIALOGWARE-Review-2--29-11-2022.mp4"></video><ul><li><a href="https://www.dialogware.com/about/review.html" target="_blank" rel="noreferrer">Project Review</a></li></ul><h2 id="dialogware-ecosystem" tabindex="-1">Dialogware ecosystem <a class="header-anchor" href="#dialogware-ecosystem" aria-hidden="true">#</a></h2><h3 id="saas-services" tabindex="-1">SaaS Services <a class="header-anchor" href="#saas-services" aria-hidden="true">#</a></h3><table><thead><tr><th>Project</th><th>Description</th><th>More ...</th><th>cost</th></tr></thead><tbody><tr><td><strong>autoDeployer</strong></td><td><img src="http://logo.autoDeployer.com/1/cover.png" alt="autoDeployer"> Free Marketplace, one APP per USER</td><td><a href="http://www.autoDeployer.com" target="_blank" rel="noreferrer">www</a>, <a href="http://docs.autoDeployer.com" target="_blank" rel="noreferrer">docs</a></td><td>free</td></tr><tr><td><strong>TextToWeb</strong></td><td><img src="http://logo.TextToWeb.com/1/cover.png" alt="TextToWeb"> nonFree www Marketplace, to deploy in browser on over <strong>deploymat</strong></td><td><a href="http://www.TextToWeb.com" target="_blank" rel="noreferrer">www</a>, <a href="http://docs.TextToWeb.com" target="_blank" rel="noreferrer">docs</a></td><td>free</td></tr><tr><td><strong>DialoGet</strong></td><td><img src="http://logo.DialoGet.com/1/cover.png" alt="DialoGet"> nonFree remote Marketplace, to deploy on external machines</td><td><a href="http://www.TextToWeb.com" target="_blank" rel="noreferrer">www</a>, <a href="http://docs.TextToWeb.com" target="_blank" rel="noreferrer">docs</a></td><td>free</td></tr><tr><td><strong>OneDay.Run</strong></td><td><img src="http://logo.OneDayRun.com/1/cover.png" alt="OneDay.Run"> nonFree local Marketplace, deployment environment per user, deployment local with <strong>OneDay.Run</strong> desktop app</td><td><a href="http://www.OneDay.Run" target="_blank" rel="noreferrer">www</a>, <a href="http://docs.OneDay.Run" target="_blank" rel="noreferrer">docs</a></td><td>free</td></tr><tr><td><strong>coDialog</strong></td><td><img src="http://logo.coDialog.com/1/cover.png" alt="coDialog"> multichat app with openAI, dialogware, jasper, ... solutions</td><td><a href="http://www.coDialog.com" target="_blank" rel="noreferrer">www</a>, <a href="http://docs.coDialog.com" target="_blank" rel="noreferrer">docs</a></td><td>free</td></tr></tbody></table><h3 id="libraries" tabindex="-1">Libraries <a class="header-anchor" href="#libraries" aria-hidden="true">#</a></h3><table><thead><tr><th>Project</th><th>Description</th><th>More ...</th><th>licence</th></tr></thead><tbody><tr><td><strong>DialogSchema</strong></td><td>Schema to create a conversation as <strong>DialogMap</strong> file</td><td><a href="http://www.DialogSchema.com" target="_blank" rel="noreferrer">www</a>, <a href="http://docs.DialogSchema.com" target="_blank" rel="noreferrer">docs</a>, <a href="http://roadmap.apidsl.com" target="_blank" rel="noreferrer">roadmap</a>, <a href="http://download.DialogSchema.com" target="_blank" rel="noreferrer">download</a></td><td>open source</td></tr><tr><td><strong>DialogMap</strong></td><td>Map of dialog generated through conversation based on <strong>DialogSchema</strong> file format for shell execution</td><td><a href="http://www.DialogMap.com" target="_blank" rel="noreferrer">www</a>, <a href="http://docs.DialogMap.com" target="_blank" rel="noreferrer">docs</a>, <a href="http://roadmap.apidsl.com" target="_blank" rel="noreferrer">roadmap</a>, <a href="http://download.DialogMap.com" target="_blank" rel="noreferrer">download</a></td><td>open source</td></tr><tr><td><strong>DialogChain</strong></td><td><strong>DialogMap</strong> files archived in blockchain, history of transactions based on blockchain</td><td><a href="http://www.DialogChain.com" target="_blank" rel="noreferrer">www</a>, <a href="http://docs.DialogChain.com" target="_blank" rel="noreferrer">docs</a>, <a href="http://roadmap.apidsl.com" target="_blank" rel="noreferrer">roadmap</a></td><td>open source</td></tr><tr><td><strong>APIDSL</strong></td><td><img src="http://logo.apidsl.com/2/cover.png" alt="APIDSL"> Domain Specific/language to deployment purposes, to build modular applications</td><td><a href="http://www.apidsl.com" target="_blank" rel="noreferrer">www</a>, <a href="http://docs.apidsl.com" target="_blank" rel="noreferrer">docs</a>, <a href="http://roadmap.apidsl.com" target="_blank" rel="noreferrer">roadmap</a>, <a href="http://download.apidsl.com" target="_blank" rel="noreferrer">download</a></td><td>open source</td></tr></tbody></table><h3 id="api-gateway" tabindex="-1">API Gateway <a class="header-anchor" href="#api-gateway" aria-hidden="true">#</a></h3><table><thead><tr><th>Project</th><th>Description</th><th>More ...</th><th>cost</th></tr></thead><tbody><tr><td><strong>apiContext</strong></td><td>nonFree API, convert Text To <strong>APIDSL</strong></td><td><a href="http://apiContext.com" target="_blank" rel="noreferrer">API</a>, <a href="http://docs.apiContext.com" target="_blank" rel="noreferrer">docs</a></td><td>25$/user/month</td></tr><tr><td><strong>deploymat</strong></td><td>nonFree API, deploy an <strong>APIDSL</strong> code</td><td><a href="http://www.deploymat.com" target="_blank" rel="noreferrer">www</a>, <a href="http://docs.deploymat.com" target="_blank" rel="noreferrer">docs</a></td><td>25$/user/month</td></tr></tbody></table><h3 id="others" tabindex="-1">Others <a class="header-anchor" href="#others" aria-hidden="true">#</a></h3><table><thead><tr><th>Project</th><th>Description</th><th>More ...</th><th>cost</th></tr></thead><tbody><tr><td><strong>PoLoShell</strong></td><td><img src="http://logo.PoLoShell.com/1/cover.png" alt="PoLoShell"> AI powered shell, deploy on local system in terminal</td><td><a href="http://www.PoLoShell.com" target="_blank" rel="noreferrer">www</a>, <a href="http://app.PoLoShell.com" target="_blank" rel="noreferrer">app</a>, <a href="http://roadmap.apidsl.com" target="_blank" rel="noreferrer">roadmap</a>, <a href="http://docs.PoLoShell.com" target="_blank" rel="noreferrer">docs</a>, <a href="http://download.PoLoShell.com" target="_blank" rel="noreferrer">download</a></td><td>free</td></tr><tr><td><strong>PoLoGoS</strong></td><td><img src="http://logo.PoLoGoS.com/1/cover.png" alt="PoLoGoS"> AI Operating System</td><td><a href="http://www.PoLoGoS.com" target="_blank" rel="noreferrer">www</a>, <a href="http://docs.PoLoGoS.com" target="_blank" rel="noreferrer">docs</a>, <a href="http://roadmap.apidsl.com" target="_blank" rel="noreferrer">roadmap</a>, <a href="http://download.PoLoGoS.com" target="_blank" rel="noreferrer">download</a></td><td>free</td></tr><tr><td><strong>OneDay.Run</strong></td><td><img src="http://logo.OneDayRun.com/1/cover.png" alt="OneDayRun"> Desktop Application to deployment local on pc</td><td><a href="http://www.OneDayRun.com" target="_blank" rel="noreferrer">www</a>, <a href="http://docs.OneDayRun.com" target="_blank" rel="noreferrer">docs</a>, <a href="http://roadmap.apidsl.com" target="_blank" rel="noreferrer">roadmap</a></td><td>free</td></tr><tr><td><strong>dialogStream</strong></td><td>Deployment in the fly in a seconds, in preapration, planned for 2025y.</td><td><a href="http://www.dialogStream.com" target="_blank" rel="noreferrer">www</a>, <a href="http://docs.dialogStream.com" target="_blank" rel="noreferrer">docs</a>, <a href="http://roadmap.apidsl.com" target="_blank" rel="noreferrer">roadmap</a></td><td>free</td></tr></tbody></table><h3 id="text-to-software-documentation-code-generators" tabindex="-1">Text To * &lt;- Software, Documentation, Code Generators <a class="header-anchor" href="#text-to-software-documentation-code-generators" aria-hidden="true">#</a></h3><table><thead><tr><th>Project</th><th>Description</th></tr></thead><tbody><tr><td><a href="http://text2software.com" target="_blank" rel="noreferrer"><strong>text to srs</strong></a></td><td></td></tr><tr><td><a href="http://text2code.com" target="_blank" rel="noreferrer"><strong>text to code</strong></a></td><td></td></tr><tr><td><a href="http://text2software.com" target="_blank" rel="noreferrer"><strong>text to software</strong></a></td><td></td></tr><tr><td><a href="http://text2service.com" target="_blank" rel="noreferrer"><strong>text to service</strong></a></td><td></td></tr><tr><td><a href="http://text2software.com" target="_blank" rel="noreferrer"><strong>text to apidsl</strong></a></td><td></td></tr><tr><td><a href="http://text2software.com" target="_blank" rel="noreferrer"><strong>text to vue</strong></a></td><td></td></tr><tr><td><a href="http://text2software.com" target="_blank" rel="noreferrer"><strong>text to css</strong></a></td><td></td></tr></tbody></table><h2 id="newsletter" tabindex="-1">NEWSLETTER <a class="header-anchor" href="#newsletter" aria-hidden="true">#</a></h2><p>Leave your email to be the first DIALOGWARE-ian \u{1F603}</p>',34),K=e("h2",{id:"our-story",tabindex:"-1"},[m("Our Story "),e("a",{class:"header-anchor",href:"#our-story","aria-hidden":"true"},"#")],-1),Q=e("p",null,"We started in 2019 as Software House with an idea to build developer tools. During the Years we have created modularized tools for frontend and backend development. Today we want to bring the software development to the next level.",-1),X=e("p",null,"Our goal is building software in minutes with humanless software development systems.",-1),Z=e("h2",{id:"our-team",tabindex:"-1"},[m("Our Team "),e("a",{class:"header-anchor",href:"#our-team","aria-hidden":"true"},"#")],-1),ee=e("p",null,"The development of DIALOGWARE is guided by an international team, some of whom have chosen to be featured below.",-1),te=e("h2",{id:"our-partners",tabindex:"-1"},[m("Our Partners "),e("a",{class:"header-anchor",href:"#our-partners","aria-hidden":"true"},"#")],-1),re=e("p",null,"Organization they support our project",-1),ae=D('<h2 id="hashtags" tabindex="-1">Hashtags <a class="header-anchor" href="#hashtags" aria-hidden="true">#</a></h2><ul><li>text2software</li><li>text2app</li><li>text2srs</li><li>text2api</li><li>domain-specific language</li></ul><h2 id="privacy" tabindex="-1">Privacy <a class="header-anchor" href="#privacy" aria-hidden="true">#</a></h2><ul><li><a href="./.html"></a></li></ul>',4),le=JSON.parse(`{"title":"DIALOGWARE is a text2software platform, build any app MVP in minutes","description":"","frontmatter":{"layout":"docs","title":"DIALOGWARE is a text2software platform, build any app MVP in minutes","lang":"en-US"},"headers":[{"level":2,"title":"Build any software in minutes with these simple steps","slug":"build-any-software-in-minutes-with-these-simple-steps","link":"#build-any-software-in-minutes-with-these-simple-steps","children":[]},{"level":2,"title":"How it work's?","slug":"how-it-work-s","link":"#how-it-work-s","children":[]},{"level":2,"title":"Benefits?","slug":"benefits","link":"#benefits","children":[]},{"level":2,"title":"Try it!","slug":"try-it","link":"#try-it","children":[]},{"level":2,"title":"Why DIALOGWARE?","slug":"why-dialogware","link":"#why-dialogware","children":[{"level":3,"title":"Video presentation","slug":"video-presentation","link":"#video-presentation","children":[]}]},{"level":2,"title":"Dialogware ecosystem","slug":"dialogware-ecosystem","link":"#dialogware-ecosystem","children":[{"level":3,"title":"SaaS Services","slug":"saas-services","link":"#saas-services","children":[]},{"level":3,"title":"Libraries","slug":"libraries","link":"#libraries","children":[]},{"level":3,"title":"API Gateway","slug":"api-gateway","link":"#api-gateway","children":[]},{"level":3,"title":"Others","slug":"others","link":"#others","children":[]},{"level":3,"title":"Text To * <- Software, Documentation, Code Generators","slug":"text-to-software-documentation-code-generators","link":"#text-to-software-documentation-code-generators","children":[]}]},{"level":2,"title":"NEWSLETTER","slug":"newsletter","link":"#newsletter","children":[]},{"level":2,"title":"Our Story","slug":"our-story","link":"#our-story","children":[]},{"level":2,"title":"Our Team","slug":"our-team","link":"#our-team","children":[]},{"level":2,"title":"Our Partners","slug":"our-partners","link":"#our-partners","children":[]},{"level":2,"title":"Hashtags","slug":"hashtags","link":"#hashtags","children":[]},{"level":2,"title":"Privacy","slug":"privacy","link":"#privacy","children":[]}],"relativePath":"index.md"}`),oe={name:"index.md"},se=Object.assign(oe,{setup(d){const h=[{avatar:"https://avatars.githubusercontent.com/u/5669657?s=96&v=4",name:"Tom Sapletta",title:"Platform Engineer",links:[{icon:"linkedin",link:"https://www.linkedin.com/in/tom-sapletta-com"}]},{avatar:"https://logo.dialogware.com/dialogware-logo-pivot.png",name:"Join us!",title:"Software Developer",links:[{icon:"linkedin",link:"https://www.linkedin.com/showcase/dialogware/"}]}],a=[{avatar:"https://img.dialogware.com/ionos.png",name:"Ionos",title:"Service provider",links:[{icon:"linkedin",link:"https://www.ionos.de"}]},{avatar:"https://softreck.pl/wp-content/uploads/2020/10/softreck-logo-kwadrat-biale-tlo-1024x1024.png",name:"softreck.com",title:"DevOps",links:[{icon:"linkedin",link:"https://softreck.pl"}]}];return(_,c)=>(n(),l("div",null,[Y,o(U),K,Q,X,Z,ee,o(s(x),null,{default:f(()=>[o(s(v),null,{members:f(()=>[o(s(y),{size:"small",members:h})]),_:1})]),_:1}),te,re,o(s(x),null,{default:f(()=>[o(s(v),null,{members:f(()=>[o(s(y),{size:"small",members:a})]),_:1})]),_:1}),ae]))}});export{le as __pageData,se as default};
