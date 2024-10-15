function Glance(options) {
  EE.call(this)

  options = xtend(defaults, options || {})

  this.port = options.port
  this.hideindex = options.hideindex
  this.indices = options.indices
  this.dir = path.normalize(options.dir)
  this.nodot = options.nodot

  return this
}