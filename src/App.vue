<template>
  <div> 
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand to="/">Cip-Certificado</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav> -->

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-button variant="success" v-if="user" to="/registro">Registar Usuarios</b-button>
          
           <div right v-if="user">
             <b-nav-item-dropdown >
              <!-- Using 'button-content' slot -->
              <template slot="button-content"><em> {{user.email}}</em></template>
              <b-dropdown-item >Profile</b-dropdown-item>
              <b-dropdown-item @click.prevent="logout">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
           </div>
            
            <b-button pill v-else to="login">Ingresar</b-button>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>


  
    <div id="app">
      <img src="https://raw.githubusercontent.com/waready/certificados/master/docs/static/img/logocip.be18db0.png" width="150" >
    </div>
    <router-view/>

  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'App',
  data(){
    return{
      user: null
    }
  },
  created(){
    firebase.auth().onAuthStateChanged(user =>{
      if(user){
        this.user = user
      }
      else{
        this.user = null
      }
    })
  },
  methods:{
    logout(){
      firebase.auth().signOut().then(
        () =>{
        this.$router.push({name:'login'})  
        }
      )
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.final{
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
}
</style>
