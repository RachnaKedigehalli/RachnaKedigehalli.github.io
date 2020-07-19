function active(element){
    var content = element.innerHTML;
    var end = content.slice(content.length-4,content.length);
    if(end != '<hr>'){
        element.innerHTML = element.innerHTML + '<hr>';
    }
}
function notactive(element){
    //console.log(element.innerHTML)
    var content = element.innerHTML;
    var end = content.slice(content.length-4,content.length);
    if(end == '<hr>'){
       element.innerHTML = content.slice(0, content.length-4); 
    }
}
var navElements = document.getElementsByTagName('nav')[0].getElementsByTagName('a');
//console.log(navElements);
for(var i=0; i<navElements.length; i++){
    navElements[i].addEventListener("click", function(event){
        //console.log(event.srcElement);
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