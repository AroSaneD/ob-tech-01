import { WindowsButton } from './../families/4-windows/WindowsButton';
import { AFactory } from "./AFactory";

import { ISlider } from './../ISlider';
import { IButton } from './../IButton';
import { AndroidButton } from '../families/5-android/AndroidButton';
import { WindowsSlider } from '../families/4-windows/WindowsSlider';
import { AndroidSlider } from '../families/5-android/AndroidSlider';

// Todo: return clones

export class ObjectFactory extends AFactory { // A.K.A. Windows and Android factory (cloning)

    getButton(...args: any[]): IButton {
        if (args.length === 2 &&
            typeof args[0] === 'string' &&
            typeof args[1] === 'string') {
            return new WindowsButton(args[0], args[1]);
        }
        else if (args.length === 3 &&
            typeof args[0] === 'string' &&
            typeof args[1] === 'number' &&
            typeof args[2] === 'string'
        ) {
            return new AndroidButton(args[0], args[1], args[2]);
        }
        else{
            throw new Error("Argument out of range");
        }
    }

    getSlider(...args: any[]): ISlider {
        if (args.length === 2 &&
            typeof args[0] === 'string' &&
            typeof args[1] === 'string') {
            return new WindowsSlider(args[0], args[1]);
        }
        else if (args.length === 3 &&
            typeof args[0] === 'number' &&
            typeof args[1] === 'string' &&
            typeof args[2] === 'string'
        ) {
            return new AndroidSlider(args[0], args[1], args[2]);
        }
        else{
            throw new Error("Argument out of range");
        }
    }

}
