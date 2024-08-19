import{v as F,L as B,S as ue,T as pe,U as fe,V as be,W as ge,r as me,F as he,o as ye,X as ve,w as xe,x as we,y as Ce,m as _}from"./ClOLF6A3.js";function oe(e){var r,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=oe(e[r]))&&(o&&(o+=" "),o+=t);else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function ke(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=oe(e))&&(o&&(o+=" "),o+=r);return o}const D=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,ee=ke,ze=(e,r)=>t=>{var o;if((r==null?void 0:r.variants)==null)return ee(e,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:a,defaultVariants:n}=r,i=Object.keys(a).map(c=>{const d=t==null?void 0:t[c],h=n==null?void 0:n[c];if(d===null)return null;const m=D(d)||D(h);return a[c][m]}),s=t&&Object.entries(t).reduce((c,d)=>{let[h,m]=d;return m===void 0||(c[h]=m),c},{}),u=r==null||(o=r.compoundVariants)===null||o===void 0?void 0:o.reduce((c,d)=>{let{class:h,className:m,...w}=d;return Object.entries(w).every(v=>{let[g,p]=v;return Array.isArray(p)?p.includes({...n,...s}[g]):{...n,...s}[g]===p})?[...c,h,m]:c},[]);return ee(e,i,u,t==null?void 0:t.class,t==null?void 0:t.className)};function Se(e){let r=!1,t;const o=pe(!0);return(...a)=>(r||(t=o.run(()=>e(...a)),r=!0),t)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;function ne(e){return e?e.flatMap(r=>r.type===he?ne(r.children):[r]):[]}const Ae=F({name:"PrimitiveSlot",inheritAttrs:!1,setup(e,{attrs:r,slots:t}){return()=>{var o,a;if(!t.default)return null;const n=ne(t.default()),i=n.findIndex(d=>d.type!==fe);if(i===-1)return n;const s=n[i];(o=s.props)==null||delete o.ref;const u=s.props?be(r,s.props):r;r.class&&(a=s.props)!=null&&a.class&&delete s.props.class;const c=ge(s,u);for(const d in u)d.startsWith("on")&&(c.props||(c.props={}),c.props[d]=u[d]);return n.length===1?c:(n[i]=c,n)}}}),Me=F({name:"Primitive",inheritAttrs:!1,props:{asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"div"}},setup(e,{attrs:r,slots:t}){const o=e.asChild?"template":e.as;return typeof o=="string"&&["area","img","input"].includes(o)?()=>B(o,r):o!=="template"?()=>B(e.as,r,{default:t.default}):()=>B(Ae,r,{default:t.default})}});ue({layersRoot:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set});Se(()=>me([]));function Ge(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}Ge();function se(e){var r,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(r=0;r<a;r++)e[r]&&(t=se(e[r]))&&(o&&(o+=" "),o+=t)}else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function Pe(){for(var e,r,t=0,o="",a=arguments.length;t<a;t++)(e=arguments[t])&&(r=se(e))&&(o&&(o+=" "),o+=r);return o}const X="-",Re=e=>{const r=Ie(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:i=>{const s=i.split(X);return s[0]===""&&s.length!==1&&s.shift(),ae(s,r)||je(i)},getConflictingClassGroupIds:(i,s)=>{const u=t[i]||[];return s&&o[i]?[...u,...o[i]]:u}}},ae=(e,r)=>{var i;if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),a=o?ae(e.slice(1),o):void 0;if(a)return a;if(r.validators.length===0)return;const n=e.join(X);return(i=r.validators.find(({validator:s})=>s(n)))==null?void 0:i.classGroupId},re=/^\[(.+)\]$/,je=e=>{if(re.test(e)){const r=re.exec(e)[1],t=r==null?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},Ie=e=>{const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return Te(Object.entries(e.classGroups),t).forEach(([n,i])=>{U(i,o,n,r)}),o},U=(e,r,t,o)=>{e.forEach(a=>{if(typeof a=="string"){const n=a===""?r:te(r,a);n.classGroupId=t;return}if(typeof a=="function"){if(Ne(a)){U(a(o),r,t,o);return}r.validators.push({validator:a,classGroupId:t});return}Object.entries(a).forEach(([n,i])=>{U(i,te(r,n),t,o)})})},te=(e,r)=>{let t=e;return r.split(X).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t},Ne=e=>e.isThemeGetter,Te=(e,r)=>r?e.map(([t,o])=>{const a=o.map(n=>typeof n=="string"?r+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([i,s])=>[r+i,s])):n);return[t,a]}):e,Ve=e=>{if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;const a=(n,i)=>{t.set(n,i),r++,r>e&&(r=0,o=t,t=new Map)};return{get(n){let i=t.get(n);if(i!==void 0)return i;if((i=o.get(n))!==void 0)return a(n,i),i},set(n,i){t.has(n)?t.set(n,i):a(n,i)}}},ie="!",Ee=e=>{const{separator:r,experimentalParseClassName:t}=e,o=r.length===1,a=r[0],n=r.length,i=s=>{const u=[];let c=0,d=0,h;for(let p=0;p<s.length;p++){let y=s[p];if(c===0){if(y===a&&(o||s.slice(p,p+n)===r)){u.push(s.slice(d,p)),d=p+n;continue}if(y==="/"){h=p;continue}}y==="["?c++:y==="]"&&c--}const m=u.length===0?s:s.substring(d),w=m.startsWith(ie),v=w?m.substring(1):m,g=h&&h>d?h-d:void 0;return{modifiers:u,hasImportantModifier:w,baseClassName:v,maybePostfixModifierPosition:g}};return t?s=>t({className:s,parseClassName:i}):i},We=e=>{if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r},Oe=e=>({cache:Ve(e.cacheSize),parseClassName:Ee(e),...Re(e)}),Le=/\s+/,Be=(e,r)=>{const{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:a}=r,n=[],i=e.trim().split(Le);let s="";for(let u=i.length-1;u>=0;u-=1){const c=i[u],{modifiers:d,hasImportantModifier:h,baseClassName:m,maybePostfixModifierPosition:w}=t(c);let v=!!w,g=o(v?m.substring(0,w):m);if(!g){if(!v){s=c+(s.length>0?" "+s:s);continue}if(g=o(m),!g){s=c+(s.length>0?" "+s:s);continue}v=!1}const p=We(d).join(":"),y=h?p+ie:p,x=y+g;if(n.includes(x))continue;n.push(x);const P=a(g,v);for(let A=0;A<P.length;++A){const N=P[A];n.push(y+N)}s=c+(s.length>0?" "+s:s)}return s};function _e(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=le(r))&&(o&&(o+=" "),o+=t);return o}const le=e=>{if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=le(e[o]))&&(t&&(t+=" "),t+=r);return t};function $e(e,...r){let t,o,a,n=i;function i(u){const c=r.reduce((d,h)=>h(d),e());return t=Oe(c),o=t.cache.get,a=t.cache.set,n=s,s(u)}function s(u){const c=o(u);if(c)return c;const d=Be(u,t);return a(u,d),d}return function(){return n(_e.apply(null,arguments))}}const f=e=>{const r=t=>t[e]||[];return r.isThemeGetter=!0,r},ce=/^\[(?:([a-z-]+):)?(.+)\]$/i,Ue=/^\d+\/\d+$/,Fe=new Set(["px","full","screen"]),Xe=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,qe=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Je=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Ke=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ze=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,k=e=>M(e)||Fe.has(e)||Ue.test(e),z=e=>G(e,"length",or),M=e=>!!e&&!Number.isNaN(Number(e)),$=e=>G(e,"number",M),j=e=>!!e&&Number.isInteger(Number(e)),He=e=>e.endsWith("%")&&M(e.slice(0,-1)),l=e=>ce.test(e),S=e=>Xe.test(e),Qe=new Set(["length","size","percentage"]),Ye=e=>G(e,Qe,de),De=e=>G(e,"position",de),er=new Set(["image","url"]),rr=e=>G(e,er,sr),tr=e=>G(e,"",nr),I=()=>!0,G=(e,r,t)=>{const o=ce.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1},or=e=>qe.test(e)&&!Je.test(e),de=()=>!1,nr=e=>Ke.test(e),sr=e=>Ze.test(e),ar=()=>{const e=f("colors"),r=f("spacing"),t=f("blur"),o=f("brightness"),a=f("borderColor"),n=f("borderRadius"),i=f("borderSpacing"),s=f("borderWidth"),u=f("contrast"),c=f("grayscale"),d=f("hueRotate"),h=f("invert"),m=f("gap"),w=f("gradientColorStops"),v=f("gradientColorStopPositions"),g=f("inset"),p=f("margin"),y=f("opacity"),x=f("padding"),P=f("saturate"),A=f("scale"),N=f("sepia"),q=f("skew"),J=f("space"),K=f("translate"),E=()=>["auto","contain","none"],W=()=>["auto","hidden","clip","visible","scroll"],O=()=>["auto",l,r],b=()=>[l,r],Z=()=>["",k,z],T=()=>["auto",M,l],H=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],V=()=>["solid","dashed","dotted","double","none"],Q=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],L=()=>["start","end","center","between","around","evenly","stretch"],R=()=>["","0",l],Y=()=>["auto","avoid","all","avoid-page","page","left","right","column"],C=()=>[M,l];return{cacheSize:500,separator:":",theme:{colors:[I],spacing:[k,z],blur:["none","",S,l],brightness:C(),borderColor:[e],borderRadius:["none","","full",S,l],borderSpacing:b(),borderWidth:Z(),contrast:C(),grayscale:R(),hueRotate:C(),invert:R(),gap:b(),gradientColorStops:[e],gradientColorStopPositions:[He,z],inset:O(),margin:O(),opacity:C(),padding:b(),saturate:C(),scale:C(),sepia:R(),skew:C(),space:b(),translate:b()},classGroups:{aspect:[{aspect:["auto","square","video",l]}],container:["container"],columns:[{columns:[S]}],"break-after":[{"break-after":Y()}],"break-before":[{"break-before":Y()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...H(),l]}],overflow:[{overflow:W()}],"overflow-x":[{"overflow-x":W()}],"overflow-y":[{"overflow-y":W()}],overscroll:[{overscroll:E()}],"overscroll-x":[{"overscroll-x":E()}],"overscroll-y":[{"overscroll-y":E()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",j,l]}],basis:[{basis:O()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",l]}],grow:[{grow:R()}],shrink:[{shrink:R()}],order:[{order:["first","last","none",j,l]}],"grid-cols":[{"grid-cols":[I]}],"col-start-end":[{col:["auto",{span:["full",j,l]},l]}],"col-start":[{"col-start":T()}],"col-end":[{"col-end":T()}],"grid-rows":[{"grid-rows":[I]}],"row-start-end":[{row:["auto",{span:[j,l]},l]}],"row-start":[{"row-start":T()}],"row-end":[{"row-end":T()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",l]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",l]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal",...L()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...L(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...L(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[x]}],px:[{px:[x]}],py:[{py:[x]}],ps:[{ps:[x]}],pe:[{pe:[x]}],pt:[{pt:[x]}],pr:[{pr:[x]}],pb:[{pb:[x]}],pl:[{pl:[x]}],m:[{m:[p]}],mx:[{mx:[p]}],my:[{my:[p]}],ms:[{ms:[p]}],me:[{me:[p]}],mt:[{mt:[p]}],mr:[{mr:[p]}],mb:[{mb:[p]}],ml:[{ml:[p]}],"space-x":[{"space-x":[J]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[J]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",l,r]}],"min-w":[{"min-w":[l,r,"min","max","fit"]}],"max-w":[{"max-w":[l,r,"none","full","min","max","fit","prose",{screen:[S]},S]}],h:[{h:[l,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[l,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[l,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[l,r,"auto","min","max","fit"]}],"font-size":[{text:["base",S,z]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",$]}],"font-family":[{font:[I]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",l]}],"line-clamp":[{"line-clamp":["none",M,$]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",k,l]}],"list-image":[{"list-image":["none",l]}],"list-style-type":[{list:["none","disc","decimal",l]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[y]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[y]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...V(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",k,z]}],"underline-offset":[{"underline-offset":["auto",k,l]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:b()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",l]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",l]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[y]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...H(),De]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Ye]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},rr]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[v]}],"gradient-via-pos":[{via:[v]}],"gradient-to-pos":[{to:[v]}],"gradient-from":[{from:[w]}],"gradient-via":[{via:[w]}],"gradient-to":[{to:[w]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[y]}],"border-style":[{border:[...V(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[y]}],"divide-style":[{divide:V()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:["",...V()]}],"outline-offset":[{"outline-offset":[k,l]}],"outline-w":[{outline:[k,z]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:Z()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[y]}],"ring-offset-w":[{"ring-offset":[k,z]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",S,tr]}],"shadow-color":[{shadow:[I]}],opacity:[{opacity:[y]}],"mix-blend":[{"mix-blend":[...Q(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Q()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",S,l]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[h]}],saturate:[{saturate:[P]}],sepia:[{sepia:[N]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[y]}],"backdrop-saturate":[{"backdrop-saturate":[P]}],"backdrop-sepia":[{"backdrop-sepia":[N]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",l]}],duration:[{duration:C()}],ease:[{ease:["linear","in","out","in-out",l]}],delay:[{delay:C()}],animate:[{animate:["none","spin","ping","pulse","bounce",l]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[A]}],"scale-x":[{"scale-x":[A]}],"scale-y":[{"scale-y":[A]}],rotate:[{rotate:[j,l]}],"translate-x":[{"translate-x":[K]}],"translate-y":[{"translate-y":[K]}],"skew-x":[{"skew-x":[q]}],"skew-y":[{"skew-y":[q]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",l]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",l]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":b()}],"scroll-mx":[{"scroll-mx":b()}],"scroll-my":[{"scroll-my":b()}],"scroll-ms":[{"scroll-ms":b()}],"scroll-me":[{"scroll-me":b()}],"scroll-mt":[{"scroll-mt":b()}],"scroll-mr":[{"scroll-mr":b()}],"scroll-mb":[{"scroll-mb":b()}],"scroll-ml":[{"scroll-ml":b()}],"scroll-p":[{"scroll-p":b()}],"scroll-px":[{"scroll-px":b()}],"scroll-py":[{"scroll-py":b()}],"scroll-ps":[{"scroll-ps":b()}],"scroll-pe":[{"scroll-pe":b()}],"scroll-pt":[{"scroll-pt":b()}],"scroll-pr":[{"scroll-pr":b()}],"scroll-pb":[{"scroll-pb":b()}],"scroll-pl":[{"scroll-pl":b()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",l]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[k,z,$]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},ir=$e(ar);function lr(...e){return ir(Pe(e))}const ur=F({__name:"Button",props:{variant:{},size:{},class:{},asChild:{type:Boolean},as:{default:"button"}},setup(e){const r=e;return(t,o)=>(ye(),ve(_(Me),{as:t.as,"as-child":t.asChild,class:Ce(_(lr)(_(cr)({variant:t.variant,size:t.size}),r.class))},{default:xe(()=>[we(t.$slots,"default")]),_:3},8,["as","as-child","class"]))}}),cr=ze("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",xs:"h-7 rounded px-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}});export{ur as _,lr as c};
