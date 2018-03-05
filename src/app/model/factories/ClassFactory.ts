import { AUIFactory } from "./AFactory";

import { ISlider } from './../ISlider';
import { IButton } from './../IButton';

import { SymbianSlider } from './../families/2-symbian/SymbianSlider';
import { SymbianButton } from "../families/2-symbian/SymbianButton";

import { SamsungButton } from "../families/3-samsung/SamsungButton";
import { SamsungSlider } from './../families/3-samsung/SamsungSlider';


export class ClassFactory extends AUIFactory { // A.K.A. the symbian and samsung factory (prototype - class)

    getButton(...args: any[]): IButton {
        if (args.length != 1) {
            throw new Error("Factory not meant to handle this data");
        }

        if (!isNaN(args[0])) { // Check if given argument is a number
            return new SamsungButton(args[0]);
        }

        else if (typeof args[0] === 'string') { // check if argument is a string
            return new SymbianButton(args[0]);
        }

        throw new Error("Argument out of range.");
    }

    getSlider(...args: any[]): ISlider {
        if (args.length != 1) {
            throw new Error("Factory not meant to handle this data");
        }

        if (!isNaN(args[0])) { // Check if given argument is a number
            return new SamsungSlider(args[0]);
        }

        else if (typeof args[0] === 'string') { // check if argument is a string
            return new SymbianSlider(args[0]);
        }

        throw new Error("Argument out of range.");
    }

}
