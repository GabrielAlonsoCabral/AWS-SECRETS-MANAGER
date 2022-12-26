
const convertJSONToString =(json) => {
    let resultString="";
    Object.keys(json).map((key,index)=>{
        const value = json[key];    
        resultString+=`${index===0?"":"\n"}${key}=${value}`
    })
    return resultString
}

module.exports={
    convertJSONToString
}