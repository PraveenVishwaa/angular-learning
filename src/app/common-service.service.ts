import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private http:HttpClient) { }

  getData(){
    return [
      {
        name:"John",
        age:25
      },
      {
        name:"John",
        age:25
      }
    ]
  }

  getapiData(): Observable<any>{
    let url = "https://jsonplaceholder.typicode.com/userss";
    return this.http.get(url).pipe(catchError(this.errorHandler));
  }

  errorHandler(error:any){
    console.log(error)
    return throwError(error.message || 'Server Error')
  }
}
