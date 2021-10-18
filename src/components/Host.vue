<<<<<<< HEAD
<template>
  <div>
    <!-- <div class="logout">
      <el-dropdown class="userIn" @command="headle">
        <span class="el-dropdown-link">
          {{user.data.profile.nickname}}<i><img :src="user.data.profile.avatarUrl"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="userinfo">个人中心</el-dropdown-item>
          <el-dropdown-item command="set">设置</el-dropdown-item>
          <el-dropdown-item divided command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown> -->
      <!-- <el-button type="success">退出</el-button> -->
    <!-- </div> -->
    <div class="articl">
        <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1']" router>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-document-copy"></i>内容管理</template>
        <el-menu-item index="/article/index">文章列表</el-menu-item>
        <el-menu-item index="/article/create">新建文章</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    
    <el-main>
    <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
    </div>
  </div>
</template>


<script>
export default {
  name: "Host",
  // data() {
  //   return {
  //     user: JSON.parse(window.sessionStorage.getItem("user")),
  //   };
  // },
  // methods: {
  //     headle(command){
  //         if(command=='logout'){
  //              this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
  //         confirmButtonText: '确定',
  //         cancelButtonText: '取消',
  //         type: 'warning'
  //       }).then(() => {
  //        this.postRequest('/logout');
  //        window.sessionStorage.removeItem('tokenStr');
  //        window.sessionStorage.removeItem('user');
  //        this.$router.replace('/login');
  //       }).catch(() => {
  //         this.$message({
  //           type: 'info',
  //           message: '已取消退出'
  //         });          
  //       });
  //         }
  //     }
  // },
};
</script>

<style scoped>
body,html{
    padding:0;
    margin:0;
}
.logout {
  display: flex;
  background: skyblue;
  /* align-items: center; */
  justify-content: flex-end;
  padding: 0 12px;
  box-sizing: border-box;
}

.userIn{
    cursor:pointer;
}

.el-dropdown-link img{
    width: 110px;
    height: 110px;
    border-radius:70px;
}
 .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }

</style>
=======
<template>
  <div>
    <!-- <div class="logout">
      <el-dropdown class="userIn" @command="headle">
        <span class="el-dropdown-link">
          {{user.data.profile.nickname}}<i><img :src="user.data.profile.avatarUrl"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="userinfo">个人中心</el-dropdown-item>
          <el-dropdown-item command="set">设置</el-dropdown-item>
          <el-dropdown-item divided command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown> -->
      <!-- <el-button type="success">退出</el-button> -->
    <!-- </div> -->
    <div class="articl">
        <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1']" router>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-document-copy"></i>内容管理</template>
        <el-menu-item index="/article/index">文章列表</el-menu-item>
        <el-menu-item index="/article/create">新建文章</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    
    <el-main>
    <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
    </div>
  </div>
</template>


<script>
export default {
  name: "Host",
  // data() {
  //   return {
  //     user: JSON.parse(window.sessionStorage.getItem("user")),
  //   };
  // },
  // methods: {
  //     headle(command){
  //         if(command=='logout'){
  //              this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
  //         confirmButtonText: '确定',
  //         cancelButtonText: '取消',
  //         type: 'warning'
  //       }).then(() => {
  //        this.postRequest('/logout');
  //        window.sessionStorage.removeItem('tokenStr');
  //        window.sessionStorage.removeItem('user');
  //        this.$router.replace('/login');
  //       }).catch(() => {
  //         this.$message({
  //           type: 'info',
  //           message: '已取消退出'
  //         });          
  //       });
  //         }
  //     }
  // },
};
</script>

<style scoped>
body,html{
    padding:0;
    margin:0;
}
.logout {
  display: flex;
  background: skyblue;
  /* align-items: center; */
  justify-content: flex-end;
  padding: 0 12px;
  box-sizing: border-box;
}

.userIn{
    cursor:pointer;
}

.el-dropdown-link img{
    width: 110px;
    height: 110px;
    border-radius:70px;
}
 .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }

</style>
>>>>>>> 7454ae7dc0c594d388f31b6970a622dfed507a79
