<template>
  <div class="photo" style="height:100%">
      <div class="first" style="height:8%">
        <topBar name="福友圈"></topBar>
      </div>
      <div class="second" style="height:10%">
        <bbsTopBar></bbsTopBar>
      </div>
    <!-- 内容 -->
      <div class="Body">
        <!-- 下拉框 -->
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
          <!-- 照片与按钮 -->
          <div class="content" style="position: relative;">
              <img class="background" :src="imge" alt="" >
              <!-- 截图区域是下面这个div -->
              <div class="left" style="position:absolute;top: 10%;left:7%;height: 70%;width: 65%;float: left;" ref="downloadImage">
                  <img class="image" :src="imge" alt="" >
                  <!-- 从后端处理过拿来的可拖拽的图片 -->
                  <!-- <div style="position: absolute;" v-for="s in imageUrl"> -->
                    <div>
                    <!-- <img class="image2" :src="s" alt="" @mousedown="move($event)"> -->
                    <img class="image2" @mousedown="move($event)" src="https://wanyximg.mzuimg.net/softImg/soft/1650_s.jpg" alt="">
                  </div>
              </div>
              <!-- 截图后的图片展示 -->
              <!-- <img class="big" :src="dataURL"> -->
              <!-- 上传 保存 -->
              <div class="right" style="position:absolute;top: 20%;left: 75%;width:20%;float: left;">
                 <!-- action上传地址、on-exceed文件超出最大上传个数时触发的函数、 -->
                  <el-upload
                  class="upload-demo"
                  action="http://www.fzuprrxd.work/bbs/AI_PIL/"
                  accept=".jpg,.png"
                  :limit='1'
                  :on-exceed="handleExceed"
                  :before-upload="beforeAvatarUpload"
                  :file-list="fileList"
                  :auto-upload="false"
                  :on-remove="handleRemove"
                  :on-preview="handlePreview"
                  :before-remove="beforeRemove"
                  >
                  <el-button size="big" type="primary" >上传人像</el-button>
                  <template #tip>
                      <div class="el-upload__tip">只能上传三张 jpg/png 人像图片</div>
                  </template>
                  </el-upload>
                  <el-button size="big" type="primary" @click="toImage">保存合影</el-button>
              </div>
            
          </div>
      </div>
  </div>

</template>
<script>
// import $ from 'jquery'
import html2canvas from 'html2canvas'
import axios from 'axios'
import topBar from '../components/topBar.vue'
import bbsTopBar from '../components/bbsTopBar.vue'
axios.defaults.baseURL = 'http://www.fzuprrxd.work'
  export default {
    components:{
          topBar,
          bbsTopBar,
        },
    data () {
      return {
        //放合影的背景，还可以补充
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
        
        fileList: [
            // {
            //   name: '',
            //   url: '',
            // }
          ],
          //拖拽元素的参数
          positionX:0,
          positionY:0,
          //图片合成后的路径
          // dataURL: '',
          //后端处理返回的照片
          imageUrl:[],
          headers: { "Content-Type": "multipart/form-data" },
        
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
          
        },
        handleRemove(file, fileList) {
          console.log(file, fileList)
        },
        handlePreview(file) {
          console.log(file)
        },
        beforeRemove(file) {
          return this.$confirm(`确定移除 ${file.name}？`)
        },
        handleExceed(files, fileList) {
        this.$message.warning(
          `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
            files.length + fileList.length
          } 个文件`
        )
        },
        beforeAvatarUpload(file) {
          const isJPG = file.type === 'image/jpg'||'image/png';
         
          if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 或者 PNG 格式!')
          }
         
          return isJPG;
        },
        changeFile (val) {
          let formData = new FormData();
          //file是键，val.raw是要传的文件，val.name是要传的文件名
          formData.append('file', val.raw, val.name);
        },
        // changeFile (val) {
        //   let formData = new FormData();
        //   formData.append('file', val.raw, val.name);
        //   //上传接口
        //   Api.upload(formData).then((res) => {
        //     console.log(res);
        //     if (res.code== 200) {
        //       console.log('1');
        //     }
        //   })
        // },
        // handleChange(file,fileList){
        //   let reader = new FileReader();
        //   //读的是图片的base64
        //   reader.readAsDataURL(file.raw);
        //   reader.onload = (e) => {
        //     this.fileList.push({ name: file.raw.name, url: e.target.result });
        //   }
         
        //   console.log(fileList);
        // },
        // handleChange(file,fileList){

        //   this.fileList = fileList;
        // },
        // submit(){         
        //   var param = new FormData();
        //   this.fileList.forEach(
				// 		(val, index) => {
				// 			param.append("file", val.raw);
				// 		}
				// 	);
				// 	axios.post("http://www.fzuprrxd.work/bbs/AI_PIL/", param).then(responce => {});

				// 	this.$message({
				// 		message: "上传成功！",
				// 		duration: 1000
				// 	});
        // },
        uploadSuccess(response){
          console.log(response);
          // this.imageUrl.push(URL.createObjectURL(file.raw));//check！！！！！！！！！
          // this.imageUrl.push(res.url);
          console.log("success!");

          this.$refs.upload.clearFiles();
        },
        handleChange(file,fileList){
          if (fileList.length > 1) {
            fileList.splice(0, 1);
          }
        },
        // 拖拽元素相关的方法
        move(e){
          let odiv = e.target;        //获取目标元素
          
          //算出鼠标相对元素的位置
          let disX = e.clientX - odiv.offsetLeft;
          let disY = e.clientY - odiv.offsetTop;
          document.onmousemove = (e)=>{       //鼠标按下并移动的事件
              //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
              let left = e.clientX - disX;    
              let top = e.clientY - disY;
              
              //绑定元素位置到positionX和positionY上面
              this.positionX = top;
              this.positionY = left;
              
              //移动当前元素
              odiv.style.left = left + 'px';
              odiv.style.top = top + 'px';
          };
          document.onmouseup = (e) => {
              document.onmousemove = null;
              document.onmouseup = null;
          };
        }, 
        //合成图片
        toImage() {
          html2canvas(this.$refs.downloadImage,{
              backgroundColor: null,  //取消图片白边问题
              useCORS: true,  //如果是动态加载的图片 获取图片
          }).then((canvas) => {
              // let dataURL = canvas.toDataURL("image/png");
              // this.dataURL = dataURL;
              let link = document.createElement("a");
              link.href = canvas.toDataURL();//下载链接
              link.setAttribute("download","虚拟合影.png");
              link.style.display = "none";//a标签隐藏
              document.body.appendChild(link);
              link.click();
          });
        },
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
  opacity: 0.4;
  width: 100%;
  vertical-align: middle;
  object-fit: cover;
  max-height: 700px;
  /* position: absolute; */
}
.image {
  position: absolute;
  /* size: 10%; */
  height: 100%;
  width: 100%;
  z-index: 1;
  display:block;
}
/* 可拖拽的图片 */
.image2 {
  position: absolute;
  /* size: 10%; */
  height: 100px;
  width: 100px;
  top: 5%;
  left: 100px;
  z-index: 10;
}
.content {
  width: 100%;
  float: left;
  height: 100%;
  /* height: auto; */
  position: absolute;
}
.big {
  width: 200px;
  height: 200px;
}
</style>

