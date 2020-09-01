<?
function get_status($qq_num)
{
	if(!isset($qq_num)) $qq_num="18232332";
	$url="http://search.tencent.com/cgi-bin/friend/user_show_info?ln=".$qq_num;
	$name_index=91;
	$status_index=100;
	$result="";
	
	if(!$fp=@fopen($url,"r"))
	{
		echo "connecting error ! Please try it again !<hr>";
		echo "<form method='post' action='oicq.php'>";
		echo "输入要 Oicq 号码 按\"回车\"查询:<br>";
		echo "<input type='text' name='qq_num'>&nbsp;&nbsp;";
		echo "<input type='submit' value=' 查询 '>";
		echo "</form>";
		echo "<hr>";
		exit();
		
	}
	else
	{
		$line_counter=0;
		while(!feof($fp))
		{
			$line=trim(fgets($fp,4096));
			$line_counter++;
		  if($line_counter==$name_index)
			{
			  $index_begin=strpos($line,">");
			  $index_end=strpos($line,"<");
			  $name=substr($line,$index_begin+3,$index_end-$index_begin-3);
			}
		
		  if($line_counter==$status_index)
		  {
			$key_index=strpos($line,"-");
			$result=substr($line,$key_index+1,1);
			break;
		  }
	}
	fclose($fp);	
	}
	

echo $qq_num." : ".$name." : <b style='color:red'>"; 
if($result==0) echo "Online";
elseif($result==1) echo "Offline or Hidden";
elseif($result=="") echo "Unknow";
echo "</b> : ";
}

?>
<title>≈风行水上之≈　【 Oicq 】 在线查询 </title>
<? get_status($qq_num); ?>
<a href="http://search.tencent.com/cgi-bin/friend/user_show_info?ln=<? echo $qq_num; ?>" target="_blank">查看具体信息</a><hr>
<form method="post" action="oicq.php">
输入要 Oicq 号码 按"回车"查询:<br>
<input type="text" name="qq_num">&nbsp;&nbsp;
<input type="submit" value=" 查询 ">
</form>
<hr>
http://windonwater.51.net/