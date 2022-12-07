<template>
  <div class="about" style="height:100%">
    <div class="first" style="height:8%">
      <topBar name="福友圈"></topBar>
    </div>
    <div class="second" style="height:10%">
      <bbsTopBar></bbsTopBar>
    </div>
    <div class="Body">
      <div class="container" >
          <div class="title">个人资料</div>
          <hr>
          <div  style="position: relative;height: auto;">
            <div class="left" style="position:relative;display: inline-block;width:85%;">
              <!-- 用户信息 -->
              <p class='word' style="text-align:left;">基本资料</p>
              <el-form label-width="100px" :model="form" :rules="rules1" ref="form" >
                <el-form-item  label="用户名：" prop="userName">
                  <span v-show="!edit1">{{form.userName}}</span>
                  <el-input :readonly="isread" v-model="form.userName"  v-show="edit1" disabled/>
                </el-form-item>
                
                <el-form-item  label="姓名：" prop="name">
                  <span v-show="!edit1">{{form.name}}</span>
                  <el-input :readonly="isread" v-model="form.name" v-show="edit1"/>
                </el-form-item>

                <el-form-item  label="邮箱：" prop="email">
                  <span v-show="!edit1">{{form.email}}</span>
                  <el-input :readonly="isread" v-model="form.email" v-show="edit1"/>
                </el-form-item>
                
              </el-form>
               <!-- 基本信息按钮部分 -->
               <el-form label-width="100px">
                <el-form-item>
                    <el-button type="primary" @click="changeBasic">修改</el-button>
                    
                    <el-button @click="submitBasic('form')">保存</el-button>
                  </el-form-item>
              </el-form>
              <!-- 班级信息 -->
              <p class='word' style="text-align:left;">校友认证</p>
              <el-form label-width="100px"  
                        v-for="ruleForm in ruleForm" 
                        :key="ruleForm" 
                        :model="ruleForm" 
                        :rules="rules2"
                        ref="ruleForm"
                        class="demo-ruleForm">
                        <el-row>
                          <el-col :span="7">
                            <el-form-item label="学历：" prop="degree">
                              <span v-show="!edit2">{{ruleForm.degree}}</span>
                              <el-select :disabled="isread" v-model="ruleForm.degree" v-show="edit2" placeholder="请选择学历">
                                <el-option label="本科" value="本科" />
                                <el-option label="硕士" value="硕士" />
                                <el-option label="博士" value="博士" />
                              </el-select>
                            </el-form-item>
                          </el-col>
                          <el-col :span="7">
                            <el-form-item  label="年级：" prop="grade">
                              <span v-show="!edit2">{{ruleForm.grade}}</span>
                              <el-input  :readonly="isread" v-model="ruleForm.grade" v-show="edit2" placeholder="请输入年级，例：2020级"/>
                            </el-form-item>
                          </el-col>
                          <el-col :span="7">
                            <el-form-item  label="专业：" prop="profession">
                              <span v-show="!edit2">{{ruleForm.profession}}</span>
                              <el-input :readonly="isread" v-model="ruleForm.profession" v-show="edit2" placeholder="请输入专业全称" />
                            </el-form-item>
                          </el-col>
                          <el-col :span="7">
                            <el-form-item  label="班级：" prop="Class">
                              <span v-show="!edit2">{{ruleForm.Class}}</span>
                              <el-input  :readonly="isread" v-model="ruleForm.Class" v-show="edit2" placeholder="请输入班级，例：01"/>
                            </el-form-item>
                          </el-col>
                          <el-col :span="7">
                            <el-form-item label="校区："  prop="region">
                              <span v-show="!edit2">{{ruleForm.region}}</span>
                              <el-select  :disabled="isread" v-model="ruleForm.region" v-show="edit2" placeholder="选择校区">
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
                            <el-button type="primary" :disabled="!edit2" @click="add">+</el-button>
                            <el-button @click="reduce" :disabled="(flag||!edit2)">-</el-button>
                          </el-col>
                        </el-row>
              </el-form>
              <!-- 校友认证按钮部分 -->
              <el-form label-width="100px" >
                <el-form-item>
                    <el-button type="primary" @click="changeClass">认证</el-button>
                    
                    <el-button @click="submitClass('ruleForm')">保存</el-button>
                  </el-form-item>
              </el-form>
            
            </div>
            <div class="right" style="position:relative;display: inline-block;float:right;width: 15%;">
            <!-- 用户头像 -->
            <!-- <div class="user-header" style="height:100%;width: 15%;position: absolute;top: 0%;"> -->
              <!-- 只接受png格式的图片，可改 -->
              <input type="file" name="image" accept="image/png" @change='onchangeImgFun'
                class="header-upload-btn user-header-com" :disabled="!edit1">
              <img  alt="" :src="imgStr" class="user-header-img user-header-com">
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script >
import topBar from '../components/topBar.vue'
import bbsTopBar from '../components/bbsTopBar.vue'
export default {
  name: 'about',
  components:{
          topBar,
          bbsTopBar,
        },
  data () {
    return {
      //基本-输入框与文本的切换
      edit1:false,
      //校友认证-输入框与文本的切换
      edit2:false,
      //用户头像
      imgStr: require("../assets/head.png"),
      // imgStr:'',
      // errorStr: ''
      //基本资料的表单
      form:{
        userName: 'Stella',
        name: '陈鑫鑫',
        email: '1688322199@qq.com'
      },
      rules1:{
                name:[
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                ],
                email:[
                    { required: true, message: '请输入邮箱', trigger: 'blur' },
                ]
            },
      //校友认证的表单数据
      ruleForm: [
        {
              degree: '本科',
              grade: '2020级',
              profession: '计算机科学与技术',
              region: '旗山校区',
              Class: '01班',
        },
      
      ],
      rules2:{
                region:[
                    { required: true, message: '请输入校区', trigger: 'blur' },
                ],
                degree:[
                    { required: true, message: '请输入学历', trigger: 'blur' },
                ],
                profession:[
                    { required: true, message: '请输入专业', trigger: 'blur' },
                ],
                grade:[
                    { required: true, message: '请输入年级', trigger: 'blur' },
                ],
                Class:[
                    { required: true, message: '请输入班级', trigger: 'blur' },
                ]
                
            },
        // flag是控制如果只有一个表单的时候删除表单按钮为禁用状态
        flag: true,
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
      if (imgSize <= 500 * 1024) {
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
    //基本信息修改
    changeBasic(){
      //文本变成输入框
      this.edit1=true;
    },
    //校友认证修改
    changeClass() {
      if (this.ruleForm.length == 0){
        //文本变成输入框
        this.edit2=true;
      }
      else{
        //文本变成输入框
      this.edit2=true;
      }
      
    },
    //基本信息保存
    submitBasic(formName) {
      //表单验证
      this.$refs[formName].validate((valid) => {
      if (valid){
        //输入框变成文本
        this.edit1=false;
      }
      else{

      }
      })
      
      //保存需要检测表单输入是否与后台匹配（？）正确，头像大小是否符合要求，用户名是否无重复（？）
      //若满足，更新后台数据
    },
    //校友认证保存
    submitClass(formName) {
      //表单验证
      this.$refs[formName[0]].validate((valid) => {
      if (valid){
        this.flag = 1;
        //输入框变成文本
        this.edit2=false;
      }
      else{

      }
      })
      
      //保存需要检测表单输入是否与后台匹配（？）正确，头像大小是否符合要求，用户名是否无重复（？）
      //若满足，更新后台数据
    },
    // 班级信息 表单添加一行
    add() {
      var arr = { degree: '', grade: '', profession: '',  region: '', Class: ''}
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
        this.flag = true;
      } else {
      	//先赋值为true再赋为false, 不然会没反应
        this.flag = true;
        this.flag = false;
      }
    },
  },
  }


</script>
<style>
.Body {
  background: #EDE0D7;
  min-height: 82%;
  height: auto;
  padding: 30px;
  position: relative;
}

.container {
  border-radius: 30px;
  background-color: rgba(255,255,255,0.59);
  min-height: 500px;
  width: 95%;
  padding: 25px;
  position: relative;
}
.word{
  /* font-weight:bold; */
  font-size: 120%;
  text-align: left;
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
