ServerEvents.recipes(event => {
  // Tom's Simple Storage — gate de progresión

  // Inventory Connector: el hub central de la red de almacenamiento
  // Acceso libre desde el inicio es demasiado poderoso — requiere Acto II (source_gem + iron)
  event.remove({ output: 'toms_storage:ts.inventory_connector' })

  event.shaped('toms_storage:ts.inventory_connector', [
    'IHI',
    'HSH',
    'IHI'
  ], {
    I: 'minecraft:iron_ingot',
    H: 'minecraft:honeycomb',
    S: 'ars_nouveau:source_gem'
  })

  // Inventory Cable Connector: vinculación inalámbrica de inventarios
  // Requiere Source Gem Block — postgame de almacenamiento
  event.remove({ output: 'toms_storage:ts.inventory_cable_connector' })

  event.shaped('toms_storage:ts.inventory_cable_connector', [
    'ISI',
    'SCS',
    'ISI'
  ], {
    I: 'minecraft:iron_ingot',
    S: 'ars_nouveau:source_gem_block',
    C: 'toms_storage:ts.inventory_connector'
  })
})
