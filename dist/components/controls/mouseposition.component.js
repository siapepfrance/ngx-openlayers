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
var ControlMousePositionComponent = (function () {
    function ControlMousePositionComponent(map, element) {
        this.map = map;
        this.element = element;
    }
    ControlMousePositionComponent.prototype.ngOnInit = function () {
        this.target = this.element.nativeElement;
        // console.log('ol.control.MousePosition init: ', this);
        this.instance = new openlayers_1.control.MousePosition(this);
        this.map.instance.addControl(this.instance);
    };
    ControlMousePositionComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-mouseposition');
        this.map.instance.removeControl(this.instance);
    };
    return ControlMousePositionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof openlayers_1.CoordinateFormatType !== "undefined" && openlayers_1.CoordinateFormatType) === "function" && _a || Object)
], ControlMousePositionComponent.prototype, "coordinateFormat", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_b = typeof openlayers_1.ProjectionLike !== "undefined" && openlayers_1.ProjectionLike) === "function" && _b || Object)
], ControlMousePositionComponent.prototype, "projection", void 0);
ControlMousePositionComponent = __decorate([
    core_1.Component({
        selector: 'aol-control-mouseposition',
        template: ""
    }),
    __metadata("design:paramtypes", [map_component_1.MapComponent, typeof (_c = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _c || Object])
], ControlMousePositionComponent);
exports.ControlMousePositionComponent = ControlMousePositionComponent;
var _a, _b, _c;
//# sourceMappingURL=mouseposition.component.js.map