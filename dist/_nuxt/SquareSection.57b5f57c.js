import{f as o,o as _,a as c,x as e,A as s,G as i,B as l}from"./entry.e1738a70.js";const r={name:"SquareSection",props:{title:{type:String,default:""},text:{type:String,default:""},img:{type:String,default:""},imgAlt:{type:String,default:""},flexDrColRew:{type:Boolean,default:!1},mt100:{type:Boolean,default:!1}},computed:{className(){return{"square-section__flex-dr-col-rew":this.flexDrColRew,"square-section__mt100":this.mt100}}}},d={class:"square-section"},u={class:"square-section__image"},f=["src","alt"],m={class:"square-section__content"},g={class:"square-section__title"},p={class:"square-section__text"};function q(a,x,t,h,S,n){return _(),c("section",d,[e("div",{class:l(["square-section__inner",n.className])},[e("div",u,[e("img",{class:"square-section__image-img",src:`../img/${t.img}`,alt:t.imgAlt},null,8,f)]),e("div",m,[e("h3",g,s(t.title),1),e("p",p,s(t.text),1),i(a.$slots,"default",{},void 0,!0)])],2)])}const v=o(r,[["render",q],["__scopeId","data-v-3a51ffc3"]]);export{v as _};
