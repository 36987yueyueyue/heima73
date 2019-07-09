<template>
  <div class="container">
    <!-- 卡片 -->
    <el-card class="login_box">
      <img src="../../assets/images/logo_index.png" alt />
      <el-form ref="form" :model="form">
        <el-form-item>
          <el-input placeholder="请输入手机号" style="width:458px"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请输入验证码" style="width:250px"></el-input>
          <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="checked"></el-checkbox>
          我已阅读并同意
          <el-link type="primary" :underline="false">用户条款</el-link>
          和
          <el-link type="primary"  :underline="false">用户协议</el-link>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: true,
      form: {
        name: ''
      }
    }
  }
}
</script>

<style scoped lang='less'>
.container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  color: aqua;
  background: url(../../assets/images/login_bg.jpg) no-repeat center/cover;
  .login_box {
    width: 500px;
    height: 400px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    img {
      display: block;
      width: 200px;
      margin: 10px auto 30px;
    }
   .el-checkbox{
       margin-right: 5px;
    }
  }
}
</style>
