import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'click-me',
  template: `
    <h2>{{title}}</h2>

    <div>El héroe se llama {{nombre}}</div>

    <button (click)="onClickMe()">Click me!</button>
    <div>{{clickMessage}}</div>

    <input [(ngModel)]="nombre" />
    `
})
export class ClickMeComponent {
  title = 'Data binding';
  clickMessage = '';
  nombre = 'Carlos';

  constructor() {
    let that = this;
    setTimeout(function(){
      console.log('timeout');
      that.nombre = 'Pedro';
    }, 5000);
  }

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
}
