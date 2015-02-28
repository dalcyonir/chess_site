function getStuff(){


     document.querySelector('#top_header').onclick=talk1;
	 document.querySelector('#top_menu').onclick=talk2;
	 document.querySelector('#the_footer').onclick=talk3;
	 
	 
	 
	 }
	 
	 function getStuff2(){


    
	 document.querySelector('#top_header2').onclick=talk4;
	 document.querySelector('#top_menu2').onclick=talk5;
	 document.querySelector('#the_footer2').onclick=talk6;
	 
	 
	 }
	 

function talk1(){
   alert('ξέρεις ότι... ο Μόρφυ τελείωσε τη νομική σχολή στην ηλικία των 19?');

}
function talk2(){
   alert('ξέρεις ότι... στην οικογένεια του Μόρφυ όλοι οι άντρες -παππούς,πατέρας,θείος,αδερφός- έπαιζαν σκάκι?');

}

function talk3(){
   alert('ξέρεις ότι... στην ηλικία των 12 ο Μόρφυ κέρδισε τον καλύτερο παίχτη της Πολιτείας που ζούσε?');

}

function talk4(){
   alert('ξέρεις ότι... ο Κασπάροφ ξεκίνησε το σκάκι όταν έλυσε ένα σκακιστικό πρόβλημα που του έθεσαν οι γονείς του?');

}
function talk5(){
   alert('ξέρεις ότι... οι σχέσεις του Κασπάρωφ και της Παγκόσμιας Ομοσπονδίας έχουν ψυχρανθεί από το 1984?');

}

function talk6(){
   alert('ξέρεις ότι... ο Κασπάροφ ήταν επικριτικός προς τον πρωθυπουργό της Ρωσίας βλαντιμίρ Πούτιν?');

}






window.onload=getStuff;   

function doFirst(){
     barSize=188;
	 myMovie=document.getElementById('myMovie');
     playButton=document.getElementById('playButton');
     bar=document.getElementById('defaultBar');
     progressBar=document.getElementById('progressBar');
	 
	 playButton.addEventListener('click', playOrPause, false);
	 bar.addEventListener('click',clickedBar, false);
	 }
	 
function playOrPause(){
     if(!myMovie.paused && !myMovie.ended){
	           myMovie.pause();
			   playButton.innerHTML='Play';
			   window.clearInterval(updateBar);
			    }else{
				 myMovie.play();
				 playButton.innerHTML='Pause';
				 updateBar=setInterval(update,500);
				 }

}

function update(){
      if(!myMovie.ended){
	     var size=parseInt(myMovie.currentTime*barSize/myMovie.duration);
		 progressBar.style.width=size+'px';
		 }
		 else{
		 progressBar.style.width='0px';
		 playButton.innerHTML='Play';
		 window.clearInterval(updateBar); 
	  }
}
function clickedBar(e){
     if(!myMovie.paused && !myMovie.ended){
	 
	 var mouseX=e.pageX-bar.offsetLeft;
	 var newtime=mouseX*myMovie.duration/barSize;
	 myMovie.currentTime=newtime;
	 progressBar.style.width=mouseX+'px';
	 }

}
window.addEventListener('load',doFirst,false);



