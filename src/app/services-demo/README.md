# Services

Kapseln Logik. Können von Angular automatisch in Komponenten oder andere Serices injected werden.

```typescript
@Injectable({
  providedIn: 'root'
})
export class MyService {

  greet() {
    console.log('Hello World');
  }
  
}
```

## Gotchas

* Sind per default **Singleton**.
* Mehrere parallele Instanzen durch Überschreiben des `providers` Array (des Modules / der Komponente) möglich.
* Können in andere Services, Komponenten, Pipes und Directives injected werden.
* Sollten den größten Teil der Logik enthalten.
