import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{M as t,S as I}from"./settings-qxo_OSGm.js";import{A as d}from"./index-DruT2nvP.js";import{T as m}from"./index-CWVClC3q.js";import{B as y}from"./index-DmTBLXOd.js";import{L as H}from"./life-buoy-BXarWrHS.js";import{c as b}from"./createLucideIcon-BT4tydPZ.js";import{c as u}from"./index-CQJnhAbd.js";import{U as M,B as R}from"./user-Cw07F8sO.js";import"./index-C9rmetsa.js";import"./index-C8beOrku.js";import"./index-BuZeDFlD.js";import"./index-BEn-qc9j.js";import"./index-CFGT8jr2.js";import"./index-BUIDNy1Y.js";import"./index-wgz3LQUQ.js";import"./index-BroPwuUX.js";import"./floating-ui.react-dom-DKjcifLt.js";import"./index-De76eAE3.js";import"./Combination-D8i3ZibE.js";function f({href:r,children:o,icon:s,className:a}){return e.jsx(t.Item,{className:a,href:r,icon:s,children:o})}f.__docgenInfo={description:"",methods:[],displayName:"HeaderMenuItem",props:{icon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:""}}};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=b("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);function x({role:r,image:o,username:s,children:a,...j}){return e.jsxs(t.Root,{...j,children:[e.jsx(t.Trigger,{children:e.jsx(d,{image:o,username:s})}),e.jsxs(t.Portal,{children:[e.jsxs(t.Header,{children:[e.jsx(d,{image:o,username:s}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx(m,{as:"strong",children:s}),e.jsx(m,{size:"xs",as:"small",children:r})]})]}),e.jsx(t.Content,{children:a}),e.jsxs(t.Footer,{children:[e.jsx(t.Item,{href:"#",icon:H,children:"Ajuda"}),e.jsx(y,{iconLeft:N,className:"w-full rounded-none rounded-b bg-primary-dark/25 text-primary-main hover:bg-primary-dark/30",children:"Sair"})]})]})]})}x.__docgenInfo={description:"",methods:[],displayName:"HeaderMenu",props:{image:{required:!0,tsType:{name:"string"},description:""},username:{required:!0,tsType:{name:"string"},description:""},role:{required:!0,tsType:{name:"string"},description:""}}};const _=u({base:"w-24"});function h({className:r,...o}){return e.jsx("img",{className:_({className:r}),...o})}h.__docgenInfo={description:"",methods:[],displayName:"Image"};const T=u({base:"fixed left-0 top-0 w-full bg-foreground/5 border-b border-b-foreground/10"});function g({children:r,className:o,...s}){return e.jsx("header",{className:T({className:o}),...s,children:e.jsx("div",{className:"m-auto flex w-full max-w-7xl items-center justify-between p-4",children:r})})}g.__docgenInfo={description:"",methods:[],displayName:"Root"};const n={Root:g,Image:h,Menu:x,Item:f},L=""+new URL("logo-DMrRtVTJ.svg",import.meta.url).href,W={component:n.Root,title:"Surfaces/Header",tags:["autodocs"]},i={render:({...r})=>e.jsxs(n.Root,{...r,children:[e.jsx(n.Image,{src:L,alt:"Super Festval"}),e.jsxs(n.Menu,{role:"Admin",username:"User",image:"https://placehold.co/600x400",children:[e.jsx(n.Item,{href:"#",icon:M,children:"Perfil"}),e.jsx(n.Item,{href:"#",icon:R,children:"Notificações"}),e.jsx(n.Item,{href:"#",icon:I,children:"Configurações"})]})]})};var c,l,p;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => <Header.Root {...rest}>\r
      <Header.Image src={Logo} alt="Super Festval" />\r
      <Header.Menu role="Admin" username="User" image="https://placehold.co/600x400">\r
        <Header.Item href="#" icon={User}>\r
          Perfil\r
        </Header.Item>\r
        <Header.Item href="#" icon={Bell}>\r
          Notificações\r
        </Header.Item>\r
        <Header.Item href="#" icon={Settings}>\r
          Configurações\r
        </Header.Item>\r
      </Header.Menu>\r
    </Header.Root>
}`,...(p=(l=i.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const X=["Default"];export{i as Default,X as __namedExportsOrder,W as default};
