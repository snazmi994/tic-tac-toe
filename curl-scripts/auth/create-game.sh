#!/bin/bash

# VARIABLE=VALUE sh curl-scripts/auth/sign-up.sh

curl "https://tic-tac-toe-api-development.herokuapp.com/games" \
--include \
--request POST \
--header "Content-type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
}'

echo
