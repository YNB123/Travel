<template>
<div>
      
        <home-header></home-header>
         <router-link to="/company">HOME !</router-link> 
</div>
</template>


<script>
import HomeHeader from './components/Header'
export default {
 name:"home",
 components:{
         HomeHeader
 }
}
</script>

<style>

</style>



