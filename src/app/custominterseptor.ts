import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class custominterseptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        // console.log('here');
        let request = req.clone({
            headers: new HttpHeaders().append("Authorization", "asmks7nja")
        })

        return next.handle(request).pipe(
            tap(
                (result) => {
                    console.log('Success');
                },
                (error) => {
                    console.log("here interc");
                    
                    console.log(error.status);
                }
            )
        );
    }
}