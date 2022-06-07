import {
  Component, OnInit, ElementRef, Input, Output, EventEmitter, AfterViewInit,
  SimpleChanges, OnChanges, Inject, PLATFORM_ID
} from '@angular/core';
import {
  Map, MapBrowserEvent, MapEvent, render, ObjectEvent, control,
  interaction
} from 'openlayers';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'aol-map',
  template: `<div [style.width]="width" [style.height]="height"></div><ng-content *ngIf="isBrowser"></ng-content>`
})

export class MapComponent implements OnInit, AfterViewInit, OnChanges {
  public instance: Map;
  public componentType: string = 'map';

  @Input() width: string = '100%';
  @Input() height: string = '100%';
  @Input() pixelRatio: number;
  @Input() keyboardEventTarget: Element|string;
  @Input() loadTilesWhileAnimating: boolean;
  @Input() loadTilesWhileInteracting: boolean;
  @Input() logo: string|boolean;
  @Input() renderer: 'canvas'|'webgl';


  @Output() onClick: EventEmitter<MapBrowserEvent>;
  @Output() onDblClick: EventEmitter<MapBrowserEvent>;
  @Output() onMoveEnd: EventEmitter<MapEvent>;
  @Output() onPointerDrag: EventEmitter<MapBrowserEvent>;
  @Output() onPointerMove: EventEmitter<MapBrowserEvent>;
  @Output() onPostCompose: EventEmitter<render.Event>;
  @Output() onPostRender: EventEmitter<MapEvent>;
  @Output() onPreCompose: EventEmitter<render.Event>;
  @Output() onPropertyChange: EventEmitter<ObjectEvent>;
  @Output() onSingleClick: EventEmitter<MapBrowserEvent>;

  // we pass empty arrays to not get default controls/interactions because we have our own directives
  controls: control.Control[] = [];
  interactions: interaction.Interaction[] = [];
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: string,
              private host: ElementRef) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (!this.isBrowser) {
      return;
    }
    this.onClick = new EventEmitter<MapBrowserEvent>();
    this.onDblClick = new EventEmitter<MapBrowserEvent>();
    this.onMoveEnd = new EventEmitter<MapEvent>();
    this.onPointerDrag = new EventEmitter<MapBrowserEvent>();
    this.onPointerMove = new EventEmitter<MapBrowserEvent>();
    this.onPostCompose = new EventEmitter<render.Event>();
    this.onPostRender = new EventEmitter<MapEvent>();
    this.onPreCompose = new EventEmitter<render.Event>();
    this.onPropertyChange = new EventEmitter<ObjectEvent>();
    this.onSingleClick = new EventEmitter<MapBrowserEvent>();
  }

  ngOnInit() {
    if (!this.isBrowser) {
      return;
    }
    // console.log('creating ol.Map instance with:', this);
    this.instance = new Map(this);
    this.instance.setTarget(this.host.nativeElement.firstElementChild);
    this.instance.on('click', (event: MapBrowserEvent) => this.onClick.emit(event));
    this.instance.on('dblclick', (event: MapBrowserEvent) => this.onDblClick.emit(event));
    this.instance.on('moveend', (event: MapEvent) => this.onMoveEnd.emit(event));
    this.instance.on('pointerdrag', (event: MapBrowserEvent) => this.onPointerDrag.emit(event));
    this.instance.on('pointermove', (event: MapBrowserEvent) => this.onPointerMove.emit(event));
    this.instance.on('postcompose', (event: render.Event) => this.onPostCompose.emit(event));
    this.instance.on('postrender', (event: MapEvent) => this.onPostRender.emit(event));
    this.instance.on('precompose', (event: render.Event) => this.onPreCompose.emit(event));
    this.instance.on('propertychange', (event: ObjectEvent) => this.onPropertyChange.emit(event));
    this.instance.on('singleclick', (event: MapBrowserEvent) => this.onSingleClick.emit(event));
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.isBrowser) {
      return;
    }
    let properties: { [index: string]: any } = {};
    if (!this.instance) {
      return;
    }
    for (let key in changes) {
      if (changes.hasOwnProperty(key)) {
        properties[key] = changes[key].currentValue;
      }
    }
    // console.log('changes detected in aol-map, setting new properties: ', properties);
    this.instance.setProperties(properties, false);
  }

  ngAfterViewInit() {
    if (!this.isBrowser) {
      return;
    }
    this.instance.updateSize();
  }
}
