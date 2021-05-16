require('@babel/register')({ presets: ['@babel/preset-env'] });

module.exports = require('./node_modules/.bin/wdio.conf');