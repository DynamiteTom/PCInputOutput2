import { Component, Output, EventEmitter, ViewChild, AfterContentInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Widget } from '../widget/widget';

@Component({
   selector: 'app-widget-a',
   template: `Widget A UI
   <br/><p WA="x"></p>
   `
})
export class WidgetAComponent implements Widget, AfterContentInit {
  @Output() titleEventA:EventEmitter<string> = new EventEmitter<string>();
  
  constructor(){  }
  
  getTitle(): string {
      return 'Widget A3';
  }

  update(): Observable<string> {  
      let titleA = this.getTitle();
      alert('A title is ' + titleA);
      this.titleEventA.emit(titleA);
      return of(titleA); 
  }

  ngAfterContentInit(){
      this.update();
  }
}


