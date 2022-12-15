import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiRoot = 'http://localhost:8000/user/'

  constructor() { }
}
