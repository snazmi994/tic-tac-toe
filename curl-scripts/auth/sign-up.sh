# VARIABLE=VALUE sh curl-scripts/auth/sign-up.sh
curl "https://tic-tac-toe-api-development.herokuapp.com/sign-up" \
--include \
--request POST \
--header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
  "credentials": {
    "email": "'"${EMAIL}"'",
    "password": "'"${PASSWORD}"'",
    "password_confirmation": "'"${PASSWORD}"'"
  }
}'

echo
