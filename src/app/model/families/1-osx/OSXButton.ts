import { IButton } from "../../IButton";

export class OSXButton implements IButton{
    text: string;
    size: number;
    color: string;

    constructor(){
        console.log("Constructing the osx button");
    }

}