<?php
include "./datas.php";
//获取传入的参数
$id=$_GET['id'];
$sql="select * from liu2 where id=$id";
$result=mysqli_query($link,$sql);
$row=mysqli_fetch_assoc($result);
echo json_encode($row);
mysqli_close($link);
?>