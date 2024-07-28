import { Controller, Injectable, Module } from "./common";
import { Injector } from "./util";

@Injectable()
class CatsService {
  constructor() {
    console.log("inside cats service");
  }
}

@Controller()
class CatsController {}

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
class CatsModule {}

const args = [CatsController.name, CatsService.name];

args.forEach((arg) => Injector.resolve(arg));
