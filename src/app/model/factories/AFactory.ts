import { ISlider } from '../ISlider';
import { IButton } from '../IButton';


export abstract class AUIFactory {

    constructor(){

    }

    abstract getButton(...args: any[]): IButton; // arguments must be strict

    abstract getSlider(...args: any[]): ISlider;

}