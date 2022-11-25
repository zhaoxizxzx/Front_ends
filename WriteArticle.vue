<template>
    <div style="height:100%">
        <div style="height:8%">

        </div>
        <div style="height:10%">
            
        </div>
        <div class="Body">
            <div class="container">
                <div class="title">
                    <p>发布帖子</p>  
                </div>
                <div>
                    <el-button>发布</el-button>
                </div> 
                <hr>
                <div class="input_title">
                    <el-input type="text" v-model="input" placeholder="请输入标题" />
                </div>
                <div class="input_content">

                </div>
            </div>
        </div>
    </div>
</template>

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
    box-shadow: 4px 4px 10px rgb(135, 133, 133);
}
.container .title {
    font-size: 37px;
    font-weight: normal;
    text-align: center;
    height: 12%;
    width: 20%;
    display: block;
    float: left;
}
.container hr{
    margin-top: 9%;
}
.container .el-button{
    display: block;
    float: right;
    width: 10%;
    margin-top: 5%;
    margin-right: 6%;
    background-color: #980F17;
    border-color: #980F17;
    color: aliceblue;
    transition: all 0.3s;
    box-shadow: 4px 4px 5px rgb(135, 133, 133);
}
.container .el-button:hover{
    transform: scale(1.05);
}
.container .input_title{
    margin-top: 2%;
    height: 10%;
    width: 91%;
    margin-left: 3%;
    background-color: #ffffff;
    border-radius: 5px;
}
.container .input_title .el-input{
    height: 100%;
}
.container .input_content{
    margin-top: 2%;
    height: 55%;
    width: 91%;
    margin-left: 3%;
    background-color: #ffffff;
    border-radius: 5px;
    border-style: solid;
    border-color: #cbc7c7;
}
</style>

