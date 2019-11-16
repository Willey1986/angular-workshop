# Pipes

Pipes kapseln Transformationslogik und können direkt im HTML-Template über den Pipe-Operator "|" verwendet werden.

https://angular.io/guide/pipes

**Beispiel**

Folgende Pipe erhöht eine beliebige Zahl um 1.
```typescript
@Pipe({
  name: 'add1'
})
export class IsEmptyPipe implements PipeTransform {
  transform(value: number): number {
    return value + 1;
  }
}
```

Die Pipe kann überall in der Anwendung einfach über den Pipe Operator angewendet werden. Pipes lassen sich beliebig kombinieren und aneinander reihen.
```html
<div>{{123 | add1}}</div> <!-- Wird als 124 gerendert -->
<div>{{123 | add1 | add1}}</div><!-- Wird als 125 gerendert -->

<!-- Pipes können zur Transformation von Input-Daten genutzt werden -->
<my-awesome-component [someInput]="123 | add1"></my-awesome-component>
```

## Gotchas

* Angular bringt bereits einige nützliche Pipes mit (`async`, `uppercase`, `date`, `json`, ...)
* Es gibt pure und impure Pipes
  * Pure Pipes werden nur bei Neuzuweisungen ausgeführt
  * Impure Pipes werden auch bei Manipulation von Objekten und Arrays ausgeführt  
* (Impure) Pipes können Impact auf Performance haben
