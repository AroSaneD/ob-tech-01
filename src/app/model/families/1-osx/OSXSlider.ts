import { ISlider } from "../../ISlider";

export class OSXSlider implements ISlider{
    size: number;
    color: string;
    backgroundText: string;
    
    constructor(){
        console.log("Constructing the osx slider");
    }
}