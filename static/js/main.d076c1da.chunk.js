(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(4),a=n.n(s),i=(n(13),n(2)),o=n(0),h=function(e){return Object(o.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(o.jsx)("img",{alt:"robot",src:"https://robohash.org/".concat(e.date).concat(e.id,"?200x200")}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsx)("p",{children:e.email})]})]})},j=function(e){var t=e.robots,n=e.date;return Object(o.jsx)("div",{children:t.map((function(e,c){return Object(o.jsx)(h,{id:t[c].id,name:t[c].name,email:t[c].email,date:n},c)}))})},b=function(e){var t=e.searchChange;return Object(o.jsx)("div",{className:"pa2",children:Object(o.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search robots",onChange:t})})},l=function(e){return Object(o.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"},children:e.children})},d=n(5),u=n(6),O=n(8),f=n(7),p=function(e){Object(O.a)(n,e);var t=Object(f.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).state={hasError:!1},c}return Object(u.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(o.jsx)("h1",{children:"Opps. That is not good..."}):this.props.children}}]),n}(r.a.Component);n(15);var x=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),a=Object(i.a)(s,2),h=a[0],d=a[1],u=Object(c.useState)(Date()),O=Object(i.a)(u,1)[0],f=function(e){d(e.target.value)};Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]);var x=n.filter((function(e){return e.name.toLowerCase().includes(h.toLowerCase())}));return n.length?Object(o.jsxs)("div",{className:"tc",children:[Object(o.jsx)("h1",{className:"f1",children:"Robofriends"}),Object(o.jsx)(b,{searchChange:f}),Object(o.jsx)(l,{children:Object(o.jsx)(p,{children:Object(o.jsx)(j,{robots:x,date:O})})})]}):Object(o.jsxs)("div",{className:"tc",children:[Object(o.jsx)("h1",{className:"f2",children:"Robofriends"}),Object(o.jsx)(b,{searchChange:f}),Object(o.jsx)("h1",{className:"f3",children:"Loading..."})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};n(16);a.a.render(Object(o.jsx)(x,{}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.d076c1da.chunk.js.map