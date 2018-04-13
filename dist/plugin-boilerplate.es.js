function AppName(target) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  console.log(opts);
}
var Proto = AppName.prototype;

Proto.test = function () {
  console.log('tesst');
};

export default AppName;
