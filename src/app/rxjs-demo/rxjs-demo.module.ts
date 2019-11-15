import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsDemoComponent } from './rxjs-demo.component';
import { RxjsDemo2Component } from './rxjs-demo2.component';



@NgModule({
  declarations: [RxjsDemoComponent, RxjsDemo2Component],
  imports: [
    CommonModule
  ]
})
export class RxjsDemoModule { }
