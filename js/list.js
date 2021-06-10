//获取操作对象
var pagination=document.querySelector('.pagination')
var row=document.querySelector(".row")
var box1=document.querySelector('.thumbnail')
//通过自执行函数来获取数据
function fn1(){
  
    (async function(){
        var arr=await promiseAjax({
            url:"../php/list.php"
        })
        arr=arr.substring(1)
        arr=eval('('+arr+')')
        // console.log(arr)
   
        //配置传入的对象信息
        var o1={
            pageInfo:{
                pagenum:1, //当前页
                pagesize:60,//每页显示的条数
                totalsize:arr.length,//总条数
                totalpage:Math.ceil(arr.length/60) //总页数
            },
            textInfo:{
                first:"首页", //首页
                prev:"上一页", //上一页
                list:"",  //页码
                next:"下一页", //下一页
                last:"尾页" //尾页
            }
        }
        // 实例化对象
        new Pagination(pagination,o1,(m)=>{
            // console.log(m)
            //通过页码来进行分页
            var  ar2=arr.slice((m-1)*60,m*60)
            // console.log(ar2)
            var str=''
            //遍历数组中的所有数据
            ar2.forEach(item => {
        str+=`
        <div class="col-lg-3 col-md-4" >
                    <div class="thumbnail" style="width:234px;height: 366px;">
                    <a href="./xiangqinxie.html?id=${item.id}"  style="text-decoration: none;">
                        <img src="${item.img}" alt="" style="width:234px;height:234px;">
                        <div class="caption">
                          
                        <p class="title1">${item.title}</p>
                        <p style="color: #ff8f67;">￥${item.price}
                             <span style="color: #ddd;margin-left: 5px;text-decoration:line-through;">
                                ￥${item.price_old}</span></p>
                                <p style="color: #ddd;">${item.dianpu}</p>
                                <p style="text-align: right;color: #ddd;">${item.xiaoliang}</p>
                       
                        </div>
                        </a>
                    </div>
                </div>
                `
            });
            //把拼接好的数据渲染到页面中
            row.innerHTML=str
        })
    })()
    

}
fn1()
