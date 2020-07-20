var tabs = document.getElementsByClassName('tabs');
for (var i=0; i<tabs.length; i++){
    tabs[i].addEventListener("click", function(event){
        var tab = event.srcElement;
        tab.classList.add('activeTab');
        if(tab == tabs[0]){
            tabs[1].classList.remove('activeTab');
        }
        else if(tab == tabs[1]){
            tabs[0].classList.remove('activeTab');
        }
    });
}
document.getElementById("data").style.borderBottom