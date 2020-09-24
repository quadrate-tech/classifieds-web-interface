import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PromotedAdDetailService {
  private projects: Project[] = [];
  private projectUpdated = new Subject<Project[]>();
  selectedProject: Project = new Project('', '', 0, '');

  private saveprojectUrl = 'http://localhost:3000/project/save';
  private getprojectUrl = 'http://localhost:3000/project/get';
  private deleteProjectUrl = 'http://localhost:3000/project/delete/';
  private updateProjectUrl = 'http://localhost:3000/project/update/';

  constructor(private http: HttpClient,
              private router: Router) { }

  getProjectsUpdateListner() {
    return this.projectUpdated.asObservable();
  }


  getProjects() {
    this.http.get(this.getprojectUrl).subscribe(
      res => {
        this.projects = res as Project[];
        this.projectUpdated.next([...this.projects]);
      },
      err => console.log(err)
    );
    return [...this.projects];
  }

  addProject(project: Project) {
    this.projects.push(project);
    this.http.post<any>(this.saveprojectUrl, project, {
      headers: {'Content-Type': 'application/json'}
    }).subscribe(
      res => window.alert('project added successfully!'),
      err => console.log(err)
    );
    this.projectUpdated.next([...this.projects]);
  }

  deleteProject(_id) {
    this.http.delete<any>(this.deleteProjectUrl  + _id, ).subscribe(
      res => {
        this.getProjects();
        this.router.navigate(['/project']);
      },
      err => console.log(err)
    );
  }

  updateProject(project: Project) {
    console.log(project);
    this.http.post<any>(this.updateProjectUrl + project._id, project)
      .subscribe(
        res => {
          window.alert('project updated successfully');
          this.getProjects();
        },
        err => console.log(err)
      );
  }
}
