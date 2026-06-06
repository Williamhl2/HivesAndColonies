ServerEvents.recipes(event => {
  // Pipez upgrades más caros

  event.remove({ output: 'pipez:advanced_upgrade' })
  event.remove({ output: 'pipez:ultimate_upgrade' })

  event.shaped('pipez:advanced_upgrade', [
    'RGR',
    'GUG',
    'RGR'
  ], {
    R: 'minecraft:redstone_block',
    G: 'minecraft:gold_ingot',
    U: 'pipez:improved_upgrade'
  })

  event.shaped('pipez:ultimate_upgrade', [
    'EDE',
    'DUD',
    'EDE'
  ], {
    E: 'minecraft:emerald',
    D: 'minecraft:diamond',
    U: 'pipez:advanced_upgrade'
  })
})