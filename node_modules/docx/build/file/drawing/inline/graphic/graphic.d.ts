import { IMediaData, IMediaDataTransformation } from '../../../media';
import { XmlComponent } from '../../../xml-components';
export declare class Graphic extends XmlComponent {
    private readonly data;
    constructor(mediaData: IMediaData, transform: IMediaDataTransformation);
}
