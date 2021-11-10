import {Args, Query, Resolver} from "@nestjs/graphql";
import {Person} from "./person.model";

@Resolver(of => Person)
export class PersonResolver {

  @Query(returns => Person)
  async person(@Args('id') id: string): Promise<Person> {
    return {
      id: "1234",
      userName: "bmoshe",
      email: "bmoshe@gmail.com",
      name: "Moshe Bixenshpaner",
    } as Person;
  }
}
