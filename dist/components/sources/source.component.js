"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var AttributionLike = ol.AttributionLike;
var SourceComponent = (function () {
    function SourceComponent(host, raster) {
        this.host = host;
        this.raster = raster;
        this.componentType = 'source';
    }
    SourceComponent.prototype.ngOnDestroy = function () {
        if (this.host) {
            this.host.instance.setSource(null);
        }
        if (this.raster) {
            this.raster.sources = [];
        }
    };
    SourceComponent.prototype._register = function (source) {
        if (this.host) {
            this.host.instance.setSource(source);
        }
        if (this.raster) {
            this.raster.sources = [source];
        }
    };
    return SourceComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof AttributionLike !== "undefined" && AttributionLike) === "function" && _a || Object)
], SourceComponent.prototype, "attributions", void 0);
exports.SourceComponent = SourceComponent;
var _a;
//# sourceMappingURL=source.component.js.map