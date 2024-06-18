import { Region } from "./region.enum";


export interface Country {
    id:number;
    name:string;
    description:string;
    image:string;
    region:Region;
}