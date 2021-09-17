import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {Furniture} from "./models/furniture.model";

@Injectable({
  providedIn: 'root'
})
export class WoodService {

  constructor(private httpClient: HttpClient) {

  }

  public getFurniture(): Observable<Furniture[]> {
    return this.httpClient.get<Furniture[]>("/assets/json/wood.json" )
      .pipe(
        catchError( () => throwError("Could not get the wood.json"))
      );
  }
}
