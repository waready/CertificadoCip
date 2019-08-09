<template>
  <div>
    <b-container class="bv-example-row">
      <b-row >
        
        <b-col sm="4" class="pl">
           <b-button variant="primary" block>Codigo</b-button>
        </b-col>
        <b-col sm="4" class="pl">
          <b-button variant="warning" block>Dni</b-button>
        </b-col>
        <b-col sm="4" class="pl">
          <b-button variant="danger" block>Nombres</b-button>
        </b-col>
       
      </b-row>
    </b-container>
  </div> 
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
