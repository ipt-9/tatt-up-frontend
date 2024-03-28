import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private apiUrl = 'https://backend.tatt-up-bmsd21a.bbzwinf.ch/api/signup';
  constructor() { }
}
