function responsive_wd(tablet){
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

function responsive_prog(tablet){
    if(tablet.matches){
        document.getElementsByClassName('area')[0].innerHTML = 
            `<div class="area-head"> Programming </div>
            <div class="row">
                <div class="skill">
                    <i class="devicon-c-plain icon"></i>
                    <p>C</p> 
                </div>
                <div class="skill"> 
                    <i class="devicon-python-plain icon"></i>
                    <p> Python </p>
                </div>
                <div class="skill"> 
                    <i class="devicon-java-plain icon"></i>
                    <p> Java </p>
                </div>
            </div>
            <div class="row">
                <div class="skill"> 
                    <i class="devicon-cplusplus-plain icon"></i>
                    <p> C++ </p>
                </div>
            </div>`;
    }
    else{
        document.getElementsByClassName('area')[0].innerHTML = 
            `<div class="area-head"> Programming </div>
            <div class="skill">
                <i class="devicon-c-plain icon"></i>
                <p>C</p> 
            </div>
            <div class="skill"> 
                <i class="devicon-python-plain icon"></i>
                <p> Python </p>
            </div>
            <div class="skill"> 
                <i class="devicon-java-plain icon"></i>
                <p> Java </p>
            </div>
            <div class="skill"> 
                <i class="devicon-cplusplus-plain icon"></i>
                <p> C++ </p>
            </div>`;
    }
}

var tablet_lg = window.matchMedia("(max-width: 1024px)");
responsive_wd(tablet_lg);
tablet_lg.addEventListener('change', responsive_wd);

var tablet_md = window.matchMedia("(max-width: 835px)");
responsive_prog(tablet_md);
tablet_md.addEventListener('change', responsive_prog);