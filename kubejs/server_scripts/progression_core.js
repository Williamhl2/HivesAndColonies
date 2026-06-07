ServerEvents.recipes(event => {
  // Gold Backpack: requiere honey_treat (gate de Productive Bees, Acto II-III)
  event.remove({ output: 'sophisticatedbackpacks:gold_backpack' })

  event.shaped('sophisticatedbackpacks:gold_backpack', [
    'GGG',
    'GBG',
    'GHG'
  ], {
    G: 'minecraft:gold_ingot',
    B: 'sophisticatedbackpacks:iron_backpack',
    H: 'productivebees:honey_treat'
  })

  // Diamond Backpack: requiere Source Gem (gate de Ars Nouveau) + honeycomb (cruce Ars+Bees)
  event.remove({ output: 'sophisticatedbackpacks:diamond_backpack' })

  event.shaped('sophisticatedbackpacks:diamond_backpack', [
    'DCD',
    'GSG',
    'DCD'
  ], {
    D: 'minecraft:diamond',
    C: 'minecraft:honeycomb',
    G: 'ars_nouveau:source_gem',
    S: 'sophisticatedbackpacks:gold_backpack'
  })

  // Netherite Backpack: postgame real (Source Gem Block + netherite)
  event.remove({ output: 'sophisticatedbackpacks:netherite_backpack' })

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

  // Waystone: requiere Ender Pearl + Source Gem (no crafteable antes de Acto II)
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