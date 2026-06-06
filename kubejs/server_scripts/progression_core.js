ServerEvents.recipes(event => {
  // Backpacks: hacer tiers altos más caros

  event.remove({ output: 'sophisticatedbackpacks:diamond_backpack' })
  event.remove({ output: 'sophisticatedbackpacks:netherite_backpack' })

  event.shaped('sophisticatedbackpacks:diamond_backpack', [
    'DGD',
    'GBG',
    'DGD'
  ], {
    D: 'minecraft:diamond',
    G: 'ars_nouveau:source_gem',
    B: 'sophisticatedbackpacks:gold_backpack'
  })

  event.shaped('sophisticatedbackpacks:netherite_backpack', [
    'NSN',
    'DBD',
    'NSN'
  ], {
    N: 'minecraft:netherite_scrap',
    S: 'ars_nouveau:source_gem_block',
    D: 'minecraft:diamond_block',
    B: 'sophisticatedbackpacks:diamond_backpack'
  })

  // Waystones: no tan early gratis

  event.remove({ output: 'waystones:waystone' })

  event.shaped('waystones:waystone', [
    ' E ',
    'SWS',
    ' E '
  ], {
    E: 'minecraft:ender_pearl',
    S: 'ars_nouveau:source_gem',
    W: 'minecraft:stone_bricks'
  })
})