import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

    private searchSubject = new BehaviorSubject<string>('');
    searchTerm$ = this.searchSubject.asObservable();

    updateSearchTerm(term:string){
        this.searchSubject.next(term)
    }
  constructor() { }
}
