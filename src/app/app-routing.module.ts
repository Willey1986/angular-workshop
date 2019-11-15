import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PipesDemoComponent} from './pipes-demo/pipes-demo/pipes-demo.component';
import {DirectivesDemoComponent} from './directives-demo/directives-demo/directives-demo.component';
import {ComponentsDemoComponent} from './components-demo/components-demo/components-demo.component';
import {MyContainerComponent} from './containers-demo/containers/my-container.component';
import {RxjsDemoComponent} from './rxjs-demo/rxjs-demo.component';
import {RxjsDemo2Component} from './rxjs-demo/rxjs-demo2.component';


const routes: Routes = [
  {path: 'components', component: ComponentsDemoComponent},
  {path: 'containers', component: MyContainerComponent},
  {path: 'pipes', component: PipesDemoComponent},
  {path: 'directives', component: DirectivesDemoComponent},
  {path: 'rxjs', component: RxjsDemoComponent},
  {path: 'rxjs2', component: RxjsDemo2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
