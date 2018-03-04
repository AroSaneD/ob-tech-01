import { IButton } from "../../IButton";

export class SymbianButton implements IButton{
    text: string;
    size: number;
    color: string;

    constructor(text: string){
        this.text = text;
        
        console.log("Constructing the symbian button");
    }
    
}