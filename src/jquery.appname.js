import AppName from './appname'

if (typeof window !== 'undefined') {
  const plugin = window.$ || window.jQuery || window.Zepto
  if (plugin) {
    plugin.fn.AppName = function AppNamePlugin(opts) {
      AppName(this, opts)
      return this
    }
  }
}