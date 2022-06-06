"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var layers_1 = require("../layers");
var source_component_1 = require("./source.component");
var tilegrid_component_1 = require("../tilegrid.component");
var raster_component_1 = require("./raster.component");
var SourceXYZComponent = SourceXYZComponent_1 = (function (_super) {
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
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SourceXYZComponent.prototype, "cacheSize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SourceXYZComponent.prototype, "crossOrigin", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SourceXYZComponent.prototype, "opaque", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SourceXYZComponent.prototype, "projection", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SourceXYZComponent.prototype, "reprojectionErrorThreshold", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SourceXYZComponent.prototype, "minZoom", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SourceXYZComponent.prototype, "maxZoom", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = (typeof openlayers_1.tilegrid !== "undefined" && openlayers_1.tilegrid).TileGrid) === "function" && _a || Object)
], SourceXYZComponent.prototype, "tileGrid", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_b = typeof openlayers_1.TileLoadFunctionType !== "undefined" && openlayers_1.TileLoadFunctionType) === "function" && _b || Object)
], SourceXYZComponent.prototype, "tileLoadFunction", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SourceXYZComponent.prototype, "tilePixelRatio", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SourceXYZComponent.prototype, "tileSize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_c = typeof openlayers_1.TileUrlFunctionType !== "undefined" && openlayers_1.TileUrlFunctionType) === "function" && _c || Object)
], SourceXYZComponent.prototype, "tileUrlFunction", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SourceXYZComponent.prototype, "url", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], SourceXYZComponent.prototype, "urls", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SourceXYZComponent.prototype, "wrapX", void 0);
__decorate([
    core_1.ContentChild(tilegrid_component_1.TileGridComponent),
    __metadata("design:type", tilegrid_component_1.TileGridComponent)
], SourceXYZComponent.prototype, "tileGridXYZ", void 0);
SourceXYZComponent = SourceXYZComponent_1 = __decorate([
    core_1.Component({
        selector: 'aol-source-xyz',
        template: "<ng-content></ng-content>",
        providers: [
            { provide: source_component_1.SourceComponent, useExisting: core_1.forwardRef(function () { return SourceXYZComponent_1; }) }
        ]
    }),
    __param(0, core_1.Optional()), __param(0, core_1.Host()),
    __param(1, core_1.Optional()), __param(1, core_1.Host()),
    __metadata("design:paramtypes", [layers_1.LayerTileComponent,
        raster_component_1.SourceRasterComponent])
], SourceXYZComponent);
exports.SourceXYZComponent = SourceXYZComponent;
var SourceXYZComponent_1, _a, _b, _d, _c;
//# sourceMappingURL=xyz.component.js.map