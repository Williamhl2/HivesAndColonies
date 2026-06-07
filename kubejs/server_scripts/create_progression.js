ServerEvents.recipes(event => {
  // Create: gate de herramientas de automatización avanzada
  // La automatización masiva de Create debe llegar DESPUÉS de tener
  // colonia activa (honey_treat) y Ars Nouveau funcionando (source_gem)

  // Mechanical Arm: requiere Source Gem + honey_treat (Acto III)
  // Sin esto, el jugador puede automatizar toda la base antes de que la colonia tenga valor
  event.remove({ output: 'create:mechanical_arm' })

  event.shaped('create:mechanical_arm', [
    'BHB',
    'BSB',
    'BAB'
  ], {
    B: 'create:brass_ingot',
    H: 'productivebees:honey_treat',
    S: 'ars_nouveau:source_gem',
    A: 'create:andesite_alloy'
  })

  // Rotation Speed Controller: requiere Source Gem (Acto III)
  // Permite velocidades arbitrarias — puerta de automatización total
  event.remove({ output: 'create:rotation_speed_controller' })

  event.shaped('create:rotation_speed_controller', [
    'BSB',
    'SCS',
    'BSB'
  ], {
    B: 'create:brass_ingot',
    S: 'ars_nouveau:source_gem',
    C: 'create:cogwheel'
  })

  // Mechanical Crafter: requiere honey_treat (Acto III — bees economía activa)
  // Es el crafting automático de Create, no debe estar disponible desde el inicio
  event.remove({ output: 'create:mechanical_crafter' })

  event.shaped('create:mechanical_crafter', [
    'BCB',
    'CHC',
    'BCB'
  ], {
    B: 'create:brass_ingot',
    C: 'create:cogwheel',
    H: 'productivebees:honey_treat'
  })
})
