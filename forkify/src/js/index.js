import Search from './models/Search';
import Recipe from './models/Recipe';
import { elements, renderLoader, clearLoader } from './views/base';
import * as searchView from './views/searchView';

/* * Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};

/**
 SEARCH CONTROLLER
 */

const controlSearch = async () => {
	// 1) Get query from view
	const query = searchView.getInput();
	
	if(query){
		// 2) New search object and add to state
		state.search = new Search(query);	

		// 3) Prepare UI for results
			searchView.clearInput();
			searchView.clearResults();
			renderLoader(elements.searchRes);
			
		// 4) Search for recipes
	      await state.search.getResults();

		// 5) Render results on UI
		     clearLoader();
		   searchView.renderResults(state.search.result);
		  
	}

}
elements.searchForm.addEventListener('submit', e => {
	e.preventDefault();
	controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
	const btn = e.target.closest('.btn-inline');
	if(btn){
		const goToPage = parseInt(btn.dataset.goto, 10);
		searchView.clearResults();
		searchView.renderResults(state.search.result,goToPage);	
	    
	}
});

/**
 RECIPE CONTROLLER
 */

 const r = new Recipe('recipe_8275bb28647abcedef0baaf2dcf34f8b');
   r.getRecipe();
