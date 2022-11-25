<template>
  <div class="about" style="height:100%">
    <!-- 预留要引用组件 -->
    <div class="first" style="height:8%">
      预留1
    </div>
    <div class="second" style="height:10%">
      预留2
    </div>
    <div class="Body">
      <div class="container" >
          <div class="title">个人资料</div>
          <hr>
          <!-- 用户头像 -->
          <div style="height:100%;" >
          <div class="user-header" style="height:100%;width: 15%;">
            <!-- 只接受png格式的图片，可改 -->
            <input type="file" name="image" accept="image/png" @change='onchangeImgFun'
              class="header-upload-btn user-header-com" :disabled="isread">
            <img  alt="" :src="imgStr" class="user-header-img user-header-com" >
          </div>
          <!-- 用户信息 -->
          <div  style="height:100%;">
            <el-form label-width="100px">
              <el-form-item  label="用户名：">
                <el-input :readonly="isread" v-model="form.userName" />
              </el-form-item>
              
              <el-form-item  label="姓名：">
                <el-input :readonly="isread" v-model="form.name" />
              </el-form-item>

              <el-form-item  label="邮箱：">
                <el-input :readonly="isread" v-model="form.email" />
              </el-form-item>
              
            </el-form>
              <!-- 班级信息 -->
            <el-form label-width="100px"  
                      v-for="ruleForm in ruleForm" 
                      :key="ruleForm" 
                      :model="ruleForm" 
                      class="demo-ruleForm">
                      <el-row>
                        <el-col :span="7">
                          <el-form-item label="班级信息：">
                            <el-select :disabled="isread" v-model="ruleForm.degree" placeholder="选择时期">
                              <el-option label="本科" value="本科" />
                              <el-option label="硕士" value="硕士" />
                              <el-option label="博士" value="博士" />
                            </el-select>
                          </el-form-item>
                        </el-col>
                        <el-col :span="7">
                          <el-form-item  label="">
                            <el-input  :readonly="isread" v-model="ruleForm.grade" placeholder="输入年级"/>
                          </el-form-item>
                        </el-col>
                        <el-col :span="7">
                          <el-form-item  label="">
                            <el-input :readonly="isread" v-model="ruleForm.profession" placeholder="输入专业" />
                          </el-form-item>
                        </el-col>
                        <el-col :span="7">
                          <el-form-item  label="">
                            <el-input  :readonly="isread" v-model="ruleForm.classs" placeholder="输入班级"/>
                          </el-form-item>
                        </el-col>
                        <el-col :span="7">
                          <el-form-item label="">
                            <el-select  :disabled="isread" v-model="ruleForm.region" placeholder="选择校区">
                              <el-option label="旗山校区" value="旗山校区" />
                              <el-option label="铜盘校区" value="铜盘校区" />
                              <el-option label="怡山校区" value="怡山校区" />
                              <el-option label="厦门校区" value="厦门校区" />
                              <el-option label="晋江校区" value="晋江校区" />
                              <el-option label="泉港校区" value="泉港校区" />
                            </el-select>
                          </el-form-item>
                        </el-col>
                        <el-col :span="7">
                          <el-button type="primary" :disabled="isread" @click="add">+</el-button>
                          <el-button @click="reduce" :disabled="flag||isread">-</el-button>
                        </el-col>
                      </el-row>
            </el-form>


            <!-- 按钮部分 -->
            <el-form label-width="100px">
              <el-form-item>
                  <el-button type="primary" @click="changeIsread">修改</el-button>
                  
                  <el-button @click="onSubmit">保存</el-button>
                </el-form-item>
            </el-form>
           
          </div>
          </div>
          </div>
      </div>
    </div>
</template>
<script >
export default {
  name: 'about',
  data () {
    return {
      imgStr: require("../assets/head.png"),
      // errorStr: ''
      form:{
        userName: '',
        name: '',
        email: ''
      },
      //班级搜索的表单数据
      ruleForm: [{
              degree: '本科',
              grade: '2020级',
              profession: '计算机科学与技术',
              region: '旗山校区',
              classs: '01班',
        }],
        // flag是控制如果只有一个表单的时候删除表单按钮为禁用状态
        flag: true,
        isread: 1,
    }
  },
  methods: {
    onchangeImgFun (e) {
      var file = e.target.files[0]
      console.log(file)
      // 获取图片的大小，做大小限制有用
      let imgSize = file.size
      console.log(imgSize)
      var _this = this // this指向问题，所以在外面先定义
      // 比如上传头像限制5M大小，这里获取的大小单位是b
      if (imgSize <= 50 * 1024) {
        // 合格
        _this.errorStr = ''
        console.log('大小合适')
        // 开始渲染选择的图片
        // 本地路径方法 1
        // this.imgStr = window.URL.createObjectURL(e.target.files[0])
        // console.log(window.URL.createObjectURL(e.target.files[0])) // 获取当前文件的信息

        // base64方法 2
        var reader = new FileReader()
        reader.readAsDataURL(file) // 读出 base64
        reader.onloadend = function () {
          // 图片的 base64 格式, 可以直接当成 img 的 src 属性值
          var dataURL = reader.result
          console.log(dataURL)
          _this.imgStr = dataURL
          // 下面逻辑处理
        }
      } else {
        console.log('大小不合适')
        _this.errorStr = '图片大小超出范围'
      }
    },
    changeIsread() {
      this.isread = 0;
    },
    onSubmit() {
      this.isread = 1;
      this.flag = 1;
      //保存需要检测表单输入是否与后台匹配（？）正确，头像大小是否符合要求，用户名是否无重复（？）
      //若满足，更新后台数据
    },
    // 班级信息 表单添加一行
    add() {
      var arr = { degree: '', grade: '', profession: '',  region: '', classs: ''}
      this.ruleForm.push(arr)
      this.flags()
    },
    // 班级信息 表单减少一行
    reduce() {
      this.ruleForm.length = this.ruleForm.length - 1
      this.flags()
    },
    // 判断数组长度
    flags() {
      if (this.ruleForm.length < 2) {
        this.flag = true
      } else {
      	//先赋值为true再赋为false, 不然会没反应
        this.flag = true
        this.flag = false
      }
    },
  },
  }


</script>
<style>
.Body {
  background: #EDE0D7;
  height: 550px;
  padding: 30px;
}

.container {
  border-radius: 30px;
  background-color: rgba(255,255,255,0.59);
  height: 91%;
  padding: 25px;
}

.title {
  font-size: 37px;
  font-weight: normal;
  text-align: left;
  height: 12%;
}
.user-header{
  /* position: relative; */
  /* display: inline-block; */
  float: left;
}
.user-header-com{
  width: 144px;
  height: 144px;
  display: inline-block;
}
.header-upload-btn{
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  /* 通过定位把input放在img标签上面，通过不透明度隐藏 */
}
</style>
