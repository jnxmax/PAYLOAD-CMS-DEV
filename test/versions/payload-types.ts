/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Brisbane'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  blocks: {};
  collections: {
    'disable-publish': DisablePublish;
    posts: Post;
    'autosave-posts': AutosavePost;
    'autosave-with-validate-posts': AutosaveWithValidatePost;
    'draft-posts': DraftPost;
    'draft-with-max-posts': DraftWithMaxPost;
    'draft-with-validate-posts': DraftWithValidatePost;
    'localized-posts': LocalizedPost;
    'version-posts': VersionPost;
    'custom-ids': CustomId;
    diff: Diff;
    text: Text;
    media: Media;
    users: User;
    'payload-jobs': PayloadJob;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    'disable-publish': DisablePublishSelect<false> | DisablePublishSelect<true>;
    posts: PostsSelect<false> | PostsSelect<true>;
    'autosave-posts': AutosavePostsSelect<false> | AutosavePostsSelect<true>;
    'autosave-with-validate-posts': AutosaveWithValidatePostsSelect<false> | AutosaveWithValidatePostsSelect<true>;
    'draft-posts': DraftPostsSelect<false> | DraftPostsSelect<true>;
    'draft-with-max-posts': DraftWithMaxPostsSelect<false> | DraftWithMaxPostsSelect<true>;
    'draft-with-validate-posts': DraftWithValidatePostsSelect<false> | DraftWithValidatePostsSelect<true>;
    'localized-posts': LocalizedPostsSelect<false> | LocalizedPostsSelect<true>;
    'version-posts': VersionPostsSelect<false> | VersionPostsSelect<true>;
    'custom-ids': CustomIdsSelect<false> | CustomIdsSelect<true>;
    diff: DiffSelect<false> | DiffSelect<true>;
    text: TextSelect<false> | TextSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    users: UsersSelect<false> | UsersSelect<true>;
    'payload-jobs': PayloadJobsSelect<false> | PayloadJobsSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {
    'autosave-global': AutosaveGlobal;
    'draft-global': DraftGlobal;
    'draft-with-max-global': DraftWithMaxGlobal;
    'disable-publish-global': DisablePublishGlobal;
    'localized-global': LocalizedGlobal;
  };
  globalsSelect: {
    'autosave-global': AutosaveGlobalSelect<false> | AutosaveGlobalSelect<true>;
    'draft-global': DraftGlobalSelect<false> | DraftGlobalSelect<true>;
    'draft-with-max-global': DraftWithMaxGlobalSelect<false> | DraftWithMaxGlobalSelect<true>;
    'disable-publish-global': DisablePublishGlobalSelect<false> | DisablePublishGlobalSelect<true>;
    'localized-global': LocalizedGlobalSelect<false> | LocalizedGlobalSelect<true>;
  };
  locale: 'en' | 'es' | 'de';
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: {
      schedulePublish: TaskSchedulePublish;
      inline: {
        input: unknown;
        output: unknown;
      };
    };
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "disable-publish".
 */
export interface DisablePublish {
  id: string;
  title: string;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts".
 */
export interface Post {
  id: string;
  relationToAutosaves?: (string | null) | AutosavePost;
  relationToVersions?: (string | null) | VersionPost;
  relationToDrafts?: (string | null) | DraftPost;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "autosave-posts".
 */
export interface AutosavePost {
  id: string;
  title: string;
  description: string;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "version-posts".
 */
export interface VersionPost {
  id: string;
  title: string;
  description: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "draft-posts".
 */
export interface DraftPost {
  id: string;
  title: string;
  description: string;
  radio?: 'test' | null;
  select?: ('test1' | 'test2')[] | null;
  blocksField?:
    | {
        text?: string | null;
        localized?: string | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'block';
      }[]
    | null;
  relation?: (string | null) | DraftPost;
  restrictedToUpdate?: boolean | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "autosave-with-validate-posts".
 */
export interface AutosaveWithValidatePost {
  id: string;
  title: string;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "draft-with-max-posts".
 */
export interface DraftWithMaxPost {
  id: string;
  title: string;
  description: string;
  radio?: 'test' | null;
  select?: ('test1' | 'test2')[] | null;
  blocksField?:
    | {
        text?: string | null;
        localized?: string | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'block';
      }[]
    | null;
  relation?: (string | null) | DraftWithMaxPost;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "draft-with-validate-posts".
 */
export interface DraftWithValidatePost {
  id: string;
  title: string;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized-posts".
 */
export interface LocalizedPost {
  id: string;
  text?: string | null;
  description?: string | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "custom-ids".
 */
export interface CustomId {
  id: string;
  title?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "diff".
 */
export interface Diff {
  id: string;
  array?:
    | {
        textInArray?: string | null;
        id?: string | null;
      }[]
    | null;
  arrayLocalized?:
    | {
        textInArrayLocalized?: string | null;
        id?: string | null;
      }[]
    | null;
  blocks?:
    | (
        | {
            textInBlock?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'TextBlock';
          }
        | {
            textInCollapsibleInCollapsibleBlock?: string | null;
            textInRowInCollapsibleBlock?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'CollapsibleBlock';
          }
        | {
            namedTab1InBlock?: {
              textInNamedTab1InBlock?: string | null;
            };
            textInUnnamedTab2InBlock?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'TabsBlock';
          }
      )[]
    | null;
  checkbox?: boolean | null;
  code?: string | null;
  textInCollapsible?: string | null;
  date?: string | null;
  email?: string | null;
  group?: {
    textInGroup?: string | null;
  };
  number?: number | null;
  /**
   * @minItems 2
   * @maxItems 2
   */
  point?: [number, number] | null;
  radio?: ('option1' | 'option2') | null;
  relationship?: (string | null) | DraftPost;
  richtext?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  richtextWithCustomDiff?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  textInRow?: string | null;
  select?: ('option1' | 'option2') | null;
  namedTab1?: {
    textInNamedTab1?: string | null;
  };
  textInUnnamedTab2?: string | null;
  text?: string | null;
  textArea?: string | null;
  upload?: (string | null) | Media;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "text".
 */
export interface Text {
  id: string;
  text: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-jobs".
 */
export interface PayloadJob {
  id: string;
  /**
   * Input data provided to the job
   */
  input?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  taskStatus?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  completedAt?: string | null;
  totalTried?: number | null;
  /**
   * If hasError is true this job will not be retried
   */
  hasError?: boolean | null;
  /**
   * If hasError is true, this is the error that caused it
   */
  error?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  /**
   * Task execution log
   */
  log?:
    | {
        executedAt: string;
        completedAt: string;
        taskSlug: 'inline' | 'schedulePublish';
        taskID: string;
        input?:
          | {
              [k: string]: unknown;
            }
          | unknown[]
          | string
          | number
          | boolean
          | null;
        output?:
          | {
              [k: string]: unknown;
            }
          | unknown[]
          | string
          | number
          | boolean
          | null;
        state: 'failed' | 'succeeded';
        error?:
          | {
              [k: string]: unknown;
            }
          | unknown[]
          | string
          | number
          | boolean
          | null;
        id?: string | null;
      }[]
    | null;
  taskSlug?: ('inline' | 'schedulePublish') | null;
  queue?: string | null;
  waitUntil?: string | null;
  processing?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'disable-publish';
        value: string | DisablePublish;
      } | null)
    | ({
        relationTo: 'posts';
        value: string | Post;
      } | null)
    | ({
        relationTo: 'autosave-posts';
        value: string | AutosavePost;
      } | null)
    | ({
        relationTo: 'autosave-with-validate-posts';
        value: string | AutosaveWithValidatePost;
      } | null)
    | ({
        relationTo: 'draft-posts';
        value: string | DraftPost;
      } | null)
    | ({
        relationTo: 'draft-with-max-posts';
        value: string | DraftWithMaxPost;
      } | null)
    | ({
        relationTo: 'draft-with-validate-posts';
        value: string | DraftWithValidatePost;
      } | null)
    | ({
        relationTo: 'localized-posts';
        value: string | LocalizedPost;
      } | null)
    | ({
        relationTo: 'version-posts';
        value: string | VersionPost;
      } | null)
    | ({
        relationTo: 'custom-ids';
        value: string | CustomId;
      } | null)
    | ({
        relationTo: 'diff';
        value: string | Diff;
      } | null)
    | ({
        relationTo: 'text';
        value: string | Text;
      } | null)
    | ({
        relationTo: 'media';
        value: string | Media;
      } | null)
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'payload-jobs';
        value: string | PayloadJob;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "disable-publish_select".
 */
export interface DisablePublishSelect<T extends boolean = true> {
  title?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts_select".
 */
export interface PostsSelect<T extends boolean = true> {
  relationToAutosaves?: T;
  relationToVersions?: T;
  relationToDrafts?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "autosave-posts_select".
 */
export interface AutosavePostsSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "autosave-with-validate-posts_select".
 */
export interface AutosaveWithValidatePostsSelect<T extends boolean = true> {
  title?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "draft-posts_select".
 */
export interface DraftPostsSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  radio?: T;
  select?: T;
  blocksField?:
    | T
    | {
        block?:
          | T
          | {
              text?: T;
              localized?: T;
              id?: T;
              blockName?: T;
            };
      };
  relation?: T;
  restrictedToUpdate?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "draft-with-max-posts_select".
 */
export interface DraftWithMaxPostsSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  radio?: T;
  select?: T;
  blocksField?:
    | T
    | {
        block?:
          | T
          | {
              text?: T;
              localized?: T;
              id?: T;
              blockName?: T;
            };
      };
  relation?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "draft-with-validate-posts_select".
 */
export interface DraftWithValidatePostsSelect<T extends boolean = true> {
  title?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized-posts_select".
 */
export interface LocalizedPostsSelect<T extends boolean = true> {
  text?: T;
  description?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "version-posts_select".
 */
export interface VersionPostsSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "custom-ids_select".
 */
export interface CustomIdsSelect<T extends boolean = true> {
  id?: T;
  title?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "diff_select".
 */
export interface DiffSelect<T extends boolean = true> {
  array?:
    | T
    | {
        textInArray?: T;
        id?: T;
      };
  arrayLocalized?:
    | T
    | {
        textInArrayLocalized?: T;
        id?: T;
      };
  blocks?:
    | T
    | {
        TextBlock?:
          | T
          | {
              textInBlock?: T;
              id?: T;
              blockName?: T;
            };
        CollapsibleBlock?:
          | T
          | {
              textInCollapsibleInCollapsibleBlock?: T;
              textInRowInCollapsibleBlock?: T;
              id?: T;
              blockName?: T;
            };
        TabsBlock?:
          | T
          | {
              namedTab1InBlock?:
                | T
                | {
                    textInNamedTab1InBlock?: T;
                  };
              textInUnnamedTab2InBlock?: T;
              id?: T;
              blockName?: T;
            };
      };
  checkbox?: T;
  code?: T;
  textInCollapsible?: T;
  date?: T;
  email?: T;
  group?:
    | T
    | {
        textInGroup?: T;
      };
  number?: T;
  point?: T;
  radio?: T;
  relationship?: T;
  richtext?: T;
  richtextWithCustomDiff?: T;
  textInRow?: T;
  select?: T;
  namedTab1?:
    | T
    | {
        textInNamedTab1?: T;
      };
  textInUnnamedTab2?: T;
  text?: T;
  textArea?: T;
  upload?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "text_select".
 */
export interface TextSelect<T extends boolean = true> {
  text?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-jobs_select".
 */
export interface PayloadJobsSelect<T extends boolean = true> {
  input?: T;
  taskStatus?: T;
  completedAt?: T;
  totalTried?: T;
  hasError?: T;
  error?: T;
  log?:
    | T
    | {
        executedAt?: T;
        completedAt?: T;
        taskSlug?: T;
        taskID?: T;
        input?: T;
        output?: T;
        state?: T;
        error?: T;
        id?: T;
      };
  taskSlug?: T;
  queue?: T;
  waitUntil?: T;
  processing?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "autosave-global".
 */
export interface AutosaveGlobal {
  id: string;
  title: string;
  _status?: ('draft' | 'published') | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "draft-global".
 */
export interface DraftGlobal {
  id: string;
  title: string;
  _status?: ('draft' | 'published') | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "draft-with-max-global".
 */
export interface DraftWithMaxGlobal {
  id: string;
  title: string;
  _status?: ('draft' | 'published') | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "disable-publish-global".
 */
export interface DisablePublishGlobal {
  id: string;
  title?: string | null;
  _status?: ('draft' | 'published') | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized-global".
 */
export interface LocalizedGlobal {
  id: string;
  title?: string | null;
  content?: string | null;
  _status?: ('draft' | 'published') | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "autosave-global_select".
 */
export interface AutosaveGlobalSelect<T extends boolean = true> {
  title?: T;
  _status?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "draft-global_select".
 */
export interface DraftGlobalSelect<T extends boolean = true> {
  title?: T;
  _status?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "draft-with-max-global_select".
 */
export interface DraftWithMaxGlobalSelect<T extends boolean = true> {
  title?: T;
  _status?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "disable-publish-global_select".
 */
export interface DisablePublishGlobalSelect<T extends boolean = true> {
  title?: T;
  _status?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized-global_select".
 */
export interface LocalizedGlobalSelect<T extends boolean = true> {
  title?: T;
  content?: T;
  _status?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TaskSchedulePublish".
 */
export interface TaskSchedulePublish {
  input: {
    type?: ('publish' | 'unpublish') | null;
    locale?: string | null;
    doc?: {
      relationTo: 'draft-posts';
      value: string | DraftPost;
    } | null;
    global?: 'draft-global' | null;
    user?: (string | null) | User;
  };
  output?: unknown;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  // @ts-ignore 
  export interface GeneratedTypes extends Config {}
}