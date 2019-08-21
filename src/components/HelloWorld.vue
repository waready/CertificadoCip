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
    <tipo-busqueda :data="buscarDni"    v-if="buscador.dni"></tipo-busqueda>
    <tipo-busqueda :data="buscarNombre" v-if="buscador.nombres"></tipo-busqueda>
    <tipo-busqueda :data="buscarCodigo" v-if="buscador.codigo"></tipo-busqueda>
    </b-container>
  </div> 
</template>

<script>
import {db} from '@/main';
import tipoBusqueda from '@/components/Busqueda'
export default {
  name: 'HelloWorld',
  components:{
    tipoBusqueda,
  },
  mounted(){
    db.collection('certificados').onSnapshot(snapshot => {
    this.certificados = [];
    snapshot.forEach(user => {
      const userData = user.data();
      this.certificados.push({
        Curso_Nombre: userData.nameCurso, 
        apellidos: userData.apellidos,
        nombres: userData.nombres,
        codigo:userData.codigo,
        dni:userData.dni,
        costo:userData.costo,
        cargo:userData.cargo,
        grado:userData.grado,
        uid:userData.uid
      });
    });
    }, (error) => {
    console.log('listener users admin off...');
    })
    },
  data () {
    return {
      search:'',
      certificados:[],
      buscador:{
        codigo:true,
        dni:false,
        nombres:false
      },
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
      return this.certificados.filter(user => user.dni.includes(this.search))
    },
    buscarNombre(){
      return this.certificados.filter(user => user.nombres.includes(this.search))
    },
    buscarCodigo(){
      return this.certificados.filter(user => user.codigo.includes(this.search))
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
