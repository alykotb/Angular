import { Component, ElementRef, OnInit, ViewChild,EventEmitter,Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit
 {

  @ViewChild('NameInput') NameInput!:ElementRef; 
  @ViewChild('AmountInput') AmountInput!:ElementRef;
  
  @Output() IngredientAdded=new EventEmitter<{name:string,amount:number}>();
  // IngredientAdded=new EventEmitter<Ingredient>();

  constructor()
  {
  }

  ngOnInit(): void 
{

}

  OnAddIngredient()
{
  const Name=this.NameInput.nativeElement.value;
  const Amount=this.AmountInput.nativeElement.value; 
  this.IngredientAdded.emit
  ({ 
    name : Name, 
    amount: Amount
  });

}
// OnDeleteIngredient()
// {

// }
// OnClearIngredient()
// {

// }

 } 
