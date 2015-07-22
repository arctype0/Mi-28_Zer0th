function potPLAYER(){
var embeds = document.getElementsByTagName('source'); 
// 추출
var i = embeds.length; 
var result = []; 
while(i--) 
result.push(embeds[i].src); 
var t2 = result
var t1 = "potp://"
var settings = 'width=300, height=300, left=100, top=200';
alert(t2);
winObject = window.open(t1+t2,'',settings);
setTimeout("winObject.close()",1000)
}
var kk1 = document.getElementById('fb-root');
kk1.innerHTML='<button type="button" onclick="potPLAYER()">팟플레이어에서 보기</button>';
