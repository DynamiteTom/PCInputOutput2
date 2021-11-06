import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WidgetAComponent } from './widgets/widgetA.component';
import { WidgetBComponent } from './widgets/widgetB.component';
import { WidgetCComponent } from './widgets/widgetC.component';
import { WidgetComponent } from './widget/widget.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, WidgetComponent, WidgetAComponent, WidgetBComponent, WidgetCComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
