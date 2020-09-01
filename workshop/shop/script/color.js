
var i,obj,r,g,b,timetag,clicktag;
i=0;
obj=1;
clicktag=false;



function changeColor(){
           re=/^#[0-9a-fA-F]{1,6}$/;
           var backcolor=document.colorform.backcolor.value;
           var forecolor=document.colorform.forecolor.value;
            if (!re.test(backcolor)||backcolor.length!=7)
              { alert("Please input backgroundColor as the format:\n\n [#ffffff] [0-9a-fA-F]");return false;}
            if (!re.test(forecolor)||forecolor.length!=7)
              { alert("Please input ForeColor as the format:\n\n [#ffffff] [0-9a-fA-F]");return false;}
           
           body.style.backgroundColor=backcolor;
           body.style.color=forecolor;
 }

function autochange(){
  if (document.colorform.auto.value=="Stop"&&clicktag) {
        clearTimeout(timetag);
        document.colorform.auto.value=" Go ";
        document.colorform.auto.blur();
        clicktag=!clicktag;
        return true;
        }
  if(document.colorform.auto.value==" Go "&&clicktag) {
     document.colorform.auto.value="Stop";
     document.colorform.auto.blur();
     clicktag=!clicktag;
    }
  if(i<216) {
              r=(i-i%36)/36;g=(i-r*36-i%6)/6;b=i%6;
              r*=51;g*=51;b*=51;
              window.status="Current Color: ("+r+","+g+","+b+")"; 
              i++;    
           }
  else {clearTimeout(timetag);document.colorform.auto.value==" Go ";alert("已经到了第"+i+"种安全色彩");i=0;return true;}
  
  if(obj==1) body.style.backgroundColor="rgb("+r+","+g+","+b+")"; 
  else body.style.color="rgb("+r+","+g+","+b+")"; 
  timetag=setTimeout("autochange()",1200);

  }    

