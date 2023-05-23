const newman = require('newman');
 
newman.run({
    //collection: require('./collection/dmoney.json'),
    //collection: require('./Collection/dMoney-RoadToSDET.json'),
    collection: 'https://api.postman.com/collections/27409342-958620c8-62b7-4a06-8baf-94000d69d09e?access_key=PMAT-01H128BPQQC7VNR6ADQ64S6C65',
    
    //environment:require('./collection/env.json'),
    collection: require('./Collection/dMoney-RoadToSDET-Environment.json'),
    
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './GeneratedReports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});