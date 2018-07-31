<template>
  <el-container class="head_container">
    <el-row class="elRow" style="width:100%;text-align:right;margin:0 60px;">

      <div class="clear">
        <el-col :span="24" class="clear head_right">
          <!--通知喇叭-->
          <div class="info_icon" @click="showMyselfs('isShowAbout')">
            <el-badge is-dot class="item is-dot">
              <i class="el-icon-bell"></i>
            </el-badge>
          </div>
          <div class="head_userInfo">
            <div class="userIcon"><img :src="img" alt="user"><span>{{name}}</span></div>
          </div>


        </el-col>
      </div>

    </el-row>
  </el-container>

</template>

<script>
  export default{
    data(){
      return{
        img:'',
        name:'庄东东'
      }
    },
    methods:{
      showMyselfs(params){
        this.$emit('on-show',params);
      }
    }
  }
</script>

<style scoped lang="less">
  .head_container{
    min-width:1200px;
    background-color: #fff;
    height:60px;
  }
  .head_icon{
    color:red;
    text-align: right;
  }
  .el-icon-bell{
    font-size: 20px;
  }
  .item {
    margin-top: 10px;
    /*margin-right: 40px;*/
  }
  .el-badge__content.is-fixed{
    top:10px;
  }
  .clear:after{content:"";height:0;line-height:0;display:block;visibility:hidden;clear:both;}
  .head_right{
    float:right;
  }
  .info_icon{
    margin: 10px;
    /*float:left;*/
    display: inline-block;
    cursor:pointer;
  }
  .head_userInfo {
    /*float: left;*/
    display: inline-block;
    vertical-align: middle;
    padding-top: 10px;
  }
</style>
