<template>
  <div class="about_alert" v-if="isShow">
    <div class="about_bg" @click="closeMyselfs"></div>
    <div class="about_content">
      <div class="close" @click="closeMyselfs">X</div>
      <el-row class="txtInfo">
        <el-col :span="12"><div class="mesInfo">消息通知</div></el-col>
        <el-col :span="12"><div class="allInfo" @click="UrlManage"><router-link :to="{path:'dealRoute'}" tag="span">全部通知</router-link></div></el-col>
      </el-row>
      <slot>empty</slot>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        isHidden:true
      }
    },
    props:{
      isShow:{
        type:Boolean,
        default:false
      }
    },
    methods:{
      closeMyselfs(){
        this.$emit('on-close');
      },
      UrlManage(){
//        this.$emit('on-closeUrl');
        this.$emit('on-close');
      }
    }
  }
</script>

<style scoped>
  .about_alert{
    position:fixed;
    width: 100%;
    height:100%;
    z-index: 16;
  }
  .about_alert .about_bg{
    position:fixed;
    top:0;
    bottom: 0;
    left:0;
    right:0;
    width:100%;
    min-width: 1200px;
    height:auto;
    background-color: #000;
    opacity: .4;
    z-index: 10;
  }
  .about_alert .about_content{
    position: fixed;
    top:40%;
    left:50%;
    margin-left: -140px;
    width: 280px;
    height:auto;
    background-color:#fff;
    color:#000;
    z-index: 20;
    border:1px solid #d7d6d6;
  }
  .about_alert .close{
    /*padding-left:280px;*/
    text-align: right;
    padding-right: 10px;
    cursor: pointer;
    background-color:#f0f2f5;
  }
  .about_alert .mesInfo{
    padding-top: 6px;
    padding-left: 10px;
    font-size:18px;
  }
  .about_alert .allInfo{
    text-align: right;
    padding-right: 14px;
    padding-top: 10px;
    color:#3b91ff;
    cursor:pointer;
  }
  .about_alert .txtInfo{
    background-color:#f0f2f5;
    padding-bottom: 6px;
  }
  .clear:after{content:"";height:0;line-height:0;display:block;visibility:hidden;clear:both;}
</style>
