<template>
<div class="icons">
<swiper>
  <swiper-slide v-for="(page,index) of pages" :key="index">
  <div class="icon" v-for ="item of page"
    :key ="item.id"
    >
      <div class='icon-image'>
          <img  style="height:100%;display:block;margin:0 auto;" :src="item.imgUrl"/> 
      </div>
      <p class="icon-desc">{{item.desc}}</p>
  </div>
  </swiper-slide>
</swiper>
</div>
</template>
<script>
export default {
 
    name: "HomeIcons",
    props:{       
        iconsList:Array
    },
    computed:{
        pages (){
        const pages =[];
        this.iconsList.forEach((item,index) =>{
             const page =Math.floor(index/8)
             if(!pages[page]){
                 pages[page]=[]
             }
             pages[page].push(item)
        })
          return pages;
        }
    }
    
}
</script>

<style lang="stylus" scoped>
@import '~sty/varibles.styl'
@import '~sty/mixins.styl'

  .icons >>>.swiper-container
     height :0
     padding-bottom:50%
     .icon
       position:relative
       overflow:hidden
       float:left
       height:0
       width:25%
       padding-bottom:25%
       .icon-image
        position:absolute
        top:0
        left:0
        right:0
        bottom:.44rem
        box-box-sizing:border-box
        padding:.1rem
       .icon-desc
         position:absolute
         left:0
         right:0
         bottom:0
         height:.44rem
         line-height:.44rem
         color:$darkTextColor
         text-align center
         overflow:hidden
         white-space nowrap
         text-overflow:ellipsis
         ellipsis()
</style>
