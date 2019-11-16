import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DirectivesDemoComponent, DiscoDirective, MyAdvancedComponent} from './directives-demo.component';



@NgModule({
  declarations: [DirectivesDemoComponent, DiscoDirective, MyAdvancedComponent],
  imports: [
    CommonModule
  ]
})
export class DirectivesDemoModule { }
