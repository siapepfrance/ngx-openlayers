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
var SourceGeoJSONComponent = SourceGeoJSONComponent_1 = (function (_super) {
    __extends(SourceGeoJSONComponent, _super);
    function SourceGeoJSONComponent(layer) {
        return _super.call(this, layer) || this;
    }
    SourceGeoJSONComponent.prototype.ngOnInit = function () {
        this.format = new openlayers_1.format.GeoJSON(this);
        this.instance = new openlayers_1.source.Vector(this);
        this.host.instance.setSource(this.instance);
    };
    return SourceGeoJSONComponent;
}(source_component_1.SourceComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof openlayers_1.ProjectionLike !== "undefined" && openlayers_1.ProjectionLike) === "function" && _a || Object)
], SourceGeoJSONComponent.prototype, "defaultDataProjection", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_b = typeof openlayers_1.ProjectionLike !== "undefined" && openlayers_1.ProjectionLike) === "function" && _b || Object)
], SourceGeoJSONComponent.prototype, "featureProjection", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SourceGeoJSONComponent.prototype, "geometryName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SourceGeoJSONComponent.prototype, "url", void 0);
SourceGeoJSONComponent = SourceGeoJSONComponent_1 = __decorate([
    core_1.Component({
        selector: 'aol-source-geojson',
        template: "<ng-content></ng-content>",
        providers: [
            { provide: source_component_1.SourceComponent, useExisting: core_1.forwardRef(function () { return SourceGeoJSONComponent_1; }) }
        ]
    }),
    __param(0, core_1.Host()),
    __metadata("design:paramtypes", [layers_1.LayerVectorComponent])
], SourceGeoJSONComponent);
exports.SourceGeoJSONComponent = SourceGeoJSONComponent;
var SourceGeoJSONComponent_1, _a, _b;
//# sourceMappingURL=geojson.component.js.map