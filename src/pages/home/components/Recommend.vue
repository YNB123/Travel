<template>
<div>
    
    <div class='title border-bottom'><p class="rec-head-text">热销推荐</p> </div>
    <ul>
        <li class="item" v-for="item of recommendList" :key="item.index">
            <img class='item-img' :src="item.imgUrl"/>
            <div class="item-info">
                 <p class="item-title">{{item.title}}</p>
                 <p class="item-desc">{{item.desc}}</p>
                 <button class="item-button">查看详情</button>
            </div>
        </li>
    </ul>

</div>
</template>

<script>
export default {
    name:"HomeRecommend",
    props:{
        recommendList:Array
    }
}
</script>



<style lang="stylus" scoped>
 @import '~sty/mixins.styl'
   .title
      margin-top:.2rem
      line-height:.8rem
      background:#eee
      text-indent:.2rem
    .item 
      overflow:hidden
      display:flex            
      height:1.9rem
      .item-img
          width:1.7rem
          height:1.7rem
          padding:.1rem
      .item-info
          flex:1
          min-width:0
          text-align:left
          padding:.1rem
          .item-title
              line-height:.54rem
              ellipsis()
              font-size:.32rem
       
          .item-desc
              line-height:.4rem
              color:grey
              ellipsis()
           .item-button
              background:#ff9300
              margin-top:.1rem 
              padding:0 .2rem
              border-radius:.06rem
</style>
  