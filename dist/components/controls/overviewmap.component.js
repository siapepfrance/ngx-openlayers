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
var ControlOverviewMapComponent = (function () {
    function ControlOverviewMapComponent(map) {
        this.map = map;
        // console.log('instancing aol-control-overviewmap');
    }
    ControlOverviewMapComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.control.OverviewMap(this);
        this.map.instance.addControl(this.instance);
    };
    ControlOverviewMapComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-overviewmap');
        this.map.instance.removeControl(this.instance);
    };
    return ControlOverviewMapComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ControlOverviewMapComponent.prototype, "collapsed", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ControlOverviewMapComponent.prototype, "collapseLabel", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ControlOverviewMapComponent.prototype, "collapsible", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ControlOverviewMapComponent.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ControlOverviewMapComponent.prototype, "layers", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Element)
], ControlOverviewMapComponent.prototype, "target", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ControlOverviewMapComponent.prototype, "tipLabel", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof openlayers_1.View !== "undefined" && openlayers_1.View) === "function" && _a || Object)
], ControlOverviewMapComponent.prototype, "view", void 0);
ControlOverviewMapComponent = __decorate([
    core_1.Component({
        selector: 'aol-control-overviewmap',
        template: "<ng-content></ng-content>"
    }),
    __metadata("design:paramtypes", [map_component_1.MapComponent])
], ControlOverviewMapComponent);
exports.ControlOverviewMapComponent = ControlOverviewMapComponent;
var _a;
//# sourceMappingURL=overviewmap.component.js.map