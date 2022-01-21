import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApolloBoostModule, ApolloBoost } from "apollo-angular-boost"
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ApolloBoostModule
  ]
})
export class GraphqlModule {
  constructor(
    apolloBoost: ApolloBoost
  ) {
    apolloBoost.create({
      uri: environment.gqlurl
    });
  }
}
