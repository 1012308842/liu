var box=document.querySelector('.container')
//获取localstorage中是否有catlist4
var catList4=localStorage.getItem("catList4")

    var name1=getCookie("name")
    if(name1){
        catList4=eval('('+catList4+')')
      show()
    //转为对象
    
    // console.log(catList4)
    
    }else{
        alert("您还未登录请登录")
         //获取当前地址栏信息
        var url=location.href
        location.href='./login.html?newUrl='+url;
    }
    function show(){
        if(catList4.length>0){
            //判断是否所有的商品中的is_select都为1
            var bool=catList4.every(item=>{
                return item.is_select==1
            })
        //拼接字符串
    var  str2=`<h2>这是一个购物车页面&nbsp;&nbsp;
    <a href="./list.html" class="btn btn-success">
        返回列表页</a></h2>
        <div class="panel panel-default">
            <div class="panel-heading">
                <input type="checkbox" name="quan" ${bool?"checked":''}>全选
                商品总类：<span>${catList4.length}</span>
                所选商品数量：<span>${total1()[0]}</span>
                所选商品价格：￥<span>${total1()[1]}</span>
                <button type="button" class="btn btn-success">去结算</button>
                <button type="button" class="btn btn-info">清空购物车</button>
            </div>
            <div class="panel-body">`
          
            //遍历数组中所有元素
            catList4.forEach(item => {
              str2+=`
    <div class="media">
    <div class="media-left">
        <input type="checkbox" name="xuan" ${item.is_select==1?"checked":''} data-id=${item.id}>
        <a href="#">
        <img class="media-object" src="${item.img}" style="width: 100px;height: 100px;">
        </a>
    </div>
    <div class="media-body" style="width: 87%;">
        <h4 class="media-heading">${item.title}
        </h4>
        <h3>￥${item.price}</h3>
        <button type="button" class="btn btn-info" data-id=${item.id}>我不要了</button>
        <div class="btn-group right1" role="group" aria-label="...">
        <button type="button" class="btn btn-default" data-id=${item.id}>-</button>
        <button type="button" class="btn btn-default">${item.cart_number}</button>
        <button type="button" class="btn btn-default" data-id=${item.id}>+</button>
        </div>
            </div>
            </div>
           
              `
            });
           str2+=`
            </div>
           </div>`
           box.innerHTML=str2
        }else{
            var str=`
            <h2>这是一个购物车页面&nbsp;&nbsp;
            <a href="./list.html" class="btn btn-success">
                返回列表页</a></h2>
                <div class="jumbotron">
          <h1>你的购物车空空如也!</h1>
          <p>点击下方按钮快去选购吧!</p>
          <p><a class="btn btn-primary btn-lg" 
          href="./list.html" role="button">赶紧去逛逛吧</a></p>
        </div>
            `
            box.innerHTML=str
        }
        
    }
    //给大盒子绑定点击事件
    box.onclick=function(e){
        var e=e || window.event
        var tar=e.target || e.srcElement
        if(tar.innerHTML=="+"){
            // console.log(tar)
            var id=tar.getAttribute("data-id")
          catList4.forEach(item=>{
              //判断是否为当前要操作的对象
              if(item.id==id){
                
                    item.cart_number++
                  
        
                   //把修改完毕的catlist4重新存储在localstorage中
            // localStorage.setItem("catList4",JSON.stringify(catList4))
            // show()
              }
              
          });
            //把修改完毕的catlist4重新存储在localstorage中
            localStorage.setItem("catList4",JSON.stringify(catList4))
            show()
        }
        if(tar.innerHTML=="-"){
              // console.log(tar)
              var id=tar.getAttribute("data-id")
              catList4.forEach(item=>{
                  //判断是否为当前要操作的对象
                  if(item.id==id){
                    if(item.cart_number<=1){
                        item.cart_number=1
                    }else{
                        item.cart_number--
                    }
                  }
                
              });
            
                //把修改完毕的catlist4重新存储在localstorage中
                localStorage.setItem("catList4",JSON.stringify(catList4))
                show()
            
        }
        if(tar.innerHTML=="我不要了"){
            var id=tar.getAttribute("data-id")
            catList4=catList4.filter(item=>{
                return item.id!=id
            })
             //把修改完毕的catlist4重新存储在localstorage中
             localStorage.setItem("catList4",JSON.stringify(catList4))
             show()
        }
        if(tar.name=="quan"){
            //遍历所有商品
           
            catList4.forEach(item=>{
                   // 、判断当前全选框是否被选中
                   if(tar.checked){
                       item.is_select=1
                   }else{
                    item.is_select=0
                   }
                
            });
        //把修改完毕的catlist4重新存储在localstorage中
        localStorage.setItem("catList4",JSON.stringify(catList4))
        show()
        }
        if(tar.name=="xuan"){
            var id=tar.getAttribute("data-id")
            // 遍历数组元素
            catList4.forEach(item=>{
                // 、判断当前操作的商品
               if(item.id==id){
                // 判断当前商品中is_select是否等于1
                if(item.is_select==1){
                    item.is_select=0
                }else{
                    item.is_select=1
                }
               }
             
         });
     //把修改完毕的catlist4重新存储在localstorage中
     localStorage.setItem("catList4",JSON.stringify(catList4))
     show()
        }
        if(tar.innerHTML=="去结算"){
            alert("你需要支付："+total1()[1])
            //过滤不满足条件的商品
            catList4=catList4.filter(item=>{
                return item.is_select!=1
            })
             //把修改完毕的catlist4重新存储在localstorage中
     localStorage.setItem("catList4",JSON.stringify(catList4))
     show()
        }
        if(tar.innerHTML=="清空购物车"){
            catList4=[]
              //把修改完毕的catlist4重新存储在localstorage中
     localStorage.setItem("catList4",JSON.stringify(catList4))
     show()
        }
    }
//计算所选商品价格
function total1(){
    var num=0
    var price=0
    var price1=0
    //遍历所有商品
    catList4.forEach(item=>{
        //
        if(item.is_select==1){
            num+=item.cart_number
            price+=num*parseFloat(item.price)
            console.log(price)
         price1=price.toFixed(2)
        }
    })
    return  [num,price1]
}
   

