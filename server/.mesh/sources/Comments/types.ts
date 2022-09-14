
import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace CommentsTypes {
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
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  Float: number;
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  UUID: string;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: Date | string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** Represents empty values */
  Void: void;
};

export type Query = {
  CommentAPI_get_comments?: Maybe<Array<Maybe<Comment>>>;
  CommentAPI_get_topic_statistics?: Maybe<Array<Maybe<TopicStatistics>>>;
};


export type QueryCommentAPI_get_commentsArgs = {
  topic?: InputMaybe<Scalars['String']>;
};


export type QueryCommentAPI_get_topic_statisticsArgs = {
  topics: Array<InputMaybe<Scalars['String']>>;
};

export type Comment = {
  id: Scalars['UUID'];
  topic: Scalars['String'];
  author: Scalars['String'];
  text: Scalars['String'];
  timestamp: Scalars['DateTime'];
};

export type TopicStatistics = {
  topic: Scalars['String'];
  comment_count: Scalars['Int'];
};

export type Mutation = {
  CommentAPI_create_comment?: Maybe<Scalars['JSON']>;
  CommentAPI_delete_comment?: Maybe<Scalars['Void']>;
};


export type MutationCommentAPI_create_commentArgs = {
  input: mutationInput_CommentAPI_create_comment_input_Input;
};


export type MutationCommentAPI_delete_commentArgs = {
  comment_id: Scalars['UUID'];
};

export type mutationInput_CommentAPI_create_comment_input_Input = {
  id: Scalars['UUID'];
  topic: Scalars['String'];
  author: Scalars['String'];
  text: Scalars['String'];
  timestamp: Scalars['DateTime'];
};

}
export type QueryCommentsSdk = {
  /** undefined **/
  CommentAPI_get_comments: InContextSdkMethod<CommentsTypes.Query['CommentAPI_get_comments'], CommentsTypes.QueryCommentAPI_get_commentsArgs, MeshContext>,
  /** undefined **/
  CommentAPI_get_topic_statistics: InContextSdkMethod<CommentsTypes.Query['CommentAPI_get_topic_statistics'], CommentsTypes.QueryCommentAPI_get_topic_statisticsArgs, MeshContext>
};

export type MutationCommentsSdk = {
  /** undefined **/
  CommentAPI_create_comment: InContextSdkMethod<CommentsTypes.Mutation['CommentAPI_create_comment'], CommentsTypes.MutationCommentAPI_create_commentArgs, MeshContext>,
  /** undefined **/
  CommentAPI_delete_comment: InContextSdkMethod<CommentsTypes.Mutation['CommentAPI_delete_comment'], CommentsTypes.MutationCommentAPI_delete_commentArgs, MeshContext>
};

export type SubscriptionCommentsSdk = {

};
export type CommentsContext = {
      ["Comments"]: { Query: QueryCommentsSdk, Mutation: MutationCommentsSdk, Subscription: SubscriptionCommentsSdk },
      
    };