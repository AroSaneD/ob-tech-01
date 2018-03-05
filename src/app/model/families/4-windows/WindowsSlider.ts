import { ISlider } from './../../ISlider';

export class WindowsSlider implements ISlider{
    size: number;
    color: string;
    backgroundText: string;

    constructor(color: string, bgtext: string){
        this.color = color;
        this.backgroundText = bgtext;

        console.log("Constructing the windows slider");
    }

    clone(): WindowsSlider{
        return new WindowsSlider(this.color, this.backgroundText);
    }
}