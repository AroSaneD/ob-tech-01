import { ISlider } from "../../ISlider";

export class SymbianSlider implements ISlider{
    size: number;
    color: string;
    backgroundText: string;

    constructor(bgText: string){
        this.backgroundText = bgText;
        console.log("Constructing the symbian slider");
    }
    
}