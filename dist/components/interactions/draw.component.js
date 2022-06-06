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
var DrawInteractionComponent = (function () {
    function DrawInteractionComponent(map) {
        this.map = map;
        this.onChange = new core_1.EventEmitter();
        this.onChangeActive = new core_1.EventEmitter();
        this.onDrawEnd = new core_1.EventEmitter();
        this.onDrawStart = new core_1.EventEmitter();
        this.onPropertyChange = new core_1.EventEmitter();
    }
    DrawInteractionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instance = new openlayers_1.interaction.Draw(this);
        this.instance.on('change', function (event) { return _this.onChange.emit(event); });
        this.instance.on('change:active', function (event) { return _this.onChangeActive.emit(event); });
        this.instance.on('drawend', function (event) { return _this.onDrawEnd.emit(event); });
        this.instance.on('drawstart', function (event) { return _this.onDrawStart.emit(event); });
        this.instance.on('propertychange', function (event) { return _this.onPropertyChange.emit(event); });
        this.map.instance.addInteraction(this.instance);
    };
    DrawInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    return DrawInteractionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], DrawInteractionComponent.prototype, "clickTolerance", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DrawInteractionComponent.prototype, "features", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DrawInteractionComponent.prototype, "source", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], DrawInteractionComponent.prototype, "snapTolerance", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DrawInteractionComponent.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], DrawInteractionComponent.prototype, "maxPoints", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], DrawInteractionComponent.prototype, "minPoints", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DrawInteractionComponent.prototype, "finishCondition", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DrawInteractionComponent.prototype, "style", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DrawInteractionComponent.prototype, "geometryFunction", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DrawInteractionComponent.prototype, "geometryName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DrawInteractionComponent.prototype, "condition", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DrawInteractionComponent.prototype, "freehandCondition", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DrawInteractionComponent.prototype, "freehand", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DrawInteractionComponent.prototype, "wrapX", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DrawInteractionComponent.prototype, "onChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DrawInteractionComponent.prototype, "onChangeActive", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DrawInteractionComponent.prototype, "onDrawEnd", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DrawInteractionComponent.prototype, "onDrawStart", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DrawInteractionComponent.prototype, "onPropertyChange", void 0);
DrawInteractionComponent = __decorate([
    core_1.Component({
        selector: 'aol-interaction-draw',
        template: ''
    }),
    __metadata("design:paramtypes", [map_component_1.MapComponent])
], DrawInteractionComponent);
exports.DrawInteractionComponent = DrawInteractionComponent;
//# sourceMappingURL=draw.component.js.map