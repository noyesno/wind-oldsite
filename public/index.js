// 标题链接变化
function change_link()
{
	 var sobj=window.event.srcElement;
     sobj.className="mouse_on";
 }

function restore_link()
 {
     var sobj=window.event.srcElement;
     sobj.className="mouse_out";
 }

 function link_show_hide()
 {
	 if (mainlink.style.visibility=="hidden") 
	 {
		 musicList.style.display="none";
		 mainlink.style.visibility="visible";
		 mytoolList.style.display="block";
	 }
	 else 
	 {
		 mainlink.style.visibility="hidden";
		 mytoolList.style.display="none";
		 musicList.style.display="block";
	 }
 }

 function screen_cls()
 {
	 mainlink.style.visibility="hidden";
	 musicList.style.display="none";
	 musicText.innerHTML="";
	 linkList.innerHTML="";
	 mytoolList.style.display="none";
 }
 function music_switch()
 {
	 if(bgs.src=="") bgs.src="public/midi/righthrw.mid";
	 else bgs.src="";
 }
// 背景音乐
var load_flag;
var load_flag_link;
var scroll_index=0;
var music_index;
var link_index;
 function music_list()
 {
	 if (load_flag!="Loading OK!")
	 {
		musicList.style.display="block";
		musicList.innerHTML="Loading ...";
		load_flag=document.applets[0].getScroll('midi.txt',1);
		musicList.innerHTML=load_flag;
		if(load_flag=="Loading OK!") music_index=scroll_index++;
	 }
	 if(load_flag=="Loading OK!")
	 {
		show_scroll(0,1);
	 }
	
	link_show_hide(); 
 }
 function link_list()
 {
	 if (load_flag_link!="Loading OK!")
	 {
		linkList.innerHTML="Loading ...";
		load_flag_link=document.applets[0].getScroll('link.txt',2);
		linkList.innerHTML=load_flag;
		if(load_flag_link=="Loading OK!") link_index=scroll_index++;
	 }
	 if(load_flag_link=="Loading OK!")
	 {
		 show_scroll(1,1);
	 }

	link_show_hide(); 
 }

 function show_scroll(obj_div,direction)
 {
	 if(obj_div==0)
	 	musicList.innerHTML="<input type='button' value='      ∧      ' onClick='show_scroll(0,1)' "+"style='background-color:black;color:yellow;border:1 double red;border-width:1 0 0 0'>"+document.applets[0].showScroll(music_index,8,4,direction)+"<input type='button' value='      ∨      ' onClick='show_scroll(0,-1)' "+"style='background-color:black;color:yellow;border:1 double red;border-width:0 0 1 0'>";
	 else if(obj_div==1)
		linkList.innerHTML="<input type='button' value='       ∧       ' onClick='show_scroll(1,1)' "+"style='background-color:black;color:yellow;border:1 double red;border-width:1 0 0 0'><br>"+document.applets[0].showScroll(link_index,6,3,direction)+"<input type='button' value='       ∨       ' onClick='show_scroll(1,-1)' "+"style='background-color:black;color:yellow;border:1 double red;border-width:0 0 1 0'>";
 }

 function music_play(music_file)
{	
	bgs.src="public/midi/"+music_file;
	musicText.innerHTML="Loading ...";
	musicText.innerHTML="<marquee direction='up' scrolldelay=150 scrollamount=1 class='musicText'>"+document.applets[0].getData("midi/"+music_file.substring(0,music_file.indexOf("."))+".txt","<br>")+"</marquee>";
}

 