import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private isAuthenticated = false;

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.isAuthenticated) {
      return true;
    } else {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.isAuthenticated = true;
          resolve(this.isAuthenticated);
        }, 2000);
      });
    }
  }
}
