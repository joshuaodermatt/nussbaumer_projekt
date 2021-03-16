import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ValidationService } from '../validation/validation.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(public http: HttpClient, public validationservice: ValidationService) {}

  userAnswer : any; 
  rightAnswer : any;
  checkedData: boolean = false;

  request(input: string,answer: string){

    this.http.get('https://42217.wayscript.io/?request=' + input).subscribe(data => {

      this.userAnswer = data;
    })  
    this.http.get('https://42217.wayscript.io/?request=' + answer).subscribe(data => {

      this.rightAnswer = data;

      console.log(this.waitForElement());
    })  
  }

  waitForElement():boolean{
    if(typeof this.rightAnswer !== "undefined" && typeof this.userAnswer !== "undefined"){
        console.log("Data aviable.");
        return this.validationservice.check_data(this.userAnswer,this.rightAnswer)
    }
    else{
        console.log("Waiting for data...")
        setTimeout(this.waitForElement, 250);
    }
  }
}


