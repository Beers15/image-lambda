# Image-lambda

  This application was created for the purpose of employing a lambda function to handle a task upon s3 bucket triggers being activated.

## Description of how to use lambda

  Lambda is triggered automatically when an image is added to the s3 bucket.

## Issues encountered

  Both unwanted recursion and access denied errors occurred frequently throughout development. These were caused as a result of not specifying the right policies for the lambda function, not granting my aws user the right permissions, and not specifying specific suffixes for files that met trigger criteria (hence the recursion). 

------

link to images.json ['image dictionary'](https://lab17-bucket.s3.us-west-1.amazonaws.com/images.json)