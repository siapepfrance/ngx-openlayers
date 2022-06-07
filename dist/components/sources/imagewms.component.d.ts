/// <reference types="openlayers" />
import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AttributionLike, ImageLoadFunctionType, ProjectionLike, source } from 'openlayers';
import { LayerImageComponent } from '../layers';
import { SourceComponent } from './source.component';
export declare class SourceImageWMSComponent extends SourceComponent implements OnChanges, OnInit {
    instance: source.ImageWMS;
    attributions: AttributionLike;
    crossOrigin: string;
    hidpi: boolean;
    serverType: string;
    imageLoadFunction?: ImageLoadFunctionType;
    logo: (string | olx.LogoOptions);
    params: Object;
    projection: (ProjectionLike | string);
    ratio: number;
    resolutions: Array<number>;
    url: string;
    constructor(layer: LayerImageComponent);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
}
