import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { weatherformComponent } from './weatherform/weatherform.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { datapassingservice } from './datapassing.service';
@NgModule({
  declarations: [
    AppComponent,
    weatherformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [datapassingservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
