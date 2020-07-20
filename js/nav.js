function active(element){
    var content = element.innerHTML;
    var end = content.slice(content.length-4,content.length);
    if(end != '<hr>'){
        element.innerHTML = element.innerHTML + '<hr>';
    }
}
function notactive(element){
    var content = element.innerHTML;
    var end = content.slice(content.length-4,content.length);
    if(end == '<hr>'){
       element.innerHTML = content.slice(0, content.length-4); 
    }
}
var navElements = document.getElementsByTagName('nav')[0].getElementsByTagName('a');
for(var i=0; i<navElements.length; i++){
    navElements[i].addEventListener("click", function(event){
        active(event.srcElement);
        for(var j=0; j<navElements.length; j++){
            var ele = navElements[j].getElementsByTagName('li')[0];
            if(ele==event.srcElement){
                continue;
            }
            else{
                notactive(ele);
            }
        }
    });
}

window.onscroll = function(){
    var navbar = document.getElementsByTagName('nav')[0];
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
        navbar.classList.add('navbar');
    }
    else{
        navbar.classList.remove('navbar');
    }
}