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
var map_component_1 = require("../map.component");
var layer_component_1 = require("./layer.component");
var layergroup_component_1 = require("./layergroup.component");
var LayerVectorTileComponent = (function (_super) {
    __extends(LayerVectorTileComponent, _super);
    function LayerVectorTileComponent(map, group) {
        return _super.call(this, group || map) || this;
    }
    LayerVectorTileComponent.prototype.ngOnInit = function () {
        // console.log('creating ol.layer.VectorTile instance with:', this);
        this.instance = new openlayers_1.layer.VectorTile(this);
        _super.prototype.ngOnInit.call(this);
    };
    LayerVectorTileComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    return LayerVectorTileComponent;
}(layer_component_1.LayerComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], LayerVectorTileComponent.prototype, "renderBuffer", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LayerVectorTileComponent.prototype, "renderMode", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], LayerVectorTileComponent.prototype, "renderOrder", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LayerVectorTileComponent.prototype, "style", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], LayerVectorTileComponent.prototype, "updateWhileAnimating", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], LayerVectorTileComponent.prototype, "updateWhileInteracting", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], LayerVectorTileComponent.prototype, "visible", void 0);
LayerVectorTileComponent = __decorate([
    core_1.Component({
        selector: 'aol-layer-vectortile',
        template: "<ng-content></ng-content>"
    }),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [map_component_1.MapComponent,
        layergroup_component_1.LayerGroupComponent])
], LayerVectorTileComponent);
exports.LayerVectorTileComponent = LayerVectorTileComponent;
var _a, _b;
//# sourceMappingURL=layervectortile.component.js.map