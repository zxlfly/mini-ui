(function(t,e){typeof exports=="object"&&typeof module!="undefined"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(t=typeof globalThis!="undefined"?globalThis:t||self,e(t.index={},t.Vue))})(this,function(t,e){"use strict";const u={data:{type:Array,default:()=>[]}},p=n=>e.createVNode("svg",{width:"16px",height:"16px",viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg",class:["svg-icon svg-icon-close",n.class]},[e.createVNode("g",{"stroke-width":"1",fill:"none","fill-rule":"evenodd"},[e.createVNode("rect",{x:"0.5",y:"0.5",width:"15",height:"15",rx:"2",stroke:"#5e7ce0"},null),e.createVNode("rect",{x:"4",y:"7",width:"8",height:"2",fill:"#5e7ce0"},null)])]),h=n=>e.createVNode("svg",{width:"16px",height:"16px",viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg",class:["svg-icon",n.class]},[e.createVNode("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[e.createVNode("rect",{x:"0.5",y:"0.5",width:"15",height:"15",rx:"2",stroke:"#252b3a"},null),e.createVNode("path",{fill:"#252b3a",d:"M8.75,4 L8.75,7.25 L12,7.25 L12,8.75 L8.749,8.75 L8.75,12 L7.25,12 L7.249,8.75 L4,8.75 L4,7.25 L7.25,7.25 L7.25,4 L8.75,4 Z"},null)])]);function g(n){const s=r=>r.reduce((i,l)=>l.open?i.concat(l,s(l.children)):i.concat(l),[]),c=e.ref(s(n));return{openedData:c,toggle:r=>{!r.children||(r.open=!r.open,c.value=s(n))}}}var d=e.defineComponent({name:"Tree",props:u,emits:[],setup(n,s){const{data:c}=e.toRefs(n),{openedData:a,toggle:r}=g(c.value),i=()=>e.createVNode("span",{style:"display: inline-block; width: 16px; height: 16px;"},null),l=o=>e.createVNode("div",{class:["devui-tree-node",o.open&&"devui-tree-node__open"],style:{paddingLeft:`${24*(o.level-1)}px`}},[e.createVNode("div",{class:"devui-tree-node__content"},[e.createVNode("div",{class:"devui-tree-node__content--value-wrapper"},[o.children?o.open?e.createVNode(p,{class:"mr-xs",onClick:()=>r(o)},null):e.createVNode(h,{class:"mr-xs",onClick:()=>r(o)},null):e.createVNode(i,null,null),e.createVNode("span",{class:"devui-tree-node__title"},[o.label])])])]);return()=>e.createVNode("div",{class:"devui-tree"},[a.value.map(o=>l(o))])}});d.install=function(n){n.component(d.name,d)};var f={title:"Tree \u6811",category:"\u6570\u636E\u5C55\u793A",status:"20%",install(n){n.use(d)}};t.Tree=d,t.default=f,Object.defineProperty(t,"__esModule",{value:!0}),t[Symbol.toStringTag]="Module"})
