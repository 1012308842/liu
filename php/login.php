<?php
include "./datas.php";
// 获取传入的参数
$u=$_GET["username"];
$p=$_GET["password"];
//编写sql语句
$sql="select * from abc2 where name='$u' and pass=$p";
//执行sql语句
$result=mysqli_query($link,$sql);
//判断当前结果集中是否有数据
if($row=mysqli_fetch_row($result)){
    echo "1";
}else{
    echo "0";
}
mysqli_close($link);
?>