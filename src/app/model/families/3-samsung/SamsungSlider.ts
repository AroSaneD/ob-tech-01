import { ISlider } from "../../ISlider";

export class SamsungSlider implements ISlider{
    size: number;
    color: string;
    backgroundText: string;

    constructor(size: number){
        this.size = size;
    }
    
}