import axios from 'axios';
import {key, proxy , id} from '../config';

export default class Recipe{
    constructor(uri){
        this.uri = uri;
    }
    async getRecipe(){
        try{
            const res = await axios(`${proxy}https://api.edamam.com/get?r=${this.uri}&app_id=${id}&app_key=${key}`);
            console.log(res);
        }catch (error){
            console.log(error);
        }
    }
}