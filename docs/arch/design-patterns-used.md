# Design Patterns Used in the NestJS Clone Project

## Overview

In the development of the NestJS clone project, several design patterns have been employed to structure the application
efficiently and manage complexity. This document provides an overview of the design patterns used, their locations in
the code, and how they are applied.

## 1. Factory Pattern

**Location in Code:**

- **Class:** `NestFactory`
- **Usage:** The `NestFactory` class is responsible for creating and initializing the application.

**How It's Used:**

- **Method:** `create(module: any): Promise<INestApplication>`
- **Responsibilities:**
    - Creates a new instance of `NestContainer`.
    - Registers modules and providers with the container.
    - Initializes the application and sets up the HTTP server.
- **Reason:** Encapsulates the complex logic of creating and configuring the application, making it easier to manage and
  extend.

**Code Example:**

```typescript
export class NestFactory {
  public static async create(module: any): Promise<INestApplication> {
    // Creates the NestContainer
    const container = new NestContainer();
    // Registers modules and providers
    await this.registerModule(container, module);
    // Creates and initializes the INestApplication
    const config = new ApplicationConfig();
    const app = new INestApplication(container, config);
    await app.init();
    return app;
  }
}
```

## 2. Dependency Injection Pattern

### Location in Code:

**Class:** `NestContainer` and `INestApplication`  
**Usage:** Handles the injection of dependencies into services and controllers.

### How It's Used:

**Class:** `NestContainer`  
**Method:** `resolveDependency(dep: any): any`  
**Responsibilities:** Resolves and provides instances of dependencies based on metadata and constructor arguments.

**Class:** `INestApplication`  
**Method:** `initializeProvider(provider: any)`  
**Responsibilities:** Uses `NestContainer` to resolve and inject dependencies into providers.

### Code Example:

```typescript
export class NestContainer {
  public resolveDependency(dep: any): any {
    // Resolves and provides instances of dependencies
    // using constructor parameter types
  }
}

export class INestApplication {
  private async initializeProvider(provider: any) {
    const instance = this.container.resolveDependency(provider);
    if (instance && typeof instance.onModuleInit === "function") {
      await instance.onModuleInit();
    }
  }
}
```

## 3. Decorator Pattern

### Location in Code:

**Decorators:** `@Module`, `@Injectable`, `@Controller`  
**Usage:** Adds metadata and enhances classes with additional behavior.

### How It's Used:

**Decorator:** `@Module`  
**Purpose:** Annotates classes with metadata about modules (e.g., providers, imports).

**Decorator:** `@Injectable`  
**Purpose:** Marks classes as injectable services.

**Decorator:** `@Controller`  
**Purpose:** Marks classes as controllers and associates routes with them.

### Code Example:

```typescript
export function Module(metadata: ModuleMetadata): ClassDecorator {
  return (target: Function) => {
    Reflect.defineMetadata("module:metadata", metadata, target);
  };
}

export function Injectable(): ClassDecorator {
  return (target: Function) => {
    Reflect.defineMetadata("custom:injectable", true, target);
  };
}

export function Controller(): ClassDecorator {
  return (target: Function) => {
    Reflect.defineMetadata("custom:controller", true, target);
  };
}
```

## 4. Singleton Pattern

### Location in Code:

**Class:** `NestContainer`  
**Usage:** Ensures there is only one instance of `NestContainer` used throughout the application.

### How It's Used:

**Class:** `NestContainer`  
**Purpose:** Manages a single instance of the container that holds all modules and providers.  
**Responsibilities:** Provides methods to register modules, add providers, and resolve dependencies.

### Code Example:

```typescript
export class NestContainer {
  private static instance: NestContainer;
  private readonly modules = new Map<string, any>();
  private readonly providers = new Map<string, any>();
  private readonly instances = new Map<string, any>();

  private constructor() {}

  public static getInstance(): NestContainer {
    if (!NestContainer.instance) {
      NestContainer.instance = new NestContainer();
    }
    return NestContainer.instance;
  }

  // Other methods to register modules and providers
}
```

## 5. Strategy Pattern

### Location in Code:

**Class:** `INestApplication`  
**Usage:** Allows for the selection of different strategies for module initialization.

### How It's Used:

**Class:** `INestApplication`  
**Method:** `initializeModules()`  
**Responsibilities:** Chooses the appropriate strategy for initializing modules based on metadata.

### Code Example:

```typescript
export class INestApplication {
  private async initializeModules() {
    // Select and apply initialization strategy
    // based on module metadata
  }
}
```

### Summary

In summary, the project utilizes several design patterns to structure and manage the application effectively.

- **Factory Pattern**: Simplifies application creation.
- **Dependency Injection Pattern**: Manages service and controller dependencies.
- **Decorator Pattern**: Enhances classes with metadata.
- **Singleton Pattern**: Ensures a single instance of the container.
- **Strategy Pattern**: Allows for flexible module initialization strategies.

These patterns collectively contribute to a well-organized and maintainable codebase.

