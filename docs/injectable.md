<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-1PT3KE52PE"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-1PT3KE52PE');
</script>

## Injectable Example

To demonstrate the usage of the `@Injectable()` consider the following example:

```typescript
@Injectable()
export class ExampleService {
  constructor() {}

  public sayHello(): string {
    return "Hello, World!";
  }
}
```

In this example, we define a `ExampleService` class and decorate it with the `@Injectable()` decorator. This decorator marks the class as injectable, allowing it to be used as a dependency in other classes.

The `ExampleService` class has a `sayHello()` method that returns the string "Hello, World!". This method can be called from other classes by injecting an instance of `ExampleService`.

To use the `ExampleService` in another class, you can inject it using the constructor:

```typescript
import { ExampleService } from "./example.service";

@Injectable()
export class AnotherService {
  constructor(private readonly exampleService: ExampleService) {}

  public greet(): string {
    return this.exampleService.sayHello();
  }
}
```

In this example, the `AnotherService` class injects an instance of `ExampleService` using the constructor. The `greet()` method of `AnotherService` calls the `sayHello()` method of `ExampleService` to get the greeting.
