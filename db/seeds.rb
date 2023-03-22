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
    name: '14. #34 ?'
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
