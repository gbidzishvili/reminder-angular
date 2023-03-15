import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  // public isExpanded = false;
  public timeIsExpanded = false
  public placeIsExpanded = false
  ngOnInit(){

  }
  // toggle(){
  //   this.isExpanded = !this.isExpanded;
  // }
}
