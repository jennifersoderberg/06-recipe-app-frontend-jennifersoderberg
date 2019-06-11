import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipe-cards/recipes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Assignment 06 - Recipe App';
  searchString = '';
  searchedRecipes = [];
  message: string;

  constructor(
    private recipesService: RecipesService
  ) {}

  ngOnInit() {}

  handleRecipeClick = (searchString) => {
    this.searchString = searchString;

    this.recipesService.yummlySearchRequest(searchString);
  }

  getSearchResult(i) {
    this.recipesService.changeMessage(i);
  }

  checkAllergies(event) {
    if (event.target.value) {
      console.log(event.target.value);
    }}
}