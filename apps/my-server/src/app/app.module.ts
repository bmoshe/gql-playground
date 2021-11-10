import {Module} from '@nestjs/common';
import {CarModule} from "./car/car.module";
import {GraphQLModule} from "@nestjs/graphql";
import {PersonModule} from "./person/person.module";
import { join } from 'path';

@Module({
  imports: [
    CarModule,
    PersonModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'gen/graphql/schema.graphql'),
      sortSchema: true,
    }),
  ],
})
export class AppModule {}
