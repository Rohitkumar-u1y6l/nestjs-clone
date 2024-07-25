import "reflect-metadata";
import { Injector } from "../util/injector";
export function Controller(path?: string): ClassDecorator {
  return function (constructor: Function) {
    const dependecies =
      Reflect.getMetadata("design:paramtypes", constructor) || [];

    Injector.register(constructor, path, dependecies);
  };
}
