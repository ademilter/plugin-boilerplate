(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  function AppName(target) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    console.log(opts);
  }
  var Proto = AppName.prototype;

  Proto.test = function () {
    console.log('tesst');
  };

  if (typeof window !== 'undefined') {
    var plugin = window.$ || window.jQuery || window.Zepto;

    if (plugin) {
      plugin.fn.AppName = function AppNamePlugin(opts) {
        AppName(this, opts);
        return this;
      };
    }
  }

})));
