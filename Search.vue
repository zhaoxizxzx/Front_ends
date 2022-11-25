<template>
    <div class="search" style="height:100%">
        <!-- 预留要引用组件 -->
        <div class="first" style="height:8%">
        预留1
        </div>
        <div class="second" style="height:10%">
        预留2
        </div>
        <div class="Body">
            <div class="container">
                <div class="title">班级搜索</div>
                <hr>
                <div style="height:90%;">
                    <!-- 表单收集查询信息 -->
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item label="校区">
                            <el-select v-model="formInline.region" placeholder="选择校区">
                                <el-option label="旗山校区" value="旗山校区" />
                                <el-option label="铜盘校区" value="铜盘校区" />
                                <el-option label="怡山校区" value="怡山校区" />
                                <el-option label="厦门校区" value="厦门校区" />
                                <el-option label="晋江校区" value="晋江校区" />
                                <el-option label="泉港校区" value="泉港校区" />
                            </el-select>
                        </el-form-item>

                        <el-form-item label="学历">
                            <el-select v-model="formInline.degree" placeholder="选择学历">
                                <el-option label="本科" value="本科" />
                                <el-option label="硕士" value="硕士" />
                                <el-option label="博士" value="博士" />
                            </el-select>
                        </el-form-item>

                        <el-form-item label="专业">
                            <el-input v-model="formInline.profession" placeholder="请输入专业的全称"></el-input>
                        </el-form-item>

                        <el-form-item label="年级">
                            <el-input v-model="formInline.grade" placeholder="例：2020级"></el-input>
                        </el-form-item>

                        <el-form-item label="班级">
                            <el-input v-model="formInline.classs" placeholder="如一班，请输入01"></el-input>
                        </el-form-item>

                        <el-form-item label="同学姓名">
                            <el-input v-model="formInline.sname" placeholder="请输入要搜索的同学姓名"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">查询</el-button>
                        </el-form-item>
                    </el-form>
                    
                    <!-- 查询结果展示 -->
                    <el-table :data="tableData" border style="width:100% ">
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
export default {
    data() {
        return {
            formInline: {
                degree: '',
                grade: '',
                profession: '',
                region: '',
                classs: '',
                sname: ''
            },
            tableDataType: [{
                nameLable: '学号',
                nameProp: 'sno'
                }, {
                nameLable: '姓名',
                nameProp: 'sname'

                }, {
                nameLable: '联系电话',
                nameProp: 'telephone'
                }, {
                nameLable: '论坛账号',
                nameProp: 'account'
            }],
            tableData: [{
                sno: '',
                sname: '',
                telephone: '',
                account: ''
                }, {

                }, {

                }, {

                }
                
            ]
        }
    },
    methods: {
      onSubmit() {
        //向后台请求数据
        console.log('submit!')
      },
    }
}
</script>
<style>
.Body {
  background: #EDE0D7;
  height: 82%;
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
</style>