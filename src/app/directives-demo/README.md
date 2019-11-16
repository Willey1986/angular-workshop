# Directives

Directives werden eingesetzt werden um Funktionalität zwischen Komponenten zu teilen.

**Beispiele**

* Tooltips
* Resizing
* Drag & Drop
* Rekursives deaktivieren von HTML-Forms
* [Weitere Beispiele](https://www.lucidchart.com/techblog/2017/12/20/5-angular-directives-you-can-use-in-your-project/)

```typescript
@Directive({
  selector: '[myDirective]'
})
export class MyDirective {

  // Directives können über Inputs konfiguriert werden
  @Input() someInput: number;

  constructor(private el: ElementRef) {
    // el ist das Element auf das die directive angewendet werden soll.
    el.nativeElement.style.background = 'red'; // Ändert die Hintergrundfarbe zu rot
  }
}
```

```html
<div myDirective [someInput]="42"></div>
<span myDirective [someInput]="42"></span>
<h1 myDirective [someInput]="42"></h1>
<my-awesome-component myDirective [someInput]=42></my-awesome-component>
```
