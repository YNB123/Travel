<template>
<div class="warpper">
<swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide>
     <img class ="swiper-image" src="../../../assets/1.jpg">

    </swiper-slide>
    <swiper-slide>
     <img class ="swiper-image" src="../../../assets/2.jpg">
    </swiper-slide>
   
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
    name: "HomeSwiper",
    data (){ 
        return{
        swiperOption:{}
        }
    }
    
}
</script>

<style lang="stylus" scoped>
 .warpper
   overflow:hidden
   background-color :#eee
   width:100%
   height:0;
   padding-bottom:26.66%

  .swiper-image
   width:100%
</style>
