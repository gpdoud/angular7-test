import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  canMaint = true;
  canCreateAndEdit(): boolean {
    return this.canMaint;
  }

  constructor() { }
}
