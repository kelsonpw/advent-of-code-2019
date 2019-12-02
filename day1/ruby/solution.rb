def inputs
  File.read("../input.txt").split.map(&:to_i)
end

def get_fuel(mass)
  (mass / 3).floor - 2
end

def get_fuel_recursive(mass)
  fuel_mass = get_fuel(mass)
  return 0 unless fuel_mass > 0
  fuel_mass + get_fuel_recursive(fuel_mass)
end

def get_total_fuel
  inputs.sum { |mass| get_fuel(mass) }
end

def get_total_recursive_fuel
  inputs.sum { |mass| get_fuel_recursive(mass) }
end

def get_results
  puts :total => get_total_fuel
  puts :total_recursive => get_total_recursive_fuel
end

get_results
