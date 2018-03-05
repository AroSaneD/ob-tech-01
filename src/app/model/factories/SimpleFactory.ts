import { AUIFactory } from "./AFactory";

import { IButton } from './../IButton';
import { ISlider } from './../ISlider';

import { OSXButton } from "../families/1-osx/OSXButton";
import { OSXSlider } from "../families/1-osx/OSXSlider";


export class SimpleFactory extends AUIFactory { // A.K.A. the OSX factory

    constructor(){
        super();
    }

    getButton(): IButton {
        return new OSXButton();
    }

    getSlider(): ISlider {
        return new OSXSlider();
    }

}
