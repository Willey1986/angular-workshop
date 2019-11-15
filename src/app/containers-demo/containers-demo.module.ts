import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './components/master.component';
import { DetailsComponent } from './components/details.component';
import { FilterBarComponent } from './components/filter-bar.component';
import {MyContainerComponent} from './containers/my-container.component';



@NgModule({
  declarations: [MyContainerComponent, MasterComponent, DetailsComponent, FilterBarComponent],
  imports: [
    CommonModule
  ]
})
export class ContainersDemoModule { }
