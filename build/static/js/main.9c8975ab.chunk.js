(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),l=t.n(u),c=(t(19),t(2)),o=function(e){var n=e.person,t=e.removePerson;return r.a.createElement("li",null,n.name," ",n.number,r.a.createElement("button",{onClick:t},"delete"))},m=t(3),i=t.n(m),d="https://agile-springs-32499.herokuapp.com/api/persons",s=function(){return i.a.get(d).then((function(e){return e.data}))},f=function(e){return i.a.post(d,e).then((function(e){return e.data}))},h=function(e){return i.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},b=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"success"},n)},E=function(e){var n=e.addName;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},p=function(e){var n=e.newName,t=e.handleNameChange,a=e.newNumber,u=e.handleNumberChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Name: ",r.a.createElement("input",{value:n,onChange:t})),r.a.createElement(v,{newNumber:a,handleNumberChange:u}))},v=function(e){var n=e.newNumber,t=e.handleNumberChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Number: ",r.a.createElement("input",{value:n,onChange:t})))},g=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],u=n[1],l=Object(a.useState)(""),m=Object(c.a)(l,2),i=m[0],d=m[1],v=Object(a.useState)(""),g=Object(c.a)(v,2),N=g[0],w=g[1],j=Object(a.useState)(null),C=Object(c.a)(j,2),O=C[0],k=C[1];Object(a.useEffect)((function(){s().then((function(e){u(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(b,{message:O}),r.a.createElement("h3",null,"Add a new"),r.a.createElement(p,{newName:i,handleNameChange:function(e){d(e.target.value)},newNumber:N,handleNumberChange:function(e){w(e.target.value)}}),r.a.createElement(E,{addName:function(e){e.preventDefault();var n=t.filter((function(e){return e.name===i})),a={name:i,number:N};0===n.length?(f(a).then((function(e){console.log("nameobj ",e),u(t.concat(e)),d(""),w("")})),k("Added ".concat(a.name," ")),setTimeout((function(){k(null)}),5e3)):window.alert("".concat(i," is already added to phonebook"))}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement("ul",null,t.map((function(e){return r.a.createElement(o,{key:e.name,person:e,removePerson:function(){return function(e){var n=t.find((function(n){return n.id===e}));if(window.confirm("Delete ".concat(n.name,"?"))){k("Person ".concat(n.name," deleted")),setTimeout((function(){k(null)}),5e3);var a=t.filter((function(e){return e!==n}));u(a),h(e)}}(e.id)}})}))))};l.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.9c8975ab.chunk.js.map