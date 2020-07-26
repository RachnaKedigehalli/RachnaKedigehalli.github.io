function responsive(tablet){
    if(tablet.matches){
        document.getElementsByClassName('area')[1].innerHTML = 
            `<div class="area-head"> Web Development </div>
            <div class="row">
                <div class="skill">
                    <i class="devicon-html5-plain icon"></i> <p> HTML5 </p>
                </div>
                <div class="skill">
                    <i class="devicon-css3-plain icon"></i> <p> CSS3 </p>
                </div>
                <div class="skill">
                    <i class="devicon-javascript-plain icon"></i> <p> Javascript </p>
                </div>
            </div>
            <div class="row">
                <div class="skill"> 
                    <i class="devicon-nodejs-plain icon"></i> <p> Nodejs </p>
                </div>
                <div class="skill">
                    <i class="devicon-express-original icon"></i> <p> Expess </p>
                </div>
            </div>`;
    }
    else{
        document.getElementsByClassName('area')[1].innerHTML = 
            `<div class="area-head"> Web Development </div>
            <div class="skill">
                <i class="devicon-html5-plain icon"></i> <p> HTML5 </p>
            </div>
            <div class="skill">
                <i class="devicon-css3-plain icon"></i> <p> CSS3 </p>
            </div>
            <div class="skill">
                <i class="devicon-javascript-plain icon"></i> <p> Javascript </p>
            </div>
            <div class="skill"> 
                <i class="devicon-nodejs-plain icon"></i> <p> Nodejs </p>
            </div>
            <div class="skill">
                <i class="devicon-express-original icon"></i> <p> Expess </p>
            </div>`;
    }
}

var tablet = window.matchMedia("(max-width: 1024px)");
responsive(tablet);
//tablet.addEventListener(responsive);