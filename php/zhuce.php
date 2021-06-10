<?php
include "./datas.php";

//获取传入参数
$n=$_GET["username"];
$p=$_GET["pwd1"];

$sql="select * from abc2 where name='$n'";
 $result=mysqli_query($link,$sql);
 if($row=mysqli_fetch_row($result)){
     echo "
     <script>
     alert('用户名存在');
     location.href='../page/zhuce.html'
     </script>
     ";
 }else{
   // 编写sql语句
   $sql2="insert into abc2(name,pass) values('$n','$p')";
   $result=mysqli_query($link,$sql2);
   if($result){
     header("location:../page/login.html");
   }else{
      echo "<script>alert('注册失败');location.href='../page/zhuce.html'</script>";
   }
 }
mysqli_close($link);
?>