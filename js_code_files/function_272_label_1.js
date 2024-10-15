function errorTitle(errorCode) {
  var mappings = {
    '404': 'File Not Found',
    '403': 'Forbidden',
    '405': 'Method Not Allowed',
    '500': 'Internal Server Error',
  }
  return mappings[errorCode.toString()]
}