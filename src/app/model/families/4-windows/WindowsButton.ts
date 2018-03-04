import { IButton } from "../../IButton";

export class WindowsButton implements IButton{
    text: string;
    size: number;
    color: string;
    
    constructor(color: string, text: string){
        this.color = color;
        this.text = text;
        
        console.log("Constructing the windows button");
    }

}