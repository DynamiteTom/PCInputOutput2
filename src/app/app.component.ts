import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  titleA = '';
  titleB = '';
  titleC = '';

  setTitle(evTitle: string){
      alert('A title is ' + evTitle);
   //   this.title = evTitle;
  }
 
  setATitle(evTitle: string){
      alert('A title in Widget is ' + evTitle);
      this.titleA = evTitle;
//      return evTitle;
  }

  setBTitle(evTitle: string){
      alert('B title in Widget is ' + evTitle);
      this.titleB = evTitle;
//      return evTitle;
  }

  setCTitle(evTitle: string){
      alert('C title in Widget is ' + evTitle);
      this.titleC = evTitle;
//      return evTitle;
  }  

}
