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
          <b-form-input placeholder="ingrese busqueda (Codigo)"></b-form-input>
          <b-input-group-append>
            <b-button variant="success">Buscar</b-button>
          </b-input-group-append>
        </b-input-group>
      </template>

      <template v-if="buscador.dni">
        <b-input-group prepend="Busqueda" class="mt-3">
          <b-form-input placeholder="ingrese busqueda (Dni)"></b-form-input>
          <b-input-group-append>
            <b-button variant="success">Buscar</b-button>
          </b-input-group-append>
        </b-input-group>
      </template>
      
      <template v-if="buscador.nombres">
        <b-input-group prepend="Busqueda" class="mt-3">
          <b-form-input placeholder="ingrese busqueda (Nombres)"></b-form-input>
          <b-input-group-append>
            <b-button variant="success">Buscar</b-button>
          </b-input-group-append>
        </b-input-group>
      </template>

    </em>
  </b-card>
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
      buscador:{
        codigo:true,
        dni:false,
        nombres:false
      }
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pl{
   
    padding-right: 0px;
    padding-left: 0px;
}
</style>
