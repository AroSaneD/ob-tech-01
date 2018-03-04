import { ISlider } from "../../ISlider";

export class AndroidSlider implements ISlider {

    constructor(
        public size: number,
        public color: string,
        public backgroundText: string) {
            console.log("Constructing the android slider");
    }

}