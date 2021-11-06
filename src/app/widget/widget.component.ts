import { Component, Input} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})  
export class WidgetComponent { 
    @Input() title = 'Hello world';
    newTitle='';
 
    constructor()
    {
    }
  
    updateWidget() {
        alert('update() method in widget component ' + this.title + 'ok');
        if (this.newTitle !== ''){
             this.title = this.newTitle;
        }
 
        return this.title;
    }
    
    onSubmit(fm: NgForm){
        console.log(fm.value);
    }
  }
