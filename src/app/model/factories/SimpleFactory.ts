import { AFactory } from "./AFactory";

import { IButton } from './../IButton';
import { ISlider } from './../ISlider';

import { OSXButton } from "../families/1-osx/OSXButton";
import { OSXSlider } from "../families/1-osx/OSXSlider";


export class SimpleFactory extends AFactory { // A.K.A. the OSX factory

    getButton(): IButton {
        return new OSXButton();
    }

    getSlider(): ISlider {
        return new OSXSlider();
    }
    
}
