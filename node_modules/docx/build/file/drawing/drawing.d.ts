import { IMediaData } from '../media';
import { XmlComponent } from '../xml-components';
import { DocPropertiesOptions } from "./doc-properties/doc-properties";
import { IFloating } from "./floating";
export interface IDistance {
    readonly distT?: number;
    readonly distB?: number;
    readonly distL?: number;
    readonly distR?: number;
}
export interface IDrawingOptions {
    readonly floating?: IFloating;
    readonly docProperties?: DocPropertiesOptions;
}
export declare class Drawing extends XmlComponent {
    constructor(imageData: IMediaData, drawingOptions?: IDrawingOptions);
}
