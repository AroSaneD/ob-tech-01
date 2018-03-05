import { AFactory } from "./AFactory";

import { ISlider } from './../ISlider';
import { IButton } from './../IButton';
import { AndroidButton } from '../families/5-android/AndroidButton';
import { WindowsSlider } from '../families/4-windows/WindowsSlider';
import { AndroidSlider } from '../families/5-android/AndroidSlider';
import { WindowsButton } from '../families/4-windows/WindowsButton';

// Todo: return clones

export class ObjectFactory extends AFactory { // A.K.A. Windows and Android factory (cloning)

    winBtn = new WindowsButton("red", "click");
    andBtn = new AndroidButton("press", 12, "red");

    winSldr = new WindowsSlider("red", "Scan retina to unlock");
    andSldr = new AndroidSlider(12, "red", "Slide right to unlock");


    // constructor(arrayOfInitialObjects: any[]) {
    //     super();
    // }

    getButton(...args: any[]): IButton {
        if (args.length === 2 &&
            typeof args[0] === 'string' &&
            typeof args[1] === 'string') {
                return this.getWinowsButton(args);
        }
        else if (args.length === 3 &&
            typeof args[0] === 'string' &&
            typeof args[1] === 'number' &&
            typeof args[2] === 'string'
        ) {
            return this.getAndroidButton(args);
        }
        else {
            throw new Error("Argument out of range");
        }
    }

    getSlider(...args: any[]): ISlider {
        if (args.length === 2 &&
            typeof args[0] === 'string' &&
            typeof args[1] === 'string') {
            return this.getWindowsSlider(args);
        }
        else if (args.length === 3 &&
            typeof args[0] === 'number' &&
            typeof args[1] === 'string' &&
            typeof args[2] === 'string'
        ) {
            return this.getAndroidSlider(args);
        }
        else {
            throw new Error("Argument out of range");
        }
    }


    universalClone(o1): any{
        var o2 = Object.create(Object.getPrototypeOf(o1));
        for(let p in o1){
            o2[p] = o2[1];
        }
        return o2;
    }

    getWinowsButton(...args: any[]): WindowsButton {
        const btn = this.winBtn.clone();
        // set fields from arguments
        return btn;
    }

    getAndroidButton(...args: any[]): AndroidButton {
        const btn = this.universalClone(this.andBtn);
        // set fields from arguments
        return btn;
    }

    getWindowsSlider(...args: any[]): WindowsSlider{
        const sldr = this.winSldr.clone();
        // set fields from args
        return sldr;
    }

    getAndroidSlider(...args: any[]): AndroidSlider{
        const sldr = this.universalClone(this.andSldr);
        // set fields from args
        return sldr;
    }

}
