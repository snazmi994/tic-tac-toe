# VARIABLE=VALUE sh curl-scripts/auth/sign-up.sh
curl "https://tic-tac-toe-api-development.herokuapp.com/games:id \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "game": {
      "cell": {
        "index": "'"${INDEX}"'",
        "value": "'"${VALUE}"'"
      },
      "over": "'"${OVER}"'"
    }
  }'

echo
