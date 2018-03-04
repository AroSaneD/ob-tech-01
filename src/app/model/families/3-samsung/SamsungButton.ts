import { IButton } from "../../IButton";

export class SamsungButton implements IButton {
    text: string;
    size: number;
    color: string;

    constructor(size: number) {
        this.size = size;
        console.log("Constructing the samsung button");
    }

}