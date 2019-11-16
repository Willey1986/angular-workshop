import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchitectureDemoComponent } from './containers/architecture-demo.component';
import { FilterbarComponent } from './components/filterbar.component';
import { GridComponent } from './components/grid.component';
import { CountPipe } from './pipes/count.pipe';



@NgModule({
  declarations: [ArchitectureDemoComponent, FilterbarComponent, GridComponent, CountPipe],
  imports: [
    CommonModule
  ]
})
export class ArchitectureDemoModule { }
