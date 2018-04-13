export default function AppName(target, opts = {}) {
  console.log(opts)
}

const Proto = AppName.prototype

Proto.test = () => {
  console.log('tesst')
}