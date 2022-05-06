var fs = require('fs');
var content = 'Sanjeev and Maneesha are very good friends';
var writeStream = fs.createWriteStream('movies.txt');
writeStream.write(content, 'UTF-8');
writeStream.end();
//Handle finish event
writeStream.on('finish', function () {
  console.log('content written to the file');
});
//Handle error event
writeStream.on('error', function (err) {
  console.log(`ERROR!!!${err.stack}`);
});
console.log('End...');
