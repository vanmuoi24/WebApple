import { XmlComponent } from '../../xml-components';
export declare enum TableLayoutType {
    AUTOFIT = "autofit",
    FIXED = "fixed"
}
export declare class TableLayout extends XmlComponent {
    constructor(type: TableLayoutType);
}
