import { IButton } from './../IButton';
import { AndroidButton } from './../families/5-android/AndroidButton';
import { WindowsButton } from './../families/4-windows/WindowsButton';
import { SymbianButton } from './../families/2-symbian/SymbianButton';
import { OSXButton } from './../families/1-osx/OSXButton';
import { AFactory } from "./AFactory";
import { SamsungButton } from '../families/3-samsung/SamsungButton';


class CreatorConfig {
    constructor(private argumentTypes: string[], public create: (...args: any[]) => IButton) {

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

class ButtonCreator {
    config: CreatorConfig[] = [
        new CreatorConfig([], () => new OSXButton()),
        new CreatorConfig(["string"], (args) => new SymbianButton(args)),
        new CreatorConfig(["number"], (args) => new SamsungButton(args)),
        new CreatorConfig(["string", "string"], (args) => new WindowsButton(args[0], args[1])),
        new CreatorConfig(["string", "number", "string"], (args) => new AndroidButton(args[0], args[1], args[2])),
    ]

    tryGetMatchingButton(...args: any[]): IButton{
        var button: IButton;

        this.config.forEach(conf => {
            if(conf.doArgumentsMatch(args) && button == null){
                button = conf.create(args);
            }
        });

        return button;
    }
}

export class CreatorFactory extends AFactory {

    buttonCreator: ButtonCreator = new ButtonCreator();

    getButton(...args: any[]): IButton {
        return this.buttonCreator.tryGetMatchingButton(args);
    }

    getSlider(...args: any[]): ISlider {
        throw new Error("Method not implemented.");
    }

}