import { CreatorFactory } from './CreatorFactory';
import { FactoryType } from './FactoryType';
import { IButton } from '../IButton';
import { SimpleFactory } from './SimpleFactory';
import { ClassFactory } from './ClassFactory';
import { ObjectFactory } from './ObjectFactory';
import { ISlider } from '../ISlider';


// todo: implement some higher level parametrization, as not have the checks hard coded in for all of the factories

export abstract class AFactory {

    abstract getButton(...args: any[]): IButton;

    abstract getSlider(...args: any[]): ISlider;

    public static getFactory(type: FactoryType): AFactory {
        switch (type) {
            case FactoryType.Simple:
                return new SimpleFactory();
            case FactoryType.Class:
                return new ClassFactory();
            case FactoryType.Object:
                return new ObjectFactory();
            case FactoryType.Creator:
                return new CreatorFactory();
            default:
                throw new Error("Unknown factory requested");
        }
    }

}