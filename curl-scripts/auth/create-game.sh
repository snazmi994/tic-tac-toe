#!/bin/bash

# VARIABLE=VALUE sh curl-scripts/auth/sign-up.sh

curl "https://tic-tac-toe-api-development.herokuapp.com/games" \
--include \
--request POST \
--header "Authorization: Bearer  ${TOKEN}" \
--header "Content-Type: application/json" \
--data "{}"

echo
