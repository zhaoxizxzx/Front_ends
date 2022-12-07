<template>
    <div style="height:8%;">
        <topBar v-bind:name="$route.name"></topBar>
    </div>
    <div class="content" >
        <img class="background" src="../assets/院庆首页背景.png" alt="">
        <div class="image">
            <div style="float: left;width: 12%;height: 100%;"></div>
            <div style="float: left;width: 88%;height: 100%;">
                <img src="../assets/校标.png" alt="" style="height: 90%;width:10%">
                <img src="../assets/logo.png" alt="" style="height: 100%;width:60%;object-fit: cover;">
            </div>        
        </div>
        <div class="fourblock">
            <div class="block" style="position:relative;  text-align:left;">
                <div style="position:absolute;top: 10%;left: 10%;overflow:auto;float: left;height: 80%;width: 90%;">
                    <div style="width: 40%;height: 80%;float: left;">
                        <h2>院庆日程</h2>
                        <br>
                        <p>·10月22日 10：00</p>
                        <p>计算机交流讲座--明德厅</p>
                        <p>·10月22日 14：00</p>
                        <p> 百家讲坛--明德厅</p>
                        <p>·10月22日 全日游校</p>
                    </div>
                </div>
            </div>
            <div class="block" style="position:relative;  text-align:left;">
                <div style="position:absolute;top: 10%;left: 10%;overflow:auto;float: left;height: 80%;width: 90%;">
                    <div style="width: 40%;height: 80%;float: left;">
                        <h2>大事记</h2>
                        <br>
                        <p>【喜迎二十大】</p>
                        <br>
                        <p>永远跟党走，奋进新征程</p>
                        
                    </div>
                    <div style="width: 60%;height: 80%;float: left;position: relative;">
                        <img src="../assets/大事记.png" alt="" style="height: 120px;width:200px;top:20%;position:absolute;">
                    </div>
                </div>
            </div>
            <div class="block" style="position:relative;  text-align:left;">
                <div style="position:absolute;top: 10%;left: 10%;overflow:auto;float: left;height: 80%;width: 90%;">
                    <div style="width: 40%;height: 80%;float: left;">
                        <h2>院庆祝福</h2>
                        <br>
                        <p>院庆四十周年之际，我</p>
                        <p>院杰出的校友，友校，</p>
                        <p>公司，社会人士录制了</p>
                        <p>视频祝福，为我院送上</p>
                        <p>了诚挚的祝福</p>
                    </div>
                    <div style="width: 60%;height: 80%;float: left;position: relative;">
                        <img src="../assets/院庆祝福.png" alt="" style="height: 100px;width:180px;top:20%;position:absolute;">
                    </div>
                </div>
            </div>
            <div class="block" style="position:relative;  text-align:left;">
                <div style="position:absolute;top: 10%;left: 10%;overflow:auto;float: left;height: 80%;width: 90%;">
                    <div style="width: 60%;height: 80%;float: left;">
                        <h2>校友风采</h2>
                        <p>张栋，男，1981年10月出生，中共</p>
                        <p>党员，福建福州人，现任福州大学</p>
                        <p>至诚学院副院长，博士，教授，博</p>
                        <p>士生导师，本，硕，博就读于浙江</p>
                        <p>大学，2010年博士毕业于浙江大学</p>
                        <p>计算机科学与技术专业</p>
                    </div>
                    <div style="width: 30%;height: 80%;float: left;position: relative;">
                        <img src="../assets/校友风采.jpg" alt="" style="height: 100px;width:170px;top:20%;position:absolute;">
                    </div>
                </div>
            </div>
        </div>
       
    </div>
</template>

<script>
import topBar from '../components/topBar.vue'
export default {
        components:{
          topBar,
        },
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
}
.content {
    height: 92%;
    position: relative;
}
.background {
    z-index: -1;
    opacity: 0.64;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
}
.image {
    height: 20%;
}
.fourblock{
    /* position: absolute; */
    height: 80%;
    
}
.block {
    border-radius: 30px;
    background-color: rgba(255,255,255,0.59);
    height: 45%;
    width: 40%;
    float: left;
    margin-top: 1%;
    margin-left: 6%;
}
</style>