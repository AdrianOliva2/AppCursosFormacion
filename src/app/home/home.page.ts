import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../classes/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public courses?: Course[]

  constructor(private router: Router, private coursesService: CoursesService) {
    coursesService.$courses()?.subscribe(courses => {
      this.courses = courses
    });
  }

  public onClick() {
    this.router.navigate(['gestion-cursos-propios'])
  }

  public buyCourse(course: Course) {
    console.log(course)
    this.router.navigate(['detalles-curso', course._id])
  }

}
