import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  //req --> logic

  if (localStorage.getItem('userToken') !== null) {
    if (req.url.includes('cart')) {
      req = req.clone({
        setHeaders: {
          token: localStorage.getItem('userToken')!  , // must be nullish to handle null recursion
        },
      });
    }
    return next(req);
  }
  return next(req); // response
};

