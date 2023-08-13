import axios from 'axios';
import {key, proxy , id} from '../config';

export default class Search{
    constructor(query){
        this.query = query;
    }
    async getResults(){
        try{
         const res = await axios(`${proxy}https://api.edamam.com/search?q=${this.query}&app_id=${id}&app_key=${key}`);
         this.result = res.data.hits;
        // console.log(this.result);
        // console.log(res);
        } catch(error){
            alert(error);
        }
     }
}
/*
fetch("https://cors-anywhere.herokuapp.com/https://community-food2fork.p.rapidapi.com/search?q={query}", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-food2fork.p.rapidapi.com",
		"x-rapidapi-key": "ccbe695ba8msh55cb8d9e920c977p14fbeejsn8554cb2fa614"
	}
})
.then(response => {
    console.log(response);
    console.log("Hello");
})
.then((query) => {
    console.log(query);
})
.catch(err => {
	console.log(err);
});
*/




