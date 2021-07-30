import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private httpClient: HttpClient) {

  }

  public getSkills(): Observable<string[]> {
    return this.httpClient.get<string[]>("/assets/json/skills.json" )
      .pipe(
        catchError( () => throwError("Could not get the skills"))
      );
  }
}
