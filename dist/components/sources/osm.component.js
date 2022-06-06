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
var xyz_component_1 = require("./xyz.component");
var raster_component_1 = require("./raster.component");
var SourceOsmComponent = SourceOsmComponent_1 = (function (_super) {
    __extends(SourceOsmComponent, _super);
    function SourceOsmComponent(layer, raster) {
        return _super.call(this, layer, raster) || this;
    }
    SourceOsmComponent.prototype.ngAfterContentInit = function () {
        if (this.tileGridXYZ) {
            this.tileGrid = this.tileGridXYZ.instance;
        }
        this.instance = new openlayers_1.source.OSM(this);
        this._register(this.instance);
    };
    return SourceOsmComponent;
}(xyz_component_1.SourceXYZComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof openlayers_1.AttributionLike !== "undefined" && openlayers_1.AttributionLike) === "function" && _a || Object)
], SourceOsmComponent.prototype, "attributions", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SourceOsmComponent.prototype, "cacheSize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SourceOsmComponent.prototype, "crossOrigin", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SourceOsmComponent.prototype, "maxZoom", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SourceOsmComponent.prototype, "opaque", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SourceOsmComponent.prototype, "reprojectionErrorThreshold", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_b = typeof openlayers_1.TileLoadFunctionType !== "undefined" && openlayers_1.TileLoadFunctionType) === "function" && _b || Object)
], SourceOsmComponent.prototype, "tileLoadFunction", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SourceOsmComponent.prototype, "url", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SourceOsmComponent.prototype, "wrapX", void 0);
SourceOsmComponent = SourceOsmComponent_1 = __decorate([
    core_1.Component({
        selector: 'aol-source-osm',
        template: "<div class=\"aol-source-osm\"></div>",
        providers: [
            { provide: source_component_1.SourceComponent, useExisting: core_1.forwardRef(function () { return SourceOsmComponent_1; }) }
        ]
    }),
    __param(0, core_1.Host()), __param(0, core_1.Optional()),
    __param(1, core_1.Host()), __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [layers_1.LayerTileComponent,
        raster_component_1.SourceRasterComponent])
], SourceOsmComponent);
exports.SourceOsmComponent = SourceOsmComponent;
var SourceOsmComponent_1, _a, _b;
//# sourceMappingURL=osm.component.js.map