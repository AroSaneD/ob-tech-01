import { FactoryType } from './FactoryType';

import { SimpleFactory } from "./SimpleFactory";
import { ClassFactory } from './ClassFactory';
import { ObjectFactory } from './ObjectFactory';
import { CreatorFactory } from './CreatorFactory';
import { AUIFactory } from './AFactory';


export class FactoryRetriever{
    public static getFactoryFromFamily(ft: FactoryType){
        var factory: AUIFactory;
        
        switch (ft) {
            case FactoryType.Simple:
                factory = new SimpleFactory();
                break;
            case FactoryType.Class:
                factory = new ClassFactory();
                break;
            case FactoryType.Object:
                factory = new ObjectFactory();
                break;
            case FactoryType.Creator:
                factory = new CreatorFactory();
                break;
            default:
                throw new Error("Unknown factory requested");
        }

        return factory;
    }
}