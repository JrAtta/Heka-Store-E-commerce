import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {

  // req logic

  const ngxLoader = inject(NgxSpinnerService);
  ngxLoader.show();

  // res
  return next(req).pipe(
    finalize(()=>{
      // console.log('loading interceptor');
      ngxLoader.hide();
    })
  );
};
