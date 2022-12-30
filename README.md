# SECRETS MANAGER
  AWS Secrets Manager helps you manage, retrieve, and rotate database credentials, API keys, and other secrets throughout their lifecycles.


  Developed by: <a href="https://www.github.com/gabrielAlonsoCabral">@GabrielAlonsoCabral</a>  
  <br/>
  
## INSTALLATION

```
# clone this repository
$ git clone https://github.com/GabrielAlonsoCabral/AWS-SECRETS-MANAGER.git

# Feel free to use npm or another. 
$ yarn
```

## CREATE YOUR AWS SECRET 

```
# This script will deploy your env.json as your new aws secret.
$ yarn aws:create:secret
```

## GENERATE YOUR ENVS

```
# This script will create your .env
$ yarn generate:env
```

## UPDATE YOUR SECRET

```
# This script will update your .env and deploy it on AWS.
$ yarn update:env
```
