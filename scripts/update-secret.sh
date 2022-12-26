Name=$1;

aws secretsmanager update-secret \
    --secret-id "$Name" \
    --secret-string file://env.json