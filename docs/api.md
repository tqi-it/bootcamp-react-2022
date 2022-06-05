# REST API books application

## Run the app

yarn start

## Run the tests

yarn test

# REST API

The REST API to the example app is described below.

## Status Codes

| Status Code | Description             |
| :---------- | :---------------------- |
| 200         | `OK`                    |
| 201         | `CREATED`               |
| 400         | `BAD REQUEST`           |
| 404         | `NOT FOUND`             |
| 500         | `INTERNAL SERVER ERROR` |

## Get list of Books

### Request

`GET /books`

### Response

- HTTP/1.1 200 OK
- Content-Type: application/json

`{ "page": 0, "count": 0, "books": [] }`

## Create a new Book

### Request

`POST /books`

- HTTP/1.1 201 OK
- Content-Type: application/json

### Response

`{ "code": "B93A79A6-9ED0-4286-9F46-53A8686FD009", "name": "Book name", "price": 1990, "image": "/tmp/book_store/images/ccee08d1_5e04_4da5_833b_7464ef286637.png", "author": "Author name" }`

### Response Error

- HTTP/1.1 400
- Content-Type: application/json

`{ "errors": [ { "parameter": "name", "message": "must have value" }, { "parameter": "price", "message": "must have value" } ] }`

- HTTP/1.1 404
- Content-Type: application/json

`{ "message": "Author not found" }`
