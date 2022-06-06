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
var SourceBingmapsComponent = SourceBingmapsComponent_1 = (function (_super) {
    __extends(SourceBingmapsComponent, _super);
    function SourceBingmapsComponent(layer) {
        var _this = _super.call(this, layer) || this;
        _this.imagerySet = 'Aerial';
        return _this;
    }
    SourceBingmapsComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.source.BingMaps(this);
        this.host.instance.setSource(this.instance);
    };
    return SourceBingmapsComponent;
}(source_component_1.SourceComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SourceBingmapsComponent.prototype, "cacheSize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SourceBingmapsComponent.prototype, "hidpi", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SourceBingmapsComponent.prototype, "culture", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SourceBingmapsComponent.prototype, "key", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SourceBingmapsComponent.prototype, "imagerySet", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SourceBingmapsComponent.prototype, "maxZoom", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SourceBingmapsComponent.prototype, "reprojectionErrorThreshold", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof openlayers_1.TileLoadFunctionType !== "undefined" && openlayers_1.TileLoadFunctionType) === "function" && _a || Object)
], SourceBingmapsComponent.prototype, "tileLoadFunction", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SourceBingmapsComponent.prototype, "wrapX", void 0);
SourceBingmapsComponent = SourceBingmapsComponent_1 = __decorate([
    core_1.Component({
        selector: 'aol-source-bingmaps',
        template: "<div class=\"aol-source-bingmaps\"></div>",
        providers: [
            { provide: source_component_1.SourceComponent, useExisting: core_1.forwardRef(function () { return SourceBingmapsComponent_1; }) }
        ]
    }),
    __param(0, core_1.Host()),
    __metadata("design:paramtypes", [layers_1.LayerTileComponent])
], SourceBingmapsComponent);
exports.SourceBingmapsComponent = SourceBingmapsComponent;
var SourceBingmapsComponent_1, _a;
//# sourceMappingURL=bingmaps.component.js.map