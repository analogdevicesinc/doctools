cs-package-upload()
{
  package_file=$(curl -fL \
    -T $4 \
    -H "X-Api-Key: $1" \
    -H "Content-Sha256: $(shasum -a256 $4 | cut -f1 -d' ')" \
    https://upload.cloudsmith.io/$2/$3/$(basename $4) | jq -r .identifier)
  echo "$5=$package_file" >> "$GITHUB_ENV"
  echo $package_file
}

cs-package-store-python()
{
  curl -sfL \
    -X POST \
    -H "Accept: application/json" \
    -H "Content-Type: application/json" \
    -H "X-Api-Key: $1" \
    -d "{\"package_file\":\"$4 \", \
         \"republish\":\"true\", \
         \"tags\": \"$5\"}" \
    https://api.cloudsmith.com/v1/packages/$2/$3/upload/python/
}

cs-package-store-docker()
{
  curl -sfL \
    -X POST \
    -H "Accept: application/json" \
    -H "Content-Type: application/json" \
    -H "X-Api-Key: $1" \
    -d "{\"package_file\":\"$4\", \
         \"republish\":\"true\", \
         \"tags\": \"$5\"}" \
    https://api.cloudsmith.com/v1/packages/$2/$3/upload/docker/
}
