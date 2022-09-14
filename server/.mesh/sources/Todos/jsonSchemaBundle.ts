// @ts-nocheck
export default {
  "name": "Todos",
  "baseUrl": "http://localhost:4001/",
  "operations": [
    {
      "method": "GET",
      "path": "/todos/",
      "type": "query",
      "field": "TodoAPI_get_todo_list",
      "responseByStatusCode": {
        "200": {
          "responseSchema": {
            "type": "array",
            "items": {
              "type": "object",
              "title": "Todo",
              "properties": {
                "id": {
                  "type": "string",
                  "format": "uuid"
                },
                "title": {
                  "type": "string"
                },
                "description": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "title",
                "description"
              ]
            },
            "title": "TodoAPI_get_todo_list_200_response"
          }
        }
      }
    },
    {
      "method": "POST",
      "path": "/todos/",
      "type": "mutation",
      "field": "TodoAPI_create_todo",
      "responseByStatusCode": {},
      "argTypeMap": {
        "data": {
          "required": [
            "id",
            "title"
          ],
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "format": "uuid"
            },
            "title": {
              "type": "string"
            },
            "description": {
              "type": "string"
            }
          },
          "nullable": false,
          "title": "mutationInput_TodoAPI_create_todo_input"
        }
      },
      "requestSchema": {
        "required": [
          "id",
          "title"
        ],
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "format": "uuid"
          },
          "title": {
            "type": "string"
          },
          "description": {
            "type": "string"
          }
        },
        "nullable": false,
        "title": "mutationInput_TodoAPI_create_todo_input"
      }
    },
    {
      "method": "POST",
      "path": "/todos/{args.todo_id}/close/",
      "type": "mutation",
      "field": "TodoAPI_close_todo",
      "responseByStatusCode": {},
      "argTypeMap": {
        "todo_id": {
          "name": "todo_id",
          "in": "path",
          "description": "",
          "type": "string",
          "format": "uuid",
          "nullable": false
        }
      }
    }
  ],
  "operationHeaders": {},
  "referencedSchema": {
    "$ref": "#/definitions/_schema",
    "definitions": {
      "_schema": {
        "type": "object",
        "title": "_schema",
        "properties": {
          "query": {
            "$ref": "#/definitions/Query"
          },
          "queryInput": {
            "$ref": "#/definitions/QueryInput"
          },
          "mutation": {
            "$ref": "#/definitions/Mutation"
          },
          "mutationInput": {
            "$ref": "#/definitions/MutationInput"
          }
        },
        "required": [
          "query"
        ]
      },
      "Query": {
        "type": "object",
        "title": "Query",
        "properties": {
          "TodoAPI_get_todo_list": {
            "$ref": "#/definitions/TodoAPI_get_todo_list_200_response"
          }
        },
        "readOnly": true
      },
      "TodoAPI_get_todo_list_200_response": {
        "type": "array",
        "items": {
          "type": "object",
          "title": "Todo",
          "properties": {
            "id": {
              "type": "string",
              "format": "uuid"
            },
            "title": {
              "type": "string"
            },
            "description": {
              "type": "string"
            }
          },
          "required": [
            "id",
            "title",
            "description"
          ]
        },
        "title": "TodoAPI_get_todo_list_200_response"
      },
      "Todo": {
        "type": "object",
        "title": "Todo",
        "properties": {
          "id": {
            "type": "string",
            "format": "uuid"
          },
          "title": {
            "type": "string"
          },
          "description": {
            "type": "string"
          }
        },
        "required": [
          "id",
          "title",
          "description"
        ]
      },
      "QueryInput": {
        "type": "object",
        "title": "QueryInput",
        "writeOnly": true,
        "additionalProperties": true
      },
      "Mutation": {
        "type": "object",
        "title": "Mutation",
        "properties": {
          "TodoAPI_create_todo": {
            "$ref": "#/definitions/Any"
          },
          "TodoAPI_close_todo": {
            "$ref": "#/definitions/Any"
          }
        },
        "readOnly": true
      },
      "Any": {
        "title": "Any",
        "oneOf": [
          {
            "type": "string"
          },
          {
            "type": "integer"
          },
          {
            "type": "boolean"
          },
          {
            "type": "number"
          },
          {
            "$ref": "#/definitions/mutation_TodoAPI_create_todo_oneOf_4"
          }
        ]
      },
      "mutation_TodoAPI_create_todo_oneOf_4": {
        "type": "object",
        "additionalProperties": true,
        "title": "mutation_TodoAPI_create_todo_oneOf_4"
      },
      "MutationInput": {
        "type": "object",
        "title": "MutationInput",
        "properties": {
          "TodoAPI_create_todo": {
            "$ref": "#/definitions/mutationInput_TodoAPI_create_todo"
          },
          "TodoAPI_close_todo": {
            "$ref": "#/definitions/mutationInput_TodoAPI_close_todo"
          }
        },
        "writeOnly": true
      },
      "mutationInput_TodoAPI_create_todo": {
        "title": "mutationInput_TodoAPI_create_todo",
        "type": "object",
        "properties": {
          "input": {
            "$ref": "#/definitions/mutationInput_TodoAPI_create_todo_input"
          }
        }
      },
      "mutationInput_TodoAPI_create_todo_input": {
        "required": [
          "id",
          "title"
        ],
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "format": "uuid"
          },
          "title": {
            "type": "string"
          },
          "description": {
            "type": "string"
          }
        },
        "nullable": false,
        "title": "mutationInput_TodoAPI_create_todo_input"
      },
      "mutationInput_TodoAPI_close_todo": {
        "title": "mutationInput_TodoAPI_close_todo",
        "type": "object",
        "properties": {
          "todo_id": {
            "name": "todo_id",
            "in": "path",
            "description": "",
            "type": "string",
            "format": "uuid",
            "nullable": false
          }
        }
      }
    }
  }
}