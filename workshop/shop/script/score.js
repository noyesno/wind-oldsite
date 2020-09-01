var xuefentotal=0;
var chengjitotal=0;
var i=0;
var tempcon="";
function insert(){ 
                   obj1=document.myscore.xuefen;
                   obj2=document.myscore.chengji;
                   if(!obj1.selectedIndex||!obj2.selectedIndex) {alert("Please choose your score!");return;}
                   xuefen=obj1.options[obj1.selectedIndex].value;
                   chengji=obj2.options[obj2.selectedIndex].value;
                   i++;
                   tempcon+="<option>"+(i<10?'0':'')+i+": "+xuefen+"*"+chengji;
                   i=i*1;xuefen=xuefen*1;chengji=chengji*1;
                   content.innerHTML="<select size=11><option selected>数据输入列表"+tempcon+"</select>"
                   xuefentotal+=xuefen;
                   chengjitotal+=xuefen*chengji;
                   chengjitotal=Math.round(chengjitotal*10)/10;
                   result=chengjitotal/xuefentotal;
                   result=Math.round(result*1000)/1000
                   window.status="你的平均绩点是:"+result;
                   document.myscore.result.value=chengjitotal+"/"+xuefentotal+"="+result;
                   }
function clearall(){
                  xuefentotal=chengjitotal=i=0;
                  tempcon="";
                  content.innerHTML="<select size=11><option selected>数据输入列表"+tempcon+"</select>"
                  document.myscore.result.value="";
                }


