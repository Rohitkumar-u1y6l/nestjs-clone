import { Controller, Injectable, Module } from "./common";
import { NestFactory } from "./nest-factory";
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

async function bootstrap() {
  const app = await NestFactory.create(CatsModule);
}
