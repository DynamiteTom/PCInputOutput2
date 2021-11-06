import { Component, Output, EventEmitter, AfterContentInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Widget } from '../widget/widget';

@Component({
  selector: 'app-widget-b',
  template: `Widget B UI
        <br/><p WB="x"></p>
  `,
})
export class WidgetBComponent implements Widget, AfterContentInit {
  @Output() titleEventB:EventEmitter<string> = new EventEmitter<string>();
  
  constructor(){}

  getTitle(): string {
      return 'Widget B';
  }

  update(): Observable<string> { 
      alert('Updating Widget B...');
      let titleB = this.getTitle(); 
      this.titleEventB.emit(titleB);
      return of(titleB);
  }

  ngAfterContentInit(){
      this.update();
  }
}
