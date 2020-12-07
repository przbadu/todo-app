(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c(1),r=c.n(o),i=c(8),l=c.n(i),s=c(7),a=c(6),d=c(2),u=c.p+"static/media/icon-sun.910b1f9a.svg",j=c.p+"static/media/icon-moon.6c03114b.svg";function b(e){var t=e.theme,c=e.toggleTheme;return Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("h1",{children:"Todo"}),Object(n.jsx)("img",{src:"light"===t?j:u,alt:"light",width:"32",height:"32",className:"light-icon",onClick:c})]})}function h(){return Object(n.jsxs)("footer",{children:[Object(n.jsx)("p",{children:"Drag and drop to reorder list"}),Object(n.jsxs)("p",{children:["Challenge by"," ",Object(n.jsx)("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank",children:"Frontend Mentor"}),". Coded by ",Object(n.jsx)("a",{href:"https://przbadu.github.io",children:"przbadu"}),"."]})]})}function f(e){var t=e.addTodo,c=e.toggleAllChecked,r=e.toggleAll,i=Object(o.useState)(""),l=Object(d.a)(i,2),s=l[0],a=l[1];return Object(n.jsxs)("div",{className:"add-todo-container",children:[Object(n.jsx)("form",{children:Object(n.jsxs)("label",{className:"custom-checkbox",children:[Object(n.jsx)("input",{type:"checkbox",defaultChecked:c,onClick:function(){return r()}}),Object(n.jsx)("span",{className:"checkmark"})]})}),Object(n.jsx)("input",{type:"text",placeholder:"What's on your mind...",value:s,onKeyPress:function(e){13===e.charCode&&e.target.value&&(t(s),a(""))},onChange:function(e){return a(e.target.value)},autoFocus:!0})]})}function m(e){var t=e.todos,c=e.filterKey,o=e.setFilterkey,r=e.clearCompleted,i=function(e){return c===e?"active":""};return Object(n.jsxs)("div",{className:"todo-filters-container",children:[Object(n.jsxs)("div",{className:"items-count",children:[t.filter((function(e){return!e.completed})).length," items left"]}),Object(n.jsxs)("div",{className:"filters",children:[Object(n.jsx)("a",{href:"#",onClick:function(){return o("All")},className:i("All"),children:"All"}),Object(n.jsx)("a",{href:"#",onClick:function(){return o("Active")},className:i("Active"),children:"Active"}),Object(n.jsx)("a",{href:"#",onClick:function(){return o("Completed")},className:i("Completed"),children:"Completed"})]}),Object(n.jsx)("a",{href:"#",onClick:r,children:"Clear completed"})]})}function O(){return Object(n.jsx)("div",{className:"todo-list-item",style:{paddingBottom:10},children:Object(n.jsx)("label",{children:"Your list is empty"})})}var p=c.p+"static/media/icon-cross.6ee81d30.svg";function g(e){var t=e.todo,c=e.toggleCompleted,r=e.deleteTodo,i=Object(o.useState)(!1),l=Object(d.a)(i,2),s=l[0],a=l[1];return Object(n.jsxs)("div",{className:"todo-list-item",onMouseEnter:function(){return a(!0)},onMouseLeave:function(){return a(!1)},children:[Object(n.jsxs)("label",{className:"custom-checkbox ".concat(t.completed?"active":""),children:[t.title,Object(n.jsx)("input",{type:"checkbox",checked:t.completed,onClick:function(){return c(t)},onChange:function(){return c(t)}}),Object(n.jsx)("span",{className:"checkmark"})]}),s&&Object(n.jsx)("a",{href:"#",className:"delete",onClick:function(){return r(t)},children:Object(n.jsx)("img",{src:p,alt:"Delete"})})]})}function x(e){var t=e.todos,c=e.toggleCompleted,o=e.filterKey,r=e.deleteTodo,i=function(){switch(o){case"Active":return t.filter((function(e){return!e.completed}));case"Completed":return t.filter((function(e){return e.completed}));default:return t}};return i().length<=0?Object(n.jsx)("div",{className:"todo-list-container",children:Object(n.jsx)(O,{})}):Object(n.jsx)("div",{className:"todo-list-container",children:i().map((function(e){return Object(n.jsx)(g,{todo:e,toggleCompleted:c,deleteTodo:r},e.id)}))})}var v=function(){var e=Object(o.useState)("dark"),t=Object(d.a)(e,2),c=t[0],r=t[1],i=Object(o.useState)([]),l=Object(d.a)(i,2),u=l[0],j=l[1],O=Object(o.useState)("All"),p=Object(d.a)(O,2),g=p[0],v=p[1],C=Object(o.useState)(!1),k=Object(d.a)(C,2),N=k[0],y=k[1];return Object(n.jsx)("div",{className:"container-wrapper ".concat(c),children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(b,{theme:c,toggleTheme:function(){return r("dark"===c?"light":"dark")}}),Object(n.jsx)(f,{addTodo:function(e){j([].concat(Object(a.a)(u),[{id:Date.now(),title:e,completed:!1}]))},toggleAllChecked:N,toggleAll:function(){var e=u.map((function(e){return e.completed=!N,e}));j(e),y(!N)}}),Object(n.jsx)(x,{todos:u,toggleCompleted:function(e){return function(e){var t=Object(a.a)(u),c=u.findIndex((function(t){return t.id===e.id}));t[c]=Object(s.a)(Object(s.a)({},t[c]),{},{completed:!t[c].completed}),j(t)}(e)},filterKey:g,deleteTodo:function(e){var t=u.filter((function(t){if(t.id!==e.id)return t}));j(t)}}),Object(n.jsx)(m,{todos:u,filterKey:g,setFilterkey:v,clearCompleted:function(){var e=u.filter((function(e){if(!e.completed)return e}));j(e)}}),Object(n.jsx)(h,{})]})})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),o(e),r(e),i(e)}))};c(14);l.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root")),C()}},[[15,1,2]]]);
//# sourceMappingURL=main.6bce0b12.chunk.js.map