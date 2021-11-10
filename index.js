const AWS = require('aws-sdk');
let s3 = new AWS.S3({ apiVersion: '2006-03-01' });

exports.handler = async (event, context) => {
  let object = event["Records"][0]["s3"]["object"];
  let images;
  
  const bucket = 'lab17-bucket';
  const params = {
      Bucket: bucket,
      Key: 'images.json',
  }; 

  try {
    images = await s3.getObject(params).promise();
    images = JSON.parse(images.Body.toString('utf-8'));
  } catch(err) { 
    if(err.message !== "The specified key does not exist.") {
      console.log(err);
    } else {
      images = [];
    }
  }

  let data = {
    size: object.size,
    type: object.key.slice(-4),
    name: object.key
  }
  
  console.log("ADDING ", data)
  console.log("BEFORE ADD: ", images);
  images.push(data);
  console.log("AFTER ADD: ", images);

  s3.putObject(putParams, function(err, data) {
    if(err) console.log(err, err.stack); 
    else console.log(data);
  });


  const response = {
      statusCode: 200,
      body: JSON.stringify(`Hello from image lambda`),
  };
  return response;
};
