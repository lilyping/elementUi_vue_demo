<template>
  <div class="menu_container">
    <el-row class="tac">
      <el-col :span="24">
        <h5 class="menu_bg"></h5>
        <el-menu class="el-menu-vertical-demo menu_bottom" :default-active="$route.path" :default-openeds="['1', '2', '3']">
          <template v-for="(menu, index) in menus">
            <el-submenu :index="index+''" :key="index" v-if="menu.chirdMenu">
              <template slot="title">
                <i :class="menu.icon"></i>
                <span>{{menu.title}}</span>
              </template>
              <el-menu-item-group :key="index" v-for="(item,index) in menu.chirdMenu">
                <router-link :to="item.path">
                  <el-menu-item   :index="item.path" :key="item.path">{{item.btn}}</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
            <router-link :key="index"  :to="menu.path" v-else>
              <el-menu-item :index="menu.path" >
                <i :class="menu.icon"></i><span slot="title">{{menu.title}}</span>
              </el-menu-item>
            </router-link>
          </template>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ajaxHelper from "@/api/ajax-helper.js";
  export default {
    data() {
      return {
        menus: [],
        checkindex: "workPlace"
      };
    },
    methods: {
      getMenuData() {
        ajaxHelper.get("api/all").then(
          res => {
            console.log(res);
            this.menus = res[0].menus;
          },
          err => {
            console.log(err);
          }
        );
      }
    },
    created() {
      this.getMenuData();
    }
  };
</script>

<style lang='less' scoped>
  .menu_bg {
    height: 60px;
    background-color: #3899cc;
  }
  .menu_container {
    height: 100vh;
    background: #fff;
    position: fixed;
    left: 0;
    .tac {
      height: 100%;
      .el-menu-vertical-demo {
        border: none;
        min-width: 200px;
      }
    }
  }
</style>
