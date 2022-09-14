
import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace TodosTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  UUID: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Query = {
  TodoAPI_get_todo_list?: Maybe<Array<Maybe<Todo>>>;
};

export type Todo = {
  id: Scalars['UUID'];
  title: Scalars['String'];
  description: Scalars['String'];
};

export type Mutation = {
  TodoAPI_create_todo?: Maybe<Scalars['JSON']>;
  TodoAPI_close_todo?: Maybe<Scalars['JSON']>;
};


export type MutationTodoAPI_create_todoArgs = {
  input: mutationInput_TodoAPI_create_todo_input_Input;
};


export type MutationTodoAPI_close_todoArgs = {
  todo_id: Scalars['UUID'];
};

export type mutationInput_TodoAPI_create_todo_input_Input = {
  id: Scalars['UUID'];
  title: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
};

}
export type QueryTodosSdk = {
  /** undefined **/
  TodoAPI_get_todo_list: InContextSdkMethod<TodosTypes.Query['TodoAPI_get_todo_list'], {}, MeshContext>
};

export type MutationTodosSdk = {
  /** undefined **/
  TodoAPI_create_todo: InContextSdkMethod<TodosTypes.Mutation['TodoAPI_create_todo'], TodosTypes.MutationTodoAPI_create_todoArgs, MeshContext>,
  /** undefined **/
  TodoAPI_close_todo: InContextSdkMethod<TodosTypes.Mutation['TodoAPI_close_todo'], TodosTypes.MutationTodoAPI_close_todoArgs, MeshContext>
};

export type SubscriptionTodosSdk = {

};
export type TodosContext = {
      ["Todos"]: { Query: QueryTodosSdk, Mutation: MutationTodosSdk, Subscription: SubscriptionTodosSdk },
      
    };