// @ts-nocheck
export default {
  "name": "Comments",
  "baseUrl": "http://localhost:4002/",
  "operations": [
    {
      "method": "GET",
      "path": "/comments/",
      "type": "query",
      "field": "CommentAPI_get_comments",
      "responseByStatusCode": {
        "200": {
          "responseSchema": {
            "type": "array",
            "items": {
              "type": "object",
              "title": "Comment",
              "properties": {
                "id": {
                  "type": "string",
                  "format": "uuid"
                },
                "topic": {
                  "type": "string"
                },
                "author": {
                  "type": "string"
                },
                "text": {
                  "type": "string"
                },
                "timestamp": {
                  "type": "string",
                  "format": "date-time"
                }
              },
              "required": [
                "id",
                "topic",
                "author",
                "text",
                "timestamp"
              ]
            },
            "title": "CommentAPI_get_comments_200_response"
          }
        }
      },
      "argTypeMap": {
        "topic": {
          "name": "topic",
          "in": "query",
          "description": "",
          "required": false,
          "type": "string",
          "x-nullable": true
        }
      },
      "queryParamArgMap": {
        "topic": "topic"
      }
    },
    {
      "method": "POST",
      "path": "/comments/",
      "type": "mutation",
      "field": "CommentAPI_create_comment",
      "responseByStatusCode": {},
      "argTypeMap": {
        "data": {
          "required": [
            "id",
            "topic",
            "author",
            "text",
            "timestamp"
          ],
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "format": "uuid"
            },
            "topic": {
              "type": "string"
            },
            "author": {
              "type": "string"
            },
            "text": {
              "type": "string"
            },
            "timestamp": {
              "type": "string",
              "format": "date-time"
            }
          },
          "nullable": false,
          "title": "mutationInput_CommentAPI_create_comment_input"
        }
      },
      "requestSchema": {
        "required": [
          "id",
          "topic",
          "author",
          "text",
          "timestamp"
        ],
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "format": "uuid"
          },
          "topic": {
            "type": "string"
          },
          "author": {
            "type": "string"
          },
          "text": {
            "type": "string"
          },
          "timestamp": {
            "type": "string",
            "format": "date-time"
          }
        },
        "nullable": false,
        "title": "mutationInput_CommentAPI_create_comment_input"
      }
    },
    {
      "method": "DELETE",
      "path": "/comments/{args.comment_id}/",
      "type": "mutation",
      "field": "CommentAPI_delete_comment",
      "responseByStatusCode": {
        "204": {
          "responseSchema": {
            "type": "null",
            "description": "",
            "title": "CommentAPI_delete_comment_204_response"
          }
        }
      },
      "argTypeMap": {
        "comment_id": {
          "name": "comment_id",
          "in": "path",
          "description": "",
          "type": "string",
          "format": "uuid",
          "nullable": false
        }
      }
    },
    {
      "method": "GET",
      "path": "/topic-statistics/",
      "type": "query",
      "field": "CommentAPI_get_topic_statistics",
      "responseByStatusCode": {
        "200": {
          "responseSchema": {
            "type": "array",
            "items": {
              "type": "object",
              "title": "TopicStatistics",
              "properties": {
                "topic": {
                  "type": "string"
                },
                "comment_count": {
                  "type": "integer"
                }
              },
              "required": [
                "topic",
                "comment_count"
              ]
            },
            "title": "CommentAPI_get_topic_statistics_200_response"
          }
        }
      },
      "argTypeMap": {
        "topics": {
          "name": "topics",
          "in": "query",
          "description": "",
          "type": "array",
          "items": {
            "type": "string"
          },
          "nullable": false
        }
      },
      "queryParamArgMap": {
        "topics": "topics"
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
          "CommentAPI_get_comments": {
            "$ref": "#/definitions/CommentAPI_get_comments_200_response"
          },
          "CommentAPI_get_topic_statistics": {
            "$ref": "#/definitions/CommentAPI_get_topic_statistics_200_response"
          }
        },
        "readOnly": true
      },
      "CommentAPI_get_comments_200_response": {
        "type": "array",
        "items": {
          "type": "object",
          "title": "Comment",
          "properties": {
            "id": {
              "type": "string",
              "format": "uuid"
            },
            "topic": {
              "type": "string"
            },
            "author": {
              "type": "string"
            },
            "text": {
              "type": "string"
            },
            "timestamp": {
              "type": "string",
              "format": "date-time"
            }
          },
          "required": [
            "id",
            "topic",
            "author",
            "text",
            "timestamp"
          ]
        },
        "title": "CommentAPI_get_comments_200_response"
      },
      "Comment": {
        "type": "object",
        "title": "Comment",
        "properties": {
          "id": {
            "type": "string",
            "format": "uuid"
          },
          "topic": {
            "type": "string"
          },
          "author": {
            "type": "string"
          },
          "text": {
            "type": "string"
          },
          "timestamp": {
            "type": "string",
            "format": "date-time"
          }
        },
        "required": [
          "id",
          "topic",
          "author",
          "text",
          "timestamp"
        ]
      },
      "CommentAPI_get_topic_statistics_200_response": {
        "type": "array",
        "items": {
          "type": "object",
          "title": "TopicStatistics",
          "properties": {
            "topic": {
              "type": "string"
            },
            "comment_count": {
              "type": "integer"
            }
          },
          "required": [
            "topic",
            "comment_count"
          ]
        },
        "title": "CommentAPI_get_topic_statistics_200_response"
      },
      "TopicStatistics": {
        "type": "object",
        "title": "TopicStatistics",
        "properties": {
          "topic": {
            "type": "string"
          },
          "comment_count": {
            "type": "integer"
          }
        },
        "required": [
          "topic",
          "comment_count"
        ]
      },
      "QueryInput": {
        "type": "object",
        "title": "QueryInput",
        "properties": {
          "CommentAPI_get_comments": {
            "$ref": "#/definitions/queryInput_CommentAPI_get_comments"
          },
          "CommentAPI_get_topic_statistics": {
            "$ref": "#/definitions/queryInput_CommentAPI_get_topic_statistics"
          }
        },
        "writeOnly": true
      },
      "queryInput_CommentAPI_get_comments": {
        "title": "queryInput_CommentAPI_get_comments",
        "type": "object",
        "properties": {
          "topic": {
            "name": "topic",
            "in": "query",
            "description": "",
            "required": false,
            "type": "string",
            "x-nullable": true
          }
        }
      },
      "queryInput_CommentAPI_get_topic_statistics": {
        "title": "queryInput_CommentAPI_get_topic_statistics",
        "type": "object",
        "properties": {
          "topics": {
            "name": "topics",
            "in": "query",
            "description": "",
            "type": "array",
            "items": {
              "type": "string"
            },
            "nullable": false
          }
        }
      },
      "Mutation": {
        "type": "object",
        "title": "Mutation",
        "properties": {
          "CommentAPI_create_comment": {
            "$ref": "#/definitions/Any"
          },
          "CommentAPI_delete_comment": {
            "$ref": "#/definitions/CommentAPI_delete_comment_204_response"
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
      "CommentAPI_delete_comment_204_response": {
        "type": "null",
        "description": "",
        "title": "CommentAPI_delete_comment_204_response"
      },
      "MutationInput": {
        "type": "object",
        "title": "MutationInput",
        "properties": {
          "CommentAPI_create_comment": {
            "$ref": "#/definitions/mutationInput_CommentAPI_create_comment"
          },
          "CommentAPI_delete_comment": {
            "$ref": "#/definitions/mutationInput_CommentAPI_delete_comment"
          }
        },
        "writeOnly": true
      },
      "mutationInput_CommentAPI_create_comment": {
        "title": "mutationInput_CommentAPI_create_comment",
        "type": "object",
        "properties": {
          "input": {
            "$ref": "#/definitions/mutationInput_CommentAPI_create_comment_input"
          }
        }
      },
      "mutationInput_CommentAPI_create_comment_input": {
        "required": [
          "id",
          "topic",
          "author",
          "text",
          "timestamp"
        ],
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "format": "uuid"
          },
          "topic": {
            "type": "string"
          },
          "author": {
            "type": "string"
          },
          "text": {
            "type": "string"
          },
          "timestamp": {
            "type": "string",
            "format": "date-time"
          }
        },
        "nullable": false,
        "title": "mutationInput_CommentAPI_create_comment_input"
      },
      "mutationInput_CommentAPI_delete_comment": {
        "title": "mutationInput_CommentAPI_delete_comment",
        "type": "object",
        "properties": {
          "comment_id": {
            "name": "comment_id",
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