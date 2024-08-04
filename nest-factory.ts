import { ModuleOptions } from "./common";
import { NestContainer } from "./container";

export class NestFactory {
  static async create(mod: any) {
    const container = new NestContainer();
    await this.registerModule(container, mod);

    // application instance 
    // instance initialize 
    // instance ko return
  }

  private static async registerModule(container: NestContainer, mod: any) {
    // get the matadata avilable with the module

    const moduleMetadata: ModuleOptions = Reflect.getMetadata("module", mod);

    if (!moduleMetadata) {
      throw new Error("no metadata found");
    }

    // resolving the module
    if (moduleMetadata.imports && moduleMetadata.imports?.length > 0) {
      for (const importedModule of moduleMetadata.imports) {
        await this.registerModule(container, importedModule);
      }
    }

    if (moduleMetadata?.providers && moduleMetadata.providers.length > 0) {
      for (const provider of moduleMetadata.providers) {
        container.addProvider(provider);
      }
    }

    container.addModule(mod, moduleMetadata);
  }
}
