import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  public title = "Add Task"
  public timeIsExpanded = true
  public placeIsExpanded = true
  public activated = true;
  public isExpanded = true;
  public formattedTime:string;
  selectedDate: Date = new Date();
  @ViewChild('picker') timepicker:any;
  ngOnInit(){
    this.formatTime();
    console.log(this.timepicker)
  }
  
  choosePlace(e){
    this.placeIsExpanded = !this.placeIsExpanded
    this.activated = this.placeIsExpanded || this.timeIsExpanded ?  true:false;
    this.isExpanded = !this.isExpanded;
  }
  chooseTime(e){
    this.timeIsExpanded = !this.timeIsExpanded
    this.activated = this.placeIsExpanded || this.timeIsExpanded ? true:false;
    this.isExpanded = !this.isExpanded;
  }
  formatTime(){
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let amPm = hours < 12 ? 'am' : 'pm';
    hours = hours % 12;
    hours = hours ? hours : 12;
    let formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}${amPm}`;
    this.formattedTime = formattedTime;
    console.log(this.formattedTime)
  }
}
