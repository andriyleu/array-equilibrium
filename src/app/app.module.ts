import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialModule } from "./material/material.module";
import { RouterModule, Routes } from "@angular/router";
import { CalculatorComponent } from './calculator/calculator.component';
import { InfoComponent } from './info/info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: "calculator", component: CalculatorComponent },
  {
    path: "info",
    component: InfoComponent
  },
  {
    path: "",
    redirectTo: "/info",
    pathMatch: "full"
  }
];

@NgModule({
  declarations: [AppComponent, CalculatorComponent, InfoComponent],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
