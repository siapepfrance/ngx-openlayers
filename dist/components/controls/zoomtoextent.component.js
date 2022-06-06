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
var map_component_1 = require("../map.component");
var ControlZoomToExtentComponent = (function () {
    function ControlZoomToExtentComponent(map) {
        this.map = map;
        // console.log('instancing aol-control-zoomtoextent');
    }
    ControlZoomToExtentComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.control.ZoomToExtent(this);
        this.map.instance.addControl(this.instance);
    };
    ControlZoomToExtentComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-zoomtoextent');
        this.map.instance.removeControl(this.instance);
    };
    return ControlZoomToExtentComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ControlZoomToExtentComponent.prototype, "className", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ControlZoomToExtentComponent.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ControlZoomToExtentComponent.prototype, "tipLabel", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof openlayers_1.Extent !== "undefined" && openlayers_1.Extent) === "function" && _a || Object)
], ControlZoomToExtentComponent.prototype, "extent", void 0);
ControlZoomToExtentComponent = __decorate([
    core_1.Component({
        selector: 'aol-control-zoomtoextent',
        template: "<ng-content></ng-content>"
    }),
    __metadata("design:paramtypes", [map_component_1.MapComponent])
], ControlZoomToExtentComponent);
exports.ControlZoomToExtentComponent = ControlZoomToExtentComponent;
var _a;
//# sourceMappingURL=zoomtoextent.component.js.map