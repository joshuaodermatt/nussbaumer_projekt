import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {

  @Input() description: string;

  @Input() id: any;

  constructor() { }

  ngOnInit() {}

}
