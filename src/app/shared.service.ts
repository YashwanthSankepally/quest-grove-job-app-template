import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private usernameSource = new BehaviorSubject<string>(
    localStorage.getItem('username') || ''
  );
  currentUsername: Observable<string> = this.usernameSource.asObservable();

  constructor() {}

  changeUsername(username: string): void {
    localStorage.setItem('username', username);
    this.usernameSource.next(username);
  }
}
