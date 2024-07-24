<h1 style="text-align: center;color:red;">@Module</h1>

### Why it exists

- Modularization: Breaks down application into smaller, manageable units.
- Dependency Management: Defines dependencies between modules, improving code organization and maintainability.
- Code Reusability: Promotes code sharing across different parts of the application.
- Testability: Enhances unit testing by isolating components.

### Role it plays

- Metadata Provider: Supplies information about the module to the NestJS framework.
- Dependency Injector: Manages dependencies between modules and their components (controllers, services, providers).
- Module Definition: Defines the boundaries of a module and its components.

#### Basic Module Structure

```typescript
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

#### Modularization Example

```typescript
import { Module } from "@nestjs/common";
import { ProductsModule } from "./products/products.module";
import { UsersModule } from "./users/users.module";
import { OrdersModule } from "./orders/orders.module";

@Module({
  imports: [ProductsModule, UsersModule, OrdersModule],
})
export class AppModule {}
```

#### Dependency Management Example

```typescript
import { Module } from "@nestjs/common";
import { ProductsService } from "./products/products.service";
import { OrdersService } from "./orders/orders.service";

@Module({
  providers: [ProductsService, OrdersService],
  exports: [ProductsService], // Export ProductsService for other modules to use
})
export class SharedModule {}

@Module({
  imports: [SharedModule],
  providers: [OrdersService], // Inject ProductsService through SharedModule
})
export class OrdersModule {}
```

#### Code Reusability Example

```typescript
import { Module } from "@nestjs/common";
import { UsersService } from "./users/users.service";

@Module({
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}

// In another module (e.g., OrdersModule)
import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [UsersModule],
  // ...
})
export class OrdersModule {}
```

#### Dynamic Modules Example (Simplified)

```typescript
import { DynamicModule, Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Module({})
export class DatabaseModule {
  static forRoot(configService: ConfigService): DynamicModule {
    // Create a module based on the configuration
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: "DATABASE_CONNECTION",
          useValue: configService.get("database"),
        },
      ],
    };
  }
}
```
