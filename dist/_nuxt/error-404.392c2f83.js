import{f as r,C as l,o as c,a as d,b as n,x as t,A as s,t as f,D as m,F as u,K as x,E as h}from"./entry.e1738a70.js";const p={class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},_={class:"max-w-520px text-center z-20"},g=["textContent"],b=["textContent"],w={class:"w-full flex items-center justify-center"},y={__name:"error-404",props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:Number,default:404},statusMessage:{type:String,default:"Not Found"},description:{type:String,default:"Sorry, the page you are looking for could not be found."},backHome:{type:String,default:"Вернуться на главную"}},setup(e){const o=e;return l({title:`${o.statusCode} - ${o.statusMessage} | ${o.appName}`,script:[],style:[{children:'*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}'}]}),(k,S)=>{const a=x,i=h;return c(),d(u,null,[n(a),t("div",p,[t("div",_,[t("h1",{class:"text-8xl sm:text-10xl font-medium mb-8",textContent:s(e.statusCode)},null,8,g),t("p",{class:"text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight",textContent:s(e.description)},null,8,b),t("div",w,[n(i,{to:"/",class:"button"},{default:f(()=>[m(s(e.backHome),1)]),_:1})])])])],64)}}},C=r(y,[["__scopeId","data-v-a20b30aa"]]);export{C as default};
