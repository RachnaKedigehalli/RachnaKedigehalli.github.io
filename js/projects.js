function responsive_proj(width) {
	if(width.matches) {
		document.getElementById('projects').innerHTML = 
			`<div id="projects-heading"> Projects </div>
				<div class="proj-container">
					<a href="https://github.com/RachnaKedigehalli/Poetry-paradise" target="_blank">
						<div class="project">
							<div class="project-image">
								<img src="images/poetry.jpg">
							</div>
							<div class="caption">
								Poetry paradise
								<div class="description">An application that allows users to view others' take on a piece of literature and add their own.</div>
							</div>
						</div>
					</a>
				</div>
				<div class="proj-container">
					<a href="https://github.com/RachnaKedigehalli/Student-database-management-system" target="_blank">
						<div class="project">
							<div class="project-image">
								<img src="images/students.jpg">
							</div>
							<div class="caption">
								Student database management system
								<div class="description">A CRUD application using HTML, CSS, Javascript, Nodejs, Express and Mongodb.</div>
							</div>
						</div>
					</a>
				</div>
				<div class="proj-container">
					<a href="https://github.com/RachnaKedigehalli/Modeling-package-shipment-in-Java" target="_blank">
						<div class="project">
							<div class="project-image">
								<img src="images/shipment.jpg">
							</div>
							<div class="caption">
								Modeling package shipment in Java
								<div class="description">A program modeling package shipment using concepts of OOP in Java.</div>
							</div>
						</div>
					</a>
				</div>
				<div class="proj-container">
					<a href="https://github.com/RachnaKedigehalli/Game-Show" target="_blank">
						<div class="project">
							<div class="project-image">
								<img src="images/quiz-show.jpg">
							</div>
							<div class="caption">
								Game show using socket programming
								<div class="description">A 3-player game created using python. It gives the players 10 seconds to press the buzzer. The first player to press the buzzer is given an extra 10 seconds to answer.</div>
							</div>

						</div>
					</a>
				</div>
				<div class="proj-container">
					<a href="https://github.com/RachnaKedigehalli/Hospital-records-management-system" target="_blank">
						<div class="project">
							<div class="project-image">
								<img src="images/hospital.jpg">
							</div>
							<div class="caption">
								Hospital record management system
								<div class="description"> A menu driven interface created using C that allows user to perform operations like search by field, add, delete, edit on the data base.</div>
							</div>
						</div>
					</a>
				</div>`;
	}
	else {
		document.getElementById('projects').innerHTML = 
			`<div id="projects-heading"> Projects </div>
			<div class="projects-row">
				<div class="proj-container">
					<a href="https://github.com/RachnaKedigehalli/Poetry-paradise" target="_blank">
						<div class="project">
							<div class="project-image">
								<img src="images/poetry.jpg">
							</div>
							<div class="caption">
								Poetry paradise
								<div class="description">An application that allows users to view others' take on a piece of literature and add their own.</div>
							</div>
						</div>
					</a>
				</div>
				<div class="proj-container">
					<a href="https://github.com/RachnaKedigehalli/Student-database-management-system" target="_blank">
						<div class="project">
							<div class="project-image">
								<img src="images/students.jpg">
							</div>
							<div class="caption">
								Student database management system
								<div class="description">A CRUD application using HTML, CSS, Javascript, Nodejs, Express and Mongodb.</div>
							</div>
						</div>
					</a>
				</div>
				<div class="proj-container">
					<a href="https://github.com/RachnaKedigehalli/Modeling-package-shipment-in-Java" target="_blank">
						<div class="project">
							<div class="project-image">
								<img src="images/shipment.jpg">
							</div>
							<div class="caption">
								Modeling package shipment in Java
								<div class="description">A program modeling package shipment using concepts of OOP in Java.</div>
							</div>
						</div>
					</a>
				</div>
			</div>

			<div class="projects-row">
				<div class="proj-container">
					<a href="https://github.com/RachnaKedigehalli/Game-Show" target="_blank">
						<div class="project">
							<div class="project-image">
								<img src="images/quiz-show.jpg">
							</div>
							<div class="caption">
								Game show using socket programming
								<div class="description">A 3-player game created using python. It gives the players 10 seconds to press the buzzer. The first player to press the buzzer is given an extra 10 seconds to answer.</div>
							</div>

						</div>
					</a>
				</div>
				<div class="proj-container">
					<a href="https://github.com/RachnaKedigehalli/Hospital-records-management-system" target="_blank">
						<div class="project">
							<div class="project-image">
								<img src="images/hospital.jpg">
							</div>
							<div class="caption">
								Hospital record management system
								<div class="description"> A menu driven interface created using C that allows user to perform operations like search by field, add, delete, edit on the data base.</div>
							</div>
						</div>
					</a>
				</div>
			</div>`;
	}
}

var projects_lg = window.matchMedia("(max-width: 1024px)");
responsive_wd(projects_lg);
projects_lg.addEventListener('change', responsive_proj);