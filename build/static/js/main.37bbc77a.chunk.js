(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){},19:function(e,t,n){e.exports=n(46)},46:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(3),u=n(13),c=n(14),o=n(17),i=n(15),l=n(18),m=n(0),p=n.n(m),h=n(16),f=n.n(h),v=n(4),d=n.n(v),b="http://localhost:3001/api/persons",w={getAll:function(){var e=Object(s.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get(b);case 3:return t=e.sent,e.abrupt("return",t);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(s.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.post(b,t);case 3:if(n=e.sent){e.next=6;break}return e.abrupt("return","Error");case 6:return e.abrupt("return",n);case 9:throw e.prev=9,e.t0=e.catch(0),new Error(e.t0);case 12:case"end":return e.stop()}},e,this,[[0,9]])}));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(s.a)(r.a.mark(function e(t,n){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.put("".concat(b,"/").concat(t),n);case 3:if(a=e.sent){e.next=6;break}return e.abrupt("return","Error");case 6:return e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(0),new Error(e.t0);case 12:case"end":return e.stop()}},e,this,[[0,9]])}));return function(t,n){return e.apply(this,arguments)}}(),del:function(){var e=Object(s.a)(r.a.mark(function e(t,n){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.delete("".concat(b,"/").concat(t),n);case 3:if(a=e.sent){e.next=6;break}return e.abrupt("return","Error");case 6:return e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(0),new Error(e.t0);case 12:case"end":return e.stop()}},e,this,[[0,9]])}));return function(t,n){return e.apply(this,arguments)}}()},k=function(e){return p.a.createElement("div",null,p.a.createElement("h2",null,"Lis\xe4\xe4 uusi"),p.a.createElement("div",null,"nimi: ",p.a.createElement("input",{value:e.newName,onChange:e.handleNameChange,placeholder:"Sy\xf6t\xe4 nimi"})),"puhelinnumero: ",p.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange,placeholder:"Sy\xf6t\xe4 numero"}),p.a.createElement("div",null,p.a.createElement("button",{type:"submit"},"lis\xe4\xe4")))},E=function(e){return p.a.createElement("div",null,p.a.createElement("h2",null,"Puhelinluettelo"),p.a.createElement("div",null,"Rajaa n\xe4ytett\xe4vi\xe4: ",p.a.createElement("input",{value:e.etsittava,onChange:e.handleEtsittavaChange,placeholder:"Sy\xf6t\xe4 nimi"})))},g=(n(12),function(e){var t=e.failure,n=e.success;return null===t&&null===n?null:null!==n&&null===t?p.a.createElement("div",{className:"success"},n):null!==t&&null===n?p.a.createElement("div",{className:"error"},t):null}),x=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e))).lisaaHenkilo=function(){var e=Object(s.a)(r.a.mark(function e(t){var a,s,u,c,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a={name:n.state.newName,number:n.state.newNumber},s=function(e){return n.state.persons.filter(function(t){return t.name.toLowerCase()===e.toLowerCase()})}(a.name),u=n.state.persons.filter(function(e){return e.number===parseInt(n.state.newNumber)}),console.log(u),!(u.length>0)){e.next=10;break}return n.setState({error:"Numero on jo olemassa"}),setTimeout(function(){n.setState({error:null})},5e3),e.abrupt("return",{error:"Numero on jo olemassa"});case 10:if(e.prev=10,!(s.length>0)){e.next=28;break}if(!window.confirm("".concat(s[0].name," on jo luettelossa, korvataanko vanha numero uudella?"))){e.next=26;break}return e.prev=13,e.next=16,w.update(s[0].id,a);case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(13),n.setState({error:e.t0.message}),setTimeout(function(){n.setState({error:null})},5e3);case 22:return e.next=24,w.getAll();case 24:c=e.sent,n.setState({persons:c.data,newName:"",newNumber:"",success:"Henkilo '".concat(a.name,"' numero on p\xe4ivitetty palvelimelle")});case 26:e.next=43;break;case 28:return e.prev=28,e.next=31,w.create(a);case 31:e.next=37;break;case 33:e.prev=33,e.t1=e.catch(28),n.setState({error:e.t1.message}),setTimeout(function(){n.setState({error:null})},5e3);case 37:return e.next=39,w.getAll();case 39:o=e.sent,console.log(o.data),n.setState({persons:o.data,newName:"",newNumber:"",success:"Henkilo '".concat(a.name,"' on lis\xe4tty palvelimelle")}),setTimeout(function(){n.setState({success:null})},5e3);case 43:e.next=50;break;case 45:e.prev=45,e.t2=e.catch(10),console.log(e.t2),n.setState({error:"Henkilo '".concat(a.name,"' on jo valitettavasti poistettu palvelimelta")}),setTimeout(function(){n.setState({error:null})},5e3);case 50:case"end":return e.stop()}},e,this,[[10,45],[13,18],[28,33]])}));return function(t){return e.apply(this,arguments)}}(),n.poistaHenkilo=function(){var e=Object(s.a)(r.a.mark(function e(t){var a,s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.state.persons.filter(function(e){return e.id===t}),!window.confirm("Poistetaanko ".concat(a[0].name))){e.next=18;break}return e.prev=2,e.next=5,w.del(t);case 5:e.next=12;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0.message),n.setState({error:e.t0.message}),setTimeout(function(){n.setState({error:null})},5e3);case 12:(s=n.state.persons).splice(s.findIndex(function(e){return e[0]===t}),1),n.setState({persons:s,error:"Henkilo '".concat(a[0].name,"' on poistettu palvelimelta")}),setTimeout(function(){n.setState({success:null})},5e3),e.next=19;break;case 18:n.setState({error:"Ei poistettu"});case 19:case"end":return e.stop()}},e,this,[[2,7]])}));return function(t){return e.apply(this,arguments)}}(),n.handleNameChange=function(e){n.setState({newName:e.target.value})},n.handleNumberChange=function(e){n.setState({newNumber:e.target.value})},n.handleEtsittavaChange=function(e){n.setState({etsittava:e.target.value})},n.state={persons:[],newName:"",newNumber:"",etsittava:"",error:null,success:null},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.getAll();case 2:t=e.sent,this.setState({persons:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.persons.filter(function(t){return t.name.toLowerCase().indexOf(e.state.etsittava.toLowerCase())>-1});return p.a.createElement("div",null,p.a.createElement(g,{failure:this.state.error,success:this.state.success}),p.a.createElement(E,{etsittava:this.state.etsittava,handleEtsittavaChange:this.handleEtsittavaChange}),p.a.createElement("form",{onSubmit:this.lisaaHenkilo},p.a.createElement(k,{newName:this.state.newName,newNumber:this.state.newNumber,handleNameChange:this.handleNameChange,handleNumberChange:this.handleNumberChange})),p.a.createElement("h2",null,"Numerot"),p.a.createElement("ul",null,t.map(function(t){return p.a.createElement("li",{key:t.id},t.name," ",t.number," ",p.a.createElement("button",{onClick:function(){return e.poistaHenkilo(t.id)},type:"submit"},"poista"))})),p.a.createElement("div",null,"debug: ",this.state.newName))}}]),t}(p.a.Component);f.a.render(p.a.createElement(x,null),document.getElementById("root"))}},[[19,2,1]]]);
//# sourceMappingURL=main.37bbc77a.chunk.js.map