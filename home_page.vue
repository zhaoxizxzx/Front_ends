<template>
  <topBar></topBar>
  <bbsTopBar></bbsTopBar>    
          
    <div class="bbshomepage">
      <div style="height:82%;">
        <!--左侧栏-->
        <div class="bbshomel">
            <div class="bbshomeltop" >
              <div style="font-family: yuanquan;font-size:3em;color:#B05055;margin:0.3em">福</div>
              <div style="font-size:1.3em;color:#B05055;">欢迎来到校友论坛!</div>
              <div>
                <el-button @click="dialogFormVisible = true" >登录/注册</el-button>
                <el-dialog v-model="dialogFormVisible" >
                  <loginWindow></loginWindow>
                </el-dialog>
              </div>
          </div>
          <div class="bbshomelmiddle" >
            <el-icon><Document /></el-icon>发帖
          </div>
          <div class="bbshomebottom" >
            <el-icon style="color:#B05055;font-size:1.3em"><BellFilled /></el-icon>
            <span style="font-size:1.5em;color:#B05055">论坛公告</span>
            <el-divider style="margin:0;"></el-divider>
            <p style="word-break:break-all">
              &ensp;&ensp;金秋十月，丹桂飘香，在这美好的日子里，计算机与大数据学院40周年院庆将于10月24-25日隆重举行，值此院庆来临之际，开放论坛以供广大师生、校友进行交流！
            </p>
          </div>

          </div>
      </div>
  </div>
</template>

<script>
import {Document,BellFilled} from'@element-plus/icons-vue'
import {  ref } from 'vue'
import topBar from '../../components/topBar.vue'
import bbsTopBar from '../../components/bbsTopBar.vue'
import loginWindow from '../../components/loginWindow.vue';
    export default {
        name: 'home_page',
        components:{
          topBar,
          bbsTopBar,
          Document,
          BellFilled,
          loginWindow
        },
        setup()
        {
          const dialogFormVisible = ref(false)
          return{
            dialogFormVisible
          }
        }
    }
</script>
<style scoped>
@font-face{
  font-family: yuanquan;
  src: url('../../assets/yuanquan.ttf')
}
.bbshomepage{
  height: 100%;
}
.bbshomel{
  height: 100%;
  width: 25%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 500px;
  min-width: 300px
}
.bbshomeltop{
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255,255,255,0.4);
  border-radius: 15px;
  box-shadow: 5px 5px 5px rgb(210, 207, 207);
  height:45%;
  margin: 2em 2em 1em 2em;
}
.bbshomelmiddle{
  height:10%;
  background: rgba(255, 255, 255, 0.4);
  font-size: 1.3em;
  color: #B05055;
  margin:0 1.5em 1em 1.5em;
  border-radius: 25px;
  box-shadow: 5px 5px 5px rgb(210, 207, 207);
  display: flex;
  justify-content:center;
  align-items: center;
  
}
.bbshomebottom{
  height: auto;
  margin: 0 2em 2em 2em;
  background: rgba(255,255,255,0.4);
  border-radius: 15px;
  box-shadow: 5px 5px 5px rgb(210, 207, 207);
  padding: 0.5em 1em;
}

.el-button{
  color:white;
  background-color: #B05055;
  position: relative;
  top:50%
}
.el-button:hover{
  background-color:#ac3d42;
  color: white;
}
.rightArticle{
  height:auto;
  margin: 2em 2em 1em 2em;
  background-color: rgba(255,255,255,0.4);
  border-radius: 25px;
  box-shadow: 5px 5px 5px rgb(210, 207, 207);
}
</style>


<!--<el-dropdown type="primary" >
              <el-icon style="color: #B05055;height: 2em;width: 2em;font-size: 2em;"><Compass /></el-icon>

              <template #dropdown>
                <el-dropdown-menu class="header-drop" >
                  <el-dropdown-item>首页</el-dropdown-item>
                  <el-dropdown-item>院庆日程</el-dropdown-item>
                  <el-dropdown-item>大事记</el-dropdown-item>
                  <el-dropdown-item>院庆祝福</el-dropdown-item>
                  <el-dropdown-item>校友风采</el-dropdown-item>
                  <el-dropdown-item>福友圈</el-dropdown-item>
                  <el-dropdown-item>院元宇宙</el-dropdown-item>
                </el-dropdown-menu>
              </template>
           </el-dropdown>-->