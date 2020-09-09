import axios from 'axios'
import {config} from "dotenv";
export function request(config,success,fail) {
    axios({
        url:config
    }).then(res => {
        success(res);
    }).catch(err => {
        fail(err);
    })
}  //第一种封装方式


export function request(config) {
    axios.default.baseURL = "Http://localhost:9999/student/student/findStudent";
    axios(config.url).then(
        res => {
            config.success(res);
        }
    ).catch(err => {
        config.fail(err);
    })
}  //第二种封装方式


let newVar = axios.create({
    baseURL: "Http://localhost:9999/student/student/findStudent",
    timeout: 5000
});
return new Promise((resolve, reject) => {
    newVar(config).then(res => {
        resolve(res);
    }).catch(err => {
        reject(err);
    });
});  //第三种封装方式


let newVar = axios.create({
    baseURL: "Http://localhost:9999/student/student/findStudent",
    timeout: 5000
});
return newVar(config);  //第四种方式,最简洁的方式,axios实例创建完之后默认返回promise实例,不需要进一步处理,直接返回就可以辽


function a1(){
    $.ajax({
        //url:待载入页面的url地址  json
        //data:待发送的key/value参数
        //success:载入成功时的回调函数
            //data:封装了服务器返回的数据
            //status:状态
        url:"${pageContext.request.contextPath}/ajax/a1",
        data:{"name":$("#txtName").val()},
        success:function (data,status) {
            console.log(data);
        }
    });

    //将文本输出的值
    $("txtName").val();
    //发送给服务器
}

<input type="text" id="txtName" onblur="a1()"/>