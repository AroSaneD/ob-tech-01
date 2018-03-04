import { IButton } from "../../IButton";

export class AndroidButton implements IButton{
    
    constructor(
        public text: string,
        public size: number,
        public color: string) {
            console.log("Constructing the android button");
    }

}