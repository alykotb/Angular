import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit
 {
   @Output() selected_feature= new EventEmitter<string>();  

  OnSelectFeature(feature:string)
  {
    this.selected_feature.emit(feature);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
