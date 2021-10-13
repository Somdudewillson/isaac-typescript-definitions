// These are unofficial enums contributed by the community
// We have to use const enums here instead of normal enums because the corresponding Lua globals do
// not exist
// https://www.typescriptlang.org/docs/handbook/enums.html
// Alternatively, we could create new global enums, but that would pollute the global namespace

// Some of the official enums repeat themselves inside of the properties
// e.g. "CollectibleType.COLLECTIBLE_SAD_ONION" is better written as "CollectibleType.SAD_ONION"
// As a standard, enums in this file do not use any unnecessary prefixes

/**
 * Matches the ItemConfig.CHARGE_* members of the ItemConfig class.
 * In IsaacScript, we reimplement this as an enum, since it is cleaner.
 */
declare const enum ItemConfigChargeType {
  NORMAL = 0,
  TIMED = 1,
  SPECIAL = 2,
}

/**
 * Matches the ItemConfig.TAG_* members of the ItemConfig class.
 * In IsaacScript, we reimplement this as an enum, since it is cleaner.
 */
declare const enum ItemConfigTag {
  /** Dead things (for the Parasite unlock) */
  DEAD = 1,
  /** Syringes (for Little Baggy and the Spun! transformation) */
  SYRINGE = 1 << 1,
  /** Mom's things (for Mom's Contact and the Yes Mother? transformation) */
  MOM = 1 << 2,
  /** Technology items (for the Technology Zero unlock) */
  TECH = 1 << 3,
  /** Battery items (for the Jumper Cables unlock) */
  BATTERY = 1 << 4,
  /** -- Guppy items (Guppy transformation) */
  GUPPY = 1 << 5,
  /** Fly items (Beelzebub transformation) */
  FLY = 1 << 6,
  /** Bob items (Bob transformation) */
  BOB = 1 << 7,
  /** Mushroom items (Fun Guy transformation) */
  MUSHROOM = 1 << 8,
  /** Baby items (Conjoined transformation) */
  BABY = 1 << 9,
  /** Angel items (Seraphim transformation) */
  ANGEL = 1 << 10,
  /** Devil items (Leviathan transformation) */
  DEVIL = 1 << 11,
  /** Poop items (Oh Shit transformation) */
  POOP = 1 << 12,
  /** Book items (Book Worm transformation) */
  BOOK = 1 << 13,
  /** Spider items (Spider Baby transformation) */
  SPIDER = 1 << 14,
  /** Quest item (cannot be rerolled or randomly obtained) */
  QUEST = 1 << 15,
  /** Can be spawned by Monster Manual */
  MONSTER_MANUAL = 1 << 16,
  /** Cannot appear in Greed Mode */
  NO_GREED = 1 << 17,
  /** Food item (for Binge Eater) */
  FOOD = 1 << 18,
  /** Tears up item (for Lachryphagy unlock detection) */
  TEARS_UP = 1 << 19,
  /** Whitelisted item for Tainted Lost */
  OFFENSIVE = 1 << 20,
  /** Blacklisted item for Keeper & Tainted Keeper */
  NO_KEEPER = 1 << 21,
  /** Blacklisted item for The Lost's Birthright */
  NO_LOST_BR = 1 << 22,
  /** Star themed items (for the Planetarium unlock) */
  STARS = 1 << 23,
  /** Summonable items (for Tainted Bethany) */
  SUMMONABLE = 1 << 24,
  /** Can't be obtained in Cantripped challenge */
  NO_CANTRIP = 1 << 25,
  /** Active items that have wisps attached to them (automatically set) */
  WISP = 1 << 26,
  /** Unique familiars that cannot be duplicated */
  UNIQUE_FAMILIAR = 1 << 27,
}

/**
 * Matches the ItemConfig.TAG_* members of the ItemConfig class.
 * In IsaacScript, we reimplement this as an enum, since it is cleaner.
 */
declare const enum ItemConfigCardType {
  TAROT = 0,
  /** Standard playing cards (twos, aces and Joker, does not include Suicide King, Rules Card or Queen of Hearts) */
  CARDTYPE_SUIT = 1,
  CARDTYPE_RUNE = 2,
  /**
   * Anything that doesn't fall in the earlier categories.
   * This excludes non-cards such as Dice Shard, which are located in subsequent enums.
   */
  CARDTYPE_SPECIAL = 3,
  /** Special pocket items that do not qualify as "cards" */
  CARDTYPE_SPECIAL_OBJECT = 4,
  CARDTYPE_TAROT_REVERSE = 5,
}

declare const enum Dimension {
  CURRENT = -1,
  MAIN = 0,
  /** Used by the mirror sequence and the escape sequence. */
  SECONDARY = 1,
  DEATH_CERTIFICATE = 2,
}

declare const enum ControllerIndex {
  KEYBOARD = 0,
  CONTROLLER_1 = 1,
  CONTROLLER_2 = 2,
  CONTROLLER_3 = 3,
}

declare const enum PocketItemSlot {
  SLOT_1 = 0,
  SLOT_2 = 1,
  SLOT_3 = 2,
  SLOT_4 = 3,
}

declare const enum TrinketSlot {
  /** The bottom-right trinket. */
  SLOT_1 = 0,
  /** The top-left trinket. */
  SLOT_2 = 1,
}

declare type ZodiacCollectibles =
  | CollectibleType.COLLECTIBLE_CANCER
  | CollectibleType.COLLECTIBLE_ARIES
  | CollectibleType.COLLECTIBLE_LEO
  | CollectibleType.COLLECTIBLE_SCORPIO
  | CollectibleType.COLLECTIBLE_AQUARIUS
  | CollectibleType.COLLECTIBLE_PISCES
  | CollectibleType.COLLECTIBLE_TAURUS
  | CollectibleType.COLLECTIBLE_GEMINI
  | CollectibleType.COLLECTIBLE_CAPRICORN
  | CollectibleType.COLLECTIBLE_SAGITTARIUS
  | CollectibleType.COLLECTIBLE_LIBRA
  | CollectibleType.COLLECTIBLE_VIRGO;

declare const enum PlayerItemAnimation {
  PICKUP = "Pickup",
  LIFT_ITEM = "LiftItem",
  HIDE_ITEM = "HideItem",
  USE_ITEM = "UseItem",
}

declare const enum CollectibleAnimation {
  IDLE = "Idle",
  EMPTY = "Empty",
  SHOP_IDLE = "ShopIdle",
  PLAYER_PICKUP = "PlayerPickup",
  PLAYER_PICKUP_SPARKLE = "PlayerPickupSparkle",
}

declare const enum StageTransition {
  DISAPPEAR = 0,
  NONE = 1,
}

declare const enum FadeoutTarget {
  FILE_SELECT = 0,
  MAIN_MENU = 1,
  TITLE_SCREEN = 2,
  RESTART_RUN = 3,
  RESTART_RUN_LAP = 4,
  // 5 and higher results in a black screen
}

/**
 * These enums loop after 31, so 32 = DPAD_LEFT, 63 = DPAD_LEFT, and so on.
 * There appears to be no input key for joystick movement.
 */
declare const enum Controller {
  DPAD_LEFT = 0,
  DPAD_RIGHT = 1,
  DPAD_UP = 2,
  DPAD_DOWN = 3,
  /** A, X and B on Xbox, Playstation and Nintendo respectively. */
  BUTTON_A = 4,
  /** B, O and A on Xbox, Playstation and Nintendo respectively. */
  BUTTON_B = 5,
  /** X, □ and Y on Xbox, Playstation and Nintendo respectively. */
  BUTTON_X = 6,
  /** Y, Δ and X on Xbox, Playstation and Nintendo respectively. */
  BUTTON_Y = 7,
  /** Left shoulder button. */
  BUMPER_LEFT = 8,
  TRIGGER_LEFT = 9,
  STICK_LEFT = 10,
  /** Right shoulder button. */
  BUMPER_RIGHT = 11,
  TRIGGER_RIGHT = 12,
  STICK_RIGHT = 13,
  /** Select, Share and - on Xbox, Playstation and Nintendo respectively. */
  BUTTON_BACK = 14,
  /** Start, Options and + on Xbox, Playstation and Nintendo respectively. */
  BUTTON_START = 15,
}

declare const enum LineCheckMode {
  /** Stopped by pits and rocks (e.g. like a Gaper's behavior). */
  NORMAL = 0,
  /** Same as MODE_NORMAL, but less resource-intensive. */
  ECONOMIC = 1,
  /** Only blocked by walls and metal blocks. */
  EXPLOSION = 2,
  /** Not blocked by pits. Used by enemies that shoot projectiles at you, such as Hosts. */
  PROJECTILE = 3,
}

declare const enum ProjectilesMode {
  ONE_PROJECTILE = 0,
  /** Uses params.Spread */
  TWO_PROJECTILES = 1,
  /** Uses params.Spread */
  THREE_PROJECTILES = 2,
  /** Uses params.Spread */
  THREE_PROJECTILES_SPREAD = 3,
  /** Uses params.Spread */
  FOUR_PROJECTILES = 4,
  /** Uses params.Spread */
  FIVE_PROJECTILES = 5,
  /** Uses velocity.X as speed. */
  FOUR_PROJECTILES_PLUS_PATTERN = 6,
  /** Uses velocity.X as speed. */
  FOUR_PROJECTILES_X_PATTERN = 7,
  /** Uses velocity.X as speed. */
  EIGHT_PROJECTILES_STAR_PATTERN = 8,
  /**
   * Uses velocity.X as speed.
   * Uses velocity.y as N.
   * To fire in an arc, use params.FireDirectionLimit and params.DotProductLimit.
   */
  N_PROJECTILES_IN_CIRCLE = 9,
}

declare const enum DisplayFlag {
  INVISIBLE = 1 << -1,
  VISIBLE = 1 << 0,
  SHADOW = 1 << 1,
  SHOW_ICON = 1 << 2,
}
