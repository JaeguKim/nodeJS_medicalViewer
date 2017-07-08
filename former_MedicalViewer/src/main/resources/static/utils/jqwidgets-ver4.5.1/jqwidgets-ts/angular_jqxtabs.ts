/*
jQWidgets v4.5.1 (2017-April)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges, SimpleChanges } from '@angular/core';
declare let $: any;

@Component({
    selector: 'jqxTabs',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxTabsComponent implements OnChanges
{
   @Input('animationType') attrAnimationType: any;
   @Input('autoHeight') attrAutoHeight: any;
   @Input('closeButtonSize') attrCloseButtonSize: any;
   @Input('collapsible') attrCollapsible: any;
   @Input('contentTransitionDuration') attrContentTransitionDuration: any;
   @Input('disabled') attrDisabled: any;
   @Input('enabledHover') attrEnabledHover: any;
   @Input('enableScrollAnimation') attrEnableScrollAnimation: any;
   @Input('initTabContent') attrInitTabContent: any;
   @Input('keyboardNavigation') attrKeyboardNavigation: any;
   @Input('position') attrPosition: any;
   @Input('reorder') attrReorder: any;
   @Input('rtl') attrRtl: any;
   @Input('scrollAnimationDuration') attrScrollAnimationDuration: any;
   @Input('selectedItem') attrSelectedItem: any;
   @Input('selectionTracker') attrSelectionTracker: any;
   @Input('scrollable') attrScrollable: any;
   @Input('scrollPosition') attrScrollPosition: any;
   @Input('scrollStep') attrScrollStep: any;
   @Input('showCloseButtons') attrShowCloseButtons: any;
   @Input('toggleMode') attrToggleMode: any;
   @Input('theme') attrTheme: any;
   @Input('width') attrWidth: any;
   @Input('height') attrHeight: any;

   @Input('auto-create') autoCreate: boolean = true;

   properties: string[] = ['animationType','autoHeight','closeButtonSize','collapsible','contentTransitionDuration','disabled','enabledHover','enableScrollAnimation','height','initTabContent','keyboardNavigation','position','reorder','rtl','scrollAnimationDuration','selectedItem','selectionTracker','scrollable','scrollPosition','scrollStep','showCloseButtons','toggleMode','theme','width'];
   host: any;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxTabs;

   constructor(containerElement: ElementRef) {
      this.elementRef = containerElement;
      setTimeout(() => {
         if (this.autoCreate) {
            this.createComponent(); 
         }
      }); 
   }

   ngOnChanges(changes: SimpleChanges) {
      if (this.host) {
         for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            let areEqual: boolean;

            if (this[attrName]) {
               if (typeof this[attrName] === 'object') {
                  if (this[attrName] instanceof Array) {
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxTabs(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxTabs(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxTabs(this.properties[i])) {
                  this.host.jqxTabs(this.properties[i], this[attrName]); 
               }
            }
         }
      }
   }

   arraysEqual(attrValue: any, hostValue: any): boolean {
      if (attrValue.length != hostValue.length) {
         return false;
      }
      for (let i = 0; i < attrValue.length; i++) {
         if (attrValue[i] !== hostValue[i]) {
            return false;
         }
      }
      return true;
   }

   manageAttributes(): any {
      let options = {};
      for (let i = 0; i < this.properties.length; i++) {
         let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
         if (this[attrName] !== undefined) {
            options[this.properties[i]] = this[attrName];
         }
      }
      return options;
   }
   createComponent(options?: any): void {
      if (options) {
         $.extend(options, this.manageAttributes());
      }
      else {
        options = this.manageAttributes();
      }
      this.host = $(this.elementRef.nativeElement.firstChild);
      this.__wireEvents__();
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTabs', options);
      this.__updateRect__();
   }

   createWidget(options?: any): void {
        this.createComponent(options);
   }

   __updateRect__() : void {
      this.host.css({ width: this.attrWidth, height: this.attrHeight });
   }

   setOptions(options: any) : void {
      this.host.jqxTabs('setOptions', options);
   }

   // jqxTabsComponent properties
   animationType(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('animationType', arg);
      } else {
          return this.host.jqxTabs('animationType');
      }
   }

   autoHeight(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('autoHeight', arg);
      } else {
          return this.host.jqxTabs('autoHeight');
      }
   }

   closeButtonSize(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('closeButtonSize', arg);
      } else {
          return this.host.jqxTabs('closeButtonSize');
      }
   }

   collapsible(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('collapsible', arg);
      } else {
          return this.host.jqxTabs('collapsible');
      }
   }

   contentTransitionDuration(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('contentTransitionDuration', arg);
      } else {
          return this.host.jqxTabs('contentTransitionDuration');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('disabled', arg);
      } else {
          return this.host.jqxTabs('disabled');
      }
   }

   enabledHover(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('enabledHover', arg);
      } else {
          return this.host.jqxTabs('enabledHover');
      }
   }

   enableScrollAnimation(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('enableScrollAnimation', arg);
      } else {
          return this.host.jqxTabs('enableScrollAnimation');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('height', arg);
      } else {
          return this.host.jqxTabs('height');
      }
   }

   initTabContent(arg?: (tab?: Number) => void) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('initTabContent', arg);
      } else {
          return this.host.jqxTabs('initTabContent');
      }
   }

   keyboardNavigation(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('keyboardNavigation', arg);
      } else {
          return this.host.jqxTabs('keyboardNavigation');
      }
   }

   position(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('position', arg);
      } else {
          return this.host.jqxTabs('position');
      }
   }

   reorder(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('reorder', arg);
      } else {
          return this.host.jqxTabs('reorder');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('rtl', arg);
      } else {
          return this.host.jqxTabs('rtl');
      }
   }

   scrollAnimationDuration(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('scrollAnimationDuration', arg);
      } else {
          return this.host.jqxTabs('scrollAnimationDuration');
      }
   }

   selectedItem(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('selectedItem', arg);
      } else {
          return this.host.jqxTabs('selectedItem');
      }
   }

   selectionTracker(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('selectionTracker', arg);
      } else {
          return this.host.jqxTabs('selectionTracker');
      }
   }

   scrollable(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('scrollable', arg);
      } else {
          return this.host.jqxTabs('scrollable');
      }
   }

   scrollPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('scrollPosition', arg);
      } else {
          return this.host.jqxTabs('scrollPosition');
      }
   }

   scrollStep(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('scrollStep', arg);
      } else {
          return this.host.jqxTabs('scrollStep');
      }
   }

   showCloseButtons(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('showCloseButtons', arg);
      } else {
          return this.host.jqxTabs('showCloseButtons');
      }
   }

   toggleMode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('toggleMode', arg);
      } else {
          return this.host.jqxTabs('toggleMode');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('theme', arg);
      } else {
          return this.host.jqxTabs('theme');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('width', arg);
      } else {
          return this.host.jqxTabs('width');
      }
   }


   // jqxTabsComponent functions
   addAt(index: number, title: string, content: string): void {
      this.host.jqxTabs('addAt', index, title, content);
   }

   addFirst(htmlElement: any): void {
      this.host.jqxTabs('addFirst', htmlElement);
   }

   addLast(htmlElement: any): void {
      this.host.jqxTabs('addLast', htmlElement);
   }

   collapse(): void {
      this.host.jqxTabs('collapse');
   }

   disable(): void {
      this.host.jqxTabs('disable');
   }

   disableAt(index: number): void {
      this.host.jqxTabs('disableAt', index);
   }

   destroy(): void {
      this.host.jqxTabs('destroy');
   }

   ensureVisible(index: number): void {
      this.host.jqxTabs('ensureVisible', index);
   }

   enableAt(index: number): void {
      this.host.jqxTabs('enableAt', index);
   }

   expand(): void {
      this.host.jqxTabs('expand');
   }

   enable(): void {
      this.host.jqxTabs('enable');
   }

   focus(): void {
      this.host.jqxTabs('focus');
   }

   getTitleAt(index: number): string {
      return this.host.jqxTabs('getTitleAt', index);
   }

   getContentAt(index: number): any {
      return this.host.jqxTabs('getContentAt', index);
   }

   hideCloseButtonAt(index: number): void {
      this.host.jqxTabs('hideCloseButtonAt', index);
   }

   hideAllCloseButtons(): void {
      this.host.jqxTabs('hideAllCloseButtons');
   }

   length(): number {
      return this.host.jqxTabs('length');
   }

   removeAt(index: number): void {
      this.host.jqxTabs('removeAt', index);
   }

   removeFirst(): void {
      this.host.jqxTabs('removeFirst');
   }

   removeLast(): void {
      this.host.jqxTabs('removeLast');
   }

   select(index: number): void {
      this.host.jqxTabs('select', index);
   }

   setContentAt(index: number, htmlElement: string): void {
      this.host.jqxTabs('setContentAt', index, htmlElement);
   }

   setTitleAt(index: number, htmlElement: string): void {
      this.host.jqxTabs('setTitleAt', index, htmlElement);
   }

   showCloseButtonAt(index: number): void {
      this.host.jqxTabs('showCloseButtonAt', index);
   }

   showAllCloseButtons(): void {
      this.host.jqxTabs('showAllCloseButtons');
   }

   val(value): any {
      if (value !== undefined) {
         this.host.jqxTabs("val", value);
      } else {
         return this.host.jqxTabs("val");
      }
   };


   // jqxTabsComponent events
   @Output() onAdd = new EventEmitter();
   @Output() onCreated = new EventEmitter();
   @Output() onCollapsed = new EventEmitter();
   @Output() onDragStart = new EventEmitter();
   @Output() onDragEnd = new EventEmitter();
   @Output() onExpanded = new EventEmitter();
   @Output() onRemoved = new EventEmitter();
   @Output() onSelecting = new EventEmitter();
   @Output() onSelected = new EventEmitter();
   @Output() onTabclick = new EventEmitter();
   @Output() onUnselecting = new EventEmitter();
   @Output() onUnselected = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('add', (eventData: any) => { this.onAdd.emit(eventData); });
      this.host.on('created', (eventData: any) => { this.onCreated.emit(eventData); });
      this.host.on('collapsed', (eventData: any) => { this.onCollapsed.emit(eventData); });
      this.host.on('dragStart', (eventData: any) => { this.onDragStart.emit(eventData); });
      this.host.on('dragEnd', (eventData: any) => { this.onDragEnd.emit(eventData); });
      this.host.on('expanded', (eventData: any) => { this.onExpanded.emit(eventData); });
      this.host.on('removed', (eventData: any) => { this.onRemoved.emit(eventData); });
      this.host.on('selecting', (eventData: any) => { this.onSelecting.emit(eventData); });
      this.host.on('selected', (eventData: any) => { this.onSelected.emit(eventData); });
      this.host.on('tabclick', (eventData: any) => { this.onTabclick.emit(eventData); });
      this.host.on('unselecting', (eventData: any) => { this.onUnselecting.emit(eventData); });
      this.host.on('unselected', (eventData: any) => { this.onUnselected.emit(eventData); });
   }

} //jqxTabsComponent


