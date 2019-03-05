<template>
<div class="icons">
<swiper>
  <swiper-slide v-for="(page,index) of pages" :key="index">
  <div class="icon" v-for ="item of page"
    :key ="item.id"
    >
      <div class='icon-image'>
          <img  style="height:100%;display:block;margin:0 auto;" :src="item.imgurl"/> 
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
    data (){ 
        return{
        iconsList :[{
            id:'0001',
            imgurl:'static/icons/ic1.png',
            desc:'景点门票'
        },{
            id:'0002',
            imgurl:'static/icons/ic2.png',
            desc:'一日游'
        },{
            id:'0003',
            imgurl:'static/icons/ic3.png',
            desc:'合肥必读'
        },{
            id:'0004',
            imgurl:'static/icons/ic4.png',
            desc:'游乐园'
        },{
            id:'0005',
            imgurl:'static/icons/ic5.png',
            desc:'动植物园'
        },{
            id:'0006',
            imgurl:'static/icons/ic6.png',
            desc:'组团观园'
        },{
            id:'0007',
            imgurl:'static/icons/ic7.png',
            desc:'海豚馆'
        },{
            id:'0008',
            imgurl:'static/icons/ic8.png',
            desc:'自然风光'
        },{
            id:'0009',
            imgurl:'static/icons/ic1.png',
            desc:'海上乐园'
        },{
            id:'0010',
            imgurl:'static/icons/ic2.png',
            desc:'海底世界'
        }]
        }
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
