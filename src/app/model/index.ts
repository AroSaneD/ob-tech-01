import { FactoryType } from './factories/FactoryType';

import { AUIFactory } from "./factories/AFactory";
import { FactoryRetriever } from './factories/FactoryRetriever';

var factoryType = FactoryType.Creator;
var factory = FactoryRetriever.getFactoryFromFamily(factoryType);

// extra parameters should be passed through the factory
// concrete customizations are not needed here
// the same types are always specified, but depending on the values change the output

factory.getButton("red", 12, "text");
// var btn = factory.getButton(); // no arguments - osx btn
// var slider = factory.getSlider("red");