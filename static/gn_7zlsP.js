import{_ as H}from"./B97RbKva.js";import{_ as V}from"./0ggfPFEI.js";import{c as k,u as B,a as F,_ as I,b as S}from"./DTGy1qPX.js";import{f as m,o as a,c as n,r as C,n as $,u as o,g as T,h as A,a as e,t as c,i as w,b as s,w as l,d,F as y,j as D}from"./CkcXuyn4.js";import L from"./BBb_qssJ.js";import"./YIVelUiu.js";const R=m({__name:"CardHeader",props:{class:{}},setup(f){const _=f;return(i,t)=>(a(),n("div",{class:$(o(k)("flex flex-col gap-y-1.5 p-6",_.class))},[C(i.$slots,"default")],2))}}),q=m({__name:"CardTitle",props:{class:{}},setup(f){const _=f;return(i,t)=>(a(),n("h3",{class:$(o(k)("text-2xl font-semibold leading-none tracking-tight",_.class))},[C(i.$slots,"default")],2))}}),z={class:"bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between"},E={key:0,class:"flex items-center gap-2"},J={class:"text-xl font-bold"},O={class:"hidden md:flex items-center gap-6"},G={key:0,class:"bg-card min-h-screen p-10"},K={class:"max-w-4xl mx-auto space-y-6 bg-card p-6 rounded-lg border"},P={class:"flex flex-col md:flex-row gap-5"},Q={class:"flex flex-col w-1/2 gap-3"},U={class:"text-4xl font-bold"},W={class:"flex flex-col"},X={class:"text-lg mb-2 font-bold"},Y={class:"text-gray-500 dark:text-gray-400 mb-3 break-words max-w-full"},Z=e("div",{class:"flex flex-row gap-5 mt-auto"},[e("div",{class:"text-2xl font-bold"},"Rating")],-1),ee={class:"flex flex-row justify-between"},se={class:"text-3xl font-bold"},te={class:"flex flex-row gap-2 items-end pb-[2px]"},oe=e("div",{class:"font-bold"},"入坑時間",-1),le={class:"text-gray-500 dark:text-gray-400"},ae={class:"max-w-4xl mx-auto mt-5 space-y-3 flex flex-col"},ne=e("div",{class:"flex w-full items-center gap-3"},"Maimai Card",-1),ce={class:"flex flex-row"},de={class:"flex flex-col flex-1"},re={class:"flex flex-col flex-1"},_e={key:0},ie={class:"mb-2 mx-auto"},fe={key:1},ue=e("p",{class:"text-3xl font-bold"},"努力中～",-1),me=[ue],xe={class:"max-w-4xl mx-auto mt-5 space-y-3 flex flex-col"},pe=e("div",{class:"flex w-full items-center gap-3"},"想說的話",-1),he={class:"flex flex-row"},ve={class:"flex flex-col flex-1"},be={class:"text-xl font-bold mb-5"},ge=e("div",{class:"flex flex-col flex-1"},"123",-1),je=m({__name:"[id]",setup(f){const _=B(),i=T(),{data:t,error:we,refresh:M}=F("Member",async()=>{const{data:x,error:N}=await _.from("Member").select("*").eq("id",i.params.id);return x});return A(async()=>{await M()}),(x,N)=>{const r=H,u=V,p=q,h=R,v=I,b=S,g=L;return a(),n(y,null,[e("header",z,[o(t)&&o(t).length>0?(a(),n("div",E,[e("span",J,c(o(t)[0].name),1)])):w("",!0),e("nav",O,[s(r,{class:"hover:underline",to:"/"},{default:l(()=>[d("Home")]),_:1}),s(r,{class:"hover:underline",to:"/about"},{default:l(()=>[d("About")]),_:1}),s(r,{class:"hover:underline",to:"/member"},{default:l(()=>[d("Member")]),_:1}),s(r,{class:"hover:underline",to:"/journey"},{default:l(()=>[d("Journey")]),_:1}),s(r,{class:"hover:underline",to:"/other"},{default:l(()=>[d("Other")]),_:1})])]),o(t)?(a(),n("div",G,[e("div",K,[e("div",P,[s(u,{src:"/998.png",alt:"House Image",class:"w-full h-64 object-cover md:w-1/2 rounded-lg"}),e("div",Q,[e("div",U,c(o(t)[0].name),1),e("div",W,[e("div",X,c(o(t)[0].nickname),1),e("div",Y,c(o(t)[0].place),1)]),Z,e("div",ee,[e("div",se,c(o(t)[0].rating),1),e("div",te,[oe,e("div",le,c(o(t)[0].time),1)])])])])]),e("div",ae,[s(b,{class:"h-full"},{default:l(()=>[s(h,null,{default:l(()=>[s(p,null,{default:l(()=>[ne]),_:1})]),_:1}),s(v,null,{default:l(()=>[e("div",ce,[e("div",de,[e("p",null,[s(u,{src:"/998.png"})])]),e("div",re,[o(t)[0].plate[0]!="0"?(a(),n("div",_e,[(a(!0),n(y,null,D(o(t)[0].plate,j=>(a(),n("div",ie,[s(u,{src:`/${j}.png`,width:"320",height:"52"},null,8,["src"])]))),256))])):(a(),n("div",fe,me))])])]),_:1})]),_:1})]),e("div",xe,[s(b,{class:"h-full"},{default:l(()=>[s(h,null,{default:l(()=>[s(p,null,{default:l(()=>[pe]),_:1})]),_:1}),s(v,null,{default:l(()=>[e("div",he,[e("div",ve,[e("p",be,c(o(t)[0].words),1),e("p",null,[s(g,{name:"line-md:phone-call-loop",class:"mr-2"}),d(" phone ")]),e("p",null,[s(g,{name:"octicon:mail-16",class:"mr-2"}),s(r,{class:"hover:underline",to:o(t)[0].fb},{default:l(()=>[d(" Facebook ")]),_:1},8,["to"])])]),ge])]),_:1})]),_:1})])])):w("",!0)],64)}}});export{je as default};
