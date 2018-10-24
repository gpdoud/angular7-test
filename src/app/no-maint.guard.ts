import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { SystemService } from './services/system.service';


@Injectable({
  providedIn: 'root'
})
export class NoMaintGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.syssvc.canCreateAndEdit();
  }

  constructor(private syssvc: SystemService) {}
}
