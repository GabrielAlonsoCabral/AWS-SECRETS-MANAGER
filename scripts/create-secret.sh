Name=$1;

aws secretsmanager \
    create-secret \
    --name $Name \
    --secret-string file://env.json