import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { source, TileLoadFunctionType, tilegrid } from 'openlayers';
import { LayerTileComponent } from '../layers';
import { SourceComponent } from './source.component';
export declare class SourceTileWMSComponent extends SourceComponent implements OnChanges, OnInit {
    instance: source.TileWMS;
    cacheSize: number;
    crossOrigin: string;
    gutter: number;
    hidpi: boolean;
    params: Object;
    projection: string;
    reprojectionErrorThreshold: number;
    serverType: string;
    tileGrid: tilegrid.TileGrid;
    tileLoadFunction: TileLoadFunctionType;
    url: string;
    urls: string[];
    wrapX: boolean;
    constructor(layer: LayerTileComponent);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
}
