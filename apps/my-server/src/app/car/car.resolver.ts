import {Args, Query, Resolver} from "@nestjs/graphql";
import {Car} from "./car.model";

@Resolver(of => Car)
export class CarResolver {

  @Query(returns => Car)
  async getCarById(@Args('id') id: string): Promise<Car> {
    return {
      id: "1234",
      userName: "bmoshe",
      name: "Moshe Bixenshpaner",
      email: "bmoshe@gmail.com",
    } as Car;
  }
}
