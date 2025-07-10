import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{M as s,S as H}from"./settings-DYYp0GYr.js";import{A as d}from"./index-DruT2nvP.js";import{T as c}from"./index-CWVClC3q.js";import{c as u}from"./index-CQJnhAbd.js";import{B as N}from"./index-M-X4Dozj.js";import{U as R,B as _}from"./user-Cw07F8sO.js";import{L as T}from"./life-buoy-BXarWrHS.js";import{c as L}from"./createLucideIcon-BT4tydPZ.js";import"./index-C9rmetsa.js";import"./index-ChiCqI1P.js";import"./index-BuZeDFlD.js";import"./index-BEn-qc9j.js";import"./index-CFGT8jr2.js";import"./index-BUIDNy1Y.js";import"./index-wgz3LQUQ.js";import"./index-BroPwuUX.js";import"./floating-ui.react-dom-DKjcifLt.js";import"./index-De76eAE3.js";import"./Combination-D8i3ZibE.js";function f({children:r,...o}){return e.jsx(s.Footer,{...o,children:r})}f.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function h({href:r,children:o,icon:n,className:a}){return e.jsx(s.Item,{className:a,href:r,icon:n,children:o})}h.__docgenInfo={description:"",methods:[],displayName:"Item",props:{icon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:""}}};function x({role:r,image:o,username:n,children:a,...y}){return e.jsxs(s.Root,{...y,children:[e.jsx(s.Trigger,{children:e.jsx(d,{image:o,username:n})}),e.jsxs(s.Portal,{children:[e.jsxs(s.Header,{children:[e.jsx(d,{image:o,username:n}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx(c,{as:"strong",children:n}),e.jsx(c,{size:"xs",as:"small",children:r})]})]}),a]})]})}x.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{image:{required:!0,tsType:{name:"string"},description:""},username:{required:!0,tsType:{name:"string"},description:""},role:{required:!0,tsType:{name:"string"},description:""}}};function g({children:r,...o}){return e.jsx(s.Content,{...o,children:r})}g.__docgenInfo={description:"",methods:[],displayName:"Content",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const b=u({base:"w-24"});function j({className:r,...o}){return e.jsx("img",{className:b({className:r}),...o})}j.__docgenInfo={description:"",methods:[],displayName:"Image"};const w=u({base:"fixed left-0 top-0 w-full bg-foreground/5 border-b border-b-foreground/10"});function I({children:r,className:o,...n}){return e.jsx("header",{className:w({className:o}),...n,children:e.jsx("div",{className:"m-auto flex w-full max-w-7xl items-center justify-between p-4",children:r})})}I.__docgenInfo={description:"",methods:[],displayName:"Root"};const t={Root:I,Image:j,Menu:x,Item:h,Footer:f,Content:g},B=""+new URL("logo-DMrRtVTJ.svg",import.meta.url).href;/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=L("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),X={component:t.Root,title:"Surfaces/Header",tags:["autodocs"]},i={render:({...r})=>e.jsxs(t.Root,{...r,children:[e.jsx(t.Image,{src:B,alt:"Super Festval"}),e.jsxs(t.Menu,{role:"Admin",username:"User",image:"https://placehold.co/600x400",children:[e.jsxs(t.Content,{children:[e.jsx(t.Item,{href:"#",icon:R,children:"Perfil"}),e.jsx(t.Item,{href:"#",icon:_,children:"Notificações"}),e.jsx(t.Item,{href:"#",icon:H,children:"Configurações"})]}),e.jsxs(t.Footer,{children:[e.jsx(t.Item,{href:"#",icon:T,children:"Ajuda"}),e.jsx(N,{className:"w-full",iconRight:M,children:"Sair"})]})]})]})};var m,l,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => <Header.Root {...rest}>\r
      <Header.Image src={Logo} alt="Super Festval" />\r
      <Header.Menu role="Admin" username="User" image="https://placehold.co/600x400">\r
        <Header.Content>\r
          <Header.Item href="#" icon={User}>\r
            Perfil\r
          </Header.Item>\r
          <Header.Item href="#" icon={Bell}>\r
            Notificações\r
          </Header.Item>\r
          <Header.Item href="#" icon={Settings}>\r
            Configurações\r
          </Header.Item>\r
        </Header.Content>\r
        <Header.Footer>\r
          <Header.Item href="#" icon={LifeBuoy}>\r
            Ajuda\r
          </Header.Item>\r
          <Button className="w-full" iconRight={LogOut}>\r
            Sair\r
          </Button>\r
        </Header.Footer>\r
      </Header.Menu>\r
    </Header.Root>
}`,...(p=(l=i.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const Y=["Default"];export{i as Default,Y as __namedExportsOrder,X as default};
