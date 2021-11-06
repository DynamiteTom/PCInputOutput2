  import { Component, Output, EventEmitter, AfterContentInit } from '@angular/core';
  import { Observable, of } from 'rxjs';
  import { Widget } from '../widget/widget';
  
  @Component({
    selector: 'app-widget-c',
    template: `Widget C UI
    <br/><p WC="x"></p>
    `
  })
  export class WidgetCComponent implements Widget, AfterContentInit {
    @Output() titleEventC:EventEmitter<string> = new EventEmitter<string>();
  
    constructor(){}  
  
    getTitle(): string {
        return 'Widget C';
    }
  
    update(): Observable<string> { 
        alert('Updating Widget C...');
        let titleC = this.getTitle(); 
        this.titleEventC.emit(titleC);
        return of(titleC);
    }
  
    ngAfterContentInit(){
        this.update();
    }
  }
      