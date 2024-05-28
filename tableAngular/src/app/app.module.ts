import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { KeyboardListComponent } from './pages/keyboard-list/keyboard-list.component';
import { MouseListComponent } from './pages/mouse-list/mouse-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TableDataComponent,
    KeyboardListComponent,
    MouseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
