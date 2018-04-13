(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.pluginBoilerplate = factory());
}(this, (function () { 'use strict';

  function AppName(target) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    console.log(opts);
  }
  var Proto = AppName.prototype;

  Proto.test = function () {
    console.log('tesst');
  };

  return AppName;

})));
