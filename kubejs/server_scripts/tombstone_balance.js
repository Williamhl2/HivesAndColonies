ServerEvents.recipes(event => {
  // Corail Tombstone — balance de progresion
  // Las herramientas de muerte deben llegar MID/LATE game
  // Para una civilizacion magica colonial, la tumba debe sentirse como un ritual

  // Soulbound Charm: requiere Source Gem + honeycomb (cruce Ars + Bees, Acto II-III)
  // El soulbound protege items valiosos en la muerte — debe costar Acto II mínimo
  event.remove({ output: 'corail_tombstone:soulbound_charm' })

  event.shaped('corail_tombstone:soulbound_charm', [
    'GSG',
    'SCS',
    'GSG'
  ], {
    G: 'ars_nouveau:source_gem',
    S: 'minecraft:string',
    C: 'minecraft:honeycomb'
  })

  // Tablet of Recall (teletransporte a tumba): requiere Source Gem + Ender Pearl
  // No debe ser trivial — es movilidad de emergencia
  event.remove({ output: 'corail_tombstone:tablet_of_recall' })

  event.shaped('corail_tombstone:tablet_of_recall', [
    ' E ',
    'ESE',
    ' E '
  ], {
    E: 'minecraft:ender_pearl',
    S: 'ars_nouveau:source_gem'
  })

  // Lost Tablet (más potente que Tablet of Recall): Source Gem Block + diamante
  // Esto es postgame
  event.remove({ output: 'corail_tombstone:lost_tablet' })

  event.shaped('corail_tombstone:lost_tablet', [
    'DSD',
    'STS',
    'DSD'
  ], {
    D: 'minecraft:diamond',
    S: 'ars_nouveau:source_gem_block',
    T: 'corail_tombstone:tablet_of_recall'
  })

  // Soulbound Scroll: late-game (Source Gem Block)
  event.remove({ output: 'corail_tombstone:soulbound_scroll' })

  event.shaped('corail_tombstone:soulbound_scroll', [
    'PSP',
    'SBS',
    'PSP'
  ], {
    P: 'minecraft:paper',
    S: 'ars_nouveau:source_gem',
    B: 'minecraft:bone'
  })

  // Receptacle: soporte para tumbas decorativas (Acto II, colonial)
  event.remove({ output: 'corail_tombstone:receptacle' })

  event.shaped('corail_tombstone:receptacle', [
    'SBS',
    'BSB',
    'SBS'
  ], {
    S: 'minecraft:stone_bricks',
    B: 'productivebees:honey_treat'
  })
})
