<template>
<div class="header">
        
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
             <span class="iconfont">&#xe632;</span>
             输入城市/景点/游玩主题</div>
        <div class="header-right">{{city}}
         <span class="iconfont area-icon">&#xe64a;</span>




        </div>

</div>
</template>


<script>
export default {
 name:"HomeHeader",
 props:{
     city:String
 }
}
</script>
<!-- scoped 限制样式的作用域，只对当前组件有效，不会影响到其他组件 -->
 
<style lang="stylus" scoped>
@import '~sty/varibles.styl';
.header
 
    display flex
    line-height:.86rem
    background:$bgcolor
    color:#fff
    .header-left 
     width :.64rem;
     float :left 
      .back-icon
       text-align:center
       font-size:.4rem
    .header-input
     flex:1
     height:.64rem
     line-height:.64rem
     margin-top:.11rem
     margin-left: .2rem
     background:#fff
     color:#ccc
     border-radius:.1rem
    .header-right
     width 1.24rem;
     text-align:center
     float:right 
      .area-icon
       font-size :.24rem
      margin-left : -.04rem

</style>



