import{_ as r,q as h,o as a,c as i,r as u,a as e,t,d as o,w as p,F as _,b as f}from"./app.1cb57a81.js";const d=[{id:1,url:"?#/",text:"Load [file]. Load each line as URL and make a [screenshots] in [tiny] resolution on [mobile] device. Save each [screenshot] to [file] in format [png].",input:"Load [file]",process:"Load each line as URL and make a [screenshots] in [tiny] resolution on [mobile] device",output:"Save each [screenshot] to [file] in format [png]",dsl:"letfile.load().getfile.getLine().puppeter.toPng()",installation:`#!/bin/bash 
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
apidsl 'letfile.load().getfile.getLine().puppeter.toPng()'`}];const m=d;console.log(m);const g={props:["url","text","dsl","installation"],data(){return{sentences:d}}},L={class:"sentence"},S={class:"url",href:"{{ sentence.url }}"},b={class:"text"},R=e("h3",null,"Sentence Processed:",-1),v={class:"processed"},P={class:"input"},I=e("span",{class:"title"},"INPUT: ",-1),x={class:"part"},E={class:"process"},A=e("span",{class:"title"},"PROCESS: ",-1),D={class:"part"},T={class:"output"},U=e("span",{class:"title"},"OUTPUT: ",-1),k={class:"part"},y=e("h3",null,"Text2DSL:",-1),N=e("span",{class:"description"},"Sentence Converted to DSL:",-1),O={class:"dsl"},C={class:"part"},F=e("h3",null,"Deployment:",-1),B=e("span",{class:"description"},"Start the script local and remote over shell:",-1);function w(l,c){const n=h("dev");return a(!0),i(_,null,u(l.sentences,s=>(a(),i("div",L,[e("a",S,[e("h2",b,"Sentence no. "+t(s.id),1)]),o(n,{class:"editor"},{default:p(()=>[e("textarea",null,t(s.text),1)]),_:2},1024),R,e("div",v,[e("p",P,[I,e("span",x,t(s.input),1)]),e("p",E,[A,e("span",D,t(s.process),1)]),e("p",T,[U,e("span",k,t(s.output),1)])]),y,N,e("p",O,[e("span",C,t(s.dsl),1)]),F,B,o(n,{class:"installation"},{default:p(()=>[e("textarea",null,t(s.installation),1)]),_:2},1024)]))),256)}const $=r(g,[["render",w]]),J={id:"frontmatter-title",tabindex:"-1"},M=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),q=JSON.parse('{"title":"Example Sentence","description":"","frontmatter":{"layout":"docs","title":"Example Sentence","lang":"en-US"},"headers":[],"relativePath":"app/sentences.md"}'),V={name:"app/sentences.md"},z=Object.assign(V,{setup(l){return(c,n)=>(a(),i("div",null,[e("h1",J,[f(t(c.$frontmatter.title)+" ",1),M]),o($)]))}});export{q as __pageData,z as default};
