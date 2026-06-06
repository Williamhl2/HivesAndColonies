ServerEvents.recipes(event => {
  // Ars Nouveau: automation no tan temprana

  event.remove({ output: 'ars_nouveau:source_jar' })

  event.shaped('ars_nouveau:source_jar', [
    ' G ',
    'GSG',
    ' G '
  ], {
    G: 'minecraft:glass',
    S: 'ars_nouveau:source_gem'
  })
})