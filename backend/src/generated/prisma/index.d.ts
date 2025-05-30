
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Building
 * 
 */
export type Building = $Result.DefaultSelection<Prisma.$BuildingPayload>
/**
 * Model Floor
 * 
 */
export type Floor = $Result.DefaultSelection<Prisma.$FloorPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model Device
 * 
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>
/**
 * Model DeviceRoom
 * 
 */
export type DeviceRoom = $Result.DefaultSelection<Prisma.$DeviceRoomPayload>
/**
 * Model Automation
 * 
 */
export type Automation = $Result.DefaultSelection<Prisma.$AutomationPayload>
/**
 * Model Trigger
 * 
 */
export type Trigger = $Result.DefaultSelection<Prisma.$TriggerPayload>
/**
 * Model TriggerTime
 * 
 */
export type TriggerTime = $Result.DefaultSelection<Prisma.$TriggerTimePayload>
/**
 * Model TriggerDevice
 * 
 */
export type TriggerDevice = $Result.DefaultSelection<Prisma.$TriggerDevicePayload>
/**
 * Model TriggerScene
 * 
 */
export type TriggerScene = $Result.DefaultSelection<Prisma.$TriggerScenePayload>
/**
 * Model Action
 * 
 */
export type Action = $Result.DefaultSelection<Prisma.$ActionPayload>
/**
 * Model ActionDevice
 * 
 */
export type ActionDevice = $Result.DefaultSelection<Prisma.$ActionDevicePayload>
/**
 * Model ActionScene
 * 
 */
export type ActionScene = $Result.DefaultSelection<Prisma.$ActionScenePayload>
/**
 * Model Schedule
 * 
 */
export type Schedule = $Result.DefaultSelection<Prisma.$SchedulePayload>
/**
 * Model ScheduleDay
 * 
 */
export type ScheduleDay = $Result.DefaultSelection<Prisma.$ScheduleDayPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DEVICETYPE: {
  LIGHT: 'LIGHT',
  THERMOSTAT: 'THERMOSTAT',
  SENSOR: 'SENSOR',
  SWITCH: 'SWITCH',
  CAMERA: 'CAMERA',
  PLUG: 'PLUG',
  PRINTER: 'PRINTER',
  FAN: 'FAN',
  OUTLET: 'OUTLET',
  PROJECTOR: 'PROJECTOR',
  SPEAKER: 'SPEAKER',
  ROUTER: 'ROUTER',
  WORKSTATION: 'WORKSTATION',
  COMPUTER: 'COMPUTER',
  AIR: 'AIR',
  OTHER: 'OTHER'
};

export type DEVICETYPE = (typeof DEVICETYPE)[keyof typeof DEVICETYPE]


export const scheduleDays: {
  DOMINGO: 'DOMINGO',
  SEGUNDA: 'SEGUNDA',
  TERCA: 'TERCA',
  QUARTA: 'QUARTA',
  QUINTA: 'QUINTA',
  SEXTA: 'SEXTA',
  SABADO: 'SABADO'
};

export type scheduleDays = (typeof scheduleDays)[keyof typeof scheduleDays]

}

export type DEVICETYPE = $Enums.DEVICETYPE

export const DEVICETYPE: typeof $Enums.DEVICETYPE

export type scheduleDays = $Enums.scheduleDays

export const scheduleDays: typeof $Enums.scheduleDays

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Buildings
 * const buildings = await prisma.building.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Buildings
   * const buildings = await prisma.building.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.building`: Exposes CRUD operations for the **Building** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Buildings
    * const buildings = await prisma.building.findMany()
    * ```
    */
  get building(): Prisma.BuildingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.floor`: Exposes CRUD operations for the **Floor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Floors
    * const floors = await prisma.floor.findMany()
    * ```
    */
  get floor(): Prisma.FloorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.DeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deviceRoom`: Exposes CRUD operations for the **DeviceRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeviceRooms
    * const deviceRooms = await prisma.deviceRoom.findMany()
    * ```
    */
  get deviceRoom(): Prisma.DeviceRoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.automation`: Exposes CRUD operations for the **Automation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Automations
    * const automations = await prisma.automation.findMany()
    * ```
    */
  get automation(): Prisma.AutomationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trigger`: Exposes CRUD operations for the **Trigger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Triggers
    * const triggers = await prisma.trigger.findMany()
    * ```
    */
  get trigger(): Prisma.TriggerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.triggerTime`: Exposes CRUD operations for the **TriggerTime** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TriggerTimes
    * const triggerTimes = await prisma.triggerTime.findMany()
    * ```
    */
  get triggerTime(): Prisma.TriggerTimeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.triggerDevice`: Exposes CRUD operations for the **TriggerDevice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TriggerDevices
    * const triggerDevices = await prisma.triggerDevice.findMany()
    * ```
    */
  get triggerDevice(): Prisma.TriggerDeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.triggerScene`: Exposes CRUD operations for the **TriggerScene** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TriggerScenes
    * const triggerScenes = await prisma.triggerScene.findMany()
    * ```
    */
  get triggerScene(): Prisma.TriggerSceneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.action`: Exposes CRUD operations for the **Action** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actions
    * const actions = await prisma.action.findMany()
    * ```
    */
  get action(): Prisma.ActionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.actionDevice`: Exposes CRUD operations for the **ActionDevice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActionDevices
    * const actionDevices = await prisma.actionDevice.findMany()
    * ```
    */
  get actionDevice(): Prisma.ActionDeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.actionScene`: Exposes CRUD operations for the **ActionScene** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActionScenes
    * const actionScenes = await prisma.actionScene.findMany()
    * ```
    */
  get actionScene(): Prisma.ActionSceneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **Schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.ScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scheduleDay`: Exposes CRUD operations for the **ScheduleDay** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScheduleDays
    * const scheduleDays = await prisma.scheduleDay.findMany()
    * ```
    */
  get scheduleDay(): Prisma.ScheduleDayDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Building: 'Building',
    Floor: 'Floor',
    Room: 'Room',
    Device: 'Device',
    DeviceRoom: 'DeviceRoom',
    Automation: 'Automation',
    Trigger: 'Trigger',
    TriggerTime: 'TriggerTime',
    TriggerDevice: 'TriggerDevice',
    TriggerScene: 'TriggerScene',
    Action: 'Action',
    ActionDevice: 'ActionDevice',
    ActionScene: 'ActionScene',
    Schedule: 'Schedule',
    ScheduleDay: 'ScheduleDay'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "building" | "floor" | "room" | "device" | "deviceRoom" | "automation" | "trigger" | "triggerTime" | "triggerDevice" | "triggerScene" | "action" | "actionDevice" | "actionScene" | "schedule" | "scheduleDay"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Building: {
        payload: Prisma.$BuildingPayload<ExtArgs>
        fields: Prisma.BuildingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BuildingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BuildingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          findFirst: {
            args: Prisma.BuildingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BuildingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          findMany: {
            args: Prisma.BuildingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>[]
          }
          create: {
            args: Prisma.BuildingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          createMany: {
            args: Prisma.BuildingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BuildingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>[]
          }
          delete: {
            args: Prisma.BuildingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          update: {
            args: Prisma.BuildingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          deleteMany: {
            args: Prisma.BuildingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BuildingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BuildingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>[]
          }
          upsert: {
            args: Prisma.BuildingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          aggregate: {
            args: Prisma.BuildingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBuilding>
          }
          groupBy: {
            args: Prisma.BuildingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BuildingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BuildingCountArgs<ExtArgs>
            result: $Utils.Optional<BuildingCountAggregateOutputType> | number
          }
        }
      }
      Floor: {
        payload: Prisma.$FloorPayload<ExtArgs>
        fields: Prisma.FloorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FloorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FloorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          findFirst: {
            args: Prisma.FloorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FloorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          findMany: {
            args: Prisma.FloorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>[]
          }
          create: {
            args: Prisma.FloorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          createMany: {
            args: Prisma.FloorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FloorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>[]
          }
          delete: {
            args: Prisma.FloorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          update: {
            args: Prisma.FloorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          deleteMany: {
            args: Prisma.FloorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FloorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FloorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>[]
          }
          upsert: {
            args: Prisma.FloorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          aggregate: {
            args: Prisma.FloorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFloor>
          }
          groupBy: {
            args: Prisma.FloorGroupByArgs<ExtArgs>
            result: $Utils.Optional<FloorGroupByOutputType>[]
          }
          count: {
            args: Prisma.FloorCountArgs<ExtArgs>
            result: $Utils.Optional<FloorCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>
        fields: Prisma.DeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      DeviceRoom: {
        payload: Prisma.$DeviceRoomPayload<ExtArgs>
        fields: Prisma.DeviceRoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceRoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceRoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceRoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceRoomPayload>
          }
          findFirst: {
            args: Prisma.DeviceRoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceRoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceRoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceRoomPayload>
          }
          findMany: {
            args: Prisma.DeviceRoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceRoomPayload>[]
          }
          create: {
            args: Prisma.DeviceRoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceRoomPayload>
          }
          createMany: {
            args: Prisma.DeviceRoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceRoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceRoomPayload>[]
          }
          delete: {
            args: Prisma.DeviceRoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceRoomPayload>
          }
          update: {
            args: Prisma.DeviceRoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceRoomPayload>
          }
          deleteMany: {
            args: Prisma.DeviceRoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceRoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceRoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceRoomPayload>[]
          }
          upsert: {
            args: Prisma.DeviceRoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceRoomPayload>
          }
          aggregate: {
            args: Prisma.DeviceRoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeviceRoom>
          }
          groupBy: {
            args: Prisma.DeviceRoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceRoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceRoomCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceRoomCountAggregateOutputType> | number
          }
        }
      }
      Automation: {
        payload: Prisma.$AutomationPayload<ExtArgs>
        fields: Prisma.AutomationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AutomationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AutomationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>
          }
          findFirst: {
            args: Prisma.AutomationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AutomationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>
          }
          findMany: {
            args: Prisma.AutomationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>[]
          }
          create: {
            args: Prisma.AutomationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>
          }
          createMany: {
            args: Prisma.AutomationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AutomationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>[]
          }
          delete: {
            args: Prisma.AutomationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>
          }
          update: {
            args: Prisma.AutomationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>
          }
          deleteMany: {
            args: Prisma.AutomationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AutomationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AutomationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>[]
          }
          upsert: {
            args: Prisma.AutomationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>
          }
          aggregate: {
            args: Prisma.AutomationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAutomation>
          }
          groupBy: {
            args: Prisma.AutomationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AutomationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AutomationCountArgs<ExtArgs>
            result: $Utils.Optional<AutomationCountAggregateOutputType> | number
          }
        }
      }
      Trigger: {
        payload: Prisma.$TriggerPayload<ExtArgs>
        fields: Prisma.TriggerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TriggerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TriggerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          findFirst: {
            args: Prisma.TriggerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TriggerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          findMany: {
            args: Prisma.TriggerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          create: {
            args: Prisma.TriggerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          createMany: {
            args: Prisma.TriggerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TriggerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          delete: {
            args: Prisma.TriggerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          update: {
            args: Prisma.TriggerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          deleteMany: {
            args: Prisma.TriggerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TriggerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TriggerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          upsert: {
            args: Prisma.TriggerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          aggregate: {
            args: Prisma.TriggerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrigger>
          }
          groupBy: {
            args: Prisma.TriggerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TriggerGroupByOutputType>[]
          }
          count: {
            args: Prisma.TriggerCountArgs<ExtArgs>
            result: $Utils.Optional<TriggerCountAggregateOutputType> | number
          }
        }
      }
      TriggerTime: {
        payload: Prisma.$TriggerTimePayload<ExtArgs>
        fields: Prisma.TriggerTimeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TriggerTimeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerTimePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TriggerTimeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerTimePayload>
          }
          findFirst: {
            args: Prisma.TriggerTimeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerTimePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TriggerTimeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerTimePayload>
          }
          findMany: {
            args: Prisma.TriggerTimeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerTimePayload>[]
          }
          create: {
            args: Prisma.TriggerTimeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerTimePayload>
          }
          createMany: {
            args: Prisma.TriggerTimeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TriggerTimeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerTimePayload>[]
          }
          delete: {
            args: Prisma.TriggerTimeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerTimePayload>
          }
          update: {
            args: Prisma.TriggerTimeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerTimePayload>
          }
          deleteMany: {
            args: Prisma.TriggerTimeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TriggerTimeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TriggerTimeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerTimePayload>[]
          }
          upsert: {
            args: Prisma.TriggerTimeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerTimePayload>
          }
          aggregate: {
            args: Prisma.TriggerTimeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTriggerTime>
          }
          groupBy: {
            args: Prisma.TriggerTimeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TriggerTimeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TriggerTimeCountArgs<ExtArgs>
            result: $Utils.Optional<TriggerTimeCountAggregateOutputType> | number
          }
        }
      }
      TriggerDevice: {
        payload: Prisma.$TriggerDevicePayload<ExtArgs>
        fields: Prisma.TriggerDeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TriggerDeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerDevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TriggerDeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerDevicePayload>
          }
          findFirst: {
            args: Prisma.TriggerDeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerDevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TriggerDeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerDevicePayload>
          }
          findMany: {
            args: Prisma.TriggerDeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerDevicePayload>[]
          }
          create: {
            args: Prisma.TriggerDeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerDevicePayload>
          }
          createMany: {
            args: Prisma.TriggerDeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TriggerDeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerDevicePayload>[]
          }
          delete: {
            args: Prisma.TriggerDeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerDevicePayload>
          }
          update: {
            args: Prisma.TriggerDeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerDevicePayload>
          }
          deleteMany: {
            args: Prisma.TriggerDeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TriggerDeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TriggerDeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerDevicePayload>[]
          }
          upsert: {
            args: Prisma.TriggerDeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerDevicePayload>
          }
          aggregate: {
            args: Prisma.TriggerDeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTriggerDevice>
          }
          groupBy: {
            args: Prisma.TriggerDeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<TriggerDeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.TriggerDeviceCountArgs<ExtArgs>
            result: $Utils.Optional<TriggerDeviceCountAggregateOutputType> | number
          }
        }
      }
      TriggerScene: {
        payload: Prisma.$TriggerScenePayload<ExtArgs>
        fields: Prisma.TriggerSceneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TriggerSceneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerScenePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TriggerSceneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerScenePayload>
          }
          findFirst: {
            args: Prisma.TriggerSceneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerScenePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TriggerSceneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerScenePayload>
          }
          findMany: {
            args: Prisma.TriggerSceneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerScenePayload>[]
          }
          create: {
            args: Prisma.TriggerSceneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerScenePayload>
          }
          createMany: {
            args: Prisma.TriggerSceneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TriggerSceneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerScenePayload>[]
          }
          delete: {
            args: Prisma.TriggerSceneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerScenePayload>
          }
          update: {
            args: Prisma.TriggerSceneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerScenePayload>
          }
          deleteMany: {
            args: Prisma.TriggerSceneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TriggerSceneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TriggerSceneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerScenePayload>[]
          }
          upsert: {
            args: Prisma.TriggerSceneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerScenePayload>
          }
          aggregate: {
            args: Prisma.TriggerSceneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTriggerScene>
          }
          groupBy: {
            args: Prisma.TriggerSceneGroupByArgs<ExtArgs>
            result: $Utils.Optional<TriggerSceneGroupByOutputType>[]
          }
          count: {
            args: Prisma.TriggerSceneCountArgs<ExtArgs>
            result: $Utils.Optional<TriggerSceneCountAggregateOutputType> | number
          }
        }
      }
      Action: {
        payload: Prisma.$ActionPayload<ExtArgs>
        fields: Prisma.ActionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          findFirst: {
            args: Prisma.ActionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          findMany: {
            args: Prisma.ActionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          create: {
            args: Prisma.ActionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          createMany: {
            args: Prisma.ActionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          delete: {
            args: Prisma.ActionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          update: {
            args: Prisma.ActionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          deleteMany: {
            args: Prisma.ActionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          upsert: {
            args: Prisma.ActionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          aggregate: {
            args: Prisma.ActionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAction>
          }
          groupBy: {
            args: Prisma.ActionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActionCountArgs<ExtArgs>
            result: $Utils.Optional<ActionCountAggregateOutputType> | number
          }
        }
      }
      ActionDevice: {
        payload: Prisma.$ActionDevicePayload<ExtArgs>
        fields: Prisma.ActionDeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActionDeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionDevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActionDeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionDevicePayload>
          }
          findFirst: {
            args: Prisma.ActionDeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionDevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActionDeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionDevicePayload>
          }
          findMany: {
            args: Prisma.ActionDeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionDevicePayload>[]
          }
          create: {
            args: Prisma.ActionDeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionDevicePayload>
          }
          createMany: {
            args: Prisma.ActionDeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActionDeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionDevicePayload>[]
          }
          delete: {
            args: Prisma.ActionDeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionDevicePayload>
          }
          update: {
            args: Prisma.ActionDeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionDevicePayload>
          }
          deleteMany: {
            args: Prisma.ActionDeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActionDeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActionDeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionDevicePayload>[]
          }
          upsert: {
            args: Prisma.ActionDeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionDevicePayload>
          }
          aggregate: {
            args: Prisma.ActionDeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActionDevice>
          }
          groupBy: {
            args: Prisma.ActionDeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActionDeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActionDeviceCountArgs<ExtArgs>
            result: $Utils.Optional<ActionDeviceCountAggregateOutputType> | number
          }
        }
      }
      ActionScene: {
        payload: Prisma.$ActionScenePayload<ExtArgs>
        fields: Prisma.ActionSceneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActionSceneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionScenePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActionSceneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionScenePayload>
          }
          findFirst: {
            args: Prisma.ActionSceneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionScenePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActionSceneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionScenePayload>
          }
          findMany: {
            args: Prisma.ActionSceneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionScenePayload>[]
          }
          create: {
            args: Prisma.ActionSceneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionScenePayload>
          }
          createMany: {
            args: Prisma.ActionSceneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActionSceneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionScenePayload>[]
          }
          delete: {
            args: Prisma.ActionSceneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionScenePayload>
          }
          update: {
            args: Prisma.ActionSceneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionScenePayload>
          }
          deleteMany: {
            args: Prisma.ActionSceneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActionSceneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActionSceneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionScenePayload>[]
          }
          upsert: {
            args: Prisma.ActionSceneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionScenePayload>
          }
          aggregate: {
            args: Prisma.ActionSceneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActionScene>
          }
          groupBy: {
            args: Prisma.ActionSceneGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActionSceneGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActionSceneCountArgs<ExtArgs>
            result: $Utils.Optional<ActionSceneCountAggregateOutputType> | number
          }
        }
      }
      Schedule: {
        payload: Prisma.$SchedulePayload<ExtArgs>
        fields: Prisma.ScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findFirst: {
            args: Prisma.ScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findMany: {
            args: Prisma.ScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          create: {
            args: Prisma.ScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          createMany: {
            args: Prisma.ScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          delete: {
            args: Prisma.ScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          update: {
            args: Prisma.ScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          deleteMany: {
            args: Prisma.ScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          upsert: {
            args: Prisma.ScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule>
          }
          groupBy: {
            args: Prisma.ScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number
          }
        }
      }
      ScheduleDay: {
        payload: Prisma.$ScheduleDayPayload<ExtArgs>
        fields: Prisma.ScheduleDayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleDayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleDayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleDayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleDayPayload>
          }
          findFirst: {
            args: Prisma.ScheduleDayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleDayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleDayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleDayPayload>
          }
          findMany: {
            args: Prisma.ScheduleDayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleDayPayload>[]
          }
          create: {
            args: Prisma.ScheduleDayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleDayPayload>
          }
          createMany: {
            args: Prisma.ScheduleDayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduleDayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleDayPayload>[]
          }
          delete: {
            args: Prisma.ScheduleDayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleDayPayload>
          }
          update: {
            args: Prisma.ScheduleDayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleDayPayload>
          }
          deleteMany: {
            args: Prisma.ScheduleDayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleDayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduleDayUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleDayPayload>[]
          }
          upsert: {
            args: Prisma.ScheduleDayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleDayPayload>
          }
          aggregate: {
            args: Prisma.ScheduleDayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScheduleDay>
          }
          groupBy: {
            args: Prisma.ScheduleDayGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleDayGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleDayCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleDayCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    building?: BuildingOmit
    floor?: FloorOmit
    room?: RoomOmit
    device?: DeviceOmit
    deviceRoom?: DeviceRoomOmit
    automation?: AutomationOmit
    trigger?: TriggerOmit
    triggerTime?: TriggerTimeOmit
    triggerDevice?: TriggerDeviceOmit
    triggerScene?: TriggerSceneOmit
    action?: ActionOmit
    actionDevice?: ActionDeviceOmit
    actionScene?: ActionSceneOmit
    schedule?: ScheduleOmit
    scheduleDay?: ScheduleDayOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BuildingCountOutputType
   */

  export type BuildingCountOutputType = {
    floors: number
  }

  export type BuildingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    floors?: boolean | BuildingCountOutputTypeCountFloorsArgs
  }

  // Custom InputTypes
  /**
   * BuildingCountOutputType without action
   */
  export type BuildingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildingCountOutputType
     */
    select?: BuildingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BuildingCountOutputType without action
   */
  export type BuildingCountOutputTypeCountFloorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FloorWhereInput
  }


  /**
   * Count Type FloorCountOutputType
   */

  export type FloorCountOutputType = {
    rooms: number
  }

  export type FloorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | FloorCountOutputTypeCountRoomsArgs
  }

  // Custom InputTypes
  /**
   * FloorCountOutputType without action
   */
  export type FloorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FloorCountOutputType
     */
    select?: FloorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FloorCountOutputType without action
   */
  export type FloorCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    devices: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devices?: boolean | RoomCountOutputTypeCountDevicesArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceRoomWhereInput
  }


  /**
   * Count Type DeviceCountOutputType
   */

  export type DeviceCountOutputType = {
    rooms: number
    deviceTriggers: number
    deviceActions: number
  }

  export type DeviceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | DeviceCountOutputTypeCountRoomsArgs
    deviceTriggers?: boolean | DeviceCountOutputTypeCountDeviceTriggersArgs
    deviceActions?: boolean | DeviceCountOutputTypeCountDeviceActionsArgs
  }

  // Custom InputTypes
  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCountOutputType
     */
    select?: DeviceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceRoomWhereInput
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountDeviceTriggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerDeviceWhereInput
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountDeviceActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionDeviceWhereInput
  }


  /**
   * Count Type AutomationCountOutputType
   */

  export type AutomationCountOutputType = {
    actions: number
  }

  export type AutomationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actions?: boolean | AutomationCountOutputTypeCountActionsArgs
  }

  // Custom InputTypes
  /**
   * AutomationCountOutputType without action
   */
  export type AutomationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationCountOutputType
     */
    select?: AutomationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AutomationCountOutputType without action
   */
  export type AutomationCountOutputTypeCountActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
  }


  /**
   * Count Type ScheduleCountOutputType
   */

  export type ScheduleCountOutputType = {
    scheduleDays: number
  }

  export type ScheduleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduleDays?: boolean | ScheduleCountOutputTypeCountScheduleDaysArgs
  }

  // Custom InputTypes
  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleCountOutputType
     */
    select?: ScheduleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeCountScheduleDaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleDayWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Building
   */

  export type AggregateBuilding = {
    _count: BuildingCountAggregateOutputType | null
    _min: BuildingMinAggregateOutputType | null
    _max: BuildingMaxAggregateOutputType | null
  }

  export type BuildingMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type BuildingMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type BuildingCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type BuildingMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type BuildingMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type BuildingCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type BuildingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Building to aggregate.
     */
    where?: BuildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: BuildingOrderByWithRelationInput | BuildingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BuildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Buildings
    **/
    _count?: true | BuildingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BuildingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BuildingMaxAggregateInputType
  }

  export type GetBuildingAggregateType<T extends BuildingAggregateArgs> = {
        [P in keyof T & keyof AggregateBuilding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuilding[P]>
      : GetScalarType<T[P], AggregateBuilding[P]>
  }




  export type BuildingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuildingWhereInput
    orderBy?: BuildingOrderByWithAggregationInput | BuildingOrderByWithAggregationInput[]
    by: BuildingScalarFieldEnum[] | BuildingScalarFieldEnum
    having?: BuildingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BuildingCountAggregateInputType | true
    _min?: BuildingMinAggregateInputType
    _max?: BuildingMaxAggregateInputType
  }

  export type BuildingGroupByOutputType = {
    id: string
    name: string
    _count: BuildingCountAggregateOutputType | null
    _min: BuildingMinAggregateOutputType | null
    _max: BuildingMaxAggregateOutputType | null
  }

  type GetBuildingGroupByPayload<T extends BuildingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BuildingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BuildingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BuildingGroupByOutputType[P]>
            : GetScalarType<T[P], BuildingGroupByOutputType[P]>
        }
      >
    >


  export type BuildingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    floors?: boolean | Building$floorsArgs<ExtArgs>
    _count?: boolean | BuildingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["building"]>

  export type BuildingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["building"]>

  export type BuildingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["building"]>

  export type BuildingSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type BuildingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["building"]>
  export type BuildingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    floors?: boolean | Building$floorsArgs<ExtArgs>
    _count?: boolean | BuildingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BuildingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BuildingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BuildingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Building"
    objects: {
      floors: Prisma.$FloorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["building"]>
    composites: {}
  }

  type BuildingGetPayload<S extends boolean | null | undefined | BuildingDefaultArgs> = $Result.GetResult<Prisma.$BuildingPayload, S>

  type BuildingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BuildingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BuildingCountAggregateInputType | true
    }

  export interface BuildingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Building'], meta: { name: 'Building' } }
    /**
     * Find zero or one Building that matches the filter.
     * @param {BuildingFindUniqueArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BuildingFindUniqueArgs>(args: SelectSubset<T, BuildingFindUniqueArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Building that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BuildingFindUniqueOrThrowArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BuildingFindUniqueOrThrowArgs>(args: SelectSubset<T, BuildingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Building that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingFindFirstArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BuildingFindFirstArgs>(args?: SelectSubset<T, BuildingFindFirstArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Building that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingFindFirstOrThrowArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BuildingFindFirstOrThrowArgs>(args?: SelectSubset<T, BuildingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Buildings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Buildings
     * const buildings = await prisma.building.findMany()
     * 
     * // Get first 10 Buildings
     * const buildings = await prisma.building.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const buildingWithIdOnly = await prisma.building.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BuildingFindManyArgs>(args?: SelectSubset<T, BuildingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Building.
     * @param {BuildingCreateArgs} args - Arguments to create a Building.
     * @example
     * // Create one Building
     * const Building = await prisma.building.create({
     *   data: {
     *     // ... data to create a Building
     *   }
     * })
     * 
     */
    create<T extends BuildingCreateArgs>(args: SelectSubset<T, BuildingCreateArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Buildings.
     * @param {BuildingCreateManyArgs} args - Arguments to create many Buildings.
     * @example
     * // Create many Buildings
     * const building = await prisma.building.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BuildingCreateManyArgs>(args?: SelectSubset<T, BuildingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Buildings and returns the data saved in the database.
     * @param {BuildingCreateManyAndReturnArgs} args - Arguments to create many Buildings.
     * @example
     * // Create many Buildings
     * const building = await prisma.building.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Buildings and only return the `id`
     * const buildingWithIdOnly = await prisma.building.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BuildingCreateManyAndReturnArgs>(args?: SelectSubset<T, BuildingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Building.
     * @param {BuildingDeleteArgs} args - Arguments to delete one Building.
     * @example
     * // Delete one Building
     * const Building = await prisma.building.delete({
     *   where: {
     *     // ... filter to delete one Building
     *   }
     * })
     * 
     */
    delete<T extends BuildingDeleteArgs>(args: SelectSubset<T, BuildingDeleteArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Building.
     * @param {BuildingUpdateArgs} args - Arguments to update one Building.
     * @example
     * // Update one Building
     * const building = await prisma.building.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BuildingUpdateArgs>(args: SelectSubset<T, BuildingUpdateArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Buildings.
     * @param {BuildingDeleteManyArgs} args - Arguments to filter Buildings to delete.
     * @example
     * // Delete a few Buildings
     * const { count } = await prisma.building.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BuildingDeleteManyArgs>(args?: SelectSubset<T, BuildingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buildings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Buildings
     * const building = await prisma.building.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BuildingUpdateManyArgs>(args: SelectSubset<T, BuildingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buildings and returns the data updated in the database.
     * @param {BuildingUpdateManyAndReturnArgs} args - Arguments to update many Buildings.
     * @example
     * // Update many Buildings
     * const building = await prisma.building.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Buildings and only return the `id`
     * const buildingWithIdOnly = await prisma.building.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BuildingUpdateManyAndReturnArgs>(args: SelectSubset<T, BuildingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Building.
     * @param {BuildingUpsertArgs} args - Arguments to update or create a Building.
     * @example
     * // Update or create a Building
     * const building = await prisma.building.upsert({
     *   create: {
     *     // ... data to create a Building
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Building we want to update
     *   }
     * })
     */
    upsert<T extends BuildingUpsertArgs>(args: SelectSubset<T, BuildingUpsertArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Buildings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingCountArgs} args - Arguments to filter Buildings to count.
     * @example
     * // Count the number of Buildings
     * const count = await prisma.building.count({
     *   where: {
     *     // ... the filter for the Buildings we want to count
     *   }
     * })
    **/
    count<T extends BuildingCountArgs>(
      args?: Subset<T, BuildingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BuildingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Building.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BuildingAggregateArgs>(args: Subset<T, BuildingAggregateArgs>): Prisma.PrismaPromise<GetBuildingAggregateType<T>>

    /**
     * Group by Building.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BuildingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BuildingGroupByArgs['orderBy'] }
        : { orderBy?: BuildingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BuildingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBuildingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Building model
   */
  readonly fields: BuildingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Building.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BuildingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    floors<T extends Building$floorsArgs<ExtArgs> = {}>(args?: Subset<T, Building$floorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Building model
   */
  interface BuildingFieldRefs {
    readonly id: FieldRef<"Building", 'String'>
    readonly name: FieldRef<"Building", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Building findUnique
   */
  export type BuildingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter, which Building to fetch.
     */
    where: BuildingWhereUniqueInput
  }

  /**
   * Building findUniqueOrThrow
   */
  export type BuildingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter, which Building to fetch.
     */
    where: BuildingWhereUniqueInput
  }

  /**
   * Building findFirst
   */
  export type BuildingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter, which Building to fetch.
     */
    where?: BuildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: BuildingOrderByWithRelationInput | BuildingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buildings.
     */
    cursor?: BuildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buildings.
     */
    distinct?: BuildingScalarFieldEnum | BuildingScalarFieldEnum[]
  }

  /**
   * Building findFirstOrThrow
   */
  export type BuildingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter, which Building to fetch.
     */
    where?: BuildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: BuildingOrderByWithRelationInput | BuildingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buildings.
     */
    cursor?: BuildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buildings.
     */
    distinct?: BuildingScalarFieldEnum | BuildingScalarFieldEnum[]
  }

  /**
   * Building findMany
   */
  export type BuildingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter, which Buildings to fetch.
     */
    where?: BuildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: BuildingOrderByWithRelationInput | BuildingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Buildings.
     */
    cursor?: BuildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    distinct?: BuildingScalarFieldEnum | BuildingScalarFieldEnum[]
  }

  /**
   * Building create
   */
  export type BuildingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * The data needed to create a Building.
     */
    data: XOR<BuildingCreateInput, BuildingUncheckedCreateInput>
  }

  /**
   * Building createMany
   */
  export type BuildingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Buildings.
     */
    data: BuildingCreateManyInput | BuildingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Building createManyAndReturn
   */
  export type BuildingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * The data used to create many Buildings.
     */
    data: BuildingCreateManyInput | BuildingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Building update
   */
  export type BuildingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * The data needed to update a Building.
     */
    data: XOR<BuildingUpdateInput, BuildingUncheckedUpdateInput>
    /**
     * Choose, which Building to update.
     */
    where: BuildingWhereUniqueInput
  }

  /**
   * Building updateMany
   */
  export type BuildingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Buildings.
     */
    data: XOR<BuildingUpdateManyMutationInput, BuildingUncheckedUpdateManyInput>
    /**
     * Filter which Buildings to update
     */
    where?: BuildingWhereInput
    /**
     * Limit how many Buildings to update.
     */
    limit?: number
  }

  /**
   * Building updateManyAndReturn
   */
  export type BuildingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * The data used to update Buildings.
     */
    data: XOR<BuildingUpdateManyMutationInput, BuildingUncheckedUpdateManyInput>
    /**
     * Filter which Buildings to update
     */
    where?: BuildingWhereInput
    /**
     * Limit how many Buildings to update.
     */
    limit?: number
  }

  /**
   * Building upsert
   */
  export type BuildingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * The filter to search for the Building to update in case it exists.
     */
    where: BuildingWhereUniqueInput
    /**
     * In case the Building found by the `where` argument doesn't exist, create a new Building with this data.
     */
    create: XOR<BuildingCreateInput, BuildingUncheckedCreateInput>
    /**
     * In case the Building was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BuildingUpdateInput, BuildingUncheckedUpdateInput>
  }

  /**
   * Building delete
   */
  export type BuildingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter which Building to delete.
     */
    where: BuildingWhereUniqueInput
  }

  /**
   * Building deleteMany
   */
  export type BuildingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Buildings to delete
     */
    where?: BuildingWhereInput
    /**
     * Limit how many Buildings to delete.
     */
    limit?: number
  }

  /**
   * Building.floors
   */
  export type Building$floorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    where?: FloorWhereInput
    orderBy?: FloorOrderByWithRelationInput | FloorOrderByWithRelationInput[]
    cursor?: FloorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FloorScalarFieldEnum | FloorScalarFieldEnum[]
  }

  /**
   * Building without action
   */
  export type BuildingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Building
     */
    omit?: BuildingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildingInclude<ExtArgs> | null
  }


  /**
   * Model Floor
   */

  export type AggregateFloor = {
    _count: FloorCountAggregateOutputType | null
    _avg: FloorAvgAggregateOutputType | null
    _sum: FloorSumAggregateOutputType | null
    _min: FloorMinAggregateOutputType | null
    _max: FloorMaxAggregateOutputType | null
  }

  export type FloorAvgAggregateOutputType = {
    number: number | null
  }

  export type FloorSumAggregateOutputType = {
    number: number | null
  }

  export type FloorMinAggregateOutputType = {
    id: string | null
    number: number | null
    buildingId: string | null
  }

  export type FloorMaxAggregateOutputType = {
    id: string | null
    number: number | null
    buildingId: string | null
  }

  export type FloorCountAggregateOutputType = {
    id: number
    number: number
    buildingId: number
    _all: number
  }


  export type FloorAvgAggregateInputType = {
    number?: true
  }

  export type FloorSumAggregateInputType = {
    number?: true
  }

  export type FloorMinAggregateInputType = {
    id?: true
    number?: true
    buildingId?: true
  }

  export type FloorMaxAggregateInputType = {
    id?: true
    number?: true
    buildingId?: true
  }

  export type FloorCountAggregateInputType = {
    id?: true
    number?: true
    buildingId?: true
    _all?: true
  }

  export type FloorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Floor to aggregate.
     */
    where?: FloorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Floors to fetch.
     */
    orderBy?: FloorOrderByWithRelationInput | FloorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FloorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Floors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Floors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Floors
    **/
    _count?: true | FloorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FloorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FloorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FloorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FloorMaxAggregateInputType
  }

  export type GetFloorAggregateType<T extends FloorAggregateArgs> = {
        [P in keyof T & keyof AggregateFloor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFloor[P]>
      : GetScalarType<T[P], AggregateFloor[P]>
  }




  export type FloorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FloorWhereInput
    orderBy?: FloorOrderByWithAggregationInput | FloorOrderByWithAggregationInput[]
    by: FloorScalarFieldEnum[] | FloorScalarFieldEnum
    having?: FloorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FloorCountAggregateInputType | true
    _avg?: FloorAvgAggregateInputType
    _sum?: FloorSumAggregateInputType
    _min?: FloorMinAggregateInputType
    _max?: FloorMaxAggregateInputType
  }

  export type FloorGroupByOutputType = {
    id: string
    number: number
    buildingId: string
    _count: FloorCountAggregateOutputType | null
    _avg: FloorAvgAggregateOutputType | null
    _sum: FloorSumAggregateOutputType | null
    _min: FloorMinAggregateOutputType | null
    _max: FloorMaxAggregateOutputType | null
  }

  type GetFloorGroupByPayload<T extends FloorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FloorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FloorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FloorGroupByOutputType[P]>
            : GetScalarType<T[P], FloorGroupByOutputType[P]>
        }
      >
    >


  export type FloorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    buildingId?: boolean
    building?: boolean | BuildingDefaultArgs<ExtArgs>
    rooms?: boolean | Floor$roomsArgs<ExtArgs>
    _count?: boolean | FloorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["floor"]>

  export type FloorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    buildingId?: boolean
    building?: boolean | BuildingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["floor"]>

  export type FloorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    buildingId?: boolean
    building?: boolean | BuildingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["floor"]>

  export type FloorSelectScalar = {
    id?: boolean
    number?: boolean
    buildingId?: boolean
  }

  export type FloorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "number" | "buildingId", ExtArgs["result"]["floor"]>
  export type FloorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    building?: boolean | BuildingDefaultArgs<ExtArgs>
    rooms?: boolean | Floor$roomsArgs<ExtArgs>
    _count?: boolean | FloorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FloorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    building?: boolean | BuildingDefaultArgs<ExtArgs>
  }
  export type FloorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    building?: boolean | BuildingDefaultArgs<ExtArgs>
  }

  export type $FloorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Floor"
    objects: {
      building: Prisma.$BuildingPayload<ExtArgs>
      rooms: Prisma.$RoomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      number: number
      buildingId: string
    }, ExtArgs["result"]["floor"]>
    composites: {}
  }

  type FloorGetPayload<S extends boolean | null | undefined | FloorDefaultArgs> = $Result.GetResult<Prisma.$FloorPayload, S>

  type FloorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FloorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FloorCountAggregateInputType | true
    }

  export interface FloorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Floor'], meta: { name: 'Floor' } }
    /**
     * Find zero or one Floor that matches the filter.
     * @param {FloorFindUniqueArgs} args - Arguments to find a Floor
     * @example
     * // Get one Floor
     * const floor = await prisma.floor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FloorFindUniqueArgs>(args: SelectSubset<T, FloorFindUniqueArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Floor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FloorFindUniqueOrThrowArgs} args - Arguments to find a Floor
     * @example
     * // Get one Floor
     * const floor = await prisma.floor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FloorFindUniqueOrThrowArgs>(args: SelectSubset<T, FloorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Floor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorFindFirstArgs} args - Arguments to find a Floor
     * @example
     * // Get one Floor
     * const floor = await prisma.floor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FloorFindFirstArgs>(args?: SelectSubset<T, FloorFindFirstArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Floor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorFindFirstOrThrowArgs} args - Arguments to find a Floor
     * @example
     * // Get one Floor
     * const floor = await prisma.floor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FloorFindFirstOrThrowArgs>(args?: SelectSubset<T, FloorFindFirstOrThrowArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Floors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Floors
     * const floors = await prisma.floor.findMany()
     * 
     * // Get first 10 Floors
     * const floors = await prisma.floor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const floorWithIdOnly = await prisma.floor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FloorFindManyArgs>(args?: SelectSubset<T, FloorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Floor.
     * @param {FloorCreateArgs} args - Arguments to create a Floor.
     * @example
     * // Create one Floor
     * const Floor = await prisma.floor.create({
     *   data: {
     *     // ... data to create a Floor
     *   }
     * })
     * 
     */
    create<T extends FloorCreateArgs>(args: SelectSubset<T, FloorCreateArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Floors.
     * @param {FloorCreateManyArgs} args - Arguments to create many Floors.
     * @example
     * // Create many Floors
     * const floor = await prisma.floor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FloorCreateManyArgs>(args?: SelectSubset<T, FloorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Floors and returns the data saved in the database.
     * @param {FloorCreateManyAndReturnArgs} args - Arguments to create many Floors.
     * @example
     * // Create many Floors
     * const floor = await prisma.floor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Floors and only return the `id`
     * const floorWithIdOnly = await prisma.floor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FloorCreateManyAndReturnArgs>(args?: SelectSubset<T, FloorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Floor.
     * @param {FloorDeleteArgs} args - Arguments to delete one Floor.
     * @example
     * // Delete one Floor
     * const Floor = await prisma.floor.delete({
     *   where: {
     *     // ... filter to delete one Floor
     *   }
     * })
     * 
     */
    delete<T extends FloorDeleteArgs>(args: SelectSubset<T, FloorDeleteArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Floor.
     * @param {FloorUpdateArgs} args - Arguments to update one Floor.
     * @example
     * // Update one Floor
     * const floor = await prisma.floor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FloorUpdateArgs>(args: SelectSubset<T, FloorUpdateArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Floors.
     * @param {FloorDeleteManyArgs} args - Arguments to filter Floors to delete.
     * @example
     * // Delete a few Floors
     * const { count } = await prisma.floor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FloorDeleteManyArgs>(args?: SelectSubset<T, FloorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Floors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Floors
     * const floor = await prisma.floor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FloorUpdateManyArgs>(args: SelectSubset<T, FloorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Floors and returns the data updated in the database.
     * @param {FloorUpdateManyAndReturnArgs} args - Arguments to update many Floors.
     * @example
     * // Update many Floors
     * const floor = await prisma.floor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Floors and only return the `id`
     * const floorWithIdOnly = await prisma.floor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FloorUpdateManyAndReturnArgs>(args: SelectSubset<T, FloorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Floor.
     * @param {FloorUpsertArgs} args - Arguments to update or create a Floor.
     * @example
     * // Update or create a Floor
     * const floor = await prisma.floor.upsert({
     *   create: {
     *     // ... data to create a Floor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Floor we want to update
     *   }
     * })
     */
    upsert<T extends FloorUpsertArgs>(args: SelectSubset<T, FloorUpsertArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Floors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorCountArgs} args - Arguments to filter Floors to count.
     * @example
     * // Count the number of Floors
     * const count = await prisma.floor.count({
     *   where: {
     *     // ... the filter for the Floors we want to count
     *   }
     * })
    **/
    count<T extends FloorCountArgs>(
      args?: Subset<T, FloorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FloorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Floor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FloorAggregateArgs>(args: Subset<T, FloorAggregateArgs>): Prisma.PrismaPromise<GetFloorAggregateType<T>>

    /**
     * Group by Floor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FloorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FloorGroupByArgs['orderBy'] }
        : { orderBy?: FloorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FloorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFloorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Floor model
   */
  readonly fields: FloorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Floor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FloorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    building<T extends BuildingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BuildingDefaultArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rooms<T extends Floor$roomsArgs<ExtArgs> = {}>(args?: Subset<T, Floor$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Floor model
   */
  interface FloorFieldRefs {
    readonly id: FieldRef<"Floor", 'String'>
    readonly number: FieldRef<"Floor", 'Int'>
    readonly buildingId: FieldRef<"Floor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Floor findUnique
   */
  export type FloorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter, which Floor to fetch.
     */
    where: FloorWhereUniqueInput
  }

  /**
   * Floor findUniqueOrThrow
   */
  export type FloorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter, which Floor to fetch.
     */
    where: FloorWhereUniqueInput
  }

  /**
   * Floor findFirst
   */
  export type FloorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter, which Floor to fetch.
     */
    where?: FloorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Floors to fetch.
     */
    orderBy?: FloorOrderByWithRelationInput | FloorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Floors.
     */
    cursor?: FloorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Floors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Floors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Floors.
     */
    distinct?: FloorScalarFieldEnum | FloorScalarFieldEnum[]
  }

  /**
   * Floor findFirstOrThrow
   */
  export type FloorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter, which Floor to fetch.
     */
    where?: FloorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Floors to fetch.
     */
    orderBy?: FloorOrderByWithRelationInput | FloorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Floors.
     */
    cursor?: FloorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Floors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Floors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Floors.
     */
    distinct?: FloorScalarFieldEnum | FloorScalarFieldEnum[]
  }

  /**
   * Floor findMany
   */
  export type FloorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter, which Floors to fetch.
     */
    where?: FloorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Floors to fetch.
     */
    orderBy?: FloorOrderByWithRelationInput | FloorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Floors.
     */
    cursor?: FloorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Floors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Floors.
     */
    skip?: number
    distinct?: FloorScalarFieldEnum | FloorScalarFieldEnum[]
  }

  /**
   * Floor create
   */
  export type FloorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * The data needed to create a Floor.
     */
    data: XOR<FloorCreateInput, FloorUncheckedCreateInput>
  }

  /**
   * Floor createMany
   */
  export type FloorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Floors.
     */
    data: FloorCreateManyInput | FloorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Floor createManyAndReturn
   */
  export type FloorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * The data used to create many Floors.
     */
    data: FloorCreateManyInput | FloorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Floor update
   */
  export type FloorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * The data needed to update a Floor.
     */
    data: XOR<FloorUpdateInput, FloorUncheckedUpdateInput>
    /**
     * Choose, which Floor to update.
     */
    where: FloorWhereUniqueInput
  }

  /**
   * Floor updateMany
   */
  export type FloorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Floors.
     */
    data: XOR<FloorUpdateManyMutationInput, FloorUncheckedUpdateManyInput>
    /**
     * Filter which Floors to update
     */
    where?: FloorWhereInput
    /**
     * Limit how many Floors to update.
     */
    limit?: number
  }

  /**
   * Floor updateManyAndReturn
   */
  export type FloorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * The data used to update Floors.
     */
    data: XOR<FloorUpdateManyMutationInput, FloorUncheckedUpdateManyInput>
    /**
     * Filter which Floors to update
     */
    where?: FloorWhereInput
    /**
     * Limit how many Floors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Floor upsert
   */
  export type FloorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * The filter to search for the Floor to update in case it exists.
     */
    where: FloorWhereUniqueInput
    /**
     * In case the Floor found by the `where` argument doesn't exist, create a new Floor with this data.
     */
    create: XOR<FloorCreateInput, FloorUncheckedCreateInput>
    /**
     * In case the Floor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FloorUpdateInput, FloorUncheckedUpdateInput>
  }

  /**
   * Floor delete
   */
  export type FloorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter which Floor to delete.
     */
    where: FloorWhereUniqueInput
  }

  /**
   * Floor deleteMany
   */
  export type FloorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Floors to delete
     */
    where?: FloorWhereInput
    /**
     * Limit how many Floors to delete.
     */
    limit?: number
  }

  /**
   * Floor.rooms
   */
  export type Floor$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Floor without action
   */
  export type FloorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomMinAggregateOutputType = {
    id: string | null
    name: string | null
    floorId: string | null
  }

  export type RoomMaxAggregateOutputType = {
    id: string | null
    name: string | null
    floorId: string | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    name: number
    floorId: number
    _all: number
  }


  export type RoomMinAggregateInputType = {
    id?: true
    name?: true
    floorId?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    name?: true
    floorId?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    name?: true
    floorId?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: string
    name: string
    floorId: string
    _count: RoomCountAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    floorId?: boolean
    floor?: boolean | FloorDefaultArgs<ExtArgs>
    devices?: boolean | Room$devicesArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    floorId?: boolean
    floor?: boolean | FloorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    floorId?: boolean
    floor?: boolean | FloorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    name?: boolean
    floorId?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "floorId", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    floor?: boolean | FloorDefaultArgs<ExtArgs>
    devices?: boolean | Room$devicesArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    floor?: boolean | FloorDefaultArgs<ExtArgs>
  }
  export type RoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    floor?: boolean | FloorDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      floor: Prisma.$FloorPayload<ExtArgs>
      devices: Prisma.$DeviceRoomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      floorId: string
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    floor<T extends FloorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FloorDefaultArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    devices<T extends Room$devicesArgs<ExtArgs> = {}>(args?: Subset<T, Room$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'String'>
    readonly name: FieldRef<"Room", 'String'>
    readonly floorId: FieldRef<"Room", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room updateManyAndReturn
   */
  export type RoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.devices
   */
  export type Room$devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceRoom
     */
    select?: DeviceRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceRoom
     */
    omit?: DeviceRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceRoomInclude<ExtArgs> | null
    where?: DeviceRoomWhereInput
    orderBy?: DeviceRoomOrderByWithRelationInput | DeviceRoomOrderByWithRelationInput[]
    cursor?: DeviceRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceRoomScalarFieldEnum | DeviceRoomScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceMinAggregateOutputType = {
    id: string | null
    name: string | null
    status: string | null
    type: $Enums.DEVICETYPE | null
  }

  export type DeviceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    status: string | null
    type: $Enums.DEVICETYPE | null
  }

  export type DeviceCountAggregateOutputType = {
    id: number
    name: number
    status: number
    type: number
    _all: number
  }


  export type DeviceMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
    type?: true
  }

  export type DeviceMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    type?: true
  }

  export type DeviceCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    type?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type DeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: DeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    id: string
    name: string
    status: string
    type: $Enums.DEVICETYPE
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    type?: boolean
    rooms?: boolean | Device$roomsArgs<ExtArgs>
    deviceTriggers?: boolean | Device$deviceTriggersArgs<ExtArgs>
    deviceActions?: boolean | Device$deviceActionsArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    type?: boolean
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    type?: boolean
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
    type?: boolean
  }

  export type DeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "status" | "type", ExtArgs["result"]["device"]>
  export type DeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | Device$roomsArgs<ExtArgs>
    deviceTriggers?: boolean | Device$deviceTriggersArgs<ExtArgs>
    deviceActions?: boolean | Device$deviceActionsArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {
      rooms: Prisma.$DeviceRoomPayload<ExtArgs>[]
      deviceTriggers: Prisma.$TriggerDevicePayload<ExtArgs>[]
      deviceActions: Prisma.$ActionDevicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      status: string
      type: $Enums.DEVICETYPE
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = $Result.GetResult<Prisma.$DevicePayload, S>

  type DeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface DeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Device'], meta: { name: 'Device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceFindManyArgs>(args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends DeviceCreateArgs>(args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceCreateManyArgs>(args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devices and returns the data saved in the database.
     * @param {DeviceCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends DeviceDeleteArgs>(args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceUpdateArgs>(args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceDeleteManyArgs>(args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceUpdateManyArgs>(args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices and returns the data updated in the database.
     * @param {DeviceUpdateManyAndReturnArgs} args - Arguments to update many Devices.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs['orderBy'] }
        : { orderBy?: DeviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Device model
   */
  readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rooms<T extends Device$roomsArgs<ExtArgs> = {}>(args?: Subset<T, Device$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deviceTriggers<T extends Device$deviceTriggersArgs<ExtArgs> = {}>(args?: Subset<T, Device$deviceTriggersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerDevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deviceActions<T extends Device$deviceActionsArgs<ExtArgs> = {}>(args?: Subset<T, Device$deviceActionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionDevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Device model
   */
  interface DeviceFieldRefs {
    readonly id: FieldRef<"Device", 'String'>
    readonly name: FieldRef<"Device", 'String'>
    readonly status: FieldRef<"Device", 'String'>
    readonly type: FieldRef<"Device", 'DEVICETYPE'>
  }
    

  // Custom InputTypes
  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device create
   */
  export type DeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a Device.
     */
    data: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
  }

  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device createManyAndReturn
   */
  export type DeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device update
   */
  export type DeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Device updateManyAndReturn
   */
  export type DeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
  }

  /**
   * Device delete
   */
  export type DeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to delete.
     */
    limit?: number
  }

  /**
   * Device.rooms
   */
  export type Device$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceRoom
     */
    select?: DeviceRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceRoom
     */
    omit?: DeviceRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceRoomInclude<ExtArgs> | null
    where?: DeviceRoomWhereInput
    orderBy?: DeviceRoomOrderByWithRelationInput | DeviceRoomOrderByWithRelationInput[]
    cursor?: DeviceRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceRoomScalarFieldEnum | DeviceRoomScalarFieldEnum[]
  }

  /**
   * Device.deviceTriggers
   */
  export type Device$deviceTriggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerDevice
     */
    select?: TriggerDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerDevice
     */
    omit?: TriggerDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerDeviceInclude<ExtArgs> | null
    where?: TriggerDeviceWhereInput
    orderBy?: TriggerDeviceOrderByWithRelationInput | TriggerDeviceOrderByWithRelationInput[]
    cursor?: TriggerDeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TriggerDeviceScalarFieldEnum | TriggerDeviceScalarFieldEnum[]
  }

  /**
   * Device.deviceActions
   */
  export type Device$deviceActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionDevice
     */
    select?: ActionDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionDevice
     */
    omit?: ActionDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionDeviceInclude<ExtArgs> | null
    where?: ActionDeviceWhereInput
    orderBy?: ActionDeviceOrderByWithRelationInput | ActionDeviceOrderByWithRelationInput[]
    cursor?: ActionDeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionDeviceScalarFieldEnum | ActionDeviceScalarFieldEnum[]
  }

  /**
   * Device without action
   */
  export type DeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
  }


  /**
   * Model DeviceRoom
   */

  export type AggregateDeviceRoom = {
    _count: DeviceRoomCountAggregateOutputType | null
    _min: DeviceRoomMinAggregateOutputType | null
    _max: DeviceRoomMaxAggregateOutputType | null
  }

  export type DeviceRoomMinAggregateOutputType = {
    deviceId: string | null
    roomId: string | null
  }

  export type DeviceRoomMaxAggregateOutputType = {
    deviceId: string | null
    roomId: string | null
  }

  export type DeviceRoomCountAggregateOutputType = {
    deviceId: number
    roomId: number
    _all: number
  }


  export type DeviceRoomMinAggregateInputType = {
    deviceId?: true
    roomId?: true
  }

  export type DeviceRoomMaxAggregateInputType = {
    deviceId?: true
    roomId?: true
  }

  export type DeviceRoomCountAggregateInputType = {
    deviceId?: true
    roomId?: true
    _all?: true
  }

  export type DeviceRoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceRoom to aggregate.
     */
    where?: DeviceRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceRooms to fetch.
     */
    orderBy?: DeviceRoomOrderByWithRelationInput | DeviceRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeviceRooms
    **/
    _count?: true | DeviceRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceRoomMaxAggregateInputType
  }

  export type GetDeviceRoomAggregateType<T extends DeviceRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateDeviceRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeviceRoom[P]>
      : GetScalarType<T[P], AggregateDeviceRoom[P]>
  }




  export type DeviceRoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceRoomWhereInput
    orderBy?: DeviceRoomOrderByWithAggregationInput | DeviceRoomOrderByWithAggregationInput[]
    by: DeviceRoomScalarFieldEnum[] | DeviceRoomScalarFieldEnum
    having?: DeviceRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceRoomCountAggregateInputType | true
    _min?: DeviceRoomMinAggregateInputType
    _max?: DeviceRoomMaxAggregateInputType
  }

  export type DeviceRoomGroupByOutputType = {
    deviceId: string
    roomId: string
    _count: DeviceRoomCountAggregateOutputType | null
    _min: DeviceRoomMinAggregateOutputType | null
    _max: DeviceRoomMaxAggregateOutputType | null
  }

  type GetDeviceRoomGroupByPayload<T extends DeviceRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceRoomGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceRoomGroupByOutputType[P]>
        }
      >
    >


  export type DeviceRoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deviceId?: boolean
    roomId?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceRoom"]>

  export type DeviceRoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deviceId?: boolean
    roomId?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceRoom"]>

  export type DeviceRoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deviceId?: boolean
    roomId?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceRoom"]>

  export type DeviceRoomSelectScalar = {
    deviceId?: boolean
    roomId?: boolean
  }

  export type DeviceRoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"deviceId" | "roomId", ExtArgs["result"]["deviceRoom"]>
  export type DeviceRoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type DeviceRoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type DeviceRoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $DeviceRoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeviceRoom"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs>
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      deviceId: string
      roomId: string
    }, ExtArgs["result"]["deviceRoom"]>
    composites: {}
  }

  type DeviceRoomGetPayload<S extends boolean | null | undefined | DeviceRoomDefaultArgs> = $Result.GetResult<Prisma.$DeviceRoomPayload, S>

  type DeviceRoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceRoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceRoomCountAggregateInputType | true
    }

  export interface DeviceRoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeviceRoom'], meta: { name: 'DeviceRoom' } }
    /**
     * Find zero or one DeviceRoom that matches the filter.
     * @param {DeviceRoomFindUniqueArgs} args - Arguments to find a DeviceRoom
     * @example
     * // Get one DeviceRoom
     * const deviceRoom = await prisma.deviceRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceRoomFindUniqueArgs>(args: SelectSubset<T, DeviceRoomFindUniqueArgs<ExtArgs>>): Prisma__DeviceRoomClient<$Result.GetResult<Prisma.$DeviceRoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeviceRoom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceRoomFindUniqueOrThrowArgs} args - Arguments to find a DeviceRoom
     * @example
     * // Get one DeviceRoom
     * const deviceRoom = await prisma.deviceRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceRoomFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceRoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceRoomClient<$Result.GetResult<Prisma.$DeviceRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceRoomFindFirstArgs} args - Arguments to find a DeviceRoom
     * @example
     * // Get one DeviceRoom
     * const deviceRoom = await prisma.deviceRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceRoomFindFirstArgs>(args?: SelectSubset<T, DeviceRoomFindFirstArgs<ExtArgs>>): Prisma__DeviceRoomClient<$Result.GetResult<Prisma.$DeviceRoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceRoom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceRoomFindFirstOrThrowArgs} args - Arguments to find a DeviceRoom
     * @example
     * // Get one DeviceRoom
     * const deviceRoom = await prisma.deviceRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceRoomFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceRoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceRoomClient<$Result.GetResult<Prisma.$DeviceRoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeviceRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceRoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceRooms
     * const deviceRooms = await prisma.deviceRoom.findMany()
     * 
     * // Get first 10 DeviceRooms
     * const deviceRooms = await prisma.deviceRoom.findMany({ take: 10 })
     * 
     * // Only select the `deviceId`
     * const deviceRoomWithDeviceIdOnly = await prisma.deviceRoom.findMany({ select: { deviceId: true } })
     * 
     */
    findMany<T extends DeviceRoomFindManyArgs>(args?: SelectSubset<T, DeviceRoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeviceRoom.
     * @param {DeviceRoomCreateArgs} args - Arguments to create a DeviceRoom.
     * @example
     * // Create one DeviceRoom
     * const DeviceRoom = await prisma.deviceRoom.create({
     *   data: {
     *     // ... data to create a DeviceRoom
     *   }
     * })
     * 
     */
    create<T extends DeviceRoomCreateArgs>(args: SelectSubset<T, DeviceRoomCreateArgs<ExtArgs>>): Prisma__DeviceRoomClient<$Result.GetResult<Prisma.$DeviceRoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeviceRooms.
     * @param {DeviceRoomCreateManyArgs} args - Arguments to create many DeviceRooms.
     * @example
     * // Create many DeviceRooms
     * const deviceRoom = await prisma.deviceRoom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceRoomCreateManyArgs>(args?: SelectSubset<T, DeviceRoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeviceRooms and returns the data saved in the database.
     * @param {DeviceRoomCreateManyAndReturnArgs} args - Arguments to create many DeviceRooms.
     * @example
     * // Create many DeviceRooms
     * const deviceRoom = await prisma.deviceRoom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeviceRooms and only return the `deviceId`
     * const deviceRoomWithDeviceIdOnly = await prisma.deviceRoom.createManyAndReturn({
     *   select: { deviceId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceRoomCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceRoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceRoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeviceRoom.
     * @param {DeviceRoomDeleteArgs} args - Arguments to delete one DeviceRoom.
     * @example
     * // Delete one DeviceRoom
     * const DeviceRoom = await prisma.deviceRoom.delete({
     *   where: {
     *     // ... filter to delete one DeviceRoom
     *   }
     * })
     * 
     */
    delete<T extends DeviceRoomDeleteArgs>(args: SelectSubset<T, DeviceRoomDeleteArgs<ExtArgs>>): Prisma__DeviceRoomClient<$Result.GetResult<Prisma.$DeviceRoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeviceRoom.
     * @param {DeviceRoomUpdateArgs} args - Arguments to update one DeviceRoom.
     * @example
     * // Update one DeviceRoom
     * const deviceRoom = await prisma.deviceRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceRoomUpdateArgs>(args: SelectSubset<T, DeviceRoomUpdateArgs<ExtArgs>>): Prisma__DeviceRoomClient<$Result.GetResult<Prisma.$DeviceRoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeviceRooms.
     * @param {DeviceRoomDeleteManyArgs} args - Arguments to filter DeviceRooms to delete.
     * @example
     * // Delete a few DeviceRooms
     * const { count } = await prisma.deviceRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceRoomDeleteManyArgs>(args?: SelectSubset<T, DeviceRoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceRooms
     * const deviceRoom = await prisma.deviceRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceRoomUpdateManyArgs>(args: SelectSubset<T, DeviceRoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceRooms and returns the data updated in the database.
     * @param {DeviceRoomUpdateManyAndReturnArgs} args - Arguments to update many DeviceRooms.
     * @example
     * // Update many DeviceRooms
     * const deviceRoom = await prisma.deviceRoom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeviceRooms and only return the `deviceId`
     * const deviceRoomWithDeviceIdOnly = await prisma.deviceRoom.updateManyAndReturn({
     *   select: { deviceId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeviceRoomUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceRoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceRoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeviceRoom.
     * @param {DeviceRoomUpsertArgs} args - Arguments to update or create a DeviceRoom.
     * @example
     * // Update or create a DeviceRoom
     * const deviceRoom = await prisma.deviceRoom.upsert({
     *   create: {
     *     // ... data to create a DeviceRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceRoom we want to update
     *   }
     * })
     */
    upsert<T extends DeviceRoomUpsertArgs>(args: SelectSubset<T, DeviceRoomUpsertArgs<ExtArgs>>): Prisma__DeviceRoomClient<$Result.GetResult<Prisma.$DeviceRoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeviceRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceRoomCountArgs} args - Arguments to filter DeviceRooms to count.
     * @example
     * // Count the number of DeviceRooms
     * const count = await prisma.deviceRoom.count({
     *   where: {
     *     // ... the filter for the DeviceRooms we want to count
     *   }
     * })
    **/
    count<T extends DeviceRoomCountArgs>(
      args?: Subset<T, DeviceRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeviceRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeviceRoomAggregateArgs>(args: Subset<T, DeviceRoomAggregateArgs>): Prisma.PrismaPromise<GetDeviceRoomAggregateType<T>>

    /**
     * Group by DeviceRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceRoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeviceRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceRoomGroupByArgs['orderBy'] }
        : { orderBy?: DeviceRoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeviceRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeviceRoom model
   */
  readonly fields: DeviceRoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeviceRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceRoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeviceRoom model
   */
  interface DeviceRoomFieldRefs {
    readonly deviceId: FieldRef<"DeviceRoom", 'String'>
    readonly roomId: FieldRef<"DeviceRoom", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DeviceRoom findUnique
   */
  export type DeviceRoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceRoom
     */
    select?: DeviceRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceRoom
     */
    omit?: DeviceRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceRoomInclude<ExtArgs> | null
    /**
     * Filter, which DeviceRoom to fetch.
     */
    where: DeviceRoomWhereUniqueInput
  }

  /**
   * DeviceRoom findUniqueOrThrow
   */
  export type DeviceRoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceRoom
     */
    select?: DeviceRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceRoom
     */
    omit?: DeviceRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceRoomInclude<ExtArgs> | null
    /**
     * Filter, which DeviceRoom to fetch.
     */
    where: DeviceRoomWhereUniqueInput
  }

  /**
   * DeviceRoom findFirst
   */
  export type DeviceRoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceRoom
     */
    select?: DeviceRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceRoom
     */
    omit?: DeviceRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceRoomInclude<ExtArgs> | null
    /**
     * Filter, which DeviceRoom to fetch.
     */
    where?: DeviceRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceRooms to fetch.
     */
    orderBy?: DeviceRoomOrderByWithRelationInput | DeviceRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceRooms.
     */
    cursor?: DeviceRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceRooms.
     */
    distinct?: DeviceRoomScalarFieldEnum | DeviceRoomScalarFieldEnum[]
  }

  /**
   * DeviceRoom findFirstOrThrow
   */
  export type DeviceRoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceRoom
     */
    select?: DeviceRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceRoom
     */
    omit?: DeviceRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceRoomInclude<ExtArgs> | null
    /**
     * Filter, which DeviceRoom to fetch.
     */
    where?: DeviceRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceRooms to fetch.
     */
    orderBy?: DeviceRoomOrderByWithRelationInput | DeviceRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceRooms.
     */
    cursor?: DeviceRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceRooms.
     */
    distinct?: DeviceRoomScalarFieldEnum | DeviceRoomScalarFieldEnum[]
  }

  /**
   * DeviceRoom findMany
   */
  export type DeviceRoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceRoom
     */
    select?: DeviceRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceRoom
     */
    omit?: DeviceRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceRoomInclude<ExtArgs> | null
    /**
     * Filter, which DeviceRooms to fetch.
     */
    where?: DeviceRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceRooms to fetch.
     */
    orderBy?: DeviceRoomOrderByWithRelationInput | DeviceRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeviceRooms.
     */
    cursor?: DeviceRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceRooms.
     */
    skip?: number
    distinct?: DeviceRoomScalarFieldEnum | DeviceRoomScalarFieldEnum[]
  }

  /**
   * DeviceRoom create
   */
  export type DeviceRoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceRoom
     */
    select?: DeviceRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceRoom
     */
    omit?: DeviceRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceRoomInclude<ExtArgs> | null
    /**
     * The data needed to create a DeviceRoom.
     */
    data: XOR<DeviceRoomCreateInput, DeviceRoomUncheckedCreateInput>
  }

  /**
   * DeviceRoom createMany
   */
  export type DeviceRoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeviceRooms.
     */
    data: DeviceRoomCreateManyInput | DeviceRoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeviceRoom createManyAndReturn
   */
  export type DeviceRoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceRoom
     */
    select?: DeviceRoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceRoom
     */
    omit?: DeviceRoomOmit<ExtArgs> | null
    /**
     * The data used to create many DeviceRooms.
     */
    data: DeviceRoomCreateManyInput | DeviceRoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceRoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeviceRoom update
   */
  export type DeviceRoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceRoom
     */
    select?: DeviceRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceRoom
     */
    omit?: DeviceRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceRoomInclude<ExtArgs> | null
    /**
     * The data needed to update a DeviceRoom.
     */
    data: XOR<DeviceRoomUpdateInput, DeviceRoomUncheckedUpdateInput>
    /**
     * Choose, which DeviceRoom to update.
     */
    where: DeviceRoomWhereUniqueInput
  }

  /**
   * DeviceRoom updateMany
   */
  export type DeviceRoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeviceRooms.
     */
    data: XOR<DeviceRoomUpdateManyMutationInput, DeviceRoomUncheckedUpdateManyInput>
    /**
     * Filter which DeviceRooms to update
     */
    where?: DeviceRoomWhereInput
    /**
     * Limit how many DeviceRooms to update.
     */
    limit?: number
  }

  /**
   * DeviceRoom updateManyAndReturn
   */
  export type DeviceRoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceRoom
     */
    select?: DeviceRoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceRoom
     */
    omit?: DeviceRoomOmit<ExtArgs> | null
    /**
     * The data used to update DeviceRooms.
     */
    data: XOR<DeviceRoomUpdateManyMutationInput, DeviceRoomUncheckedUpdateManyInput>
    /**
     * Filter which DeviceRooms to update
     */
    where?: DeviceRoomWhereInput
    /**
     * Limit how many DeviceRooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceRoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeviceRoom upsert
   */
  export type DeviceRoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceRoom
     */
    select?: DeviceRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceRoom
     */
    omit?: DeviceRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceRoomInclude<ExtArgs> | null
    /**
     * The filter to search for the DeviceRoom to update in case it exists.
     */
    where: DeviceRoomWhereUniqueInput
    /**
     * In case the DeviceRoom found by the `where` argument doesn't exist, create a new DeviceRoom with this data.
     */
    create: XOR<DeviceRoomCreateInput, DeviceRoomUncheckedCreateInput>
    /**
     * In case the DeviceRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceRoomUpdateInput, DeviceRoomUncheckedUpdateInput>
  }

  /**
   * DeviceRoom delete
   */
  export type DeviceRoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceRoom
     */
    select?: DeviceRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceRoom
     */
    omit?: DeviceRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceRoomInclude<ExtArgs> | null
    /**
     * Filter which DeviceRoom to delete.
     */
    where: DeviceRoomWhereUniqueInput
  }

  /**
   * DeviceRoom deleteMany
   */
  export type DeviceRoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceRooms to delete
     */
    where?: DeviceRoomWhereInput
    /**
     * Limit how many DeviceRooms to delete.
     */
    limit?: number
  }

  /**
   * DeviceRoom without action
   */
  export type DeviceRoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceRoom
     */
    select?: DeviceRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceRoom
     */
    omit?: DeviceRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceRoomInclude<ExtArgs> | null
  }


  /**
   * Model Automation
   */

  export type AggregateAutomation = {
    _count: AutomationCountAggregateOutputType | null
    _min: AutomationMinAggregateOutputType | null
    _max: AutomationMaxAggregateOutputType | null
  }

  export type AutomationMinAggregateOutputType = {
    id: string | null
    name: string | null
    enabled: boolean | null
    triggerId: string | null
    scheduleId: string | null
  }

  export type AutomationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    enabled: boolean | null
    triggerId: string | null
    scheduleId: string | null
  }

  export type AutomationCountAggregateOutputType = {
    id: number
    name: number
    enabled: number
    triggerId: number
    scheduleId: number
    _all: number
  }


  export type AutomationMinAggregateInputType = {
    id?: true
    name?: true
    enabled?: true
    triggerId?: true
    scheduleId?: true
  }

  export type AutomationMaxAggregateInputType = {
    id?: true
    name?: true
    enabled?: true
    triggerId?: true
    scheduleId?: true
  }

  export type AutomationCountAggregateInputType = {
    id?: true
    name?: true
    enabled?: true
    triggerId?: true
    scheduleId?: true
    _all?: true
  }

  export type AutomationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Automation to aggregate.
     */
    where?: AutomationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Automations to fetch.
     */
    orderBy?: AutomationOrderByWithRelationInput | AutomationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AutomationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Automations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Automations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Automations
    **/
    _count?: true | AutomationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AutomationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AutomationMaxAggregateInputType
  }

  export type GetAutomationAggregateType<T extends AutomationAggregateArgs> = {
        [P in keyof T & keyof AggregateAutomation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAutomation[P]>
      : GetScalarType<T[P], AggregateAutomation[P]>
  }




  export type AutomationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutomationWhereInput
    orderBy?: AutomationOrderByWithAggregationInput | AutomationOrderByWithAggregationInput[]
    by: AutomationScalarFieldEnum[] | AutomationScalarFieldEnum
    having?: AutomationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AutomationCountAggregateInputType | true
    _min?: AutomationMinAggregateInputType
    _max?: AutomationMaxAggregateInputType
  }

  export type AutomationGroupByOutputType = {
    id: string
    name: string
    enabled: boolean
    triggerId: string | null
    scheduleId: string | null
    _count: AutomationCountAggregateOutputType | null
    _min: AutomationMinAggregateOutputType | null
    _max: AutomationMaxAggregateOutputType | null
  }

  type GetAutomationGroupByPayload<T extends AutomationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AutomationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AutomationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AutomationGroupByOutputType[P]>
            : GetScalarType<T[P], AutomationGroupByOutputType[P]>
        }
      >
    >


  export type AutomationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    enabled?: boolean
    triggerId?: boolean
    scheduleId?: boolean
    trigger?: boolean | Automation$triggerArgs<ExtArgs>
    actions?: boolean | Automation$actionsArgs<ExtArgs>
    schedule?: boolean | Automation$scheduleArgs<ExtArgs>
    _count?: boolean | AutomationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["automation"]>

  export type AutomationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    enabled?: boolean
    triggerId?: boolean
    scheduleId?: boolean
    trigger?: boolean | Automation$triggerArgs<ExtArgs>
    schedule?: boolean | Automation$scheduleArgs<ExtArgs>
  }, ExtArgs["result"]["automation"]>

  export type AutomationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    enabled?: boolean
    triggerId?: boolean
    scheduleId?: boolean
    trigger?: boolean | Automation$triggerArgs<ExtArgs>
    schedule?: boolean | Automation$scheduleArgs<ExtArgs>
  }, ExtArgs["result"]["automation"]>

  export type AutomationSelectScalar = {
    id?: boolean
    name?: boolean
    enabled?: boolean
    triggerId?: boolean
    scheduleId?: boolean
  }

  export type AutomationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "enabled" | "triggerId" | "scheduleId", ExtArgs["result"]["automation"]>
  export type AutomationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trigger?: boolean | Automation$triggerArgs<ExtArgs>
    actions?: boolean | Automation$actionsArgs<ExtArgs>
    schedule?: boolean | Automation$scheduleArgs<ExtArgs>
    _count?: boolean | AutomationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AutomationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trigger?: boolean | Automation$triggerArgs<ExtArgs>
    schedule?: boolean | Automation$scheduleArgs<ExtArgs>
  }
  export type AutomationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trigger?: boolean | Automation$triggerArgs<ExtArgs>
    schedule?: boolean | Automation$scheduleArgs<ExtArgs>
  }

  export type $AutomationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Automation"
    objects: {
      trigger: Prisma.$TriggerPayload<ExtArgs> | null
      actions: Prisma.$ActionPayload<ExtArgs>[]
      schedule: Prisma.$SchedulePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      enabled: boolean
      triggerId: string | null
      scheduleId: string | null
    }, ExtArgs["result"]["automation"]>
    composites: {}
  }

  type AutomationGetPayload<S extends boolean | null | undefined | AutomationDefaultArgs> = $Result.GetResult<Prisma.$AutomationPayload, S>

  type AutomationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AutomationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AutomationCountAggregateInputType | true
    }

  export interface AutomationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Automation'], meta: { name: 'Automation' } }
    /**
     * Find zero or one Automation that matches the filter.
     * @param {AutomationFindUniqueArgs} args - Arguments to find a Automation
     * @example
     * // Get one Automation
     * const automation = await prisma.automation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AutomationFindUniqueArgs>(args: SelectSubset<T, AutomationFindUniqueArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Automation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AutomationFindUniqueOrThrowArgs} args - Arguments to find a Automation
     * @example
     * // Get one Automation
     * const automation = await prisma.automation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AutomationFindUniqueOrThrowArgs>(args: SelectSubset<T, AutomationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Automation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationFindFirstArgs} args - Arguments to find a Automation
     * @example
     * // Get one Automation
     * const automation = await prisma.automation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AutomationFindFirstArgs>(args?: SelectSubset<T, AutomationFindFirstArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Automation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationFindFirstOrThrowArgs} args - Arguments to find a Automation
     * @example
     * // Get one Automation
     * const automation = await prisma.automation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AutomationFindFirstOrThrowArgs>(args?: SelectSubset<T, AutomationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Automations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Automations
     * const automations = await prisma.automation.findMany()
     * 
     * // Get first 10 Automations
     * const automations = await prisma.automation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const automationWithIdOnly = await prisma.automation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AutomationFindManyArgs>(args?: SelectSubset<T, AutomationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Automation.
     * @param {AutomationCreateArgs} args - Arguments to create a Automation.
     * @example
     * // Create one Automation
     * const Automation = await prisma.automation.create({
     *   data: {
     *     // ... data to create a Automation
     *   }
     * })
     * 
     */
    create<T extends AutomationCreateArgs>(args: SelectSubset<T, AutomationCreateArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Automations.
     * @param {AutomationCreateManyArgs} args - Arguments to create many Automations.
     * @example
     * // Create many Automations
     * const automation = await prisma.automation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AutomationCreateManyArgs>(args?: SelectSubset<T, AutomationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Automations and returns the data saved in the database.
     * @param {AutomationCreateManyAndReturnArgs} args - Arguments to create many Automations.
     * @example
     * // Create many Automations
     * const automation = await prisma.automation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Automations and only return the `id`
     * const automationWithIdOnly = await prisma.automation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AutomationCreateManyAndReturnArgs>(args?: SelectSubset<T, AutomationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Automation.
     * @param {AutomationDeleteArgs} args - Arguments to delete one Automation.
     * @example
     * // Delete one Automation
     * const Automation = await prisma.automation.delete({
     *   where: {
     *     // ... filter to delete one Automation
     *   }
     * })
     * 
     */
    delete<T extends AutomationDeleteArgs>(args: SelectSubset<T, AutomationDeleteArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Automation.
     * @param {AutomationUpdateArgs} args - Arguments to update one Automation.
     * @example
     * // Update one Automation
     * const automation = await prisma.automation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AutomationUpdateArgs>(args: SelectSubset<T, AutomationUpdateArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Automations.
     * @param {AutomationDeleteManyArgs} args - Arguments to filter Automations to delete.
     * @example
     * // Delete a few Automations
     * const { count } = await prisma.automation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AutomationDeleteManyArgs>(args?: SelectSubset<T, AutomationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Automations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Automations
     * const automation = await prisma.automation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AutomationUpdateManyArgs>(args: SelectSubset<T, AutomationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Automations and returns the data updated in the database.
     * @param {AutomationUpdateManyAndReturnArgs} args - Arguments to update many Automations.
     * @example
     * // Update many Automations
     * const automation = await prisma.automation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Automations and only return the `id`
     * const automationWithIdOnly = await prisma.automation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AutomationUpdateManyAndReturnArgs>(args: SelectSubset<T, AutomationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Automation.
     * @param {AutomationUpsertArgs} args - Arguments to update or create a Automation.
     * @example
     * // Update or create a Automation
     * const automation = await prisma.automation.upsert({
     *   create: {
     *     // ... data to create a Automation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Automation we want to update
     *   }
     * })
     */
    upsert<T extends AutomationUpsertArgs>(args: SelectSubset<T, AutomationUpsertArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Automations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationCountArgs} args - Arguments to filter Automations to count.
     * @example
     * // Count the number of Automations
     * const count = await prisma.automation.count({
     *   where: {
     *     // ... the filter for the Automations we want to count
     *   }
     * })
    **/
    count<T extends AutomationCountArgs>(
      args?: Subset<T, AutomationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AutomationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Automation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AutomationAggregateArgs>(args: Subset<T, AutomationAggregateArgs>): Prisma.PrismaPromise<GetAutomationAggregateType<T>>

    /**
     * Group by Automation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AutomationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AutomationGroupByArgs['orderBy'] }
        : { orderBy?: AutomationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AutomationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutomationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Automation model
   */
  readonly fields: AutomationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Automation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AutomationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trigger<T extends Automation$triggerArgs<ExtArgs> = {}>(args?: Subset<T, Automation$triggerArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    actions<T extends Automation$actionsArgs<ExtArgs> = {}>(args?: Subset<T, Automation$actionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedule<T extends Automation$scheduleArgs<ExtArgs> = {}>(args?: Subset<T, Automation$scheduleArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Automation model
   */
  interface AutomationFieldRefs {
    readonly id: FieldRef<"Automation", 'String'>
    readonly name: FieldRef<"Automation", 'String'>
    readonly enabled: FieldRef<"Automation", 'Boolean'>
    readonly triggerId: FieldRef<"Automation", 'String'>
    readonly scheduleId: FieldRef<"Automation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Automation findUnique
   */
  export type AutomationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    /**
     * Filter, which Automation to fetch.
     */
    where: AutomationWhereUniqueInput
  }

  /**
   * Automation findUniqueOrThrow
   */
  export type AutomationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    /**
     * Filter, which Automation to fetch.
     */
    where: AutomationWhereUniqueInput
  }

  /**
   * Automation findFirst
   */
  export type AutomationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    /**
     * Filter, which Automation to fetch.
     */
    where?: AutomationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Automations to fetch.
     */
    orderBy?: AutomationOrderByWithRelationInput | AutomationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Automations.
     */
    cursor?: AutomationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Automations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Automations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Automations.
     */
    distinct?: AutomationScalarFieldEnum | AutomationScalarFieldEnum[]
  }

  /**
   * Automation findFirstOrThrow
   */
  export type AutomationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    /**
     * Filter, which Automation to fetch.
     */
    where?: AutomationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Automations to fetch.
     */
    orderBy?: AutomationOrderByWithRelationInput | AutomationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Automations.
     */
    cursor?: AutomationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Automations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Automations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Automations.
     */
    distinct?: AutomationScalarFieldEnum | AutomationScalarFieldEnum[]
  }

  /**
   * Automation findMany
   */
  export type AutomationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    /**
     * Filter, which Automations to fetch.
     */
    where?: AutomationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Automations to fetch.
     */
    orderBy?: AutomationOrderByWithRelationInput | AutomationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Automations.
     */
    cursor?: AutomationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Automations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Automations.
     */
    skip?: number
    distinct?: AutomationScalarFieldEnum | AutomationScalarFieldEnum[]
  }

  /**
   * Automation create
   */
  export type AutomationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    /**
     * The data needed to create a Automation.
     */
    data: XOR<AutomationCreateInput, AutomationUncheckedCreateInput>
  }

  /**
   * Automation createMany
   */
  export type AutomationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Automations.
     */
    data: AutomationCreateManyInput | AutomationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Automation createManyAndReturn
   */
  export type AutomationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * The data used to create many Automations.
     */
    data: AutomationCreateManyInput | AutomationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Automation update
   */
  export type AutomationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    /**
     * The data needed to update a Automation.
     */
    data: XOR<AutomationUpdateInput, AutomationUncheckedUpdateInput>
    /**
     * Choose, which Automation to update.
     */
    where: AutomationWhereUniqueInput
  }

  /**
   * Automation updateMany
   */
  export type AutomationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Automations.
     */
    data: XOR<AutomationUpdateManyMutationInput, AutomationUncheckedUpdateManyInput>
    /**
     * Filter which Automations to update
     */
    where?: AutomationWhereInput
    /**
     * Limit how many Automations to update.
     */
    limit?: number
  }

  /**
   * Automation updateManyAndReturn
   */
  export type AutomationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * The data used to update Automations.
     */
    data: XOR<AutomationUpdateManyMutationInput, AutomationUncheckedUpdateManyInput>
    /**
     * Filter which Automations to update
     */
    where?: AutomationWhereInput
    /**
     * Limit how many Automations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Automation upsert
   */
  export type AutomationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    /**
     * The filter to search for the Automation to update in case it exists.
     */
    where: AutomationWhereUniqueInput
    /**
     * In case the Automation found by the `where` argument doesn't exist, create a new Automation with this data.
     */
    create: XOR<AutomationCreateInput, AutomationUncheckedCreateInput>
    /**
     * In case the Automation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AutomationUpdateInput, AutomationUncheckedUpdateInput>
  }

  /**
   * Automation delete
   */
  export type AutomationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    /**
     * Filter which Automation to delete.
     */
    where: AutomationWhereUniqueInput
  }

  /**
   * Automation deleteMany
   */
  export type AutomationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Automations to delete
     */
    where?: AutomationWhereInput
    /**
     * Limit how many Automations to delete.
     */
    limit?: number
  }

  /**
   * Automation.trigger
   */
  export type Automation$triggerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    where?: TriggerWhereInput
  }

  /**
   * Automation.actions
   */
  export type Automation$actionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    cursor?: ActionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Automation.schedule
   */
  export type Automation$scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
  }

  /**
   * Automation without action
   */
  export type AutomationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
  }


  /**
   * Model Trigger
   */

  export type AggregateTrigger = {
    _count: TriggerCountAggregateOutputType | null
    _min: TriggerMinAggregateOutputType | null
    _max: TriggerMaxAggregateOutputType | null
  }

  export type TriggerMinAggregateOutputType = {
    id: string | null
    type: string | null
  }

  export type TriggerMaxAggregateOutputType = {
    id: string | null
    type: string | null
  }

  export type TriggerCountAggregateOutputType = {
    id: number
    type: number
    _all: number
  }


  export type TriggerMinAggregateInputType = {
    id?: true
    type?: true
  }

  export type TriggerMaxAggregateInputType = {
    id?: true
    type?: true
  }

  export type TriggerCountAggregateInputType = {
    id?: true
    type?: true
    _all?: true
  }

  export type TriggerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trigger to aggregate.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Triggers
    **/
    _count?: true | TriggerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriggerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriggerMaxAggregateInputType
  }

  export type GetTriggerAggregateType<T extends TriggerAggregateArgs> = {
        [P in keyof T & keyof AggregateTrigger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrigger[P]>
      : GetScalarType<T[P], AggregateTrigger[P]>
  }




  export type TriggerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerWhereInput
    orderBy?: TriggerOrderByWithAggregationInput | TriggerOrderByWithAggregationInput[]
    by: TriggerScalarFieldEnum[] | TriggerScalarFieldEnum
    having?: TriggerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriggerCountAggregateInputType | true
    _min?: TriggerMinAggregateInputType
    _max?: TriggerMaxAggregateInputType
  }

  export type TriggerGroupByOutputType = {
    id: string
    type: string
    _count: TriggerCountAggregateOutputType | null
    _min: TriggerMinAggregateOutputType | null
    _max: TriggerMaxAggregateOutputType | null
  }

  type GetTriggerGroupByPayload<T extends TriggerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TriggerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriggerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriggerGroupByOutputType[P]>
            : GetScalarType<T[P], TriggerGroupByOutputType[P]>
        }
      >
    >


  export type TriggerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    automation?: boolean | Trigger$automationArgs<ExtArgs>
    timeTrigger?: boolean | Trigger$timeTriggerArgs<ExtArgs>
    deviceTrigger?: boolean | Trigger$deviceTriggerArgs<ExtArgs>
    sceneTrigger?: boolean | Trigger$sceneTriggerArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectScalar = {
    id?: boolean
    type?: boolean
  }

  export type TriggerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type", ExtArgs["result"]["trigger"]>
  export type TriggerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    automation?: boolean | Trigger$automationArgs<ExtArgs>
    timeTrigger?: boolean | Trigger$timeTriggerArgs<ExtArgs>
    deviceTrigger?: boolean | Trigger$deviceTriggerArgs<ExtArgs>
    sceneTrigger?: boolean | Trigger$sceneTriggerArgs<ExtArgs>
  }
  export type TriggerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TriggerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TriggerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trigger"
    objects: {
      automation: Prisma.$AutomationPayload<ExtArgs> | null
      timeTrigger: Prisma.$TriggerTimePayload<ExtArgs> | null
      deviceTrigger: Prisma.$TriggerDevicePayload<ExtArgs> | null
      sceneTrigger: Prisma.$TriggerScenePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
    }, ExtArgs["result"]["trigger"]>
    composites: {}
  }

  type TriggerGetPayload<S extends boolean | null | undefined | TriggerDefaultArgs> = $Result.GetResult<Prisma.$TriggerPayload, S>

  type TriggerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TriggerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TriggerCountAggregateInputType | true
    }

  export interface TriggerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trigger'], meta: { name: 'Trigger' } }
    /**
     * Find zero or one Trigger that matches the filter.
     * @param {TriggerFindUniqueArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TriggerFindUniqueArgs>(args: SelectSubset<T, TriggerFindUniqueArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trigger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TriggerFindUniqueOrThrowArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TriggerFindUniqueOrThrowArgs>(args: SelectSubset<T, TriggerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trigger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindFirstArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TriggerFindFirstArgs>(args?: SelectSubset<T, TriggerFindFirstArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trigger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindFirstOrThrowArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TriggerFindFirstOrThrowArgs>(args?: SelectSubset<T, TriggerFindFirstOrThrowArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Triggers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Triggers
     * const triggers = await prisma.trigger.findMany()
     * 
     * // Get first 10 Triggers
     * const triggers = await prisma.trigger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triggerWithIdOnly = await prisma.trigger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TriggerFindManyArgs>(args?: SelectSubset<T, TriggerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trigger.
     * @param {TriggerCreateArgs} args - Arguments to create a Trigger.
     * @example
     * // Create one Trigger
     * const Trigger = await prisma.trigger.create({
     *   data: {
     *     // ... data to create a Trigger
     *   }
     * })
     * 
     */
    create<T extends TriggerCreateArgs>(args: SelectSubset<T, TriggerCreateArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Triggers.
     * @param {TriggerCreateManyArgs} args - Arguments to create many Triggers.
     * @example
     * // Create many Triggers
     * const trigger = await prisma.trigger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TriggerCreateManyArgs>(args?: SelectSubset<T, TriggerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Triggers and returns the data saved in the database.
     * @param {TriggerCreateManyAndReturnArgs} args - Arguments to create many Triggers.
     * @example
     * // Create many Triggers
     * const trigger = await prisma.trigger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Triggers and only return the `id`
     * const triggerWithIdOnly = await prisma.trigger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TriggerCreateManyAndReturnArgs>(args?: SelectSubset<T, TriggerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trigger.
     * @param {TriggerDeleteArgs} args - Arguments to delete one Trigger.
     * @example
     * // Delete one Trigger
     * const Trigger = await prisma.trigger.delete({
     *   where: {
     *     // ... filter to delete one Trigger
     *   }
     * })
     * 
     */
    delete<T extends TriggerDeleteArgs>(args: SelectSubset<T, TriggerDeleteArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trigger.
     * @param {TriggerUpdateArgs} args - Arguments to update one Trigger.
     * @example
     * // Update one Trigger
     * const trigger = await prisma.trigger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TriggerUpdateArgs>(args: SelectSubset<T, TriggerUpdateArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Triggers.
     * @param {TriggerDeleteManyArgs} args - Arguments to filter Triggers to delete.
     * @example
     * // Delete a few Triggers
     * const { count } = await prisma.trigger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TriggerDeleteManyArgs>(args?: SelectSubset<T, TriggerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Triggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Triggers
     * const trigger = await prisma.trigger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TriggerUpdateManyArgs>(args: SelectSubset<T, TriggerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Triggers and returns the data updated in the database.
     * @param {TriggerUpdateManyAndReturnArgs} args - Arguments to update many Triggers.
     * @example
     * // Update many Triggers
     * const trigger = await prisma.trigger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Triggers and only return the `id`
     * const triggerWithIdOnly = await prisma.trigger.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TriggerUpdateManyAndReturnArgs>(args: SelectSubset<T, TriggerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trigger.
     * @param {TriggerUpsertArgs} args - Arguments to update or create a Trigger.
     * @example
     * // Update or create a Trigger
     * const trigger = await prisma.trigger.upsert({
     *   create: {
     *     // ... data to create a Trigger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trigger we want to update
     *   }
     * })
     */
    upsert<T extends TriggerUpsertArgs>(args: SelectSubset<T, TriggerUpsertArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Triggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerCountArgs} args - Arguments to filter Triggers to count.
     * @example
     * // Count the number of Triggers
     * const count = await prisma.trigger.count({
     *   where: {
     *     // ... the filter for the Triggers we want to count
     *   }
     * })
    **/
    count<T extends TriggerCountArgs>(
      args?: Subset<T, TriggerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriggerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TriggerAggregateArgs>(args: Subset<T, TriggerAggregateArgs>): Prisma.PrismaPromise<GetTriggerAggregateType<T>>

    /**
     * Group by Trigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TriggerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriggerGroupByArgs['orderBy'] }
        : { orderBy?: TriggerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TriggerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriggerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trigger model
   */
  readonly fields: TriggerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trigger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TriggerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    automation<T extends Trigger$automationArgs<ExtArgs> = {}>(args?: Subset<T, Trigger$automationArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    timeTrigger<T extends Trigger$timeTriggerArgs<ExtArgs> = {}>(args?: Subset<T, Trigger$timeTriggerArgs<ExtArgs>>): Prisma__TriggerTimeClient<$Result.GetResult<Prisma.$TriggerTimePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    deviceTrigger<T extends Trigger$deviceTriggerArgs<ExtArgs> = {}>(args?: Subset<T, Trigger$deviceTriggerArgs<ExtArgs>>): Prisma__TriggerDeviceClient<$Result.GetResult<Prisma.$TriggerDevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sceneTrigger<T extends Trigger$sceneTriggerArgs<ExtArgs> = {}>(args?: Subset<T, Trigger$sceneTriggerArgs<ExtArgs>>): Prisma__TriggerSceneClient<$Result.GetResult<Prisma.$TriggerScenePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trigger model
   */
  interface TriggerFieldRefs {
    readonly id: FieldRef<"Trigger", 'String'>
    readonly type: FieldRef<"Trigger", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Trigger findUnique
   */
  export type TriggerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger findUniqueOrThrow
   */
  export type TriggerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger findFirst
   */
  export type TriggerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Triggers.
     */
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger findFirstOrThrow
   */
  export type TriggerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Triggers.
     */
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger findMany
   */
  export type TriggerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Triggers to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger create
   */
  export type TriggerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The data needed to create a Trigger.
     */
    data: XOR<TriggerCreateInput, TriggerUncheckedCreateInput>
  }

  /**
   * Trigger createMany
   */
  export type TriggerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Triggers.
     */
    data: TriggerCreateManyInput | TriggerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trigger createManyAndReturn
   */
  export type TriggerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * The data used to create many Triggers.
     */
    data: TriggerCreateManyInput | TriggerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trigger update
   */
  export type TriggerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The data needed to update a Trigger.
     */
    data: XOR<TriggerUpdateInput, TriggerUncheckedUpdateInput>
    /**
     * Choose, which Trigger to update.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger updateMany
   */
  export type TriggerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Triggers.
     */
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyInput>
    /**
     * Filter which Triggers to update
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to update.
     */
    limit?: number
  }

  /**
   * Trigger updateManyAndReturn
   */
  export type TriggerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * The data used to update Triggers.
     */
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyInput>
    /**
     * Filter which Triggers to update
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to update.
     */
    limit?: number
  }

  /**
   * Trigger upsert
   */
  export type TriggerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The filter to search for the Trigger to update in case it exists.
     */
    where: TriggerWhereUniqueInput
    /**
     * In case the Trigger found by the `where` argument doesn't exist, create a new Trigger with this data.
     */
    create: XOR<TriggerCreateInput, TriggerUncheckedCreateInput>
    /**
     * In case the Trigger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriggerUpdateInput, TriggerUncheckedUpdateInput>
  }

  /**
   * Trigger delete
   */
  export type TriggerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter which Trigger to delete.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger deleteMany
   */
  export type TriggerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Triggers to delete
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to delete.
     */
    limit?: number
  }

  /**
   * Trigger.automation
   */
  export type Trigger$automationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    where?: AutomationWhereInput
  }

  /**
   * Trigger.timeTrigger
   */
  export type Trigger$timeTriggerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerTime
     */
    select?: TriggerTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerTime
     */
    omit?: TriggerTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerTimeInclude<ExtArgs> | null
    where?: TriggerTimeWhereInput
  }

  /**
   * Trigger.deviceTrigger
   */
  export type Trigger$deviceTriggerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerDevice
     */
    select?: TriggerDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerDevice
     */
    omit?: TriggerDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerDeviceInclude<ExtArgs> | null
    where?: TriggerDeviceWhereInput
  }

  /**
   * Trigger.sceneTrigger
   */
  export type Trigger$sceneTriggerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerScene
     */
    select?: TriggerSceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerScene
     */
    omit?: TriggerSceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerSceneInclude<ExtArgs> | null
    where?: TriggerSceneWhereInput
  }

  /**
   * Trigger without action
   */
  export type TriggerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
  }


  /**
   * Model TriggerTime
   */

  export type AggregateTriggerTime = {
    _count: TriggerTimeCountAggregateOutputType | null
    _min: TriggerTimeMinAggregateOutputType | null
    _max: TriggerTimeMaxAggregateOutputType | null
  }

  export type TriggerTimeMinAggregateOutputType = {
    id: string | null
    time: string | null
    triggerId: string | null
  }

  export type TriggerTimeMaxAggregateOutputType = {
    id: string | null
    time: string | null
    triggerId: string | null
  }

  export type TriggerTimeCountAggregateOutputType = {
    id: number
    time: number
    triggerId: number
    _all: number
  }


  export type TriggerTimeMinAggregateInputType = {
    id?: true
    time?: true
    triggerId?: true
  }

  export type TriggerTimeMaxAggregateInputType = {
    id?: true
    time?: true
    triggerId?: true
  }

  export type TriggerTimeCountAggregateInputType = {
    id?: true
    time?: true
    triggerId?: true
    _all?: true
  }

  export type TriggerTimeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TriggerTime to aggregate.
     */
    where?: TriggerTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriggerTimes to fetch.
     */
    orderBy?: TriggerTimeOrderByWithRelationInput | TriggerTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriggerTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriggerTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriggerTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TriggerTimes
    **/
    _count?: true | TriggerTimeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriggerTimeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriggerTimeMaxAggregateInputType
  }

  export type GetTriggerTimeAggregateType<T extends TriggerTimeAggregateArgs> = {
        [P in keyof T & keyof AggregateTriggerTime]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTriggerTime[P]>
      : GetScalarType<T[P], AggregateTriggerTime[P]>
  }




  export type TriggerTimeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerTimeWhereInput
    orderBy?: TriggerTimeOrderByWithAggregationInput | TriggerTimeOrderByWithAggregationInput[]
    by: TriggerTimeScalarFieldEnum[] | TriggerTimeScalarFieldEnum
    having?: TriggerTimeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriggerTimeCountAggregateInputType | true
    _min?: TriggerTimeMinAggregateInputType
    _max?: TriggerTimeMaxAggregateInputType
  }

  export type TriggerTimeGroupByOutputType = {
    id: string
    time: string
    triggerId: string
    _count: TriggerTimeCountAggregateOutputType | null
    _min: TriggerTimeMinAggregateOutputType | null
    _max: TriggerTimeMaxAggregateOutputType | null
  }

  type GetTriggerTimeGroupByPayload<T extends TriggerTimeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TriggerTimeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriggerTimeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriggerTimeGroupByOutputType[P]>
            : GetScalarType<T[P], TriggerTimeGroupByOutputType[P]>
        }
      >
    >


  export type TriggerTimeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    time?: boolean
    triggerId?: boolean
    trigger?: boolean | TriggerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["triggerTime"]>

  export type TriggerTimeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    time?: boolean
    triggerId?: boolean
    trigger?: boolean | TriggerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["triggerTime"]>

  export type TriggerTimeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    time?: boolean
    triggerId?: boolean
    trigger?: boolean | TriggerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["triggerTime"]>

  export type TriggerTimeSelectScalar = {
    id?: boolean
    time?: boolean
    triggerId?: boolean
  }

  export type TriggerTimeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "time" | "triggerId", ExtArgs["result"]["triggerTime"]>
  export type TriggerTimeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trigger?: boolean | TriggerDefaultArgs<ExtArgs>
  }
  export type TriggerTimeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trigger?: boolean | TriggerDefaultArgs<ExtArgs>
  }
  export type TriggerTimeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trigger?: boolean | TriggerDefaultArgs<ExtArgs>
  }

  export type $TriggerTimePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TriggerTime"
    objects: {
      trigger: Prisma.$TriggerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      time: string
      triggerId: string
    }, ExtArgs["result"]["triggerTime"]>
    composites: {}
  }

  type TriggerTimeGetPayload<S extends boolean | null | undefined | TriggerTimeDefaultArgs> = $Result.GetResult<Prisma.$TriggerTimePayload, S>

  type TriggerTimeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TriggerTimeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TriggerTimeCountAggregateInputType | true
    }

  export interface TriggerTimeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TriggerTime'], meta: { name: 'TriggerTime' } }
    /**
     * Find zero or one TriggerTime that matches the filter.
     * @param {TriggerTimeFindUniqueArgs} args - Arguments to find a TriggerTime
     * @example
     * // Get one TriggerTime
     * const triggerTime = await prisma.triggerTime.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TriggerTimeFindUniqueArgs>(args: SelectSubset<T, TriggerTimeFindUniqueArgs<ExtArgs>>): Prisma__TriggerTimeClient<$Result.GetResult<Prisma.$TriggerTimePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TriggerTime that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TriggerTimeFindUniqueOrThrowArgs} args - Arguments to find a TriggerTime
     * @example
     * // Get one TriggerTime
     * const triggerTime = await prisma.triggerTime.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TriggerTimeFindUniqueOrThrowArgs>(args: SelectSubset<T, TriggerTimeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TriggerTimeClient<$Result.GetResult<Prisma.$TriggerTimePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TriggerTime that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerTimeFindFirstArgs} args - Arguments to find a TriggerTime
     * @example
     * // Get one TriggerTime
     * const triggerTime = await prisma.triggerTime.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TriggerTimeFindFirstArgs>(args?: SelectSubset<T, TriggerTimeFindFirstArgs<ExtArgs>>): Prisma__TriggerTimeClient<$Result.GetResult<Prisma.$TriggerTimePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TriggerTime that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerTimeFindFirstOrThrowArgs} args - Arguments to find a TriggerTime
     * @example
     * // Get one TriggerTime
     * const triggerTime = await prisma.triggerTime.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TriggerTimeFindFirstOrThrowArgs>(args?: SelectSubset<T, TriggerTimeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TriggerTimeClient<$Result.GetResult<Prisma.$TriggerTimePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TriggerTimes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerTimeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TriggerTimes
     * const triggerTimes = await prisma.triggerTime.findMany()
     * 
     * // Get first 10 TriggerTimes
     * const triggerTimes = await prisma.triggerTime.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triggerTimeWithIdOnly = await prisma.triggerTime.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TriggerTimeFindManyArgs>(args?: SelectSubset<T, TriggerTimeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerTimePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TriggerTime.
     * @param {TriggerTimeCreateArgs} args - Arguments to create a TriggerTime.
     * @example
     * // Create one TriggerTime
     * const TriggerTime = await prisma.triggerTime.create({
     *   data: {
     *     // ... data to create a TriggerTime
     *   }
     * })
     * 
     */
    create<T extends TriggerTimeCreateArgs>(args: SelectSubset<T, TriggerTimeCreateArgs<ExtArgs>>): Prisma__TriggerTimeClient<$Result.GetResult<Prisma.$TriggerTimePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TriggerTimes.
     * @param {TriggerTimeCreateManyArgs} args - Arguments to create many TriggerTimes.
     * @example
     * // Create many TriggerTimes
     * const triggerTime = await prisma.triggerTime.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TriggerTimeCreateManyArgs>(args?: SelectSubset<T, TriggerTimeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TriggerTimes and returns the data saved in the database.
     * @param {TriggerTimeCreateManyAndReturnArgs} args - Arguments to create many TriggerTimes.
     * @example
     * // Create many TriggerTimes
     * const triggerTime = await prisma.triggerTime.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TriggerTimes and only return the `id`
     * const triggerTimeWithIdOnly = await prisma.triggerTime.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TriggerTimeCreateManyAndReturnArgs>(args?: SelectSubset<T, TriggerTimeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerTimePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TriggerTime.
     * @param {TriggerTimeDeleteArgs} args - Arguments to delete one TriggerTime.
     * @example
     * // Delete one TriggerTime
     * const TriggerTime = await prisma.triggerTime.delete({
     *   where: {
     *     // ... filter to delete one TriggerTime
     *   }
     * })
     * 
     */
    delete<T extends TriggerTimeDeleteArgs>(args: SelectSubset<T, TriggerTimeDeleteArgs<ExtArgs>>): Prisma__TriggerTimeClient<$Result.GetResult<Prisma.$TriggerTimePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TriggerTime.
     * @param {TriggerTimeUpdateArgs} args - Arguments to update one TriggerTime.
     * @example
     * // Update one TriggerTime
     * const triggerTime = await prisma.triggerTime.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TriggerTimeUpdateArgs>(args: SelectSubset<T, TriggerTimeUpdateArgs<ExtArgs>>): Prisma__TriggerTimeClient<$Result.GetResult<Prisma.$TriggerTimePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TriggerTimes.
     * @param {TriggerTimeDeleteManyArgs} args - Arguments to filter TriggerTimes to delete.
     * @example
     * // Delete a few TriggerTimes
     * const { count } = await prisma.triggerTime.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TriggerTimeDeleteManyArgs>(args?: SelectSubset<T, TriggerTimeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TriggerTimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerTimeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TriggerTimes
     * const triggerTime = await prisma.triggerTime.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TriggerTimeUpdateManyArgs>(args: SelectSubset<T, TriggerTimeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TriggerTimes and returns the data updated in the database.
     * @param {TriggerTimeUpdateManyAndReturnArgs} args - Arguments to update many TriggerTimes.
     * @example
     * // Update many TriggerTimes
     * const triggerTime = await prisma.triggerTime.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TriggerTimes and only return the `id`
     * const triggerTimeWithIdOnly = await prisma.triggerTime.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TriggerTimeUpdateManyAndReturnArgs>(args: SelectSubset<T, TriggerTimeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerTimePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TriggerTime.
     * @param {TriggerTimeUpsertArgs} args - Arguments to update or create a TriggerTime.
     * @example
     * // Update or create a TriggerTime
     * const triggerTime = await prisma.triggerTime.upsert({
     *   create: {
     *     // ... data to create a TriggerTime
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TriggerTime we want to update
     *   }
     * })
     */
    upsert<T extends TriggerTimeUpsertArgs>(args: SelectSubset<T, TriggerTimeUpsertArgs<ExtArgs>>): Prisma__TriggerTimeClient<$Result.GetResult<Prisma.$TriggerTimePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TriggerTimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerTimeCountArgs} args - Arguments to filter TriggerTimes to count.
     * @example
     * // Count the number of TriggerTimes
     * const count = await prisma.triggerTime.count({
     *   where: {
     *     // ... the filter for the TriggerTimes we want to count
     *   }
     * })
    **/
    count<T extends TriggerTimeCountArgs>(
      args?: Subset<T, TriggerTimeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriggerTimeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TriggerTime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerTimeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TriggerTimeAggregateArgs>(args: Subset<T, TriggerTimeAggregateArgs>): Prisma.PrismaPromise<GetTriggerTimeAggregateType<T>>

    /**
     * Group by TriggerTime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerTimeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TriggerTimeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriggerTimeGroupByArgs['orderBy'] }
        : { orderBy?: TriggerTimeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TriggerTimeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriggerTimeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TriggerTime model
   */
  readonly fields: TriggerTimeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TriggerTime.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TriggerTimeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trigger<T extends TriggerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TriggerDefaultArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TriggerTime model
   */
  interface TriggerTimeFieldRefs {
    readonly id: FieldRef<"TriggerTime", 'String'>
    readonly time: FieldRef<"TriggerTime", 'String'>
    readonly triggerId: FieldRef<"TriggerTime", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TriggerTime findUnique
   */
  export type TriggerTimeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerTime
     */
    select?: TriggerTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerTime
     */
    omit?: TriggerTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerTimeInclude<ExtArgs> | null
    /**
     * Filter, which TriggerTime to fetch.
     */
    where: TriggerTimeWhereUniqueInput
  }

  /**
   * TriggerTime findUniqueOrThrow
   */
  export type TriggerTimeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerTime
     */
    select?: TriggerTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerTime
     */
    omit?: TriggerTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerTimeInclude<ExtArgs> | null
    /**
     * Filter, which TriggerTime to fetch.
     */
    where: TriggerTimeWhereUniqueInput
  }

  /**
   * TriggerTime findFirst
   */
  export type TriggerTimeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerTime
     */
    select?: TriggerTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerTime
     */
    omit?: TriggerTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerTimeInclude<ExtArgs> | null
    /**
     * Filter, which TriggerTime to fetch.
     */
    where?: TriggerTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriggerTimes to fetch.
     */
    orderBy?: TriggerTimeOrderByWithRelationInput | TriggerTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriggerTimes.
     */
    cursor?: TriggerTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriggerTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriggerTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriggerTimes.
     */
    distinct?: TriggerTimeScalarFieldEnum | TriggerTimeScalarFieldEnum[]
  }

  /**
   * TriggerTime findFirstOrThrow
   */
  export type TriggerTimeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerTime
     */
    select?: TriggerTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerTime
     */
    omit?: TriggerTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerTimeInclude<ExtArgs> | null
    /**
     * Filter, which TriggerTime to fetch.
     */
    where?: TriggerTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriggerTimes to fetch.
     */
    orderBy?: TriggerTimeOrderByWithRelationInput | TriggerTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriggerTimes.
     */
    cursor?: TriggerTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriggerTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriggerTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriggerTimes.
     */
    distinct?: TriggerTimeScalarFieldEnum | TriggerTimeScalarFieldEnum[]
  }

  /**
   * TriggerTime findMany
   */
  export type TriggerTimeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerTime
     */
    select?: TriggerTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerTime
     */
    omit?: TriggerTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerTimeInclude<ExtArgs> | null
    /**
     * Filter, which TriggerTimes to fetch.
     */
    where?: TriggerTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriggerTimes to fetch.
     */
    orderBy?: TriggerTimeOrderByWithRelationInput | TriggerTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TriggerTimes.
     */
    cursor?: TriggerTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriggerTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriggerTimes.
     */
    skip?: number
    distinct?: TriggerTimeScalarFieldEnum | TriggerTimeScalarFieldEnum[]
  }

  /**
   * TriggerTime create
   */
  export type TriggerTimeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerTime
     */
    select?: TriggerTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerTime
     */
    omit?: TriggerTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerTimeInclude<ExtArgs> | null
    /**
     * The data needed to create a TriggerTime.
     */
    data: XOR<TriggerTimeCreateInput, TriggerTimeUncheckedCreateInput>
  }

  /**
   * TriggerTime createMany
   */
  export type TriggerTimeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TriggerTimes.
     */
    data: TriggerTimeCreateManyInput | TriggerTimeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TriggerTime createManyAndReturn
   */
  export type TriggerTimeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerTime
     */
    select?: TriggerTimeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerTime
     */
    omit?: TriggerTimeOmit<ExtArgs> | null
    /**
     * The data used to create many TriggerTimes.
     */
    data: TriggerTimeCreateManyInput | TriggerTimeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerTimeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TriggerTime update
   */
  export type TriggerTimeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerTime
     */
    select?: TriggerTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerTime
     */
    omit?: TriggerTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerTimeInclude<ExtArgs> | null
    /**
     * The data needed to update a TriggerTime.
     */
    data: XOR<TriggerTimeUpdateInput, TriggerTimeUncheckedUpdateInput>
    /**
     * Choose, which TriggerTime to update.
     */
    where: TriggerTimeWhereUniqueInput
  }

  /**
   * TriggerTime updateMany
   */
  export type TriggerTimeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TriggerTimes.
     */
    data: XOR<TriggerTimeUpdateManyMutationInput, TriggerTimeUncheckedUpdateManyInput>
    /**
     * Filter which TriggerTimes to update
     */
    where?: TriggerTimeWhereInput
    /**
     * Limit how many TriggerTimes to update.
     */
    limit?: number
  }

  /**
   * TriggerTime updateManyAndReturn
   */
  export type TriggerTimeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerTime
     */
    select?: TriggerTimeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerTime
     */
    omit?: TriggerTimeOmit<ExtArgs> | null
    /**
     * The data used to update TriggerTimes.
     */
    data: XOR<TriggerTimeUpdateManyMutationInput, TriggerTimeUncheckedUpdateManyInput>
    /**
     * Filter which TriggerTimes to update
     */
    where?: TriggerTimeWhereInput
    /**
     * Limit how many TriggerTimes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerTimeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TriggerTime upsert
   */
  export type TriggerTimeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerTime
     */
    select?: TriggerTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerTime
     */
    omit?: TriggerTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerTimeInclude<ExtArgs> | null
    /**
     * The filter to search for the TriggerTime to update in case it exists.
     */
    where: TriggerTimeWhereUniqueInput
    /**
     * In case the TriggerTime found by the `where` argument doesn't exist, create a new TriggerTime with this data.
     */
    create: XOR<TriggerTimeCreateInput, TriggerTimeUncheckedCreateInput>
    /**
     * In case the TriggerTime was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriggerTimeUpdateInput, TriggerTimeUncheckedUpdateInput>
  }

  /**
   * TriggerTime delete
   */
  export type TriggerTimeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerTime
     */
    select?: TriggerTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerTime
     */
    omit?: TriggerTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerTimeInclude<ExtArgs> | null
    /**
     * Filter which TriggerTime to delete.
     */
    where: TriggerTimeWhereUniqueInput
  }

  /**
   * TriggerTime deleteMany
   */
  export type TriggerTimeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TriggerTimes to delete
     */
    where?: TriggerTimeWhereInput
    /**
     * Limit how many TriggerTimes to delete.
     */
    limit?: number
  }

  /**
   * TriggerTime without action
   */
  export type TriggerTimeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerTime
     */
    select?: TriggerTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerTime
     */
    omit?: TriggerTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerTimeInclude<ExtArgs> | null
  }


  /**
   * Model TriggerDevice
   */

  export type AggregateTriggerDevice = {
    _count: TriggerDeviceCountAggregateOutputType | null
    _min: TriggerDeviceMinAggregateOutputType | null
    _max: TriggerDeviceMaxAggregateOutputType | null
  }

  export type TriggerDeviceMinAggregateOutputType = {
    id: string | null
    deviceId: string | null
    deviceState: boolean | null
    triggerId: string | null
  }

  export type TriggerDeviceMaxAggregateOutputType = {
    id: string | null
    deviceId: string | null
    deviceState: boolean | null
    triggerId: string | null
  }

  export type TriggerDeviceCountAggregateOutputType = {
    id: number
    deviceId: number
    deviceState: number
    triggerId: number
    _all: number
  }


  export type TriggerDeviceMinAggregateInputType = {
    id?: true
    deviceId?: true
    deviceState?: true
    triggerId?: true
  }

  export type TriggerDeviceMaxAggregateInputType = {
    id?: true
    deviceId?: true
    deviceState?: true
    triggerId?: true
  }

  export type TriggerDeviceCountAggregateInputType = {
    id?: true
    deviceId?: true
    deviceState?: true
    triggerId?: true
    _all?: true
  }

  export type TriggerDeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TriggerDevice to aggregate.
     */
    where?: TriggerDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriggerDevices to fetch.
     */
    orderBy?: TriggerDeviceOrderByWithRelationInput | TriggerDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriggerDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriggerDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriggerDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TriggerDevices
    **/
    _count?: true | TriggerDeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriggerDeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriggerDeviceMaxAggregateInputType
  }

  export type GetTriggerDeviceAggregateType<T extends TriggerDeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateTriggerDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTriggerDevice[P]>
      : GetScalarType<T[P], AggregateTriggerDevice[P]>
  }




  export type TriggerDeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerDeviceWhereInput
    orderBy?: TriggerDeviceOrderByWithAggregationInput | TriggerDeviceOrderByWithAggregationInput[]
    by: TriggerDeviceScalarFieldEnum[] | TriggerDeviceScalarFieldEnum
    having?: TriggerDeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriggerDeviceCountAggregateInputType | true
    _min?: TriggerDeviceMinAggregateInputType
    _max?: TriggerDeviceMaxAggregateInputType
  }

  export type TriggerDeviceGroupByOutputType = {
    id: string
    deviceId: string
    deviceState: boolean
    triggerId: string
    _count: TriggerDeviceCountAggregateOutputType | null
    _min: TriggerDeviceMinAggregateOutputType | null
    _max: TriggerDeviceMaxAggregateOutputType | null
  }

  type GetTriggerDeviceGroupByPayload<T extends TriggerDeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TriggerDeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriggerDeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriggerDeviceGroupByOutputType[P]>
            : GetScalarType<T[P], TriggerDeviceGroupByOutputType[P]>
        }
      >
    >


  export type TriggerDeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    deviceState?: boolean
    triggerId?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    trigger?: boolean | TriggerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["triggerDevice"]>

  export type TriggerDeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    deviceState?: boolean
    triggerId?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    trigger?: boolean | TriggerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["triggerDevice"]>

  export type TriggerDeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    deviceState?: boolean
    triggerId?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    trigger?: boolean | TriggerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["triggerDevice"]>

  export type TriggerDeviceSelectScalar = {
    id?: boolean
    deviceId?: boolean
    deviceState?: boolean
    triggerId?: boolean
  }

  export type TriggerDeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deviceId" | "deviceState" | "triggerId", ExtArgs["result"]["triggerDevice"]>
  export type TriggerDeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    trigger?: boolean | TriggerDefaultArgs<ExtArgs>
  }
  export type TriggerDeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    trigger?: boolean | TriggerDefaultArgs<ExtArgs>
  }
  export type TriggerDeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    trigger?: boolean | TriggerDefaultArgs<ExtArgs>
  }

  export type $TriggerDevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TriggerDevice"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs>
      trigger: Prisma.$TriggerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      deviceId: string
      deviceState: boolean
      triggerId: string
    }, ExtArgs["result"]["triggerDevice"]>
    composites: {}
  }

  type TriggerDeviceGetPayload<S extends boolean | null | undefined | TriggerDeviceDefaultArgs> = $Result.GetResult<Prisma.$TriggerDevicePayload, S>

  type TriggerDeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TriggerDeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TriggerDeviceCountAggregateInputType | true
    }

  export interface TriggerDeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TriggerDevice'], meta: { name: 'TriggerDevice' } }
    /**
     * Find zero or one TriggerDevice that matches the filter.
     * @param {TriggerDeviceFindUniqueArgs} args - Arguments to find a TriggerDevice
     * @example
     * // Get one TriggerDevice
     * const triggerDevice = await prisma.triggerDevice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TriggerDeviceFindUniqueArgs>(args: SelectSubset<T, TriggerDeviceFindUniqueArgs<ExtArgs>>): Prisma__TriggerDeviceClient<$Result.GetResult<Prisma.$TriggerDevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TriggerDevice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TriggerDeviceFindUniqueOrThrowArgs} args - Arguments to find a TriggerDevice
     * @example
     * // Get one TriggerDevice
     * const triggerDevice = await prisma.triggerDevice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TriggerDeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, TriggerDeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TriggerDeviceClient<$Result.GetResult<Prisma.$TriggerDevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TriggerDevice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerDeviceFindFirstArgs} args - Arguments to find a TriggerDevice
     * @example
     * // Get one TriggerDevice
     * const triggerDevice = await prisma.triggerDevice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TriggerDeviceFindFirstArgs>(args?: SelectSubset<T, TriggerDeviceFindFirstArgs<ExtArgs>>): Prisma__TriggerDeviceClient<$Result.GetResult<Prisma.$TriggerDevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TriggerDevice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerDeviceFindFirstOrThrowArgs} args - Arguments to find a TriggerDevice
     * @example
     * // Get one TriggerDevice
     * const triggerDevice = await prisma.triggerDevice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TriggerDeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, TriggerDeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__TriggerDeviceClient<$Result.GetResult<Prisma.$TriggerDevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TriggerDevices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerDeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TriggerDevices
     * const triggerDevices = await prisma.triggerDevice.findMany()
     * 
     * // Get first 10 TriggerDevices
     * const triggerDevices = await prisma.triggerDevice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triggerDeviceWithIdOnly = await prisma.triggerDevice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TriggerDeviceFindManyArgs>(args?: SelectSubset<T, TriggerDeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerDevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TriggerDevice.
     * @param {TriggerDeviceCreateArgs} args - Arguments to create a TriggerDevice.
     * @example
     * // Create one TriggerDevice
     * const TriggerDevice = await prisma.triggerDevice.create({
     *   data: {
     *     // ... data to create a TriggerDevice
     *   }
     * })
     * 
     */
    create<T extends TriggerDeviceCreateArgs>(args: SelectSubset<T, TriggerDeviceCreateArgs<ExtArgs>>): Prisma__TriggerDeviceClient<$Result.GetResult<Prisma.$TriggerDevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TriggerDevices.
     * @param {TriggerDeviceCreateManyArgs} args - Arguments to create many TriggerDevices.
     * @example
     * // Create many TriggerDevices
     * const triggerDevice = await prisma.triggerDevice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TriggerDeviceCreateManyArgs>(args?: SelectSubset<T, TriggerDeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TriggerDevices and returns the data saved in the database.
     * @param {TriggerDeviceCreateManyAndReturnArgs} args - Arguments to create many TriggerDevices.
     * @example
     * // Create many TriggerDevices
     * const triggerDevice = await prisma.triggerDevice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TriggerDevices and only return the `id`
     * const triggerDeviceWithIdOnly = await prisma.triggerDevice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TriggerDeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, TriggerDeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerDevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TriggerDevice.
     * @param {TriggerDeviceDeleteArgs} args - Arguments to delete one TriggerDevice.
     * @example
     * // Delete one TriggerDevice
     * const TriggerDevice = await prisma.triggerDevice.delete({
     *   where: {
     *     // ... filter to delete one TriggerDevice
     *   }
     * })
     * 
     */
    delete<T extends TriggerDeviceDeleteArgs>(args: SelectSubset<T, TriggerDeviceDeleteArgs<ExtArgs>>): Prisma__TriggerDeviceClient<$Result.GetResult<Prisma.$TriggerDevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TriggerDevice.
     * @param {TriggerDeviceUpdateArgs} args - Arguments to update one TriggerDevice.
     * @example
     * // Update one TriggerDevice
     * const triggerDevice = await prisma.triggerDevice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TriggerDeviceUpdateArgs>(args: SelectSubset<T, TriggerDeviceUpdateArgs<ExtArgs>>): Prisma__TriggerDeviceClient<$Result.GetResult<Prisma.$TriggerDevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TriggerDevices.
     * @param {TriggerDeviceDeleteManyArgs} args - Arguments to filter TriggerDevices to delete.
     * @example
     * // Delete a few TriggerDevices
     * const { count } = await prisma.triggerDevice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TriggerDeviceDeleteManyArgs>(args?: SelectSubset<T, TriggerDeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TriggerDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerDeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TriggerDevices
     * const triggerDevice = await prisma.triggerDevice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TriggerDeviceUpdateManyArgs>(args: SelectSubset<T, TriggerDeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TriggerDevices and returns the data updated in the database.
     * @param {TriggerDeviceUpdateManyAndReturnArgs} args - Arguments to update many TriggerDevices.
     * @example
     * // Update many TriggerDevices
     * const triggerDevice = await prisma.triggerDevice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TriggerDevices and only return the `id`
     * const triggerDeviceWithIdOnly = await prisma.triggerDevice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TriggerDeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, TriggerDeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerDevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TriggerDevice.
     * @param {TriggerDeviceUpsertArgs} args - Arguments to update or create a TriggerDevice.
     * @example
     * // Update or create a TriggerDevice
     * const triggerDevice = await prisma.triggerDevice.upsert({
     *   create: {
     *     // ... data to create a TriggerDevice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TriggerDevice we want to update
     *   }
     * })
     */
    upsert<T extends TriggerDeviceUpsertArgs>(args: SelectSubset<T, TriggerDeviceUpsertArgs<ExtArgs>>): Prisma__TriggerDeviceClient<$Result.GetResult<Prisma.$TriggerDevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TriggerDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerDeviceCountArgs} args - Arguments to filter TriggerDevices to count.
     * @example
     * // Count the number of TriggerDevices
     * const count = await prisma.triggerDevice.count({
     *   where: {
     *     // ... the filter for the TriggerDevices we want to count
     *   }
     * })
    **/
    count<T extends TriggerDeviceCountArgs>(
      args?: Subset<T, TriggerDeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriggerDeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TriggerDevice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerDeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TriggerDeviceAggregateArgs>(args: Subset<T, TriggerDeviceAggregateArgs>): Prisma.PrismaPromise<GetTriggerDeviceAggregateType<T>>

    /**
     * Group by TriggerDevice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerDeviceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TriggerDeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriggerDeviceGroupByArgs['orderBy'] }
        : { orderBy?: TriggerDeviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TriggerDeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriggerDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TriggerDevice model
   */
  readonly fields: TriggerDeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TriggerDevice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TriggerDeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trigger<T extends TriggerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TriggerDefaultArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TriggerDevice model
   */
  interface TriggerDeviceFieldRefs {
    readonly id: FieldRef<"TriggerDevice", 'String'>
    readonly deviceId: FieldRef<"TriggerDevice", 'String'>
    readonly deviceState: FieldRef<"TriggerDevice", 'Boolean'>
    readonly triggerId: FieldRef<"TriggerDevice", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TriggerDevice findUnique
   */
  export type TriggerDeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerDevice
     */
    select?: TriggerDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerDevice
     */
    omit?: TriggerDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerDeviceInclude<ExtArgs> | null
    /**
     * Filter, which TriggerDevice to fetch.
     */
    where: TriggerDeviceWhereUniqueInput
  }

  /**
   * TriggerDevice findUniqueOrThrow
   */
  export type TriggerDeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerDevice
     */
    select?: TriggerDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerDevice
     */
    omit?: TriggerDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerDeviceInclude<ExtArgs> | null
    /**
     * Filter, which TriggerDevice to fetch.
     */
    where: TriggerDeviceWhereUniqueInput
  }

  /**
   * TriggerDevice findFirst
   */
  export type TriggerDeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerDevice
     */
    select?: TriggerDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerDevice
     */
    omit?: TriggerDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerDeviceInclude<ExtArgs> | null
    /**
     * Filter, which TriggerDevice to fetch.
     */
    where?: TriggerDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriggerDevices to fetch.
     */
    orderBy?: TriggerDeviceOrderByWithRelationInput | TriggerDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriggerDevices.
     */
    cursor?: TriggerDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriggerDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriggerDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriggerDevices.
     */
    distinct?: TriggerDeviceScalarFieldEnum | TriggerDeviceScalarFieldEnum[]
  }

  /**
   * TriggerDevice findFirstOrThrow
   */
  export type TriggerDeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerDevice
     */
    select?: TriggerDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerDevice
     */
    omit?: TriggerDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerDeviceInclude<ExtArgs> | null
    /**
     * Filter, which TriggerDevice to fetch.
     */
    where?: TriggerDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriggerDevices to fetch.
     */
    orderBy?: TriggerDeviceOrderByWithRelationInput | TriggerDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriggerDevices.
     */
    cursor?: TriggerDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriggerDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriggerDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriggerDevices.
     */
    distinct?: TriggerDeviceScalarFieldEnum | TriggerDeviceScalarFieldEnum[]
  }

  /**
   * TriggerDevice findMany
   */
  export type TriggerDeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerDevice
     */
    select?: TriggerDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerDevice
     */
    omit?: TriggerDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerDeviceInclude<ExtArgs> | null
    /**
     * Filter, which TriggerDevices to fetch.
     */
    where?: TriggerDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriggerDevices to fetch.
     */
    orderBy?: TriggerDeviceOrderByWithRelationInput | TriggerDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TriggerDevices.
     */
    cursor?: TriggerDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriggerDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriggerDevices.
     */
    skip?: number
    distinct?: TriggerDeviceScalarFieldEnum | TriggerDeviceScalarFieldEnum[]
  }

  /**
   * TriggerDevice create
   */
  export type TriggerDeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerDevice
     */
    select?: TriggerDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerDevice
     */
    omit?: TriggerDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerDeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a TriggerDevice.
     */
    data: XOR<TriggerDeviceCreateInput, TriggerDeviceUncheckedCreateInput>
  }

  /**
   * TriggerDevice createMany
   */
  export type TriggerDeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TriggerDevices.
     */
    data: TriggerDeviceCreateManyInput | TriggerDeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TriggerDevice createManyAndReturn
   */
  export type TriggerDeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerDevice
     */
    select?: TriggerDeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerDevice
     */
    omit?: TriggerDeviceOmit<ExtArgs> | null
    /**
     * The data used to create many TriggerDevices.
     */
    data: TriggerDeviceCreateManyInput | TriggerDeviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerDeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TriggerDevice update
   */
  export type TriggerDeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerDevice
     */
    select?: TriggerDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerDevice
     */
    omit?: TriggerDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerDeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a TriggerDevice.
     */
    data: XOR<TriggerDeviceUpdateInput, TriggerDeviceUncheckedUpdateInput>
    /**
     * Choose, which TriggerDevice to update.
     */
    where: TriggerDeviceWhereUniqueInput
  }

  /**
   * TriggerDevice updateMany
   */
  export type TriggerDeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TriggerDevices.
     */
    data: XOR<TriggerDeviceUpdateManyMutationInput, TriggerDeviceUncheckedUpdateManyInput>
    /**
     * Filter which TriggerDevices to update
     */
    where?: TriggerDeviceWhereInput
    /**
     * Limit how many TriggerDevices to update.
     */
    limit?: number
  }

  /**
   * TriggerDevice updateManyAndReturn
   */
  export type TriggerDeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerDevice
     */
    select?: TriggerDeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerDevice
     */
    omit?: TriggerDeviceOmit<ExtArgs> | null
    /**
     * The data used to update TriggerDevices.
     */
    data: XOR<TriggerDeviceUpdateManyMutationInput, TriggerDeviceUncheckedUpdateManyInput>
    /**
     * Filter which TriggerDevices to update
     */
    where?: TriggerDeviceWhereInput
    /**
     * Limit how many TriggerDevices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerDeviceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TriggerDevice upsert
   */
  export type TriggerDeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerDevice
     */
    select?: TriggerDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerDevice
     */
    omit?: TriggerDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerDeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the TriggerDevice to update in case it exists.
     */
    where: TriggerDeviceWhereUniqueInput
    /**
     * In case the TriggerDevice found by the `where` argument doesn't exist, create a new TriggerDevice with this data.
     */
    create: XOR<TriggerDeviceCreateInput, TriggerDeviceUncheckedCreateInput>
    /**
     * In case the TriggerDevice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriggerDeviceUpdateInput, TriggerDeviceUncheckedUpdateInput>
  }

  /**
   * TriggerDevice delete
   */
  export type TriggerDeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerDevice
     */
    select?: TriggerDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerDevice
     */
    omit?: TriggerDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerDeviceInclude<ExtArgs> | null
    /**
     * Filter which TriggerDevice to delete.
     */
    where: TriggerDeviceWhereUniqueInput
  }

  /**
   * TriggerDevice deleteMany
   */
  export type TriggerDeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TriggerDevices to delete
     */
    where?: TriggerDeviceWhereInput
    /**
     * Limit how many TriggerDevices to delete.
     */
    limit?: number
  }

  /**
   * TriggerDevice without action
   */
  export type TriggerDeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerDevice
     */
    select?: TriggerDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerDevice
     */
    omit?: TriggerDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerDeviceInclude<ExtArgs> | null
  }


  /**
   * Model TriggerScene
   */

  export type AggregateTriggerScene = {
    _count: TriggerSceneCountAggregateOutputType | null
    _min: TriggerSceneMinAggregateOutputType | null
    _max: TriggerSceneMaxAggregateOutputType | null
  }

  export type TriggerSceneMinAggregateOutputType = {
    id: string | null
    sceneId: string | null
    triggerId: string | null
  }

  export type TriggerSceneMaxAggregateOutputType = {
    id: string | null
    sceneId: string | null
    triggerId: string | null
  }

  export type TriggerSceneCountAggregateOutputType = {
    id: number
    sceneId: number
    triggerId: number
    _all: number
  }


  export type TriggerSceneMinAggregateInputType = {
    id?: true
    sceneId?: true
    triggerId?: true
  }

  export type TriggerSceneMaxAggregateInputType = {
    id?: true
    sceneId?: true
    triggerId?: true
  }

  export type TriggerSceneCountAggregateInputType = {
    id?: true
    sceneId?: true
    triggerId?: true
    _all?: true
  }

  export type TriggerSceneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TriggerScene to aggregate.
     */
    where?: TriggerSceneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriggerScenes to fetch.
     */
    orderBy?: TriggerSceneOrderByWithRelationInput | TriggerSceneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriggerSceneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriggerScenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriggerScenes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TriggerScenes
    **/
    _count?: true | TriggerSceneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriggerSceneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriggerSceneMaxAggregateInputType
  }

  export type GetTriggerSceneAggregateType<T extends TriggerSceneAggregateArgs> = {
        [P in keyof T & keyof AggregateTriggerScene]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTriggerScene[P]>
      : GetScalarType<T[P], AggregateTriggerScene[P]>
  }




  export type TriggerSceneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerSceneWhereInput
    orderBy?: TriggerSceneOrderByWithAggregationInput | TriggerSceneOrderByWithAggregationInput[]
    by: TriggerSceneScalarFieldEnum[] | TriggerSceneScalarFieldEnum
    having?: TriggerSceneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriggerSceneCountAggregateInputType | true
    _min?: TriggerSceneMinAggregateInputType
    _max?: TriggerSceneMaxAggregateInputType
  }

  export type TriggerSceneGroupByOutputType = {
    id: string
    sceneId: string
    triggerId: string
    _count: TriggerSceneCountAggregateOutputType | null
    _min: TriggerSceneMinAggregateOutputType | null
    _max: TriggerSceneMaxAggregateOutputType | null
  }

  type GetTriggerSceneGroupByPayload<T extends TriggerSceneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TriggerSceneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriggerSceneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriggerSceneGroupByOutputType[P]>
            : GetScalarType<T[P], TriggerSceneGroupByOutputType[P]>
        }
      >
    >


  export type TriggerSceneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sceneId?: boolean
    triggerId?: boolean
    trigger?: boolean | TriggerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["triggerScene"]>

  export type TriggerSceneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sceneId?: boolean
    triggerId?: boolean
    trigger?: boolean | TriggerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["triggerScene"]>

  export type TriggerSceneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sceneId?: boolean
    triggerId?: boolean
    trigger?: boolean | TriggerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["triggerScene"]>

  export type TriggerSceneSelectScalar = {
    id?: boolean
    sceneId?: boolean
    triggerId?: boolean
  }

  export type TriggerSceneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sceneId" | "triggerId", ExtArgs["result"]["triggerScene"]>
  export type TriggerSceneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trigger?: boolean | TriggerDefaultArgs<ExtArgs>
  }
  export type TriggerSceneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trigger?: boolean | TriggerDefaultArgs<ExtArgs>
  }
  export type TriggerSceneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trigger?: boolean | TriggerDefaultArgs<ExtArgs>
  }

  export type $TriggerScenePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TriggerScene"
    objects: {
      trigger: Prisma.$TriggerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sceneId: string
      triggerId: string
    }, ExtArgs["result"]["triggerScene"]>
    composites: {}
  }

  type TriggerSceneGetPayload<S extends boolean | null | undefined | TriggerSceneDefaultArgs> = $Result.GetResult<Prisma.$TriggerScenePayload, S>

  type TriggerSceneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TriggerSceneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TriggerSceneCountAggregateInputType | true
    }

  export interface TriggerSceneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TriggerScene'], meta: { name: 'TriggerScene' } }
    /**
     * Find zero or one TriggerScene that matches the filter.
     * @param {TriggerSceneFindUniqueArgs} args - Arguments to find a TriggerScene
     * @example
     * // Get one TriggerScene
     * const triggerScene = await prisma.triggerScene.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TriggerSceneFindUniqueArgs>(args: SelectSubset<T, TriggerSceneFindUniqueArgs<ExtArgs>>): Prisma__TriggerSceneClient<$Result.GetResult<Prisma.$TriggerScenePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TriggerScene that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TriggerSceneFindUniqueOrThrowArgs} args - Arguments to find a TriggerScene
     * @example
     * // Get one TriggerScene
     * const triggerScene = await prisma.triggerScene.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TriggerSceneFindUniqueOrThrowArgs>(args: SelectSubset<T, TriggerSceneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TriggerSceneClient<$Result.GetResult<Prisma.$TriggerScenePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TriggerScene that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerSceneFindFirstArgs} args - Arguments to find a TriggerScene
     * @example
     * // Get one TriggerScene
     * const triggerScene = await prisma.triggerScene.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TriggerSceneFindFirstArgs>(args?: SelectSubset<T, TriggerSceneFindFirstArgs<ExtArgs>>): Prisma__TriggerSceneClient<$Result.GetResult<Prisma.$TriggerScenePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TriggerScene that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerSceneFindFirstOrThrowArgs} args - Arguments to find a TriggerScene
     * @example
     * // Get one TriggerScene
     * const triggerScene = await prisma.triggerScene.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TriggerSceneFindFirstOrThrowArgs>(args?: SelectSubset<T, TriggerSceneFindFirstOrThrowArgs<ExtArgs>>): Prisma__TriggerSceneClient<$Result.GetResult<Prisma.$TriggerScenePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TriggerScenes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerSceneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TriggerScenes
     * const triggerScenes = await prisma.triggerScene.findMany()
     * 
     * // Get first 10 TriggerScenes
     * const triggerScenes = await prisma.triggerScene.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triggerSceneWithIdOnly = await prisma.triggerScene.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TriggerSceneFindManyArgs>(args?: SelectSubset<T, TriggerSceneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerScenePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TriggerScene.
     * @param {TriggerSceneCreateArgs} args - Arguments to create a TriggerScene.
     * @example
     * // Create one TriggerScene
     * const TriggerScene = await prisma.triggerScene.create({
     *   data: {
     *     // ... data to create a TriggerScene
     *   }
     * })
     * 
     */
    create<T extends TriggerSceneCreateArgs>(args: SelectSubset<T, TriggerSceneCreateArgs<ExtArgs>>): Prisma__TriggerSceneClient<$Result.GetResult<Prisma.$TriggerScenePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TriggerScenes.
     * @param {TriggerSceneCreateManyArgs} args - Arguments to create many TriggerScenes.
     * @example
     * // Create many TriggerScenes
     * const triggerScene = await prisma.triggerScene.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TriggerSceneCreateManyArgs>(args?: SelectSubset<T, TriggerSceneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TriggerScenes and returns the data saved in the database.
     * @param {TriggerSceneCreateManyAndReturnArgs} args - Arguments to create many TriggerScenes.
     * @example
     * // Create many TriggerScenes
     * const triggerScene = await prisma.triggerScene.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TriggerScenes and only return the `id`
     * const triggerSceneWithIdOnly = await prisma.triggerScene.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TriggerSceneCreateManyAndReturnArgs>(args?: SelectSubset<T, TriggerSceneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerScenePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TriggerScene.
     * @param {TriggerSceneDeleteArgs} args - Arguments to delete one TriggerScene.
     * @example
     * // Delete one TriggerScene
     * const TriggerScene = await prisma.triggerScene.delete({
     *   where: {
     *     // ... filter to delete one TriggerScene
     *   }
     * })
     * 
     */
    delete<T extends TriggerSceneDeleteArgs>(args: SelectSubset<T, TriggerSceneDeleteArgs<ExtArgs>>): Prisma__TriggerSceneClient<$Result.GetResult<Prisma.$TriggerScenePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TriggerScene.
     * @param {TriggerSceneUpdateArgs} args - Arguments to update one TriggerScene.
     * @example
     * // Update one TriggerScene
     * const triggerScene = await prisma.triggerScene.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TriggerSceneUpdateArgs>(args: SelectSubset<T, TriggerSceneUpdateArgs<ExtArgs>>): Prisma__TriggerSceneClient<$Result.GetResult<Prisma.$TriggerScenePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TriggerScenes.
     * @param {TriggerSceneDeleteManyArgs} args - Arguments to filter TriggerScenes to delete.
     * @example
     * // Delete a few TriggerScenes
     * const { count } = await prisma.triggerScene.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TriggerSceneDeleteManyArgs>(args?: SelectSubset<T, TriggerSceneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TriggerScenes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerSceneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TriggerScenes
     * const triggerScene = await prisma.triggerScene.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TriggerSceneUpdateManyArgs>(args: SelectSubset<T, TriggerSceneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TriggerScenes and returns the data updated in the database.
     * @param {TriggerSceneUpdateManyAndReturnArgs} args - Arguments to update many TriggerScenes.
     * @example
     * // Update many TriggerScenes
     * const triggerScene = await prisma.triggerScene.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TriggerScenes and only return the `id`
     * const triggerSceneWithIdOnly = await prisma.triggerScene.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TriggerSceneUpdateManyAndReturnArgs>(args: SelectSubset<T, TriggerSceneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerScenePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TriggerScene.
     * @param {TriggerSceneUpsertArgs} args - Arguments to update or create a TriggerScene.
     * @example
     * // Update or create a TriggerScene
     * const triggerScene = await prisma.triggerScene.upsert({
     *   create: {
     *     // ... data to create a TriggerScene
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TriggerScene we want to update
     *   }
     * })
     */
    upsert<T extends TriggerSceneUpsertArgs>(args: SelectSubset<T, TriggerSceneUpsertArgs<ExtArgs>>): Prisma__TriggerSceneClient<$Result.GetResult<Prisma.$TriggerScenePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TriggerScenes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerSceneCountArgs} args - Arguments to filter TriggerScenes to count.
     * @example
     * // Count the number of TriggerScenes
     * const count = await prisma.triggerScene.count({
     *   where: {
     *     // ... the filter for the TriggerScenes we want to count
     *   }
     * })
    **/
    count<T extends TriggerSceneCountArgs>(
      args?: Subset<T, TriggerSceneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriggerSceneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TriggerScene.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerSceneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TriggerSceneAggregateArgs>(args: Subset<T, TriggerSceneAggregateArgs>): Prisma.PrismaPromise<GetTriggerSceneAggregateType<T>>

    /**
     * Group by TriggerScene.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerSceneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TriggerSceneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriggerSceneGroupByArgs['orderBy'] }
        : { orderBy?: TriggerSceneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TriggerSceneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriggerSceneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TriggerScene model
   */
  readonly fields: TriggerSceneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TriggerScene.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TriggerSceneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trigger<T extends TriggerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TriggerDefaultArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TriggerScene model
   */
  interface TriggerSceneFieldRefs {
    readonly id: FieldRef<"TriggerScene", 'String'>
    readonly sceneId: FieldRef<"TriggerScene", 'String'>
    readonly triggerId: FieldRef<"TriggerScene", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TriggerScene findUnique
   */
  export type TriggerSceneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerScene
     */
    select?: TriggerSceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerScene
     */
    omit?: TriggerSceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerSceneInclude<ExtArgs> | null
    /**
     * Filter, which TriggerScene to fetch.
     */
    where: TriggerSceneWhereUniqueInput
  }

  /**
   * TriggerScene findUniqueOrThrow
   */
  export type TriggerSceneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerScene
     */
    select?: TriggerSceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerScene
     */
    omit?: TriggerSceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerSceneInclude<ExtArgs> | null
    /**
     * Filter, which TriggerScene to fetch.
     */
    where: TriggerSceneWhereUniqueInput
  }

  /**
   * TriggerScene findFirst
   */
  export type TriggerSceneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerScene
     */
    select?: TriggerSceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerScene
     */
    omit?: TriggerSceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerSceneInclude<ExtArgs> | null
    /**
     * Filter, which TriggerScene to fetch.
     */
    where?: TriggerSceneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriggerScenes to fetch.
     */
    orderBy?: TriggerSceneOrderByWithRelationInput | TriggerSceneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriggerScenes.
     */
    cursor?: TriggerSceneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriggerScenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriggerScenes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriggerScenes.
     */
    distinct?: TriggerSceneScalarFieldEnum | TriggerSceneScalarFieldEnum[]
  }

  /**
   * TriggerScene findFirstOrThrow
   */
  export type TriggerSceneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerScene
     */
    select?: TriggerSceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerScene
     */
    omit?: TriggerSceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerSceneInclude<ExtArgs> | null
    /**
     * Filter, which TriggerScene to fetch.
     */
    where?: TriggerSceneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriggerScenes to fetch.
     */
    orderBy?: TriggerSceneOrderByWithRelationInput | TriggerSceneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriggerScenes.
     */
    cursor?: TriggerSceneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriggerScenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriggerScenes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriggerScenes.
     */
    distinct?: TriggerSceneScalarFieldEnum | TriggerSceneScalarFieldEnum[]
  }

  /**
   * TriggerScene findMany
   */
  export type TriggerSceneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerScene
     */
    select?: TriggerSceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerScene
     */
    omit?: TriggerSceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerSceneInclude<ExtArgs> | null
    /**
     * Filter, which TriggerScenes to fetch.
     */
    where?: TriggerSceneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriggerScenes to fetch.
     */
    orderBy?: TriggerSceneOrderByWithRelationInput | TriggerSceneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TriggerScenes.
     */
    cursor?: TriggerSceneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriggerScenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriggerScenes.
     */
    skip?: number
    distinct?: TriggerSceneScalarFieldEnum | TriggerSceneScalarFieldEnum[]
  }

  /**
   * TriggerScene create
   */
  export type TriggerSceneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerScene
     */
    select?: TriggerSceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerScene
     */
    omit?: TriggerSceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerSceneInclude<ExtArgs> | null
    /**
     * The data needed to create a TriggerScene.
     */
    data: XOR<TriggerSceneCreateInput, TriggerSceneUncheckedCreateInput>
  }

  /**
   * TriggerScene createMany
   */
  export type TriggerSceneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TriggerScenes.
     */
    data: TriggerSceneCreateManyInput | TriggerSceneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TriggerScene createManyAndReturn
   */
  export type TriggerSceneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerScene
     */
    select?: TriggerSceneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerScene
     */
    omit?: TriggerSceneOmit<ExtArgs> | null
    /**
     * The data used to create many TriggerScenes.
     */
    data: TriggerSceneCreateManyInput | TriggerSceneCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerSceneIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TriggerScene update
   */
  export type TriggerSceneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerScene
     */
    select?: TriggerSceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerScene
     */
    omit?: TriggerSceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerSceneInclude<ExtArgs> | null
    /**
     * The data needed to update a TriggerScene.
     */
    data: XOR<TriggerSceneUpdateInput, TriggerSceneUncheckedUpdateInput>
    /**
     * Choose, which TriggerScene to update.
     */
    where: TriggerSceneWhereUniqueInput
  }

  /**
   * TriggerScene updateMany
   */
  export type TriggerSceneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TriggerScenes.
     */
    data: XOR<TriggerSceneUpdateManyMutationInput, TriggerSceneUncheckedUpdateManyInput>
    /**
     * Filter which TriggerScenes to update
     */
    where?: TriggerSceneWhereInput
    /**
     * Limit how many TriggerScenes to update.
     */
    limit?: number
  }

  /**
   * TriggerScene updateManyAndReturn
   */
  export type TriggerSceneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerScene
     */
    select?: TriggerSceneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerScene
     */
    omit?: TriggerSceneOmit<ExtArgs> | null
    /**
     * The data used to update TriggerScenes.
     */
    data: XOR<TriggerSceneUpdateManyMutationInput, TriggerSceneUncheckedUpdateManyInput>
    /**
     * Filter which TriggerScenes to update
     */
    where?: TriggerSceneWhereInput
    /**
     * Limit how many TriggerScenes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerSceneIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TriggerScene upsert
   */
  export type TriggerSceneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerScene
     */
    select?: TriggerSceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerScene
     */
    omit?: TriggerSceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerSceneInclude<ExtArgs> | null
    /**
     * The filter to search for the TriggerScene to update in case it exists.
     */
    where: TriggerSceneWhereUniqueInput
    /**
     * In case the TriggerScene found by the `where` argument doesn't exist, create a new TriggerScene with this data.
     */
    create: XOR<TriggerSceneCreateInput, TriggerSceneUncheckedCreateInput>
    /**
     * In case the TriggerScene was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriggerSceneUpdateInput, TriggerSceneUncheckedUpdateInput>
  }

  /**
   * TriggerScene delete
   */
  export type TriggerSceneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerScene
     */
    select?: TriggerSceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerScene
     */
    omit?: TriggerSceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerSceneInclude<ExtArgs> | null
    /**
     * Filter which TriggerScene to delete.
     */
    where: TriggerSceneWhereUniqueInput
  }

  /**
   * TriggerScene deleteMany
   */
  export type TriggerSceneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TriggerScenes to delete
     */
    where?: TriggerSceneWhereInput
    /**
     * Limit how many TriggerScenes to delete.
     */
    limit?: number
  }

  /**
   * TriggerScene without action
   */
  export type TriggerSceneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerScene
     */
    select?: TriggerSceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerScene
     */
    omit?: TriggerSceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerSceneInclude<ExtArgs> | null
  }


  /**
   * Model Action
   */

  export type AggregateAction = {
    _count: ActionCountAggregateOutputType | null
    _min: ActionMinAggregateOutputType | null
    _max: ActionMaxAggregateOutputType | null
  }

  export type ActionMinAggregateOutputType = {
    id: string | null
    type: string | null
    automationId: string | null
  }

  export type ActionMaxAggregateOutputType = {
    id: string | null
    type: string | null
    automationId: string | null
  }

  export type ActionCountAggregateOutputType = {
    id: number
    type: number
    automationId: number
    _all: number
  }


  export type ActionMinAggregateInputType = {
    id?: true
    type?: true
    automationId?: true
  }

  export type ActionMaxAggregateInputType = {
    id?: true
    type?: true
    automationId?: true
  }

  export type ActionCountAggregateInputType = {
    id?: true
    type?: true
    automationId?: true
    _all?: true
  }

  export type ActionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Action to aggregate.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Actions
    **/
    _count?: true | ActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActionMaxAggregateInputType
  }

  export type GetActionAggregateType<T extends ActionAggregateArgs> = {
        [P in keyof T & keyof AggregateAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAction[P]>
      : GetScalarType<T[P], AggregateAction[P]>
  }




  export type ActionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithAggregationInput | ActionOrderByWithAggregationInput[]
    by: ActionScalarFieldEnum[] | ActionScalarFieldEnum
    having?: ActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActionCountAggregateInputType | true
    _min?: ActionMinAggregateInputType
    _max?: ActionMaxAggregateInputType
  }

  export type ActionGroupByOutputType = {
    id: string
    type: string
    automationId: string
    _count: ActionCountAggregateOutputType | null
    _min: ActionMinAggregateOutputType | null
    _max: ActionMaxAggregateOutputType | null
  }

  type GetActionGroupByPayload<T extends ActionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActionGroupByOutputType[P]>
            : GetScalarType<T[P], ActionGroupByOutputType[P]>
        }
      >
    >


  export type ActionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    automationId?: boolean
    automation?: boolean | AutomationDefaultArgs<ExtArgs>
    deviceAction?: boolean | Action$deviceActionArgs<ExtArgs>
    sceneAction?: boolean | Action$sceneActionArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    automationId?: boolean
    automation?: boolean | AutomationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    automationId?: boolean
    automation?: boolean | AutomationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectScalar = {
    id?: boolean
    type?: boolean
    automationId?: boolean
  }

  export type ActionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "automationId", ExtArgs["result"]["action"]>
  export type ActionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    automation?: boolean | AutomationDefaultArgs<ExtArgs>
    deviceAction?: boolean | Action$deviceActionArgs<ExtArgs>
    sceneAction?: boolean | Action$sceneActionArgs<ExtArgs>
  }
  export type ActionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    automation?: boolean | AutomationDefaultArgs<ExtArgs>
  }
  export type ActionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    automation?: boolean | AutomationDefaultArgs<ExtArgs>
  }

  export type $ActionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Action"
    objects: {
      automation: Prisma.$AutomationPayload<ExtArgs>
      deviceAction: Prisma.$ActionDevicePayload<ExtArgs> | null
      sceneAction: Prisma.$ActionScenePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      automationId: string
    }, ExtArgs["result"]["action"]>
    composites: {}
  }

  type ActionGetPayload<S extends boolean | null | undefined | ActionDefaultArgs> = $Result.GetResult<Prisma.$ActionPayload, S>

  type ActionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActionCountAggregateInputType | true
    }

  export interface ActionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Action'], meta: { name: 'Action' } }
    /**
     * Find zero or one Action that matches the filter.
     * @param {ActionFindUniqueArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActionFindUniqueArgs>(args: SelectSubset<T, ActionFindUniqueArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Action that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActionFindUniqueOrThrowArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActionFindUniqueOrThrowArgs>(args: SelectSubset<T, ActionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Action that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindFirstArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActionFindFirstArgs>(args?: SelectSubset<T, ActionFindFirstArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Action that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindFirstOrThrowArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActionFindFirstOrThrowArgs>(args?: SelectSubset<T, ActionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Actions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actions
     * const actions = await prisma.action.findMany()
     * 
     * // Get first 10 Actions
     * const actions = await prisma.action.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actionWithIdOnly = await prisma.action.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActionFindManyArgs>(args?: SelectSubset<T, ActionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Action.
     * @param {ActionCreateArgs} args - Arguments to create a Action.
     * @example
     * // Create one Action
     * const Action = await prisma.action.create({
     *   data: {
     *     // ... data to create a Action
     *   }
     * })
     * 
     */
    create<T extends ActionCreateArgs>(args: SelectSubset<T, ActionCreateArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Actions.
     * @param {ActionCreateManyArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const action = await prisma.action.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActionCreateManyArgs>(args?: SelectSubset<T, ActionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Actions and returns the data saved in the database.
     * @param {ActionCreateManyAndReturnArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const action = await prisma.action.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Actions and only return the `id`
     * const actionWithIdOnly = await prisma.action.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActionCreateManyAndReturnArgs>(args?: SelectSubset<T, ActionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Action.
     * @param {ActionDeleteArgs} args - Arguments to delete one Action.
     * @example
     * // Delete one Action
     * const Action = await prisma.action.delete({
     *   where: {
     *     // ... filter to delete one Action
     *   }
     * })
     * 
     */
    delete<T extends ActionDeleteArgs>(args: SelectSubset<T, ActionDeleteArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Action.
     * @param {ActionUpdateArgs} args - Arguments to update one Action.
     * @example
     * // Update one Action
     * const action = await prisma.action.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActionUpdateArgs>(args: SelectSubset<T, ActionUpdateArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Actions.
     * @param {ActionDeleteManyArgs} args - Arguments to filter Actions to delete.
     * @example
     * // Delete a few Actions
     * const { count } = await prisma.action.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActionDeleteManyArgs>(args?: SelectSubset<T, ActionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actions
     * const action = await prisma.action.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActionUpdateManyArgs>(args: SelectSubset<T, ActionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actions and returns the data updated in the database.
     * @param {ActionUpdateManyAndReturnArgs} args - Arguments to update many Actions.
     * @example
     * // Update many Actions
     * const action = await prisma.action.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Actions and only return the `id`
     * const actionWithIdOnly = await prisma.action.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActionUpdateManyAndReturnArgs>(args: SelectSubset<T, ActionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Action.
     * @param {ActionUpsertArgs} args - Arguments to update or create a Action.
     * @example
     * // Update or create a Action
     * const action = await prisma.action.upsert({
     *   create: {
     *     // ... data to create a Action
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Action we want to update
     *   }
     * })
     */
    upsert<T extends ActionUpsertArgs>(args: SelectSubset<T, ActionUpsertArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionCountArgs} args - Arguments to filter Actions to count.
     * @example
     * // Count the number of Actions
     * const count = await prisma.action.count({
     *   where: {
     *     // ... the filter for the Actions we want to count
     *   }
     * })
    **/
    count<T extends ActionCountArgs>(
      args?: Subset<T, ActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Action.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActionAggregateArgs>(args: Subset<T, ActionAggregateArgs>): Prisma.PrismaPromise<GetActionAggregateType<T>>

    /**
     * Group by Action.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActionGroupByArgs['orderBy'] }
        : { orderBy?: ActionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Action model
   */
  readonly fields: ActionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Action.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    automation<T extends AutomationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AutomationDefaultArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    deviceAction<T extends Action$deviceActionArgs<ExtArgs> = {}>(args?: Subset<T, Action$deviceActionArgs<ExtArgs>>): Prisma__ActionDeviceClient<$Result.GetResult<Prisma.$ActionDevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sceneAction<T extends Action$sceneActionArgs<ExtArgs> = {}>(args?: Subset<T, Action$sceneActionArgs<ExtArgs>>): Prisma__ActionSceneClient<$Result.GetResult<Prisma.$ActionScenePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Action model
   */
  interface ActionFieldRefs {
    readonly id: FieldRef<"Action", 'String'>
    readonly type: FieldRef<"Action", 'String'>
    readonly automationId: FieldRef<"Action", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Action findUnique
   */
  export type ActionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action findUniqueOrThrow
   */
  export type ActionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action findFirst
   */
  export type ActionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actions.
     */
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action findFirstOrThrow
   */
  export type ActionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actions.
     */
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action findMany
   */
  export type ActionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Actions to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action create
   */
  export type ActionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The data needed to create a Action.
     */
    data: XOR<ActionCreateInput, ActionUncheckedCreateInput>
  }

  /**
   * Action createMany
   */
  export type ActionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Actions.
     */
    data: ActionCreateManyInput | ActionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Action createManyAndReturn
   */
  export type ActionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * The data used to create many Actions.
     */
    data: ActionCreateManyInput | ActionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Action update
   */
  export type ActionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The data needed to update a Action.
     */
    data: XOR<ActionUpdateInput, ActionUncheckedUpdateInput>
    /**
     * Choose, which Action to update.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action updateMany
   */
  export type ActionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Actions.
     */
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyInput>
    /**
     * Filter which Actions to update
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to update.
     */
    limit?: number
  }

  /**
   * Action updateManyAndReturn
   */
  export type ActionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * The data used to update Actions.
     */
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyInput>
    /**
     * Filter which Actions to update
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Action upsert
   */
  export type ActionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The filter to search for the Action to update in case it exists.
     */
    where: ActionWhereUniqueInput
    /**
     * In case the Action found by the `where` argument doesn't exist, create a new Action with this data.
     */
    create: XOR<ActionCreateInput, ActionUncheckedCreateInput>
    /**
     * In case the Action was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActionUpdateInput, ActionUncheckedUpdateInput>
  }

  /**
   * Action delete
   */
  export type ActionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter which Action to delete.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action deleteMany
   */
  export type ActionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actions to delete
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to delete.
     */
    limit?: number
  }

  /**
   * Action.deviceAction
   */
  export type Action$deviceActionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionDevice
     */
    select?: ActionDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionDevice
     */
    omit?: ActionDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionDeviceInclude<ExtArgs> | null
    where?: ActionDeviceWhereInput
  }

  /**
   * Action.sceneAction
   */
  export type Action$sceneActionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionScene
     */
    select?: ActionSceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionScene
     */
    omit?: ActionSceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionSceneInclude<ExtArgs> | null
    where?: ActionSceneWhereInput
  }

  /**
   * Action without action
   */
  export type ActionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
  }


  /**
   * Model ActionDevice
   */

  export type AggregateActionDevice = {
    _count: ActionDeviceCountAggregateOutputType | null
    _avg: ActionDeviceAvgAggregateOutputType | null
    _sum: ActionDeviceSumAggregateOutputType | null
    _min: ActionDeviceMinAggregateOutputType | null
    _max: ActionDeviceMaxAggregateOutputType | null
  }

  export type ActionDeviceAvgAggregateOutputType = {
    brightness: number | null
    temperature: number | null
    level: number | null
  }

  export type ActionDeviceSumAggregateOutputType = {
    brightness: number | null
    temperature: number | null
    level: number | null
  }

  export type ActionDeviceMinAggregateOutputType = {
    id: string | null
    targetId: string | null
    state: boolean | null
    brightness: number | null
    temperature: number | null
    level: number | null
    actionId: string | null
  }

  export type ActionDeviceMaxAggregateOutputType = {
    id: string | null
    targetId: string | null
    state: boolean | null
    brightness: number | null
    temperature: number | null
    level: number | null
    actionId: string | null
  }

  export type ActionDeviceCountAggregateOutputType = {
    id: number
    targetId: number
    state: number
    brightness: number
    temperature: number
    level: number
    actionId: number
    _all: number
  }


  export type ActionDeviceAvgAggregateInputType = {
    brightness?: true
    temperature?: true
    level?: true
  }

  export type ActionDeviceSumAggregateInputType = {
    brightness?: true
    temperature?: true
    level?: true
  }

  export type ActionDeviceMinAggregateInputType = {
    id?: true
    targetId?: true
    state?: true
    brightness?: true
    temperature?: true
    level?: true
    actionId?: true
  }

  export type ActionDeviceMaxAggregateInputType = {
    id?: true
    targetId?: true
    state?: true
    brightness?: true
    temperature?: true
    level?: true
    actionId?: true
  }

  export type ActionDeviceCountAggregateInputType = {
    id?: true
    targetId?: true
    state?: true
    brightness?: true
    temperature?: true
    level?: true
    actionId?: true
    _all?: true
  }

  export type ActionDeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActionDevice to aggregate.
     */
    where?: ActionDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionDevices to fetch.
     */
    orderBy?: ActionDeviceOrderByWithRelationInput | ActionDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActionDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActionDevices
    **/
    _count?: true | ActionDeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActionDeviceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActionDeviceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActionDeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActionDeviceMaxAggregateInputType
  }

  export type GetActionDeviceAggregateType<T extends ActionDeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateActionDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActionDevice[P]>
      : GetScalarType<T[P], AggregateActionDevice[P]>
  }




  export type ActionDeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionDeviceWhereInput
    orderBy?: ActionDeviceOrderByWithAggregationInput | ActionDeviceOrderByWithAggregationInput[]
    by: ActionDeviceScalarFieldEnum[] | ActionDeviceScalarFieldEnum
    having?: ActionDeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActionDeviceCountAggregateInputType | true
    _avg?: ActionDeviceAvgAggregateInputType
    _sum?: ActionDeviceSumAggregateInputType
    _min?: ActionDeviceMinAggregateInputType
    _max?: ActionDeviceMaxAggregateInputType
  }

  export type ActionDeviceGroupByOutputType = {
    id: string
    targetId: string
    state: boolean | null
    brightness: number | null
    temperature: number | null
    level: number | null
    actionId: string
    _count: ActionDeviceCountAggregateOutputType | null
    _avg: ActionDeviceAvgAggregateOutputType | null
    _sum: ActionDeviceSumAggregateOutputType | null
    _min: ActionDeviceMinAggregateOutputType | null
    _max: ActionDeviceMaxAggregateOutputType | null
  }

  type GetActionDeviceGroupByPayload<T extends ActionDeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActionDeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActionDeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActionDeviceGroupByOutputType[P]>
            : GetScalarType<T[P], ActionDeviceGroupByOutputType[P]>
        }
      >
    >


  export type ActionDeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    targetId?: boolean
    state?: boolean
    brightness?: boolean
    temperature?: boolean
    level?: boolean
    actionId?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actionDevice"]>

  export type ActionDeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    targetId?: boolean
    state?: boolean
    brightness?: boolean
    temperature?: boolean
    level?: boolean
    actionId?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actionDevice"]>

  export type ActionDeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    targetId?: boolean
    state?: boolean
    brightness?: boolean
    temperature?: boolean
    level?: boolean
    actionId?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actionDevice"]>

  export type ActionDeviceSelectScalar = {
    id?: boolean
    targetId?: boolean
    state?: boolean
    brightness?: boolean
    temperature?: boolean
    level?: boolean
    actionId?: boolean
  }

  export type ActionDeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "targetId" | "state" | "brightness" | "temperature" | "level" | "actionId", ExtArgs["result"]["actionDevice"]>
  export type ActionDeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }
  export type ActionDeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }
  export type ActionDeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }

  export type $ActionDevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActionDevice"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs>
      action: Prisma.$ActionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      targetId: string
      state: boolean | null
      brightness: number | null
      temperature: number | null
      level: number | null
      actionId: string
    }, ExtArgs["result"]["actionDevice"]>
    composites: {}
  }

  type ActionDeviceGetPayload<S extends boolean | null | undefined | ActionDeviceDefaultArgs> = $Result.GetResult<Prisma.$ActionDevicePayload, S>

  type ActionDeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActionDeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActionDeviceCountAggregateInputType | true
    }

  export interface ActionDeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActionDevice'], meta: { name: 'ActionDevice' } }
    /**
     * Find zero or one ActionDevice that matches the filter.
     * @param {ActionDeviceFindUniqueArgs} args - Arguments to find a ActionDevice
     * @example
     * // Get one ActionDevice
     * const actionDevice = await prisma.actionDevice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActionDeviceFindUniqueArgs>(args: SelectSubset<T, ActionDeviceFindUniqueArgs<ExtArgs>>): Prisma__ActionDeviceClient<$Result.GetResult<Prisma.$ActionDevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActionDevice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActionDeviceFindUniqueOrThrowArgs} args - Arguments to find a ActionDevice
     * @example
     * // Get one ActionDevice
     * const actionDevice = await prisma.actionDevice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActionDeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, ActionDeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActionDeviceClient<$Result.GetResult<Prisma.$ActionDevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActionDevice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionDeviceFindFirstArgs} args - Arguments to find a ActionDevice
     * @example
     * // Get one ActionDevice
     * const actionDevice = await prisma.actionDevice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActionDeviceFindFirstArgs>(args?: SelectSubset<T, ActionDeviceFindFirstArgs<ExtArgs>>): Prisma__ActionDeviceClient<$Result.GetResult<Prisma.$ActionDevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActionDevice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionDeviceFindFirstOrThrowArgs} args - Arguments to find a ActionDevice
     * @example
     * // Get one ActionDevice
     * const actionDevice = await prisma.actionDevice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActionDeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, ActionDeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActionDeviceClient<$Result.GetResult<Prisma.$ActionDevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActionDevices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionDeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActionDevices
     * const actionDevices = await prisma.actionDevice.findMany()
     * 
     * // Get first 10 ActionDevices
     * const actionDevices = await prisma.actionDevice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actionDeviceWithIdOnly = await prisma.actionDevice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActionDeviceFindManyArgs>(args?: SelectSubset<T, ActionDeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionDevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActionDevice.
     * @param {ActionDeviceCreateArgs} args - Arguments to create a ActionDevice.
     * @example
     * // Create one ActionDevice
     * const ActionDevice = await prisma.actionDevice.create({
     *   data: {
     *     // ... data to create a ActionDevice
     *   }
     * })
     * 
     */
    create<T extends ActionDeviceCreateArgs>(args: SelectSubset<T, ActionDeviceCreateArgs<ExtArgs>>): Prisma__ActionDeviceClient<$Result.GetResult<Prisma.$ActionDevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActionDevices.
     * @param {ActionDeviceCreateManyArgs} args - Arguments to create many ActionDevices.
     * @example
     * // Create many ActionDevices
     * const actionDevice = await prisma.actionDevice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActionDeviceCreateManyArgs>(args?: SelectSubset<T, ActionDeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActionDevices and returns the data saved in the database.
     * @param {ActionDeviceCreateManyAndReturnArgs} args - Arguments to create many ActionDevices.
     * @example
     * // Create many ActionDevices
     * const actionDevice = await prisma.actionDevice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActionDevices and only return the `id`
     * const actionDeviceWithIdOnly = await prisma.actionDevice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActionDeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, ActionDeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionDevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActionDevice.
     * @param {ActionDeviceDeleteArgs} args - Arguments to delete one ActionDevice.
     * @example
     * // Delete one ActionDevice
     * const ActionDevice = await prisma.actionDevice.delete({
     *   where: {
     *     // ... filter to delete one ActionDevice
     *   }
     * })
     * 
     */
    delete<T extends ActionDeviceDeleteArgs>(args: SelectSubset<T, ActionDeviceDeleteArgs<ExtArgs>>): Prisma__ActionDeviceClient<$Result.GetResult<Prisma.$ActionDevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActionDevice.
     * @param {ActionDeviceUpdateArgs} args - Arguments to update one ActionDevice.
     * @example
     * // Update one ActionDevice
     * const actionDevice = await prisma.actionDevice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActionDeviceUpdateArgs>(args: SelectSubset<T, ActionDeviceUpdateArgs<ExtArgs>>): Prisma__ActionDeviceClient<$Result.GetResult<Prisma.$ActionDevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActionDevices.
     * @param {ActionDeviceDeleteManyArgs} args - Arguments to filter ActionDevices to delete.
     * @example
     * // Delete a few ActionDevices
     * const { count } = await prisma.actionDevice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActionDeviceDeleteManyArgs>(args?: SelectSubset<T, ActionDeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActionDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionDeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActionDevices
     * const actionDevice = await prisma.actionDevice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActionDeviceUpdateManyArgs>(args: SelectSubset<T, ActionDeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActionDevices and returns the data updated in the database.
     * @param {ActionDeviceUpdateManyAndReturnArgs} args - Arguments to update many ActionDevices.
     * @example
     * // Update many ActionDevices
     * const actionDevice = await prisma.actionDevice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActionDevices and only return the `id`
     * const actionDeviceWithIdOnly = await prisma.actionDevice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActionDeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, ActionDeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionDevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActionDevice.
     * @param {ActionDeviceUpsertArgs} args - Arguments to update or create a ActionDevice.
     * @example
     * // Update or create a ActionDevice
     * const actionDevice = await prisma.actionDevice.upsert({
     *   create: {
     *     // ... data to create a ActionDevice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActionDevice we want to update
     *   }
     * })
     */
    upsert<T extends ActionDeviceUpsertArgs>(args: SelectSubset<T, ActionDeviceUpsertArgs<ExtArgs>>): Prisma__ActionDeviceClient<$Result.GetResult<Prisma.$ActionDevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActionDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionDeviceCountArgs} args - Arguments to filter ActionDevices to count.
     * @example
     * // Count the number of ActionDevices
     * const count = await prisma.actionDevice.count({
     *   where: {
     *     // ... the filter for the ActionDevices we want to count
     *   }
     * })
    **/
    count<T extends ActionDeviceCountArgs>(
      args?: Subset<T, ActionDeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActionDeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActionDevice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionDeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActionDeviceAggregateArgs>(args: Subset<T, ActionDeviceAggregateArgs>): Prisma.PrismaPromise<GetActionDeviceAggregateType<T>>

    /**
     * Group by ActionDevice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionDeviceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActionDeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActionDeviceGroupByArgs['orderBy'] }
        : { orderBy?: ActionDeviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActionDeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActionDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActionDevice model
   */
  readonly fields: ActionDeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActionDevice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActionDeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    action<T extends ActionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActionDefaultArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActionDevice model
   */
  interface ActionDeviceFieldRefs {
    readonly id: FieldRef<"ActionDevice", 'String'>
    readonly targetId: FieldRef<"ActionDevice", 'String'>
    readonly state: FieldRef<"ActionDevice", 'Boolean'>
    readonly brightness: FieldRef<"ActionDevice", 'Int'>
    readonly temperature: FieldRef<"ActionDevice", 'Int'>
    readonly level: FieldRef<"ActionDevice", 'Int'>
    readonly actionId: FieldRef<"ActionDevice", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ActionDevice findUnique
   */
  export type ActionDeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionDevice
     */
    select?: ActionDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionDevice
     */
    omit?: ActionDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionDeviceInclude<ExtArgs> | null
    /**
     * Filter, which ActionDevice to fetch.
     */
    where: ActionDeviceWhereUniqueInput
  }

  /**
   * ActionDevice findUniqueOrThrow
   */
  export type ActionDeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionDevice
     */
    select?: ActionDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionDevice
     */
    omit?: ActionDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionDeviceInclude<ExtArgs> | null
    /**
     * Filter, which ActionDevice to fetch.
     */
    where: ActionDeviceWhereUniqueInput
  }

  /**
   * ActionDevice findFirst
   */
  export type ActionDeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionDevice
     */
    select?: ActionDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionDevice
     */
    omit?: ActionDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionDeviceInclude<ExtArgs> | null
    /**
     * Filter, which ActionDevice to fetch.
     */
    where?: ActionDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionDevices to fetch.
     */
    orderBy?: ActionDeviceOrderByWithRelationInput | ActionDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActionDevices.
     */
    cursor?: ActionDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActionDevices.
     */
    distinct?: ActionDeviceScalarFieldEnum | ActionDeviceScalarFieldEnum[]
  }

  /**
   * ActionDevice findFirstOrThrow
   */
  export type ActionDeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionDevice
     */
    select?: ActionDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionDevice
     */
    omit?: ActionDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionDeviceInclude<ExtArgs> | null
    /**
     * Filter, which ActionDevice to fetch.
     */
    where?: ActionDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionDevices to fetch.
     */
    orderBy?: ActionDeviceOrderByWithRelationInput | ActionDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActionDevices.
     */
    cursor?: ActionDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActionDevices.
     */
    distinct?: ActionDeviceScalarFieldEnum | ActionDeviceScalarFieldEnum[]
  }

  /**
   * ActionDevice findMany
   */
  export type ActionDeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionDevice
     */
    select?: ActionDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionDevice
     */
    omit?: ActionDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionDeviceInclude<ExtArgs> | null
    /**
     * Filter, which ActionDevices to fetch.
     */
    where?: ActionDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionDevices to fetch.
     */
    orderBy?: ActionDeviceOrderByWithRelationInput | ActionDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActionDevices.
     */
    cursor?: ActionDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionDevices.
     */
    skip?: number
    distinct?: ActionDeviceScalarFieldEnum | ActionDeviceScalarFieldEnum[]
  }

  /**
   * ActionDevice create
   */
  export type ActionDeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionDevice
     */
    select?: ActionDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionDevice
     */
    omit?: ActionDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionDeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a ActionDevice.
     */
    data: XOR<ActionDeviceCreateInput, ActionDeviceUncheckedCreateInput>
  }

  /**
   * ActionDevice createMany
   */
  export type ActionDeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActionDevices.
     */
    data: ActionDeviceCreateManyInput | ActionDeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActionDevice createManyAndReturn
   */
  export type ActionDeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionDevice
     */
    select?: ActionDeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActionDevice
     */
    omit?: ActionDeviceOmit<ExtArgs> | null
    /**
     * The data used to create many ActionDevices.
     */
    data: ActionDeviceCreateManyInput | ActionDeviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionDeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActionDevice update
   */
  export type ActionDeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionDevice
     */
    select?: ActionDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionDevice
     */
    omit?: ActionDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionDeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a ActionDevice.
     */
    data: XOR<ActionDeviceUpdateInput, ActionDeviceUncheckedUpdateInput>
    /**
     * Choose, which ActionDevice to update.
     */
    where: ActionDeviceWhereUniqueInput
  }

  /**
   * ActionDevice updateMany
   */
  export type ActionDeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActionDevices.
     */
    data: XOR<ActionDeviceUpdateManyMutationInput, ActionDeviceUncheckedUpdateManyInput>
    /**
     * Filter which ActionDevices to update
     */
    where?: ActionDeviceWhereInput
    /**
     * Limit how many ActionDevices to update.
     */
    limit?: number
  }

  /**
   * ActionDevice updateManyAndReturn
   */
  export type ActionDeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionDevice
     */
    select?: ActionDeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActionDevice
     */
    omit?: ActionDeviceOmit<ExtArgs> | null
    /**
     * The data used to update ActionDevices.
     */
    data: XOR<ActionDeviceUpdateManyMutationInput, ActionDeviceUncheckedUpdateManyInput>
    /**
     * Filter which ActionDevices to update
     */
    where?: ActionDeviceWhereInput
    /**
     * Limit how many ActionDevices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionDeviceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActionDevice upsert
   */
  export type ActionDeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionDevice
     */
    select?: ActionDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionDevice
     */
    omit?: ActionDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionDeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the ActionDevice to update in case it exists.
     */
    where: ActionDeviceWhereUniqueInput
    /**
     * In case the ActionDevice found by the `where` argument doesn't exist, create a new ActionDevice with this data.
     */
    create: XOR<ActionDeviceCreateInput, ActionDeviceUncheckedCreateInput>
    /**
     * In case the ActionDevice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActionDeviceUpdateInput, ActionDeviceUncheckedUpdateInput>
  }

  /**
   * ActionDevice delete
   */
  export type ActionDeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionDevice
     */
    select?: ActionDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionDevice
     */
    omit?: ActionDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionDeviceInclude<ExtArgs> | null
    /**
     * Filter which ActionDevice to delete.
     */
    where: ActionDeviceWhereUniqueInput
  }

  /**
   * ActionDevice deleteMany
   */
  export type ActionDeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActionDevices to delete
     */
    where?: ActionDeviceWhereInput
    /**
     * Limit how many ActionDevices to delete.
     */
    limit?: number
  }

  /**
   * ActionDevice without action
   */
  export type ActionDeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionDevice
     */
    select?: ActionDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionDevice
     */
    omit?: ActionDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionDeviceInclude<ExtArgs> | null
  }


  /**
   * Model ActionScene
   */

  export type AggregateActionScene = {
    _count: ActionSceneCountAggregateOutputType | null
    _min: ActionSceneMinAggregateOutputType | null
    _max: ActionSceneMaxAggregateOutputType | null
  }

  export type ActionSceneMinAggregateOutputType = {
    id: string | null
    targetId: string | null
    actionId: string | null
  }

  export type ActionSceneMaxAggregateOutputType = {
    id: string | null
    targetId: string | null
    actionId: string | null
  }

  export type ActionSceneCountAggregateOutputType = {
    id: number
    targetId: number
    actionId: number
    _all: number
  }


  export type ActionSceneMinAggregateInputType = {
    id?: true
    targetId?: true
    actionId?: true
  }

  export type ActionSceneMaxAggregateInputType = {
    id?: true
    targetId?: true
    actionId?: true
  }

  export type ActionSceneCountAggregateInputType = {
    id?: true
    targetId?: true
    actionId?: true
    _all?: true
  }

  export type ActionSceneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActionScene to aggregate.
     */
    where?: ActionSceneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionScenes to fetch.
     */
    orderBy?: ActionSceneOrderByWithRelationInput | ActionSceneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActionSceneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionScenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionScenes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActionScenes
    **/
    _count?: true | ActionSceneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActionSceneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActionSceneMaxAggregateInputType
  }

  export type GetActionSceneAggregateType<T extends ActionSceneAggregateArgs> = {
        [P in keyof T & keyof AggregateActionScene]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActionScene[P]>
      : GetScalarType<T[P], AggregateActionScene[P]>
  }




  export type ActionSceneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionSceneWhereInput
    orderBy?: ActionSceneOrderByWithAggregationInput | ActionSceneOrderByWithAggregationInput[]
    by: ActionSceneScalarFieldEnum[] | ActionSceneScalarFieldEnum
    having?: ActionSceneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActionSceneCountAggregateInputType | true
    _min?: ActionSceneMinAggregateInputType
    _max?: ActionSceneMaxAggregateInputType
  }

  export type ActionSceneGroupByOutputType = {
    id: string
    targetId: string
    actionId: string
    _count: ActionSceneCountAggregateOutputType | null
    _min: ActionSceneMinAggregateOutputType | null
    _max: ActionSceneMaxAggregateOutputType | null
  }

  type GetActionSceneGroupByPayload<T extends ActionSceneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActionSceneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActionSceneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActionSceneGroupByOutputType[P]>
            : GetScalarType<T[P], ActionSceneGroupByOutputType[P]>
        }
      >
    >


  export type ActionSceneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    targetId?: boolean
    actionId?: boolean
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actionScene"]>

  export type ActionSceneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    targetId?: boolean
    actionId?: boolean
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actionScene"]>

  export type ActionSceneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    targetId?: boolean
    actionId?: boolean
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actionScene"]>

  export type ActionSceneSelectScalar = {
    id?: boolean
    targetId?: boolean
    actionId?: boolean
  }

  export type ActionSceneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "targetId" | "actionId", ExtArgs["result"]["actionScene"]>
  export type ActionSceneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }
  export type ActionSceneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }
  export type ActionSceneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }

  export type $ActionScenePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActionScene"
    objects: {
      action: Prisma.$ActionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      targetId: string
      actionId: string
    }, ExtArgs["result"]["actionScene"]>
    composites: {}
  }

  type ActionSceneGetPayload<S extends boolean | null | undefined | ActionSceneDefaultArgs> = $Result.GetResult<Prisma.$ActionScenePayload, S>

  type ActionSceneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActionSceneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActionSceneCountAggregateInputType | true
    }

  export interface ActionSceneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActionScene'], meta: { name: 'ActionScene' } }
    /**
     * Find zero or one ActionScene that matches the filter.
     * @param {ActionSceneFindUniqueArgs} args - Arguments to find a ActionScene
     * @example
     * // Get one ActionScene
     * const actionScene = await prisma.actionScene.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActionSceneFindUniqueArgs>(args: SelectSubset<T, ActionSceneFindUniqueArgs<ExtArgs>>): Prisma__ActionSceneClient<$Result.GetResult<Prisma.$ActionScenePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActionScene that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActionSceneFindUniqueOrThrowArgs} args - Arguments to find a ActionScene
     * @example
     * // Get one ActionScene
     * const actionScene = await prisma.actionScene.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActionSceneFindUniqueOrThrowArgs>(args: SelectSubset<T, ActionSceneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActionSceneClient<$Result.GetResult<Prisma.$ActionScenePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActionScene that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionSceneFindFirstArgs} args - Arguments to find a ActionScene
     * @example
     * // Get one ActionScene
     * const actionScene = await prisma.actionScene.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActionSceneFindFirstArgs>(args?: SelectSubset<T, ActionSceneFindFirstArgs<ExtArgs>>): Prisma__ActionSceneClient<$Result.GetResult<Prisma.$ActionScenePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActionScene that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionSceneFindFirstOrThrowArgs} args - Arguments to find a ActionScene
     * @example
     * // Get one ActionScene
     * const actionScene = await prisma.actionScene.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActionSceneFindFirstOrThrowArgs>(args?: SelectSubset<T, ActionSceneFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActionSceneClient<$Result.GetResult<Prisma.$ActionScenePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActionScenes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionSceneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActionScenes
     * const actionScenes = await prisma.actionScene.findMany()
     * 
     * // Get first 10 ActionScenes
     * const actionScenes = await prisma.actionScene.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actionSceneWithIdOnly = await prisma.actionScene.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActionSceneFindManyArgs>(args?: SelectSubset<T, ActionSceneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionScenePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActionScene.
     * @param {ActionSceneCreateArgs} args - Arguments to create a ActionScene.
     * @example
     * // Create one ActionScene
     * const ActionScene = await prisma.actionScene.create({
     *   data: {
     *     // ... data to create a ActionScene
     *   }
     * })
     * 
     */
    create<T extends ActionSceneCreateArgs>(args: SelectSubset<T, ActionSceneCreateArgs<ExtArgs>>): Prisma__ActionSceneClient<$Result.GetResult<Prisma.$ActionScenePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActionScenes.
     * @param {ActionSceneCreateManyArgs} args - Arguments to create many ActionScenes.
     * @example
     * // Create many ActionScenes
     * const actionScene = await prisma.actionScene.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActionSceneCreateManyArgs>(args?: SelectSubset<T, ActionSceneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActionScenes and returns the data saved in the database.
     * @param {ActionSceneCreateManyAndReturnArgs} args - Arguments to create many ActionScenes.
     * @example
     * // Create many ActionScenes
     * const actionScene = await prisma.actionScene.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActionScenes and only return the `id`
     * const actionSceneWithIdOnly = await prisma.actionScene.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActionSceneCreateManyAndReturnArgs>(args?: SelectSubset<T, ActionSceneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionScenePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActionScene.
     * @param {ActionSceneDeleteArgs} args - Arguments to delete one ActionScene.
     * @example
     * // Delete one ActionScene
     * const ActionScene = await prisma.actionScene.delete({
     *   where: {
     *     // ... filter to delete one ActionScene
     *   }
     * })
     * 
     */
    delete<T extends ActionSceneDeleteArgs>(args: SelectSubset<T, ActionSceneDeleteArgs<ExtArgs>>): Prisma__ActionSceneClient<$Result.GetResult<Prisma.$ActionScenePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActionScene.
     * @param {ActionSceneUpdateArgs} args - Arguments to update one ActionScene.
     * @example
     * // Update one ActionScene
     * const actionScene = await prisma.actionScene.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActionSceneUpdateArgs>(args: SelectSubset<T, ActionSceneUpdateArgs<ExtArgs>>): Prisma__ActionSceneClient<$Result.GetResult<Prisma.$ActionScenePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActionScenes.
     * @param {ActionSceneDeleteManyArgs} args - Arguments to filter ActionScenes to delete.
     * @example
     * // Delete a few ActionScenes
     * const { count } = await prisma.actionScene.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActionSceneDeleteManyArgs>(args?: SelectSubset<T, ActionSceneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActionScenes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionSceneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActionScenes
     * const actionScene = await prisma.actionScene.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActionSceneUpdateManyArgs>(args: SelectSubset<T, ActionSceneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActionScenes and returns the data updated in the database.
     * @param {ActionSceneUpdateManyAndReturnArgs} args - Arguments to update many ActionScenes.
     * @example
     * // Update many ActionScenes
     * const actionScene = await prisma.actionScene.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActionScenes and only return the `id`
     * const actionSceneWithIdOnly = await prisma.actionScene.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActionSceneUpdateManyAndReturnArgs>(args: SelectSubset<T, ActionSceneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionScenePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActionScene.
     * @param {ActionSceneUpsertArgs} args - Arguments to update or create a ActionScene.
     * @example
     * // Update or create a ActionScene
     * const actionScene = await prisma.actionScene.upsert({
     *   create: {
     *     // ... data to create a ActionScene
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActionScene we want to update
     *   }
     * })
     */
    upsert<T extends ActionSceneUpsertArgs>(args: SelectSubset<T, ActionSceneUpsertArgs<ExtArgs>>): Prisma__ActionSceneClient<$Result.GetResult<Prisma.$ActionScenePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActionScenes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionSceneCountArgs} args - Arguments to filter ActionScenes to count.
     * @example
     * // Count the number of ActionScenes
     * const count = await prisma.actionScene.count({
     *   where: {
     *     // ... the filter for the ActionScenes we want to count
     *   }
     * })
    **/
    count<T extends ActionSceneCountArgs>(
      args?: Subset<T, ActionSceneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActionSceneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActionScene.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionSceneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActionSceneAggregateArgs>(args: Subset<T, ActionSceneAggregateArgs>): Prisma.PrismaPromise<GetActionSceneAggregateType<T>>

    /**
     * Group by ActionScene.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionSceneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActionSceneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActionSceneGroupByArgs['orderBy'] }
        : { orderBy?: ActionSceneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActionSceneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActionSceneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActionScene model
   */
  readonly fields: ActionSceneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActionScene.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActionSceneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    action<T extends ActionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActionDefaultArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActionScene model
   */
  interface ActionSceneFieldRefs {
    readonly id: FieldRef<"ActionScene", 'String'>
    readonly targetId: FieldRef<"ActionScene", 'String'>
    readonly actionId: FieldRef<"ActionScene", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ActionScene findUnique
   */
  export type ActionSceneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionScene
     */
    select?: ActionSceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionScene
     */
    omit?: ActionSceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionSceneInclude<ExtArgs> | null
    /**
     * Filter, which ActionScene to fetch.
     */
    where: ActionSceneWhereUniqueInput
  }

  /**
   * ActionScene findUniqueOrThrow
   */
  export type ActionSceneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionScene
     */
    select?: ActionSceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionScene
     */
    omit?: ActionSceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionSceneInclude<ExtArgs> | null
    /**
     * Filter, which ActionScene to fetch.
     */
    where: ActionSceneWhereUniqueInput
  }

  /**
   * ActionScene findFirst
   */
  export type ActionSceneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionScene
     */
    select?: ActionSceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionScene
     */
    omit?: ActionSceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionSceneInclude<ExtArgs> | null
    /**
     * Filter, which ActionScene to fetch.
     */
    where?: ActionSceneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionScenes to fetch.
     */
    orderBy?: ActionSceneOrderByWithRelationInput | ActionSceneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActionScenes.
     */
    cursor?: ActionSceneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionScenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionScenes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActionScenes.
     */
    distinct?: ActionSceneScalarFieldEnum | ActionSceneScalarFieldEnum[]
  }

  /**
   * ActionScene findFirstOrThrow
   */
  export type ActionSceneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionScene
     */
    select?: ActionSceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionScene
     */
    omit?: ActionSceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionSceneInclude<ExtArgs> | null
    /**
     * Filter, which ActionScene to fetch.
     */
    where?: ActionSceneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionScenes to fetch.
     */
    orderBy?: ActionSceneOrderByWithRelationInput | ActionSceneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActionScenes.
     */
    cursor?: ActionSceneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionScenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionScenes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActionScenes.
     */
    distinct?: ActionSceneScalarFieldEnum | ActionSceneScalarFieldEnum[]
  }

  /**
   * ActionScene findMany
   */
  export type ActionSceneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionScene
     */
    select?: ActionSceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionScene
     */
    omit?: ActionSceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionSceneInclude<ExtArgs> | null
    /**
     * Filter, which ActionScenes to fetch.
     */
    where?: ActionSceneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionScenes to fetch.
     */
    orderBy?: ActionSceneOrderByWithRelationInput | ActionSceneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActionScenes.
     */
    cursor?: ActionSceneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionScenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionScenes.
     */
    skip?: number
    distinct?: ActionSceneScalarFieldEnum | ActionSceneScalarFieldEnum[]
  }

  /**
   * ActionScene create
   */
  export type ActionSceneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionScene
     */
    select?: ActionSceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionScene
     */
    omit?: ActionSceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionSceneInclude<ExtArgs> | null
    /**
     * The data needed to create a ActionScene.
     */
    data: XOR<ActionSceneCreateInput, ActionSceneUncheckedCreateInput>
  }

  /**
   * ActionScene createMany
   */
  export type ActionSceneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActionScenes.
     */
    data: ActionSceneCreateManyInput | ActionSceneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActionScene createManyAndReturn
   */
  export type ActionSceneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionScene
     */
    select?: ActionSceneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActionScene
     */
    omit?: ActionSceneOmit<ExtArgs> | null
    /**
     * The data used to create many ActionScenes.
     */
    data: ActionSceneCreateManyInput | ActionSceneCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionSceneIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActionScene update
   */
  export type ActionSceneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionScene
     */
    select?: ActionSceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionScene
     */
    omit?: ActionSceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionSceneInclude<ExtArgs> | null
    /**
     * The data needed to update a ActionScene.
     */
    data: XOR<ActionSceneUpdateInput, ActionSceneUncheckedUpdateInput>
    /**
     * Choose, which ActionScene to update.
     */
    where: ActionSceneWhereUniqueInput
  }

  /**
   * ActionScene updateMany
   */
  export type ActionSceneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActionScenes.
     */
    data: XOR<ActionSceneUpdateManyMutationInput, ActionSceneUncheckedUpdateManyInput>
    /**
     * Filter which ActionScenes to update
     */
    where?: ActionSceneWhereInput
    /**
     * Limit how many ActionScenes to update.
     */
    limit?: number
  }

  /**
   * ActionScene updateManyAndReturn
   */
  export type ActionSceneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionScene
     */
    select?: ActionSceneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActionScene
     */
    omit?: ActionSceneOmit<ExtArgs> | null
    /**
     * The data used to update ActionScenes.
     */
    data: XOR<ActionSceneUpdateManyMutationInput, ActionSceneUncheckedUpdateManyInput>
    /**
     * Filter which ActionScenes to update
     */
    where?: ActionSceneWhereInput
    /**
     * Limit how many ActionScenes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionSceneIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActionScene upsert
   */
  export type ActionSceneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionScene
     */
    select?: ActionSceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionScene
     */
    omit?: ActionSceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionSceneInclude<ExtArgs> | null
    /**
     * The filter to search for the ActionScene to update in case it exists.
     */
    where: ActionSceneWhereUniqueInput
    /**
     * In case the ActionScene found by the `where` argument doesn't exist, create a new ActionScene with this data.
     */
    create: XOR<ActionSceneCreateInput, ActionSceneUncheckedCreateInput>
    /**
     * In case the ActionScene was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActionSceneUpdateInput, ActionSceneUncheckedUpdateInput>
  }

  /**
   * ActionScene delete
   */
  export type ActionSceneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionScene
     */
    select?: ActionSceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionScene
     */
    omit?: ActionSceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionSceneInclude<ExtArgs> | null
    /**
     * Filter which ActionScene to delete.
     */
    where: ActionSceneWhereUniqueInput
  }

  /**
   * ActionScene deleteMany
   */
  export type ActionSceneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActionScenes to delete
     */
    where?: ActionSceneWhereInput
    /**
     * Limit how many ActionScenes to delete.
     */
    limit?: number
  }

  /**
   * ActionScene without action
   */
  export type ActionSceneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionScene
     */
    select?: ActionSceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionScene
     */
    omit?: ActionSceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionSceneInclude<ExtArgs> | null
  }


  /**
   * Model Schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleMinAggregateOutputType = {
    id: string | null
    repeat: string | null
    time: string | null
  }

  export type ScheduleMaxAggregateOutputType = {
    id: string | null
    repeat: string | null
    time: string | null
  }

  export type ScheduleCountAggregateOutputType = {
    id: number
    repeat: number
    time: number
    _all: number
  }


  export type ScheduleMinAggregateInputType = {
    id?: true
    repeat?: true
    time?: true
  }

  export type ScheduleMaxAggregateInputType = {
    id?: true
    repeat?: true
    time?: true
  }

  export type ScheduleCountAggregateInputType = {
    id?: true
    repeat?: true
    time?: true
    _all?: true
  }

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule to aggregate.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type ScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithAggregationInput | ScheduleOrderByWithAggregationInput[]
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum
    having?: ScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }

  export type ScheduleGroupByOutputType = {
    id: string
    repeat: string
    time: string
    _count: ScheduleCountAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repeat?: boolean
    time?: boolean
    automation?: boolean | Schedule$automationArgs<ExtArgs>
    scheduleDays?: boolean | Schedule$scheduleDaysArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repeat?: boolean
    time?: boolean
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repeat?: boolean
    time?: boolean
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectScalar = {
    id?: boolean
    repeat?: boolean
    time?: boolean
  }

  export type ScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "repeat" | "time", ExtArgs["result"]["schedule"]>
  export type ScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    automation?: boolean | Schedule$automationArgs<ExtArgs>
    scheduleDays?: boolean | Schedule$scheduleDaysArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedule"
    objects: {
      automation: Prisma.$AutomationPayload<ExtArgs> | null
      scheduleDays: Prisma.$ScheduleDayPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      repeat: string
      time: string
    }, ExtArgs["result"]["schedule"]>
    composites: {}
  }

  type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleDefaultArgs> = $Result.GetResult<Prisma.$SchedulePayload, S>

  type ScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleCountAggregateInputType | true
    }

  export interface ScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schedule'], meta: { name: 'Schedule' } }
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {ScheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleFindUniqueArgs>(args: SelectSubset<T, ScheduleFindUniqueArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleFindFirstArgs>(args?: SelectSubset<T, ScheduleFindFirstArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleFindManyArgs>(args?: SelectSubset<T, ScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedule.
     * @param {ScheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
     */
    create<T extends ScheduleCreateArgs>(args: SelectSubset<T, ScheduleCreateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedules.
     * @param {ScheduleCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleCreateManyArgs>(args?: SelectSubset<T, ScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedules and returns the data saved in the database.
     * @param {ScheduleCreateManyAndReturnArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Schedule.
     * @param {ScheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
     */
    delete<T extends ScheduleDeleteArgs>(args: SelectSubset<T, ScheduleDeleteArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedule.
     * @param {ScheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleUpdateArgs>(args: SelectSubset<T, ScheduleUpdateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedules.
     * @param {ScheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleDeleteManyArgs>(args?: SelectSubset<T, ScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleUpdateManyArgs>(args: SelectSubset<T, ScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules and returns the data updated in the database.
     * @param {ScheduleUpdateManyAndReturnArgs} args - Arguments to update many Schedules.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Schedule.
     * @param {ScheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleUpsertArgs>(args: SelectSubset<T, ScheduleUpsertArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends ScheduleCountArgs>(
      args?: Subset<T, ScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schedule model
   */
  readonly fields: ScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    automation<T extends Schedule$automationArgs<ExtArgs> = {}>(args?: Subset<T, Schedule$automationArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    scheduleDays<T extends Schedule$scheduleDaysArgs<ExtArgs> = {}>(args?: Subset<T, Schedule$scheduleDaysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleDayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Schedule model
   */
  interface ScheduleFieldRefs {
    readonly id: FieldRef<"Schedule", 'String'>
    readonly repeat: FieldRef<"Schedule", 'String'>
    readonly time: FieldRef<"Schedule", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Schedule findUnique
   */
  export type ScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findUniqueOrThrow
   */
  export type ScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findFirst
   */
  export type ScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findFirstOrThrow
   */
  export type ScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findMany
   */
  export type ScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedules to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule create
   */
  export type ScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a Schedule.
     */
    data: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
  }

  /**
   * Schedule createMany
   */
  export type ScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Schedule createManyAndReturn
   */
  export type ScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Schedule update
   */
  export type ScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a Schedule.
     */
    data: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
    /**
     * Choose, which Schedule to update.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule updateMany
   */
  export type ScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
  }

  /**
   * Schedule updateManyAndReturn
   */
  export type ScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
  }

  /**
   * Schedule upsert
   */
  export type ScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the Schedule to update in case it exists.
     */
    where: ScheduleWhereUniqueInput
    /**
     * In case the Schedule found by the `where` argument doesn't exist, create a new Schedule with this data.
     */
    create: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
    /**
     * In case the Schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
  }

  /**
   * Schedule delete
   */
  export type ScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter which Schedule to delete.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule deleteMany
   */
  export type ScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedules to delete
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to delete.
     */
    limit?: number
  }

  /**
   * Schedule.automation
   */
  export type Schedule$automationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    where?: AutomationWhereInput
  }

  /**
   * Schedule.scheduleDays
   */
  export type Schedule$scheduleDaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDay
     */
    select?: ScheduleDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDay
     */
    omit?: ScheduleDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleDayInclude<ExtArgs> | null
    where?: ScheduleDayWhereInput
    orderBy?: ScheduleDayOrderByWithRelationInput | ScheduleDayOrderByWithRelationInput[]
    cursor?: ScheduleDayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleDayScalarFieldEnum | ScheduleDayScalarFieldEnum[]
  }

  /**
   * Schedule without action
   */
  export type ScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
  }


  /**
   * Model ScheduleDay
   */

  export type AggregateScheduleDay = {
    _count: ScheduleDayCountAggregateOutputType | null
    _min: ScheduleDayMinAggregateOutputType | null
    _max: ScheduleDayMaxAggregateOutputType | null
  }

  export type ScheduleDayMinAggregateOutputType = {
    id: string | null
    day: $Enums.scheduleDays | null
    scheduleId: string | null
  }

  export type ScheduleDayMaxAggregateOutputType = {
    id: string | null
    day: $Enums.scheduleDays | null
    scheduleId: string | null
  }

  export type ScheduleDayCountAggregateOutputType = {
    id: number
    day: number
    scheduleId: number
    _all: number
  }


  export type ScheduleDayMinAggregateInputType = {
    id?: true
    day?: true
    scheduleId?: true
  }

  export type ScheduleDayMaxAggregateInputType = {
    id?: true
    day?: true
    scheduleId?: true
  }

  export type ScheduleDayCountAggregateInputType = {
    id?: true
    day?: true
    scheduleId?: true
    _all?: true
  }

  export type ScheduleDayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduleDay to aggregate.
     */
    where?: ScheduleDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleDays to fetch.
     */
    orderBy?: ScheduleDayOrderByWithRelationInput | ScheduleDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScheduleDays
    **/
    _count?: true | ScheduleDayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleDayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleDayMaxAggregateInputType
  }

  export type GetScheduleDayAggregateType<T extends ScheduleDayAggregateArgs> = {
        [P in keyof T & keyof AggregateScheduleDay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScheduleDay[P]>
      : GetScalarType<T[P], AggregateScheduleDay[P]>
  }




  export type ScheduleDayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleDayWhereInput
    orderBy?: ScheduleDayOrderByWithAggregationInput | ScheduleDayOrderByWithAggregationInput[]
    by: ScheduleDayScalarFieldEnum[] | ScheduleDayScalarFieldEnum
    having?: ScheduleDayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleDayCountAggregateInputType | true
    _min?: ScheduleDayMinAggregateInputType
    _max?: ScheduleDayMaxAggregateInputType
  }

  export type ScheduleDayGroupByOutputType = {
    id: string
    day: $Enums.scheduleDays
    scheduleId: string
    _count: ScheduleDayCountAggregateOutputType | null
    _min: ScheduleDayMinAggregateOutputType | null
    _max: ScheduleDayMaxAggregateOutputType | null
  }

  type GetScheduleDayGroupByPayload<T extends ScheduleDayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleDayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleDayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleDayGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleDayGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleDaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day?: boolean
    scheduleId?: boolean
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduleDay"]>

  export type ScheduleDaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day?: boolean
    scheduleId?: boolean
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduleDay"]>

  export type ScheduleDaySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day?: boolean
    scheduleId?: boolean
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduleDay"]>

  export type ScheduleDaySelectScalar = {
    id?: boolean
    day?: boolean
    scheduleId?: boolean
  }

  export type ScheduleDayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "day" | "scheduleId", ExtArgs["result"]["scheduleDay"]>
  export type ScheduleDayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }
  export type ScheduleDayIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }
  export type ScheduleDayIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }

  export type $ScheduleDayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScheduleDay"
    objects: {
      schedule: Prisma.$SchedulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      day: $Enums.scheduleDays
      scheduleId: string
    }, ExtArgs["result"]["scheduleDay"]>
    composites: {}
  }

  type ScheduleDayGetPayload<S extends boolean | null | undefined | ScheduleDayDefaultArgs> = $Result.GetResult<Prisma.$ScheduleDayPayload, S>

  type ScheduleDayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleDayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleDayCountAggregateInputType | true
    }

  export interface ScheduleDayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScheduleDay'], meta: { name: 'ScheduleDay' } }
    /**
     * Find zero or one ScheduleDay that matches the filter.
     * @param {ScheduleDayFindUniqueArgs} args - Arguments to find a ScheduleDay
     * @example
     * // Get one ScheduleDay
     * const scheduleDay = await prisma.scheduleDay.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleDayFindUniqueArgs>(args: SelectSubset<T, ScheduleDayFindUniqueArgs<ExtArgs>>): Prisma__ScheduleDayClient<$Result.GetResult<Prisma.$ScheduleDayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScheduleDay that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleDayFindUniqueOrThrowArgs} args - Arguments to find a ScheduleDay
     * @example
     * // Get one ScheduleDay
     * const scheduleDay = await prisma.scheduleDay.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleDayFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleDayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleDayClient<$Result.GetResult<Prisma.$ScheduleDayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduleDay that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleDayFindFirstArgs} args - Arguments to find a ScheduleDay
     * @example
     * // Get one ScheduleDay
     * const scheduleDay = await prisma.scheduleDay.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleDayFindFirstArgs>(args?: SelectSubset<T, ScheduleDayFindFirstArgs<ExtArgs>>): Prisma__ScheduleDayClient<$Result.GetResult<Prisma.$ScheduleDayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduleDay that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleDayFindFirstOrThrowArgs} args - Arguments to find a ScheduleDay
     * @example
     * // Get one ScheduleDay
     * const scheduleDay = await prisma.scheduleDay.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleDayFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleDayFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleDayClient<$Result.GetResult<Prisma.$ScheduleDayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScheduleDays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleDayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScheduleDays
     * const scheduleDays = await prisma.scheduleDay.findMany()
     * 
     * // Get first 10 ScheduleDays
     * const scheduleDays = await prisma.scheduleDay.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleDayWithIdOnly = await prisma.scheduleDay.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleDayFindManyArgs>(args?: SelectSubset<T, ScheduleDayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleDayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScheduleDay.
     * @param {ScheduleDayCreateArgs} args - Arguments to create a ScheduleDay.
     * @example
     * // Create one ScheduleDay
     * const ScheduleDay = await prisma.scheduleDay.create({
     *   data: {
     *     // ... data to create a ScheduleDay
     *   }
     * })
     * 
     */
    create<T extends ScheduleDayCreateArgs>(args: SelectSubset<T, ScheduleDayCreateArgs<ExtArgs>>): Prisma__ScheduleDayClient<$Result.GetResult<Prisma.$ScheduleDayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScheduleDays.
     * @param {ScheduleDayCreateManyArgs} args - Arguments to create many ScheduleDays.
     * @example
     * // Create many ScheduleDays
     * const scheduleDay = await prisma.scheduleDay.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleDayCreateManyArgs>(args?: SelectSubset<T, ScheduleDayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScheduleDays and returns the data saved in the database.
     * @param {ScheduleDayCreateManyAndReturnArgs} args - Arguments to create many ScheduleDays.
     * @example
     * // Create many ScheduleDays
     * const scheduleDay = await prisma.scheduleDay.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScheduleDays and only return the `id`
     * const scheduleDayWithIdOnly = await prisma.scheduleDay.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduleDayCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduleDayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleDayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScheduleDay.
     * @param {ScheduleDayDeleteArgs} args - Arguments to delete one ScheduleDay.
     * @example
     * // Delete one ScheduleDay
     * const ScheduleDay = await prisma.scheduleDay.delete({
     *   where: {
     *     // ... filter to delete one ScheduleDay
     *   }
     * })
     * 
     */
    delete<T extends ScheduleDayDeleteArgs>(args: SelectSubset<T, ScheduleDayDeleteArgs<ExtArgs>>): Prisma__ScheduleDayClient<$Result.GetResult<Prisma.$ScheduleDayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScheduleDay.
     * @param {ScheduleDayUpdateArgs} args - Arguments to update one ScheduleDay.
     * @example
     * // Update one ScheduleDay
     * const scheduleDay = await prisma.scheduleDay.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleDayUpdateArgs>(args: SelectSubset<T, ScheduleDayUpdateArgs<ExtArgs>>): Prisma__ScheduleDayClient<$Result.GetResult<Prisma.$ScheduleDayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScheduleDays.
     * @param {ScheduleDayDeleteManyArgs} args - Arguments to filter ScheduleDays to delete.
     * @example
     * // Delete a few ScheduleDays
     * const { count } = await prisma.scheduleDay.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleDayDeleteManyArgs>(args?: SelectSubset<T, ScheduleDayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduleDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleDayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScheduleDays
     * const scheduleDay = await prisma.scheduleDay.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleDayUpdateManyArgs>(args: SelectSubset<T, ScheduleDayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduleDays and returns the data updated in the database.
     * @param {ScheduleDayUpdateManyAndReturnArgs} args - Arguments to update many ScheduleDays.
     * @example
     * // Update many ScheduleDays
     * const scheduleDay = await prisma.scheduleDay.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScheduleDays and only return the `id`
     * const scheduleDayWithIdOnly = await prisma.scheduleDay.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScheduleDayUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduleDayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleDayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScheduleDay.
     * @param {ScheduleDayUpsertArgs} args - Arguments to update or create a ScheduleDay.
     * @example
     * // Update or create a ScheduleDay
     * const scheduleDay = await prisma.scheduleDay.upsert({
     *   create: {
     *     // ... data to create a ScheduleDay
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScheduleDay we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleDayUpsertArgs>(args: SelectSubset<T, ScheduleDayUpsertArgs<ExtArgs>>): Prisma__ScheduleDayClient<$Result.GetResult<Prisma.$ScheduleDayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScheduleDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleDayCountArgs} args - Arguments to filter ScheduleDays to count.
     * @example
     * // Count the number of ScheduleDays
     * const count = await prisma.scheduleDay.count({
     *   where: {
     *     // ... the filter for the ScheduleDays we want to count
     *   }
     * })
    **/
    count<T extends ScheduleDayCountArgs>(
      args?: Subset<T, ScheduleDayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleDayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScheduleDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleDayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScheduleDayAggregateArgs>(args: Subset<T, ScheduleDayAggregateArgs>): Prisma.PrismaPromise<GetScheduleDayAggregateType<T>>

    /**
     * Group by ScheduleDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleDayGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScheduleDayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleDayGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleDayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScheduleDayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleDayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScheduleDay model
   */
  readonly fields: ScheduleDayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScheduleDay.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleDayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schedule<T extends ScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScheduleDefaultArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScheduleDay model
   */
  interface ScheduleDayFieldRefs {
    readonly id: FieldRef<"ScheduleDay", 'String'>
    readonly day: FieldRef<"ScheduleDay", 'scheduleDays'>
    readonly scheduleId: FieldRef<"ScheduleDay", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ScheduleDay findUnique
   */
  export type ScheduleDayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDay
     */
    select?: ScheduleDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDay
     */
    omit?: ScheduleDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleDayInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleDay to fetch.
     */
    where: ScheduleDayWhereUniqueInput
  }

  /**
   * ScheduleDay findUniqueOrThrow
   */
  export type ScheduleDayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDay
     */
    select?: ScheduleDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDay
     */
    omit?: ScheduleDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleDayInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleDay to fetch.
     */
    where: ScheduleDayWhereUniqueInput
  }

  /**
   * ScheduleDay findFirst
   */
  export type ScheduleDayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDay
     */
    select?: ScheduleDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDay
     */
    omit?: ScheduleDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleDayInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleDay to fetch.
     */
    where?: ScheduleDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleDays to fetch.
     */
    orderBy?: ScheduleDayOrderByWithRelationInput | ScheduleDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduleDays.
     */
    cursor?: ScheduleDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduleDays.
     */
    distinct?: ScheduleDayScalarFieldEnum | ScheduleDayScalarFieldEnum[]
  }

  /**
   * ScheduleDay findFirstOrThrow
   */
  export type ScheduleDayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDay
     */
    select?: ScheduleDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDay
     */
    omit?: ScheduleDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleDayInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleDay to fetch.
     */
    where?: ScheduleDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleDays to fetch.
     */
    orderBy?: ScheduleDayOrderByWithRelationInput | ScheduleDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduleDays.
     */
    cursor?: ScheduleDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduleDays.
     */
    distinct?: ScheduleDayScalarFieldEnum | ScheduleDayScalarFieldEnum[]
  }

  /**
   * ScheduleDay findMany
   */
  export type ScheduleDayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDay
     */
    select?: ScheduleDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDay
     */
    omit?: ScheduleDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleDayInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleDays to fetch.
     */
    where?: ScheduleDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleDays to fetch.
     */
    orderBy?: ScheduleDayOrderByWithRelationInput | ScheduleDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScheduleDays.
     */
    cursor?: ScheduleDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleDays.
     */
    skip?: number
    distinct?: ScheduleDayScalarFieldEnum | ScheduleDayScalarFieldEnum[]
  }

  /**
   * ScheduleDay create
   */
  export type ScheduleDayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDay
     */
    select?: ScheduleDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDay
     */
    omit?: ScheduleDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleDayInclude<ExtArgs> | null
    /**
     * The data needed to create a ScheduleDay.
     */
    data: XOR<ScheduleDayCreateInput, ScheduleDayUncheckedCreateInput>
  }

  /**
   * ScheduleDay createMany
   */
  export type ScheduleDayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScheduleDays.
     */
    data: ScheduleDayCreateManyInput | ScheduleDayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScheduleDay createManyAndReturn
   */
  export type ScheduleDayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDay
     */
    select?: ScheduleDaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDay
     */
    omit?: ScheduleDayOmit<ExtArgs> | null
    /**
     * The data used to create many ScheduleDays.
     */
    data: ScheduleDayCreateManyInput | ScheduleDayCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleDayIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScheduleDay update
   */
  export type ScheduleDayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDay
     */
    select?: ScheduleDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDay
     */
    omit?: ScheduleDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleDayInclude<ExtArgs> | null
    /**
     * The data needed to update a ScheduleDay.
     */
    data: XOR<ScheduleDayUpdateInput, ScheduleDayUncheckedUpdateInput>
    /**
     * Choose, which ScheduleDay to update.
     */
    where: ScheduleDayWhereUniqueInput
  }

  /**
   * ScheduleDay updateMany
   */
  export type ScheduleDayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScheduleDays.
     */
    data: XOR<ScheduleDayUpdateManyMutationInput, ScheduleDayUncheckedUpdateManyInput>
    /**
     * Filter which ScheduleDays to update
     */
    where?: ScheduleDayWhereInput
    /**
     * Limit how many ScheduleDays to update.
     */
    limit?: number
  }

  /**
   * ScheduleDay updateManyAndReturn
   */
  export type ScheduleDayUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDay
     */
    select?: ScheduleDaySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDay
     */
    omit?: ScheduleDayOmit<ExtArgs> | null
    /**
     * The data used to update ScheduleDays.
     */
    data: XOR<ScheduleDayUpdateManyMutationInput, ScheduleDayUncheckedUpdateManyInput>
    /**
     * Filter which ScheduleDays to update
     */
    where?: ScheduleDayWhereInput
    /**
     * Limit how many ScheduleDays to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleDayIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScheduleDay upsert
   */
  export type ScheduleDayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDay
     */
    select?: ScheduleDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDay
     */
    omit?: ScheduleDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleDayInclude<ExtArgs> | null
    /**
     * The filter to search for the ScheduleDay to update in case it exists.
     */
    where: ScheduleDayWhereUniqueInput
    /**
     * In case the ScheduleDay found by the `where` argument doesn't exist, create a new ScheduleDay with this data.
     */
    create: XOR<ScheduleDayCreateInput, ScheduleDayUncheckedCreateInput>
    /**
     * In case the ScheduleDay was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleDayUpdateInput, ScheduleDayUncheckedUpdateInput>
  }

  /**
   * ScheduleDay delete
   */
  export type ScheduleDayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDay
     */
    select?: ScheduleDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDay
     */
    omit?: ScheduleDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleDayInclude<ExtArgs> | null
    /**
     * Filter which ScheduleDay to delete.
     */
    where: ScheduleDayWhereUniqueInput
  }

  /**
   * ScheduleDay deleteMany
   */
  export type ScheduleDayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduleDays to delete
     */
    where?: ScheduleDayWhereInput
    /**
     * Limit how many ScheduleDays to delete.
     */
    limit?: number
  }

  /**
   * ScheduleDay without action
   */
  export type ScheduleDayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDay
     */
    select?: ScheduleDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDay
     */
    omit?: ScheduleDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleDayInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BuildingScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type BuildingScalarFieldEnum = (typeof BuildingScalarFieldEnum)[keyof typeof BuildingScalarFieldEnum]


  export const FloorScalarFieldEnum: {
    id: 'id',
    number: 'number',
    buildingId: 'buildingId'
  };

  export type FloorScalarFieldEnum = (typeof FloorScalarFieldEnum)[keyof typeof FloorScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    floorId: 'floorId'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const DeviceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status',
    type: 'type'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const DeviceRoomScalarFieldEnum: {
    deviceId: 'deviceId',
    roomId: 'roomId'
  };

  export type DeviceRoomScalarFieldEnum = (typeof DeviceRoomScalarFieldEnum)[keyof typeof DeviceRoomScalarFieldEnum]


  export const AutomationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    enabled: 'enabled',
    triggerId: 'triggerId',
    scheduleId: 'scheduleId'
  };

  export type AutomationScalarFieldEnum = (typeof AutomationScalarFieldEnum)[keyof typeof AutomationScalarFieldEnum]


  export const TriggerScalarFieldEnum: {
    id: 'id',
    type: 'type'
  };

  export type TriggerScalarFieldEnum = (typeof TriggerScalarFieldEnum)[keyof typeof TriggerScalarFieldEnum]


  export const TriggerTimeScalarFieldEnum: {
    id: 'id',
    time: 'time',
    triggerId: 'triggerId'
  };

  export type TriggerTimeScalarFieldEnum = (typeof TriggerTimeScalarFieldEnum)[keyof typeof TriggerTimeScalarFieldEnum]


  export const TriggerDeviceScalarFieldEnum: {
    id: 'id',
    deviceId: 'deviceId',
    deviceState: 'deviceState',
    triggerId: 'triggerId'
  };

  export type TriggerDeviceScalarFieldEnum = (typeof TriggerDeviceScalarFieldEnum)[keyof typeof TriggerDeviceScalarFieldEnum]


  export const TriggerSceneScalarFieldEnum: {
    id: 'id',
    sceneId: 'sceneId',
    triggerId: 'triggerId'
  };

  export type TriggerSceneScalarFieldEnum = (typeof TriggerSceneScalarFieldEnum)[keyof typeof TriggerSceneScalarFieldEnum]


  export const ActionScalarFieldEnum: {
    id: 'id',
    type: 'type',
    automationId: 'automationId'
  };

  export type ActionScalarFieldEnum = (typeof ActionScalarFieldEnum)[keyof typeof ActionScalarFieldEnum]


  export const ActionDeviceScalarFieldEnum: {
    id: 'id',
    targetId: 'targetId',
    state: 'state',
    brightness: 'brightness',
    temperature: 'temperature',
    level: 'level',
    actionId: 'actionId'
  };

  export type ActionDeviceScalarFieldEnum = (typeof ActionDeviceScalarFieldEnum)[keyof typeof ActionDeviceScalarFieldEnum]


  export const ActionSceneScalarFieldEnum: {
    id: 'id',
    targetId: 'targetId',
    actionId: 'actionId'
  };

  export type ActionSceneScalarFieldEnum = (typeof ActionSceneScalarFieldEnum)[keyof typeof ActionSceneScalarFieldEnum]


  export const ScheduleScalarFieldEnum: {
    id: 'id',
    repeat: 'repeat',
    time: 'time'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const ScheduleDayScalarFieldEnum: {
    id: 'id',
    day: 'day',
    scheduleId: 'scheduleId'
  };

  export type ScheduleDayScalarFieldEnum = (typeof ScheduleDayScalarFieldEnum)[keyof typeof ScheduleDayScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DEVICETYPE'
   */
  export type EnumDEVICETYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DEVICETYPE'>
    


  /**
   * Reference to a field of type 'DEVICETYPE[]'
   */
  export type ListEnumDEVICETYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DEVICETYPE[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'scheduleDays'
   */
  export type EnumscheduleDaysFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'scheduleDays'>
    


  /**
   * Reference to a field of type 'scheduleDays[]'
   */
  export type ListEnumscheduleDaysFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'scheduleDays[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BuildingWhereInput = {
    AND?: BuildingWhereInput | BuildingWhereInput[]
    OR?: BuildingWhereInput[]
    NOT?: BuildingWhereInput | BuildingWhereInput[]
    id?: StringFilter<"Building"> | string
    name?: StringFilter<"Building"> | string
    floors?: FloorListRelationFilter
  }

  export type BuildingOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    floors?: FloorOrderByRelationAggregateInput
  }

  export type BuildingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BuildingWhereInput | BuildingWhereInput[]
    OR?: BuildingWhereInput[]
    NOT?: BuildingWhereInput | BuildingWhereInput[]
    name?: StringFilter<"Building"> | string
    floors?: FloorListRelationFilter
  }, "id">

  export type BuildingOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: BuildingCountOrderByAggregateInput
    _max?: BuildingMaxOrderByAggregateInput
    _min?: BuildingMinOrderByAggregateInput
  }

  export type BuildingScalarWhereWithAggregatesInput = {
    AND?: BuildingScalarWhereWithAggregatesInput | BuildingScalarWhereWithAggregatesInput[]
    OR?: BuildingScalarWhereWithAggregatesInput[]
    NOT?: BuildingScalarWhereWithAggregatesInput | BuildingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Building"> | string
    name?: StringWithAggregatesFilter<"Building"> | string
  }

  export type FloorWhereInput = {
    AND?: FloorWhereInput | FloorWhereInput[]
    OR?: FloorWhereInput[]
    NOT?: FloorWhereInput | FloorWhereInput[]
    id?: StringFilter<"Floor"> | string
    number?: IntFilter<"Floor"> | number
    buildingId?: StringFilter<"Floor"> | string
    building?: XOR<BuildingScalarRelationFilter, BuildingWhereInput>
    rooms?: RoomListRelationFilter
  }

  export type FloorOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    buildingId?: SortOrder
    building?: BuildingOrderByWithRelationInput
    rooms?: RoomOrderByRelationAggregateInput
  }

  export type FloorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FloorWhereInput | FloorWhereInput[]
    OR?: FloorWhereInput[]
    NOT?: FloorWhereInput | FloorWhereInput[]
    number?: IntFilter<"Floor"> | number
    buildingId?: StringFilter<"Floor"> | string
    building?: XOR<BuildingScalarRelationFilter, BuildingWhereInput>
    rooms?: RoomListRelationFilter
  }, "id">

  export type FloorOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    buildingId?: SortOrder
    _count?: FloorCountOrderByAggregateInput
    _avg?: FloorAvgOrderByAggregateInput
    _max?: FloorMaxOrderByAggregateInput
    _min?: FloorMinOrderByAggregateInput
    _sum?: FloorSumOrderByAggregateInput
  }

  export type FloorScalarWhereWithAggregatesInput = {
    AND?: FloorScalarWhereWithAggregatesInput | FloorScalarWhereWithAggregatesInput[]
    OR?: FloorScalarWhereWithAggregatesInput[]
    NOT?: FloorScalarWhereWithAggregatesInput | FloorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Floor"> | string
    number?: IntWithAggregatesFilter<"Floor"> | number
    buildingId?: StringWithAggregatesFilter<"Floor"> | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: StringFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    floorId?: StringFilter<"Room"> | string
    floor?: XOR<FloorScalarRelationFilter, FloorWhereInput>
    devices?: DeviceRoomListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    floorId?: SortOrder
    floor?: FloorOrderByWithRelationInput
    devices?: DeviceRoomOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    name?: StringFilter<"Room"> | string
    floorId?: StringFilter<"Room"> | string
    floor?: XOR<FloorScalarRelationFilter, FloorWhereInput>
    devices?: DeviceRoomListRelationFilter
  }, "id">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    floorId?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Room"> | string
    name?: StringWithAggregatesFilter<"Room"> | string
    floorId?: StringWithAggregatesFilter<"Room"> | string
  }

  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    id?: StringFilter<"Device"> | string
    name?: StringFilter<"Device"> | string
    status?: StringFilter<"Device"> | string
    type?: EnumDEVICETYPEFilter<"Device"> | $Enums.DEVICETYPE
    rooms?: DeviceRoomListRelationFilter
    deviceTriggers?: TriggerDeviceListRelationFilter
    deviceActions?: ActionDeviceListRelationFilter
  }

  export type DeviceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    type?: SortOrder
    rooms?: DeviceRoomOrderByRelationAggregateInput
    deviceTriggers?: TriggerDeviceOrderByRelationAggregateInput
    deviceActions?: ActionDeviceOrderByRelationAggregateInput
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    name?: StringFilter<"Device"> | string
    status?: StringFilter<"Device"> | string
    type?: EnumDEVICETYPEFilter<"Device"> | $Enums.DEVICETYPE
    rooms?: DeviceRoomListRelationFilter
    deviceTriggers?: TriggerDeviceListRelationFilter
    deviceActions?: ActionDeviceListRelationFilter
  }, "id">

  export type DeviceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    type?: SortOrder
    _count?: DeviceCountOrderByAggregateInput
    _max?: DeviceMaxOrderByAggregateInput
    _min?: DeviceMinOrderByAggregateInput
  }

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    OR?: DeviceScalarWhereWithAggregatesInput[]
    NOT?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Device"> | string
    name?: StringWithAggregatesFilter<"Device"> | string
    status?: StringWithAggregatesFilter<"Device"> | string
    type?: EnumDEVICETYPEWithAggregatesFilter<"Device"> | $Enums.DEVICETYPE
  }

  export type DeviceRoomWhereInput = {
    AND?: DeviceRoomWhereInput | DeviceRoomWhereInput[]
    OR?: DeviceRoomWhereInput[]
    NOT?: DeviceRoomWhereInput | DeviceRoomWhereInput[]
    deviceId?: StringFilter<"DeviceRoom"> | string
    roomId?: StringFilter<"DeviceRoom"> | string
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }

  export type DeviceRoomOrderByWithRelationInput = {
    deviceId?: SortOrder
    roomId?: SortOrder
    device?: DeviceOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
  }

  export type DeviceRoomWhereUniqueInput = Prisma.AtLeast<{
    deviceId_roomId?: DeviceRoomDeviceIdRoomIdCompoundUniqueInput
    AND?: DeviceRoomWhereInput | DeviceRoomWhereInput[]
    OR?: DeviceRoomWhereInput[]
    NOT?: DeviceRoomWhereInput | DeviceRoomWhereInput[]
    deviceId?: StringFilter<"DeviceRoom"> | string
    roomId?: StringFilter<"DeviceRoom"> | string
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }, "deviceId_roomId">

  export type DeviceRoomOrderByWithAggregationInput = {
    deviceId?: SortOrder
    roomId?: SortOrder
    _count?: DeviceRoomCountOrderByAggregateInput
    _max?: DeviceRoomMaxOrderByAggregateInput
    _min?: DeviceRoomMinOrderByAggregateInput
  }

  export type DeviceRoomScalarWhereWithAggregatesInput = {
    AND?: DeviceRoomScalarWhereWithAggregatesInput | DeviceRoomScalarWhereWithAggregatesInput[]
    OR?: DeviceRoomScalarWhereWithAggregatesInput[]
    NOT?: DeviceRoomScalarWhereWithAggregatesInput | DeviceRoomScalarWhereWithAggregatesInput[]
    deviceId?: StringWithAggregatesFilter<"DeviceRoom"> | string
    roomId?: StringWithAggregatesFilter<"DeviceRoom"> | string
  }

  export type AutomationWhereInput = {
    AND?: AutomationWhereInput | AutomationWhereInput[]
    OR?: AutomationWhereInput[]
    NOT?: AutomationWhereInput | AutomationWhereInput[]
    id?: StringFilter<"Automation"> | string
    name?: StringFilter<"Automation"> | string
    enabled?: BoolFilter<"Automation"> | boolean
    triggerId?: StringNullableFilter<"Automation"> | string | null
    scheduleId?: StringNullableFilter<"Automation"> | string | null
    trigger?: XOR<TriggerNullableScalarRelationFilter, TriggerWhereInput> | null
    actions?: ActionListRelationFilter
    schedule?: XOR<ScheduleNullableScalarRelationFilter, ScheduleWhereInput> | null
  }

  export type AutomationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    enabled?: SortOrder
    triggerId?: SortOrderInput | SortOrder
    scheduleId?: SortOrderInput | SortOrder
    trigger?: TriggerOrderByWithRelationInput
    actions?: ActionOrderByRelationAggregateInput
    schedule?: ScheduleOrderByWithRelationInput
  }

  export type AutomationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    triggerId?: string
    scheduleId?: string
    AND?: AutomationWhereInput | AutomationWhereInput[]
    OR?: AutomationWhereInput[]
    NOT?: AutomationWhereInput | AutomationWhereInput[]
    name?: StringFilter<"Automation"> | string
    enabled?: BoolFilter<"Automation"> | boolean
    trigger?: XOR<TriggerNullableScalarRelationFilter, TriggerWhereInput> | null
    actions?: ActionListRelationFilter
    schedule?: XOR<ScheduleNullableScalarRelationFilter, ScheduleWhereInput> | null
  }, "id" | "triggerId" | "scheduleId">

  export type AutomationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    enabled?: SortOrder
    triggerId?: SortOrderInput | SortOrder
    scheduleId?: SortOrderInput | SortOrder
    _count?: AutomationCountOrderByAggregateInput
    _max?: AutomationMaxOrderByAggregateInput
    _min?: AutomationMinOrderByAggregateInput
  }

  export type AutomationScalarWhereWithAggregatesInput = {
    AND?: AutomationScalarWhereWithAggregatesInput | AutomationScalarWhereWithAggregatesInput[]
    OR?: AutomationScalarWhereWithAggregatesInput[]
    NOT?: AutomationScalarWhereWithAggregatesInput | AutomationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Automation"> | string
    name?: StringWithAggregatesFilter<"Automation"> | string
    enabled?: BoolWithAggregatesFilter<"Automation"> | boolean
    triggerId?: StringNullableWithAggregatesFilter<"Automation"> | string | null
    scheduleId?: StringNullableWithAggregatesFilter<"Automation"> | string | null
  }

  export type TriggerWhereInput = {
    AND?: TriggerWhereInput | TriggerWhereInput[]
    OR?: TriggerWhereInput[]
    NOT?: TriggerWhereInput | TriggerWhereInput[]
    id?: StringFilter<"Trigger"> | string
    type?: StringFilter<"Trigger"> | string
    automation?: XOR<AutomationNullableScalarRelationFilter, AutomationWhereInput> | null
    timeTrigger?: XOR<TriggerTimeNullableScalarRelationFilter, TriggerTimeWhereInput> | null
    deviceTrigger?: XOR<TriggerDeviceNullableScalarRelationFilter, TriggerDeviceWhereInput> | null
    sceneTrigger?: XOR<TriggerSceneNullableScalarRelationFilter, TriggerSceneWhereInput> | null
  }

  export type TriggerOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    automation?: AutomationOrderByWithRelationInput
    timeTrigger?: TriggerTimeOrderByWithRelationInput
    deviceTrigger?: TriggerDeviceOrderByWithRelationInput
    sceneTrigger?: TriggerSceneOrderByWithRelationInput
  }

  export type TriggerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TriggerWhereInput | TriggerWhereInput[]
    OR?: TriggerWhereInput[]
    NOT?: TriggerWhereInput | TriggerWhereInput[]
    type?: StringFilter<"Trigger"> | string
    automation?: XOR<AutomationNullableScalarRelationFilter, AutomationWhereInput> | null
    timeTrigger?: XOR<TriggerTimeNullableScalarRelationFilter, TriggerTimeWhereInput> | null
    deviceTrigger?: XOR<TriggerDeviceNullableScalarRelationFilter, TriggerDeviceWhereInput> | null
    sceneTrigger?: XOR<TriggerSceneNullableScalarRelationFilter, TriggerSceneWhereInput> | null
  }, "id">

  export type TriggerOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    _count?: TriggerCountOrderByAggregateInput
    _max?: TriggerMaxOrderByAggregateInput
    _min?: TriggerMinOrderByAggregateInput
  }

  export type TriggerScalarWhereWithAggregatesInput = {
    AND?: TriggerScalarWhereWithAggregatesInput | TriggerScalarWhereWithAggregatesInput[]
    OR?: TriggerScalarWhereWithAggregatesInput[]
    NOT?: TriggerScalarWhereWithAggregatesInput | TriggerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trigger"> | string
    type?: StringWithAggregatesFilter<"Trigger"> | string
  }

  export type TriggerTimeWhereInput = {
    AND?: TriggerTimeWhereInput | TriggerTimeWhereInput[]
    OR?: TriggerTimeWhereInput[]
    NOT?: TriggerTimeWhereInput | TriggerTimeWhereInput[]
    id?: StringFilter<"TriggerTime"> | string
    time?: StringFilter<"TriggerTime"> | string
    triggerId?: StringFilter<"TriggerTime"> | string
    trigger?: XOR<TriggerScalarRelationFilter, TriggerWhereInput>
  }

  export type TriggerTimeOrderByWithRelationInput = {
    id?: SortOrder
    time?: SortOrder
    triggerId?: SortOrder
    trigger?: TriggerOrderByWithRelationInput
  }

  export type TriggerTimeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    triggerId?: string
    AND?: TriggerTimeWhereInput | TriggerTimeWhereInput[]
    OR?: TriggerTimeWhereInput[]
    NOT?: TriggerTimeWhereInput | TriggerTimeWhereInput[]
    time?: StringFilter<"TriggerTime"> | string
    trigger?: XOR<TriggerScalarRelationFilter, TriggerWhereInput>
  }, "id" | "triggerId">

  export type TriggerTimeOrderByWithAggregationInput = {
    id?: SortOrder
    time?: SortOrder
    triggerId?: SortOrder
    _count?: TriggerTimeCountOrderByAggregateInput
    _max?: TriggerTimeMaxOrderByAggregateInput
    _min?: TriggerTimeMinOrderByAggregateInput
  }

  export type TriggerTimeScalarWhereWithAggregatesInput = {
    AND?: TriggerTimeScalarWhereWithAggregatesInput | TriggerTimeScalarWhereWithAggregatesInput[]
    OR?: TriggerTimeScalarWhereWithAggregatesInput[]
    NOT?: TriggerTimeScalarWhereWithAggregatesInput | TriggerTimeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TriggerTime"> | string
    time?: StringWithAggregatesFilter<"TriggerTime"> | string
    triggerId?: StringWithAggregatesFilter<"TriggerTime"> | string
  }

  export type TriggerDeviceWhereInput = {
    AND?: TriggerDeviceWhereInput | TriggerDeviceWhereInput[]
    OR?: TriggerDeviceWhereInput[]
    NOT?: TriggerDeviceWhereInput | TriggerDeviceWhereInput[]
    id?: StringFilter<"TriggerDevice"> | string
    deviceId?: StringFilter<"TriggerDevice"> | string
    deviceState?: BoolFilter<"TriggerDevice"> | boolean
    triggerId?: StringFilter<"TriggerDevice"> | string
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
    trigger?: XOR<TriggerScalarRelationFilter, TriggerWhereInput>
  }

  export type TriggerDeviceOrderByWithRelationInput = {
    id?: SortOrder
    deviceId?: SortOrder
    deviceState?: SortOrder
    triggerId?: SortOrder
    device?: DeviceOrderByWithRelationInput
    trigger?: TriggerOrderByWithRelationInput
  }

  export type TriggerDeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    triggerId?: string
    AND?: TriggerDeviceWhereInput | TriggerDeviceWhereInput[]
    OR?: TriggerDeviceWhereInput[]
    NOT?: TriggerDeviceWhereInput | TriggerDeviceWhereInput[]
    deviceId?: StringFilter<"TriggerDevice"> | string
    deviceState?: BoolFilter<"TriggerDevice"> | boolean
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
    trigger?: XOR<TriggerScalarRelationFilter, TriggerWhereInput>
  }, "id" | "triggerId">

  export type TriggerDeviceOrderByWithAggregationInput = {
    id?: SortOrder
    deviceId?: SortOrder
    deviceState?: SortOrder
    triggerId?: SortOrder
    _count?: TriggerDeviceCountOrderByAggregateInput
    _max?: TriggerDeviceMaxOrderByAggregateInput
    _min?: TriggerDeviceMinOrderByAggregateInput
  }

  export type TriggerDeviceScalarWhereWithAggregatesInput = {
    AND?: TriggerDeviceScalarWhereWithAggregatesInput | TriggerDeviceScalarWhereWithAggregatesInput[]
    OR?: TriggerDeviceScalarWhereWithAggregatesInput[]
    NOT?: TriggerDeviceScalarWhereWithAggregatesInput | TriggerDeviceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TriggerDevice"> | string
    deviceId?: StringWithAggregatesFilter<"TriggerDevice"> | string
    deviceState?: BoolWithAggregatesFilter<"TriggerDevice"> | boolean
    triggerId?: StringWithAggregatesFilter<"TriggerDevice"> | string
  }

  export type TriggerSceneWhereInput = {
    AND?: TriggerSceneWhereInput | TriggerSceneWhereInput[]
    OR?: TriggerSceneWhereInput[]
    NOT?: TriggerSceneWhereInput | TriggerSceneWhereInput[]
    id?: StringFilter<"TriggerScene"> | string
    sceneId?: StringFilter<"TriggerScene"> | string
    triggerId?: StringFilter<"TriggerScene"> | string
    trigger?: XOR<TriggerScalarRelationFilter, TriggerWhereInput>
  }

  export type TriggerSceneOrderByWithRelationInput = {
    id?: SortOrder
    sceneId?: SortOrder
    triggerId?: SortOrder
    trigger?: TriggerOrderByWithRelationInput
  }

  export type TriggerSceneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    triggerId?: string
    AND?: TriggerSceneWhereInput | TriggerSceneWhereInput[]
    OR?: TriggerSceneWhereInput[]
    NOT?: TriggerSceneWhereInput | TriggerSceneWhereInput[]
    sceneId?: StringFilter<"TriggerScene"> | string
    trigger?: XOR<TriggerScalarRelationFilter, TriggerWhereInput>
  }, "id" | "triggerId">

  export type TriggerSceneOrderByWithAggregationInput = {
    id?: SortOrder
    sceneId?: SortOrder
    triggerId?: SortOrder
    _count?: TriggerSceneCountOrderByAggregateInput
    _max?: TriggerSceneMaxOrderByAggregateInput
    _min?: TriggerSceneMinOrderByAggregateInput
  }

  export type TriggerSceneScalarWhereWithAggregatesInput = {
    AND?: TriggerSceneScalarWhereWithAggregatesInput | TriggerSceneScalarWhereWithAggregatesInput[]
    OR?: TriggerSceneScalarWhereWithAggregatesInput[]
    NOT?: TriggerSceneScalarWhereWithAggregatesInput | TriggerSceneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TriggerScene"> | string
    sceneId?: StringWithAggregatesFilter<"TriggerScene"> | string
    triggerId?: StringWithAggregatesFilter<"TriggerScene"> | string
  }

  export type ActionWhereInput = {
    AND?: ActionWhereInput | ActionWhereInput[]
    OR?: ActionWhereInput[]
    NOT?: ActionWhereInput | ActionWhereInput[]
    id?: StringFilter<"Action"> | string
    type?: StringFilter<"Action"> | string
    automationId?: StringFilter<"Action"> | string
    automation?: XOR<AutomationScalarRelationFilter, AutomationWhereInput>
    deviceAction?: XOR<ActionDeviceNullableScalarRelationFilter, ActionDeviceWhereInput> | null
    sceneAction?: XOR<ActionSceneNullableScalarRelationFilter, ActionSceneWhereInput> | null
  }

  export type ActionOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    automationId?: SortOrder
    automation?: AutomationOrderByWithRelationInput
    deviceAction?: ActionDeviceOrderByWithRelationInput
    sceneAction?: ActionSceneOrderByWithRelationInput
  }

  export type ActionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActionWhereInput | ActionWhereInput[]
    OR?: ActionWhereInput[]
    NOT?: ActionWhereInput | ActionWhereInput[]
    type?: StringFilter<"Action"> | string
    automationId?: StringFilter<"Action"> | string
    automation?: XOR<AutomationScalarRelationFilter, AutomationWhereInput>
    deviceAction?: XOR<ActionDeviceNullableScalarRelationFilter, ActionDeviceWhereInput> | null
    sceneAction?: XOR<ActionSceneNullableScalarRelationFilter, ActionSceneWhereInput> | null
  }, "id">

  export type ActionOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    automationId?: SortOrder
    _count?: ActionCountOrderByAggregateInput
    _max?: ActionMaxOrderByAggregateInput
    _min?: ActionMinOrderByAggregateInput
  }

  export type ActionScalarWhereWithAggregatesInput = {
    AND?: ActionScalarWhereWithAggregatesInput | ActionScalarWhereWithAggregatesInput[]
    OR?: ActionScalarWhereWithAggregatesInput[]
    NOT?: ActionScalarWhereWithAggregatesInput | ActionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Action"> | string
    type?: StringWithAggregatesFilter<"Action"> | string
    automationId?: StringWithAggregatesFilter<"Action"> | string
  }

  export type ActionDeviceWhereInput = {
    AND?: ActionDeviceWhereInput | ActionDeviceWhereInput[]
    OR?: ActionDeviceWhereInput[]
    NOT?: ActionDeviceWhereInput | ActionDeviceWhereInput[]
    id?: StringFilter<"ActionDevice"> | string
    targetId?: StringFilter<"ActionDevice"> | string
    state?: BoolNullableFilter<"ActionDevice"> | boolean | null
    brightness?: IntNullableFilter<"ActionDevice"> | number | null
    temperature?: IntNullableFilter<"ActionDevice"> | number | null
    level?: IntNullableFilter<"ActionDevice"> | number | null
    actionId?: StringFilter<"ActionDevice"> | string
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
    action?: XOR<ActionScalarRelationFilter, ActionWhereInput>
  }

  export type ActionDeviceOrderByWithRelationInput = {
    id?: SortOrder
    targetId?: SortOrder
    state?: SortOrderInput | SortOrder
    brightness?: SortOrderInput | SortOrder
    temperature?: SortOrderInput | SortOrder
    level?: SortOrderInput | SortOrder
    actionId?: SortOrder
    device?: DeviceOrderByWithRelationInput
    action?: ActionOrderByWithRelationInput
  }

  export type ActionDeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    actionId?: string
    AND?: ActionDeviceWhereInput | ActionDeviceWhereInput[]
    OR?: ActionDeviceWhereInput[]
    NOT?: ActionDeviceWhereInput | ActionDeviceWhereInput[]
    targetId?: StringFilter<"ActionDevice"> | string
    state?: BoolNullableFilter<"ActionDevice"> | boolean | null
    brightness?: IntNullableFilter<"ActionDevice"> | number | null
    temperature?: IntNullableFilter<"ActionDevice"> | number | null
    level?: IntNullableFilter<"ActionDevice"> | number | null
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
    action?: XOR<ActionScalarRelationFilter, ActionWhereInput>
  }, "id" | "actionId">

  export type ActionDeviceOrderByWithAggregationInput = {
    id?: SortOrder
    targetId?: SortOrder
    state?: SortOrderInput | SortOrder
    brightness?: SortOrderInput | SortOrder
    temperature?: SortOrderInput | SortOrder
    level?: SortOrderInput | SortOrder
    actionId?: SortOrder
    _count?: ActionDeviceCountOrderByAggregateInput
    _avg?: ActionDeviceAvgOrderByAggregateInput
    _max?: ActionDeviceMaxOrderByAggregateInput
    _min?: ActionDeviceMinOrderByAggregateInput
    _sum?: ActionDeviceSumOrderByAggregateInput
  }

  export type ActionDeviceScalarWhereWithAggregatesInput = {
    AND?: ActionDeviceScalarWhereWithAggregatesInput | ActionDeviceScalarWhereWithAggregatesInput[]
    OR?: ActionDeviceScalarWhereWithAggregatesInput[]
    NOT?: ActionDeviceScalarWhereWithAggregatesInput | ActionDeviceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActionDevice"> | string
    targetId?: StringWithAggregatesFilter<"ActionDevice"> | string
    state?: BoolNullableWithAggregatesFilter<"ActionDevice"> | boolean | null
    brightness?: IntNullableWithAggregatesFilter<"ActionDevice"> | number | null
    temperature?: IntNullableWithAggregatesFilter<"ActionDevice"> | number | null
    level?: IntNullableWithAggregatesFilter<"ActionDevice"> | number | null
    actionId?: StringWithAggregatesFilter<"ActionDevice"> | string
  }

  export type ActionSceneWhereInput = {
    AND?: ActionSceneWhereInput | ActionSceneWhereInput[]
    OR?: ActionSceneWhereInput[]
    NOT?: ActionSceneWhereInput | ActionSceneWhereInput[]
    id?: StringFilter<"ActionScene"> | string
    targetId?: StringFilter<"ActionScene"> | string
    actionId?: StringFilter<"ActionScene"> | string
    action?: XOR<ActionScalarRelationFilter, ActionWhereInput>
  }

  export type ActionSceneOrderByWithRelationInput = {
    id?: SortOrder
    targetId?: SortOrder
    actionId?: SortOrder
    action?: ActionOrderByWithRelationInput
  }

  export type ActionSceneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    actionId?: string
    AND?: ActionSceneWhereInput | ActionSceneWhereInput[]
    OR?: ActionSceneWhereInput[]
    NOT?: ActionSceneWhereInput | ActionSceneWhereInput[]
    targetId?: StringFilter<"ActionScene"> | string
    action?: XOR<ActionScalarRelationFilter, ActionWhereInput>
  }, "id" | "actionId">

  export type ActionSceneOrderByWithAggregationInput = {
    id?: SortOrder
    targetId?: SortOrder
    actionId?: SortOrder
    _count?: ActionSceneCountOrderByAggregateInput
    _max?: ActionSceneMaxOrderByAggregateInput
    _min?: ActionSceneMinOrderByAggregateInput
  }

  export type ActionSceneScalarWhereWithAggregatesInput = {
    AND?: ActionSceneScalarWhereWithAggregatesInput | ActionSceneScalarWhereWithAggregatesInput[]
    OR?: ActionSceneScalarWhereWithAggregatesInput[]
    NOT?: ActionSceneScalarWhereWithAggregatesInput | ActionSceneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActionScene"> | string
    targetId?: StringWithAggregatesFilter<"ActionScene"> | string
    actionId?: StringWithAggregatesFilter<"ActionScene"> | string
  }

  export type ScheduleWhereInput = {
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    id?: StringFilter<"Schedule"> | string
    repeat?: StringFilter<"Schedule"> | string
    time?: StringFilter<"Schedule"> | string
    automation?: XOR<AutomationNullableScalarRelationFilter, AutomationWhereInput> | null
    scheduleDays?: ScheduleDayListRelationFilter
  }

  export type ScheduleOrderByWithRelationInput = {
    id?: SortOrder
    repeat?: SortOrder
    time?: SortOrder
    automation?: AutomationOrderByWithRelationInput
    scheduleDays?: ScheduleDayOrderByRelationAggregateInput
  }

  export type ScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    repeat?: StringFilter<"Schedule"> | string
    time?: StringFilter<"Schedule"> | string
    automation?: XOR<AutomationNullableScalarRelationFilter, AutomationWhereInput> | null
    scheduleDays?: ScheduleDayListRelationFilter
  }, "id">

  export type ScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    repeat?: SortOrder
    time?: SortOrder
    _count?: ScheduleCountOrderByAggregateInput
    _max?: ScheduleMaxOrderByAggregateInput
    _min?: ScheduleMinOrderByAggregateInput
  }

  export type ScheduleScalarWhereWithAggregatesInput = {
    AND?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    OR?: ScheduleScalarWhereWithAggregatesInput[]
    NOT?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Schedule"> | string
    repeat?: StringWithAggregatesFilter<"Schedule"> | string
    time?: StringWithAggregatesFilter<"Schedule"> | string
  }

  export type ScheduleDayWhereInput = {
    AND?: ScheduleDayWhereInput | ScheduleDayWhereInput[]
    OR?: ScheduleDayWhereInput[]
    NOT?: ScheduleDayWhereInput | ScheduleDayWhereInput[]
    id?: StringFilter<"ScheduleDay"> | string
    day?: EnumscheduleDaysFilter<"ScheduleDay"> | $Enums.scheduleDays
    scheduleId?: StringFilter<"ScheduleDay"> | string
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
  }

  export type ScheduleDayOrderByWithRelationInput = {
    id?: SortOrder
    day?: SortOrder
    scheduleId?: SortOrder
    schedule?: ScheduleOrderByWithRelationInput
  }

  export type ScheduleDayWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    scheduleId_day?: ScheduleDayScheduleIdDayCompoundUniqueInput
    AND?: ScheduleDayWhereInput | ScheduleDayWhereInput[]
    OR?: ScheduleDayWhereInput[]
    NOT?: ScheduleDayWhereInput | ScheduleDayWhereInput[]
    day?: EnumscheduleDaysFilter<"ScheduleDay"> | $Enums.scheduleDays
    scheduleId?: StringFilter<"ScheduleDay"> | string
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
  }, "id" | "scheduleId_day">

  export type ScheduleDayOrderByWithAggregationInput = {
    id?: SortOrder
    day?: SortOrder
    scheduleId?: SortOrder
    _count?: ScheduleDayCountOrderByAggregateInput
    _max?: ScheduleDayMaxOrderByAggregateInput
    _min?: ScheduleDayMinOrderByAggregateInput
  }

  export type ScheduleDayScalarWhereWithAggregatesInput = {
    AND?: ScheduleDayScalarWhereWithAggregatesInput | ScheduleDayScalarWhereWithAggregatesInput[]
    OR?: ScheduleDayScalarWhereWithAggregatesInput[]
    NOT?: ScheduleDayScalarWhereWithAggregatesInput | ScheduleDayScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScheduleDay"> | string
    day?: EnumscheduleDaysWithAggregatesFilter<"ScheduleDay"> | $Enums.scheduleDays
    scheduleId?: StringWithAggregatesFilter<"ScheduleDay"> | string
  }

  export type BuildingCreateInput = {
    id?: string
    name: string
    floors?: FloorCreateNestedManyWithoutBuildingInput
  }

  export type BuildingUncheckedCreateInput = {
    id?: string
    name: string
    floors?: FloorUncheckedCreateNestedManyWithoutBuildingInput
  }

  export type BuildingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    floors?: FloorUpdateManyWithoutBuildingNestedInput
  }

  export type BuildingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    floors?: FloorUncheckedUpdateManyWithoutBuildingNestedInput
  }

  export type BuildingCreateManyInput = {
    id?: string
    name: string
  }

  export type BuildingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BuildingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FloorCreateInput = {
    id?: string
    number: number
    building: BuildingCreateNestedOneWithoutFloorsInput
    rooms?: RoomCreateNestedManyWithoutFloorInput
  }

  export type FloorUncheckedCreateInput = {
    id?: string
    number: number
    buildingId: string
    rooms?: RoomUncheckedCreateNestedManyWithoutFloorInput
  }

  export type FloorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    building?: BuildingUpdateOneRequiredWithoutFloorsNestedInput
    rooms?: RoomUpdateManyWithoutFloorNestedInput
  }

  export type FloorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    buildingId?: StringFieldUpdateOperationsInput | string
    rooms?: RoomUncheckedUpdateManyWithoutFloorNestedInput
  }

  export type FloorCreateManyInput = {
    id?: string
    number: number
    buildingId: string
  }

  export type FloorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
  }

  export type FloorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    buildingId?: StringFieldUpdateOperationsInput | string
  }

  export type RoomCreateInput = {
    id?: string
    name: string
    floor: FloorCreateNestedOneWithoutRoomsInput
    devices?: DeviceRoomCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: string
    name: string
    floorId: string
    devices?: DeviceRoomUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    floor?: FloorUpdateOneRequiredWithoutRoomsNestedInput
    devices?: DeviceRoomUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    floorId?: StringFieldUpdateOperationsInput | string
    devices?: DeviceRoomUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: string
    name: string
    floorId: string
  }

  export type RoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    floorId?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceCreateInput = {
    id?: string
    name: string
    status: string
    type?: $Enums.DEVICETYPE
    rooms?: DeviceRoomCreateNestedManyWithoutDeviceInput
    deviceTriggers?: TriggerDeviceCreateNestedManyWithoutDeviceInput
    deviceActions?: ActionDeviceCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateInput = {
    id?: string
    name: string
    status: string
    type?: $Enums.DEVICETYPE
    rooms?: DeviceRoomUncheckedCreateNestedManyWithoutDeviceInput
    deviceTriggers?: TriggerDeviceUncheckedCreateNestedManyWithoutDeviceInput
    deviceActions?: ActionDeviceUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: EnumDEVICETYPEFieldUpdateOperationsInput | $Enums.DEVICETYPE
    rooms?: DeviceRoomUpdateManyWithoutDeviceNestedInput
    deviceTriggers?: TriggerDeviceUpdateManyWithoutDeviceNestedInput
    deviceActions?: ActionDeviceUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: EnumDEVICETYPEFieldUpdateOperationsInput | $Enums.DEVICETYPE
    rooms?: DeviceRoomUncheckedUpdateManyWithoutDeviceNestedInput
    deviceTriggers?: TriggerDeviceUncheckedUpdateManyWithoutDeviceNestedInput
    deviceActions?: ActionDeviceUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateManyInput = {
    id?: string
    name: string
    status: string
    type?: $Enums.DEVICETYPE
  }

  export type DeviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: EnumDEVICETYPEFieldUpdateOperationsInput | $Enums.DEVICETYPE
  }

  export type DeviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: EnumDEVICETYPEFieldUpdateOperationsInput | $Enums.DEVICETYPE
  }

  export type DeviceRoomCreateInput = {
    device: DeviceCreateNestedOneWithoutRoomsInput
    room: RoomCreateNestedOneWithoutDevicesInput
  }

  export type DeviceRoomUncheckedCreateInput = {
    deviceId: string
    roomId: string
  }

  export type DeviceRoomUpdateInput = {
    device?: DeviceUpdateOneRequiredWithoutRoomsNestedInput
    room?: RoomUpdateOneRequiredWithoutDevicesNestedInput
  }

  export type DeviceRoomUncheckedUpdateInput = {
    deviceId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceRoomCreateManyInput = {
    deviceId: string
    roomId: string
  }

  export type DeviceRoomUpdateManyMutationInput = {

  }

  export type DeviceRoomUncheckedUpdateManyInput = {
    deviceId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
  }

  export type AutomationCreateInput = {
    id?: string
    name: string
    enabled?: boolean
    trigger?: TriggerCreateNestedOneWithoutAutomationInput
    actions?: ActionCreateNestedManyWithoutAutomationInput
    schedule?: ScheduleCreateNestedOneWithoutAutomationInput
  }

  export type AutomationUncheckedCreateInput = {
    id?: string
    name: string
    enabled?: boolean
    triggerId?: string | null
    scheduleId?: string | null
    actions?: ActionUncheckedCreateNestedManyWithoutAutomationInput
  }

  export type AutomationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    trigger?: TriggerUpdateOneWithoutAutomationNestedInput
    actions?: ActionUpdateManyWithoutAutomationNestedInput
    schedule?: ScheduleUpdateOneWithoutAutomationNestedInput
  }

  export type AutomationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleId?: NullableStringFieldUpdateOperationsInput | string | null
    actions?: ActionUncheckedUpdateManyWithoutAutomationNestedInput
  }

  export type AutomationCreateManyInput = {
    id?: string
    name: string
    enabled?: boolean
    triggerId?: string | null
    scheduleId?: string | null
  }

  export type AutomationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AutomationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TriggerCreateInput = {
    id?: string
    type: string
    automation?: AutomationCreateNestedOneWithoutTriggerInput
    timeTrigger?: TriggerTimeCreateNestedOneWithoutTriggerInput
    deviceTrigger?: TriggerDeviceCreateNestedOneWithoutTriggerInput
    sceneTrigger?: TriggerSceneCreateNestedOneWithoutTriggerInput
  }

  export type TriggerUncheckedCreateInput = {
    id?: string
    type: string
    automation?: AutomationUncheckedCreateNestedOneWithoutTriggerInput
    timeTrigger?: TriggerTimeUncheckedCreateNestedOneWithoutTriggerInput
    deviceTrigger?: TriggerDeviceUncheckedCreateNestedOneWithoutTriggerInput
    sceneTrigger?: TriggerSceneUncheckedCreateNestedOneWithoutTriggerInput
  }

  export type TriggerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    automation?: AutomationUpdateOneWithoutTriggerNestedInput
    timeTrigger?: TriggerTimeUpdateOneWithoutTriggerNestedInput
    deviceTrigger?: TriggerDeviceUpdateOneWithoutTriggerNestedInput
    sceneTrigger?: TriggerSceneUpdateOneWithoutTriggerNestedInput
  }

  export type TriggerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    automation?: AutomationUncheckedUpdateOneWithoutTriggerNestedInput
    timeTrigger?: TriggerTimeUncheckedUpdateOneWithoutTriggerNestedInput
    deviceTrigger?: TriggerDeviceUncheckedUpdateOneWithoutTriggerNestedInput
    sceneTrigger?: TriggerSceneUncheckedUpdateOneWithoutTriggerNestedInput
  }

  export type TriggerCreateManyInput = {
    id?: string
    type: string
  }

  export type TriggerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerTimeCreateInput = {
    id?: string
    time: string
    trigger: TriggerCreateNestedOneWithoutTimeTriggerInput
  }

  export type TriggerTimeUncheckedCreateInput = {
    id?: string
    time: string
    triggerId: string
  }

  export type TriggerTimeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUpdateOneRequiredWithoutTimeTriggerNestedInput
  }

  export type TriggerTimeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerTimeCreateManyInput = {
    id?: string
    time: string
    triggerId: string
  }

  export type TriggerTimeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerTimeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerDeviceCreateInput = {
    id?: string
    deviceState: boolean
    device: DeviceCreateNestedOneWithoutDeviceTriggersInput
    trigger: TriggerCreateNestedOneWithoutDeviceTriggerInput
  }

  export type TriggerDeviceUncheckedCreateInput = {
    id?: string
    deviceId: string
    deviceState: boolean
    triggerId: string
  }

  export type TriggerDeviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceState?: BoolFieldUpdateOperationsInput | boolean
    device?: DeviceUpdateOneRequiredWithoutDeviceTriggersNestedInput
    trigger?: TriggerUpdateOneRequiredWithoutDeviceTriggerNestedInput
  }

  export type TriggerDeviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    deviceState?: BoolFieldUpdateOperationsInput | boolean
    triggerId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerDeviceCreateManyInput = {
    id?: string
    deviceId: string
    deviceState: boolean
    triggerId: string
  }

  export type TriggerDeviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceState?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TriggerDeviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    deviceState?: BoolFieldUpdateOperationsInput | boolean
    triggerId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerSceneCreateInput = {
    id?: string
    sceneId: string
    trigger: TriggerCreateNestedOneWithoutSceneTriggerInput
  }

  export type TriggerSceneUncheckedCreateInput = {
    id?: string
    sceneId: string
    triggerId: string
  }

  export type TriggerSceneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sceneId?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUpdateOneRequiredWithoutSceneTriggerNestedInput
  }

  export type TriggerSceneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sceneId?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerSceneCreateManyInput = {
    id?: string
    sceneId: string
    triggerId: string
  }

  export type TriggerSceneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sceneId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerSceneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sceneId?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionCreateInput = {
    id?: string
    type: string
    automation: AutomationCreateNestedOneWithoutActionsInput
    deviceAction?: ActionDeviceCreateNestedOneWithoutActionInput
    sceneAction?: ActionSceneCreateNestedOneWithoutActionInput
  }

  export type ActionUncheckedCreateInput = {
    id?: string
    type: string
    automationId: string
    deviceAction?: ActionDeviceUncheckedCreateNestedOneWithoutActionInput
    sceneAction?: ActionSceneUncheckedCreateNestedOneWithoutActionInput
  }

  export type ActionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    automation?: AutomationUpdateOneRequiredWithoutActionsNestedInput
    deviceAction?: ActionDeviceUpdateOneWithoutActionNestedInput
    sceneAction?: ActionSceneUpdateOneWithoutActionNestedInput
  }

  export type ActionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    automationId?: StringFieldUpdateOperationsInput | string
    deviceAction?: ActionDeviceUncheckedUpdateOneWithoutActionNestedInput
    sceneAction?: ActionSceneUncheckedUpdateOneWithoutActionNestedInput
  }

  export type ActionCreateManyInput = {
    id?: string
    type: string
    automationId: string
  }

  export type ActionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type ActionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    automationId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionDeviceCreateInput = {
    id?: string
    state?: boolean | null
    brightness?: number | null
    temperature?: number | null
    level?: number | null
    device: DeviceCreateNestedOneWithoutDeviceActionsInput
    action: ActionCreateNestedOneWithoutDeviceActionInput
  }

  export type ActionDeviceUncheckedCreateInput = {
    id?: string
    targetId: string
    state?: boolean | null
    brightness?: number | null
    temperature?: number | null
    level?: number | null
    actionId: string
  }

  export type ActionDeviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: NullableBoolFieldUpdateOperationsInput | boolean | null
    brightness?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableIntFieldUpdateOperationsInput | number | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    device?: DeviceUpdateOneRequiredWithoutDeviceActionsNestedInput
    action?: ActionUpdateOneRequiredWithoutDeviceActionNestedInput
  }

  export type ActionDeviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    state?: NullableBoolFieldUpdateOperationsInput | boolean | null
    brightness?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableIntFieldUpdateOperationsInput | number | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    actionId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionDeviceCreateManyInput = {
    id?: string
    targetId: string
    state?: boolean | null
    brightness?: number | null
    temperature?: number | null
    level?: number | null
    actionId: string
  }

  export type ActionDeviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: NullableBoolFieldUpdateOperationsInput | boolean | null
    brightness?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableIntFieldUpdateOperationsInput | number | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ActionDeviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    state?: NullableBoolFieldUpdateOperationsInput | boolean | null
    brightness?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableIntFieldUpdateOperationsInput | number | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    actionId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionSceneCreateInput = {
    id?: string
    targetId: string
    action: ActionCreateNestedOneWithoutSceneActionInput
  }

  export type ActionSceneUncheckedCreateInput = {
    id?: string
    targetId: string
    actionId: string
  }

  export type ActionSceneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    action?: ActionUpdateOneRequiredWithoutSceneActionNestedInput
  }

  export type ActionSceneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionSceneCreateManyInput = {
    id?: string
    targetId: string
    actionId: string
  }

  export type ActionSceneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionSceneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleCreateInput = {
    id?: string
    repeat: string
    time: string
    automation?: AutomationCreateNestedOneWithoutScheduleInput
    scheduleDays?: ScheduleDayCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateInput = {
    id?: string
    repeat: string
    time: string
    automation?: AutomationUncheckedCreateNestedOneWithoutScheduleInput
    scheduleDays?: ScheduleDayUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    repeat?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    automation?: AutomationUpdateOneWithoutScheduleNestedInput
    scheduleDays?: ScheduleDayUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    repeat?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    automation?: AutomationUncheckedUpdateOneWithoutScheduleNestedInput
    scheduleDays?: ScheduleDayUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleCreateManyInput = {
    id?: string
    repeat: string
    time: string
  }

  export type ScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    repeat?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    repeat?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleDayCreateInput = {
    id?: string
    day: $Enums.scheduleDays
    schedule: ScheduleCreateNestedOneWithoutScheduleDaysInput
  }

  export type ScheduleDayUncheckedCreateInput = {
    id?: string
    day: $Enums.scheduleDays
    scheduleId: string
  }

  export type ScheduleDayUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumscheduleDaysFieldUpdateOperationsInput | $Enums.scheduleDays
    schedule?: ScheduleUpdateOneRequiredWithoutScheduleDaysNestedInput
  }

  export type ScheduleDayUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumscheduleDaysFieldUpdateOperationsInput | $Enums.scheduleDays
    scheduleId?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleDayCreateManyInput = {
    id?: string
    day: $Enums.scheduleDays
    scheduleId: string
  }

  export type ScheduleDayUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumscheduleDaysFieldUpdateOperationsInput | $Enums.scheduleDays
  }

  export type ScheduleDayUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumscheduleDaysFieldUpdateOperationsInput | $Enums.scheduleDays
    scheduleId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloorListRelationFilter = {
    every?: FloorWhereInput
    some?: FloorWhereInput
    none?: FloorWhereInput
  }

  export type FloorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BuildingCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BuildingMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BuildingMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BuildingScalarRelationFilter = {
    is?: BuildingWhereInput
    isNot?: BuildingWhereInput
  }

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FloorCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    buildingId?: SortOrder
  }

  export type FloorAvgOrderByAggregateInput = {
    number?: SortOrder
  }

  export type FloorMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    buildingId?: SortOrder
  }

  export type FloorMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    buildingId?: SortOrder
  }

  export type FloorSumOrderByAggregateInput = {
    number?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloorScalarRelationFilter = {
    is?: FloorWhereInput
    isNot?: FloorWhereInput
  }

  export type DeviceRoomListRelationFilter = {
    every?: DeviceRoomWhereInput
    some?: DeviceRoomWhereInput
    none?: DeviceRoomWhereInput
  }

  export type DeviceRoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    floorId?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    floorId?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    floorId?: SortOrder
  }

  export type EnumDEVICETYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.DEVICETYPE | EnumDEVICETYPEFieldRefInput<$PrismaModel>
    in?: $Enums.DEVICETYPE[] | ListEnumDEVICETYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.DEVICETYPE[] | ListEnumDEVICETYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumDEVICETYPEFilter<$PrismaModel> | $Enums.DEVICETYPE
  }

  export type TriggerDeviceListRelationFilter = {
    every?: TriggerDeviceWhereInput
    some?: TriggerDeviceWhereInput
    none?: TriggerDeviceWhereInput
  }

  export type ActionDeviceListRelationFilter = {
    every?: ActionDeviceWhereInput
    some?: ActionDeviceWhereInput
    none?: ActionDeviceWhereInput
  }

  export type TriggerDeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActionDeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    type?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    type?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    type?: SortOrder
  }

  export type EnumDEVICETYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DEVICETYPE | EnumDEVICETYPEFieldRefInput<$PrismaModel>
    in?: $Enums.DEVICETYPE[] | ListEnumDEVICETYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.DEVICETYPE[] | ListEnumDEVICETYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumDEVICETYPEWithAggregatesFilter<$PrismaModel> | $Enums.DEVICETYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDEVICETYPEFilter<$PrismaModel>
    _max?: NestedEnumDEVICETYPEFilter<$PrismaModel>
  }

  export type DeviceScalarRelationFilter = {
    is?: DeviceWhereInput
    isNot?: DeviceWhereInput
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type DeviceRoomDeviceIdRoomIdCompoundUniqueInput = {
    deviceId: string
    roomId: string
  }

  export type DeviceRoomCountOrderByAggregateInput = {
    deviceId?: SortOrder
    roomId?: SortOrder
  }

  export type DeviceRoomMaxOrderByAggregateInput = {
    deviceId?: SortOrder
    roomId?: SortOrder
  }

  export type DeviceRoomMinOrderByAggregateInput = {
    deviceId?: SortOrder
    roomId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TriggerNullableScalarRelationFilter = {
    is?: TriggerWhereInput | null
    isNot?: TriggerWhereInput | null
  }

  export type ActionListRelationFilter = {
    every?: ActionWhereInput
    some?: ActionWhereInput
    none?: ActionWhereInput
  }

  export type ScheduleNullableScalarRelationFilter = {
    is?: ScheduleWhereInput | null
    isNot?: ScheduleWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ActionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AutomationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    enabled?: SortOrder
    triggerId?: SortOrder
    scheduleId?: SortOrder
  }

  export type AutomationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    enabled?: SortOrder
    triggerId?: SortOrder
    scheduleId?: SortOrder
  }

  export type AutomationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    enabled?: SortOrder
    triggerId?: SortOrder
    scheduleId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type AutomationNullableScalarRelationFilter = {
    is?: AutomationWhereInput | null
    isNot?: AutomationWhereInput | null
  }

  export type TriggerTimeNullableScalarRelationFilter = {
    is?: TriggerTimeWhereInput | null
    isNot?: TriggerTimeWhereInput | null
  }

  export type TriggerDeviceNullableScalarRelationFilter = {
    is?: TriggerDeviceWhereInput | null
    isNot?: TriggerDeviceWhereInput | null
  }

  export type TriggerSceneNullableScalarRelationFilter = {
    is?: TriggerSceneWhereInput | null
    isNot?: TriggerSceneWhereInput | null
  }

  export type TriggerCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type TriggerMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type TriggerMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type TriggerScalarRelationFilter = {
    is?: TriggerWhereInput
    isNot?: TriggerWhereInput
  }

  export type TriggerTimeCountOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    triggerId?: SortOrder
  }

  export type TriggerTimeMaxOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    triggerId?: SortOrder
  }

  export type TriggerTimeMinOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    triggerId?: SortOrder
  }

  export type TriggerDeviceCountOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    deviceState?: SortOrder
    triggerId?: SortOrder
  }

  export type TriggerDeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    deviceState?: SortOrder
    triggerId?: SortOrder
  }

  export type TriggerDeviceMinOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    deviceState?: SortOrder
    triggerId?: SortOrder
  }

  export type TriggerSceneCountOrderByAggregateInput = {
    id?: SortOrder
    sceneId?: SortOrder
    triggerId?: SortOrder
  }

  export type TriggerSceneMaxOrderByAggregateInput = {
    id?: SortOrder
    sceneId?: SortOrder
    triggerId?: SortOrder
  }

  export type TriggerSceneMinOrderByAggregateInput = {
    id?: SortOrder
    sceneId?: SortOrder
    triggerId?: SortOrder
  }

  export type AutomationScalarRelationFilter = {
    is?: AutomationWhereInput
    isNot?: AutomationWhereInput
  }

  export type ActionDeviceNullableScalarRelationFilter = {
    is?: ActionDeviceWhereInput | null
    isNot?: ActionDeviceWhereInput | null
  }

  export type ActionSceneNullableScalarRelationFilter = {
    is?: ActionSceneWhereInput | null
    isNot?: ActionSceneWhereInput | null
  }

  export type ActionCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    automationId?: SortOrder
  }

  export type ActionMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    automationId?: SortOrder
  }

  export type ActionMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    automationId?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ActionScalarRelationFilter = {
    is?: ActionWhereInput
    isNot?: ActionWhereInput
  }

  export type ActionDeviceCountOrderByAggregateInput = {
    id?: SortOrder
    targetId?: SortOrder
    state?: SortOrder
    brightness?: SortOrder
    temperature?: SortOrder
    level?: SortOrder
    actionId?: SortOrder
  }

  export type ActionDeviceAvgOrderByAggregateInput = {
    brightness?: SortOrder
    temperature?: SortOrder
    level?: SortOrder
  }

  export type ActionDeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    targetId?: SortOrder
    state?: SortOrder
    brightness?: SortOrder
    temperature?: SortOrder
    level?: SortOrder
    actionId?: SortOrder
  }

  export type ActionDeviceMinOrderByAggregateInput = {
    id?: SortOrder
    targetId?: SortOrder
    state?: SortOrder
    brightness?: SortOrder
    temperature?: SortOrder
    level?: SortOrder
    actionId?: SortOrder
  }

  export type ActionDeviceSumOrderByAggregateInput = {
    brightness?: SortOrder
    temperature?: SortOrder
    level?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ActionSceneCountOrderByAggregateInput = {
    id?: SortOrder
    targetId?: SortOrder
    actionId?: SortOrder
  }

  export type ActionSceneMaxOrderByAggregateInput = {
    id?: SortOrder
    targetId?: SortOrder
    actionId?: SortOrder
  }

  export type ActionSceneMinOrderByAggregateInput = {
    id?: SortOrder
    targetId?: SortOrder
    actionId?: SortOrder
  }

  export type ScheduleDayListRelationFilter = {
    every?: ScheduleDayWhereInput
    some?: ScheduleDayWhereInput
    none?: ScheduleDayWhereInput
  }

  export type ScheduleDayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    repeat?: SortOrder
    time?: SortOrder
  }

  export type ScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    repeat?: SortOrder
    time?: SortOrder
  }

  export type ScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    repeat?: SortOrder
    time?: SortOrder
  }

  export type EnumscheduleDaysFilter<$PrismaModel = never> = {
    equals?: $Enums.scheduleDays | EnumscheduleDaysFieldRefInput<$PrismaModel>
    in?: $Enums.scheduleDays[] | ListEnumscheduleDaysFieldRefInput<$PrismaModel>
    notIn?: $Enums.scheduleDays[] | ListEnumscheduleDaysFieldRefInput<$PrismaModel>
    not?: NestedEnumscheduleDaysFilter<$PrismaModel> | $Enums.scheduleDays
  }

  export type ScheduleScalarRelationFilter = {
    is?: ScheduleWhereInput
    isNot?: ScheduleWhereInput
  }

  export type ScheduleDayScheduleIdDayCompoundUniqueInput = {
    scheduleId: string
    day: $Enums.scheduleDays
  }

  export type ScheduleDayCountOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    scheduleId?: SortOrder
  }

  export type ScheduleDayMaxOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    scheduleId?: SortOrder
  }

  export type ScheduleDayMinOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    scheduleId?: SortOrder
  }

  export type EnumscheduleDaysWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.scheduleDays | EnumscheduleDaysFieldRefInput<$PrismaModel>
    in?: $Enums.scheduleDays[] | ListEnumscheduleDaysFieldRefInput<$PrismaModel>
    notIn?: $Enums.scheduleDays[] | ListEnumscheduleDaysFieldRefInput<$PrismaModel>
    not?: NestedEnumscheduleDaysWithAggregatesFilter<$PrismaModel> | $Enums.scheduleDays
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumscheduleDaysFilter<$PrismaModel>
    _max?: NestedEnumscheduleDaysFilter<$PrismaModel>
  }

  export type FloorCreateNestedManyWithoutBuildingInput = {
    create?: XOR<FloorCreateWithoutBuildingInput, FloorUncheckedCreateWithoutBuildingInput> | FloorCreateWithoutBuildingInput[] | FloorUncheckedCreateWithoutBuildingInput[]
    connectOrCreate?: FloorCreateOrConnectWithoutBuildingInput | FloorCreateOrConnectWithoutBuildingInput[]
    createMany?: FloorCreateManyBuildingInputEnvelope
    connect?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
  }

  export type FloorUncheckedCreateNestedManyWithoutBuildingInput = {
    create?: XOR<FloorCreateWithoutBuildingInput, FloorUncheckedCreateWithoutBuildingInput> | FloorCreateWithoutBuildingInput[] | FloorUncheckedCreateWithoutBuildingInput[]
    connectOrCreate?: FloorCreateOrConnectWithoutBuildingInput | FloorCreateOrConnectWithoutBuildingInput[]
    createMany?: FloorCreateManyBuildingInputEnvelope
    connect?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloorUpdateManyWithoutBuildingNestedInput = {
    create?: XOR<FloorCreateWithoutBuildingInput, FloorUncheckedCreateWithoutBuildingInput> | FloorCreateWithoutBuildingInput[] | FloorUncheckedCreateWithoutBuildingInput[]
    connectOrCreate?: FloorCreateOrConnectWithoutBuildingInput | FloorCreateOrConnectWithoutBuildingInput[]
    upsert?: FloorUpsertWithWhereUniqueWithoutBuildingInput | FloorUpsertWithWhereUniqueWithoutBuildingInput[]
    createMany?: FloorCreateManyBuildingInputEnvelope
    set?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
    disconnect?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
    delete?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
    connect?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
    update?: FloorUpdateWithWhereUniqueWithoutBuildingInput | FloorUpdateWithWhereUniqueWithoutBuildingInput[]
    updateMany?: FloorUpdateManyWithWhereWithoutBuildingInput | FloorUpdateManyWithWhereWithoutBuildingInput[]
    deleteMany?: FloorScalarWhereInput | FloorScalarWhereInput[]
  }

  export type FloorUncheckedUpdateManyWithoutBuildingNestedInput = {
    create?: XOR<FloorCreateWithoutBuildingInput, FloorUncheckedCreateWithoutBuildingInput> | FloorCreateWithoutBuildingInput[] | FloorUncheckedCreateWithoutBuildingInput[]
    connectOrCreate?: FloorCreateOrConnectWithoutBuildingInput | FloorCreateOrConnectWithoutBuildingInput[]
    upsert?: FloorUpsertWithWhereUniqueWithoutBuildingInput | FloorUpsertWithWhereUniqueWithoutBuildingInput[]
    createMany?: FloorCreateManyBuildingInputEnvelope
    set?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
    disconnect?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
    delete?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
    connect?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
    update?: FloorUpdateWithWhereUniqueWithoutBuildingInput | FloorUpdateWithWhereUniqueWithoutBuildingInput[]
    updateMany?: FloorUpdateManyWithWhereWithoutBuildingInput | FloorUpdateManyWithWhereWithoutBuildingInput[]
    deleteMany?: FloorScalarWhereInput | FloorScalarWhereInput[]
  }

  export type BuildingCreateNestedOneWithoutFloorsInput = {
    create?: XOR<BuildingCreateWithoutFloorsInput, BuildingUncheckedCreateWithoutFloorsInput>
    connectOrCreate?: BuildingCreateOrConnectWithoutFloorsInput
    connect?: BuildingWhereUniqueInput
  }

  export type RoomCreateNestedManyWithoutFloorInput = {
    create?: XOR<RoomCreateWithoutFloorInput, RoomUncheckedCreateWithoutFloorInput> | RoomCreateWithoutFloorInput[] | RoomUncheckedCreateWithoutFloorInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutFloorInput | RoomCreateOrConnectWithoutFloorInput[]
    createMany?: RoomCreateManyFloorInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutFloorInput = {
    create?: XOR<RoomCreateWithoutFloorInput, RoomUncheckedCreateWithoutFloorInput> | RoomCreateWithoutFloorInput[] | RoomUncheckedCreateWithoutFloorInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutFloorInput | RoomCreateOrConnectWithoutFloorInput[]
    createMany?: RoomCreateManyFloorInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BuildingUpdateOneRequiredWithoutFloorsNestedInput = {
    create?: XOR<BuildingCreateWithoutFloorsInput, BuildingUncheckedCreateWithoutFloorsInput>
    connectOrCreate?: BuildingCreateOrConnectWithoutFloorsInput
    upsert?: BuildingUpsertWithoutFloorsInput
    connect?: BuildingWhereUniqueInput
    update?: XOR<XOR<BuildingUpdateToOneWithWhereWithoutFloorsInput, BuildingUpdateWithoutFloorsInput>, BuildingUncheckedUpdateWithoutFloorsInput>
  }

  export type RoomUpdateManyWithoutFloorNestedInput = {
    create?: XOR<RoomCreateWithoutFloorInput, RoomUncheckedCreateWithoutFloorInput> | RoomCreateWithoutFloorInput[] | RoomUncheckedCreateWithoutFloorInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutFloorInput | RoomCreateOrConnectWithoutFloorInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutFloorInput | RoomUpsertWithWhereUniqueWithoutFloorInput[]
    createMany?: RoomCreateManyFloorInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutFloorInput | RoomUpdateWithWhereUniqueWithoutFloorInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutFloorInput | RoomUpdateManyWithWhereWithoutFloorInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutFloorNestedInput = {
    create?: XOR<RoomCreateWithoutFloorInput, RoomUncheckedCreateWithoutFloorInput> | RoomCreateWithoutFloorInput[] | RoomUncheckedCreateWithoutFloorInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutFloorInput | RoomCreateOrConnectWithoutFloorInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutFloorInput | RoomUpsertWithWhereUniqueWithoutFloorInput[]
    createMany?: RoomCreateManyFloorInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutFloorInput | RoomUpdateWithWhereUniqueWithoutFloorInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutFloorInput | RoomUpdateManyWithWhereWithoutFloorInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type FloorCreateNestedOneWithoutRoomsInput = {
    create?: XOR<FloorCreateWithoutRoomsInput, FloorUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: FloorCreateOrConnectWithoutRoomsInput
    connect?: FloorWhereUniqueInput
  }

  export type DeviceRoomCreateNestedManyWithoutRoomInput = {
    create?: XOR<DeviceRoomCreateWithoutRoomInput, DeviceRoomUncheckedCreateWithoutRoomInput> | DeviceRoomCreateWithoutRoomInput[] | DeviceRoomUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: DeviceRoomCreateOrConnectWithoutRoomInput | DeviceRoomCreateOrConnectWithoutRoomInput[]
    createMany?: DeviceRoomCreateManyRoomInputEnvelope
    connect?: DeviceRoomWhereUniqueInput | DeviceRoomWhereUniqueInput[]
  }

  export type DeviceRoomUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<DeviceRoomCreateWithoutRoomInput, DeviceRoomUncheckedCreateWithoutRoomInput> | DeviceRoomCreateWithoutRoomInput[] | DeviceRoomUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: DeviceRoomCreateOrConnectWithoutRoomInput | DeviceRoomCreateOrConnectWithoutRoomInput[]
    createMany?: DeviceRoomCreateManyRoomInputEnvelope
    connect?: DeviceRoomWhereUniqueInput | DeviceRoomWhereUniqueInput[]
  }

  export type FloorUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<FloorCreateWithoutRoomsInput, FloorUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: FloorCreateOrConnectWithoutRoomsInput
    upsert?: FloorUpsertWithoutRoomsInput
    connect?: FloorWhereUniqueInput
    update?: XOR<XOR<FloorUpdateToOneWithWhereWithoutRoomsInput, FloorUpdateWithoutRoomsInput>, FloorUncheckedUpdateWithoutRoomsInput>
  }

  export type DeviceRoomUpdateManyWithoutRoomNestedInput = {
    create?: XOR<DeviceRoomCreateWithoutRoomInput, DeviceRoomUncheckedCreateWithoutRoomInput> | DeviceRoomCreateWithoutRoomInput[] | DeviceRoomUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: DeviceRoomCreateOrConnectWithoutRoomInput | DeviceRoomCreateOrConnectWithoutRoomInput[]
    upsert?: DeviceRoomUpsertWithWhereUniqueWithoutRoomInput | DeviceRoomUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: DeviceRoomCreateManyRoomInputEnvelope
    set?: DeviceRoomWhereUniqueInput | DeviceRoomWhereUniqueInput[]
    disconnect?: DeviceRoomWhereUniqueInput | DeviceRoomWhereUniqueInput[]
    delete?: DeviceRoomWhereUniqueInput | DeviceRoomWhereUniqueInput[]
    connect?: DeviceRoomWhereUniqueInput | DeviceRoomWhereUniqueInput[]
    update?: DeviceRoomUpdateWithWhereUniqueWithoutRoomInput | DeviceRoomUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: DeviceRoomUpdateManyWithWhereWithoutRoomInput | DeviceRoomUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: DeviceRoomScalarWhereInput | DeviceRoomScalarWhereInput[]
  }

  export type DeviceRoomUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<DeviceRoomCreateWithoutRoomInput, DeviceRoomUncheckedCreateWithoutRoomInput> | DeviceRoomCreateWithoutRoomInput[] | DeviceRoomUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: DeviceRoomCreateOrConnectWithoutRoomInput | DeviceRoomCreateOrConnectWithoutRoomInput[]
    upsert?: DeviceRoomUpsertWithWhereUniqueWithoutRoomInput | DeviceRoomUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: DeviceRoomCreateManyRoomInputEnvelope
    set?: DeviceRoomWhereUniqueInput | DeviceRoomWhereUniqueInput[]
    disconnect?: DeviceRoomWhereUniqueInput | DeviceRoomWhereUniqueInput[]
    delete?: DeviceRoomWhereUniqueInput | DeviceRoomWhereUniqueInput[]
    connect?: DeviceRoomWhereUniqueInput | DeviceRoomWhereUniqueInput[]
    update?: DeviceRoomUpdateWithWhereUniqueWithoutRoomInput | DeviceRoomUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: DeviceRoomUpdateManyWithWhereWithoutRoomInput | DeviceRoomUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: DeviceRoomScalarWhereInput | DeviceRoomScalarWhereInput[]
  }

  export type DeviceRoomCreateNestedManyWithoutDeviceInput = {
    create?: XOR<DeviceRoomCreateWithoutDeviceInput, DeviceRoomUncheckedCreateWithoutDeviceInput> | DeviceRoomCreateWithoutDeviceInput[] | DeviceRoomUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DeviceRoomCreateOrConnectWithoutDeviceInput | DeviceRoomCreateOrConnectWithoutDeviceInput[]
    createMany?: DeviceRoomCreateManyDeviceInputEnvelope
    connect?: DeviceRoomWhereUniqueInput | DeviceRoomWhereUniqueInput[]
  }

  export type TriggerDeviceCreateNestedManyWithoutDeviceInput = {
    create?: XOR<TriggerDeviceCreateWithoutDeviceInput, TriggerDeviceUncheckedCreateWithoutDeviceInput> | TriggerDeviceCreateWithoutDeviceInput[] | TriggerDeviceUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: TriggerDeviceCreateOrConnectWithoutDeviceInput | TriggerDeviceCreateOrConnectWithoutDeviceInput[]
    createMany?: TriggerDeviceCreateManyDeviceInputEnvelope
    connect?: TriggerDeviceWhereUniqueInput | TriggerDeviceWhereUniqueInput[]
  }

  export type ActionDeviceCreateNestedManyWithoutDeviceInput = {
    create?: XOR<ActionDeviceCreateWithoutDeviceInput, ActionDeviceUncheckedCreateWithoutDeviceInput> | ActionDeviceCreateWithoutDeviceInput[] | ActionDeviceUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: ActionDeviceCreateOrConnectWithoutDeviceInput | ActionDeviceCreateOrConnectWithoutDeviceInput[]
    createMany?: ActionDeviceCreateManyDeviceInputEnvelope
    connect?: ActionDeviceWhereUniqueInput | ActionDeviceWhereUniqueInput[]
  }

  export type DeviceRoomUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<DeviceRoomCreateWithoutDeviceInput, DeviceRoomUncheckedCreateWithoutDeviceInput> | DeviceRoomCreateWithoutDeviceInput[] | DeviceRoomUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DeviceRoomCreateOrConnectWithoutDeviceInput | DeviceRoomCreateOrConnectWithoutDeviceInput[]
    createMany?: DeviceRoomCreateManyDeviceInputEnvelope
    connect?: DeviceRoomWhereUniqueInput | DeviceRoomWhereUniqueInput[]
  }

  export type TriggerDeviceUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<TriggerDeviceCreateWithoutDeviceInput, TriggerDeviceUncheckedCreateWithoutDeviceInput> | TriggerDeviceCreateWithoutDeviceInput[] | TriggerDeviceUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: TriggerDeviceCreateOrConnectWithoutDeviceInput | TriggerDeviceCreateOrConnectWithoutDeviceInput[]
    createMany?: TriggerDeviceCreateManyDeviceInputEnvelope
    connect?: TriggerDeviceWhereUniqueInput | TriggerDeviceWhereUniqueInput[]
  }

  export type ActionDeviceUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<ActionDeviceCreateWithoutDeviceInput, ActionDeviceUncheckedCreateWithoutDeviceInput> | ActionDeviceCreateWithoutDeviceInput[] | ActionDeviceUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: ActionDeviceCreateOrConnectWithoutDeviceInput | ActionDeviceCreateOrConnectWithoutDeviceInput[]
    createMany?: ActionDeviceCreateManyDeviceInputEnvelope
    connect?: ActionDeviceWhereUniqueInput | ActionDeviceWhereUniqueInput[]
  }

  export type EnumDEVICETYPEFieldUpdateOperationsInput = {
    set?: $Enums.DEVICETYPE
  }

  export type DeviceRoomUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<DeviceRoomCreateWithoutDeviceInput, DeviceRoomUncheckedCreateWithoutDeviceInput> | DeviceRoomCreateWithoutDeviceInput[] | DeviceRoomUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DeviceRoomCreateOrConnectWithoutDeviceInput | DeviceRoomCreateOrConnectWithoutDeviceInput[]
    upsert?: DeviceRoomUpsertWithWhereUniqueWithoutDeviceInput | DeviceRoomUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: DeviceRoomCreateManyDeviceInputEnvelope
    set?: DeviceRoomWhereUniqueInput | DeviceRoomWhereUniqueInput[]
    disconnect?: DeviceRoomWhereUniqueInput | DeviceRoomWhereUniqueInput[]
    delete?: DeviceRoomWhereUniqueInput | DeviceRoomWhereUniqueInput[]
    connect?: DeviceRoomWhereUniqueInput | DeviceRoomWhereUniqueInput[]
    update?: DeviceRoomUpdateWithWhereUniqueWithoutDeviceInput | DeviceRoomUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: DeviceRoomUpdateManyWithWhereWithoutDeviceInput | DeviceRoomUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: DeviceRoomScalarWhereInput | DeviceRoomScalarWhereInput[]
  }

  export type TriggerDeviceUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<TriggerDeviceCreateWithoutDeviceInput, TriggerDeviceUncheckedCreateWithoutDeviceInput> | TriggerDeviceCreateWithoutDeviceInput[] | TriggerDeviceUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: TriggerDeviceCreateOrConnectWithoutDeviceInput | TriggerDeviceCreateOrConnectWithoutDeviceInput[]
    upsert?: TriggerDeviceUpsertWithWhereUniqueWithoutDeviceInput | TriggerDeviceUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: TriggerDeviceCreateManyDeviceInputEnvelope
    set?: TriggerDeviceWhereUniqueInput | TriggerDeviceWhereUniqueInput[]
    disconnect?: TriggerDeviceWhereUniqueInput | TriggerDeviceWhereUniqueInput[]
    delete?: TriggerDeviceWhereUniqueInput | TriggerDeviceWhereUniqueInput[]
    connect?: TriggerDeviceWhereUniqueInput | TriggerDeviceWhereUniqueInput[]
    update?: TriggerDeviceUpdateWithWhereUniqueWithoutDeviceInput | TriggerDeviceUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: TriggerDeviceUpdateManyWithWhereWithoutDeviceInput | TriggerDeviceUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: TriggerDeviceScalarWhereInput | TriggerDeviceScalarWhereInput[]
  }

  export type ActionDeviceUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<ActionDeviceCreateWithoutDeviceInput, ActionDeviceUncheckedCreateWithoutDeviceInput> | ActionDeviceCreateWithoutDeviceInput[] | ActionDeviceUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: ActionDeviceCreateOrConnectWithoutDeviceInput | ActionDeviceCreateOrConnectWithoutDeviceInput[]
    upsert?: ActionDeviceUpsertWithWhereUniqueWithoutDeviceInput | ActionDeviceUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: ActionDeviceCreateManyDeviceInputEnvelope
    set?: ActionDeviceWhereUniqueInput | ActionDeviceWhereUniqueInput[]
    disconnect?: ActionDeviceWhereUniqueInput | ActionDeviceWhereUniqueInput[]
    delete?: ActionDeviceWhereUniqueInput | ActionDeviceWhereUniqueInput[]
    connect?: ActionDeviceWhereUniqueInput | ActionDeviceWhereUniqueInput[]
    update?: ActionDeviceUpdateWithWhereUniqueWithoutDeviceInput | ActionDeviceUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: ActionDeviceUpdateManyWithWhereWithoutDeviceInput | ActionDeviceUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: ActionDeviceScalarWhereInput | ActionDeviceScalarWhereInput[]
  }

  export type DeviceRoomUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<DeviceRoomCreateWithoutDeviceInput, DeviceRoomUncheckedCreateWithoutDeviceInput> | DeviceRoomCreateWithoutDeviceInput[] | DeviceRoomUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DeviceRoomCreateOrConnectWithoutDeviceInput | DeviceRoomCreateOrConnectWithoutDeviceInput[]
    upsert?: DeviceRoomUpsertWithWhereUniqueWithoutDeviceInput | DeviceRoomUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: DeviceRoomCreateManyDeviceInputEnvelope
    set?: DeviceRoomWhereUniqueInput | DeviceRoomWhereUniqueInput[]
    disconnect?: DeviceRoomWhereUniqueInput | DeviceRoomWhereUniqueInput[]
    delete?: DeviceRoomWhereUniqueInput | DeviceRoomWhereUniqueInput[]
    connect?: DeviceRoomWhereUniqueInput | DeviceRoomWhereUniqueInput[]
    update?: DeviceRoomUpdateWithWhereUniqueWithoutDeviceInput | DeviceRoomUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: DeviceRoomUpdateManyWithWhereWithoutDeviceInput | DeviceRoomUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: DeviceRoomScalarWhereInput | DeviceRoomScalarWhereInput[]
  }

  export type TriggerDeviceUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<TriggerDeviceCreateWithoutDeviceInput, TriggerDeviceUncheckedCreateWithoutDeviceInput> | TriggerDeviceCreateWithoutDeviceInput[] | TriggerDeviceUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: TriggerDeviceCreateOrConnectWithoutDeviceInput | TriggerDeviceCreateOrConnectWithoutDeviceInput[]
    upsert?: TriggerDeviceUpsertWithWhereUniqueWithoutDeviceInput | TriggerDeviceUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: TriggerDeviceCreateManyDeviceInputEnvelope
    set?: TriggerDeviceWhereUniqueInput | TriggerDeviceWhereUniqueInput[]
    disconnect?: TriggerDeviceWhereUniqueInput | TriggerDeviceWhereUniqueInput[]
    delete?: TriggerDeviceWhereUniqueInput | TriggerDeviceWhereUniqueInput[]
    connect?: TriggerDeviceWhereUniqueInput | TriggerDeviceWhereUniqueInput[]
    update?: TriggerDeviceUpdateWithWhereUniqueWithoutDeviceInput | TriggerDeviceUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: TriggerDeviceUpdateManyWithWhereWithoutDeviceInput | TriggerDeviceUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: TriggerDeviceScalarWhereInput | TriggerDeviceScalarWhereInput[]
  }

  export type ActionDeviceUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<ActionDeviceCreateWithoutDeviceInput, ActionDeviceUncheckedCreateWithoutDeviceInput> | ActionDeviceCreateWithoutDeviceInput[] | ActionDeviceUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: ActionDeviceCreateOrConnectWithoutDeviceInput | ActionDeviceCreateOrConnectWithoutDeviceInput[]
    upsert?: ActionDeviceUpsertWithWhereUniqueWithoutDeviceInput | ActionDeviceUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: ActionDeviceCreateManyDeviceInputEnvelope
    set?: ActionDeviceWhereUniqueInput | ActionDeviceWhereUniqueInput[]
    disconnect?: ActionDeviceWhereUniqueInput | ActionDeviceWhereUniqueInput[]
    delete?: ActionDeviceWhereUniqueInput | ActionDeviceWhereUniqueInput[]
    connect?: ActionDeviceWhereUniqueInput | ActionDeviceWhereUniqueInput[]
    update?: ActionDeviceUpdateWithWhereUniqueWithoutDeviceInput | ActionDeviceUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: ActionDeviceUpdateManyWithWhereWithoutDeviceInput | ActionDeviceUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: ActionDeviceScalarWhereInput | ActionDeviceScalarWhereInput[]
  }

  export type DeviceCreateNestedOneWithoutRoomsInput = {
    create?: XOR<DeviceCreateWithoutRoomsInput, DeviceUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutRoomsInput
    connect?: DeviceWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutDevicesInput = {
    create?: XOR<RoomCreateWithoutDevicesInput, RoomUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutDevicesInput
    connect?: RoomWhereUniqueInput
  }

  export type DeviceUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<DeviceCreateWithoutRoomsInput, DeviceUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutRoomsInput
    upsert?: DeviceUpsertWithoutRoomsInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutRoomsInput, DeviceUpdateWithoutRoomsInput>, DeviceUncheckedUpdateWithoutRoomsInput>
  }

  export type RoomUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<RoomCreateWithoutDevicesInput, RoomUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutDevicesInput
    upsert?: RoomUpsertWithoutDevicesInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutDevicesInput, RoomUpdateWithoutDevicesInput>, RoomUncheckedUpdateWithoutDevicesInput>
  }

  export type TriggerCreateNestedOneWithoutAutomationInput = {
    create?: XOR<TriggerCreateWithoutAutomationInput, TriggerUncheckedCreateWithoutAutomationInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutAutomationInput
    connect?: TriggerWhereUniqueInput
  }

  export type ActionCreateNestedManyWithoutAutomationInput = {
    create?: XOR<ActionCreateWithoutAutomationInput, ActionUncheckedCreateWithoutAutomationInput> | ActionCreateWithoutAutomationInput[] | ActionUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutAutomationInput | ActionCreateOrConnectWithoutAutomationInput[]
    createMany?: ActionCreateManyAutomationInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type ScheduleCreateNestedOneWithoutAutomationInput = {
    create?: XOR<ScheduleCreateWithoutAutomationInput, ScheduleUncheckedCreateWithoutAutomationInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutAutomationInput
    connect?: ScheduleWhereUniqueInput
  }

  export type ActionUncheckedCreateNestedManyWithoutAutomationInput = {
    create?: XOR<ActionCreateWithoutAutomationInput, ActionUncheckedCreateWithoutAutomationInput> | ActionCreateWithoutAutomationInput[] | ActionUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutAutomationInput | ActionCreateOrConnectWithoutAutomationInput[]
    createMany?: ActionCreateManyAutomationInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TriggerUpdateOneWithoutAutomationNestedInput = {
    create?: XOR<TriggerCreateWithoutAutomationInput, TriggerUncheckedCreateWithoutAutomationInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutAutomationInput
    upsert?: TriggerUpsertWithoutAutomationInput
    disconnect?: TriggerWhereInput | boolean
    delete?: TriggerWhereInput | boolean
    connect?: TriggerWhereUniqueInput
    update?: XOR<XOR<TriggerUpdateToOneWithWhereWithoutAutomationInput, TriggerUpdateWithoutAutomationInput>, TriggerUncheckedUpdateWithoutAutomationInput>
  }

  export type ActionUpdateManyWithoutAutomationNestedInput = {
    create?: XOR<ActionCreateWithoutAutomationInput, ActionUncheckedCreateWithoutAutomationInput> | ActionCreateWithoutAutomationInput[] | ActionUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutAutomationInput | ActionCreateOrConnectWithoutAutomationInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutAutomationInput | ActionUpsertWithWhereUniqueWithoutAutomationInput[]
    createMany?: ActionCreateManyAutomationInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutAutomationInput | ActionUpdateWithWhereUniqueWithoutAutomationInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutAutomationInput | ActionUpdateManyWithWhereWithoutAutomationInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type ScheduleUpdateOneWithoutAutomationNestedInput = {
    create?: XOR<ScheduleCreateWithoutAutomationInput, ScheduleUncheckedCreateWithoutAutomationInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutAutomationInput
    upsert?: ScheduleUpsertWithoutAutomationInput
    disconnect?: ScheduleWhereInput | boolean
    delete?: ScheduleWhereInput | boolean
    connect?: ScheduleWhereUniqueInput
    update?: XOR<XOR<ScheduleUpdateToOneWithWhereWithoutAutomationInput, ScheduleUpdateWithoutAutomationInput>, ScheduleUncheckedUpdateWithoutAutomationInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ActionUncheckedUpdateManyWithoutAutomationNestedInput = {
    create?: XOR<ActionCreateWithoutAutomationInput, ActionUncheckedCreateWithoutAutomationInput> | ActionCreateWithoutAutomationInput[] | ActionUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutAutomationInput | ActionCreateOrConnectWithoutAutomationInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutAutomationInput | ActionUpsertWithWhereUniqueWithoutAutomationInput[]
    createMany?: ActionCreateManyAutomationInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutAutomationInput | ActionUpdateWithWhereUniqueWithoutAutomationInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutAutomationInput | ActionUpdateManyWithWhereWithoutAutomationInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type AutomationCreateNestedOneWithoutTriggerInput = {
    create?: XOR<AutomationCreateWithoutTriggerInput, AutomationUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: AutomationCreateOrConnectWithoutTriggerInput
    connect?: AutomationWhereUniqueInput
  }

  export type TriggerTimeCreateNestedOneWithoutTriggerInput = {
    create?: XOR<TriggerTimeCreateWithoutTriggerInput, TriggerTimeUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: TriggerTimeCreateOrConnectWithoutTriggerInput
    connect?: TriggerTimeWhereUniqueInput
  }

  export type TriggerDeviceCreateNestedOneWithoutTriggerInput = {
    create?: XOR<TriggerDeviceCreateWithoutTriggerInput, TriggerDeviceUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: TriggerDeviceCreateOrConnectWithoutTriggerInput
    connect?: TriggerDeviceWhereUniqueInput
  }

  export type TriggerSceneCreateNestedOneWithoutTriggerInput = {
    create?: XOR<TriggerSceneCreateWithoutTriggerInput, TriggerSceneUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: TriggerSceneCreateOrConnectWithoutTriggerInput
    connect?: TriggerSceneWhereUniqueInput
  }

  export type AutomationUncheckedCreateNestedOneWithoutTriggerInput = {
    create?: XOR<AutomationCreateWithoutTriggerInput, AutomationUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: AutomationCreateOrConnectWithoutTriggerInput
    connect?: AutomationWhereUniqueInput
  }

  export type TriggerTimeUncheckedCreateNestedOneWithoutTriggerInput = {
    create?: XOR<TriggerTimeCreateWithoutTriggerInput, TriggerTimeUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: TriggerTimeCreateOrConnectWithoutTriggerInput
    connect?: TriggerTimeWhereUniqueInput
  }

  export type TriggerDeviceUncheckedCreateNestedOneWithoutTriggerInput = {
    create?: XOR<TriggerDeviceCreateWithoutTriggerInput, TriggerDeviceUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: TriggerDeviceCreateOrConnectWithoutTriggerInput
    connect?: TriggerDeviceWhereUniqueInput
  }

  export type TriggerSceneUncheckedCreateNestedOneWithoutTriggerInput = {
    create?: XOR<TriggerSceneCreateWithoutTriggerInput, TriggerSceneUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: TriggerSceneCreateOrConnectWithoutTriggerInput
    connect?: TriggerSceneWhereUniqueInput
  }

  export type AutomationUpdateOneWithoutTriggerNestedInput = {
    create?: XOR<AutomationCreateWithoutTriggerInput, AutomationUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: AutomationCreateOrConnectWithoutTriggerInput
    upsert?: AutomationUpsertWithoutTriggerInput
    disconnect?: AutomationWhereInput | boolean
    delete?: AutomationWhereInput | boolean
    connect?: AutomationWhereUniqueInput
    update?: XOR<XOR<AutomationUpdateToOneWithWhereWithoutTriggerInput, AutomationUpdateWithoutTriggerInput>, AutomationUncheckedUpdateWithoutTriggerInput>
  }

  export type TriggerTimeUpdateOneWithoutTriggerNestedInput = {
    create?: XOR<TriggerTimeCreateWithoutTriggerInput, TriggerTimeUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: TriggerTimeCreateOrConnectWithoutTriggerInput
    upsert?: TriggerTimeUpsertWithoutTriggerInput
    disconnect?: TriggerTimeWhereInput | boolean
    delete?: TriggerTimeWhereInput | boolean
    connect?: TriggerTimeWhereUniqueInput
    update?: XOR<XOR<TriggerTimeUpdateToOneWithWhereWithoutTriggerInput, TriggerTimeUpdateWithoutTriggerInput>, TriggerTimeUncheckedUpdateWithoutTriggerInput>
  }

  export type TriggerDeviceUpdateOneWithoutTriggerNestedInput = {
    create?: XOR<TriggerDeviceCreateWithoutTriggerInput, TriggerDeviceUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: TriggerDeviceCreateOrConnectWithoutTriggerInput
    upsert?: TriggerDeviceUpsertWithoutTriggerInput
    disconnect?: TriggerDeviceWhereInput | boolean
    delete?: TriggerDeviceWhereInput | boolean
    connect?: TriggerDeviceWhereUniqueInput
    update?: XOR<XOR<TriggerDeviceUpdateToOneWithWhereWithoutTriggerInput, TriggerDeviceUpdateWithoutTriggerInput>, TriggerDeviceUncheckedUpdateWithoutTriggerInput>
  }

  export type TriggerSceneUpdateOneWithoutTriggerNestedInput = {
    create?: XOR<TriggerSceneCreateWithoutTriggerInput, TriggerSceneUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: TriggerSceneCreateOrConnectWithoutTriggerInput
    upsert?: TriggerSceneUpsertWithoutTriggerInput
    disconnect?: TriggerSceneWhereInput | boolean
    delete?: TriggerSceneWhereInput | boolean
    connect?: TriggerSceneWhereUniqueInput
    update?: XOR<XOR<TriggerSceneUpdateToOneWithWhereWithoutTriggerInput, TriggerSceneUpdateWithoutTriggerInput>, TriggerSceneUncheckedUpdateWithoutTriggerInput>
  }

  export type AutomationUncheckedUpdateOneWithoutTriggerNestedInput = {
    create?: XOR<AutomationCreateWithoutTriggerInput, AutomationUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: AutomationCreateOrConnectWithoutTriggerInput
    upsert?: AutomationUpsertWithoutTriggerInput
    disconnect?: AutomationWhereInput | boolean
    delete?: AutomationWhereInput | boolean
    connect?: AutomationWhereUniqueInput
    update?: XOR<XOR<AutomationUpdateToOneWithWhereWithoutTriggerInput, AutomationUpdateWithoutTriggerInput>, AutomationUncheckedUpdateWithoutTriggerInput>
  }

  export type TriggerTimeUncheckedUpdateOneWithoutTriggerNestedInput = {
    create?: XOR<TriggerTimeCreateWithoutTriggerInput, TriggerTimeUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: TriggerTimeCreateOrConnectWithoutTriggerInput
    upsert?: TriggerTimeUpsertWithoutTriggerInput
    disconnect?: TriggerTimeWhereInput | boolean
    delete?: TriggerTimeWhereInput | boolean
    connect?: TriggerTimeWhereUniqueInput
    update?: XOR<XOR<TriggerTimeUpdateToOneWithWhereWithoutTriggerInput, TriggerTimeUpdateWithoutTriggerInput>, TriggerTimeUncheckedUpdateWithoutTriggerInput>
  }

  export type TriggerDeviceUncheckedUpdateOneWithoutTriggerNestedInput = {
    create?: XOR<TriggerDeviceCreateWithoutTriggerInput, TriggerDeviceUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: TriggerDeviceCreateOrConnectWithoutTriggerInput
    upsert?: TriggerDeviceUpsertWithoutTriggerInput
    disconnect?: TriggerDeviceWhereInput | boolean
    delete?: TriggerDeviceWhereInput | boolean
    connect?: TriggerDeviceWhereUniqueInput
    update?: XOR<XOR<TriggerDeviceUpdateToOneWithWhereWithoutTriggerInput, TriggerDeviceUpdateWithoutTriggerInput>, TriggerDeviceUncheckedUpdateWithoutTriggerInput>
  }

  export type TriggerSceneUncheckedUpdateOneWithoutTriggerNestedInput = {
    create?: XOR<TriggerSceneCreateWithoutTriggerInput, TriggerSceneUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: TriggerSceneCreateOrConnectWithoutTriggerInput
    upsert?: TriggerSceneUpsertWithoutTriggerInput
    disconnect?: TriggerSceneWhereInput | boolean
    delete?: TriggerSceneWhereInput | boolean
    connect?: TriggerSceneWhereUniqueInput
    update?: XOR<XOR<TriggerSceneUpdateToOneWithWhereWithoutTriggerInput, TriggerSceneUpdateWithoutTriggerInput>, TriggerSceneUncheckedUpdateWithoutTriggerInput>
  }

  export type TriggerCreateNestedOneWithoutTimeTriggerInput = {
    create?: XOR<TriggerCreateWithoutTimeTriggerInput, TriggerUncheckedCreateWithoutTimeTriggerInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutTimeTriggerInput
    connect?: TriggerWhereUniqueInput
  }

  export type TriggerUpdateOneRequiredWithoutTimeTriggerNestedInput = {
    create?: XOR<TriggerCreateWithoutTimeTriggerInput, TriggerUncheckedCreateWithoutTimeTriggerInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutTimeTriggerInput
    upsert?: TriggerUpsertWithoutTimeTriggerInput
    connect?: TriggerWhereUniqueInput
    update?: XOR<XOR<TriggerUpdateToOneWithWhereWithoutTimeTriggerInput, TriggerUpdateWithoutTimeTriggerInput>, TriggerUncheckedUpdateWithoutTimeTriggerInput>
  }

  export type DeviceCreateNestedOneWithoutDeviceTriggersInput = {
    create?: XOR<DeviceCreateWithoutDeviceTriggersInput, DeviceUncheckedCreateWithoutDeviceTriggersInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutDeviceTriggersInput
    connect?: DeviceWhereUniqueInput
  }

  export type TriggerCreateNestedOneWithoutDeviceTriggerInput = {
    create?: XOR<TriggerCreateWithoutDeviceTriggerInput, TriggerUncheckedCreateWithoutDeviceTriggerInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutDeviceTriggerInput
    connect?: TriggerWhereUniqueInput
  }

  export type DeviceUpdateOneRequiredWithoutDeviceTriggersNestedInput = {
    create?: XOR<DeviceCreateWithoutDeviceTriggersInput, DeviceUncheckedCreateWithoutDeviceTriggersInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutDeviceTriggersInput
    upsert?: DeviceUpsertWithoutDeviceTriggersInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutDeviceTriggersInput, DeviceUpdateWithoutDeviceTriggersInput>, DeviceUncheckedUpdateWithoutDeviceTriggersInput>
  }

  export type TriggerUpdateOneRequiredWithoutDeviceTriggerNestedInput = {
    create?: XOR<TriggerCreateWithoutDeviceTriggerInput, TriggerUncheckedCreateWithoutDeviceTriggerInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutDeviceTriggerInput
    upsert?: TriggerUpsertWithoutDeviceTriggerInput
    connect?: TriggerWhereUniqueInput
    update?: XOR<XOR<TriggerUpdateToOneWithWhereWithoutDeviceTriggerInput, TriggerUpdateWithoutDeviceTriggerInput>, TriggerUncheckedUpdateWithoutDeviceTriggerInput>
  }

  export type TriggerCreateNestedOneWithoutSceneTriggerInput = {
    create?: XOR<TriggerCreateWithoutSceneTriggerInput, TriggerUncheckedCreateWithoutSceneTriggerInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutSceneTriggerInput
    connect?: TriggerWhereUniqueInput
  }

  export type TriggerUpdateOneRequiredWithoutSceneTriggerNestedInput = {
    create?: XOR<TriggerCreateWithoutSceneTriggerInput, TriggerUncheckedCreateWithoutSceneTriggerInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutSceneTriggerInput
    upsert?: TriggerUpsertWithoutSceneTriggerInput
    connect?: TriggerWhereUniqueInput
    update?: XOR<XOR<TriggerUpdateToOneWithWhereWithoutSceneTriggerInput, TriggerUpdateWithoutSceneTriggerInput>, TriggerUncheckedUpdateWithoutSceneTriggerInput>
  }

  export type AutomationCreateNestedOneWithoutActionsInput = {
    create?: XOR<AutomationCreateWithoutActionsInput, AutomationUncheckedCreateWithoutActionsInput>
    connectOrCreate?: AutomationCreateOrConnectWithoutActionsInput
    connect?: AutomationWhereUniqueInput
  }

  export type ActionDeviceCreateNestedOneWithoutActionInput = {
    create?: XOR<ActionDeviceCreateWithoutActionInput, ActionDeviceUncheckedCreateWithoutActionInput>
    connectOrCreate?: ActionDeviceCreateOrConnectWithoutActionInput
    connect?: ActionDeviceWhereUniqueInput
  }

  export type ActionSceneCreateNestedOneWithoutActionInput = {
    create?: XOR<ActionSceneCreateWithoutActionInput, ActionSceneUncheckedCreateWithoutActionInput>
    connectOrCreate?: ActionSceneCreateOrConnectWithoutActionInput
    connect?: ActionSceneWhereUniqueInput
  }

  export type ActionDeviceUncheckedCreateNestedOneWithoutActionInput = {
    create?: XOR<ActionDeviceCreateWithoutActionInput, ActionDeviceUncheckedCreateWithoutActionInput>
    connectOrCreate?: ActionDeviceCreateOrConnectWithoutActionInput
    connect?: ActionDeviceWhereUniqueInput
  }

  export type ActionSceneUncheckedCreateNestedOneWithoutActionInput = {
    create?: XOR<ActionSceneCreateWithoutActionInput, ActionSceneUncheckedCreateWithoutActionInput>
    connectOrCreate?: ActionSceneCreateOrConnectWithoutActionInput
    connect?: ActionSceneWhereUniqueInput
  }

  export type AutomationUpdateOneRequiredWithoutActionsNestedInput = {
    create?: XOR<AutomationCreateWithoutActionsInput, AutomationUncheckedCreateWithoutActionsInput>
    connectOrCreate?: AutomationCreateOrConnectWithoutActionsInput
    upsert?: AutomationUpsertWithoutActionsInput
    connect?: AutomationWhereUniqueInput
    update?: XOR<XOR<AutomationUpdateToOneWithWhereWithoutActionsInput, AutomationUpdateWithoutActionsInput>, AutomationUncheckedUpdateWithoutActionsInput>
  }

  export type ActionDeviceUpdateOneWithoutActionNestedInput = {
    create?: XOR<ActionDeviceCreateWithoutActionInput, ActionDeviceUncheckedCreateWithoutActionInput>
    connectOrCreate?: ActionDeviceCreateOrConnectWithoutActionInput
    upsert?: ActionDeviceUpsertWithoutActionInput
    disconnect?: ActionDeviceWhereInput | boolean
    delete?: ActionDeviceWhereInput | boolean
    connect?: ActionDeviceWhereUniqueInput
    update?: XOR<XOR<ActionDeviceUpdateToOneWithWhereWithoutActionInput, ActionDeviceUpdateWithoutActionInput>, ActionDeviceUncheckedUpdateWithoutActionInput>
  }

  export type ActionSceneUpdateOneWithoutActionNestedInput = {
    create?: XOR<ActionSceneCreateWithoutActionInput, ActionSceneUncheckedCreateWithoutActionInput>
    connectOrCreate?: ActionSceneCreateOrConnectWithoutActionInput
    upsert?: ActionSceneUpsertWithoutActionInput
    disconnect?: ActionSceneWhereInput | boolean
    delete?: ActionSceneWhereInput | boolean
    connect?: ActionSceneWhereUniqueInput
    update?: XOR<XOR<ActionSceneUpdateToOneWithWhereWithoutActionInput, ActionSceneUpdateWithoutActionInput>, ActionSceneUncheckedUpdateWithoutActionInput>
  }

  export type ActionDeviceUncheckedUpdateOneWithoutActionNestedInput = {
    create?: XOR<ActionDeviceCreateWithoutActionInput, ActionDeviceUncheckedCreateWithoutActionInput>
    connectOrCreate?: ActionDeviceCreateOrConnectWithoutActionInput
    upsert?: ActionDeviceUpsertWithoutActionInput
    disconnect?: ActionDeviceWhereInput | boolean
    delete?: ActionDeviceWhereInput | boolean
    connect?: ActionDeviceWhereUniqueInput
    update?: XOR<XOR<ActionDeviceUpdateToOneWithWhereWithoutActionInput, ActionDeviceUpdateWithoutActionInput>, ActionDeviceUncheckedUpdateWithoutActionInput>
  }

  export type ActionSceneUncheckedUpdateOneWithoutActionNestedInput = {
    create?: XOR<ActionSceneCreateWithoutActionInput, ActionSceneUncheckedCreateWithoutActionInput>
    connectOrCreate?: ActionSceneCreateOrConnectWithoutActionInput
    upsert?: ActionSceneUpsertWithoutActionInput
    disconnect?: ActionSceneWhereInput | boolean
    delete?: ActionSceneWhereInput | boolean
    connect?: ActionSceneWhereUniqueInput
    update?: XOR<XOR<ActionSceneUpdateToOneWithWhereWithoutActionInput, ActionSceneUpdateWithoutActionInput>, ActionSceneUncheckedUpdateWithoutActionInput>
  }

  export type DeviceCreateNestedOneWithoutDeviceActionsInput = {
    create?: XOR<DeviceCreateWithoutDeviceActionsInput, DeviceUncheckedCreateWithoutDeviceActionsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutDeviceActionsInput
    connect?: DeviceWhereUniqueInput
  }

  export type ActionCreateNestedOneWithoutDeviceActionInput = {
    create?: XOR<ActionCreateWithoutDeviceActionInput, ActionUncheckedCreateWithoutDeviceActionInput>
    connectOrCreate?: ActionCreateOrConnectWithoutDeviceActionInput
    connect?: ActionWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DeviceUpdateOneRequiredWithoutDeviceActionsNestedInput = {
    create?: XOR<DeviceCreateWithoutDeviceActionsInput, DeviceUncheckedCreateWithoutDeviceActionsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutDeviceActionsInput
    upsert?: DeviceUpsertWithoutDeviceActionsInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutDeviceActionsInput, DeviceUpdateWithoutDeviceActionsInput>, DeviceUncheckedUpdateWithoutDeviceActionsInput>
  }

  export type ActionUpdateOneRequiredWithoutDeviceActionNestedInput = {
    create?: XOR<ActionCreateWithoutDeviceActionInput, ActionUncheckedCreateWithoutDeviceActionInput>
    connectOrCreate?: ActionCreateOrConnectWithoutDeviceActionInput
    upsert?: ActionUpsertWithoutDeviceActionInput
    connect?: ActionWhereUniqueInput
    update?: XOR<XOR<ActionUpdateToOneWithWhereWithoutDeviceActionInput, ActionUpdateWithoutDeviceActionInput>, ActionUncheckedUpdateWithoutDeviceActionInput>
  }

  export type ActionCreateNestedOneWithoutSceneActionInput = {
    create?: XOR<ActionCreateWithoutSceneActionInput, ActionUncheckedCreateWithoutSceneActionInput>
    connectOrCreate?: ActionCreateOrConnectWithoutSceneActionInput
    connect?: ActionWhereUniqueInput
  }

  export type ActionUpdateOneRequiredWithoutSceneActionNestedInput = {
    create?: XOR<ActionCreateWithoutSceneActionInput, ActionUncheckedCreateWithoutSceneActionInput>
    connectOrCreate?: ActionCreateOrConnectWithoutSceneActionInput
    upsert?: ActionUpsertWithoutSceneActionInput
    connect?: ActionWhereUniqueInput
    update?: XOR<XOR<ActionUpdateToOneWithWhereWithoutSceneActionInput, ActionUpdateWithoutSceneActionInput>, ActionUncheckedUpdateWithoutSceneActionInput>
  }

  export type AutomationCreateNestedOneWithoutScheduleInput = {
    create?: XOR<AutomationCreateWithoutScheduleInput, AutomationUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: AutomationCreateOrConnectWithoutScheduleInput
    connect?: AutomationWhereUniqueInput
  }

  export type ScheduleDayCreateNestedManyWithoutScheduleInput = {
    create?: XOR<ScheduleDayCreateWithoutScheduleInput, ScheduleDayUncheckedCreateWithoutScheduleInput> | ScheduleDayCreateWithoutScheduleInput[] | ScheduleDayUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: ScheduleDayCreateOrConnectWithoutScheduleInput | ScheduleDayCreateOrConnectWithoutScheduleInput[]
    createMany?: ScheduleDayCreateManyScheduleInputEnvelope
    connect?: ScheduleDayWhereUniqueInput | ScheduleDayWhereUniqueInput[]
  }

  export type AutomationUncheckedCreateNestedOneWithoutScheduleInput = {
    create?: XOR<AutomationCreateWithoutScheduleInput, AutomationUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: AutomationCreateOrConnectWithoutScheduleInput
    connect?: AutomationWhereUniqueInput
  }

  export type ScheduleDayUncheckedCreateNestedManyWithoutScheduleInput = {
    create?: XOR<ScheduleDayCreateWithoutScheduleInput, ScheduleDayUncheckedCreateWithoutScheduleInput> | ScheduleDayCreateWithoutScheduleInput[] | ScheduleDayUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: ScheduleDayCreateOrConnectWithoutScheduleInput | ScheduleDayCreateOrConnectWithoutScheduleInput[]
    createMany?: ScheduleDayCreateManyScheduleInputEnvelope
    connect?: ScheduleDayWhereUniqueInput | ScheduleDayWhereUniqueInput[]
  }

  export type AutomationUpdateOneWithoutScheduleNestedInput = {
    create?: XOR<AutomationCreateWithoutScheduleInput, AutomationUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: AutomationCreateOrConnectWithoutScheduleInput
    upsert?: AutomationUpsertWithoutScheduleInput
    disconnect?: AutomationWhereInput | boolean
    delete?: AutomationWhereInput | boolean
    connect?: AutomationWhereUniqueInput
    update?: XOR<XOR<AutomationUpdateToOneWithWhereWithoutScheduleInput, AutomationUpdateWithoutScheduleInput>, AutomationUncheckedUpdateWithoutScheduleInput>
  }

  export type ScheduleDayUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<ScheduleDayCreateWithoutScheduleInput, ScheduleDayUncheckedCreateWithoutScheduleInput> | ScheduleDayCreateWithoutScheduleInput[] | ScheduleDayUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: ScheduleDayCreateOrConnectWithoutScheduleInput | ScheduleDayCreateOrConnectWithoutScheduleInput[]
    upsert?: ScheduleDayUpsertWithWhereUniqueWithoutScheduleInput | ScheduleDayUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: ScheduleDayCreateManyScheduleInputEnvelope
    set?: ScheduleDayWhereUniqueInput | ScheduleDayWhereUniqueInput[]
    disconnect?: ScheduleDayWhereUniqueInput | ScheduleDayWhereUniqueInput[]
    delete?: ScheduleDayWhereUniqueInput | ScheduleDayWhereUniqueInput[]
    connect?: ScheduleDayWhereUniqueInput | ScheduleDayWhereUniqueInput[]
    update?: ScheduleDayUpdateWithWhereUniqueWithoutScheduleInput | ScheduleDayUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: ScheduleDayUpdateManyWithWhereWithoutScheduleInput | ScheduleDayUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: ScheduleDayScalarWhereInput | ScheduleDayScalarWhereInput[]
  }

  export type AutomationUncheckedUpdateOneWithoutScheduleNestedInput = {
    create?: XOR<AutomationCreateWithoutScheduleInput, AutomationUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: AutomationCreateOrConnectWithoutScheduleInput
    upsert?: AutomationUpsertWithoutScheduleInput
    disconnect?: AutomationWhereInput | boolean
    delete?: AutomationWhereInput | boolean
    connect?: AutomationWhereUniqueInput
    update?: XOR<XOR<AutomationUpdateToOneWithWhereWithoutScheduleInput, AutomationUpdateWithoutScheduleInput>, AutomationUncheckedUpdateWithoutScheduleInput>
  }

  export type ScheduleDayUncheckedUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<ScheduleDayCreateWithoutScheduleInput, ScheduleDayUncheckedCreateWithoutScheduleInput> | ScheduleDayCreateWithoutScheduleInput[] | ScheduleDayUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: ScheduleDayCreateOrConnectWithoutScheduleInput | ScheduleDayCreateOrConnectWithoutScheduleInput[]
    upsert?: ScheduleDayUpsertWithWhereUniqueWithoutScheduleInput | ScheduleDayUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: ScheduleDayCreateManyScheduleInputEnvelope
    set?: ScheduleDayWhereUniqueInput | ScheduleDayWhereUniqueInput[]
    disconnect?: ScheduleDayWhereUniqueInput | ScheduleDayWhereUniqueInput[]
    delete?: ScheduleDayWhereUniqueInput | ScheduleDayWhereUniqueInput[]
    connect?: ScheduleDayWhereUniqueInput | ScheduleDayWhereUniqueInput[]
    update?: ScheduleDayUpdateWithWhereUniqueWithoutScheduleInput | ScheduleDayUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: ScheduleDayUpdateManyWithWhereWithoutScheduleInput | ScheduleDayUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: ScheduleDayScalarWhereInput | ScheduleDayScalarWhereInput[]
  }

  export type ScheduleCreateNestedOneWithoutScheduleDaysInput = {
    create?: XOR<ScheduleCreateWithoutScheduleDaysInput, ScheduleUncheckedCreateWithoutScheduleDaysInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutScheduleDaysInput
    connect?: ScheduleWhereUniqueInput
  }

  export type EnumscheduleDaysFieldUpdateOperationsInput = {
    set?: $Enums.scheduleDays
  }

  export type ScheduleUpdateOneRequiredWithoutScheduleDaysNestedInput = {
    create?: XOR<ScheduleCreateWithoutScheduleDaysInput, ScheduleUncheckedCreateWithoutScheduleDaysInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutScheduleDaysInput
    upsert?: ScheduleUpsertWithoutScheduleDaysInput
    connect?: ScheduleWhereUniqueInput
    update?: XOR<XOR<ScheduleUpdateToOneWithWhereWithoutScheduleDaysInput, ScheduleUpdateWithoutScheduleDaysInput>, ScheduleUncheckedUpdateWithoutScheduleDaysInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumDEVICETYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.DEVICETYPE | EnumDEVICETYPEFieldRefInput<$PrismaModel>
    in?: $Enums.DEVICETYPE[] | ListEnumDEVICETYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.DEVICETYPE[] | ListEnumDEVICETYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumDEVICETYPEFilter<$PrismaModel> | $Enums.DEVICETYPE
  }

  export type NestedEnumDEVICETYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DEVICETYPE | EnumDEVICETYPEFieldRefInput<$PrismaModel>
    in?: $Enums.DEVICETYPE[] | ListEnumDEVICETYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.DEVICETYPE[] | ListEnumDEVICETYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumDEVICETYPEWithAggregatesFilter<$PrismaModel> | $Enums.DEVICETYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDEVICETYPEFilter<$PrismaModel>
    _max?: NestedEnumDEVICETYPEFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumscheduleDaysFilter<$PrismaModel = never> = {
    equals?: $Enums.scheduleDays | EnumscheduleDaysFieldRefInput<$PrismaModel>
    in?: $Enums.scheduleDays[] | ListEnumscheduleDaysFieldRefInput<$PrismaModel>
    notIn?: $Enums.scheduleDays[] | ListEnumscheduleDaysFieldRefInput<$PrismaModel>
    not?: NestedEnumscheduleDaysFilter<$PrismaModel> | $Enums.scheduleDays
  }

  export type NestedEnumscheduleDaysWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.scheduleDays | EnumscheduleDaysFieldRefInput<$PrismaModel>
    in?: $Enums.scheduleDays[] | ListEnumscheduleDaysFieldRefInput<$PrismaModel>
    notIn?: $Enums.scheduleDays[] | ListEnumscheduleDaysFieldRefInput<$PrismaModel>
    not?: NestedEnumscheduleDaysWithAggregatesFilter<$PrismaModel> | $Enums.scheduleDays
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumscheduleDaysFilter<$PrismaModel>
    _max?: NestedEnumscheduleDaysFilter<$PrismaModel>
  }

  export type FloorCreateWithoutBuildingInput = {
    id?: string
    number: number
    rooms?: RoomCreateNestedManyWithoutFloorInput
  }

  export type FloorUncheckedCreateWithoutBuildingInput = {
    id?: string
    number: number
    rooms?: RoomUncheckedCreateNestedManyWithoutFloorInput
  }

  export type FloorCreateOrConnectWithoutBuildingInput = {
    where: FloorWhereUniqueInput
    create: XOR<FloorCreateWithoutBuildingInput, FloorUncheckedCreateWithoutBuildingInput>
  }

  export type FloorCreateManyBuildingInputEnvelope = {
    data: FloorCreateManyBuildingInput | FloorCreateManyBuildingInput[]
    skipDuplicates?: boolean
  }

  export type FloorUpsertWithWhereUniqueWithoutBuildingInput = {
    where: FloorWhereUniqueInput
    update: XOR<FloorUpdateWithoutBuildingInput, FloorUncheckedUpdateWithoutBuildingInput>
    create: XOR<FloorCreateWithoutBuildingInput, FloorUncheckedCreateWithoutBuildingInput>
  }

  export type FloorUpdateWithWhereUniqueWithoutBuildingInput = {
    where: FloorWhereUniqueInput
    data: XOR<FloorUpdateWithoutBuildingInput, FloorUncheckedUpdateWithoutBuildingInput>
  }

  export type FloorUpdateManyWithWhereWithoutBuildingInput = {
    where: FloorScalarWhereInput
    data: XOR<FloorUpdateManyMutationInput, FloorUncheckedUpdateManyWithoutBuildingInput>
  }

  export type FloorScalarWhereInput = {
    AND?: FloorScalarWhereInput | FloorScalarWhereInput[]
    OR?: FloorScalarWhereInput[]
    NOT?: FloorScalarWhereInput | FloorScalarWhereInput[]
    id?: StringFilter<"Floor"> | string
    number?: IntFilter<"Floor"> | number
    buildingId?: StringFilter<"Floor"> | string
  }

  export type BuildingCreateWithoutFloorsInput = {
    id?: string
    name: string
  }

  export type BuildingUncheckedCreateWithoutFloorsInput = {
    id?: string
    name: string
  }

  export type BuildingCreateOrConnectWithoutFloorsInput = {
    where: BuildingWhereUniqueInput
    create: XOR<BuildingCreateWithoutFloorsInput, BuildingUncheckedCreateWithoutFloorsInput>
  }

  export type RoomCreateWithoutFloorInput = {
    id?: string
    name: string
    devices?: DeviceRoomCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutFloorInput = {
    id?: string
    name: string
    devices?: DeviceRoomUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutFloorInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutFloorInput, RoomUncheckedCreateWithoutFloorInput>
  }

  export type RoomCreateManyFloorInputEnvelope = {
    data: RoomCreateManyFloorInput | RoomCreateManyFloorInput[]
    skipDuplicates?: boolean
  }

  export type BuildingUpsertWithoutFloorsInput = {
    update: XOR<BuildingUpdateWithoutFloorsInput, BuildingUncheckedUpdateWithoutFloorsInput>
    create: XOR<BuildingCreateWithoutFloorsInput, BuildingUncheckedCreateWithoutFloorsInput>
    where?: BuildingWhereInput
  }

  export type BuildingUpdateToOneWithWhereWithoutFloorsInput = {
    where?: BuildingWhereInput
    data: XOR<BuildingUpdateWithoutFloorsInput, BuildingUncheckedUpdateWithoutFloorsInput>
  }

  export type BuildingUpdateWithoutFloorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BuildingUncheckedUpdateWithoutFloorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoomUpsertWithWhereUniqueWithoutFloorInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutFloorInput, RoomUncheckedUpdateWithoutFloorInput>
    create: XOR<RoomCreateWithoutFloorInput, RoomUncheckedCreateWithoutFloorInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutFloorInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutFloorInput, RoomUncheckedUpdateWithoutFloorInput>
  }

  export type RoomUpdateManyWithWhereWithoutFloorInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutFloorInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    id?: StringFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    floorId?: StringFilter<"Room"> | string
  }

  export type FloorCreateWithoutRoomsInput = {
    id?: string
    number: number
    building: BuildingCreateNestedOneWithoutFloorsInput
  }

  export type FloorUncheckedCreateWithoutRoomsInput = {
    id?: string
    number: number
    buildingId: string
  }

  export type FloorCreateOrConnectWithoutRoomsInput = {
    where: FloorWhereUniqueInput
    create: XOR<FloorCreateWithoutRoomsInput, FloorUncheckedCreateWithoutRoomsInput>
  }

  export type DeviceRoomCreateWithoutRoomInput = {
    device: DeviceCreateNestedOneWithoutRoomsInput
  }

  export type DeviceRoomUncheckedCreateWithoutRoomInput = {
    deviceId: string
  }

  export type DeviceRoomCreateOrConnectWithoutRoomInput = {
    where: DeviceRoomWhereUniqueInput
    create: XOR<DeviceRoomCreateWithoutRoomInput, DeviceRoomUncheckedCreateWithoutRoomInput>
  }

  export type DeviceRoomCreateManyRoomInputEnvelope = {
    data: DeviceRoomCreateManyRoomInput | DeviceRoomCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type FloorUpsertWithoutRoomsInput = {
    update: XOR<FloorUpdateWithoutRoomsInput, FloorUncheckedUpdateWithoutRoomsInput>
    create: XOR<FloorCreateWithoutRoomsInput, FloorUncheckedCreateWithoutRoomsInput>
    where?: FloorWhereInput
  }

  export type FloorUpdateToOneWithWhereWithoutRoomsInput = {
    where?: FloorWhereInput
    data: XOR<FloorUpdateWithoutRoomsInput, FloorUncheckedUpdateWithoutRoomsInput>
  }

  export type FloorUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    building?: BuildingUpdateOneRequiredWithoutFloorsNestedInput
  }

  export type FloorUncheckedUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    buildingId?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceRoomUpsertWithWhereUniqueWithoutRoomInput = {
    where: DeviceRoomWhereUniqueInput
    update: XOR<DeviceRoomUpdateWithoutRoomInput, DeviceRoomUncheckedUpdateWithoutRoomInput>
    create: XOR<DeviceRoomCreateWithoutRoomInput, DeviceRoomUncheckedCreateWithoutRoomInput>
  }

  export type DeviceRoomUpdateWithWhereUniqueWithoutRoomInput = {
    where: DeviceRoomWhereUniqueInput
    data: XOR<DeviceRoomUpdateWithoutRoomInput, DeviceRoomUncheckedUpdateWithoutRoomInput>
  }

  export type DeviceRoomUpdateManyWithWhereWithoutRoomInput = {
    where: DeviceRoomScalarWhereInput
    data: XOR<DeviceRoomUpdateManyMutationInput, DeviceRoomUncheckedUpdateManyWithoutRoomInput>
  }

  export type DeviceRoomScalarWhereInput = {
    AND?: DeviceRoomScalarWhereInput | DeviceRoomScalarWhereInput[]
    OR?: DeviceRoomScalarWhereInput[]
    NOT?: DeviceRoomScalarWhereInput | DeviceRoomScalarWhereInput[]
    deviceId?: StringFilter<"DeviceRoom"> | string
    roomId?: StringFilter<"DeviceRoom"> | string
  }

  export type DeviceRoomCreateWithoutDeviceInput = {
    room: RoomCreateNestedOneWithoutDevicesInput
  }

  export type DeviceRoomUncheckedCreateWithoutDeviceInput = {
    roomId: string
  }

  export type DeviceRoomCreateOrConnectWithoutDeviceInput = {
    where: DeviceRoomWhereUniqueInput
    create: XOR<DeviceRoomCreateWithoutDeviceInput, DeviceRoomUncheckedCreateWithoutDeviceInput>
  }

  export type DeviceRoomCreateManyDeviceInputEnvelope = {
    data: DeviceRoomCreateManyDeviceInput | DeviceRoomCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type TriggerDeviceCreateWithoutDeviceInput = {
    id?: string
    deviceState: boolean
    trigger: TriggerCreateNestedOneWithoutDeviceTriggerInput
  }

  export type TriggerDeviceUncheckedCreateWithoutDeviceInput = {
    id?: string
    deviceState: boolean
    triggerId: string
  }

  export type TriggerDeviceCreateOrConnectWithoutDeviceInput = {
    where: TriggerDeviceWhereUniqueInput
    create: XOR<TriggerDeviceCreateWithoutDeviceInput, TriggerDeviceUncheckedCreateWithoutDeviceInput>
  }

  export type TriggerDeviceCreateManyDeviceInputEnvelope = {
    data: TriggerDeviceCreateManyDeviceInput | TriggerDeviceCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type ActionDeviceCreateWithoutDeviceInput = {
    id?: string
    state?: boolean | null
    brightness?: number | null
    temperature?: number | null
    level?: number | null
    action: ActionCreateNestedOneWithoutDeviceActionInput
  }

  export type ActionDeviceUncheckedCreateWithoutDeviceInput = {
    id?: string
    state?: boolean | null
    brightness?: number | null
    temperature?: number | null
    level?: number | null
    actionId: string
  }

  export type ActionDeviceCreateOrConnectWithoutDeviceInput = {
    where: ActionDeviceWhereUniqueInput
    create: XOR<ActionDeviceCreateWithoutDeviceInput, ActionDeviceUncheckedCreateWithoutDeviceInput>
  }

  export type ActionDeviceCreateManyDeviceInputEnvelope = {
    data: ActionDeviceCreateManyDeviceInput | ActionDeviceCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type DeviceRoomUpsertWithWhereUniqueWithoutDeviceInput = {
    where: DeviceRoomWhereUniqueInput
    update: XOR<DeviceRoomUpdateWithoutDeviceInput, DeviceRoomUncheckedUpdateWithoutDeviceInput>
    create: XOR<DeviceRoomCreateWithoutDeviceInput, DeviceRoomUncheckedCreateWithoutDeviceInput>
  }

  export type DeviceRoomUpdateWithWhereUniqueWithoutDeviceInput = {
    where: DeviceRoomWhereUniqueInput
    data: XOR<DeviceRoomUpdateWithoutDeviceInput, DeviceRoomUncheckedUpdateWithoutDeviceInput>
  }

  export type DeviceRoomUpdateManyWithWhereWithoutDeviceInput = {
    where: DeviceRoomScalarWhereInput
    data: XOR<DeviceRoomUpdateManyMutationInput, DeviceRoomUncheckedUpdateManyWithoutDeviceInput>
  }

  export type TriggerDeviceUpsertWithWhereUniqueWithoutDeviceInput = {
    where: TriggerDeviceWhereUniqueInput
    update: XOR<TriggerDeviceUpdateWithoutDeviceInput, TriggerDeviceUncheckedUpdateWithoutDeviceInput>
    create: XOR<TriggerDeviceCreateWithoutDeviceInput, TriggerDeviceUncheckedCreateWithoutDeviceInput>
  }

  export type TriggerDeviceUpdateWithWhereUniqueWithoutDeviceInput = {
    where: TriggerDeviceWhereUniqueInput
    data: XOR<TriggerDeviceUpdateWithoutDeviceInput, TriggerDeviceUncheckedUpdateWithoutDeviceInput>
  }

  export type TriggerDeviceUpdateManyWithWhereWithoutDeviceInput = {
    where: TriggerDeviceScalarWhereInput
    data: XOR<TriggerDeviceUpdateManyMutationInput, TriggerDeviceUncheckedUpdateManyWithoutDeviceInput>
  }

  export type TriggerDeviceScalarWhereInput = {
    AND?: TriggerDeviceScalarWhereInput | TriggerDeviceScalarWhereInput[]
    OR?: TriggerDeviceScalarWhereInput[]
    NOT?: TriggerDeviceScalarWhereInput | TriggerDeviceScalarWhereInput[]
    id?: StringFilter<"TriggerDevice"> | string
    deviceId?: StringFilter<"TriggerDevice"> | string
    deviceState?: BoolFilter<"TriggerDevice"> | boolean
    triggerId?: StringFilter<"TriggerDevice"> | string
  }

  export type ActionDeviceUpsertWithWhereUniqueWithoutDeviceInput = {
    where: ActionDeviceWhereUniqueInput
    update: XOR<ActionDeviceUpdateWithoutDeviceInput, ActionDeviceUncheckedUpdateWithoutDeviceInput>
    create: XOR<ActionDeviceCreateWithoutDeviceInput, ActionDeviceUncheckedCreateWithoutDeviceInput>
  }

  export type ActionDeviceUpdateWithWhereUniqueWithoutDeviceInput = {
    where: ActionDeviceWhereUniqueInput
    data: XOR<ActionDeviceUpdateWithoutDeviceInput, ActionDeviceUncheckedUpdateWithoutDeviceInput>
  }

  export type ActionDeviceUpdateManyWithWhereWithoutDeviceInput = {
    where: ActionDeviceScalarWhereInput
    data: XOR<ActionDeviceUpdateManyMutationInput, ActionDeviceUncheckedUpdateManyWithoutDeviceInput>
  }

  export type ActionDeviceScalarWhereInput = {
    AND?: ActionDeviceScalarWhereInput | ActionDeviceScalarWhereInput[]
    OR?: ActionDeviceScalarWhereInput[]
    NOT?: ActionDeviceScalarWhereInput | ActionDeviceScalarWhereInput[]
    id?: StringFilter<"ActionDevice"> | string
    targetId?: StringFilter<"ActionDevice"> | string
    state?: BoolNullableFilter<"ActionDevice"> | boolean | null
    brightness?: IntNullableFilter<"ActionDevice"> | number | null
    temperature?: IntNullableFilter<"ActionDevice"> | number | null
    level?: IntNullableFilter<"ActionDevice"> | number | null
    actionId?: StringFilter<"ActionDevice"> | string
  }

  export type DeviceCreateWithoutRoomsInput = {
    id?: string
    name: string
    status: string
    type?: $Enums.DEVICETYPE
    deviceTriggers?: TriggerDeviceCreateNestedManyWithoutDeviceInput
    deviceActions?: ActionDeviceCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutRoomsInput = {
    id?: string
    name: string
    status: string
    type?: $Enums.DEVICETYPE
    deviceTriggers?: TriggerDeviceUncheckedCreateNestedManyWithoutDeviceInput
    deviceActions?: ActionDeviceUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutRoomsInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutRoomsInput, DeviceUncheckedCreateWithoutRoomsInput>
  }

  export type RoomCreateWithoutDevicesInput = {
    id?: string
    name: string
    floor: FloorCreateNestedOneWithoutRoomsInput
  }

  export type RoomUncheckedCreateWithoutDevicesInput = {
    id?: string
    name: string
    floorId: string
  }

  export type RoomCreateOrConnectWithoutDevicesInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutDevicesInput, RoomUncheckedCreateWithoutDevicesInput>
  }

  export type DeviceUpsertWithoutRoomsInput = {
    update: XOR<DeviceUpdateWithoutRoomsInput, DeviceUncheckedUpdateWithoutRoomsInput>
    create: XOR<DeviceCreateWithoutRoomsInput, DeviceUncheckedCreateWithoutRoomsInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutRoomsInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutRoomsInput, DeviceUncheckedUpdateWithoutRoomsInput>
  }

  export type DeviceUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: EnumDEVICETYPEFieldUpdateOperationsInput | $Enums.DEVICETYPE
    deviceTriggers?: TriggerDeviceUpdateManyWithoutDeviceNestedInput
    deviceActions?: ActionDeviceUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: EnumDEVICETYPEFieldUpdateOperationsInput | $Enums.DEVICETYPE
    deviceTriggers?: TriggerDeviceUncheckedUpdateManyWithoutDeviceNestedInput
    deviceActions?: ActionDeviceUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type RoomUpsertWithoutDevicesInput = {
    update: XOR<RoomUpdateWithoutDevicesInput, RoomUncheckedUpdateWithoutDevicesInput>
    create: XOR<RoomCreateWithoutDevicesInput, RoomUncheckedCreateWithoutDevicesInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutDevicesInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutDevicesInput, RoomUncheckedUpdateWithoutDevicesInput>
  }

  export type RoomUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    floor?: FloorUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type RoomUncheckedUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    floorId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerCreateWithoutAutomationInput = {
    id?: string
    type: string
    timeTrigger?: TriggerTimeCreateNestedOneWithoutTriggerInput
    deviceTrigger?: TriggerDeviceCreateNestedOneWithoutTriggerInput
    sceneTrigger?: TriggerSceneCreateNestedOneWithoutTriggerInput
  }

  export type TriggerUncheckedCreateWithoutAutomationInput = {
    id?: string
    type: string
    timeTrigger?: TriggerTimeUncheckedCreateNestedOneWithoutTriggerInput
    deviceTrigger?: TriggerDeviceUncheckedCreateNestedOneWithoutTriggerInput
    sceneTrigger?: TriggerSceneUncheckedCreateNestedOneWithoutTriggerInput
  }

  export type TriggerCreateOrConnectWithoutAutomationInput = {
    where: TriggerWhereUniqueInput
    create: XOR<TriggerCreateWithoutAutomationInput, TriggerUncheckedCreateWithoutAutomationInput>
  }

  export type ActionCreateWithoutAutomationInput = {
    id?: string
    type: string
    deviceAction?: ActionDeviceCreateNestedOneWithoutActionInput
    sceneAction?: ActionSceneCreateNestedOneWithoutActionInput
  }

  export type ActionUncheckedCreateWithoutAutomationInput = {
    id?: string
    type: string
    deviceAction?: ActionDeviceUncheckedCreateNestedOneWithoutActionInput
    sceneAction?: ActionSceneUncheckedCreateNestedOneWithoutActionInput
  }

  export type ActionCreateOrConnectWithoutAutomationInput = {
    where: ActionWhereUniqueInput
    create: XOR<ActionCreateWithoutAutomationInput, ActionUncheckedCreateWithoutAutomationInput>
  }

  export type ActionCreateManyAutomationInputEnvelope = {
    data: ActionCreateManyAutomationInput | ActionCreateManyAutomationInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleCreateWithoutAutomationInput = {
    id?: string
    repeat: string
    time: string
    scheduleDays?: ScheduleDayCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutAutomationInput = {
    id?: string
    repeat: string
    time: string
    scheduleDays?: ScheduleDayUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleCreateOrConnectWithoutAutomationInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutAutomationInput, ScheduleUncheckedCreateWithoutAutomationInput>
  }

  export type TriggerUpsertWithoutAutomationInput = {
    update: XOR<TriggerUpdateWithoutAutomationInput, TriggerUncheckedUpdateWithoutAutomationInput>
    create: XOR<TriggerCreateWithoutAutomationInput, TriggerUncheckedCreateWithoutAutomationInput>
    where?: TriggerWhereInput
  }

  export type TriggerUpdateToOneWithWhereWithoutAutomationInput = {
    where?: TriggerWhereInput
    data: XOR<TriggerUpdateWithoutAutomationInput, TriggerUncheckedUpdateWithoutAutomationInput>
  }

  export type TriggerUpdateWithoutAutomationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    timeTrigger?: TriggerTimeUpdateOneWithoutTriggerNestedInput
    deviceTrigger?: TriggerDeviceUpdateOneWithoutTriggerNestedInput
    sceneTrigger?: TriggerSceneUpdateOneWithoutTriggerNestedInput
  }

  export type TriggerUncheckedUpdateWithoutAutomationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    timeTrigger?: TriggerTimeUncheckedUpdateOneWithoutTriggerNestedInput
    deviceTrigger?: TriggerDeviceUncheckedUpdateOneWithoutTriggerNestedInput
    sceneTrigger?: TriggerSceneUncheckedUpdateOneWithoutTriggerNestedInput
  }

  export type ActionUpsertWithWhereUniqueWithoutAutomationInput = {
    where: ActionWhereUniqueInput
    update: XOR<ActionUpdateWithoutAutomationInput, ActionUncheckedUpdateWithoutAutomationInput>
    create: XOR<ActionCreateWithoutAutomationInput, ActionUncheckedCreateWithoutAutomationInput>
  }

  export type ActionUpdateWithWhereUniqueWithoutAutomationInput = {
    where: ActionWhereUniqueInput
    data: XOR<ActionUpdateWithoutAutomationInput, ActionUncheckedUpdateWithoutAutomationInput>
  }

  export type ActionUpdateManyWithWhereWithoutAutomationInput = {
    where: ActionScalarWhereInput
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyWithoutAutomationInput>
  }

  export type ActionScalarWhereInput = {
    AND?: ActionScalarWhereInput | ActionScalarWhereInput[]
    OR?: ActionScalarWhereInput[]
    NOT?: ActionScalarWhereInput | ActionScalarWhereInput[]
    id?: StringFilter<"Action"> | string
    type?: StringFilter<"Action"> | string
    automationId?: StringFilter<"Action"> | string
  }

  export type ScheduleUpsertWithoutAutomationInput = {
    update: XOR<ScheduleUpdateWithoutAutomationInput, ScheduleUncheckedUpdateWithoutAutomationInput>
    create: XOR<ScheduleCreateWithoutAutomationInput, ScheduleUncheckedCreateWithoutAutomationInput>
    where?: ScheduleWhereInput
  }

  export type ScheduleUpdateToOneWithWhereWithoutAutomationInput = {
    where?: ScheduleWhereInput
    data: XOR<ScheduleUpdateWithoutAutomationInput, ScheduleUncheckedUpdateWithoutAutomationInput>
  }

  export type ScheduleUpdateWithoutAutomationInput = {
    id?: StringFieldUpdateOperationsInput | string
    repeat?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    scheduleDays?: ScheduleDayUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutAutomationInput = {
    id?: StringFieldUpdateOperationsInput | string
    repeat?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    scheduleDays?: ScheduleDayUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type AutomationCreateWithoutTriggerInput = {
    id?: string
    name: string
    enabled?: boolean
    actions?: ActionCreateNestedManyWithoutAutomationInput
    schedule?: ScheduleCreateNestedOneWithoutAutomationInput
  }

  export type AutomationUncheckedCreateWithoutTriggerInput = {
    id?: string
    name: string
    enabled?: boolean
    scheduleId?: string | null
    actions?: ActionUncheckedCreateNestedManyWithoutAutomationInput
  }

  export type AutomationCreateOrConnectWithoutTriggerInput = {
    where: AutomationWhereUniqueInput
    create: XOR<AutomationCreateWithoutTriggerInput, AutomationUncheckedCreateWithoutTriggerInput>
  }

  export type TriggerTimeCreateWithoutTriggerInput = {
    id?: string
    time: string
  }

  export type TriggerTimeUncheckedCreateWithoutTriggerInput = {
    id?: string
    time: string
  }

  export type TriggerTimeCreateOrConnectWithoutTriggerInput = {
    where: TriggerTimeWhereUniqueInput
    create: XOR<TriggerTimeCreateWithoutTriggerInput, TriggerTimeUncheckedCreateWithoutTriggerInput>
  }

  export type TriggerDeviceCreateWithoutTriggerInput = {
    id?: string
    deviceState: boolean
    device: DeviceCreateNestedOneWithoutDeviceTriggersInput
  }

  export type TriggerDeviceUncheckedCreateWithoutTriggerInput = {
    id?: string
    deviceId: string
    deviceState: boolean
  }

  export type TriggerDeviceCreateOrConnectWithoutTriggerInput = {
    where: TriggerDeviceWhereUniqueInput
    create: XOR<TriggerDeviceCreateWithoutTriggerInput, TriggerDeviceUncheckedCreateWithoutTriggerInput>
  }

  export type TriggerSceneCreateWithoutTriggerInput = {
    id?: string
    sceneId: string
  }

  export type TriggerSceneUncheckedCreateWithoutTriggerInput = {
    id?: string
    sceneId: string
  }

  export type TriggerSceneCreateOrConnectWithoutTriggerInput = {
    where: TriggerSceneWhereUniqueInput
    create: XOR<TriggerSceneCreateWithoutTriggerInput, TriggerSceneUncheckedCreateWithoutTriggerInput>
  }

  export type AutomationUpsertWithoutTriggerInput = {
    update: XOR<AutomationUpdateWithoutTriggerInput, AutomationUncheckedUpdateWithoutTriggerInput>
    create: XOR<AutomationCreateWithoutTriggerInput, AutomationUncheckedCreateWithoutTriggerInput>
    where?: AutomationWhereInput
  }

  export type AutomationUpdateToOneWithWhereWithoutTriggerInput = {
    where?: AutomationWhereInput
    data: XOR<AutomationUpdateWithoutTriggerInput, AutomationUncheckedUpdateWithoutTriggerInput>
  }

  export type AutomationUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    actions?: ActionUpdateManyWithoutAutomationNestedInput
    schedule?: ScheduleUpdateOneWithoutAutomationNestedInput
  }

  export type AutomationUncheckedUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    scheduleId?: NullableStringFieldUpdateOperationsInput | string | null
    actions?: ActionUncheckedUpdateManyWithoutAutomationNestedInput
  }

  export type TriggerTimeUpsertWithoutTriggerInput = {
    update: XOR<TriggerTimeUpdateWithoutTriggerInput, TriggerTimeUncheckedUpdateWithoutTriggerInput>
    create: XOR<TriggerTimeCreateWithoutTriggerInput, TriggerTimeUncheckedCreateWithoutTriggerInput>
    where?: TriggerTimeWhereInput
  }

  export type TriggerTimeUpdateToOneWithWhereWithoutTriggerInput = {
    where?: TriggerTimeWhereInput
    data: XOR<TriggerTimeUpdateWithoutTriggerInput, TriggerTimeUncheckedUpdateWithoutTriggerInput>
  }

  export type TriggerTimeUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerTimeUncheckedUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerDeviceUpsertWithoutTriggerInput = {
    update: XOR<TriggerDeviceUpdateWithoutTriggerInput, TriggerDeviceUncheckedUpdateWithoutTriggerInput>
    create: XOR<TriggerDeviceCreateWithoutTriggerInput, TriggerDeviceUncheckedCreateWithoutTriggerInput>
    where?: TriggerDeviceWhereInput
  }

  export type TriggerDeviceUpdateToOneWithWhereWithoutTriggerInput = {
    where?: TriggerDeviceWhereInput
    data: XOR<TriggerDeviceUpdateWithoutTriggerInput, TriggerDeviceUncheckedUpdateWithoutTriggerInput>
  }

  export type TriggerDeviceUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceState?: BoolFieldUpdateOperationsInput | boolean
    device?: DeviceUpdateOneRequiredWithoutDeviceTriggersNestedInput
  }

  export type TriggerDeviceUncheckedUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    deviceState?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TriggerSceneUpsertWithoutTriggerInput = {
    update: XOR<TriggerSceneUpdateWithoutTriggerInput, TriggerSceneUncheckedUpdateWithoutTriggerInput>
    create: XOR<TriggerSceneCreateWithoutTriggerInput, TriggerSceneUncheckedCreateWithoutTriggerInput>
    where?: TriggerSceneWhereInput
  }

  export type TriggerSceneUpdateToOneWithWhereWithoutTriggerInput = {
    where?: TriggerSceneWhereInput
    data: XOR<TriggerSceneUpdateWithoutTriggerInput, TriggerSceneUncheckedUpdateWithoutTriggerInput>
  }

  export type TriggerSceneUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    sceneId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerSceneUncheckedUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    sceneId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerCreateWithoutTimeTriggerInput = {
    id?: string
    type: string
    automation?: AutomationCreateNestedOneWithoutTriggerInput
    deviceTrigger?: TriggerDeviceCreateNestedOneWithoutTriggerInput
    sceneTrigger?: TriggerSceneCreateNestedOneWithoutTriggerInput
  }

  export type TriggerUncheckedCreateWithoutTimeTriggerInput = {
    id?: string
    type: string
    automation?: AutomationUncheckedCreateNestedOneWithoutTriggerInput
    deviceTrigger?: TriggerDeviceUncheckedCreateNestedOneWithoutTriggerInput
    sceneTrigger?: TriggerSceneUncheckedCreateNestedOneWithoutTriggerInput
  }

  export type TriggerCreateOrConnectWithoutTimeTriggerInput = {
    where: TriggerWhereUniqueInput
    create: XOR<TriggerCreateWithoutTimeTriggerInput, TriggerUncheckedCreateWithoutTimeTriggerInput>
  }

  export type TriggerUpsertWithoutTimeTriggerInput = {
    update: XOR<TriggerUpdateWithoutTimeTriggerInput, TriggerUncheckedUpdateWithoutTimeTriggerInput>
    create: XOR<TriggerCreateWithoutTimeTriggerInput, TriggerUncheckedCreateWithoutTimeTriggerInput>
    where?: TriggerWhereInput
  }

  export type TriggerUpdateToOneWithWhereWithoutTimeTriggerInput = {
    where?: TriggerWhereInput
    data: XOR<TriggerUpdateWithoutTimeTriggerInput, TriggerUncheckedUpdateWithoutTimeTriggerInput>
  }

  export type TriggerUpdateWithoutTimeTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    automation?: AutomationUpdateOneWithoutTriggerNestedInput
    deviceTrigger?: TriggerDeviceUpdateOneWithoutTriggerNestedInput
    sceneTrigger?: TriggerSceneUpdateOneWithoutTriggerNestedInput
  }

  export type TriggerUncheckedUpdateWithoutTimeTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    automation?: AutomationUncheckedUpdateOneWithoutTriggerNestedInput
    deviceTrigger?: TriggerDeviceUncheckedUpdateOneWithoutTriggerNestedInput
    sceneTrigger?: TriggerSceneUncheckedUpdateOneWithoutTriggerNestedInput
  }

  export type DeviceCreateWithoutDeviceTriggersInput = {
    id?: string
    name: string
    status: string
    type?: $Enums.DEVICETYPE
    rooms?: DeviceRoomCreateNestedManyWithoutDeviceInput
    deviceActions?: ActionDeviceCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutDeviceTriggersInput = {
    id?: string
    name: string
    status: string
    type?: $Enums.DEVICETYPE
    rooms?: DeviceRoomUncheckedCreateNestedManyWithoutDeviceInput
    deviceActions?: ActionDeviceUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutDeviceTriggersInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutDeviceTriggersInput, DeviceUncheckedCreateWithoutDeviceTriggersInput>
  }

  export type TriggerCreateWithoutDeviceTriggerInput = {
    id?: string
    type: string
    automation?: AutomationCreateNestedOneWithoutTriggerInput
    timeTrigger?: TriggerTimeCreateNestedOneWithoutTriggerInput
    sceneTrigger?: TriggerSceneCreateNestedOneWithoutTriggerInput
  }

  export type TriggerUncheckedCreateWithoutDeviceTriggerInput = {
    id?: string
    type: string
    automation?: AutomationUncheckedCreateNestedOneWithoutTriggerInput
    timeTrigger?: TriggerTimeUncheckedCreateNestedOneWithoutTriggerInput
    sceneTrigger?: TriggerSceneUncheckedCreateNestedOneWithoutTriggerInput
  }

  export type TriggerCreateOrConnectWithoutDeviceTriggerInput = {
    where: TriggerWhereUniqueInput
    create: XOR<TriggerCreateWithoutDeviceTriggerInput, TriggerUncheckedCreateWithoutDeviceTriggerInput>
  }

  export type DeviceUpsertWithoutDeviceTriggersInput = {
    update: XOR<DeviceUpdateWithoutDeviceTriggersInput, DeviceUncheckedUpdateWithoutDeviceTriggersInput>
    create: XOR<DeviceCreateWithoutDeviceTriggersInput, DeviceUncheckedCreateWithoutDeviceTriggersInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutDeviceTriggersInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutDeviceTriggersInput, DeviceUncheckedUpdateWithoutDeviceTriggersInput>
  }

  export type DeviceUpdateWithoutDeviceTriggersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: EnumDEVICETYPEFieldUpdateOperationsInput | $Enums.DEVICETYPE
    rooms?: DeviceRoomUpdateManyWithoutDeviceNestedInput
    deviceActions?: ActionDeviceUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutDeviceTriggersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: EnumDEVICETYPEFieldUpdateOperationsInput | $Enums.DEVICETYPE
    rooms?: DeviceRoomUncheckedUpdateManyWithoutDeviceNestedInput
    deviceActions?: ActionDeviceUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type TriggerUpsertWithoutDeviceTriggerInput = {
    update: XOR<TriggerUpdateWithoutDeviceTriggerInput, TriggerUncheckedUpdateWithoutDeviceTriggerInput>
    create: XOR<TriggerCreateWithoutDeviceTriggerInput, TriggerUncheckedCreateWithoutDeviceTriggerInput>
    where?: TriggerWhereInput
  }

  export type TriggerUpdateToOneWithWhereWithoutDeviceTriggerInput = {
    where?: TriggerWhereInput
    data: XOR<TriggerUpdateWithoutDeviceTriggerInput, TriggerUncheckedUpdateWithoutDeviceTriggerInput>
  }

  export type TriggerUpdateWithoutDeviceTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    automation?: AutomationUpdateOneWithoutTriggerNestedInput
    timeTrigger?: TriggerTimeUpdateOneWithoutTriggerNestedInput
    sceneTrigger?: TriggerSceneUpdateOneWithoutTriggerNestedInput
  }

  export type TriggerUncheckedUpdateWithoutDeviceTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    automation?: AutomationUncheckedUpdateOneWithoutTriggerNestedInput
    timeTrigger?: TriggerTimeUncheckedUpdateOneWithoutTriggerNestedInput
    sceneTrigger?: TriggerSceneUncheckedUpdateOneWithoutTriggerNestedInput
  }

  export type TriggerCreateWithoutSceneTriggerInput = {
    id?: string
    type: string
    automation?: AutomationCreateNestedOneWithoutTriggerInput
    timeTrigger?: TriggerTimeCreateNestedOneWithoutTriggerInput
    deviceTrigger?: TriggerDeviceCreateNestedOneWithoutTriggerInput
  }

  export type TriggerUncheckedCreateWithoutSceneTriggerInput = {
    id?: string
    type: string
    automation?: AutomationUncheckedCreateNestedOneWithoutTriggerInput
    timeTrigger?: TriggerTimeUncheckedCreateNestedOneWithoutTriggerInput
    deviceTrigger?: TriggerDeviceUncheckedCreateNestedOneWithoutTriggerInput
  }

  export type TriggerCreateOrConnectWithoutSceneTriggerInput = {
    where: TriggerWhereUniqueInput
    create: XOR<TriggerCreateWithoutSceneTriggerInput, TriggerUncheckedCreateWithoutSceneTriggerInput>
  }

  export type TriggerUpsertWithoutSceneTriggerInput = {
    update: XOR<TriggerUpdateWithoutSceneTriggerInput, TriggerUncheckedUpdateWithoutSceneTriggerInput>
    create: XOR<TriggerCreateWithoutSceneTriggerInput, TriggerUncheckedCreateWithoutSceneTriggerInput>
    where?: TriggerWhereInput
  }

  export type TriggerUpdateToOneWithWhereWithoutSceneTriggerInput = {
    where?: TriggerWhereInput
    data: XOR<TriggerUpdateWithoutSceneTriggerInput, TriggerUncheckedUpdateWithoutSceneTriggerInput>
  }

  export type TriggerUpdateWithoutSceneTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    automation?: AutomationUpdateOneWithoutTriggerNestedInput
    timeTrigger?: TriggerTimeUpdateOneWithoutTriggerNestedInput
    deviceTrigger?: TriggerDeviceUpdateOneWithoutTriggerNestedInput
  }

  export type TriggerUncheckedUpdateWithoutSceneTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    automation?: AutomationUncheckedUpdateOneWithoutTriggerNestedInput
    timeTrigger?: TriggerTimeUncheckedUpdateOneWithoutTriggerNestedInput
    deviceTrigger?: TriggerDeviceUncheckedUpdateOneWithoutTriggerNestedInput
  }

  export type AutomationCreateWithoutActionsInput = {
    id?: string
    name: string
    enabled?: boolean
    trigger?: TriggerCreateNestedOneWithoutAutomationInput
    schedule?: ScheduleCreateNestedOneWithoutAutomationInput
  }

  export type AutomationUncheckedCreateWithoutActionsInput = {
    id?: string
    name: string
    enabled?: boolean
    triggerId?: string | null
    scheduleId?: string | null
  }

  export type AutomationCreateOrConnectWithoutActionsInput = {
    where: AutomationWhereUniqueInput
    create: XOR<AutomationCreateWithoutActionsInput, AutomationUncheckedCreateWithoutActionsInput>
  }

  export type ActionDeviceCreateWithoutActionInput = {
    id?: string
    state?: boolean | null
    brightness?: number | null
    temperature?: number | null
    level?: number | null
    device: DeviceCreateNestedOneWithoutDeviceActionsInput
  }

  export type ActionDeviceUncheckedCreateWithoutActionInput = {
    id?: string
    targetId: string
    state?: boolean | null
    brightness?: number | null
    temperature?: number | null
    level?: number | null
  }

  export type ActionDeviceCreateOrConnectWithoutActionInput = {
    where: ActionDeviceWhereUniqueInput
    create: XOR<ActionDeviceCreateWithoutActionInput, ActionDeviceUncheckedCreateWithoutActionInput>
  }

  export type ActionSceneCreateWithoutActionInput = {
    id?: string
    targetId: string
  }

  export type ActionSceneUncheckedCreateWithoutActionInput = {
    id?: string
    targetId: string
  }

  export type ActionSceneCreateOrConnectWithoutActionInput = {
    where: ActionSceneWhereUniqueInput
    create: XOR<ActionSceneCreateWithoutActionInput, ActionSceneUncheckedCreateWithoutActionInput>
  }

  export type AutomationUpsertWithoutActionsInput = {
    update: XOR<AutomationUpdateWithoutActionsInput, AutomationUncheckedUpdateWithoutActionsInput>
    create: XOR<AutomationCreateWithoutActionsInput, AutomationUncheckedCreateWithoutActionsInput>
    where?: AutomationWhereInput
  }

  export type AutomationUpdateToOneWithWhereWithoutActionsInput = {
    where?: AutomationWhereInput
    data: XOR<AutomationUpdateWithoutActionsInput, AutomationUncheckedUpdateWithoutActionsInput>
  }

  export type AutomationUpdateWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    trigger?: TriggerUpdateOneWithoutAutomationNestedInput
    schedule?: ScheduleUpdateOneWithoutAutomationNestedInput
  }

  export type AutomationUncheckedUpdateWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActionDeviceUpsertWithoutActionInput = {
    update: XOR<ActionDeviceUpdateWithoutActionInput, ActionDeviceUncheckedUpdateWithoutActionInput>
    create: XOR<ActionDeviceCreateWithoutActionInput, ActionDeviceUncheckedCreateWithoutActionInput>
    where?: ActionDeviceWhereInput
  }

  export type ActionDeviceUpdateToOneWithWhereWithoutActionInput = {
    where?: ActionDeviceWhereInput
    data: XOR<ActionDeviceUpdateWithoutActionInput, ActionDeviceUncheckedUpdateWithoutActionInput>
  }

  export type ActionDeviceUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: NullableBoolFieldUpdateOperationsInput | boolean | null
    brightness?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableIntFieldUpdateOperationsInput | number | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    device?: DeviceUpdateOneRequiredWithoutDeviceActionsNestedInput
  }

  export type ActionDeviceUncheckedUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    state?: NullableBoolFieldUpdateOperationsInput | boolean | null
    brightness?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableIntFieldUpdateOperationsInput | number | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ActionSceneUpsertWithoutActionInput = {
    update: XOR<ActionSceneUpdateWithoutActionInput, ActionSceneUncheckedUpdateWithoutActionInput>
    create: XOR<ActionSceneCreateWithoutActionInput, ActionSceneUncheckedCreateWithoutActionInput>
    where?: ActionSceneWhereInput
  }

  export type ActionSceneUpdateToOneWithWhereWithoutActionInput = {
    where?: ActionSceneWhereInput
    data: XOR<ActionSceneUpdateWithoutActionInput, ActionSceneUncheckedUpdateWithoutActionInput>
  }

  export type ActionSceneUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionSceneUncheckedUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceCreateWithoutDeviceActionsInput = {
    id?: string
    name: string
    status: string
    type?: $Enums.DEVICETYPE
    rooms?: DeviceRoomCreateNestedManyWithoutDeviceInput
    deviceTriggers?: TriggerDeviceCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutDeviceActionsInput = {
    id?: string
    name: string
    status: string
    type?: $Enums.DEVICETYPE
    rooms?: DeviceRoomUncheckedCreateNestedManyWithoutDeviceInput
    deviceTriggers?: TriggerDeviceUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutDeviceActionsInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutDeviceActionsInput, DeviceUncheckedCreateWithoutDeviceActionsInput>
  }

  export type ActionCreateWithoutDeviceActionInput = {
    id?: string
    type: string
    automation: AutomationCreateNestedOneWithoutActionsInput
    sceneAction?: ActionSceneCreateNestedOneWithoutActionInput
  }

  export type ActionUncheckedCreateWithoutDeviceActionInput = {
    id?: string
    type: string
    automationId: string
    sceneAction?: ActionSceneUncheckedCreateNestedOneWithoutActionInput
  }

  export type ActionCreateOrConnectWithoutDeviceActionInput = {
    where: ActionWhereUniqueInput
    create: XOR<ActionCreateWithoutDeviceActionInput, ActionUncheckedCreateWithoutDeviceActionInput>
  }

  export type DeviceUpsertWithoutDeviceActionsInput = {
    update: XOR<DeviceUpdateWithoutDeviceActionsInput, DeviceUncheckedUpdateWithoutDeviceActionsInput>
    create: XOR<DeviceCreateWithoutDeviceActionsInput, DeviceUncheckedCreateWithoutDeviceActionsInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutDeviceActionsInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutDeviceActionsInput, DeviceUncheckedUpdateWithoutDeviceActionsInput>
  }

  export type DeviceUpdateWithoutDeviceActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: EnumDEVICETYPEFieldUpdateOperationsInput | $Enums.DEVICETYPE
    rooms?: DeviceRoomUpdateManyWithoutDeviceNestedInput
    deviceTriggers?: TriggerDeviceUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutDeviceActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: EnumDEVICETYPEFieldUpdateOperationsInput | $Enums.DEVICETYPE
    rooms?: DeviceRoomUncheckedUpdateManyWithoutDeviceNestedInput
    deviceTriggers?: TriggerDeviceUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type ActionUpsertWithoutDeviceActionInput = {
    update: XOR<ActionUpdateWithoutDeviceActionInput, ActionUncheckedUpdateWithoutDeviceActionInput>
    create: XOR<ActionCreateWithoutDeviceActionInput, ActionUncheckedCreateWithoutDeviceActionInput>
    where?: ActionWhereInput
  }

  export type ActionUpdateToOneWithWhereWithoutDeviceActionInput = {
    where?: ActionWhereInput
    data: XOR<ActionUpdateWithoutDeviceActionInput, ActionUncheckedUpdateWithoutDeviceActionInput>
  }

  export type ActionUpdateWithoutDeviceActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    automation?: AutomationUpdateOneRequiredWithoutActionsNestedInput
    sceneAction?: ActionSceneUpdateOneWithoutActionNestedInput
  }

  export type ActionUncheckedUpdateWithoutDeviceActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    automationId?: StringFieldUpdateOperationsInput | string
    sceneAction?: ActionSceneUncheckedUpdateOneWithoutActionNestedInput
  }

  export type ActionCreateWithoutSceneActionInput = {
    id?: string
    type: string
    automation: AutomationCreateNestedOneWithoutActionsInput
    deviceAction?: ActionDeviceCreateNestedOneWithoutActionInput
  }

  export type ActionUncheckedCreateWithoutSceneActionInput = {
    id?: string
    type: string
    automationId: string
    deviceAction?: ActionDeviceUncheckedCreateNestedOneWithoutActionInput
  }

  export type ActionCreateOrConnectWithoutSceneActionInput = {
    where: ActionWhereUniqueInput
    create: XOR<ActionCreateWithoutSceneActionInput, ActionUncheckedCreateWithoutSceneActionInput>
  }

  export type ActionUpsertWithoutSceneActionInput = {
    update: XOR<ActionUpdateWithoutSceneActionInput, ActionUncheckedUpdateWithoutSceneActionInput>
    create: XOR<ActionCreateWithoutSceneActionInput, ActionUncheckedCreateWithoutSceneActionInput>
    where?: ActionWhereInput
  }

  export type ActionUpdateToOneWithWhereWithoutSceneActionInput = {
    where?: ActionWhereInput
    data: XOR<ActionUpdateWithoutSceneActionInput, ActionUncheckedUpdateWithoutSceneActionInput>
  }

  export type ActionUpdateWithoutSceneActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    automation?: AutomationUpdateOneRequiredWithoutActionsNestedInput
    deviceAction?: ActionDeviceUpdateOneWithoutActionNestedInput
  }

  export type ActionUncheckedUpdateWithoutSceneActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    automationId?: StringFieldUpdateOperationsInput | string
    deviceAction?: ActionDeviceUncheckedUpdateOneWithoutActionNestedInput
  }

  export type AutomationCreateWithoutScheduleInput = {
    id?: string
    name: string
    enabled?: boolean
    trigger?: TriggerCreateNestedOneWithoutAutomationInput
    actions?: ActionCreateNestedManyWithoutAutomationInput
  }

  export type AutomationUncheckedCreateWithoutScheduleInput = {
    id?: string
    name: string
    enabled?: boolean
    triggerId?: string | null
    actions?: ActionUncheckedCreateNestedManyWithoutAutomationInput
  }

  export type AutomationCreateOrConnectWithoutScheduleInput = {
    where: AutomationWhereUniqueInput
    create: XOR<AutomationCreateWithoutScheduleInput, AutomationUncheckedCreateWithoutScheduleInput>
  }

  export type ScheduleDayCreateWithoutScheduleInput = {
    id?: string
    day: $Enums.scheduleDays
  }

  export type ScheduleDayUncheckedCreateWithoutScheduleInput = {
    id?: string
    day: $Enums.scheduleDays
  }

  export type ScheduleDayCreateOrConnectWithoutScheduleInput = {
    where: ScheduleDayWhereUniqueInput
    create: XOR<ScheduleDayCreateWithoutScheduleInput, ScheduleDayUncheckedCreateWithoutScheduleInput>
  }

  export type ScheduleDayCreateManyScheduleInputEnvelope = {
    data: ScheduleDayCreateManyScheduleInput | ScheduleDayCreateManyScheduleInput[]
    skipDuplicates?: boolean
  }

  export type AutomationUpsertWithoutScheduleInput = {
    update: XOR<AutomationUpdateWithoutScheduleInput, AutomationUncheckedUpdateWithoutScheduleInput>
    create: XOR<AutomationCreateWithoutScheduleInput, AutomationUncheckedCreateWithoutScheduleInput>
    where?: AutomationWhereInput
  }

  export type AutomationUpdateToOneWithWhereWithoutScheduleInput = {
    where?: AutomationWhereInput
    data: XOR<AutomationUpdateWithoutScheduleInput, AutomationUncheckedUpdateWithoutScheduleInput>
  }

  export type AutomationUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    trigger?: TriggerUpdateOneWithoutAutomationNestedInput
    actions?: ActionUpdateManyWithoutAutomationNestedInput
  }

  export type AutomationUncheckedUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    triggerId?: NullableStringFieldUpdateOperationsInput | string | null
    actions?: ActionUncheckedUpdateManyWithoutAutomationNestedInput
  }

  export type ScheduleDayUpsertWithWhereUniqueWithoutScheduleInput = {
    where: ScheduleDayWhereUniqueInput
    update: XOR<ScheduleDayUpdateWithoutScheduleInput, ScheduleDayUncheckedUpdateWithoutScheduleInput>
    create: XOR<ScheduleDayCreateWithoutScheduleInput, ScheduleDayUncheckedCreateWithoutScheduleInput>
  }

  export type ScheduleDayUpdateWithWhereUniqueWithoutScheduleInput = {
    where: ScheduleDayWhereUniqueInput
    data: XOR<ScheduleDayUpdateWithoutScheduleInput, ScheduleDayUncheckedUpdateWithoutScheduleInput>
  }

  export type ScheduleDayUpdateManyWithWhereWithoutScheduleInput = {
    where: ScheduleDayScalarWhereInput
    data: XOR<ScheduleDayUpdateManyMutationInput, ScheduleDayUncheckedUpdateManyWithoutScheduleInput>
  }

  export type ScheduleDayScalarWhereInput = {
    AND?: ScheduleDayScalarWhereInput | ScheduleDayScalarWhereInput[]
    OR?: ScheduleDayScalarWhereInput[]
    NOT?: ScheduleDayScalarWhereInput | ScheduleDayScalarWhereInput[]
    id?: StringFilter<"ScheduleDay"> | string
    day?: EnumscheduleDaysFilter<"ScheduleDay"> | $Enums.scheduleDays
    scheduleId?: StringFilter<"ScheduleDay"> | string
  }

  export type ScheduleCreateWithoutScheduleDaysInput = {
    id?: string
    repeat: string
    time: string
    automation?: AutomationCreateNestedOneWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutScheduleDaysInput = {
    id?: string
    repeat: string
    time: string
    automation?: AutomationUncheckedCreateNestedOneWithoutScheduleInput
  }

  export type ScheduleCreateOrConnectWithoutScheduleDaysInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutScheduleDaysInput, ScheduleUncheckedCreateWithoutScheduleDaysInput>
  }

  export type ScheduleUpsertWithoutScheduleDaysInput = {
    update: XOR<ScheduleUpdateWithoutScheduleDaysInput, ScheduleUncheckedUpdateWithoutScheduleDaysInput>
    create: XOR<ScheduleCreateWithoutScheduleDaysInput, ScheduleUncheckedCreateWithoutScheduleDaysInput>
    where?: ScheduleWhereInput
  }

  export type ScheduleUpdateToOneWithWhereWithoutScheduleDaysInput = {
    where?: ScheduleWhereInput
    data: XOR<ScheduleUpdateWithoutScheduleDaysInput, ScheduleUncheckedUpdateWithoutScheduleDaysInput>
  }

  export type ScheduleUpdateWithoutScheduleDaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    repeat?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    automation?: AutomationUpdateOneWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutScheduleDaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    repeat?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    automation?: AutomationUncheckedUpdateOneWithoutScheduleNestedInput
  }

  export type FloorCreateManyBuildingInput = {
    id?: string
    number: number
  }

  export type FloorUpdateWithoutBuildingInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    rooms?: RoomUpdateManyWithoutFloorNestedInput
  }

  export type FloorUncheckedUpdateWithoutBuildingInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    rooms?: RoomUncheckedUpdateManyWithoutFloorNestedInput
  }

  export type FloorUncheckedUpdateManyWithoutBuildingInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
  }

  export type RoomCreateManyFloorInput = {
    id?: string
    name: string
  }

  export type RoomUpdateWithoutFloorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    devices?: DeviceRoomUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutFloorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    devices?: DeviceRoomUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutFloorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceRoomCreateManyRoomInput = {
    deviceId: string
  }

  export type DeviceRoomUpdateWithoutRoomInput = {
    device?: DeviceUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type DeviceRoomUncheckedUpdateWithoutRoomInput = {
    deviceId?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceRoomUncheckedUpdateManyWithoutRoomInput = {
    deviceId?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceRoomCreateManyDeviceInput = {
    roomId: string
  }

  export type TriggerDeviceCreateManyDeviceInput = {
    id?: string
    deviceState: boolean
    triggerId: string
  }

  export type ActionDeviceCreateManyDeviceInput = {
    id?: string
    state?: boolean | null
    brightness?: number | null
    temperature?: number | null
    level?: number | null
    actionId: string
  }

  export type DeviceRoomUpdateWithoutDeviceInput = {
    room?: RoomUpdateOneRequiredWithoutDevicesNestedInput
  }

  export type DeviceRoomUncheckedUpdateWithoutDeviceInput = {
    roomId?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceRoomUncheckedUpdateManyWithoutDeviceInput = {
    roomId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerDeviceUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceState?: BoolFieldUpdateOperationsInput | boolean
    trigger?: TriggerUpdateOneRequiredWithoutDeviceTriggerNestedInput
  }

  export type TriggerDeviceUncheckedUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceState?: BoolFieldUpdateOperationsInput | boolean
    triggerId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerDeviceUncheckedUpdateManyWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceState?: BoolFieldUpdateOperationsInput | boolean
    triggerId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionDeviceUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: NullableBoolFieldUpdateOperationsInput | boolean | null
    brightness?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableIntFieldUpdateOperationsInput | number | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    action?: ActionUpdateOneRequiredWithoutDeviceActionNestedInput
  }

  export type ActionDeviceUncheckedUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: NullableBoolFieldUpdateOperationsInput | boolean | null
    brightness?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableIntFieldUpdateOperationsInput | number | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    actionId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionDeviceUncheckedUpdateManyWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: NullableBoolFieldUpdateOperationsInput | boolean | null
    brightness?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableIntFieldUpdateOperationsInput | number | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    actionId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionCreateManyAutomationInput = {
    id?: string
    type: string
  }

  export type ActionUpdateWithoutAutomationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    deviceAction?: ActionDeviceUpdateOneWithoutActionNestedInput
    sceneAction?: ActionSceneUpdateOneWithoutActionNestedInput
  }

  export type ActionUncheckedUpdateWithoutAutomationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    deviceAction?: ActionDeviceUncheckedUpdateOneWithoutActionNestedInput
    sceneAction?: ActionSceneUncheckedUpdateOneWithoutActionNestedInput
  }

  export type ActionUncheckedUpdateManyWithoutAutomationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleDayCreateManyScheduleInput = {
    id?: string
    day: $Enums.scheduleDays
  }

  export type ScheduleDayUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumscheduleDaysFieldUpdateOperationsInput | $Enums.scheduleDays
  }

  export type ScheduleDayUncheckedUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumscheduleDaysFieldUpdateOperationsInput | $Enums.scheduleDays
  }

  export type ScheduleDayUncheckedUpdateManyWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumscheduleDaysFieldUpdateOperationsInput | $Enums.scheduleDays
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}