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
var openlayers_1 = require("openlayers");
var TileGridComponent = (function () {
    function TileGridComponent() {
    }
    TileGridComponent.prototype.ngOnInit = function () {
        if (!this.resolutions) {
            this.instance = openlayers_1.tilegrid.createXYZ(this);
        }
        else {
            this.instance = new openlayers_1.tilegrid.TileGrid(this);
        }
    };
    TileGridComponent.prototype.ngOnChanges = function (changes) {
        if (!this.resolutions) {
            this.instance = openlayers_1.tilegrid.createXYZ(this);
        }
        else {
            this.instance = new openlayers_1.tilegrid.TileGrid(this);
        }
    };
    return TileGridComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof openlayers_1.Extent !== "undefined" && openlayers_1.Extent) === "function" && _a || Object)
], TileGridComponent.prototype, "extent", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], TileGridComponent.prototype, "maxZoom", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], TileGridComponent.prototype, "minZoom", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TileGridComponent.prototype, "tileSize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_b = typeof openlayers_1.Coordinate !== "undefined" && openlayers_1.Coordinate) === "function" && _b || Object)
], TileGridComponent.prototype, "origin", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TileGridComponent.prototype, "resolutions", void 0);
TileGridComponent = __decorate([
    core_1.Component({
        selector: 'aol-tilegrid',
        template: ''
    }),
    __metadata("design:paramtypes", [])
], TileGridComponent);
exports.TileGridComponent = TileGridComponent;
var _a, _c, _b;
//# sourceMappingURL=tilegrid.component.js.map