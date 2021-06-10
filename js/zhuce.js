var form=document.querySelector('form')
    var pwd1=document.querySelector('[name="pwd1"]')
    var pwd2=document.querySelector('[name="pwd2"]')
  
    var user1=document.querySelector('[name="username"]')
    var user=document.querySelector('[name="username1"]') 
    var email=document.querySelector('[name="email"]')
    var zh1=document.querySelector('[name="zheng"]')
    var xuans=document.querySelector('[name="xuan"]')
    var spans=document.querySelectorAll('span')
    var u1=false
    var u2=false
    var em1=false
    var z1=false
    var p1=false
    var p2=false
    var x1=false
    var btn=document.querySelector("[type='button']")
    var   search1=location.search
    pwd1.onblur=function(){
        var val=this.value
        var reg1=/^\w{6,16}$/
        if(reg1.test(val)){
            // spans[5].innerHTML='√'
            var a=0
            var b=0
            var c=0
            var d=0
            for(var i=0;i<val.length;i++){
                if("0"<=val[i] && val[i]<=9){
                    a=1
                }else if('a'<=val[i] && val[i]<='z'){
                    b=1
                }else if('A<=val[i' && val[i]<='Z'){
                    c=1
                }else{
                    d=1
                }
            }
            if(a+b+c+d==1){
                spans[5].innerHTML='老铁你的密码有点弱哦'
                spans[5].style.color="green"
            }else if(a+b+c+d==2){
                spans[5].innerHTML='老铁你的密码还行'
                spans[5].style.color="blue"
            }else if(a+b+c+d>2){
                spans[5].innerHTML='老铁你的密码太强了'
                spans[5].style.color="purple"
            }
            p1=true
        }
        else{
            spans[5].innerHTML="你的输入有误，请输入六位以上的数字或字母"
            spans[5].style.color="red"
            // this.focus()
            p1=false
        }
    }

    pwd2.onblur=function(){
        var val=this.value
        var val2=pwd1.value
        var reg1=/^\w{6,16}$/
        if(val==val2 && reg1.test(val)){
            spans[6].innerHTML='密码一致'
            spans[6].style.color='green'
            p2=true
        }else{
            spans[6].innerHTML='你与上一次输入的密码不一致'
            spans[6].style.color='red'
            // this.focus()
            p2=false
        }
    }
    xuans.onclick=function(){
        if(xuans.checked){
            xuans.checked=true
            spans[4].innerHTML='我已阅读仔细'
            spans[4].style.color='red'
            x1=true
        }else{
            xuans.checked=false
            spans[4].innerHTML='请必须勾选阅读'
            spans[4].style.color='red'
            x1=false
        }
    }
    user1.onfocus=function(){
        
        if(user1.value=="请填写用户名" ){
            user1.value=''
        }
       
       
      
    }
    user1.onblur=function(){
        if(user1.value==''){
            user1.value="请填写用户名" 
        }
      
        var val=this.value
        var reg1=/^\w{6,30}$/
        var reg2=/^\d{6,30}$/
        var reg3=/^[一-龟]{2,8}$/
        if(reg1.test(val) ||  reg3.test(val)){
            spans[0].innerHTML="√"
           u1=true
         spans[0].style.color="green"
        }else{
            spans[0].innerHTML='账号输入有误,请输入6-30位数字或6-30位字母和数字或纯汉字'
            spans[0].style.color='red'
            // this.focus()
            u1=false
        }
       
    }
    user.onfocus=function(){
        if(user.value=="请填写你的姓名"){
            user.value=''
        }
        user.style.color='#ccc'
      
    }
    user.onblur=function(){
        if(user.value==''){
            user.value="请填写你的姓名" 
        } 
        user.style.color='#ccc'
     
        var val=this.value
        var reg=/^[一-龟]{2,5}$/
        if(reg.test(val)){
            spans[1].innerHTML='√'
            u2=true
            spans[1].style.color="green"
        }else{
            spans[1].innerHTML="你的输入有误，请输入你的真实姓名"
            spans[1].style.color="red"
            // this.focus()
            u2=false
        }
     
    }
    email.onfocus=function(){
        if(email.value=='请填写你的邮箱'){
            email.value=''
        }else{
            email.style.color='#ccc'
        }

    }
    email.onblur=function(){
        if(email.value==''){
            email.value="请填写你的邮箱"
        }else{
            email.style.color='#ccc'
        }
       var val=this.value
       var reg1=/^\w{6,}@(163|126|qq|sina)\.(com|cn|net)$/
       if(reg1.test(val)){
           spans[2].innerHTML='√'
           spans[2].style.color='green'
           em1=true
       }else{
           spans[2].innerHTML='你的输入格式有误'
           spans[2].style.color='red'
        //    this.focus()
           em1=false
       }
    }
    zh1.onblur=function(){
        if(zh1.value==''){
            zh1.value='请填写你的身份证号码'
        }
        var val=this.value
        var reg1=/^\d{15}|\d{}18$/
        if(reg1.test(val)){
            spans[3].innerHTML='√'
            spans[3].style.color='green'
            z1=true
        }else{
            spans[3].innerHTML='你的输入有误，请输入正确的格式'
            spans[3].style.color='red'
            // this.focus()
            z1=false
        }
    }
    zh1.onfocus=function(){
        if(zh1.value=='请填写你的身份证号码'){
            zh1.value=''
        }
    }
    form.onsubmit=function(){
        if(p1 && p2 && u2 && u1 && em1 && z1 && x1){
           return true
        }else{
            pwd1.onblur()
            pwd2.onblur()
            user1.onblur()
            user.onblur()
            email.onblur()
            zh1.onblur()
            xuans.onclick()
            return false
        }
    }
    // btn.onclick=function(){
    //     var user2=user1.value
    //     var pass=pwd1.value
    //     ajax({
    //         url:'../php/zhuce.php',
    //         data:`username=${user2}&password=${pass}`,
    //         success:function(dt){
    //                 if(dt==1){
    //                     //保存账号
    //                     setCookie("name",user2)
    //                     //判断当前search1是否有值
    //                     if(search1){
    //                         //分割参数得到地址
    //                         var url1=search1.split('=')[1]
    //                         // 跳转到指定地址
    //                         location.href=url1
    //                     }else{
    //                          //跳转到列表页
    //                         location.href='./login.html'
    //                         console.log(search1)
    //                     }
                       
                       
    //                 }else{
    //                     alert("注册失败")
    //                     location.href='./zhuce.html'
    //                 }
    //         }
    //     })
    // }
    