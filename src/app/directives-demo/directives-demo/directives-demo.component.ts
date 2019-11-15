import {Component, Directive, ElementRef, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {interval, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {random} from 'lodash';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html'
})
export class DirectivesDemoComponent {
}

@Directive({
  selector: '[appDisco]'
})
export class DiscoDirective implements OnInit, OnDestroy {

  @Input() speed = 500;
  private colors = ['red', 'green', 'yellow', 'blue', 'purple', 'cyan'];
  private onDestroy$ = new Subject();

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    interval(this.speed)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(_ => {
        const nativeElement = this.el.nativeElement as HTMLElement;
        if ((nativeElement).childElementCount > 0) {
          nativeElement.childNodes.forEach(child => {
            (child as any).style.background = this.colors[random(this.colors.length)];
          });
        } else {
          nativeElement.style.background = this.colors[random(this.colors.length)];
        }
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }
}

@Component({
  selector: 'app-my-advanced-component',
  template: `
      <div>
          <h1>Title</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam consequatur dignissimos error excepturi inventore
              magni mollitia necessitatibus nisi odit officiis praesentium quia quidem quos rem similique, tempora, velit veritatis.</p>
      </div>`
})
export class MyAdvancedComponent {

}
