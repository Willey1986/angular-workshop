import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsDemoComponent, MyComponent } from './components-demo.component';



@NgModule({
  declarations: [
    ComponentsDemoComponent,
    MyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsDemoModule { }
