import { Photographer } from './photographer';

export interface Photograph {
    id:number;
    name:string;
    price:number;
    year:number;
    photoLink:string;
    photographerId:number;
    userId:number;

    photographer:Photographer;
}