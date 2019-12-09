(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["hivue"] = factory();
	else
		root["hivue"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f80e5bf8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/container/src/HContainer.vue?vue&type=template&id=527c0bf9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"h-container",class:{'is-vertical': _vm.isVertical}},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/container/src/HContainer.vue?vue&type=template&id=527c0bf9&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/container/src/HContainer.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var HContainervue_type_script_lang_js_ = ({
  name: 'HContainer',
  props: {
    direction: String
  },
  computed: {
    isVertical () {
      if (this.direction === 'vertical') {
        return true
      } else if (this.direction === 'horizontal') {
        return false
      }
      if (this.$slots && this.$slots.default) {
        return this.$slots.default.some(vnode => {
          const tag = vnode.componentOptions && vnode.componentOptions.tag
          return tag === 'h-header' || tag === 'h-footer'
        })
      }
      return false
    }
  }
});

// CONCATENATED MODULE: ./packages/components/container/src/HContainer.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_HContainervue_type_script_lang_js_ = (HContainervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/components/container/src/HContainer.vue





/* normalize component */

var component = normalizeComponent(
  src_HContainervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var HContainer = (component.exports);
// CONCATENATED MODULE: ./packages/components/container/index.js


HContainer.install = function(Vue) {
  Vue.component(HContainer.name, HContainer);
}

/* harmony default export */ var container = (HContainer);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f80e5bf8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/header/src/HHeader.vue?vue&type=template&id=1c1f10aa&
var HHeadervue_type_template_id_1c1f10aa_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"h-header",style:({height: (_vm.height + "px")})},[_vm._t("default")],2)}
var HHeadervue_type_template_id_1c1f10aa_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/header/src/HHeader.vue?vue&type=template&id=1c1f10aa&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/header/src/HHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var HHeadervue_type_script_lang_js_ = ({
  name: 'HHeader',
  props: {
    height: {
      type: Number,
      default: 60
    }
  }
});

// CONCATENATED MODULE: ./packages/components/header/src/HHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_HHeadervue_type_script_lang_js_ = (HHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/components/header/src/HHeader.vue





/* normalize component */

var HHeader_component = normalizeComponent(
  src_HHeadervue_type_script_lang_js_,
  HHeadervue_type_template_id_1c1f10aa_render,
  HHeadervue_type_template_id_1c1f10aa_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var HHeader = (HHeader_component.exports);
// CONCATENATED MODULE: ./packages/components/header/index.js


HHeader.install = function(Vue) {
  Vue.component(HHeader.name, HHeader);
}

/* harmony default export */ var header = (HHeader);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f80e5bf8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/main/src/HMain.vue?vue&type=template&id=6c41761c&
var HMainvue_type_template_id_6c41761c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',{staticClass:"h-main",style:({height: (_vm.height + "px")})},[_vm._t("default")],2)}
var HMainvue_type_template_id_6c41761c_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/main/src/HMain.vue?vue&type=template&id=6c41761c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/main/src/HMain.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var HMainvue_type_script_lang_js_ = ({
  name: 'HMain',
  props: {
    height: {
      type: Number,
      default: 400
    }
  }
});

// CONCATENATED MODULE: ./packages/components/main/src/HMain.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_HMainvue_type_script_lang_js_ = (HMainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/components/main/src/HMain.vue





/* normalize component */

var HMain_component = normalizeComponent(
  src_HMainvue_type_script_lang_js_,
  HMainvue_type_template_id_6c41761c_render,
  HMainvue_type_template_id_6c41761c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var HMain = (HMain_component.exports);
// CONCATENATED MODULE: ./packages/components/main/index.js


HMain.install = function(Vue) {
  Vue.component(HMain.name, HMain);
}

/* harmony default export */ var main = (HMain);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f80e5bf8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/aside/src/HAside.vue?vue&type=template&id=18d75a3f&
var HAsidevue_type_template_id_18d75a3f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('aside',{staticClass:"h-aside",style:({width: (_vm.width + "px")})},[_vm._t("default")],2)}
var HAsidevue_type_template_id_18d75a3f_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/aside/src/HAside.vue?vue&type=template&id=18d75a3f&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/aside/src/HAside.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var HAsidevue_type_script_lang_js_ = ({
  name: 'HAside',
  props: {
    width: {
      type: Number,
      default: 300
    }
  }
});

// CONCATENATED MODULE: ./packages/components/aside/src/HAside.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_HAsidevue_type_script_lang_js_ = (HAsidevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/components/aside/src/HAside.vue





/* normalize component */

var HAside_component = normalizeComponent(
  src_HAsidevue_type_script_lang_js_,
  HAsidevue_type_template_id_18d75a3f_render,
  HAsidevue_type_template_id_18d75a3f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var HAside = (HAside_component.exports);
// CONCATENATED MODULE: ./packages/components/aside/index.js


HAside.install = function(Vue) {
  Vue.component(HAside.name, HAside);
}

/* harmony default export */ var aside = (HAside);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f80e5bf8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/footer/src/HFooter.vue?vue&type=template&id=3a777a5c&
var HFootervue_type_template_id_3a777a5c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"h-footer",style:({height: (_vm.height + "px")})},[_vm._t("default")],2)}
var HFootervue_type_template_id_3a777a5c_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/footer/src/HFooter.vue?vue&type=template&id=3a777a5c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/footer/src/HFooter.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var HFootervue_type_script_lang_js_ = ({
  name: 'HFooter',
  props: {
    height: {
      type: Number,
      default: 60
    }
  }
});

// CONCATENATED MODULE: ./packages/components/footer/src/HFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_HFootervue_type_script_lang_js_ = (HFootervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/components/footer/src/HFooter.vue





/* normalize component */

var HFooter_component = normalizeComponent(
  src_HFootervue_type_script_lang_js_,
  HFootervue_type_template_id_3a777a5c_render,
  HFootervue_type_template_id_3a777a5c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var HFooter = (HFooter_component.exports);
// CONCATENATED MODULE: ./packages/components/footer/index.js


HFooter.install = function(Vue) {
  Vue.component(HFooter.name, HFooter);
}

/* harmony default export */ var footer = (HFooter);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f80e5bf8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/row/src/HRow.vue?vue&type=template&id=7725935a&
var HRowvue_type_template_id_7725935a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['h-row', _vm.type ? 'h-row--'+ _vm.type : '',  
            _vm.justify? 'is-justify-' + _vm.justify : '',
            _vm.align? 'is-align-' + _vm.align : '']},[_vm._t("default")],2)}
var HRowvue_type_template_id_7725935a_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/row/src/HRow.vue?vue&type=template&id=7725935a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/row/src/HRow.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var HRowvue_type_script_lang_js_ = ({
  name: 'HRow',
  props: {
    gutter: { // 间隔
      type: Number,
      requird: false,
      default: 0
    },
    type: { // 布局方式，可选flex
      type: String,
      required: false
    },
    justify: { // flex布局下的水平对齐方式，start/end/center/space-around/space-between/space-evenly
      type: String,
      requird: false
    },
    align: { // flex布局下的垂直对齐方式，top/middle/bottom
      type: String,
      required: false
    }
  }
});

// CONCATENATED MODULE: ./packages/components/row/src/HRow.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_HRowvue_type_script_lang_js_ = (HRowvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/components/row/src/HRow.vue





/* normalize component */

var HRow_component = normalizeComponent(
  src_HRowvue_type_script_lang_js_,
  HRowvue_type_template_id_7725935a_render,
  HRowvue_type_template_id_7725935a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var HRow = (HRow_component.exports);
// CONCATENATED MODULE: ./packages/components/row/index.js
/*
 * @File: HRow.vue
 * @Description: 注册HRow全局组件
 * @Author: Dadaiwei
 * @Date: 2019-02-01 18:23:37
 * @LastEditor: Dadaiwei
 * @LastEditTime: 2019-05-18 10:31:09
 */



HRow.install = function(Vue) {
  Vue.component(HRow.name, HRow);
}

/* harmony default export */ var row = (HRow);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f80e5bf8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/col/src/HCol.vue?vue&type=template&id=37415d24&
var HColvue_type_template_id_37415d24_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['h-col', 'h-col-' + _vm.span,
              _vm.xs > 0 ? 'h-col-xs-' + _vm.xs : '',
              _vm.sm > 0 ? 'h-col-sm-' + _vm.sm : '',
              _vm.md > 0 ? 'h-col-md-' + _vm.md : '',
              _vm.lg > 0 ? 'h-col-lg-' + _vm.lg : '',
              _vm.xl > 0 ? 'h-col-xl-' + _vm.xl : '',
              _vm.offset > 0 ? 'h-col-offset-' + _vm.offset : '',
              _vm.push > 0 ? 'h-col-push-' + _vm.push : '', 
              _vm.pull > 0 ? 'h-col-pull-' + _vm.pull : ''],style:(_vm.gutterStyle)},[_vm._t("default")],2)}
var HColvue_type_template_id_37415d24_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/col/src/HCol.vue?vue&type=template&id=37415d24&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/col/src/HCol.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var HColvue_type_script_lang_js_ = ({
  name: 'HCol',
  props: {
    span: { // 栅格占据的列数
      type: Number,
      required: false,
      default: 24
    },
    offset: { // 栅格左侧的间隔
      type: Number,
      required: false,
      default: 0
    },
    push: { // 栅格向右移动格数
      type: Number,
      required: false,
      default: 0
    },
    pull: { // 栅格向左移动格数
      type: Number,
      required: false,
      default: 0
    },
    xs: { // < 768px下列宽大小
      type: Number,
      required: false,
      default: 0
    },
    sm: { // >= 768px && < 992px下列宽大小
      type: Number,
      required: false,
      default: 0
    },
    md: { // >= 992px && < 1200px下列宽大小
      type: Number,
      required: false,
      default: 0
    },
    lg: { // >= 1200px下列宽大小
      type: Number,
      required: false,
      default: 0
    },
    xl: { // >= 1920px下列宽大小
      type: Number,
      required: false,
      default: 0
    }
  },
  computed: {
    gutter () {
      let parent = this.$parent;
      while (parent && parent.$options.name !== 'HRow') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    },
    gutterStyle () {
      return {
        paddingLeft: `${this.gutter / 2}px`,
        paddingRight: `${this.gutter / 2}px`
      };
    }
  }
});

// CONCATENATED MODULE: ./packages/components/col/src/HCol.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_HColvue_type_script_lang_js_ = (HColvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/components/col/src/HCol.vue





/* normalize component */

var HCol_component = normalizeComponent(
  src_HColvue_type_script_lang_js_,
  HColvue_type_template_id_37415d24_render,
  HColvue_type_template_id_37415d24_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var HCol = (HCol_component.exports);
// CONCATENATED MODULE: ./packages/components/col/index.js
/*
 * @File: HCol.vue
 * @Description: 注册HCol全局组件
 * @Author: Dadaiwei
 * @Date: 2019-02-01 18:23:37
 * @LastEditor: Dadaiwei
 * @LastEditTime: 2019-05-18 10:23:49
 */



HCol.install = function(Vue) {
  Vue.component(HCol.name, HCol);
}

/* harmony default export */ var col = (HCol);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f80e5bf8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/button/src/HButton.vue?vue&type=template&id=875ac41e&
var HButtonvue_type_template_id_875ac41e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"h-button",class:[
            _vm.type ? 'h-button-' + _vm.type : '',
            _vm.size ? 'h-button-' + _vm.size : '',
            _vm.shape? 'h-button-' + _vm.shape : '',
            {
              'loading': _vm.loading,
              'active': _vm.active
            }],attrs:{"disabled":_vm.disabled && _vm.loading,"autofocus":_vm.autofocus,"type":_vm.nativeType},on:{"click":_vm.handleClick}},[(_vm.loading && _vm.type !== 'text')?_c('i',{staticClass:"iconfont icon-loading h-button-loading"}):_vm._e(),(_vm.icon && !_vm.loading)?_c('i',{staticClass:"h-button-icon",class:['iconfont', 'icon-' + _vm.icon]}):_vm._e(),(_vm.$slots.default)?_c('span',[_vm._t("default")],2):_vm._e()])}
var HButtonvue_type_template_id_875ac41e_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/button/src/HButton.vue?vue&type=template&id=875ac41e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/button/src/HButton.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var HButtonvue_type_script_lang_js_ = ({
  name: "HButton",
  props: {
    type: {
      // 类型，default/primary/info/success/warning/danger/text
      type: String,
      required: false,
      default: "default"
    },
    size: {
      // 尺寸，mini/small/large
      type: String,
      required: false
    },
    disabled: {
      // 禁用
      type: Boolean,
      required: false,
      default: false
    },
    loading: {
      // 加载
      type: Boolean,
      required: false,
      default: false
    },
    active: {
      // 激活状态
      type: Boolean,
      required: false,
      default: false
    },
    shape: {
      // 按钮形状，circle/round
      type: String,
      required: false,
      default: ""
    },
    autofocus: {
      // 自动聚焦
      type: Boolean,
      required: false,
      default: false
    },
    icon: {
      // 按钮图标
      type: String,
      required: false
    },
    nativeType: {
      // 原生类型，button/submit/reset
      type: String,
      required: false,
      default: "button"
    }
  },
  data() {
    return {};
  },
  methods: {
    /**
     * @method: handleClick
     * @description: 向父组件emit click事件并传回event对象
     * @param {Object} ev 事件对象
     * @return: {undefined}
     * @author: Dadaiwei
     */
    handleClick(ev) {
      this.$emit("click", ev);
    }
  }
});

// CONCATENATED MODULE: ./packages/components/button/src/HButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_HButtonvue_type_script_lang_js_ = (HButtonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/components/button/src/HButton.vue





/* normalize component */

var HButton_component = normalizeComponent(
  src_HButtonvue_type_script_lang_js_,
  HButtonvue_type_template_id_875ac41e_render,
  HButtonvue_type_template_id_875ac41e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var HButton = (HButton_component.exports);
// CONCATENATED MODULE: ./packages/components/button/index.js
/*
 * @File: index.js
 * @Description: 注册HButton全局组件
 * @Author: Dadaiwei
 * @Date: 2018-12-10 19:30:05
 * @LastEditor: Dadaiwei
 * @LastEditTime: 2019-05-18 10:23:27
 */


HButton.install = function(Vue) {
    Vue.component(HButton.name, HButton);
}

/* harmony default export */ var components_button = (HButton);


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f80e5bf8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/progress/src/HProgress.vue?vue&type=template&id=41a5a624&
var HProgressvue_type_template_id_41a5a624_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("progress"),_c('div',{staticClass:"progress-bar"},[_c('div',{staticClass:"progress-outer-bar",style:(_vm.outerStyle)},[_c('div',{staticClass:"progress-inner-bar",class:['progress-inner-bar-' + this.status,
                    {'progress-inner-bar-striped': _vm.striped,
                     'active': this.striped && this.active}],style:(_vm.innerStyle)}),(_vm.showText && _vm.textInside)?_c('div',{staticClass:"inside-text",style:({'line-height': this.height + 'px'})},[_vm._v(_vm._s(_vm.percent))]):_vm._e()]),(_vm.showText && !_vm.textInside)?_c('div',{staticClass:"outside-text",style:({'line-height': this.height + 'px'})},[_vm._v(_vm._s(_vm.percent))]):_vm._e()])],2)}
var HProgressvue_type_template_id_41a5a624_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/progress/src/HProgress.vue?vue&type=template&id=41a5a624&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/progress/src/HProgress.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var HProgressvue_type_script_lang_js_ = ({
  name: "HProgress",
  props: {
    showText: { // 是否显示进度条显示文字
      type: Boolean,
      required: false,
      default: true
    },
    textInside: { // 进度条显示文字是否内置在进度条内
      type: Boolean,
      required: false,
      default: false
    },
    striped: { // 是否支持条纹效果
      type: Boolean,
      required: false,
      default: false
    },
    active: { // 是否支持动画效果
      type: Boolean,
      required: false,
      default: false
    },
    status: { // 进度条状态，normal/success/warning/danger
      type: String,
      required: false,
      default: "normal"
    },
    width: { // 进度条宽度
      type: Number,
      required: false,
      default: 300
    },
    height: { // 进度条高度
      types: Number,
      requried: false,
      default: 15
    },
    ratio: { // 占比
      type: Number,
      required: false,
      default: 0
    }
  },
  computed: {
    outerStyle () { // 外面进度条计算样式
      const style = {
        width: Number.isInteger(this.width) ? `${this.width}px` : this.width,
        height: Number.isInteger(this.height) ? `${this.height}px` : this.height
      };
      return style;
    },
    innerStyle () { // 内部进度条计算样式
      const style = {
        height: `${this.height}px`
      };
      let width = 0;
      if (this.ratio && this.ratio >= 0 && this.ratio <= 1) {
        width = this.width * this.ratio;
      }
      if (this.ratio > 1) {
        width = this.width;
      }
      style.width = Number.isInteger(width) ? `${width}px` : width;
      return style;
    },
    percent () { // 占比百分比，转换为%形势
      return `${this.ratio * 100}%`;
    }
  }
});

// CONCATENATED MODULE: ./packages/components/progress/src/HProgress.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_HProgressvue_type_script_lang_js_ = (HProgressvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/components/progress/src/HProgress.vue





/* normalize component */

var HProgress_component = normalizeComponent(
  src_HProgressvue_type_script_lang_js_,
  HProgressvue_type_template_id_41a5a624_render,
  HProgressvue_type_template_id_41a5a624_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var HProgress = (HProgress_component.exports);
// CONCATENATED MODULE: ./packages/components/progress/index.js
/*
 * @File: index.js
 * @Description: 注册HProgress全局组件
 * @Author: Dadaiwei
 * @Date: 2018-12-03 18:55:28
 * @LastEditor: Dadaiwei
 * @LastEditTime: 2019-05-18 10:24:11
 */


HProgress.install = function(Vue) {
  Vue.component(HProgress.name, HProgress);
}

/* harmony default export */ var progress = (HProgress);

// CONCATENATED MODULE: ./packages/index.js










const components = [
  container,
  header,
  main,
  aside,
  footer,
  row,
  col,
  components_button,
  progress
];

const install = function(Vue) {
  if(install.installed) {
    return;
  }
  install.installed = true;
  components.map(component => Vue.use(component));
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}



/* harmony default export */ var packages_0 = ({
  version: '0.0.8',
  install,
  HCol: col,
  HRow: row,
  HButton: components_button,
  HProgress: progress
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport install */__webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* concated harmony reexport HCol */__webpack_require__.d(__webpack_exports__, "HCol", function() { return col; });
/* concated harmony reexport HRow */__webpack_require__.d(__webpack_exports__, "HRow", function() { return row; });
/* concated harmony reexport HButton */__webpack_require__.d(__webpack_exports__, "HButton", function() { return components_button; });
/* concated harmony reexport HProgress */__webpack_require__.d(__webpack_exports__, "HProgress", function() { return progress; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=hivue.umd.js.map