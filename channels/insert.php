<?php

$con=mysqli_connect('127.0.0.1','root','');
if(!$con){
echo "not connected to server";
}
if(!mysqli_select_db($con,'channels')){
echo "not connected to database";
}
$data = json_decode(file_get_contents("php://input"));
if(count($data) > 0){
  $hot = mysqli_real_escape_string($con,$data->hotel);
  $loc = mysqli_real_escape_string($con,$data->location);
$cha = mysqli_real_escape_string($con,$data->chan);
  $time1 = mysqli_real_escape_string($con,$data->time);
  $date1 = mysqli_real_escape_string($con,$data->date);
  $query =" INSERT INTO link(hotel,location,channel,live_time,live_date) VALUES ('$hot','$loc','$cha','$time1','$date1')";
  if(mysqli_query($con,$query)){
    echo "inserted successfully";
  }
  else{
    echo "error";
  }
}

?>
