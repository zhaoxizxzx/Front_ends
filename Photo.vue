<template>
    <div class="photo" style="height:100%">
        <div class="first" style="height:8%"></div>
        <div class="second" style="height:10%"></div>
        <div class="Body">
            <div class="dropdown-menu" style="height:6%;">
                <el-select class="select" v-model="value" placeholder="请选择校区" @change=selectOne size=large>
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="{value:item.value,label:item.label,version:item.version}">
                    </el-option>
                </el-select>
                <el-select class="select" v-model="value2" placeholder="请选择地点" @change=selectImg size=large>
                    <el-option
                    v-for="item in tempList"
                    :key="item.value"
                    :label="item.value"
                    :value="{key:item.key,value:item.value}">
                    </el-option>
                </el-select>
            </div>        
            <div style="position: relative;">
                <img class="background" :src="imge" alt="" >
                <div class="content" >
                    <div class="left">
                        <img class="image" :src="imge" alt="">
                    </div>
                    <div class="right">
                        <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        multiple
                        :limit="3"
                        :on-exceed="handleExceed"
                        :file-list="fileList"
                        >
                        <el-button size="big" type="primary">上传人像</el-button>
                        <template #tip>
                            <div class="el-upload__tip">只能上传 jpg/png 文件，且不超过 500kb</div>
                        </template>
                        </el-upload>
                        <el-button size="big" type="primary">保存合影</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
  data () {
    return {
      options: [{
        value: '选项1',
        label: '旗山校区',
        version: [
          {
            key: 1.1,
            value: '图书馆'
          },
          {
            key: 1.2,
            value: '福友阁'
          },
          {
            key: 1.3,
            value: '东三'
          }
        ]
      }, {
        value: '选项2',
        label: '铜盘校区',
        version: [
          {
            key: 2.1,
            value: '图书馆'
          },
          {
            key: 2.2,
            value: '教学楼'
          }
        ]
      }],
      value: '',
      value2: '',
      tempList: [],
      imge: require('../assets/1.1图书馆.png'),
      //上传人像
      fileList: [
          {
            name: '',
            url: '',
          }
        ],
    }
  },
  methods: {
    selectOne (params) {
      // debugger
      /* const { value, label, version} = params
        console.log(value, label, version) */
      this.value2 = ''
      this.tempList = params.version
    },
    selectImg (params) {
        this.imge = require('../assets/' + params.key + params.value +'.png');
        
    }
  }
}
</script>
<style>
*{
    padding: 0%;
    margin: 0%;
}
.Body {
  background-color: #EDE0D7;
  height: auto;
  
  /* position: fixed; */
}
.select {
   width: 50%;
}
.background{
    z-index: -1;
    opacity: 0.5;
    width: 100%;
    vertical-align: middle;
    object-fit: cover;
    max-height: 800px;
    /* position: absolute; */
}
.image {
    position: absolute;
    /* size: 10%; */
    height: 500px;
    width: 800px;
    top: 5%;
    left: 100px;
    z-index: 1;
}
.content {
    width: 100%;
    float: left;
    /* height: auto; */
    position: absolute;
    left: 0;
    top: 20%;
}
.left {
    width: 70%;
    float: left;
    
}
.right {
    width: 30%;
    float: right;
}
</style>

