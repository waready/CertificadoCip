<template>
  <div>
    <b-container class="bv-example-row">
      
  <b-card
    title="BUSCADOR"
  >
    <b-row >
      <b-col sm="4" class="pl">
        <b-button variant="primary" block @click="buscadorCodigo">Codigo</b-button>
      </b-col>
      <b-col sm="4" class="pl">
        <b-button variant="warning" block @click="buscadorDni">Dni</b-button>
      </b-col>
      <b-col sm="4" class="pl">
        <b-button variant="danger" block @click="buscadorNombres">Nombres</b-button>
      </b-col>
    </b-row>
     
    <em slot="footer">
      <template v-if="buscador.codigo">
        <b-input-group prepend="Busqueda" class="mt-3">
          <b-form-input v-model="search" placeholder="ingrese busqueda (Codigo)"></b-form-input>
          <b-input-group-append>
            <b-button variant="success">Buscar</b-button>
          </b-input-group-append>
        </b-input-group>
      </template>

      <template v-if="buscador.dni">
        <b-input-group prepend="Busqueda" class="mt-3">
          <b-form-input v-model="search" placeholder="ingrese busqueda (Dni)"></b-form-input>
          <b-input-group-append>
            <b-button variant="success">Buscar</b-button>
          </b-input-group-append>
        </b-input-group>
      </template>
      
      <template v-if="buscador.nombres">
        <b-input-group prepend="Busqueda" class="mt-3">
          <b-form-input v-model="search" placeholder="ingrese busqueda (Nombres)"></b-form-input>
          <b-input-group-append>
            <b-button variant="success">Buscar</b-button>
          </b-input-group-append>
        </b-input-group>
      </template>
    </em>
  </b-card>
  <div v-for='item in (buscarCodigo)' :key="item.dni"> 
  <b-card :title="item.curso" :sub-title="item.nombre">
    <b-card-text>
      {{item.cargo}} <em> {{item.dni}}</em> {{item.codigo }}
    </b-card-text>

    <b-card-text>{{item.grado}}</b-card-text>

    <a href="#" class="card-link">Descargar</a>
    <b-link href="#" class="card-link">Ver</b-link>
  </b-card>
  </div>
    </b-container>
     <pre>
      {{$data}}
    </pre>
  </div> 
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      search:'',
      buscador:{
        codigo:true,
        dni:false,
        nombres:false
      },
      datos:[
        {
          nombre:'Juan Jose Perez',
          dni:'11112222',
          codigo:'123123',
          curso:'Agilidad Empresarial',
          grado:'Estudiante',
          cargo:'Participante'
        },
        {
          nombre:'Juan Jose Rodriguez',
          dni:'11112223',
          codigo:'123124',
          curso:'Agilidad Empresarial',
          grado:'Profesional',
          cargo:'Organizador'
        },
        {
          nombre:'Juan Jose Aguilar',
          dni:'11112224',
          codigo:'123125',
          curso:'Agilidad Empresarial',
          grado:'Profesional',
          cargo:'Ponente'
        },
      ]
    }
  },
  methods:{
    buscadorCodigo(){
      this.buscador.codigo = true
      this.buscador.dni = false
      this.buscador.nombres = false
    },
    buscadorDni(){
      this.buscador.dni = true
      this.buscador.codigo = false
      this.buscador.nombres = false
    },
    buscadorNombres(){
      this.buscador.nombres = true
      this.buscador.dni = false
      this.buscador.codigo = false
    }
  },
  computed: {
    buscarDni(){
      return this.datos.filter(user => user.dni.includes(this.search))
    },
    buscarNombre(){
      return this.datos.filter(user => user.nombre.includes(this.search))
    },
    buscarCodigo(){
      return this.datos.filter(user => user.codigo.includes(this.search))
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pl{
   
    padding-right: 0px;
    padding-left: 0px;
}
</style>
