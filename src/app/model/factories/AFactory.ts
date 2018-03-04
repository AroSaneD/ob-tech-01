import { CreatorFactory } from './CreatorFactory';
import { FactoryType } from './FactoryType';
import { IButton } from '../IButton';
import { SimpleFactory } from './SimpleFactory';
import { ClassFactory } from './ClassFactory';
import { ObjectFactory } from './ObjectFactory';

export abstract class AFactory {

    // getButton(): IButton{

    // }

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