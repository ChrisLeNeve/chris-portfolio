import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Project } from '../project';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
	projects: Project[];
	selectedProject: Project;
	
	constructor(private projectsService: ProjectsService) { }

	ngOnInit() {
		this.getProjects();
	}
	
	onSelect(project: Project): void {
		this.selectedProject = project;
	}
	
	getProjects(): void {
		this.projectsService.getProjects().subscribe(projects => this.projects = projects);
	}
}
