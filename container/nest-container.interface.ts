import { ModuleOptions } from "../common";

export interface INestContainer {
  addModule(mod: any, moduleMetadata: ModuleOptions): void;
  addProvider(provider: any): void;
}
