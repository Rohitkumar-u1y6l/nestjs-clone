import { Injector } from "../util";

export function Injectable(): ClassDecorator {
  return function (constructor: Function) {
    const dependecies =
      Reflect.getMetadata("design:paramtypes", constructor) || [];

    Injector.register(constructor, "", dependecies);
  };
}
