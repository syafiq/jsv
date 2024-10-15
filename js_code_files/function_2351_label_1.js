function renderFile (filename: string, data: DataObj, cb?: CallbackFn) {
  data = data || {}
  var Config: FileOptions = getConfig((data as PartialConfig)) as FileOptions
  // TODO: make sure above doesn't error. We do set filename down below

  if (data.settings) {
    // Pull a few things from known locations
    if (data.settings.views) {
      Config.views = data.settings.views
    }
    if (data.settings['view cache']) {
      Config.cache = true
    }
  }

  Config.filename = filename // Make sure filename is right

  return tryHandleCache(Config, data, cb as CallbackFn)
}