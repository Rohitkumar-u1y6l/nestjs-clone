## Sequence Diagram: Application Bootstrapping and HTTP Request Handling

This sequence diagram outlines the process of bootstrapping the application using the `NestFactory`, initializing
modules, and handling an HTTP request. It captures the interactions between various components from the creation of the
application instance to the processing of client requests.

![NestJS Bootstrapping Process](assets/nestjs-bootstrapping-process.svg)

### Overview

1. **Bootstrapping the Application:**

    - The `bootstrap` actor initiates the bootstrapping process to set up the application.
    - `NestFactory` is used to create and configure the application, managing the lifecycle of the application setup.

2. **Creating the Application Container:**

    - `NestFactory` creates an instance of `NestContainer`, which acts as a central repository for managing modules and
      their dependencies.
    - The `NestContainer` stores the metadata and providers necessary for the application.

3. **Initializing Modules and Providers:**

    - `NestFactory` registers the main module (`AppModule`) with the `NestContainer`.
    - Providers such as `AppService` and `LoggerService` are added to the container. These providers are services or
      components that the application will use to perform various operations.
    - `INestApplication` is created using the `NestContainer` and configuration (`ApplicationConfig`). It handles the
      initialization of the application by resolving dependencies and setting up the modules.

4. **Starting the HTTP Server:**

    - After initialization, `INestApplication` starts an HTTP server that listens on a specified port. This server will
      handle incoming client requests.

5. **Handling HTTP Requests:**
    - A client sends an HTTP GET request to the `/example` endpoint.
    - The `AppController` is responsible for handling this request. It coordinates with `AppService` to process the
      request and generate a response.
    - `AppService` performs the core business logic and utilizes `LoggerService` to log operational details.
    - Once the processing is complete, the response is sent back to the client.

### Components

- **`NestFactory`**:

    - **Role**: Orchestrates the creation and configuration of the application instance.
    - **Responsibilities**: Creates `NestContainer`, registers modules, and initializes the application.

- **`NestContainer`**:

    - **Role**: Manages the lifecycle of modules and providers within the application.
    - **Responsibilities**: Stores modules and providers, resolves dependencies, and ensures proper initialization of
      components.

- **`INestApplication`**:

    - **Role**: Represents the main application instance.
    - **Responsibilities**: Initializes modules, starts the HTTP server, and manages application-level operations.

- **`AppController`**:

    - **Role**: Handles incoming HTTP requests.
    - **Responsibilities**: Processes client requests, interacts with services, and sends responses.

- **`AppService`**:

    - **Role**: Contains business logic for handling requests.
    - **Responsibilities**: Performs operations based on the request, interacts with `LoggerService` for logging.

- **`LoggerService`**:
    - **Role**: Provides logging functionality.
    - **Responsibilities**: Logs information, warnings, and errors related to application operations.

### Diagram Flow

1. **Bootstrapping Process:**

    - The `bootstrap` actor initiates the bootstrapping sequence by calling `NestFactory.create(AppModule)`.
    - `NestFactory` creates a new instance of `NestContainer` to manage the application's modules and providers.
    - `NestFactory` then registers the `AppModule` with `NestContainer` and adds providers like `AppService`
      and `LoggerService`.
    - Once the module and providers are registered, `NestFactory` creates an instance of `INestApplication`, initializes
      it, and starts the HTTP server.

2. **Handling HTTP Requests:**
    - Once the server is up and running, a client sends an HTTP GET request to the `/example` endpoint.
    - `AppController` processes this request by invoking methods on `AppService`.
    - `AppService` performs the necessary operations and uses `LoggerService` to log information about the request and
      its processing.
    - The result of the operation is sent back as a response to the client.

This detailed description provides a comprehensive understanding of the application lifecycle, from initialization
through request handling, illustrating how each component interacts within the system.
