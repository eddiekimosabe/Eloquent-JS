// HINTS...

// Here is what I came up with. I’ve put parentheses around internal functions.

// Module "grid"
//   Vector
//   Grid
//   directions

// Module "world"
//   (randomElement)
//   (elementFromChar)
//   (charFromElement)
//   View
//   World
//   LifelikeWorld
//   directions [re-exported]

// Module "simple_ecosystem"
//   (randomElement) [duplicated]
//   (directionNames)
//   (dirPlus)
//   Wall
//   BouncingCritter
//   WallFollower

// Module "ecosystem"
//   Wall [duplicated]
//   Plant
//   PlantEater
//   SmartPlantEater
//   Tiger
// I have re-exported the directions array from the grid module from world, so that modules built on that (the ecosystems) don’t have to know or worry about the existence of the grid module.
// I also duplicated two generic and tiny helper values (randomElement and Wall) since they are used as internal details in different contexts, and do not belong in the interfaces for these modules.



// code below here:







