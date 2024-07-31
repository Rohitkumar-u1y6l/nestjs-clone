<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-1PT3KE52PE"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-1PT3KE52PE');
</script>

<h1 style="text-align:center"> Static vs Instance Functions </h1>

### What are static functions?

#### Definition:

- When: Static methods are defined within the class using the static keyword.
  They are part of the class itself rather than any instance of the class.
- Where: They exist at the class level.

#### Example:

- Simple example:

```typescript
class MathUtils {
  static add(a: number, b: number) {
    return a + b;
  }

  static subtract(a: number, b: number) {
    return a - b;
  }
}

console.log(MathUtils.add(5, 3)); // Output: 8
console.log(MathUtils.subtract(5, 3)); // Output: 2
```

- Real-world example:

```typescript
class User {
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  static create(name: string, age: number) {
    // Perform validation or additional logic before creating a new user instance
    if (age < 18) {
      throw new Error("User must be at least 18 years old.");
    }

    return new User(name, age);
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }
}

const newUser = User.create("John Doe", 25);
newUser.greet(); // Output: Hello, my name is John Doe and I'm 25 years old.
```

In this example, the static function `create` is used as a factory method to create new instances of the `User` class.
It performs validation to ensure that the user's age is at least 18 before creating the instance.

### why they exist ?

- Utility functions: Static methods are used to define utility functions that are not tied to any instance of the class.

```typescript
class FileUtil {
  static readFile(path: string) {
    // Code to read file from the given path
  }

  static writeFile(path: string, data: string) {
    // Code to write data to the file at the given path
  }
}

const filePath = "/path/to/file.txt";
const fileContent = FileUtil.readFile(filePath);
console.log(fileContent); // Output: Contents of the file

const newFilePath = "/path/to/newfile.txt";
const newData = "This is some new data";
FileUtil.writeFile(newFilePath, newData);
console.log("File written successfully"); // Output: File written successfully
```

- Factory methods: They are used to create instances of the class.

```typescript
class User {
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  static create(name: string, age: number) {
    return new User(name, age);
  }
}
```

- Helper functions: They are used to perform operations that do not require access to instance data.

```typescript
class MathUtils {
  static add(a: number, b: number) {
    return a + b;
  }

  static subtract(a: number, b: number) {
    return a - b;
  }
}
```

### Static vs Instance Functions Lifecycle:

#### Constraints for NestFactory Class

     - one instance of a class
     - what is the difference b/w static and instance functions in the context of NestFactory class

```typescript
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
  }

  // Static method
  static staticMethod() {
    console.log("Static method");
  }

  // Instance method
  instanceMethod() {
    console.log("Instance method");
  }
}

// Demonstration of lifecycles

// Accessing static method without instance
Singleton.staticMethod(); // Output: Static method

// Creating the singleton instance
const singletonInstance = new Singleton();

// Accessing instance method
singletonInstance.instanceMethod(); // Output: Instance method

// Creating another instance (will return the same singleton instance)
const anotherInstance = new Singleton();
anotherInstance.instanceMethod(); // Output: Instance method

// The instance should be the same as the original
console.log(singletonInstance === anotherInstance); // Output: true

// Instance method can still be accessed
singletonInstance.instanceMethod(); // Output: Instance method

// Static method can still be accessed
Singleton.staticMethod(); // Output: Static method
```
