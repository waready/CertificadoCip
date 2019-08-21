<template>
    <div>
        <div v-for='item in (data)' :key="item.dni"> 
            <b-card :title="item.Curso_Nombre" :sub-title="item.nombres + item.apellidos">
            <b-card-text>
                {{item.cargo}} <em> DNI: {{item.dni}}</em> Codigo: {{item.codigo }}
            </b-card-text>

            <b-card-text>{{item.grado}}</b-card-text>

            <a href="#" class="card-link">Descargar</a>
            <b-link href="#" class="card-link">Ver</b-link>
            </b-card>
        </div>
    </div>
</template>
<script>
export default {
    props:['data'],

}
</script>