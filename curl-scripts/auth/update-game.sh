curl "https://tic-tac-toe-api-development.herokuapp.com/games/${ID}" \
--request PATCH \
  --header "Content-type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
  "game": {
    "cell": {
      "index": 0,
      "value": "x"
    },
    "over": false
  }
}'

echo
echo
