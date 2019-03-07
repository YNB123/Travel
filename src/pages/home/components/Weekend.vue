<template>
<div>
    
    <div class='title border-bottom'><p class="rec-head-text">周末去哪儿</p> </div>
    <ul>
        <li v-for="item of weekendList" :key="item.index">
            <div class="item-img-wraper">
               <img class='item-img' :src="item.imgUrl"/>
            </div>
            <div class="item-info">
                 <p class="item-title">{{item.title}}</p>
                 <p class="item-desc">{{item.desc}}</p>
            </div>
        </li>
    </ul>

</div>



</template>

<script>
export default {
    name:"HomeWeekend",
    data () {
        return {
        weekendList:[{
                    id:"0001",
                    imgUrl:"static/icons/week1.jpg",
                    title:"大连圣亚海洋世界圣亚海洋世界圣亚海洋世界",
                    desc:"浪漫大连首站，浪漫的海"
                },{
                    id:"0002",
                    imgUrl:"static/icons/week2.jpg",
                    title:"大连圣亚海洋世界圣亚海洋世界圣亚海洋世界",
                    desc:"浪漫大连首站，浪漫的海"
                },{
                    id:"0003",
                    imgUrl:"static/icons/week3.jpg",
                    title:"大连圣亚海洋世界圣亚海洋世界圣亚海洋世界",
                    desc:"浪漫大连首站，浪漫的海"
                },{
                    id:"0004",
                    imgUrl:"static/icons/week4.jpg",
                    title:"大连圣亚海洋世界圣亚海洋世界圣亚海洋世界",
                    desc:"浪漫大连首站，浪漫的海"
                }]
        }
       
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
    .item-img-wraper
      height:0
      overflow:hidden
      padding-bottom:33.9%
    .item-img
        width:100%
    .item-info
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
        
</style>
  