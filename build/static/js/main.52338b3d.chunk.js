(this["webpackJsonpreact-redux-tutorial"]=this["webpackJsonpreact-redux-tutorial"]||[]).push([[0],{30:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(10),d=c.n(n),i=c(5),r=c(12),j=c(17),l=c(11),o="covid/home/ADD_CASES",h=[],b=function(){return function(e){fetch("https://corona-api.com/countries").then((function(e){return e.json()})).then((function(t){return t.data.forEach((function(t){e({type:o,payload:t})}))}))}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;return t.type===o?[].concat(Object(l.a)(e),[t.payload]):e},x=Object(r.b)({covidReducer:O}),u=Object(r.c)(x,Object(r.a)(j.a)),p=c(8),m=c(3),v=c(15),N=c(18),f=c(2);function _(){return Object(f.jsx)("div",{className:"header",children:Object(f.jsxs)("nav",{className:"nav",children:[Object(f.jsxs)("div",{className:"lessThan",children:[Object(f.jsx)(p.b,{to:"/",children:Object(f.jsx)(v.a,{className:"sign"})}),Object(f.jsx)("h1",{className:"logo",children:"2021"})]}),Object(f.jsx)("h3",{children:"Covid Data"}),Object(f.jsx)("div",{className:"mic",children:Object(f.jsx)(v.b,{})}),Object(f.jsx)("div",{className:"settings",children:Object(f.jsx)(N.a,{})})]})})}var y=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.covidReducer}));Object(a.useEffect)((function(){0===t.length&&e(b())}),[]);var c=t.map((function(e){return Object(f.jsxs)("div",{className:"country-name",id:"country-n",children:[Object(f.jsx)("div",{className:"country-c",children:Object(f.jsx)(p.b,{className:"country-d",to:"/".concat(e.code),children:e.name})}),Object(f.jsx)("div",{className:"recovered",children:Object(f.jsxs)("div",{children:["Recovered:\xa0",e.latest_data.recovered]})})]},e.code)}));return Object(f.jsxs)("div",{className:"main-c",children:[Object(f.jsx)("div",{className:"country-heading",children:Object(f.jsx)("h2",{className:"line-1 anim-typewriter",children:"Active Corona Cases "})}),Object(f.jsx)("input",{className:"search",type:"text",id:"input-country",placeholder:"Country name..",onKeyDown:function(){var e=document.getElementById("input-country").value.toUpperCase(),t=document.getElementsByClassName("country-name");Object(l.a)(t).forEach((function(t){var c=t;(c.textContent||c.innerText).toUpperCase().indexOf(e)>-1?c.style.display="":c.style.display="none"}))}}),Object(f.jsx)("div",{className:"countries-con",children:c})]})};function C(){var e,t,c,a,s,n,d,r,j,l;Object(i.c)((function(e){return e.covidReducer})).map((function(i){return i.code===window.location.pathname.slice(1)&&(e=i.name,n=i.updated_at,t=i.population,c=i.latest_data.confirmed,a=i.latest_data.critical,s=i.latest_data.deaths,d=i.latest_data.calculated.cases_per_million_population,r=i.latest_data.calculated.death_rate,j=i.latest_data.calculated.death_rate,l=i.latest_data.calculated.recovered_vs_death_ratio),"Data not found"}));return Object(f.jsxs)("div",{className:"main-c",children:[Object(f.jsx)("div",{className:"details-country"}),Object(f.jsx)("div",{className:"name",children:Object(f.jsx)("h2",{children:e})}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{className:"updated-data",children:Object(f.jsx)("span",{className:"title",children:"Statistics:"})}),Object(f.jsxs)("div",{className:"data",children:[Object(f.jsx)("span",{children:"Updated at:"}),Object(f.jsx)("span",{children:n})]}),Object(f.jsxs)("div",{className:"data",children:[Object(f.jsx)("span",{children:"Population:"}),Object(f.jsx)("span",{children:t})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{className:"title",children:"Latest Data:"}),Object(f.jsxs)("div",{className:"data",children:[Object(f.jsx)("span",{children:"Deaths:"}),Object(f.jsx)("span",{children:s})]}),Object(f.jsxs)("div",{className:"data",children:[Object(f.jsx)("span",{children:"Confirmed Cases:"}),Object(f.jsx)("span",{children:c})]}),Object(f.jsxs)("div",{className:"data",children:[Object(f.jsx)("span",{children:"Critical:"}),Object(f.jsx)("span",{children:a})]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{className:"title",children:"Calculated:"}),Object(f.jsxs)("div",{className:"data",children:[Object(f.jsx)("span",{children:"Death_Rate:"}),Object(f.jsx)("span",{children:r})]}),Object(f.jsxs)("div",{className:"data",children:[Object(f.jsx)("span",{children:"Recovery_Rate:"}),Object(f.jsx)("span",{children:j})]}),Object(f.jsxs)("div",{className:"data",children:[Object(f.jsx)("span",{children:"Recovered_vs_death_ratio:"}),Object(f.jsx)("span",{children:l})]}),Object(f.jsxs)("div",{className:"data",children:[Object(f.jsx)("span",{children:"Cases_per_million_population:"}),Object(f.jsx)("span",{children:d})]})]})]})]})}c(30);var g=function(){return Object(f.jsxs)(p.a,{children:[Object(f.jsx)("header",{children:Object(f.jsx)(_,{})}),Object(f.jsxs)(m.c,{children:[Object(f.jsx)(m.a,{path:"/",element:Object(f.jsx)(y,{})}),Object(f.jsx)(m.a,{path:"/*",element:Object(f.jsx)(C,{})})]})]})};d.a.render(Object(f.jsx)(i.a,{store:u,children:Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(g,{})})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.52338b3d.chunk.js.map