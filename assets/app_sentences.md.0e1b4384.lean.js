import{_ as h,l as _,o,c as l,m as u,a as e,t as s,e as c,w as d,F as m,p as f,k as g,b as L}from"./app.abfbd2d2.js";const r=[{id:1,url:"?#/",text:"Load [file]. Load each line as URL and make a [screenshots] in [tiny] resolution on [mobile] device. Save each [screenshot] to [file] in format [png].",input:"Load [file]",process:"Load each line as URL and make a [screenshots] in [tiny] resolution on [mobile] device",output:"Save each [screenshot] to [file] in format [png]",dsl:"letfile.load().getfile.getLine().puppeter.toPng()",installation:`#!/bin/bash 
#INSTALL APIDSL
curl https://raw.githubusercontent.com/apidsl/bash/main/apidsl.sh -o apidsl
./apidsl init
# CREATE FOLDER
mkdir 1667145230
cd 1667145230
# IMPORT LIBRARIES
apidsl --get https://github.com/letfile/file	
apidsl --get https://github.com/leteach/file
apidsl --get https://github.com/puppeter/file
# RUN APIDSL
apidsl 'letfile.load().getfile.getLine().puppeter.toPng()'`},{id:2,url:"?",text:"Load [file]. Load each line as URL and make a [screenshots] in [tiny] resolution on [mobile] device. Save each [screenshot] to [file] in format [png].",input:"Load [file]",process:"Load each line as URL and make a [screenshots] in [tiny] resolution on [mobile] device",output:"Save each [screenshot] to [file] in format [png]",dsl:"letfile.load().getfile.getLine().puppeter.toPng()",installation:`#!/bin/bash 
#INSTALL APIDSL
curl https://raw.githubusercontent.com/apidsl/bash/main/apidsl.sh -o apidsl
./apidsl init
# CREATE FOLDER
mkdir 1667145230
cd 1667145230
# IMPORT LIBRARIES
apidsl --get https://github.com/letfile/file	
apidsl --get https://github.com/leteach/file
apidsl --get https://github.com/puppeter/file
# RUN APIDSL
apidsl 'letfile.load().getfile.getLine().puppeter.toPng()'`},{id:3,url:"?/",text:"Load [file]. Load each line as URL and make a [screenshots] in [tiny] resolution on [mobile] device. Save each [screenshot] to [file] in format [png].",input:"Load [file]",process:"Load each line as URL and make a [screenshots] in [tiny] resolution on [mobile] device",output:"Save each [screenshot] to [file] in format [png]",dsl:"letfile.load().getfile.getLine().puppeter.toPng()",installation:`#!/bin/bash 
#INSTALL APIDSL
curl https://raw.githubusercontent.com/apidsl/bash/main/apidsl.sh -o apidsl
./apidsl init
# CREATE FOLDER
mkdir 1667145230
cd 1667145230
# IMPORT LIBRARIES
apidsl --get https://github.com/letfile/file	
apidsl --get https://github.com/leteach/file
apidsl --get https://github.com/puppeter/file
# RUN APIDSL
apidsl 'letfile.load().getfile.getLine().puppeter.toPng()'`}];const b=r;console.log(b);const S={props:["url","text","dsl","installation"],data(){return{sentences:r}}},t=a=>(f("data-v-460cdb3d"),a=a(),g(),a),R={class:"sentence"},v={class:"url",href:"{{ sentence.url }}"},I={class:"biglabel"},P=t(()=>e("p",{class:"label"},"Editing:",-1)),E=t(()=>e("p",{class:"label"},"Processing:",-1)),T={class:"processed"},x={class:"get_input"},A=t(()=>e("span",{class:"title"},"INPUT: ",-1)),D={class:"part"},U={class:"get_process"},k=t(()=>e("span",{class:"title"},"PROCESS: ",-1)),y={class:"part"},N={class:"get_output"},O=t(()=>e("span",{class:"title"},"OUTPUT: ",-1)),F={class:"part"},w=t(()=>e("p",{class:"label"},"Translation:",-1)),B=t(()=>e("span",{class:"description"},"Sentence is translated from TEXT to DSL:",-1)),C={class:"dsl"},$={class:"part"},J=t(()=>e("p",{class:"label"},"Deployment:",-1)),M=t(()=>e("span",{class:"description"},"Start the script local and remote over shell:",-1));function V(a,p){const i=_("dev");return o(!0),l(m,null,u(a.sentences,n=>(o(),l("div",R,[e("a",v,[e("p",I,"Sentence no. "+s(n.id),1)]),P,c(i,{class:"edit"},{default:d(()=>[e("textarea",null,s(n.text),1)]),_:2},1024),E,e("div",T,[e("p",x,[A,e("span",D,s(n.input),1)]),e("p",U,[k,e("span",y,s(n.process),1)]),e("p",N,[O,e("span",F,s(n.output),1)])]),w,B,e("p",C,[e("span",$,s(n.dsl),1)]),J,M,c(i,{class:"installation"},{default:d(()=>[e("textarea",null,s(n.installation),1)]),_:2},1024)]))),256)}const j=h(S,[["render",V],["__scopeId","data-v-460cdb3d"]]),X={id:"frontmatter-title",tabindex:"-1"},q=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),H=JSON.parse('{"title":"Example Sentence","description":"","frontmatter":{"layout":"docs","title":"Example Sentence","lang":"en-US"},"headers":[],"relativePath":"app/sentences.md"}'),z={name:"app/sentences.md"},K=Object.assign(z,{setup(a){return(p,i)=>(o(),l("div",null,[e("h1",X,[L(s(p.$frontmatter.title)+" ",1),q]),c(j)]))}});export{H as __pageData,K as default};
