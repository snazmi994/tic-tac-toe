#!/bin/bash

curl "https://tic-tac-toe-api-development.herokuapp.com/games" \
--include \
--request POST \
--header "Authorization: ${TOKEN}" \
--header "Authorization: Bearer ${TOKEN}" \
--data "{}"
echo
