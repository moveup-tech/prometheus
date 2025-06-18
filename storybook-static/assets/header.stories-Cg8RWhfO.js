import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{c as x}from"./index-CQJnhAbd.js";import{M as r,S as M}from"./settings-Bk1XCb43.js";import{A as a}from"./index-DruT2nvP.js";import{T as i}from"./index-CWVClC3q.js";import{B as j}from"./index-DmTBLXOd.js";import{H as I}from"./index-BRgwz2oW.js";import{c as f}from"./createLucideIcon-BT4tydPZ.js";import{U as c,B as l}from"./user-Cw07F8sO.js";import{L as y}from"./life-buoy-BXarWrHS.js";import"./index-C9rmetsa.js";import"./index-C8beOrku.js";import"./index-BuZeDFlD.js";import"./index-BEn-qc9j.js";import"./index-CFGT8jr2.js";import"./index-BUIDNy1Y.js";import"./index-wgz3LQUQ.js";import"./index-BroPwuUX.js";import"./floating-ui.react-dom-DKjcifLt.js";import"./index-De76eAE3.js";import"./Combination-D8i3ZibE.js";const H=x({base:"w-24"});function h({className:n,...t}){return e.jsx("img",{className:H({className:n}),...t})}h.__docgenInfo={description:"",methods:[],displayName:"Image"};const N=x({base:"fixed left-0 top-0 w-full bg-zinc-950"});function p({children:n,className:t,...g}){return e.jsx("header",{className:N({className:t}),...g,children:e.jsx("div",{className:"m-auto flex w-full max-w-7xl items-center justify-between p-4",children:n})})}p.__docgenInfo={description:"",methods:[],displayName:"Root"};const s={Root:p,Image:h},R=""+new URL("logo-DxcCNuk3.svg",import.meta.url).href;/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=f("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=f("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),K={component:s.Root,title:"Surfaces/Header",tags:["autodocs"]},o={render:({...n})=>e.jsxs(s.Root,{...n,children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s.Image,{src:R,alt:"Super Festval"}),e.jsxs(r.Root,{children:[e.jsx(r.Trigger,{children:e.jsx(b,{size:24,className:"text-zinc-50"})}),e.jsxs(r.Portal,{children:[e.jsx(r.Header,{children:e.jsx(I,{children:"Indicações RH"})}),e.jsxs(r.Content,{children:[e.jsx(r.Item,{href:"#",icon:c,className:"rounded-t",children:"Home"}),e.jsx(r.Item,{href:"#",icon:l,className:"rounded-b",children:"Indicações"})]})]})]})]}),e.jsxs(r.Root,{children:[e.jsx(r.Trigger,{children:e.jsx(a,{image:"https://placehold.co/600x400",username:"User"})}),e.jsxs(r.Portal,{children:[e.jsxs(r.Header,{children:[e.jsx(a,{image:"https://placehold.co/600x400",username:"User"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx(i,{as:"strong",children:"Jhon Doe"}),e.jsx(i,{size:"xs",as:"small",children:"Administrador"})]})]}),e.jsxs(r.Content,{children:[e.jsx(r.Item,{href:"#",icon:c,children:"Perfil"}),e.jsx(r.Item,{href:"#",icon:l,children:"Notificações"}),e.jsx(r.Item,{href:"#",icon:M,children:"Configurações"})]}),e.jsxs(r.Footer,{children:[e.jsx(r.Item,{href:"#",icon:y,children:"Ajuda"}),e.jsx(j,{iconLeft:v,className:"w-full rounded-none rounded-b bg-primary-dark/25 text-yellow-800 hover:bg-primary-dark/50",children:"Sair"})]})]})]})]})};var m,d,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => <Header.Root {...rest}>\r
      <div className="flex items-center gap-4">\r
        <Header.Image src={Logo} alt="Super Festval" />\r
        <Menu.Root>\r
          <Menu.Trigger>\r
            <MenuIcon size={24} className="text-zinc-50" />\r
          </Menu.Trigger>\r
\r
          <Menu.Portal>\r
            <Menu.Header>\r
              <Heading>Indicações RH</Heading>\r
            </Menu.Header>\r
            <Menu.Content>\r
              <Menu.Item href="#" icon={User} className="rounded-t">\r
                Home\r
              </Menu.Item>\r
              <Menu.Item href="#" icon={Bell} className="rounded-b">\r
                Indicações\r
              </Menu.Item>\r
            </Menu.Content>\r
          </Menu.Portal>\r
        </Menu.Root>\r
      </div>\r
\r
      <Menu.Root>\r
        <Menu.Trigger>\r
          <Avatar image="https://placehold.co/600x400" username="User" />\r
        </Menu.Trigger>\r
\r
        <Menu.Portal>\r
          <Menu.Header>\r
            <Avatar image="https://placehold.co/600x400" username="User" />\r
            <div className="flex flex-col">\r
              <Text as="strong">Jhon Doe</Text>\r
              <Text size="xs" as="small">\r
                Administrador\r
              </Text>\r
            </div>\r
          </Menu.Header>\r
          <Menu.Content>\r
            <Menu.Item href="#" icon={User}>\r
              Perfil\r
            </Menu.Item>\r
            <Menu.Item href="#" icon={Bell}>\r
              Notificações\r
            </Menu.Item>\r
            <Menu.Item href="#" icon={Settings}>\r
              Configurações\r
            </Menu.Item>\r
          </Menu.Content>\r
          <Menu.Footer>\r
            <Menu.Item href="#" icon={LifeBuoy}>\r
              Ajuda\r
            </Menu.Item>\r
            <Button iconLeft={LogOut} className="w-full rounded-none rounded-b bg-primary-dark/25 text-yellow-800 hover:bg-primary-dark/50">\r
              Sair\r
            </Button>\r
          </Menu.Footer>\r
        </Menu.Portal>\r
      </Menu.Root>\r
    </Header.Root>
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const Q=["Default"];export{o as Default,Q as __namedExportsOrder,K as default};
