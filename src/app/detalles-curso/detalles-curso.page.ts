import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../classes/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-detalles-curso',
  templateUrl: './detalles-curso.page.html',
  styleUrls: ['./detalles-curso.page.scss'],
})
export class DetallesCursoPage implements OnInit {

  public curso?: Course

  constructor(private activatedRoute: ActivatedRoute, private coursesService: CoursesService) {
    this.activatedRoute.params.subscribe(params => {
      coursesService.getCourse(params['id'])
      .then(course => {
        this.curso = course
      })
    })
  }

  ngOnInit() {
  }

  comprar() {
    console.log('Comprar curso')
  }

}
