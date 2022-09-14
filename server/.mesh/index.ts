// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { findAndParseConfig } from '@graphql-mesh/cli';
import { createMeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import type { TodosContext } from './sources/Todos/types';
import type { CommentsContext } from './sources/Comments/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



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
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: Date | string;
  /** Represents empty values */
  Void: void;
};

export type Query = {
  todos?: Maybe<Array<Maybe<Todo>>>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  CommentAPI_get_topic_statistics?: Maybe<Array<Maybe<TopicStatistics>>>;
};


export type QuerycommentsArgs = {
  topic?: InputMaybe<Scalars['String']>;
};


export type QueryCommentAPI_get_topic_statisticsArgs = {
  topics: Array<InputMaybe<Scalars['String']>>;
};

export type Mutation = {
  TodoAPI_create_todo?: Maybe<Scalars['JSON']>;
  TodoAPI_close_todo?: Maybe<Scalars['JSON']>;
  CommentAPI_create_comment?: Maybe<Scalars['JSON']>;
  CommentAPI_delete_comment?: Maybe<Scalars['Void']>;
};


export type MutationTodoAPI_create_todoArgs = {
  input: mutationInput_TodoAPI_create_todo_input_Input;
};


export type MutationTodoAPI_close_todoArgs = {
  todo_id: Scalars['UUID'];
};


export type MutationCommentAPI_create_commentArgs = {
  input: mutationInput_CommentAPI_create_comment_input_Input;
};


export type MutationCommentAPI_delete_commentArgs = {
  comment_id: Scalars['UUID'];
};

export type Todo = {
  id: Scalars['UUID'];
  title: Scalars['String'];
  description: Scalars['String'];
  commentCount?: Maybe<Scalars['Int']>;
};

export type mutationInput_TodoAPI_create_todo_input_Input = {
  id: Scalars['UUID'];
  title: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
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

export type mutationInput_CommentAPI_create_comment_input_Input = {
  id: Scalars['UUID'];
  topic: Scalars['String'];
  author: Scalars['String'];
  text: Scalars['String'];
  timestamp: Scalars['DateTime'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  Todo: ResolverTypeWrapper<Todo>;
  UUID: ResolverTypeWrapper<Scalars['UUID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  mutationInput_TodoAPI_create_todo_input_Input: mutationInput_TodoAPI_create_todo_input_Input;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Comment: ResolverTypeWrapper<Comment>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  TopicStatistics: ResolverTypeWrapper<TopicStatistics>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  mutationInput_CommentAPI_create_comment_input_Input: mutationInput_CommentAPI_create_comment_input_Input;
  Void: ResolverTypeWrapper<Scalars['Void']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Mutation: {};
  Todo: Todo;
  UUID: Scalars['UUID'];
  String: Scalars['String'];
  JSON: Scalars['JSON'];
  mutationInput_TodoAPI_create_todo_input_Input: mutationInput_TodoAPI_create_todo_input_Input;
  Boolean: Scalars['Boolean'];
  Comment: Comment;
  DateTime: Scalars['DateTime'];
  TopicStatistics: TopicStatistics;
  Int: Scalars['Int'];
  mutationInput_CommentAPI_create_comment_input_Input: mutationInput_CommentAPI_create_comment_input_Input;
  Void: Scalars['Void'];
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  todos?: Resolver<Maybe<Array<Maybe<ResolversTypes['Todo']>>>, ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType, Partial<QuerycommentsArgs>>;
  CommentAPI_get_topic_statistics?: Resolver<Maybe<Array<Maybe<ResolversTypes['TopicStatistics']>>>, ParentType, ContextType, RequireFields<QueryCommentAPI_get_topic_statisticsArgs, 'topics'>>;
}>;

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  TodoAPI_create_todo?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationTodoAPI_create_todoArgs, 'input'>>;
  TodoAPI_close_todo?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationTodoAPI_close_todoArgs, 'todo_id'>>;
  CommentAPI_create_comment?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationCommentAPI_create_commentArgs, 'input'>>;
  CommentAPI_delete_comment?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationCommentAPI_delete_commentArgs, 'comment_id'>>;
}>;

export type TodoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Todo'] = ResolversParentTypes['Todo']> = ResolversObject<{
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  commentCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface UUIDScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UUID'], any> {
  name: 'UUID';
}

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type CommentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = ResolversObject<{
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  topic?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  author?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type TopicStatisticsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TopicStatistics'] = ResolversParentTypes['TopicStatistics']> = ResolversObject<{
  topic?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  comment_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface VoidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Void'], any> {
  name: 'Void';
}

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Todo?: TodoResolvers<ContextType>;
  UUID?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  Comment?: CommentResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  TopicStatistics?: TopicStatisticsResolvers<ContextType>;
  Void?: GraphQLScalarType;
}>;


export type MeshContext = TodosContext & CommentsContext & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn = (moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export function getMeshOptions() {
  console.warn('WARNING: These artifacts are built for development mode. Please run "mesh build" to build production artifacts');
  return findAndParseConfig({
    dir: baseDir,
    artifactsDir: ".mesh",
    configName: "mesh",
    additionalPackagePrefixes: [],
    initialLoggerPrefix: "🕸️  Mesh",
  });
}

export function createBuiltMeshHTTPHandler() {
  return createMeshHTTPHandler({
    baseDir,
    getBuiltMesh: getBuiltMesh,
    rawServeConfig: {"customServerHandler":"src/server"},
  })
}

let meshInstance$: Promise<MeshInstance<MeshContext>>;

export function getBuiltMesh(): Promise<MeshInstance<MeshContext>> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh<MeshContext>(meshOptions)).then(mesh => {
      const id$ = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        id$.then(id => mesh.pubsub.unsubscribe(id)).catch(err => console.error(err));
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));