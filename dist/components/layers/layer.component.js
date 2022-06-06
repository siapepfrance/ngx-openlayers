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
var LayerComponent = (function () {
    function LayerComponent(host) {
        this.host = host;
        this.componentType = 'layer';
    }
    LayerComponent.prototype.ngOnInit = function () {
        if (this.precompose !== null && this.precompose !== undefined) {
            this.instance.on('precompose', this.precompose);
        }
        if (this.postcompose !== null && this.postcompose !== undefined) {
            this.instance.on('postcompose', this.postcompose);
        }
        this.host.instance.getLayers().push(this.instance);
    };
    LayerComponent.prototype.ngOnDestroy = function () {
        this.host.instance.getLayers().remove(this.instance);
    };
    LayerComponent.prototype.ngOnChanges = function (changes) {
        var properties = {};
        if (!this.instance) {
            return;
        }
        for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
                if (key === 'precompose') {
                    this.instance.un('precompose', changes[key].previousValue);
                    this.instance.on('precompose', changes[key].currentValue);
                }
                if (key === 'postcompose') {
                    this.instance.un('postcompose', changes[key].previousValue);
                    this.instance.on('postcompose', changes[key].currentValue);
                }
            }
        }
        // console.log('changes detected in aol-layer, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    };
    return LayerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], LayerComponent.prototype, "opacity", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], LayerComponent.prototype, "visible", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof openlayers_1.Extent !== "undefined" && openlayers_1.Extent) === "function" && _a || Object)
], LayerComponent.prototype, "extent", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], LayerComponent.prototype, "zIndex", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], LayerComponent.prototype, "minResolution", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], LayerComponent.prototype, "maxResolution", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], LayerComponent.prototype, "precompose", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], LayerComponent.prototype, "postcompose", void 0);
exports.LayerComponent = LayerComponent;
var _a;
//# sourceMappingURL=layer.component.js.map