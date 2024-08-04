import { ModuleOptions } from "../common";
import { INestContainer } from "./nest-container.interface";

export class NestContainer implements INestContainer {
  private readonly mods = new Map<string, ModuleOptions>();
  private readonly providers = new Map<string, any>();

  addModule(mod: any, moduleMetadata: ModuleOptions): void {
    const { name } = mod;
    if (!this.mods.has(name)) {
      console.log(`Adding ${name} Metadata`);
      this.mods.set(name, moduleMetadata);
    }
  }
  addProvider(provider: any): void {
    const { name } = provider;
    if (!this.providers.has(name)) {
      console.log(`Adding ${name} Metadata`);
      this.providers.set(name, "");
    }
  }
}
