// Custom Dependecy Injection System
export class Injector {
  private static container = new Map<string, any>();

  static register(target: any, path: string = "", dependecies: string[]) {
    console.log(`Registring ${target.name} with dependecies ${dependecies}`);

    this.container.set(target.name, {
      target,
      path,
      dependecies,
      instance: null,
    });

    console.log(`Container After registring ${this.container}`);
  }

  static resolve(name: string) {
    const isRegistered = this.container.get(name);
    if (!isRegistered) {
      throw new Error(`No provider was found with the name ${name}`);
    }

    if (!isRegistered.instance) {
      const dependecies = isRegistered.dependecies.map((dependency: string) => {
        this.resolve(dependency);
      });
      isRegistered.instance = new isRegistered.target(...dependecies);
    }
    return isRegistered.instance;
  }
}
