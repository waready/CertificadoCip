webpackJsonp([1],{"/q4m":function(o,r,t){o.exports=t.p+"static/img/logocip.be18db0.png"},"8ndr":function(o,r){},"9M+g":function(o,r){},J1Cc:function(o,r){},Jmt5:function(o,r){},NHnr:function(o,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var e=t("7+uW"),a=t("kxiW"),s=t.n(a),i={name:"App",data:function(){return{user:null}},created:function(){var o=this;s.a.auth().onAuthStateChanged(function(r){o.user=r||null})},methods:{logout:function(){var o=this;s.a.auth().signOut().then(function(){o.$router.push({name:"login"})})}}},n={render:function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("div",[t("div",[t("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[t("b-navbar-brand",{attrs:{to:"/"}},[o._v("Cip-Certificado")]),o._v(" "),t("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),o._v(" "),t("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[t("b-navbar-nav",{staticClass:"ml-auto"},[t("b-nav-item-dropdown",{attrs:{text:"Lang",right:""}},[t("b-dropdown-item",{attrs:{href:"#"}},[o._v("EN")]),o._v(" "),t("b-dropdown-item",{attrs:{href:"#"}},[o._v("ES")]),o._v(" "),t("b-dropdown-item",{attrs:{href:"#"}},[o._v("RU")]),o._v(" "),t("b-dropdown-item",{attrs:{href:"#"}},[o._v("FA")])],1),o._v(" "),o.user?t("b-button",{attrs:{variant:"success",to:"/registro"}},[o._v("Registar Usuarios")]):o._e(),o._v(" "),o.user?t("div",{attrs:{right:""}},[t("b-nav-item-dropdown",[t("template",{slot:"button-content"},[t("em",[o._v(" "+o._s(o.user.email))])]),o._v(" "),t("b-dropdown-item",[o._v("Profile")]),o._v(" "),t("b-dropdown-item",{on:{click:function(r){return r.preventDefault(),o.logout(r)}}},[o._v("Sign Out")])],2)],1):t("b-button",{attrs:{pill:"",to:"login"}},[o._v("Ingresar")])],1)],1)],1)],1),o._v(" "),o._m(0),o._v(" "),t("router-view")],1)},staticRenderFns:[function(){var o=this.$createElement,r=this._self._c||o;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{src:t("/q4m"),width:"150"}})])}]};var l=t("VU/8")(i,n,!1,function(o){t("J1Cc")},null,null).exports,c=t("/ocq"),u={render:function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("div",o._l(o.data,function(r){return t("div",{key:r.dni},[t("b-card",{attrs:{title:r.Curso_Nombre,"sub-title":r.nombres+r.apellidos}},[t("b-card-text",[o._v("\n            "+o._s(r.cargo)+" "),t("em",[o._v(" DNI: "+o._s(r.dni))]),o._v(" Codigo: "+o._s(r.codigo)+"\n        ")]),o._v(" "),t("b-card-text",[o._v(o._s(r.grado))]),o._v(" "),t("a",{staticClass:"card-link",attrs:{href:"#"}},[o._v("Descargar")]),o._v(" "),t("b-link",{staticClass:"card-link",attrs:{href:"#"}},[o._v("Ver")])],1)],1)}),0)},staticRenderFns:[]},d={name:"HelloWorld",components:{tipoBusqueda:t("VU/8")({props:["data"]},u,!1,null,null,null).exports},mounted:function(){var o=this;I.collection("certificados").onSnapshot(function(r){o.certificados=[],r.forEach(function(r){var t=r.data();o.certificados.push({Curso_Nombre:t.nameCurso,apellidos:t.apellidos,nombres:t.nombres,codigo:t.codigo,dni:t.dni,costo:t.costo,cargo:t.cargo,grado:t.grado,uid:t.uid})})},function(o){console.log("listener users admin off...")})},data:function(){return{search:"",certificados:[],buscador:{codigo:!0,dni:!1,nombres:!1}}},methods:{buscadorCodigo:function(){this.buscador.codigo=!0,this.buscador.dni=!1,this.buscador.nombres=!1},buscadorDni:function(){this.buscador.dni=!0,this.buscador.codigo=!1,this.buscador.nombres=!1},buscadorNombres:function(){this.buscador.nombres=!0,this.buscador.dni=!1,this.buscador.codigo=!1}},computed:{buscarDni:function(){var o=this;return this.certificados.filter(function(r){return r.dni.includes(o.search)})},buscarNombre:function(){var o=this;return this.certificados.filter(function(r){return r.nombres.includes(o.search)})},buscarCodigo:function(){var o=this;return this.certificados.filter(function(r){return r.codigo.includes(o.search)})}}},m={render:function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("div",[t("b-container",{staticClass:"bv-example-row"},[t("b-card",{attrs:{title:"BUSCADOR"}},[t("b-row",[t("b-col",{staticClass:"pl",attrs:{sm:"4"}},[t("b-button",{attrs:{variant:"primary",block:""},on:{click:o.buscadorCodigo}},[o._v("Codigo")])],1),o._v(" "),t("b-col",{staticClass:"pl",attrs:{sm:"4"}},[t("b-button",{attrs:{variant:"warning",block:""},on:{click:o.buscadorDni}},[o._v("Dni")])],1),o._v(" "),t("b-col",{staticClass:"pl",attrs:{sm:"4"}},[t("b-button",{attrs:{variant:"danger",block:""},on:{click:o.buscadorNombres}},[o._v("Nombres")])],1)],1),o._v(" "),t("em",{attrs:{slot:"footer"},slot:"footer"},[o.buscador.codigo?[t("b-input-group",{staticClass:"mt-3",attrs:{prepend:"Busqueda"}},[t("b-form-input",{attrs:{placeholder:"ingrese busqueda (Codigo)"},model:{value:o.search,callback:function(r){o.search=r},expression:"search"}}),o._v(" "),t("b-input-group-append",[t("b-button",{attrs:{variant:"success"}},[o._v("Buscar")])],1)],1)]:o._e(),o._v(" "),o.buscador.dni?[t("b-input-group",{staticClass:"mt-3",attrs:{prepend:"Busqueda"}},[t("b-form-input",{attrs:{placeholder:"ingrese busqueda (Dni)"},model:{value:o.search,callback:function(r){o.search=r},expression:"search"}}),o._v(" "),t("b-input-group-append",[t("b-button",{attrs:{variant:"success"}},[o._v("Buscar")])],1)],1)]:o._e(),o._v(" "),o.buscador.nombres?[t("b-input-group",{staticClass:"mt-3",attrs:{prepend:"Busqueda"}},[t("b-form-input",{attrs:{placeholder:"ingrese busqueda (Nombres)"},model:{value:o.search,callback:function(r){o.search=r},expression:"search"}}),o._v(" "),t("b-input-group-append",[t("b-button",{attrs:{variant:"success"}},[o._v("Buscar")])],1)],1)]:o._e()],2)],1),o._v(" "),o.buscador.dni?t("tipo-busqueda",{attrs:{data:o.buscarDni}}):o._e(),o._v(" "),o.buscador.nombres?t("tipo-busqueda",{attrs:{data:o.buscarNombre}}):o._e(),o._v(" "),o.buscador.codigo?t("tipo-busqueda",{attrs:{data:o.buscarCodigo}}):o._e()],1)],1)},staticRenderFns:[]};var f=t("VU/8")(d,m,!1,function(o){t("Z0b4")},"data-v-5eb93e38",null).exports,b=t("mvHQ"),p=t.n(b),v=t("FfS/"),h={data:function(){return{form:{nameCurso:"",apellidos:"",nombres:"",codigo:"",dni:"",costo:"",cargo:null,grado:null},grados:[{text:"Seleccione uno",value:null},"Estudiante","Profesional"],cargos:[{text:"Seleccione uno",value:null},"Participante","Organizador","Ponente","Asistente"],show:!0}},methods:{onSubmit:function(o){var r=this;o.preventDefault(),alert(p()(this.form));var t=v.random.alphaNumeric(16);console.log("tag",t),I.collection("certificados").doc(t).set({nameCurso:this.form.nameCurso,apellidos:this.form.apellidos,nombres:this.form.nombres,codigo:this.form.codigo,dni:this.form.dni,costo:this.form.costo,cargo:this.form.cargo,grado:this.form.grado,uid:t}).then(function(){r.onReset()}).catch(function(o){console.error("Error adding document: ",o)})},onReset:function(){var o=this;this.form.nameCurso="",this.form.apellidos="",this.form.nombres="",this.form.codigo="",this.form.dni="",this.form.costo="",this.form.cargo=null,this.form.grado=null,this.show=!1,this.$nextTick(function(){o.show=!0})}}},g={render:function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("b-container",[t("b-row",{attrs:{"align-h":"center"}},[t("h3",[o._v("Certificado "),t("b-badge",{attrs:{variant:"primary"}},[o._v("Nuevo")])],1)]),o._v(" "),t("b-row",[t("b-col",[o.show?t("b-form",{on:{submit:o.onSubmit,reset:o.onReset}},[t("b-form-group",{attrs:{label:"Nombre del curso"}},[t("b-form-input",{attrs:{type:"text",autofocus:"",required:"",placeholder:"Ingrese Nombre del curso"},model:{value:o.form.nameCurso,callback:function(r){o.$set(o.form,"nameCurso",r)},expression:"form.nameCurso"}})],1),o._v(" "),t("b-form-group",{attrs:{label:"Apellidos"}},[t("b-form-input",{attrs:{required:"",placeholder:"Ingrese Apellidos"},model:{value:o.form.apellidos,callback:function(r){o.$set(o.form,"apellidos",r)},expression:"form.apellidos"}})],1),o._v(" "),t("b-form-group",{attrs:{label:"Nombres"}},[t("b-form-input",{attrs:{required:"",placeholder:"Ingrese Nombres"},model:{value:o.form.nombres,callback:function(r){o.$set(o.form,"nombres",r)},expression:"form.nombres"}})],1),o._v(" "),t("b-row",[t("b-col",[t("b-form-group",{attrs:{label:"Codigo Certificado"}},[t("b-form-input",{attrs:{required:"",placeholder:"Ingrese Codigo"},model:{value:o.form.codigo,callback:function(r){o.$set(o.form,"codigo",r)},expression:"form.codigo"}})],1)],1),o._v(" "),t("b-col",[t("b-form-group",{attrs:{label:"DNI"}},[t("b-form-input",{attrs:{placeholder:"Ingrese Dni"},model:{value:o.form.dni,callback:function(r){o.$set(o.form,"dni",r)},expression:"form.dni"}})],1)],1),o._v(" "),t("b-col",[t("b-form-group",{attrs:{label:"Costo"}},[t("b-input-group",{attrs:{prepend:"S/.",append:".00"}},[t("b-form-input",{attrs:{type:"number",placeholder:"00"},model:{value:o.form.costo,callback:function(r){o.$set(o.form,"costo",r)},expression:"form.costo"}})],1)],1)],1)],1),o._v(" "),t("b-row",[t("b-col",[t("b-form-group",{attrs:{label:"Cargo"}},[t("b-form-select",{attrs:{id:"input-3",options:o.cargos,required:""},model:{value:o.form.cargo,callback:function(r){o.$set(o.form,"cargo",r)},expression:"form.cargo"}})],1)],1),o._v(" "),t("b-col",[t("b-form-group",{attrs:{label:"Grado"}},[t("b-form-select",{attrs:{id:"input-3",options:o.grados,required:""},model:{value:o.form.grado,callback:function(r){o.$set(o.form,"grado",r)},expression:"form.grado"}})],1)],1)],1),o._v(" "),t("b-button",{attrs:{type:"submit",variant:"primary"}},[o._v("Submit")]),o._v(" "),t("b-button",{attrs:{type:"reset",variant:"danger"}},[o._v("Reset")])],1):o._e()],1)],1),o._v(" "),t("b-card",{staticClass:"mt-3",attrs:{header:"Form Data Result"}},[t("pre",{staticClass:"m-0"},[o._v(o._s(o.form))])])],1)},staticRenderFns:[]};var _=t("VU/8")(h,g,!1,function(o){t("8ndr")},null,null).exports,C={data:function(){return{form:{email:"antony@mail.com",password:"1234679"},error:""}},methods:{firebaseLogin:function(){var o=this;if(this.error="",this.form.email&&this.form.password)return s.a.auth().signInWithEmailAndPassword(this.form.email,this.form.password).then(function(){o.$router.push({name:"muestra"})}).catch(function(r){o.error=r.message});this.error="Todos los campos son requeridos"}}},k={render:function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("b-container",[t("b-row",{attrs:{"align-h":"center"}},[t("b-col",{attrs:{cols:"5"}},[t("div",{staticClass:"mt-3"},[t("b-card-group",{attrs:{deck:""}},[t("b-card",{staticClass:"text-center",attrs:{"bg-variant":"info","text-variant":"white",header:"Login  "}},[t("b-card-text",[t("b-form",{on:{submit:o.firebaseLogin}},[t("b-form-group",{attrs:{id:"input-group-1",label:"Email","label-for":"input-1"}},[t("b-form-input",{attrs:{id:"input-1",type:"email",required:"",placeholder:"Enter Email"},model:{value:o.form.email,callback:function(r){o.$set(o.form,"email",r)},expression:"form.email"}})],1),o._v(" "),t("b-form-group",{attrs:{id:"input-group-2",label:"Contraseña","label-for":"input-2",description:"No comparta su contraseña con nadie."}},[t("b-form-input",{attrs:{id:"input-2",type:"password",required:"",placeholder:"Enter Contraseña"},model:{value:o.form.password,callback:function(r){o.$set(o.form,"password",r)},expression:"form.password"}})],1),o._v(" "),t("b-button",{attrs:{block:"",type:"submit",pill:"",variant:"secondary"}},[o._v(" Ingresar")])],1)],1)],1)],1)],1)])],1)],1)},staticRenderFns:[]},w=t("VU/8")(C,k,!1,null,null,null).exports,x={data:function(){return{form:{nombre:"",email:"",password:""},error:""}},methods:{firebaseLogin:function(){var o=this;if(this.error="",this.form.email&&this.form.password)return s.a.auth().createUserWithEmailAndPassword(this.form.email,this.form.password).then(function(r){var t={uid:r.user.uid,email:o.form.email,pass:o.form.password,nombre:o.form.nombre};I.collection("usuarios").doc(t.uid).set(t),o.limpiar()}).catch(function(r){o.error=r.message});this.error="Todos los campos son requeridos"},limpiar:function(){this.form.email="",this.form.password="",this.form.nombre=""}}},y={render:function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("b-container",[t("b-row",{attrs:{"align-h":"center"}},[t("b-col",{attrs:{cols:"7"}},[t("div",{staticClass:"mt-3"},[t("b-card-group",{attrs:{deck:""}},[t("b-card",{staticClass:"text-center",attrs:{"bg-variant":"info","text-variant":"white",header:"Registro"}},[t("b-card-text",[t("b-form",{on:{submit:o.firebaseLogin}},[t("b-form-group",{attrs:{label:"Nombre"}},[t("b-form-input",{attrs:{type:"text",required:"",placeholder:"Enter Nombre"},model:{value:o.form.nombre,callback:function(r){o.$set(o.form,"nombre",r)},expression:"form.nombre"}})],1),o._v(" "),t("b-form-group",{attrs:{label:"Email"}},[t("b-form-input",{attrs:{type:"email",required:"",placeholder:"Enter Email"},model:{value:o.form.email,callback:function(r){o.$set(o.form,"email",r)},expression:"form.email"}})],1),o._v(" "),t("b-form-group",{attrs:{label:"Contraseña","label-for":"input-2"}},[t("b-form-input",{attrs:{type:"password",required:"",placeholder:"Enter Contraseña"},model:{value:o.form.password,callback:function(r){o.$set(o.form,"password",r)},expression:"form.password"}})],1),o._v(" "),t("b-form-group",{attrs:{label:"Confirme Contraseña","label-for":"input-2"}},[t("b-form-input",{attrs:{type:"password",required:"",placeholder:"Enter Contraseña"},model:{value:o.form.password,callback:function(r){o.$set(o.form,"password",r)},expression:"form.password"}})],1),o._v(" "),t("b-button",{attrs:{block:"",type:"submit",pill:"",variant:"secondary"}},[o._v(" Registrar")])],1)],1)],1)],1)],1)])],1)],1)},staticRenderFns:[]},q=t("VU/8")(x,y,!1,null,null,null).exports,E={mounted:function(){var o=this;I.collection("certificados").onSnapshot(function(r){o.certificados=[],r.forEach(function(r){var t=r.data();o.certificados.push({Curso_Nombre:t.nameCurso,apellidos:t.apellidos,nombres:t.nombres,codigo:t.codigo,dni:t.dni,costo:t.costo,cargo:t.cargo,grado:t.grado,uid:t.uid})})},function(o){console.log("listener users admin off...")})},data:function(){return{form:{id:"",nameCurso:"",apellidos:"",nombres:"",codigo:"",dni:"",costo:"",cargo:null,grado:null},grados:[{text:"Seleccione uno",value:null},"Estudiante","Profesional"],cargos:[{text:"Seleccione uno",value:null},"Participante","Organizador","Ponente","Asistente"],show:!0,certificados:[{editar:""},{eliminar:""}],transProps:{name:"flip-list"},fields:[{key:"Curso_Nombre",sortable:!0},{key:"apellidos",sortable:!0},{key:"nombres",sortable:!0},{key:"codigo",sortable:!0},{key:"dni",sortable:!0},{key:"costo",sortable:!0},{key:"cargo",sortable:!0},{key:"grado",sortable:!0},{key:"edicion"}]}},methods:{obtener:function(){I.collection("certificados").get().then(function(o){o.forEach(function(o){console.log(o.id," => ",o.data())})})},eliminar:function(o){1==confirm("Esta seguro que decea eliminar este certidicado")&&I.collection("certificados").doc(o).delete().then(function(){alert("se elimino")})},editar:function(o){console.log("tag",o.grado);var r=o.grado;this.form.id=o.uid,this.form.nameCurso=o.Curso_Nombre,this.form.apellidos=o.apellidos,this.form.nombres=o.nombres,this.form.codigo=o.codigo,this.form.dni=o.dni,this.form.costo=o.costo,this.form.cargo=o.cargo,this.form.grado=r},onSubmit:function(o){var r=this;o.preventDefault(),alert(p()(this.form)),I.collection("certificados").doc(this.form.id).set({nameCurso:this.form.nameCurso,apellidos:this.form.apellidos,nombres:this.form.nombres,codigo:this.form.codigo,dni:this.form.dni,costo:this.form.costo,cargo:this.form.cargo,grado:this.form.grado,uid:this.form.id}).then(function(){r.onReset()}).catch(function(o){console.error("Error adding document: ",o)})},onReset:function(){var o=this;this.form.nameCurso="",this.form.apellidos="",this.form.nombres="",this.form.codigo="",this.form.dni="",this.form.costo="",this.form.cargo=null,this.form.grado=null,this.show=!1,this.$nextTick(function(){o.show=!0})}}},N={render:function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("b-container",[t("div",[t("div",{staticClass:"mb-3"},[t("b-button",{attrs:{block:"",squared:"",variant:"success",to:"/from"}},[o._v("Nuevo Certificado")])],1),o._v(" "),t("div",[t("b-table",{attrs:{responsive:"",id:"table-transition-example",items:o.certificados,fields:o.fields,striped:"",small:"","primary-key":"a","tbody-transition-props":o.transProps},scopedSlots:o._u([{key:"edicion",fn:function(r){return[t("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-multi-1",modifiers:{"modal-multi-1":!0}}],attrs:{pill:"",variant:"warning",size:"sm"},on:{click:function(t){return o.editar(r.item)}}},[o._v("Editar")]),o._v(" "),t("b-button",{attrs:{pill:"",variant:"danger",size:"sm"},on:{click:function(t){return o.eliminar(r.item.uid)}}},[o._v("Eliminar")])]}}])})],1),o._v(" "),t("b-modal",{attrs:{id:"modal-multi-1",size:"lg",title:"Editar Certificado","ok-only":"","no-stacking":""}},[t("p",{staticClass:"my-2"},[o._v("First Modal")]),o._v(" "),t("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-multi-2",modifiers:{"modal-multi-2":!0}}]},[o._v("Open Second Modal")]),o._v(" "),t("b-form",{on:{submit:o.onSubmit,reset:o.onReset}},[t("b-form-group",{attrs:{label:"Nombre del curso"}},[t("b-form-input",{attrs:{type:"text",autofocus:"",required:"",placeholder:"Ingrese Nombre del curso"},model:{value:o.form.nameCurso,callback:function(r){o.$set(o.form,"nameCurso",r)},expression:"form.nameCurso"}})],1),o._v(" "),t("b-form-group",{attrs:{label:"Apellidos"}},[t("b-form-input",{attrs:{required:"",placeholder:"Ingrese Apellidos"},model:{value:o.form.apellidos,callback:function(r){o.$set(o.form,"apellidos",r)},expression:"form.apellidos"}})],1),o._v(" "),t("b-form-group",{attrs:{label:"Nombres"}},[t("b-form-input",{attrs:{required:"",placeholder:"Ingrese Nombres"},model:{value:o.form.nombres,callback:function(r){o.$set(o.form,"nombres",r)},expression:"form.nombres"}})],1),o._v(" "),t("b-row",[t("b-col",[t("b-form-group",{attrs:{label:"Codigo Certificado"}},[t("b-form-input",{attrs:{required:"",placeholder:"Ingrese Codigo"},model:{value:o.form.codigo,callback:function(r){o.$set(o.form,"codigo",r)},expression:"form.codigo"}})],1)],1),o._v(" "),t("b-col",[t("b-form-group",{attrs:{label:"DNI"}},[t("b-form-input",{attrs:{placeholder:"Ingrese Dni"},model:{value:o.form.dni,callback:function(r){o.$set(o.form,"dni",r)},expression:"form.dni"}})],1)],1),o._v(" "),t("b-col",[t("b-form-group",{attrs:{label:"Costo"}},[t("b-input-group",{attrs:{prepend:"S/.",append:".00"}},[t("b-form-input",{attrs:{type:"number",placeholder:"00"},model:{value:o.form.costo,callback:function(r){o.$set(o.form,"costo",r)},expression:"form.costo"}})],1)],1)],1)],1),o._v(" "),t("b-row",[t("b-col",[t("b-form-group",{attrs:{label:"Cargo"}},[t("b-form-select",{attrs:{id:"input-3",options:o.cargos,required:""},model:{value:o.form.cargo,callback:function(r){o.$set(o.form,"cargo",r)},expression:"form.cargo"}})],1)],1),o._v(" "),t("b-col",[t("b-form-group",{attrs:{label:"Grado"}},[t("b-form-select",{attrs:{id:"input-3",options:o.grados,required:""},model:{value:o.form.grado,callback:function(r){o.$set(o.form,"grado",r)},expression:"form.grado"}})],1)],1)],1),o._v(" "),t("b-button",{attrs:{type:"submit",variant:"primary"}},[o._v("Submit")]),o._v(" "),t("b-button",{attrs:{type:"reset",variant:"danger"}},[o._v("Reset")])],1)],1),o._v(" "),t("b-modal",{attrs:{id:"modal-multi-2",title:"Second Modal","ok-only":""}},[t("p",{staticClass:"my-2"},[o._v("Second Modal")]),o._v(" "),t("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-multi-3",modifiers:{"modal-multi-3":!0}}],attrs:{size:"sm"}},[o._v("Open Third Modal")])],1),o._v(" "),t("b-modal",{attrs:{id:"modal-multi-3",size:"sm",title:"Third Modal","ok-only":""}},[t("p",{staticClass:"my-1"},[o._v("Third Modal")])])],1)])},staticRenderFns:[]};var $=t("VU/8")(E,N,!1,function(o){t("c0ES")},null,null).exports;e.default.use(c.a);var S=new c.a({routes:[{path:"/",name:"HelloWorld",component:f},{path:"/login",name:"login",component:w},{path:"/from",name:"formulario",component:_,meta:{requiresAuth:!0}},{path:"/muestra",name:"muestra",component:$,meta:{requiresAuth:!0}},{path:"/registro",name:"registro",component:q,meta:{requiresAuth:!0}}]});S.beforeEach(function(o,r,t){o.matched.some(function(o){return o.meta.requiresAuth})?s.a.auth().currentUser?t():t({name:"login"}):t()});var A=S,R=t("Tqaz");t("Jmt5"),t("9M+g"),t("881v");t.d(r,"db",function(){return I}),e.default.use(R.a),s.a.initializeApp({apiKey:"AIzaSyAAo9LBYkafZqkwNh1iOO_Rtsst8OmJijo",authDomain:"chat-4c44d.firebaseapp.com",databaseURL:"https://chat-4c44d.firebaseio.com",projectId:"chat-4c44d",storageBucket:"chat-4c44d.appspot.com",messagingSenderId:"928892659286",appId:"1:928892659286:web:65562aedb28c61f9"});var I=s.a.firestore();e.default.config.productionTip=!1;s.a.auth().onAuthStateChanged(function(){}),new e.default({el:"#app",router:A,components:{App:l},template:"<App/>"})},Z0b4:function(o,r){},c0ES:function(o,r){}},["NHnr"]);
//# sourceMappingURL=app.ef6ae025b0be896b91ee.js.map