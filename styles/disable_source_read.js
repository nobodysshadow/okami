<!--
if(document.layers){
window.captureEvents(Event.MOUSEDOWN|Event.MOUSEUP)
window.onmousedown=rightclick;
window.onmouseup=rightclick;

function rightclick(e){
if(e.which==3){
//Put right mouse code here
alert('Die rechte Maustaste wurde lahmgelegt');
return false;
}else{
return true;
}
}
}
if(document.all){
function click(){
if(event.button==2){
alert('Die rechte Maustaste wurde lahmgelegt')
}

if(event.button==3){
alert('Die rechte Maustaste wurde lahmgelegt')}
}
document.onmousedown=click
}
//-->
