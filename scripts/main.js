var myImage=document.querySelector('img');
myImage.onclick=function(){
    var mySrc=myImage.getAttribute('src');
    if(mySrc==='../test-site/images/爱情盛典.png'){
        myImage.setAttribute('src','../test-site/images/浪漫婚礼.png');
    }
    else{
        myImage.setAttribute('src','../test-site/images/爱情盛典.png');
    }
}
var myButton=document.querySelector('button');
var myHeading=document.querySelector('h1');
function setUserName() {
    var myName=prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.innerHTML= 'Mozilla 酷毙了，' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
}else{
    var storedName=localStorage.getItem('name');
    myHeading.textContent='Mozilla 酷毙了，' + storedName;
}
myButton.onclick=function(){
    setUserName();
}