## Class Diagram: Application Structure

The class diagram provides a high-level view of the key classes and their relationships within the application. It
outlines the roles and interactions of various components such as modules, services, controllers, and decorators.

![Class Diagram](https://raw.githubusercontent.com/Rohitkumar-u1y6l/nestjs-clone/main/assets/class-diagram.svg)

### Overview

The diagram includes the following key components:

1. **Modules**:

   - **`AppModule`**: Represents the root module of the application. It organizes and groups related components such as
     controllers and providers.
   - **`AppModule`**: An example of a module that includes providers like `AppService`. It demonstrates how to
     define and configure modules within the application.

2. **Controllers**:

   - **`AppController`**: Handles incoming HTTP requests. It uses services to process requests and generate responses.
     Annotated with the `@Controller()` decorator to define it as a controller.

3. **Services**:

   - **`AppService`**: Contains business logic and provides methods to handle specific operations. It is used by
     controllers to perform tasks and generate responses. Annotated with the `@Injectable()` decorator to indicate that
     it can be injected as a dependency.

4. **Decorators**:

   - **`@Module(metadata)`**: Used to define a module and its configuration, including providers and imports.
     The `metadata` parameter specifies the module’s dependencies and providers.
   - **`@Injectable()`**: Marks a class as a service or provider that can be injected into other components.
   - **`@Controller()`**: Indicates that a class is a controller responsible for handling HTTP requests.

5. **Application Factory**:

   - **`NestFactory`**: Responsible for creating and initializing the application. It sets up the `NestContainer`,
     registers modules, and creates an instance of `INestApplication`.

6. **Application Components**:
   - **`NestContainer`**: Manages modules and providers, handles dependency resolution, and maintains instances of
     components.
   - **`INestApplication`**: Represents the application instance, initializes modules, and starts the HTTP server.

### Class Relationships

- **`NestFactory`** creates and configures the `NestContainer`.
- **`NestContainer`** is responsible for managing and resolving dependencies for modules like `AppModule`
  and `ExampleModule`.
- **`AppModule`** and **`ExampleModule`** define and configure their respective providers and controllers.
- **`AppController`** uses **`AppService`** to process HTTP requests.
- **`AppService`** uses **`LoggerService`** to log information about operations and requests.
- **`@Module(metadata)`** decorator is applied to modules to define their configuration.
- **`@Injectable()`** decorator marks services that can be injected as dependencies.
- **`@Controller()`** decorator indicates that a class serves as a controller for handling HTTP requests.

### Diagram Details

- **`AppModule`**:

  - **Attributes**: Metadata about the module.
  - **Methods**: None (acts as a container for configuration).
  - **Relations**: Contains `AppService` and `AppController`.

- **`AppController`**:

  - **Attributes**: None.
  - **Methods**: Handles HTTP requests and invokes `AppService` methods.
  - **Relations**: Depends on `AppService`.

- **`AppService`**:

  - **Attributes**: None.
  - **Methods**: Provides business logic and interacts with `LoggerService`.
  - **Relations**: Depends on `LoggerService`.

- **`LoggerService`**:

  - **Attributes**: None.
  - **Methods**: Provides logging functionality.

- **`NestFactory`**:

  - **Attributes**: None.
  - **Methods**: Creates and initializes `NestContainer` and `INestApplication`.
  - **Relations**: Creates and configures `NestContainer`, initializes `INestApplication`.

- **`NestContainer`**:

  - **Attributes**: Stores modules and providers.
  - **Methods**: Manages module and provider registration, resolves dependencies.
  - **Relations**: Manages `AppModule`, `ExampleModule`, `AppService`, `LoggerService`.

- **`INestApplication`**:
  - **Attributes**: Configuration settings.
  - **Methods**: Initializes modules, starts the HTTP server.
  - **Relations**: Uses `NestContainer` for initialization.
