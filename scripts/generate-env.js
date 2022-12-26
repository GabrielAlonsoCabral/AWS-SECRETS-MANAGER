const { GetSecretValueCommand, SecretsManagerClient } = require("@aws-sdk/client-secrets-manager")
const {convertJSONToString} = require('../utils');
const {writeFile} = require('fs').promises;

const SECRET_NAME = process.argv.slice(2)[0]

 const getSecretString =async ()=>{
  
  const client = new SecretsManagerClient({
     region: "sa-east-1",
   });

  
  const responseSecretsManager = await client.send(
     new GetSecretValueCommand({
       SecretId: SECRET_NAME,
       VersionStage: "AWSCURRENT"
     })
  )

  return responseSecretsManager.SecretString
}
 
const writeEnv=async ()=>{
  const secretString = await getSecretString()  
  const resultString = convertJSONToString(JSON.parse(secretString))

  await writeFile('.env', resultString);
  await writeFile('env.json', secretString,{encoding:'utf-8'});
}


writeEnv()