curl "https://tic-tac-toe-api-development.herokuapp.com/start-game" \
--include \
--request POST \
--header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}"
--data '{
   "game": {
      "cells":
      "over":
      "_id":
      "owner":
      "createdAt":
      "updatedAt":
      "_v":
    }
}'

echo
