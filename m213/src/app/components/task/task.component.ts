import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ValidationService } from 'src/app/services/validation/validation.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {

  validation = 0;

  @Input() description: string;

  @Input() id: any;

  constructor( public validatioserivice : ValidationService) { }

  ngOnInit() {}

  submit(){
      var res = this.validatioserivice.check_data();
      if(res){
        this.validation = 1;
      }else{
        this.validation = 2;
      }
  }

}
