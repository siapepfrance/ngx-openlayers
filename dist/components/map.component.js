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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var common_1 = require("@angular/common");
var MapComponent = (function () {
    function MapComponent(platformId, host) {
        this.platformId = platformId;
        this.host = host;
        this.componentType = 'map';
        this.width = '100%';
        this.height = '100%';
        // we pass empty arrays to not get default controls/interactions because we have our own directives
        this.controls = [];
        this.interactions = [];
        this.isBrowser = common_1.isPlatformBrowser(this.platformId);
        if (!this.isBrowser) {
            return;
        }
        this.onClick = new core_1.EventEmitter();
        this.onDblClick = new core_1.EventEmitter();
        this.onMoveEnd = new core_1.EventEmitter();
        this.onPointerDrag = new core_1.EventEmitter();
        this.onPointerMove = new core_1.EventEmitter();
        this.onPostCompose = new core_1.EventEmitter();
        this.onPostRender = new core_1.EventEmitter();
        this.onPreCompose = new core_1.EventEmitter();
        this.onPropertyChange = new core_1.EventEmitter();
        this.onSingleClick = new core_1.EventEmitter();
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.isBrowser) {
            return;
        }
        // console.log('creating ol.Map instance with:', this);
        this.instance = new openlayers_1.Map(this);
        this.instance.setTarget(this.host.nativeElement.firstElementChild);
        this.instance.on('click', function (event) { return _this.onClick.emit(event); });
        this.instance.on('dblclick', function (event) { return _this.onDblClick.emit(event); });
        this.instance.on('moveend', function (event) { return _this.onMoveEnd.emit(event); });
        this.instance.on('pointerdrag', function (event) { return _this.onPointerDrag.emit(event); });
        this.instance.on('pointermove', function (event) { return _this.onPointerMove.emit(event); });
        this.instance.on('postcompose', function (event) { return _this.onPostCompose.emit(event); });
        this.instance.on('postrender', function (event) { return _this.onPostRender.emit(event); });
        this.instance.on('precompose', function (event) { return _this.onPreCompose.emit(event); });
        this.instance.on('propertychange', function (event) { return _this.onPropertyChange.emit(event); });
        this.instance.on('singleclick', function (event) { return _this.onSingleClick.emit(event); });
    };
    MapComponent.prototype.ngOnChanges = function (changes) {
        if (!this.isBrowser) {
            return;
        }
        var properties = {};
        if (!this.instance) {
            return;
        }
        for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
            }
        }
        // console.log('changes detected in aol-map, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    };
    MapComponent.prototype.ngAfterViewInit = function () {
        if (!this.isBrowser) {
            return;
        }
        this.instance.updateSize();
    };
    return MapComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MapComponent.prototype, "width", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MapComponent.prototype, "height", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], MapComponent.prototype, "pixelRatio", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MapComponent.prototype, "keyboardEventTarget", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MapComponent.prototype, "loadTilesWhileAnimating", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MapComponent.prototype, "loadTilesWhileInteracting", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MapComponent.prototype, "logo", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MapComponent.prototype, "renderer", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], MapComponent.prototype, "onClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], MapComponent.prototype, "onDblClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], MapComponent.prototype, "onMoveEnd", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_d = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _d || Object)
], MapComponent.prototype, "onPointerDrag", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_e = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _e || Object)
], MapComponent.prototype, "onPointerMove", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_f = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _f || Object)
], MapComponent.prototype, "onPostCompose", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_g = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _g || Object)
], MapComponent.prototype, "onPostRender", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_h = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _h || Object)
], MapComponent.prototype, "onPreCompose", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_j = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _j || Object)
], MapComponent.prototype, "onPropertyChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_k = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _k || Object)
], MapComponent.prototype, "onSingleClick", void 0);
MapComponent = __decorate([
    core_1.Component({
        selector: 'aol-map',
        template: "<div [style.width]=\"width\" [style.height]=\"height\"></div><ng-content *ngIf=\"isBrowser\"></ng-content>"
    }),
    __param(0, core_1.Inject(core_1.PLATFORM_ID)),
    __metadata("design:paramtypes", [Object, typeof (_l = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _l || Object])
], MapComponent);
exports.MapComponent = MapComponent;
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=map.component.js.map