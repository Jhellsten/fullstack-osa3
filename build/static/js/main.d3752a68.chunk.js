(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){},19:function(e,t,n){e.exports=n(46)},46:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(3),u=n(13),c=n(14),o=n(17),i=n(15),l=n(18),m=n(0),p=n.n(m),h=n(16),f=n.n(h),v=n(4),d=n.n(v),b="http://localhost:3001/api/persons",w={getAll:function(){var e=Object(s.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get(b);case 3:return t=e.sent,e.abrupt("return",t);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(s.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.post(b,t);case 3:if(n=e.sent){e.next=6;break}return e.abrupt("return","Error");case 6:return e.abrupt("return",n);case 9:throw e.prev=9,e.t0=e.catch(0),new Error(e.t0);case 12:case"end":return e.stop()}},e,this,[[0,9]])}));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(s.a)(r.a.mark(function e(t,n){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.put("".concat(b,"/").concat(t),n);case 3:if(a=e.sent){e.next=6;break}return e.abrupt("return","Error");case 6:return e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(0),new Error(e.t0);case 12:case"end":return e.stop()}},e,this,[[0,9]])}));return function(t,n){return e.apply(this,arguments)}}(),del:function(){var e=Object(s.a)(r.a.mark(function e(t,n){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.delete("".concat(b,"/").concat(t),n);case 3:if(a=e.sent){e.next=6;break}return e.abrupt("return","Error");case 6:return e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(0),new Error(e.t0);case 12:case"end":return e.stop()}},e,this,[[0,9]])}));return function(t,n){return e.apply(this,arguments)}}()},k=function(e){return p.a.createElement("div",null,p.a.createElement("h2",null,"Lis\xe4\xe4 uusi"),p.a.createElement("div",null,"nimi: ",p.a.createElement("input",{value:e.newName,onChange:e.handleNameChange,placeholder:"Sy\xf6t\xe4 nimi"})),"puhelinnumero: ",p.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange,placeholder:"Sy\xf6t\xe4 numero"}),p.a.createElement("div",null,p.a.createElement("button",{type:"submit"},"lis\xe4\xe4")))},E=function(e){return p.a.createElement("div",null,p.a.createElement("h2",null,"Puhelinluettelo"),p.a.createElement("div",null,"Rajaa n\xe4ytett\xe4vi\xe4: ",p.a.createElement("input",{value:e.etsittava,onChange:e.handleEtsittavaChange,placeholder:"Sy\xf6t\xe4 nimi"})))},g=(n(12),function(e){var t=e.failure,n=e.success;return null===t&&null===n?null:null!==n&&null===t?p.a.createElement("div",{className:"success"},n):null!==t&&null===n?p.a.createElement("div",{className:"error"},t):null}),x=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e))).lisaaHenkilo=function(){var e=Object(s.a)(r.a.mark(function e(t){var a,s,u,c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a={name:n.state.newName,number:n.state.newNumber},s=function(e){return n.state.persons.filter(function(t){return t.name.toLowerCase()===e.toLowerCase()})}(a.name),e.prev=4,!(s.length>0)){e.next=27;break}if(!window.confirm("".concat(s[0].name," on jo luettelossa, korvataanko vanha numero uudella?"))){e.next=25;break}if(e.prev=7,!n.state.persons.filter(function(e){return e.number===a.number})){e.next=13;break}return n.setState({error:"Numero on jo olemassa"}),setTimeout(function(){n.setState({error:null})},5e3),e.abrupt("return",{error:"Numero on jo olemassa"});case 13:return e.next=15,w.update(s[0].id,a);case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(7),n.setState({error:e.t0.message}),setTimeout(function(){n.setState({error:null})},5e3);case 21:return e.next=23,w.getAll();case 23:u=e.sent,n.setState({persons:u.data,newName:"",newNumber:"",success:"Henkilo '".concat(a.name,"' numero on p\xe4ivitetty palvelimelle")});case 25:e.next=42;break;case 27:return e.prev=27,e.next=30,w.create(a);case 30:e.next=36;break;case 32:e.prev=32,e.t1=e.catch(27),n.setState({error:e.t1.message}),setTimeout(function(){n.setState({error:null})},5e3);case 36:return e.next=38,w.getAll();case 38:c=e.sent,console.log(c.data),n.setState({persons:c.data,newName:"",newNumber:"",success:"Henkilo '".concat(a.name,"' on lis\xe4tty palvelimelle")}),setTimeout(function(){n.setState({success:null})},5e3);case 42:e.next=49;break;case 44:e.prev=44,e.t2=e.catch(4),console.log(e.t2),n.setState({error:"Henkilo '".concat(a.name,"' on jo valitettavasti poistettu palvelimelta")}),setTimeout(function(){n.setState({error:null})},5e3);case 49:case"end":return e.stop()}},e,this,[[4,44],[7,17],[27,32]])}));return function(t){return e.apply(this,arguments)}}(),n.poistaHenkilo=function(){var e=Object(s.a)(r.a.mark(function e(t){var a,s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.state.persons.filter(function(e){return e.id===t}),!window.confirm("Poistetaanko ".concat(a[0].name))){e.next=18;break}return e.prev=2,e.next=5,w.del(t);case 5:e.next=12;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0.message),n.setState({error:e.t0.message}),setTimeout(function(){n.setState({error:null})},5e3);case 12:(s=n.state.persons).splice(s.findIndex(function(e){return e[0]===t}),1),n.setState({persons:s,error:"Henkilo '".concat(a[0].name,"' on poistettu palvelimelta")}),setTimeout(function(){n.setState({success:null})},5e3),e.next=19;break;case 18:n.setState({error:"Ei poistettu"});case 19:case"end":return e.stop()}},e,this,[[2,7]])}));return function(t){return e.apply(this,arguments)}}(),n.handleNameChange=function(e){n.setState({newName:e.target.value})},n.handleNumberChange=function(e){n.setState({newNumber:e.target.value})},n.handleEtsittavaChange=function(e){n.setState({etsittava:e.target.value})},n.state={persons:[],newName:"",newNumber:"",etsittava:"",error:null,success:null},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.getAll();case 2:t=e.sent,this.setState({persons:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.persons.filter(function(t){return t.name.toLowerCase().indexOf(e.state.etsittava.toLowerCase())>-1});return p.a.createElement("div",null,p.a.createElement(g,{failure:this.state.error,success:this.state.success}),p.a.createElement(E,{etsittava:this.state.etsittava,handleEtsittavaChange:this.handleEtsittavaChange}),p.a.createElement("form",{onSubmit:this.lisaaHenkilo},p.a.createElement(k,{newName:this.state.newName,newNumber:this.state.newNumber,handleNameChange:this.handleNameChange,handleNumberChange:this.handleNumberChange})),p.a.createElement("h2",null,"Numerot"),p.a.createElement("ul",null,t.map(function(t){return p.a.createElement("li",{key:t.id},t.name," ",t.number," ",p.a.createElement("button",{onClick:function(){return e.poistaHenkilo(t.id)},type:"submit"},"poista"))})),p.a.createElement("div",null,"debug: ",this.state.newName))}}]),t}(p.a.Component);f.a.render(p.a.createElement(x,null),document.getElementById("root"))}},[[19,2,1]]]);
//# sourceMappingURL=main.d3752a68.chunk.js.map