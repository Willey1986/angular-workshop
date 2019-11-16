import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PipesDemoModule} from './pipes-demo/pipes-demo.module';
import {DirectivesDemoModule} from './directives-demo/directives-demo.module';
import {ComponentsDemoModule} from './components-demo/components-demo.module';
import {ContainersDemoModule} from './containers-demo/containers-demo.module';
import {RxjsDemoModule} from './rxjs-demo/rxjs-demo.module';
import { ServicesDemoComponent } from './services-demo/services-demo.component';
import { ServicesDemoModule } from './services-demo/services-demo.module';
import { ArchitectureDemoModule } from './architecture-demo/architecture-demo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsDemoModule,
    ContainersDemoModule,
    PipesDemoModule,
    DirectivesDemoModule,
    ServicesDemoModule,
    ArchitectureDemoModule,
    RxjsDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
