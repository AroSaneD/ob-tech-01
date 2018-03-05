import { IButton } from './../IButton';
import { AndroidButton } from './../families/5-android/AndroidButton';
import { WindowsButton } from './../families/4-windows/WindowsButton';
import { SymbianButton } from './../families/2-symbian/SymbianButton';
import { OSXButton } from './../families/1-osx/OSXButton';
import { AFactory } from "./AFactory";
import { SamsungButton } from '../families/3-samsung/SamsungButton';
import { ISlider } from '../ISlider';
import { OSXSlider } from '../families/1-osx/OSXSlider';
import { SymbianSlider } from '../families/2-symbian/SymbianSlider';
import { SamsungSlider } from '../families/3-samsung/SamsungSlider';
import { WindowsSlider } from '../families/4-windows/WindowsSlider';
import { AndroidSlider } from '../families/5-android/AndroidSlider';


class CreatorConfig {
    constructor(private argumentTypes: string[], public create: (...args: any[]) => IButton|ISlider) {

    }

    doArgumentsMatch(...args: any[]): boolean {
        var match = true;

        args.forEach((arg, i) => {
            if (typeof arg !== this.argumentTypes[i]) {
                match = false;
            }
        });

        return match;
    }

}

class ButtonSliderCreator {
    config: CreatorConfig[] = [
        new CreatorConfig([], () => new OSXButton()),
        new CreatorConfig(["string"], (args) => new SymbianButton(args[0])),
        new CreatorConfig(["number"], (args) => new SamsungButton(args[0])),
        new CreatorConfig(["string", "string"], (args) => new WindowsButton(args[0], args[1])),
        new CreatorConfig(["string", "number", "string"], (args) => new AndroidButton(args[0], args[1], args[2])),
    ]

    sliderConfig: CreatorConfig[] = [
        new CreatorConfig([], () => new OSXSlider()),
        new CreatorConfig(["string"], (args) => new SymbianSlider(args[0])),
        new CreatorConfig(["number"], (args) => new SamsungSlider(args[0])),
        new CreatorConfig(["string", "string"], (args) => new WindowsSlider(args[0], args[1])),
        new CreatorConfig(["number", "string", "string"], (args) => new AndroidSlider(args[0], args[1], args[2])),
    ]

    tryGetMatchingObject(config: CreatorConfig[], ...args: any[]): IButton | ISlider{
        let obj: any;

        config.forEach(conf => {
            if(conf.doArgumentsMatch(args) && obj == null){
                obj = conf.create(args) as IButton;
            }
        });

        return obj;
    }


    tryGetMatchingButton(...args: any[]): IButton{
        return this.tryGetMatchingObject(this.config, args) as IButton;
    }

    tryGetMatchingSlider(...args: any[]): ISlider{
        return this.tryGetMatchingObject(this.sliderConfig, args) as ISlider;
    }

}


export class CreatorFactory extends AFactory {

    buttonCreator: ButtonSliderCreator = new ButtonSliderCreator();

    getButton(...args: any[]): IButton {
        return this.buttonCreator.tryGetMatchingButton(args);
    }

    getSlider(...args: any[]): ISlider {
        return this.buttonCreator.tryGetMatchingSlider(args);
    }

}