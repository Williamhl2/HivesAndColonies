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
})