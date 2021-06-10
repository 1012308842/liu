//湖区操作对象
var box=document.querySelector(".container")
// 获取地址栏中的信息
var search1=location.search
var dt;
//判断当前地址栏中是否有参数
if(search1){
  //分割字符串
  var ar1=search1.split("=")
  if(ar1[0]=="?id"){
  var id=ar1[1];
   (async function(){
       //发送请求并获取响应结果
      dt=await promiseAjax({
           url:'../php/xiangqing.php',
        data:'id='+id,
       })
       
       dt=dt.substring(1)
       dt=eval('('+dt+')')
      
       var  str=`
       <div style="width:100%;background:#D8E7FA;height:115px;padding-top:30px;";>
       <h2>丽丽数码之家99&nbsp;&nbsp;<a href="./list.html" class="btn btn-success">返回首页</a></h2>
      </div>
       <div class="panel panel-default">
           <div class="panel-heading">
               详情信息
           </div>
           <div class="panel-body">
               <div class="media">
                   <div class="media-left media-middle">
                     <a href="#">
                     <div class="box-n">
                     <div class="leftbox">
                     <img class="media-object" src="${dt.img}" class="img-left" style="width: 200px;height: 200px;">
                     <div class="mark"> </div>
                     <div class="rightbox">
                         <img src="${dt.img}" alt="" class="img-right">
                         </div>
                  
                     </div>
                     </a>
                   </div>
                          
                   <div class="media-body">
                  
                     <h4 class="media-heading">${dt.title}</h4>
                     <h4 class="media-heading" style="color:#ff0036">全网通4G 大字大声大屏
                     </h4>
                     <div  class="h3-1">
                     <p>原价格 &nbsp;&nbsp;&nbsp;<span 
                     style="color:#000;text-decoration: line-through;">${dt.price_old}</span></p>
                     <h3 style="color:#ff0036">价格 &nbsp;&nbsp;&nbsp;￥${dt.price}</h3>
                     </div>
                    <div class="btn-group" role="group" aria-label="...">
                       <button type="button" class="btn btn-default">8+128GB</button>
                       <button type="button" class="btn btn-default">9-256GB</button>
                       <button type="button" class="btn btn-default">16-512GB</button>
                       <button type="button" class="btn btn-default">12+256GB</button>
                       <button type="button" class="btn btn-default">16+256GB</button>
                     </div>
                     <br>
                     <br>
                     <div class="btn-group" role="group" aria-label="...">
                       <button type="button" class="btn btn-default"  style="color:#ff0036;margin:0 10px 0 0;">官方标配</button>
                       <button type="button" class="btn btn-default">套餐一</button>
                       <button type="button" class="btn btn-default">套餐二</button>
                       <button type="button" class="btn btn-default">套餐三</button>
                       <button type="button" class="btn btn-default">套餐四</button>
                     </div>
                     <br>
                     <br>
                     <p>存储容量 &nbsp;&nbsp;<button type="button" class="btn btn-default" style="border:1px solid #ff0036;outline:none;">24MB</button></p>
                     <p><a href="./cart.html" class="btn btn-primary" role="button" style="background:#ff0036;color:#fff;border:1px solid #ff0036;";>立即购买</a> 
                      
                       <a href="javascript:;" class="btn btn-default" role="button" style="background:#ff0036;color:#fff;";>加入购物车</a></p>
                      
                   </div>
                   <ul class="nav nav-tabs">
                       <li role="presentation" class="active"><a href="javascript:;">Home</a>
                     
                       </li>
                       <li role="presentation"><a href="javascript:;">Profile</a></li>
                       <li role="presentation"><a href="javascript:;">Messages</a></li>
                      
                     </ul>
                     <img src="../img/x1.jpg" alt="">
                  
                 </div>
                 </div>
           </div>
         </div>
        
       `
      box.innerHTML=str
      var left=document.querySelector('.leftbox')
      var right=document.querySelector('.rightbox')
      var mark=document.querySelector('.mark')
      // var uls=document.querySelector(".ul-s")
      //    var lis=uls.querySelectorAll("li")
      var img1=document.querySelector('.img-left')
      var img2=document.querySelector('.img-right')
      left.onmouseover=()=>{
          mark.style.display='block'
          right.style.display='block'
      }
      
      left.onmousemove=(e)=>{
          var e=e || window.event
          var imgX,imgY
          //这是光标距离
          var  top1=e.pageY-left.offsetTop-parseFloat(mark.offsetHeight/2)
          var left1=e.pageX-left.offsetLeft-parseFloat(mark.offsetWidth/2)
          // 这是移动的最大距离
          var maxX=left.offsetWidth-mark.offsetWidth
          var maxY=left.offsetHeight-mark.offsetHeight
       if(top1<=0){
           mark.style.top='0px'
           imgY=0
       }else if(top1>=maxY){
           mark.style.top=maxY+'px'
           imgY=maxY
       }else{
           mark.style.top=top1+'px'
           imgY=top1
       }
       if(left1<=0){
           mark.style.left='0px'
           imgX=0
       }else if(left1>=maxX){
           mark.style.left=maxX+'px'
           imgX=maxX
       }else{
           mark.style.left=left1+'px'
           imgX=left1
       }
      img2.style.top=-2*imgY+'px'
      img2.style.left=-2*imgX+'px'
      
      }
      
      left.onmouseout=()=>{
          mark.style.display='none'
          right.style.display='none'
      }
   })()
  }else{
    alert("没有该商品")
    location.href='./list.html'
  }
}else{
    alert("非法进入，请选择商品")
    location.href='./list.html'
}
//给大盒子绑定点击事件
box.onclick=function(e){
    var e=e || window.event
    var tar=e.target || e.srcElement
    //判断当前点击物品是否加入购物车
    if(tar.innerHTML=="加入购物车"){
    // 获取localstorage中的catlist4
    var catList4=localStorage.getItem("catList4")||[]
    //判断当前catlist4是否存在 
    if(catList4.length>0){
        //把catlist4转为数组对象
        catList4=eval('('+catList4+')')
        var bool=true//判断是否有相同的商品
        //遍历数组
        catList4.forEach(item=>{
            //判断当前遍历的商品是否跟添加的商品是否相等
            if(dt.id==item.id){
                bool=false
                item.cart_number++
                  //重新给localtorage添加键值对
                  localStorage.setItem("catList4",JSON.stringify(catList4))
            }
        })
        if(bool){
            //修改dt对象中的数量
        dt.cart_number=1
        //把当前商品追加到catlist4
        catList4.push(dt)
        //重新给localtorage添加键值对
        localStorage.setItem("catList4",JSON.stringify(catList4))
        }
    }else{
        //修改dt对象中的数量
        dt.cart_number=1
        //把当前商品追加到catlist4
        catList4.push(dt)
        //重新给localtorage添加键值对
        localStorage.setItem("catList4",JSON.stringify(catList4))
    }
    }
  
}

