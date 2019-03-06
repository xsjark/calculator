var sumthis= "";

function calc(){
  document.getElementById("screen").innerHTML=eval(sumthis);
};
function addToSumthis(n){
  sumthis+=n;
  document.getElementById("screen").innerHTML+=n;
};
function clearAll(){
  sumthis = "";  
  document.getElementById("screen").innerHTML=sumthis;
}
function clearOne(){
  sumthis=sumthis.slice(0,-1);
  document.getElementById("screen").innerHTML=sumthis;
}
