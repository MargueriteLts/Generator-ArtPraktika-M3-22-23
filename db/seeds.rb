@prototypes_data = [
  {
    name: '1. #22 Simple Circle Generator'
  },
  {
    name: '2. #23 Using images'
  },
  {
    name: '3. #24 More images, improved data structure'
  },
  {
    name: '4. #25 The Store concept'
  },
  {
    name: '5. #26 Using Promise'
  },
  {
    name: '6. #27 Using Store with Promise'
  },
  {
    name: '7. #28 Cascading Promises'
  },
  {
    name: '8. #29 Using Promise.all / My work'
  },
  {
    name: '9. #29 Using Promise.all / Copied from Github'
  },
  {
    name: '10. #30 First algorythmic design'
  },
  {
    name: '11. #31 First Canvas'
  },
  {
    name: '12. #32 Canvas Basics'
  },
  {
    name: '13. #33 Separated Data Layer'
  },
  {
    name: '14. #34 p5 with UI'
  },
  {
    name: '15. #35 Previous p5 Sketch on HTML'
  },
  {
    name: '16. #36 Previous p5 Sketch(14/34) with slider'
  },
  {
    name: '17. #37 Tiling 1'
  },
  {
    name: '18. #38 Tiling 2'
  },
  {
    name: '19. #39 Tiling 2 with UI - todo'
  },
  {
    name: '20. #40 Circles'
  },
  {
    name: '21 / 1. Shape background'
  },
  {
    name: '22 / 2. Random background'
  },
  {
    name: '23 / 3. Random img'
  },
  {
    name: '24 / 4. Random background + img & redraw on mousepress'
  },
  {
    name: '25 / 5. Previous + UI'
  },
  {
    name: '26 / Prototype 42 from Github'
  },
  {
    name: '27 / 6. Continuing Prototype 5 - try to implement choice of background & random without react not working yet'
  },
  {
    name: '28 / 7. Continuing Prototype 5 - Working React for Reset button'
  },
  {
    name: '29 / 8. Continuing Prototype 7 - Toggle render UI: FullRandom/ChoiceRandom'
  },
  {
    name: '30 / 9. Continuing Prototype 8 - Try add Text with react component (jai reussi a placer le txt par dessus, mais linput marche pas bien)'
  },
  {
    name: '31 / 10. Continuing Prototype 9 - input area on artwork'
  },
  {
    name: '32 / 11. Continuing Prototype 10 - input on the side'
  },
  {
    name: '33 / 12. Continuing Prototype 11 - Random typo - Not workin, je sais pas comment afficher mes spans'
  },
  {
    name: '34 / 13. Continuing Prototype 12 - Random typo - working but not working.... I managed to otobrajat span mais en text....Bon jsp jppALdmnkvbcfjzsdfcxvjmgbhnzdkhfgbjnlsedwujikgtrhytysruFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF'
  },
  {
    name: '35 / 14. Continuing Prototype 12 - '
  }
]

def seed
  reset_db
  create_prototypes
end

def reset_db
  Rake::Task['db:drop'].invoke
  Rake::Task['db:create'].invoke
  Rake::Task['db:migrate'].invoke
end

def create_prototypes
  @prototypes_data.each do |prototype_data|
    prototype = Prototype.create!(prototype_data)
    puts "#{prototype.name} prototype just created"
  end
end

seed
