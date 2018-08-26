AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:718e4406-2aee-4713-9968-9cec0e4a36bb',
});
// var comprehend = new AWS.Comprehend();
// function comprehend(){
//   raw_text = $("#raw_text").value;
//   var params = {
//       Text: raw_text,
//   };
//   console.log("hi");
//   comprehend.batchDetectDominantLanguage(params, function (err, data) {
//     if (err) console.log(err, err.stack); // an error occurred
//     else     console.log(data);           // successful response
//   });
// }
