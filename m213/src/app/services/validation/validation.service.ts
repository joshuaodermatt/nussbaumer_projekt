import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})



export class ValidationService {

  constructor() { }

  check_data(userData: any, rightanswer: any):boolean{
    if(JSON.stringify(userData) === JSON.stringify(rightanswer)){
      return true
    }else{
      return false;
    }
  }
}
