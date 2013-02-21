/*
 * This file will be concatenated with all other source files, so config
 * becomes a global as far as all other files are concerned. Then we wrap
 * everything in an IIFE, so it doens't become a global in the browser.
 */

var config, exports, namespace;

config = {
  namespace: 'WidgetGlobal',
  baseUrl: '//localhost:9001/dist/release'
};

if(typeof window !== 'undefined') {
  exports = window;
  if(!exports[config.namespace]) exports[config.namespace] = {};
  namespace = exports[config.namespace];
}

// This is so we can require() it in grunt.js
if(typeof module !== 'undefined') module.exports = config;
