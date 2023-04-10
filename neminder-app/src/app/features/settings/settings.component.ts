import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit,AfterViewInit {
  public title = "Settings"
  @ViewChild('span') spanElement:ElementRef;

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  ngAfterViewInit(){
    this.spanElement.nativeElement.textContent="ehhehe";
    console.log("element is:", this.spanElement.nativeElement.textContent)
    console.log("value is:", this.spanElement.nativeElement.value)
    console.log("value is:", this.spanElement.nativeElement.classList)
  }

}
