import "reflect-metadata";
interface ModuleOptions {
  controllers?: Function[];
  providers?: Function[];
  imports?: Function[];
  exports?: Function[];
}

export function Module(options: ModuleOptions): ClassDecorator {
  return function (target) {
    let {
      controllers = [],
      providers = [],
      imports = [],
      exports = [],
    } = options;

    if (imports.length > 0) {
      imports.forEach((importedModule) => {
        const importedControllers = Reflect.getMetadata(
          "controller",
          importedModule
        );
        const importedProvider = Reflect.getMetadata(
          "provider",
          importedModule
        );

        controllers = [...importedControllers, ...controllers];
        providers = [...importedProvider, ...providers];
      });
    }

    Reflect.defineMetadata("controller", controllers, target);
    Reflect.defineMetadata("provider", providers, target);

    if (exports.length > 0) {
      Reflect.defineMetadata("exports", exports, target);
    }
  };
}

