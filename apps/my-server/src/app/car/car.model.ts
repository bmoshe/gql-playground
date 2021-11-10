import {Field, ID, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class Car {
  @Field(type => ID)
  id: string;

  @Field()
  userName: string;

  @Field()
  email: string;

  @Field()
  name: string;
}
