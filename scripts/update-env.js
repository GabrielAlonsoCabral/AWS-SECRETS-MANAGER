const {sep} = require("path")
const {readFile, writeFile} = require('fs').promises;
const execSync = require('child_process').execSync;
const {convertJSONToString} = require("../utils")

const SECRET_NAME = process.argv.slice(2)[0]

const updateEnv = async () =>{
    const envJSON = await readFile('env.json',{encoding:'utf8'})
    execSync(`bash scripts${sep}update-secret.sh ${SECRET_NAME}`)
    const resultString = convertJSONToString(JSON.parse(envJSON))
    
    await writeFile('.env', resultString);        
}
updateEnv()

 