# VARIABLE=VALUE sh curl-scripts/auth/sign-up.sh

curl "https://tic-tac-toe-api.herokuapp.com/games/${ID}" \
--include \
--request PATCH \
--header "Authorization: Bearer = ${TOKEN}" \
--header "Content-type: application/json" \
--data {
  "game": {
    "block": {
      "index": 0,
      "value": "x"
    },
    "over": false
  }
}

echo