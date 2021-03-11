import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks/tasks.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

  constructor(public taskService: TasksService) {
   }

  ngOnInit() {
  }

}
