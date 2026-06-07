ServerEvents.recipes(event => {
  // Pipez: progresión por actos — cada tier requiere haber avanzado en el pack

  // Basic Upgrade: requiere honey_treat (Acto II — Productive Bees activo)
  event.remove({ output: 'pipez:basic_upgrade' })

  event.shaped('pipez:basic_upgrade', [
    'RHR',
    'HIH',
    'RHR'
  ], {
    R: 'minecraft:redstone',
    H: 'productivebees:honey_treat',
    I: 'minecraft:iron_ingot'
  })

  // Improved Upgrade: requiere Source Gem (Acto II — Ars Nouveau activo)
  event.remove({ output: 'pipez:improved_upgrade' })

  event.shaped('pipez:improved_upgrade', [
    'RGR',
    'GSG',
    'RGR'
  ], {
    R: 'minecraft:redstone',
    G: 'minecraft:gold_ingot',
    S: 'ars_nouveau:source_gem'
  })

  // Advanced Upgrade: requiere bloque de redstone + gold + improved (Acto IV)
  event.remove({ output: 'pipez:advanced_upgrade' })

  event.shaped('pipez:advanced_upgrade', [
    'RGR',
    'GUG',
    'RGR'
  ], {
    R: 'minecraft:redstone_block',
    G: 'minecraft:gold_ingot',
    U: 'pipez:improved_upgrade'
  })

  // Ultimate Upgrade: requiere emerald + diamond + advanced (postgame)
  event.remove({ output: 'pipez:ultimate_upgrade' })

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