import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css']
})
export class ClickComponent implements OnInit {

  clickMessage: string;
  private clickCounter: number = 0;

  keyUpMessage: string;
  keyCode: number;

  keyUpMessageInputAsVariable: string;

  enterPressedMessage: string;

  onEnter(value: any) {
    this.enterPressedMessage = value;
  }

  onKeyUpInputAsVariable(value: any){
    this.keyUpMessageInputAsVariable = value;
  }

  onKeyUp(event: any) {
    console.log(event);
    this.keyUpMessage = event.target.value;
    this.keyCode = event.keyCode;
  }

  constructor() { }

  ngOnInit() {
  }

  onClickMe() {
    this.clickCounter++;
    this.clickMessage = `You clicked me many times: ${this.clickCounter}`
  }
}
