(()=>{var e={271:e=>{imports.gi.versions.GLib="2.0",e.exports=imports.gi.GLib},418:e=>{imports.gi.versions.Gdk="3.0",e.exports=imports.gi.Gdk},597:e=>{imports.gi.versions.Gio="2.0",e.exports=imports.gi.Gio},184:e=>{imports.gi.versions.Gtk="3.0",e.exports=imports.gi.Gtk},357:e=>{imports.gi.versions.Handy="1",e.exports=imports.gi.Handy},7:e=>{imports.gi.versions.Notify="0.7",e.exports=imports.gi.Notify},524:e=>{e.exports='<?xml version="1.0" encoding="UTF-8"?><interface><requires lib="gtk+" version="3.0" /><object class="GtkAdjustment" id="adj_padding_left"><property name="upper">100</property><property name="lower">0</property><property name="value">0</property><property name="step-increment">1</property></object><object class="GtkAdjustment" id="adj_padding_right"><property name="upper">100</property><property name="lower">0</property><property name="value">0</property><property name="step-increment">1</property></object><object class="GtkAdjustment" id="adj_padding_top"><property name="upper">100</property><property name="lower">0</property><property name="value">0</property><property name="step-increment">1</property></object><object class="GtkAdjustment" id="adj_padding_bottom"><property name="upper">100</property><property name="value">0</property><property name="lower">0</property><property name="step-increment">1</property></object><object class="HdyExpanderRow" id="row"><property name="title" translatable="yes"></property><property name="visible">True</property><property name="can-focus">True</property><child type="action"><object class="GtkButton" id="del_btn"><property name="visible">True</property><property name="valign">center</property><style><class name="flat" /><class name="circular" /><class name="list-button" /></style><child><object class="GtkImage"><property name="visible">True</property><property name="icon-name">user-trash-symbolic</property></object></child></object></child><child><object class="HdyPreferencesRow"><property name="title">Add Black List Item</property><property name="visible">True</property><child><object class="GtkBox"><property name="margin-top">16</property><property name="margin-bottom">16</property><property name="margin-left">24</property><property name="margin-right">30</property><property name="spacing">12</property><property name="visible">True</property><child><object class="GtkButton" id="pick_bl_btn"><property name="visible">True</property><property name="valign">center</property><style><class name="flat" /><class name="circular" /></style><child><object class="GtkImage"><property name="visible">True</property><property name="icon-name">find-location-symbolic</property></object></child></object></child><child><object class="GtkEntry" id="entry"><property name="hexpand">True</property><property name="visible">True</property></object></child></object></child></object></child><child><object class="HdyActionRow"><property name="visible">True</property><property name="title" translatable="yes">Top Clipping</property><property name="activatable_widget">padding_top_2</property><child><object class="GtkSpinButton" id="padding_top_2"><property name="visible">True</property><property name="halign">start</property><property name="valign">center</property><property name="numeric">1</property><property name="adjustment">adj_padding_top</property></object></child></object></child><child><object class="HdyActionRow"><property name="visible">True</property><property name="title" translatable="yes">Bottom Clipping</property><property name="activatable_widget">padding_bottom_2</property><child><object class="GtkSpinButton" id="padding_bottom_2"><property name="visible">True</property><property name="halign">start</property><property name="valign">center</property><property name="numeric">1</property><property name="adjustment">adj_padding_bottom</property></object></child></object></child><child><object class="HdyActionRow"><property name="visible">True</property><property name="title" translatable="yes">Left Clipping</property><property name="activatable_widget">padding_left_2</property><child><object class="GtkSpinButton" id="padding_left_2"><property name="visible">True</property><property name="halign">start</property><property name="valign">center</property><property name="numeric">1</property><property name="adjustment">adj_padding_left</property></object></child></object></child><child><object class="HdyActionRow"><property name="visible">True</property><property name="title" translatable="yes">Right Clipping</property><property name="activatable_widget">padding_right_2</property><child><object class="GtkSpinButton" id="padding_right_2"><property name="visible">True</property><property name="halign">start</property><property name="valign">center</property><property name="numeric">1</property><property name="adjustment">adj_padding_right</property></object></child></object></child></object></interface>'},481:e=>{e.exports='<?xml version="1.0" encoding="UTF-8"?><interface><requires lib="gtk+" version="3.0" /><object class="HdyExpanderRow" id="row"><property name="title" translatable="yes"></property><property name="visible">True</property><property name="can-focus">True</property><child type="action"><object class="GtkButton" id="del_btn"><property name="visible">True</property><property name="valign">center</property><style><class name="flat" /><class name="circular" /><class name="list-button" /></style><child><object class="GtkImage"><property name="visible">True</property><property name="icon-name">user-trash-symbolic</property></object></child></object></child><child><object class="HdyPreferencesRow"><property name="title">Add Black List Item</property><property name="visible">True</property><child><object class="GtkBox"><property name="margin-top">16</property><property name="margin-bottom">16</property><property name="margin-left">24</property><property name="margin-right">30</property><property name="spacing">12</property><property name="visible">True</property><child><object class="GtkButton" id="pick_bl_btn"><property name="visible">True</property><property name="valign">center</property><style><class name="flat" /><class name="circular" /></style><child><object class="GtkImage"><property name="visible">True</property><property name="icon-name">find-location-symbolic</property></object></child></object></child><child><object class="GtkEntry" id="entry"><property name="hexpand">True</property><property name="visible">True</property></object></child></object></child></object></child></object></interface>'},728:e=>{e.exports='<?xml version="1.0" encoding="UTF-8"?><interface><requires lib="gtk+" version="3.24" /><object class="GtkAdjustment" id="adj_radius"><property name="upper">100</property><property name="lower">2</property><property name="value">2</property><property name="step-increment">1</property></object><object class="GtkAdjustment" id="adj_padding_left"><property name="upper">100</property><property name="lower">0</property><property name="value">0</property><property name="step-increment">1</property></object><object class="GtkAdjustment" id="adj_padding_right"><property name="upper">100</property><property name="lower">0</property><property name="value">0</property><property name="step-increment">1</property></object><object class="GtkAdjustment" id="adj_padding_top"><property name="upper">100</property><property name="lower">0</property><property name="value">0</property><property name="step-increment">1</property></object><object class="GtkAdjustment" id="adj_padding_bottom"><property name="upper">100</property><property name="value">0</property><property name="lower">0</property><property name="step-increment">1</property></object><object class="GtkAdjustment" id="adj_blur_sigmal"><property name="upper">100</property><property name="value">0</property><property name="lower">0</property><property name="step-increment">1</property></object><object class="GtkAdjustment" id="adj_blur_brightness"><property name="upper">100</property><property name="value">0</property><property name="lower">0</property><property name="step-increment">1</property></object><object class="GtkAdjustment" id="adj_blured_window_opacity"><property name="upper">100</property><property name="value">0</property><property name="lower">0</property><property name="step-increment">1</property></object><object class="HdyWindow" id="window"><property name="can-focus">False</property><property name="default-width">800</property><property name="default-height">600</property><child><object class="GtkBox"><property name="visible">True</property><property name="can_focus">False</property><property name="orientation">vertical</property><child><object class="HdyHeaderBar"><property name="visible">True</property><property name="centering_policy">strict</property><property name="can_focus">False</property><property name="show_close_button">True</property><property name="title">Setting</property><child type="title"><object class="HdyViewSwitcherTitle" id="switcher_title"><property name="visible">True</property><property name="can_focus">False</property><property name="stack">stack</property><property name="title" translatable="yes">mutter rounded setting</property></object></child></object></child><child><object class="GtkStack" id="stack"><property name="visible">True</property><property name="can_focus">False</property><child><object class="HdyPreferencesPage"><property name="visible">True</property><child><object class="HdyPreferencesGroup"><property name="visible">True</property><property name="can-focus">False</property><child><object class="GtkListBox" id="lists_listbox"><property name="visible">True</property><property name="can_focus">False</property><property name="hexpand">True</property><property name="selection-mode">none</property><style><class name="content" /></style><child><object class="HdyActionRow"><property name="visible">True</property><property name="title" translatable="yes">Rounded radius</property><property name="activatable_widget">radius_scale</property><child><object class="GtkScale" id="radius_scale"><property name="visible">True</property><property name="hexpand">True</property><property name="value-pos">left</property><property name="adjustment">adj_radius</property></object></child></object></child><child><object class="HdyActionRow"><property name="visible">True</property><property name="title" translatable="yes">Top Clipping</property><property name="activatable_widget">padding_top</property><child><object class="GtkSpinButton" id="padding_top"><property name="visible">True</property><property name="halign">start</property><property name="valign">center</property><property name="numeric">1</property><property name="adjustment">adj_padding_top</property></object></child></object></child><child><object class="HdyActionRow"><property name="visible">True</property><property name="title" translatable="yes">Bottom Clipping</property><property name="activatable_widget">padding_bottom</property><child><object class="GtkSpinButton" id="padding_bottom"><property name="visible">True</property><property name="halign">start</property><property name="valign">center</property><property name="numeric">1</property><property name="adjustment">adj_padding_bottom</property></object></child></object></child><child><object class="HdyActionRow"><property name="visible">True</property><property name="title" translatable="yes">Left Clipping</property><property name="activatable_widget">padding_left</property><child><object class="GtkSpinButton" id="padding_left"><property name="visible">True</property><property name="halign">start</property><property name="valign">center</property><property name="numeric">1</property><property name="adjustment">adj_padding_left</property></object></child></object></child><child><object class="HdyActionRow"><property name="visible">True</property><property name="title" translatable="yes">Right Clipping</property><property name="activatable_widget">padding_right</property><child><object class="GtkSpinButton" id="padding_right"><property name="visible">True</property><property name="halign">start</property><property name="valign">center</property><property name="numeric">1</property><property name="adjustment">adj_padding_right</property></object></child></object></child></object></child></object></child></object><packing><property name="name">page1</property><property name="title" translatable="yes">Global</property></packing></child><child><object class="HdyPreferencesPage"><property name="visible">True</property><child><object class="HdyPreferencesGroup"><property name="title">For apps in this list, the setting will effect in next openning.</property><property name="visible">True</property><child><object class="GtkListBox" id="bl_list"><property name="visible">True</property><property name="expand">False</property><property name="activate-on-single-click">False</property><property name="selection-mode">none</property><style><class name="content" /></style><child></child><child><object class="HdyPreferencesRow"><property name="title">Add Special App</property><property name="visible">True</property><child><object class="GtkButton" id="add_bl_btn"><property name="visible">True</property><style><class name="flat" /></style><child><object class="GtkImage"><property name="icon-name">list-add-symbolic</property><property name="margin">8</property><property name="visible">True</property></object></child></object></child></object></child></object></child></object></child></object><packing><property name="name">page2</property><property name="title" translatable="yes">BlackList</property></packing></child><child><object class="HdyPreferencesPage"><property name="visible">True</property><child><object class="HdyPreferencesGroup"><property name="visible">True</property><child><object class="GtkListBox" id="app_list"><property name="visible">True</property><property name="expand">False</property><property name="activate-on-single-click">False</property><property name="selection-mode">none</property><style><class name="content" /></style><child></child><child><object class="HdyPreferencesRow"><property name="title">Add Special App</property><property name="visible">True</property><child><object class="GtkButton" id="add_app_btn"><property name="visible">True</property><style><class name="flat" /></style><child><object class="GtkImage" id="add_img"><property name="icon-name">list-add-symbolic</property><property name="margin">8</property><property name="visible">True</property></object></child></object></child></object></child></object></child></object></child></object><packing><property name="name">page3</property><property name="title" translatable="yes">Special</property></packing></child><child><object class="HdyPreferencesPage"><property name="visible">True</property><child><object class="HdyPreferencesGroup"><property name="visible">True</property><property name="title">Blur Setting</property><child><object class="HdyActionRow"><property name="visible">True</property><property name="title" translatable="yes">Blur sigmal</property><property name="activatable_widget">blur-sigmal</property><child><object class="GtkScale" id="blur-sigmal"><property name="visible">True</property><property name="value-pos">left</property><property name="adjustment">adj_blur_sigmal</property><property name="width-request">250</property></object></child></object></child><child><object class="HdyActionRow"><property name="visible">True</property><property name="title" translatable="yes">Blur Brightness</property><property name="activatable_widget">blur-brightness</property><child><object class="GtkScale" id="blur-brightness"><property name="visible">True</property><property name="value-pos">left</property><property name="adjustment">adj_blur_brightness</property><property name="width-request">250</property></object></child></object></child><child><object class="HdyActionRow"><property name="visible">True</property><property name="title" translatable="yes">Blured window opacity</property><property name="activatable_widget">blured-window-opacity</property><child><object class="GtkScale" id="blured-window-opacity"><property name="visible">True</property><property name="width-request">250</property><property name="value-pos">left</property><property name="adjustment">adj_blured_window_opacity</property></object></child></object></child></object></child><child><object class="HdyPreferencesGroup"><property name="visible">True</property><property name="title">Blured List</property><property name="description">For apps in this list, the setting will effect in next openning.</property><child><object class="GtkListBox" id="blur_list"><property name="visible">True</property><property name="expand">False</property><property name="activate-on-single-click">False</property><property name="selection-mode">none</property><style><class name="content" /></style><child></child><child><object class="HdyPreferencesRow"><property name="title">Add Special App</property><property name="visible">True</property><child><object class="GtkButton" id="add_blur_btn"><property name="visible">True</property><style><class name="flat" /></style><child><object class="GtkImage"><property name="icon-name">list-add-symbolic</property><property name="margin">8</property><property name="visible">True</property></object></child></object></child></object></child></object></child></object></child></object><packing><property name="name">page4</property><property name="title" translatable="yes">Blur Effect</property></packing></child></object><packing><property name="expand">True</property><property name="fill">True</property></packing></child><child><object class="HdyViewSwitcherBar" id="switcher_bar"><property name="visible">True</property><property name="can_focus">False</property><property name="stack">stack</property><property name="reveal" bind-source="switcher_title" bind-property="title-visible" bind-flags="sync-create" /></object></child></object></child></object></interface>'}},t={};function r(p){var o=t[p];if(void 0!==o)return o.exports;var n=t[p]={exports:{}};return e[p](n,n.exports,r),n.exports}(()=>{"use strict";var e,t,p=r(184),o=r(597),n=r(357),i=r(7),a=r(271),l=r(418),c=o.Settings.new("org.gnome.shell.extensions.pickawindow");function s(r){for(var o,n=null===(o=l.Display.get_default())||void 0===o?void 0:o.get_default_screen(),i=p.CssProvider.new(),s="window {\n                background: transparent;\n                color: black;\n              }\n\n              label {\n                color: white;\n                padding: 16px;\n                background: #000;\n                opacity: 0.7;\n                font-size: large;\n              }",y=[],d=0;d<s.length;d++)y.push(s.charCodeAt(d));i.load_from_data(new Uint8Array(y)),(e=p.Window.new(p.WindowType.POPUP)).set_application(r);var m=p.Label.new("Pick a Window"),b=new p.Box;return e.get_style_context().add_provider(i,p.STYLE_PROVIDER_PRIORITY_SETTINGS),m.get_style_context().add_provider(i,p.STYLE_PROVIDER_PRIORITY_SETTINGS),b.valign=p.Align.CENTER,b.halign=p.Align.CENTER,b.add(m),e.add(b),e.move(0,0),e.default_height=((null==n?void 0:n.get_height())||100)-1,e.default_width=((null==n?void 0:n.get_width())||100)-1,e.set_visual(e.screen.get_rgba_visual()),e.add_events(l.EventMask.BUTTON_PRESS_MASK),e.add_events(l.EventMask.POINTER_MOTION_MASK),e.connect("button-press-event",(function(t,r){var p,o=(null===(p=r.get_device())||void 0===p?void 0:p.get_position())||[0,0,0],n=(o[0],o[1]),i=o[2];e.hide(),a.timeout_add(0,200,(function(){return function(e,t){c.set_value("pick-position",new a.Variant("(ii)",[e,t]))}(n,i),!1}))})),e.connect("motion-notify-event",(function(e,t){var r,p=(null===(r=t.get_device())||void 0===r?void 0:r.get_position())||[0,0,0],o=(p[0],p[1]),n=p[2];m.set_label("("+o+", "+n+")")})),c.connect("changed",(function(e,r){if("wm-instance"==r){var p=c.get_string("wm-instance");p.length>0&&(t(p),c.set_string("wm-instance",""))}})),e}var y=o.Settings.new("org.gnome.mutter"),d=JSON.parse(y.get_string("clip-edge-padding")),m={"black-list":y.get_strv("black-list"),"blur-list":y.get_strv("blur-list")};function b(e){var t=[];return t[0]=e.left,t[1]=e.right,t[2]=e.top,t[3]=e.bottom,t}function u(e){return{left:e[0],right:e[1],top:e[2],bottom:e[3]}}function g(e){d.global=b(e),y.set_string("clip-edge-padding",JSON.stringify(d))}function _(){return u(d.global)}function j(e,t,r){var p=m[e];return-1==p.indexOf(r)&&(p[p.indexOf(t)]=r,y.set_strv(e,p),!0)}function h(e,t){return j("black-list",e,t)}function v(e,t){return j("blur-list",e,t)}function f(e,t){if(e==t)return!0;if(d.apps[t])return!1;var r=d.apps[e];return d.apps[t]=r,delete d.apps[e],y.set_string("clip-edge-padding",JSON.stringify(d)),!0}function w(e,t){var r=m[e];r.splice(r.indexOf(t),1),y.set_strv(e,r)}function k(e){w("black-list",e)}function T(e){w("blur-list",e)}function x(e){delete d.apps[e],y.set_string("clip-edge-padding",JSON.stringify(d))}function G(e,t){var r=m[e];return-1==r.indexOf(t)&&(r.push(t),y.set_strv(e,r),!0)}function S(e){return G("black-list",e)}function A(e){return G("blur-list",e)}function B(e){return!d.apps[e]&&(d.apps[e]=b(_()),y.set_string("clip-edge-padding",JSON.stringify(d)),!0)}var H=function(){return(H=Object.assign||function(e){for(var t,r=1,p=arguments.length;r<p;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},R=r(481),P=r(524),O=r(728);function E(){new i.Notification({summary:"same program exists in the list",body:"The Settings will not take effect"}).show()}function F(r){var o=r.title,n=void 0===o?"new_item":o,i=r.ui,a=void 0===i?"":i,l=r.list,c=r.expanded,s=void 0!==c&&c,m=r.paddings,u=r.on_name_changed,g=r.on_del,_=p.Builder.new_from_string(a,-1),j=_.get_object("row"),h=_.get_object("del_btn"),v=_.get_object("pick_bl_btn"),w=_.get_object("entry");j.title=n,w.text=n,m&&I(_,m,(function(e){!function(e,t,r){return!!f(e,t)&&(d.apps[t]=b(r),y.set_string("clip-edge-padding",JSON.stringify(d)),!0)}(j.title,w.text,e)?E():j.title=w.text})),s&&(j.expanded=!0);var k=function(){u&&u(j.title,w.text)?j.title=w.text:E(),w.text=j.title,w.has_focus=!0};return v.connect("clicked",(function(){return t=function(e){log("[pick] "+e),e.length>0&&(w.text=e,w.text!=j.title&&k())},void e.show_all()})),w.connect("activate",(function(e){e.text!=j.title&&0!=e.text.length&&k()})),h.connect("clicked",(function(){g&&g(j.title),null==l||l.remove(j)})),j}function I(e,t,r){var p=e.get_object("adj_padding_left"),o=e.get_object("adj_padding_right"),n=e.get_object("adj_padding_top"),i=e.get_object("adj_padding_bottom");function a(){r({left:p.value,right:o.value,top:n.value,bottom:i.value})}p.value=t.left,o.value=t.right,i.value=t.bottom,n.value=t.top,i.connect("value-changed",a),n.connect("value-changed",a),p.connect("value-changed",a),o.connect("value-changed",a)}var N=new p.Application({application_id:"org.gnome.SandBox.ImageViewerExample",flags:o.ApplicationFlags.FLAGS_NONE});N.connect("startup",(function(e){n.init(),i.init("mutter rounded setting"),function(){var e="pickawindow@lluo.gitlab.com",t=o.Settings.new("org.gnome.shell"),r=t.get_strv("disabled-extensions"),p=t.get_strv("enabled-extensions");-1!=r.indexOf(e)&&r.splice(r.indexOf(e),1),-1==p.indexOf(e)&&p.push(e),t.set_strv("disabled-extensions",r),t.set_strv("enabled-extensions",p)}()})),N.connect("activate",(function(e){var t=function(e){var t=p.Builder.new_from_string(O,-1),r=t.get_object("window"),n=s(e);return function(e){I(e,_(),g),[{obj:"adj_radius",settings:"round-corners-radius"},{obj:"adj_blur_sigmal",settings:"blur-sigmal"},{obj:"adj_blur_brightness",settings:"blur-brightness"},{obj:"adj_blured_window_opacity",settings:"blur-window-opacity"}].forEach((function(t){var r=e.get_object(t.obj);y.bind(t.settings,r,"value",o.SettingsBindFlags.DEFAULT)}))}(t),[{builder:t,list_id:"bl_list",add_btn_id:"add_bl_btn",item_ui:R,init_config:function(){return m["black-list"].map((function(e){return{title:e,expanded:!1}}))},on_name_changed:h,on_del:k,on_add:S},{builder:t,list_id:"app_list",add_btn_id:"add_app_btn",item_ui:P,init_config:function(){return(e=d.apps,Object.keys(e).map((function(t){return{name:t,paddings:u(e[t])}}))).map((function(e){var t=e.name,r=e.paddings;return{title:t,ui:P,paddings:r}}));var e},on_name_changed:f,on_del:x,on_add:B},{builder:t,list_id:"blur_list",add_btn_id:"add_blur_btn",item_ui:R,init_config:function(){return m["blur-list"].map((function(e){return{title:e}}))},on_name_changed:v,on_add:A,on_del:T}].forEach((function(e){return function(e){var t=e.builder,r=e.list_id,p=e.add_btn_id,o=e.on_add,n=e.init_config,i=e.item_ui,a=e.on_del,l=e.on_name_changed,c=t.get_object(r),s=t.get_object(p);n().forEach((function(e){var t=F(H({on_del:a,on_name_changed:l,list:c,ui:i},e));c.insert(t,1)})),s.connect("clicked",(function(){if(o("new_item")){var e=F({title:"new_item",ui:i,list:c,expanded:!0,paddings:"app_list"==r?_():void 0,on_name_changed:l,on_del:a});c.insert(e,1)}}))}(e)})),r.connect("destroy",(function(){n.destroy()})),r}(e);t.set_wmclass("mutter_setting","Mutter Setting"),t.set_application(e),t.show_all()})),N.run(null)})()})();