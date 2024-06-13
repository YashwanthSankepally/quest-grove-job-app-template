import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private displayJobsSubject = new BehaviorSubject<boolean>(false);
  displayJobs$ = this.displayJobsSubject.asObservable();

  setDisplayJobs(value: boolean) {
    this.displayJobsSubject.next(value);
  }

  getDisplayJobs(): boolean {
    return this.displayJobsSubject.value;
  }
}
