// const AllureReporter = require('jasmine-allure-reporter');
// jasmine.getEnv().addReporter(new AllureReporter({
//     resultsDir: 'allure-results'
// }));
// const allure = require('allure-commandline');
// const generation = allure(['generate', 'allure-results']);
//
// generation.on('exit', function(exitCode) {
//     console.log('Generation is finished with code:', exitCode);
// });
// config.js
module.exports = {
    default: {
        format: "./cucumber_for_home/hellocucumber/features/reporter.js"
    }
}