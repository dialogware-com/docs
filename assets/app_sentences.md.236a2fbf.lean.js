import{_ as h,l as _,o,c as l,m as u,a as e,t,e as c,w as d,F as m,p as f,k as g,b as L}from"./app.abfbd2d2.js";const r=[{id:1,url:"?#/",text:"Load [file]. Load each line as URL and make a [screenshots] in [tiny] resolution on [mobile] device. Save each [screenshot] to [file] in format [png].",input:"Load [file]",process:"Load each line as URL and make a [screenshots] in [tiny] resolution on [mobile] device",output:"Save each [screenshot] to [file] in format [png]",dsl:"letfile.load().getfile.getLine().puppeter.toPng()",installation:`#!/bin/bash 
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
apidsl 'letfile.load().getfile.getLine().puppeter.toPng()'`}];const S=r;console.log(S);const b={props:["url","text","dsl","installation"],data(){return{sentences:r}}},s=a=>(f("data-v-c883c599"),a=a(),g(),a),v={class:"sentence"},R={class:"url",href:"{{ sentence.url }}"},I={class:"biglabel"},P=s(()=>e("p",{class:"label"},"Sentence Processed:",-1)),x={class:"processed"},E={class:"input"},A=s(()=>e("span",{class:"title"},"INPUT: ",-1)),D={class:"part"},T={class:"process"},U=s(()=>e("span",{class:"title"},"PROCESS: ",-1)),k={class:"part"},y={class:"output"},N=s(()=>e("span",{class:"title"},"OUTPUT: ",-1)),O={class:"part"},C=s(()=>e("p",{class:"label"},"Text2DSL:",-1)),F=s(()=>e("span",{class:"description"},"Sentence Converted to DSL:",-1)),w={class:"dsl"},B={class:"part"},$=s(()=>e("p",{class:"label"},"Deployment:",-1)),J=s(()=>e("span",{class:"description"},"Start the script local and remote over shell:",-1));function M(a,p){const i=_("dev");return o(!0),l(m,null,u(a.sentences,n=>(o(),l("div",v,[e("a",R,[e("p",I,"Sentence no. "+t(n.id),1)]),c(i,{class:"edit"},{default:d(()=>[e("textarea",null,t(n.text),1)]),_:2},1024),P,e("div",x,[e("p",E,[A,e("span",D,t(n.input),1)]),e("p",T,[U,e("span",k,t(n.process),1)]),e("p",y,[N,e("span",O,t(n.output),1)])]),C,F,e("p",w,[e("span",B,t(n.dsl),1)]),$,J,c(i,{class:"installation"},{default:d(()=>[e("textarea",null,t(n.installation),1)]),_:2},1024)]))),256)}const V=h(b,[["render",M],["__scopeId","data-v-c883c599"]]),j={id:"frontmatter-title",tabindex:"-1"},q=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),H=JSON.parse('{"title":"Example Sentence","description":"","frontmatter":{"layout":"docs","title":"Example Sentence","lang":"en-US"},"headers":[],"relativePath":"app/sentences.md"}'),z={name:"app/sentences.md"},K=Object.assign(z,{setup(a){return(p,i)=>(o(),l("div",null,[e("h1",j,[L(t(p.$frontmatter.title)+" ",1),q]),c(V)]))}});export{H as __pageData,K as default};
