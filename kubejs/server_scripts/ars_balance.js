ServerEvents.recipes(event => {
  // Source Jar: puente entre Ars Nouveau y Productive Bees (requiere honeycomb)
  // Acto II: necesitas tener abejas corriendo antes de almacenar Source
  event.remove({ output: 'ars_nouveau:source_jar' })

  event.shaped('ars_nouveau:source_jar', [
    ' G ',
    'HSH',
    ' G '
  ], {
    G: 'minecraft:glass',
    S: 'ars_nouveau:source_gem',
    H: 'minecraft:honeycomb'
  })

  // Warp Scroll: late-game (colonia avanzada + Ars avanzado)
  // Requiere Source Gem Block para evitar acceso temprano a teletransporte
  event.remove({ output: 'ars_nouveau:warp_scroll' })

  event.shaped('ars_nouveau:warp_scroll', [
    'ESE',
    'SBS',
    'ESE'
  ], {
    E: 'minecraft:ender_pearl',
    S: 'ars_nouveau:source_gem',
    B: 'ars_nouveau:source_gem_block'
  })

  // Bookwyrm Lectern: puerta real de la biblioteca mágica (Acto II-III)
  // Desbloquea almacenamiento y vinculación de libros de hechizos — debe llegar después
  // de tener abejas activas y Source Gem
  event.remove({ output: 'ars_nouveau:bookwyrm_lectern' })

  event.shaped('ars_nouveau:bookwyrm_lectern', [
    'HSH',
    'SLS',
    'HSH'
  ], {
    H: 'minecraft:honeycomb',
    S: 'ars_nouveau:source_gem',
    L: 'minecraft:lectern'
  })

  // Drygmy Charm: granja mágica de mobs (Acto III — requiere Source Gem Block)
  // Muy poderosa — debe costar una inversión real en magia
  event.remove({ output: 'ars_nouveau:drygmy_charm' })

  event.shaped('ars_nouveau:drygmy_charm', [
    'GSG',
    'SBS',
    'GSG'
  ], {
    G: 'minecraft:gold_ingot',
    S: 'ars_nouveau:source_gem_block',
    B: 'minecraft:mossy_cobblestone'
  })

  // Whirlisprig Charm: granja de plantas mágica (Acto II-III)
  // Requiere honeycomb + source_gem como cruce natural Bees+Ars
  event.remove({ output: 'ars_nouveau:whirlisprig_charm' })

  event.shaped('ars_nouveau:whirlisprig_charm', [
    'HSH',
    'SFS',
    'HSH'
  ], {
    H: 'minecraft:honeycomb',
    S: 'ars_nouveau:source_gem',
    F: 'minecraft:fern'
  })
})