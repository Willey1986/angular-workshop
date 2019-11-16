# Angular Components

## Kommunikation mit der Außenwelt

### Input

Über Inputs können beliebige Daten von außen an eine Komponente übergeben werden.

**Input Definition in der Komponente selbst**
```typescript
// Input der nur Strings erlaubt
@Input() stringInput: string;
// Input der beliebige Daten erlaubt
@Input() generalInput: any;
```

**Verwendung im Template der nutzenden Komponente**
```html
<my-awesome-component 
    [stringInput]="'a string'"
    [generalInput]="true">
</my-awesome-component>

<my-awesome-component 
    [stringInput]="someVariable"
    [generalInput]="anotherVariable">
</my-awesome-component>
```

### Output

Über Outputs kann die Komponente beliebige Daten nach außen herausgeben.

**Output Definition in der Komponente selbst**
```typescript
// Output der nur Strings herausgibt
@Output() stringEvent = new EventEmitter<string>();
// Output der beliebige Daten herausgibt
@Output() generalEvent = new EventEmitter<any>();

// Irgendwo anders in der Komponente
stringEvent.emit('a string');
generalEvent.emit({key: 'value'});
generalEvent.emit(42);
```

**Verwendung im Template der nutzenden Komponente**
```html
<my-awesome-component 
    (stringEvent)="handleStringEvent($event)"
    (generalEvent)="handleGeneralEvent($event)">
</my-awesome-component>
```
* `$event` referenziert dabei den Inhalt des Events. (Also z.B. den String der an die `emit` Methode übergeben wurde.

### Two Way Binding

Es ist möglich in einer Komponente ein Feld zu deklarieren was gleichzeitig Input und Output ist. Diese Funktionalität wird **Two Way Binding** genannt. 

```typescript
@Component({
  selector: 'app-filterbar',
  template: `
    <input [value]="searchTerm" (input)="this.searchTermChange.emit($event.target.value)">
  `
})
export class FilterbarComponent {

  @Input() searchTerm: string;

  // Für Two Way Binding muss ein Output definiert werden der genauso heißt wie der Input +Change
  @Output() searchTermChange = new EventEmitter<string>();

}
```

**Mit 2 Way Binding**

```typescript
@Component({
  selector: 'my-awesome-component',
  template: `
    <app-filterbar [(searchTerm)]="searchTerm"></app-filterbar>
  `
})
export class MyAwesomeComponent {

  searchTerm: string;

}
```

**Klassische Implementierung**

```typescript
@Component({
  selector: 'my-awesome-component',
  template: `
    <app-filterbar [searchTerm]="searchTerm" (searchTermChange)="onSearchTermChange($event)"></app-filterbar>
  `
})
export class MyAwesomeComponent {

  searchTerm: string;

  onSearchTermChange(searchTerm: string) {
    this.searchTerm = searchTerm;
  }

}
```

### Referenzen / ViewChilds

Über Referenzen bzw. ViewChilds kann direkt auf eine andere Komponente des Templates zugegriffen werden. Die kann genutzt werden um Methoden der Komponente direkt aufzurufen. 

**Zugriff direkt im HTML-Template**
```html
<!-- Click auf Komponente 1 führt someMethod() von Komponente 2 aus -->
<component-one (click)="comp2.someMethod()"></component-one>
<component-two #comp2></component-two>
```

**Zugriff über den Code**
```html
<component-one (click)="onComponent1Click()"></component-one>
<component-two #comp2></component-two>
```

```typescript
@ViewChild('comp2') comp2: ComponentTwo;

onComponent1Click() {
  this.comp2.someMethod();
}
```
* Lösung mit Inputs und Outputs meist sauberer 


