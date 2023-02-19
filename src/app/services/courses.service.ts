import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Course } from '../classes/course';
import { User } from '../classes/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) {}

  public $courses(): Observable<Course[]> {
    return this.http.get<Course[]>('http://localhost:3000/courses');
  }

  public async getCourse(id: number): Promise<Course | undefined> {
    return await this.http.get<Course>(`http://localhost:3000/course/${id}`).toPromise();
  }
}
