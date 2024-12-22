import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Import the AppComponent (standalone)

@NgModule({
  imports: [BrowserModule, AppComponent], // Import AppComponent here
  providers: [],
  bootstrap: [AppComponent] // Bootstrap the standalone component
})
export class AppModule { }
