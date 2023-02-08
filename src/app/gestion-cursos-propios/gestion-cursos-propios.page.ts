import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-gestion-cursos-propios',
  templateUrl: './gestion-cursos-propios.page.html',
  styleUrls: ['./gestion-cursos-propios.page.scss'],
})
export class GestionCursosPropiosPage implements OnInit {
  
  homePage = HomePage;

  constructor() { }

  ngOnInit() {
  }

}
