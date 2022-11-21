
module.exports = function(config) {
  config.set({

    basePath: '.',

    exclude: [
      './**/node_modules/**/test/**',
    ],

    files: ['**/test/**/*.js'],

    preprocessors: {
      '**/test/**/*.js': ['browserify']
    },

    frameworks: ['browserify', 'mocha'],

    colors: true,

    logLevel: config.LOG_WARN,

    port: 9876,

    singleRun: true,

    captureTimeout: 60000,

    browserNoActivityTimeout: 45000,

    browsers: ['PhantomJS'],

    reporters: ['progress'],
  });
};
