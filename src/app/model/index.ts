import { AFactory } from "./factories/AFactory";
import { FactoryType } from './factories/FactoryType';


var factoryType = FactoryType.Simple;

var factory = AFactory.getFactory(factoryType);

var btn = factory.getButton(); // no arguments - osx btn
var slider = factory.getSlider("red");