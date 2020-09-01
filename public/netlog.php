<?
$netlogfile="netlog.txt";
$info=date("Y/m/d H:i:s D # ").$REMOTE_ADDR."\n";
$fp = fopen($netlogfile,"a");
fputs($fp,"");
fputs($fp,$info);
fclose($fp);
?>
