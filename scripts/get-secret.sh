Name=$1;
aws secretsmanager \
    list-secrets \
    --filter Key="name",Values="$Name"