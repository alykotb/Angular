import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component
({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe! :Recipe;

  @Output() SelectedRecipe= new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void 
  {
  }
  OnRecipeSelect(selected_recipe:Recipe)
  {
    this.SelectedRecipe.emit(selected_recipe); 
  }

}
