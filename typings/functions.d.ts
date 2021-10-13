declare type PtrHash = number & { __ptrHashBrand: unknown };

declare function Game(this: void): Game;
/**
 * Comparing two API objects directly in mod code will not work, even if the Lua metadata points to
 * the same pointer in memory. As a workaround, use this function to get a numerical hash of the
 * object.
 *
 * A `PtrHash` object is simply a branded number for better type safety and code clarity.
 */
declare function GetPtrHash(
  this: void,
  pointer: Entity | RoomDescriptor | RoomDescriptorReadOnly,
): PtrHash;
declare function Random(this: void): int;
/** Returns a random vector between (-1, -1) and (1, 1). */
declare function RandomVector(this: void): Vector;
