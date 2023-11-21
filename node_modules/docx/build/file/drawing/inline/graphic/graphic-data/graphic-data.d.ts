import { IMediaData, IMediaDataTransformation } from '../../../../media';
import { XmlComponent } from '../../../../xml-components';
export declare class GraphicData extends XmlComponent {
    private readonly pic;
    constructor(mediaData: IMediaData, transform: IMediaDataTransformation);
}
