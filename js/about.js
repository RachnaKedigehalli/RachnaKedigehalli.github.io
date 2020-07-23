var tabs = document.getElementsByClassName('tabs');
for (var i=0; i<tabs.length; i++){
    tabs[i].addEventListener("click", function(event){
        var tab = event.srcElement;
        tab.classList.add('activeTab');
        if(tab == tabs[0]){
            tabs[1].classList.remove('activeTab');
            document.getElementById("data").innerHTML = 
            `<div id="abt">
            Hello, I am Rachna S Kedigehalli, a first year Computer Science Engineering student, 
            studying at International Instituite of Information Technology, Bangalore. 
            I am hardworking and passionate about whatever work I do. 
            I believe in perfection and quality in work. 
            I am creative and have good communication and leadership skills.
            <br><br>
            I am proficient at coding in C and Python. I am good at algorithms and full stack web development.
            </div>`;
        }
        else if(tab == tabs[1]){
            tabs[0].classList.remove('activeTab');
            document.getElementById("data").innerHTML = 
            `<ul class="timeline">
                <hr>
                <li class="event">
                    <div> Pursuing iMTech(CSE) at IIITB </div>
                    <span> 1st semester GPA: 3.72/4 </span>
                    <span> 2019 - present </span>
                </li>
                <hr>
                <li class="event">
                    <div> Graduated 12th </div>
                    <span> Percentange: 93.67% </span>
                    <span> 2019 </span>
                </li>
                <hr>
                <li class="event">
                    <div> Graduated 10th </div>
                    <span> CGPA: 10/10 </span>
                    <span> 2017 </span>
                </li>
                <hr>
            </ul>`;
        }
    });
}