import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  SelectedFeature:string="";

   OnNavigate(feature:string)
   {
     this.SelectedFeature=feature;
   }

  title = 'PROJECT';
}
