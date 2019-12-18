exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome'
  },
  specs: ['../specs/calculation.js']

  //onPrepare: function() {
   //require('jasmine-reporters');
   //jasmine.getEnv().addReporter(
     //new jasmine.JUnitXmlReporter('xmlouput', true, true, '../result/')
   //);
 //},

 //jasmineNodeOpts: {
   //showColors: true,
 //}

 //onPrepare: function() {
// Add a screenshot reporter and store screenshots to `/result`:
//jasmine.getEnv().addReporter(new HtmlReporter({
 //       baseDirectory: '../result'
   //  }).getJasmine2Reporter());
  //}
};
