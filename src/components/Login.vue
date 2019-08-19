<template>
  <!-- Default form login -->
  <b-container>
    <b-row align-h="center">
      <b-col cols="5">
        <div class="mt-3">
          <b-card-group deck>
            <b-card bg-variant="info" text-variant="white" header="Login  " class="text-center">
              <b-card-text>
                <b-form @submit="firebaseLogin" >
                  <b-form-group
                    id="input-group-1"
                    label="Email"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="form.email"
                      type="email"
                      required
                      placeholder="Enter Email"
                      >
                    </b-form-input>
                  </b-form-group>
                  <b-form-group
                    id="input-group-2"
                    label="Contraseña"
                    label-for="input-2"
                    description="No comparta su contraseña con nadie."
                  >
                    <b-form-input
                      id="input-2"
                      v-model="form.password"
                      type="password"
                      required
                      placeholder="Enter Contraseña"
                      >
                    </b-form-input>
                  </b-form-group>
                    <!-- <button  block class="btn btn-success" @click="firebaseLogin('antony@mail.com', '1234679')">Login</button> -->
                    <b-button block type="submit" pill variant="secondary"> Ingresar</b-button>
                  
                </b-form>
              </b-card-text>
            </b-card>
          </b-card-group>
        </div>
      </b-col>
    </b-row>
  </b-container>

  <!-- Default form login -->
</template>
<script>
import firebase from 'firebase';
// import {db} from '@/main';
export default {
  data(){
    return{
      form: {
        email: 'antony@mail.com',
        password: '1234679',
      },
      error:''
      
    }
  },
  methods:{
     firebaseLogin(){
       this.error = ''
       if(this.form.email && this.form.password){
         return firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(()=>{
          this.$router.push({name:'formulario'})
        }).catch(err=>{
          this.error = err.message
        })
       }
       else {
         this.error = "Todos los campos son requeridos"
       }
       
    },
  }
}
</script>