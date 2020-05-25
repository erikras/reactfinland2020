/* tslint:disable */
// This file was automatically generated and should not be edited.
import { ResolverContext } from './ResolverContext'
import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql'
export type Maybe<T> = T | null
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X]
} &
  { [P in K]-?: NonNullable<T[P]> }

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: any
}

export type Author = {
  readonly __typename?: 'Author'
  readonly id?: Maybe<Scalars['Int']>
  readonly firstName?: Maybe<Scalars['String']>
  readonly lastName?: Maybe<Scalars['String']>
}

export type CreateAuthorInput = {
  readonly firstName: Scalars['String']
  readonly lastName: Scalars['String']
}

export type UpdateAuthorInput = {
  readonly firstName: Maybe<Scalars['String']>
  readonly lastName: Maybe<Scalars['String']>
}

export type Book = {
  readonly __typename?: 'Book'
  readonly id?: Maybe<Scalars['Int']>
  readonly title?: Maybe<Scalars['String']>
  readonly author?: Maybe<Author>
  readonly year?: Maybe<Scalars['Int']>
}

export type CreateBookInput = {
  readonly title: Maybe<Scalars['String']>
  readonly author: CreateAuthorInput
  readonly year: Maybe<Scalars['Int']>
}

export type UpdateBookInput = {
  readonly title: Maybe<Scalars['String']>
  readonly author: Maybe<UpdateAuthorInput>
  readonly year: Maybe<Scalars['Int']>
}

export type BookMutationResult = {
  readonly __typename?: 'BookMutationResult'
  readonly success?: Maybe<Scalars['Boolean']>
  readonly Book?: Maybe<Book>
}

export type GenericMutationResult = {
  readonly __typename?: 'GenericMutationResult'
  readonly success?: Maybe<Scalars['Boolean']>
}

export type Mutation = {
  readonly __typename?: 'Mutation'
  readonly createBook?: Maybe<BookMutationResult>
  readonly updateBook?: Maybe<BookMutationResult>
  readonly deleteBook?: Maybe<GenericMutationResult>
}

export type MutationCreateBookArgs = {
  Book: CreateBookInput
}

export type MutationUpdateBookArgs = {
  id: Scalars['Int']
  Book: UpdateBookInput
}

export type MutationDeleteBookArgs = {
  id: Scalars['Int']
}

export type Query = {
  readonly __typename?: 'Query'
  readonly books?: Maybe<ReadonlyArray<Maybe<Book>>>
  readonly book?: Maybe<Book>
}

export type QueryBookArgs = {
  id: Scalars['Int']
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>

export type isTypeOfResolverFn<T = {}> = (
  obj: T,
  info: GraphQLResolveInfo
) => boolean

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>
  Book: ResolverTypeWrapper<Book>
  Int: ResolverTypeWrapper<Scalars['Int']>
  String: ResolverTypeWrapper<Scalars['String']>
  Author: ResolverTypeWrapper<Author>
  Mutation: ResolverTypeWrapper<{}>
  CreateBookInput: CreateBookInput
  UpdateBookInput: UpdateBookInput
  BookMutationResult: ResolverTypeWrapper<BookMutationResult>
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  GenericMutationResult: ResolverTypeWrapper<GenericMutationResult>
  Date: ResolverTypeWrapper<Scalars['Date']>
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {}
  Book: Book
  Int: Scalars['Int']
  String: Scalars['String']
  Author: Author
  Mutation: {}
  CreateBookInput: CreateBookInput
  UpdateBookInput: UpdateBookInput
  BookMutationResult: BookMutationResult
  Boolean: Scalars['Boolean']
  GenericMutationResult: GenericMutationResult
  Date: Scalars['Date']
}

export type AuthorResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']
> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type BookResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']
> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  author?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType>
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type BookMutationResultResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['BookMutationResult'] = ResolversParentTypes['BookMutationResult']
> = {
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  Book?: Resolver<Maybe<ResolversTypes['Book']>, ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export type GenericMutationResultResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['GenericMutationResult'] = ResolversParentTypes['GenericMutationResult']
> = {
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type MutationResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  createBook?: Resolver<
    Maybe<ResolversTypes['BookMutationResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateBookArgs, 'Book'>
  >
  updateBook?: Resolver<
    Maybe<ResolversTypes['BookMutationResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateBookArgs, 'id' | 'Book'>
  >
  deleteBook?: Resolver<
    Maybe<ResolversTypes['GenericMutationResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteBookArgs, 'id'>
  >
}

export type QueryResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  books?: Resolver<Maybe<ReadonlyArray<Maybe<Book>>>, ParentType, ContextType>
  book?: Resolver<
    Maybe<ResolversTypes['Book']>,
    ParentType,
    ContextType,
    RequireFields<QueryBookArgs, 'id'>
  >
}

export type Resolvers<ContextType = ResolverContext> = {
  Author?: AuthorResolvers<ContextType>
  Book?: BookResolvers<ContextType>
  BookMutationResult?: BookMutationResultResolvers<ContextType>
  Date?: GraphQLScalarType
  GenericMutationResult?: GenericMutationResultResolvers<ContextType>
  Mutation?: MutationResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
}

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = ResolverContext> = Resolvers<ContextType>
