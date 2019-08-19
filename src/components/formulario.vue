<template>
  <b-container>
    <b-row align-h="center">
      <h3 class="color" >Certificado <b-badge variant="primary">Nuevo</b-badge></h3>
    </b-row>
    <b-row>
      <b-col>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group
            label="Nombre del curso"
          >
            <b-form-input
              v-model="form.nameCurso"
              type="text"
              autofocus
              required
              placeholder="Ingrese Nombre del curso"
            ></b-form-input>

          </b-form-group>

          <b-form-group 
            label="Apellidos" 
          >
            <b-form-input
              v-model="form.apellidos"
              required
              placeholder="Ingrese Apellidos"
            ></b-form-input>
          </b-form-group>

          <b-form-group 
            label="Nombres" 
          >
            <b-form-input
              v-model="form.nombres"
              required
              placeholder="Ingrese Nombres"
            ></b-form-input>
          </b-form-group>
          <b-row>
            <b-col>
              <b-form-group 
                label="Codigo Certificado" 
              >
                <b-form-input
                  v-model="form.codigo"
                  required
                  placeholder="Ingrese Codigo"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group 
                label="DNI" 
              >
              <b-form-input
                v-model="form.dni"
                placeholder="Ingrese Dni"
              ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group 
                label="Costo" 
              >
              <b-input-group  prepend="S/." append=".00">
                <b-form-input type="number" placeholder="00" v-model="form.costo" ></b-form-input>
              </b-input-group>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group 
                  label="Cargo" 
                >
                <b-form-select
                  id="input-3"
                  v-model="form.cargo"
                  :options="cargos"
                  required
                ></b-form-select>
              </b-form-group>
            </b-col>

            <b-col>
              <b-form-group 
              label="Grado" 
              >
              <b-form-select
                id="input-3"
                v-model="form.grado"
                :options="grados"
                required
              ></b-form-select>
              </b-form-group>
            </b-col>
          </b-row>   
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      </b-col>
    </b-row>
   
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </b-container>
</template>

<script>
import firebase from 'firebase';
import {db} from '@/main';
import * as faker from 'faker';
  export default {
    data() {
      return {
        form: {
          nameCurso: '',
          apellidos: '',
          nombres: '',
          codigo:'',
          dni:'',
          costo:'',
          cargo:null,
          grado:null,
        },
        grados: [{ text: 'Seleccione uno', value: null }, 'Estudiante', 'Profesional'],
        cargos: [{ text: 'Seleccione uno', value: null }, 'Participante', 'Organizador', 'Ponente', 'Asistente'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
        const id = faker.random.alphaNumeric(16);
        console.log('tag', id )
        db.collection("certificados").doc(id).set({
          nameCurso: this.form.nameCurso, 
          apellidos: this.form.apellidos,
          nombres: this.form.nombres,
          codigo:this.form.codigo,
          dni:this.form.dni,
          costo:this.form.costo,
          cargo:this.form.cargo,
          grado:this.form.grado,
          uid:id
      })
      .then(()=> {
          this.onReset()
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });


      },
      onReset() {
        
        // Reset our form values
        this.form.nameCurso = ''
        this.form.apellidos = ''
        this.form.nombres = ''
        this.form.codigo = ''
        this.form.dni = ''
        this.form.costo = ''
        this.form.cargo = null
        this.form.grado = null
        
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
<style scope>
    .color{
      color: green;
    }
</style>