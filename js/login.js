var checkbox1=document.querySelector( '[type="checkbox"]')
var btn=document.querySelector('[type="button"]')
var user1=document.querySelector('[name="username"]')
var pass1=document.querySelector('[name="pass"]')
//获取地址栏中的参数
var   search1=location.search
//判断当前选中框是否被选中
// 给选中框绑定点击事件
checkbox1.onclick=function(){
    if(checkbox1.checked){
        // 当选中框被选中时取消按钮的禁用
        btn.disabled=false
    }else{
        btn.disabled=true
    }
}
btn.onclick=function(){
    //获取输入框中的val值
    var u1=user1.value
    var p1=pass1.value
   
    //通过Ajax来发送请求
    ajax({
        url:'../php/login.php',
        data:`username=${u1}&password=${p1}`,
        success:function(dt){
                if(dt==1){
                    //保存账号
                    setCookie("name",u1)
                    //判断当前search1是否有值
                    if(search1){
                        //分割参数得到地址
                        var url1=search1.split('=')[1]
                        // 跳转到指定地址
                        location.href=url1
                    }else{
                         //跳转到列表页
                        location.href='./list.html'
                    }
                   
                   
                }else{
                    alert("登陆失败")
                }
        }
    })
}