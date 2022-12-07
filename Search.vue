<template>
    <div class="search" style="height:100%">
        <!-- 预留要引用组件 -->
        <div class="first" style="height:8%">
            <topBar name="福友圈"></topBar>
        </div>
        <div class="second" style="height:10%">
            <bbsTopBar></bbsTopBar>
        </div>
        <div class="Body">
            <div class="container">
                <div class="title">班级搜索</div>
                <hr>
                <div style="position:relative;">
                    <!-- 表单收集查询信息 -->
                    <el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-form-inline">
                        <el-form-item label="校区" prop="region">
                            <el-select v-model="ruleForm.region" placeholder="选择校区">
                                <el-option label="旗山校区" value="旗山校区" />
                                <el-option label="铜盘校区" value="铜盘校区" />
                                <el-option label="怡山校区" value="怡山校区" />
                                <el-option label="厦门校区" value="厦门校区" />
                                <el-option label="晋江校区" value="晋江校区" />
                                <el-option label="泉港校区" value="泉港校区" />
                            </el-select>
                        </el-form-item>

                        <el-form-item label="学历" prop="degree">
                            <el-select v-model="ruleForm.degree" placeholder="选择学历">
                                <el-option label="本科" value="本科" />
                                <el-option label="硕士" value="硕士" />
                                <el-option label="博士" value="博士" />
                            </el-select>
                        </el-form-item>

                        <el-form-item label="专业" prop="profession">
                            <el-input v-model="ruleForm.profession" placeholder="请输入专业的全称"></el-input>
                        </el-form-item>

                        <el-form-item label="年级" prop="grade">
                            <el-input v-model="ruleForm.grade" placeholder="例：2020级"></el-input>
                        </el-form-item>

                        <el-form-item label="班级" prop="Class">
                            <el-input v-model="ruleForm.Class" placeholder="如一班，请输入01"></el-input>
                        </el-form-item>

                        <el-form-item label="同学姓名" prop="sname">
                            <el-input v-model="ruleForm.sname" placeholder="请输入要搜索的同学姓名"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">查询</el-button>
                        </el-form-item>
                    </el-form>
                    
                    <!-- 查询结果展示 -->
                    <el-table :data="tableData" border style="width:100% ;" v-show="showTable">
                        <el-table-column v-for="items in tableDataType"
                                        :prop="items.nameProp"
                                        :label="items.nameLable"> </el-table-column>
                    </el-table>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import topBar from '../components/topBar.vue'
import bbsTopBar from '../components/bbsTopBar.vue'
export default {
    components:{
          topBar,
          bbsTopBar,
        },
    data() {
        return {
            //设置返回结果的表格显示与否
            showTable:false,
            //查询表单
            ruleForm: {
                region: '',//校区
                degree: '',//学历
                grade: '',//年级
                profession: '',//专业
                Class: '',//班级
                sname: ''//同学姓名
            },
            //表单验证
            rules:{
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
            tableDataType: [{
                nameLable: '学号',
                nameProp: 'sno'
                }, {
                nameLable: '姓名',
                nameProp: 'sname'

                }, {
                nameLable: '邮箱',
                nameProp: 'email'
                }, {
                nameLable: '用户名',
                nameProp: 'username'
            }],
            tableData: [{
                // sno: '',
                // sname: '',
                // email: '',
                // username: ''
                }



                
            ]
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            //表单验证通过
            if (valid) {
                console.log(this.ruleForm);
                alert('submit!')
                //用formData提交表单
                let formData = new FormData();
                for(let key in this.ruleForm){
                    formData.append(key,this.ruleForm[key]);
                    console.log(formData.get(key));
                }
                this.axios({
                    method:"post",
                    url:"http://www.fzuprrxd.work/bbs/class_search/",
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                    withCredentials:true,
                    data:formData
                }).then((response)=>{
                    console.log(response);
                     //回显表格
                    // this.tableData.push
                    this.showTable=true;
                });
            
            } else {
                console.log('error submit!!')
                return false
            }
            })
            
        },




        
      },
    
}
</script>
<style>
.Body {
  background: #EDE0D7;
  padding: 30px;
  height: auto;
  min-height: 82%;
  position: relative;
}

.container {
  border-radius: 30px;
  background-color: rgba(255,255,255,0.59);
  width: 95%;
  padding: 25px;
  min-height: 500px;
  position: relative;
}

.title {
  font-size: 37px;
  font-weight: normal;
  text-align: left;
  height: 12%;
}
</style>