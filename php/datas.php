<?php
header("content-type:text/html;charset=utf-8");

//链接数据库
$link=mysqli_connect("localhost",'root','','aaa');
if(mysqli_connect_error($link)){
    echo "1";
}else{
    echo "0";
}
mysqli_set_charset($link,"utf8");
?>