import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesDemoComponent, CountComponent } from './services-demo.component';



@NgModule({
  declarations: [ServicesDemoComponent, CountComponent],
  imports: [
    CommonModule
  ]
})
export class ServicesDemoModule { }
