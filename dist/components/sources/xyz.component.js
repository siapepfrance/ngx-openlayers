"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var layers_1 = require("../layers");
var source_component_1 = require("./source.component");
var tilegrid_component_1 = require("../tilegrid.component");
var raster_component_1 = require("./raster.component");
var SourceXYZComponent = (function (_super) {
    __extends(SourceXYZComponent, _super);
    function SourceXYZComponent(layer, raster) {
        return _super.call(this, layer, raster) || this;
    }
    SourceXYZComponent.prototype.ngAfterContentInit = function () {
        if (this.tileGridXYZ) {
            this.tileGrid = this.tileGridXYZ.instance;
        }
        this.instance = new openlayers_1.source.XYZ(this);
        this._register(this.instance);
    };
    SourceXYZComponent.prototype.ngOnChanges = function (changes) {
        var properties = {};
        if (!this.instance) {
            return;
        }
        for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
            }
        }
        this.instance.setProperties(properties, false);
        if (changes.hasOwnProperty('url')) {
            this.instance = new openlayers_1.source.XYZ(this);
            this._register(this.instance);
        }
    };
    return SourceXYZComponent;
}(source_component_1.SourceComponent));
SourceXYZComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-source-xyz',
                template: "<ng-content></ng-content>",
                providers: [
                    { provide: source_component_1.SourceComponent, useExisting: core_1.forwardRef(function () { return SourceXYZComponent; }) }
                ]
            },] },
];
/** @nocollapse */
SourceXYZComponent.ctorParameters = function () { return [
    { type: layers_1.LayerTileComponent, decorators: [{ type: core_1.Optional }, { type: core_1.Host },] },
    { type: raster_component_1.SourceRasterComponent, decorators: [{ type: core_1.Optional }, { type: core_1.Host },] },
]; };
SourceXYZComponent.propDecorators = {
    'cacheSize': [{ type: core_1.Input },],
    'crossOrigin': [{ type: core_1.Input },],
    'opaque': [{ type: core_1.Input },],
    'projection': [{ type: core_1.Input },],
    'reprojectionErrorThreshold': [{ type: core_1.Input },],
    'minZoom': [{ type: core_1.Input },],
    'maxZoom': [{ type: core_1.Input },],
    'tileGrid': [{ type: core_1.Input },],
    'tileLoadFunction': [{ type: core_1.Input },],
    'tilePixelRatio': [{ type: core_1.Input },],
    'tileSize': [{ type: core_1.Input },],
    'tileUrlFunction': [{ type: core_1.Input },],
    'url': [{ type: core_1.Input },],
    'urls': [{ type: core_1.Input },],
    'wrapX': [{ type: core_1.Input },],
    'tileGridXYZ': [{ type: core_1.ContentChild, args: [tilegrid_component_1.TileGridComponent,] },],
};
exports.SourceXYZComponent = SourceXYZComponent;
//# sourceMappingURL=xyz.component.js.map