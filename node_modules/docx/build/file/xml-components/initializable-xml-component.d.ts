import { XmlComponent } from '../xml-components';
export declare abstract class InitializableXmlComponent extends XmlComponent {
    constructor(rootKey: string, initComponent?: InitializableXmlComponent);
}
