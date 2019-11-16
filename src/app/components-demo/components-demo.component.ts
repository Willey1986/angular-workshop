import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-components-demo',
  template: `
      <button (click)="comp4.clear()">Clear Comp 4 (direct)</button>
      <button (click)="clearComp4()">Clear Comp 4 (method)</button>
      <div class="horizontal-layout">
          <app-my-component [title]="'Title'" [text]="'Some long string'" (buttonClicked)="onButtonClick()"
                            (textEntered)="onTextEntered($event)"></app-my-component>
          <hr>
          <app-my-component title="Title" text="Some long string" (buttonClicked)="onButtonClick()"
                            (textEntered)="onTextEntered($event)"></app-my-component>
          <hr>
          <app-my-component [title]="enteredText" [text]="enteredText" (buttonClicked)="onButtonClick()"
                            (textEntered)="onTextEntered($event)"></app-my-component>
          <hr>
          <app-my-component #comp4 [title]="enteredText" [text]="enteredText" (buttonClicked)="onButtonClick()"
                            (textEntered)="onTextEntered($event)"></app-my-component>
      </div>

  `,
  styles: [
    '.horizontal-layout {display: flex; flex-direction: row}',
  ]
})
export class ComponentsDemoComponent {

  @ViewChild('comp4', {static: false}) comp4: MyComponent;

  enteredText: string;

  onButtonClick() {
    console.log('button clicked');
  }

  onTextEntered(text: string) {
    console.log(text);
    this.enteredText = text;
  }

  clearComp4() {
    this.comp4.clear();
  }

}

@Component({
  selector: 'app-my-component',
  template: `
      <h2>{{title}}</h2>
      <p>{{text}}</p>
      <input type="text" placeholder="Enter some text" (input)="textEntered.emit($event.target.value)"><br>
      <button (click)="buttonClicked.emit()">Click me</button>`,
  styles: [
    ':host {margin: 16px}'
  ]
})
export class MyComponent {

  @Input() title: string;
  @Input() text: string;

  @Output() textEntered = new EventEmitter<string>();
  @Output() buttonClicked = new EventEmitter();

  clear() {
    this.title = '';
    this.text = '';
  }
}
