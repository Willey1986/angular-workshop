import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CountPipe, IsEmptyPipe, NegatePipe, PipesDemoComponent} from './pipes-demo/pipes-demo.component';



@NgModule({
  declarations: [PipesDemoComponent, IsEmptyPipe, NegatePipe, CountPipe],
  imports: [
    CommonModule
  ]
})
export class PipesDemoModule { }
