// const problems = [
// {
//   text: "A bag contains red and blue marbles in the ratio 3:5. If there are 25 blue marbles, how many red marbles are there?",
//   circleItems: ["3:5", "25"],
//   underlineItems: ["how many red marbles are there"],
//   boxItems: ["ratio", "red"],
//   solution: 15,
//   operation: "ratio"
// },
// {
//   "text": "A square has a perimeter of 36 cm. What is its area?",
//   "circleItems": ["36 cm"],
//   "underlineItems": ["What is its area"],
//   "boxItems": ["square", "perimeter"],
//   "solution": 81,
//   "operation": "area"
// },
// {
//   text: "A rectangle has a length of 15 m and an area of 90 m². What is its width?",
//   circleItems: ["15 m", "90 m²"],
//   underlineItems: ["What is its width"],
//   boxItems: ["rectangle", "area"],
//   solution: 6,
//   operation: "width"
// },
// {
//   text: "A triangle has base 12 cm and height 8 cm. What is its area?",
//   circleItems: ["12 cm", "8 cm"],
//   underlineItems: ["What is its area"],
//   boxItems: ["triangle", "area"],
//   solution: 48,
//   operation: "area"
// },
// {
//   text: "The average of 5 numbers is 20. If one number is 25, what is the average of the remaining four?",
//   circleItems: ["5 numbers", "20", "25"],
//   underlineItems: ["what is the average of the remaining four"],
//   boxItems: ["average", "remaining"],
//   solution: 18.75,
//   operation: "average"
// },
// {
//   text: "A student scores 75, 82, and 90 in three tests. What should he score in the fourth test to have an average of 85?",
//   circleItems: ["75", "82", "90", "85"],
//   underlineItems: ["What should he score in the fourth test"],
//   boxItems: ["average", "score"],
//   solution: 93,
//   operation: "average"
// },
// {
//   text: "The average weight of 6 boxes is 15 kg. When 2 more boxes are added, the average becomes 17 kg. What is the total weight of the 2 new boxes?",
//   circleItems: ["6 boxes", "15 kg", "2 more", "17 kg"],
//   underlineItems: ["What is the total weight of the 2 new boxes"],
//   boxItems: ["average", "total weight"],
//   solution: 46,
//   operation: "average"
// },
//   {
//     text: "A recipe calls for 2 cups of flour, 1 cup of sugar, and 3 eggs to make 12 cookies. If you only want to make 6 cookies, how much flour should you use?",
//     circleItems: ["2 cups", "12 cookies", "6 cookies"],
//     underlineItems: ["how much flour should you use"],
//     boxItems: ["much"],
//     eliminateItems: ["1 cup of sugar", "3 eggs", "(Ignore the other ingredients for this question)"],
//     solution: 1,
//     operation: "proportion"
//   },
  
// ];

// const problems = [
//   {
//     text: "A square has a perimeter of 36 cm. What is its area?",
//     circleItems: ["36 cm"],
//     underlineItems: ["What is its area"],
//     boxItems: ["square", "perimeter", "area"],
//     solution: 81,
//     operation: "area",
//     formulas: [
//       "P_{square} = 4s",
//       "A_{square} = s^2"
//     ]
//   },
//   {
//     text: "A rectangle has a length of 15 m and an area of 90 m². What is its width?",
//     circleItems: ["15 m", "90 m²"],
//     underlineItems: ["What is its width"],
//     boxItems: ["rectangle", "area", "length", "width"],
//     solution: 6,
//     operation: "width",
//     formulas: [
//       "A_{rectangle} = l \\times w"
//     ]
//   },
//   {
//     text: "A triangle has base 12 cm and height 8 cm. What is its area?",
//     circleItems: ["12 cm", "8 cm"],
//     underlineItems: ["What is its area"],
//     boxItems: ["triangle", "area", "base", "height"],
//     solution: 48,
//     operation: "area",
//     formulas: [
//       "A_{triangle} = \\frac{1}{2} \\times b \\times h"
//     ]
//   },
//   {
//     text: "A circle has a radius of 7 cm. What is its area? (Use π = 22/7)",
//     circleItems: ["7 cm", "π = 22/7"],
//     underlineItems: ["What is its area"],
//     boxItems: ["circle", "radius", "area"],
//     solution: 154,
//     operation: "area",
//     formulas: [
//       "A_{circle} = \\pi r^2"
//     ]
//   },
//   {
//     text: "A rectangle has a perimeter of 50 m and width of 10 m. What is its length?",
//     circleItems: ["50 m", "10 m"],
//     underlineItems: ["What is its length"],
//     boxItems: ["rectangle", "perimeter", "width", "length"],
//     solution: 15,
//     operation: "length",
//     formulas: [
//       "P_{rectangle} = 2(l + w)"
//     ]
//   },
//   {
//     text: "A parallelogram has base 9 cm and height 5 cm. What is its area?",
//     circleItems: ["9 cm", "5 cm"],
//     underlineItems: ["What is its area"],
//     boxItems: ["parallelogram", "area", "base", "height"],
//     solution: 45,
//     operation: "area",
//     formulas: [
//       "A_{parallelogram} = b \\times h"
//     ]
//   },
//   {
//     text: "A trapezoid has bases of 6 cm and 10 cm, and height of 4 cm. What is its area?",
//     circleItems: ["6 cm", "10 cm", "4 cm"],
//     underlineItems: ["What is its area"],
//     boxItems: ["trapezoid", "area", "bases", "height"],
//     solution: 32,
//     operation: "area",
//     formulas: [
//       "A_{trapezoid} = \\frac{1}{2}(b_1 + b_2) \\times h"
//     ]
//   },
//   {
//     text: "A square has an area of 144 m². What is its perimeter?",
//     circleItems: ["144 m²"],
//     underlineItems: ["What is its perimeter"],
//     boxItems: ["square", "area", "perimeter"],
//     solution: 48,
//     operation: "perimeter",
//     formulas: [
//       "A_{square} = s^2",
//       "P_{square} = 4s"
//     ]
//   },
//   {
//     text: "A rectangular garden is 12 m long and 8 m wide. What is the length of fencing needed to enclose it?",
//     circleItems: ["12 m", "8 m"],
//     underlineItems: ["What is the length of fencing needed"],
//     boxItems: ["rectangular", "fencing", "length", "long", "wide"],
//     solution: 40,
//     operation: "perimeter",
//     formulas: [
//       "P_{rectangle} = 2(l + w)"
//     ]
//   },
//   {
//     text: "A right triangle has legs measuring 5 cm and 12 cm. What is its area?",
//     circleItems: ["5 cm", "12 cm"],
//     underlineItems: ["What is its area"],
//     boxItems: ["right triangle", "area", "legs"],
//     solution: 30,
//     operation: "area",
//     formulas: [
//       "A_{right\\ triangle} = \\frac{1}{2} \\times a \\times b"
//     ]
//   },
//   {
//     text: "A rhombus has diagonals of 10 cm and 14 cm. What is its area?",
//     circleItems: ["10 cm", "14 cm"],
//     underlineItems: ["What is its area"],
//     boxItems: ["rhombus", "area", "diagonals"],
//     solution: 70,
//     operation: "area",
//     formulas: [
//       "A_{rhombus} = \\frac{1}{2} \\times d_1 \\times d_2"
//     ]
//   },
//   {
//     text: "A regular hexagon has sides of 4 cm each. What is its perimeter?",
//     circleItems: ["4 cm"],
//     underlineItems: ["What is its perimeter"],
//     boxItems: ["hexagon", "perimeter", "each"],
//     solution: 24,
//     operation: "perimeter",
//     formulas: [
//       "P_{hexagon} = 6s"
//     ]
//   },
//   {
//     text: "A rectangle has length twice its width. If the perimeter is 60 cm, what is its area?",
//     circleItems: ["60 cm"],
//     underlineItems: ["what is its area"],
//     boxItems: ["length", "area", "width", "perimeter", "rectangle"],
//     solution: 200,
//     operation: "area",
//     formulas: [
//       "P_{rectangle} = 2(l + w)",
//       "A_{rectangle} = l \\times w"
//     ]
//   },
//   {
//     text: "A circular pond has diameter of 14 m. What is its circumference? (Use π = 22/7)",
//     circleItems: ["14 m", "π = 22/7"],
//     underlineItems: ["What is its circumference"],
//     boxItems: ["circular", "circumference", "diameter"],
//     solution: 44,
//     operation: "perimeter",
//     formulas: [
//       "C = \\pi d"
//     ]
//   },
//   {
//     text: "An equilateral triangle has sides of 9 cm each. What is its perimeter?",
//     circleItems: ["9 cm"],
//     underlineItems: ["What is its perimeter"],
//     boxItems: ["equilateral triangle", "perimeter", "sides", "each"],
//     solution: 27,
//     operation: "perimeter",
//     formulas: [
//       "P_{equilateral\\ triangle} = 3s"
//     ]
//   }
// ];


const problems = [
  // BEGINNER LEVEL (1-20)
  {
    text: "The ratio of boys to girls in a class is 3:5. If there are 15 boys, how many girls are there?",
    circleItems: ["3:5", "15 boys"],
    underlineItems: ["how many girls"],
    boxItems: ["ratio", "boys", "girls"],
    solution: 25,
    operation: "ratio comparison",
    formulas: [
      "\\frac{boys}{girls} = \\frac{3}{5}",
      "girls = \\frac{5}{3} \\times boys"
    ]
  },
  {
    text: "A recipe requires 2 cups of flour for every 3 cups of milk. If you use 8 cups of flour, how many cups of milk do you need?",
    circleItems: ["2 cups of flour", "3 cups of milk", "8 cups of flour"],
    underlineItems: ["how many cups of milk"],
    boxItems: ["recipe", "ratio", "flour", "milk"],
    solution: 12,
    operation: "ratio comparison",
    formulas: [
      "\\frac{flour}{milk} = \\frac{2}{3}",
      "milk = \\frac{3}{2} \\times flour"
    ]
  },
  {
    text: "In a box of colored pencils, the ratio of red to blue pencils is 4:7. If there are 28 blue pencils, how many red pencils are there?",
    circleItems: ["4:7", "28 blue"],
    underlineItems: ["how many red pencils"],
    boxItems: ["ratio", "red", "blue", "pencils"],
    solution: 16,
    operation: "ratio comparison",
    formulas: [
      "\\frac{red}{blue} = \\frac{4}{7}",
      "red = \\frac{4}{7} \\times blue"
    ]
  },
  {
    text: "The ratio of cats to dogs at a shelter is 5:3. If there are 40 animals in total, how many are cats?",
    circleItems: ["5:3", "40 animals"],
    underlineItems: ["how many are cats"],
    boxItems: ["ratio", "cats", "dogs", "total"],
    solution: 25,
    operation: "part-to-whole ratio",
    formulas: [
      "\\frac{cats}{cats + dogs} = \\frac{5}{5+3}"
    ]
  },
  {
    text: "A fruit basket contains apples and oranges in the ratio 2:3. If there are 10 apples, how many oranges are there?",
    circleItems: ["2:3", "10 apples"],
    underlineItems: ["how many oranges"],
    boxItems: ["ratio", "apples", "oranges"],
    solution: 15,
    operation: "ratio comparison",
    formulas: [
      "\\frac{apples}{oranges} = \\frac{2}{3}",
      "oranges = \\frac{3}{2} \\times apples"
    ]
  },
  {
    text: "In a bag of marbles, the ratio of red to green marbles is 3:4. If there are 21 red marbles, how many green marbles are there?",
    circleItems: ["3:4", "21 red"],
    underlineItems: ["how many green marbles"],
    boxItems: ["ratio", "red", "green", "marbles"],
    solution: 28,
    operation: "ratio comparison",
    formulas: [
      "\\frac{red}{green} = \\frac{3}{4}",
      "green = \\frac{4}{3} \\times red"
    ]
  },
  {
    text: "A recipe calls for sugar and flour in the ratio 1:6. If 12 cups of flour are used, how many cups of sugar are needed?",
    circleItems: ["1:6", "12 cups of flour"],
    underlineItems: ["how many cups of sugar"],
    boxItems: ["ratio", "sugar", "flour"],
    solution: 2,
    operation: "ratio comparison",
    formulas: [
      "\\frac{sugar}{flour} = \\frac{1}{6}",
      "sugar = \\frac{1}{6} \\times flour"
    ]
  },
  {
    text: "The lengths of two sides of a triangle are in the ratio 5:7. If the shorter side is 15 cm, what is the length of the longer side?",
    circleItems: ["5:7", "15 cm"],
    underlineItems: ["what is the length of the longer side"],
    boxItems: ["ratio", "shorter side", "longer side"],
    solution: 21,
    operation: "ratio comparison",
    formulas: [
      "\\frac{shorter}{longer} = \\frac{5}{7}",
      "longer = \\frac{7}{5} \\times shorter"
    ]
  },
  {
    text: "Water and juice are mixed in the ratio 2:3. If 10 liters of water are used, how many liters of juice are needed?",
    circleItems: ["2:3", "10 liters of water"],
    underlineItems: ["how many liters of juice"],
    boxItems: ["ratio", "water", "juice"],
    solution: 15,
    operation: "ratio comparison",
    formulas: [
      "\\frac{water}{juice} = \\frac{2}{3}",
      "juice = \\frac{3}{2} \\times water"
    ]
  },
  {
    text: "In a school, the ratio of teachers to students is 1:25. If there are 20 teachers, how many students are there?",
    circleItems: ["1:25", "20 teachers"],
    underlineItems: ["how many students"],
    boxItems: ["ratio", "teachers", "students"],
    solution: 500,
    operation: "ratio comparison",
    formulas: [
      "\\frac{teachers}{students} = \\frac{1}{25}",
      "students = 25 \\times teachers"
    ]
  },
  {
    text: "At a party, the ratio of adults to children is 7:3. If there are 28 adults, how many children are there?",
    circleItems: ["7:3", "28 adults"],
    underlineItems: ["how many children"],
    boxItems: ["ratio", "adults", "children"],
    solution: 12,
    operation: "ratio comparison",
    formulas: [
      "\\frac{adults}{children} = \\frac{7}{3}",
      "children = \\frac{3}{7} \\times adults"
    ]
  },
  {
    text: "A mixture contains salt and sugar in the ratio 3:5. If there are 24 grams of salt, how many grams of sugar are there?",
    circleItems: ["3:5", "24 grams of salt"],
    underlineItems: ["how many grams of sugar"],
    boxItems: ["ratio", "salt", "sugar"],
    solution: 40,
    operation: "ratio comparison",
    formulas: [
      "\\frac{salt}{sugar} = \\frac{3}{5}",
      "sugar = \\frac{5}{3} \\times salt"
    ]
  },
  {
    text: "The ratio of cars to trucks in a parking lot is 8:3. If there are 24 trucks, how many cars are there?",
    circleItems: ["8:3", "24 trucks"],
    underlineItems: ["how many cars"],
    boxItems: ["ratio", "cars", "trucks"],
    solution: 64,
    operation: "ratio comparison",
    formulas: [
      "\\frac{cars}{trucks} = \\frac{8}{3}",
      "cars = \\frac{8}{3} \\times trucks"
    ]
  },
  {
    text: "The ratio of red to white roses in a garden is 5:2. If there are 35 red roses, how many white roses are there?",
    circleItems: ["5:2", "35 red roses"],
    underlineItems: ["how many white roses"],
    boxItems: ["ratio", "red", "white", "roses"],
    solution: 14,
    operation: "ratio comparison",
    formulas: [
      "\\frac{red}{white} = \\frac{5}{2}",
      "white = \\frac{2}{5} \\times red"
    ]
  },
  {
    text: "A coin collection has pennies and nickels in the ratio 4:1. If there are 100 pennies, how many nickels are there?",
    circleItems: ["4:1", "100 pennies"],
    underlineItems: ["how many nickels"],
    boxItems: ["ratio", "pennies", "nickels"],
    solution: 25,
    operation: "ratio comparison",
    formulas: [
      "\\frac{pennies}{nickels} = \\frac{4}{1}",
      "nickels = \\frac{1}{4} \\times pennies"
    ]
  },
  {
    text: "The width and length of a rectangle are in the ratio 3:5. If the width is 12 cm, what is the length?",
    circleItems: ["3:5", "12 cm"],
    underlineItems: ["what is the length"],
    boxItems: ["ratio", "width", "length", "rectangle"],
    solution: 20,
    operation: "ratio comparison",
    formulas: [
      "\\frac{width}{length} = \\frac{3}{5}",
      "length = \\frac{5}{3} \\times width"
    ]
  },
  {
    text: "In a math test, the ratio of correct to incorrect answers is 7:2. If there are 14 correct answers, how many answers are incorrect?",
    circleItems: ["7:2", "14 correct"],
    underlineItems: ["how many answers are incorrect"],
    boxItems: ["ratio", "correct", "incorrect", "answers"],
    solution: 4,
    operation: "ratio comparison",
    formulas: [
      "\\frac{correct}{incorrect} = \\frac{7}{2}",
      "incorrect = \\frac{2}{7} \\times correct"
    ]
  },
  {
    text: "A basket contains blue, red, and green balls in the ratio 2:3:4. If there are 18 red balls, how many green balls are there?",
    circleItems: ["2:3:4", "18 red"],
    underlineItems: ["how many green balls"],
    boxItems: ["ratio", "blue", "red", "green", "balls"],
    solution: 24,
    operation: "ratio comparison",
    formulas: [
      "\\frac{red}{green} = \\frac{3}{4}",
      "green = \\frac{4}{3} \\times red"
    ]
  },
  {
    text: "The ratio of men to women in a company is 4:5. If there are 36 men, how many women are there?",
    circleItems: ["4:5", "36 men"],
    underlineItems: ["how many women"],
    boxItems: ["ratio", "men", "women", "company"],
    solution: 45,
    operation: "ratio comparison",
    formulas: [
      "\\frac{men}{women} = \\frac{4}{5}",
      "women = \\frac{5}{4} \\times men"
    ]
  },
  {
    text: "The ratio of milk to water in a mixture is 2:3. If the mixture contains 12 liters of milk, how many liters of water does it contain?",
    circleItems: ["2:3", "12 liters of milk"],
    underlineItems: ["how many liters of water"],
    boxItems: ["ratio", "milk", "water", "mixture"],
    solution: 18,
    operation: "ratio comparison",
    formulas: [
      "\\frac{milk}{water} = \\frac{2}{3}",
      "water = \\frac{3}{2} \\times milk"
    ]
  },

  // INTERMEDIATE LEVEL (21-60)
  {
    text: "A bag contains red, blue, and green marbles in the ratio 2:3:5. If there are 30 marbles in total, how many red marbles are there?",
    circleItems: ["2:3:5", "30 marbles"],
    underlineItems: ["how many red marbles"],
    boxItems: ["ratio", "red", "blue", "green", "marbles", "total"],
    solution: 6,
    operation: "part-to-whole ratio",
    formulas: [
      "\\frac{red}{total} = \\frac{2}{2+3+5}",
      "red = \\frac{2}{10} \\times total"
    ]
  },
  {
    text: "In a box of colored balls, the ratio of red : blue : green : yellow balls is 3:4:5:8. If there are 60 balls in total, how many yellow balls are there?",
    circleItems: ["3:4:5:8", "60 balls"],
    underlineItems: ["how many yellow balls"],
    boxItems: ["ratio", "red", "blue", "green", "yellow", "balls", "total"],
    solution: 24,
    operation: "part-to-whole ratio",
    formulas: [
      "\\frac{yellow}{total} = \\frac{8}{3+4+5+8}",
      "yellow = \\frac{8}{20} \\times total"
    ]
  },
  {
    text: "The ratio of sand to cement to gravel in a concrete mix is 3:1:4. How much sand is needed to make 40 kg of this concrete mix?",
    circleItems: ["3:1:4", "40 kg"],
    underlineItems: ["how much sand"],
    boxItems: ["ratio", "sand", "cement", "gravel", "concrete mix"],
    solution: 15,
    operation: "part-to-whole ratio",
    formulas: [
      "\\frac{sand}{total} = \\frac{3}{3+1+4}",
      "sand = \\frac{3}{8} \\times total"
    ]
  },
  {
    text: "In a school, the ratio of students who walk : bike : take bus : get driven is 5:2:6:7. If 120 students get driven to school, how many students are there in total?",
    circleItems: ["5:2:6:7", "120 students"],
    underlineItems: ["how many students are there in total"],
    boxItems: ["ratio", "walk", "bike", "bus", "driven", "students", "total"],
    solution: 343,
    operation: "part-to-total ratio",
    formulas: [
      "\\frac{driven}{total} = \\frac{7}{5+2+6+7}",
      "total = \\frac{5+2+6+7}{7} \\times driven"
    ]
  },
  {
    text: "A punch recipe calls for orange juice, pineapple juice, and soda water in the ratio 3:2:5. How many liters of pineapple juice are needed to make 10 liters of punch?",
    circleItems: ["3:2:5", "10 liters"],
    underlineItems: ["how many liters of pineapple juice"],
    boxItems: ["ratio", "orange juice", "pineapple juice", "soda water", "punch"],
    solution: 2,
    operation: "part-to-whole ratio",
    formulas: [
      "\\frac{pineapple}{total} = \\frac{2}{3+2+5}",
      "pineapple = \\frac{2}{10} \\times total"
    ]
  },
  {
    text: "In a paint mixture, the ratio of red paint to yellow paint to blue paint is 4:3:2. If 18 liters of yellow paint are used, how much blue paint is needed?",
    circleItems: ["4:3:2", "18 liters of yellow"],
    underlineItems: ["how much blue paint"],
    boxItems: ["ratio", "red", "yellow", "blue", "paint"],
    solution: 12,
    operation: "ratio comparison",
    formulas: [
      "\\frac{yellow}{blue} = \\frac{3}{2}",
      "blue = \\frac{2}{3} \\times yellow"
    ]
  },
  {
    text: "Three numbers are in the ratio 2:3:5. If the sum of the numbers is 50, what is the largest number?",
    circleItems: ["2:3:5", "50"],
    underlineItems: ["what is the largest number"],
    boxItems: ["ratio", "sum", "largest"],
    solution: 25,
    operation: "part-to-whole ratio",
    formulas: [
      "\\frac{largest}{total} = \\frac{5}{2+3+5}",
      "largest = \\frac{5}{10} \\times total"
    ]
  },
  {
    text: "The ratio of men to women to children at an event is 4:5:3. If there are 60 women, how many people are there in total?",
    circleItems: ["4:5:3", "60 women"],
    underlineItems: ["how many people are there in total"],
    boxItems: ["ratio", "men", "women", "children", "total", "people"],
    solution: 144,
    operation: "part-to-total ratio",
    formulas: [
      "\\frac{women}{total} = \\frac{5}{4+5+3}",
      "total = \\frac{4+5+3}{5} \\times women"
    ]
  },
  {
    text: "In a fruit salad, the ratio of apples to oranges to bananas is 3:2:4. If there are 27 pieces of fruit in total, how many oranges are there?",
    circleItems: ["3:2:4", "27 pieces"],
    underlineItems: ["how many oranges"],
    boxItems: ["ratio", "apples", "oranges", "bananas", "fruit", "total"],
    solution: 6,
    operation: "part-to-whole ratio",
    formulas: [
      "\\frac{oranges}{total} = \\frac{2}{3+2+4}",
      "oranges = \\frac{2}{9} \\times total"
    ]
  },
  {
    text: "The angles in a triangle are in the ratio 2:3:4. What is the measure of the largest angle?",
    circleItems: ["2:3:4"],
    underlineItems: ["what is the measure of the largest angle"],
    boxItems: ["ratio", "angles", "triangle", "largest"],
    solution: 80,
    operation: "part-to-whole ratio",
    formulas: [
      "sum of angles in triangle = 180°",
      "\\frac{largest}{180} = \\frac{4}{2+3+4}",
      "largest = \\frac{4}{9} \\times 180"
    ]
  },
  {
    text: "Income is distributed among A, B, and C in the ratio 2:3:5. If C gets $5000, what is the total amount distributed?",
    circleItems: ["2:3:5", "$5000"],
    underlineItems: ["what is the total amount"],
    boxItems: ["ratio", "income", "distributed", "total"],
    solution: 10000,
    operation: "part-to-total ratio",
    formulas: [
      "\\frac{C's share}{total} = \\frac{5}{2+3+5}",
      "total = \\frac{2+3+5}{5} \\times C's share"
    ]
  },
  {
    text: "The weights of three packages are in the ratio 3:4:5. If the heaviest package weighs 20 kg, what's the total weight of all packages?",
    circleItems: ["3:4:5", "20 kg"],
    underlineItems: ["what's the total weight"],
    boxItems: ["ratio", "weights", "packages", "heaviest", "total"],
    solution: 48,
    operation: "part-to-total ratio",
    formulas: [
      "\\frac{heaviest}{total} = \\frac{5}{3+4+5}",
      "total = \\frac{3+4+5}{5} \\times heaviest"
    ]
  },
  {
    text: "An alloy contains copper, zinc, and tin in the ratio 5:3:2. How much zinc is needed to make 30 kg of the alloy?",
    circleItems: ["5:3:2", "30 kg"],
    underlineItems: ["how much zinc"],
    boxItems: ["ratio", "copper", "zinc", "tin", "alloy"],
    solution: 9,
    operation: "part-to-whole ratio",
    formulas: [
      "\\frac{zinc}{total} = \\frac{3}{5+3+2}",
      "zinc = \\frac{3}{10} \\times total"
    ]
  },
  {
    text: "On a map, 2 cm represents 5 km. What is the actual distance if the distance on the map is 8 cm?",
    circleItems: ["2 cm", "5 km", "8 cm"],
    underlineItems: ["what is the actual distance"],
    boxItems: ["ratio", "map", "actual distance", "map distance"],
    solution: 20,
    operation: "unit conversion",
    formulas: [
      "\\frac{map distance}{actual distance} = \\frac{2 cm}{5 km}",
      "actual distance = \\frac{5 km}{2 cm} \\times map distance"
    ]
  },
  {
    text: "A car travels 240 miles on 10 gallons of gas. At this rate, how many miles can it travel on 16 gallons?",
    circleItems: ["240 miles", "10 gallons", "16 gallons"],
    underlineItems: ["how many miles"],
    boxItems: ["ratio", "miles", "gallons", "rate"],
    solution: 384,
    operation: "rate",
    formulas: [
      "\\frac{miles}{gallons} = \\frac{240}{10} = 24",
      "miles = 24 \\times gallons"
    ]
  },
  {
    text: "A machine produces 45 parts in 3 hours. How many parts does it produce in 8 hours?",
    circleItems: ["45 parts", "3 hours", "8 hours"],
    underlineItems: ["how many parts"],
    boxItems: ["ratio", "parts", "hours", "produces"],
    solution: 120,
    operation: "rate",
    formulas: [
      "\\frac{parts}{hours} = \\frac{45}{3} = 15",
      "parts = 15 \\times hours"
    ]
  },
  {
    text: "The ratio of students to teachers in a school is 25:2. If there are 750 students, how many teachers are there?",
    circleItems: ["25:2", "750 students"],
    underlineItems: ["how many teachers"],
    boxItems: ["ratio", "students", "teachers"],
    solution: 60,
    operation: "ratio comparison",
    formulas: [
      "\\frac{students}{teachers} = \\frac{25}{2}",
      "teachers = \\frac{2}{25} \\times students"
    ]
  },
  {
    text: "A recipe for 6 people requires 300g of rice. How much rice is needed for 10 people?",
    circleItems: ["6 people", "300g", "10 people"],
    underlineItems: ["how much rice"],
    boxItems: ["ratio", "recipe", "people", "rice"],
    solution: 500,
    operation: "proportional reasoning",
    formulas: [
      "\\frac{rice}{people} = \\frac{300g}{6}",
      "rice = \\frac{300g}{6} \\times people"
    ]
  },
  {
    text: "If 4 workers can complete a task in 10 days, how many days would it take 5 workers to complete the same task?",
    circleItems: ["4 workers", "10 days", "5 workers"],
    underlineItems: ["how many days"],
    boxItems: ["ratio", "workers", "days", "task"],
    solution: 8,
    operation: "inverse proportion",
    formulas: [
      "workers \\times days = constant",
      "4 \\times 10 = 5 \\times days",
      "days = \\frac{4 \\times 10}{5}"
    ]
  },
  {
    text: "If 7 is to 21 as 4 is to n, what is the value of n?",
    circleItems: ["7", "21", "4"],
    underlineItems: ["what is the value of n"],
    boxItems: ["ratio", "value", "proportion"],
    solution: 12,
    operation: "proportion",
    formulas: [
      "\\frac{7}{21} = \\frac{4}{n}",
      "n = \\frac{21 \\times 4}{7}"
    ]
  },
  {
    text: "A car travels 150 miles in 3 hours. How far will it travel in 5 hours at the same speed?",
    circleItems: ["150 miles", "3 hours", "5 hours"],
    underlineItems: ["how far"],
    boxItems: ["ratio", "car", "miles", "hours", "speed"],
    solution: 250,
    operation: "rate",
    formulas: [
      "\\frac{miles}{hours} = \\frac{150}{3} = 50",
      "miles = 50 \\times hours"
    ]
  },
  {
    text: "If a 12-foot ladder casts a 9-foot shadow, how tall is a building that casts a 15-foot shadow at the same time of day?",
    circleItems: ["12-foot ladder", "9-foot shadow", "15-foot shadow"],
    underlineItems: ["how tall is a building"],
    boxItems: ["ratio", "ladder", "building", "shadow", "tall"],
    solution: 20,
    operation: "proportion",
    formulas: [
      "\\frac{ladder height}{ladder shadow} = \\frac{building height}{building shadow}",
      "building height = \\frac{ladder height \\times building shadow}{ladder shadow}"
    ]
  },
  {
    text: "A scale model of a car is built in the ratio 1:24. If the model is 15 cm long, what is the length of the actual car in meters?",
    circleItems: ["1:24", "15 cm"],
    underlineItems: ["what is the length of the actual car in meters"],
    boxItems: ["ratio", "scale model", "car", "length", "actual"],
    solution: 3.6,
    operation: "scale factor and unit conversion",
    formulas: [
      "\\frac{model length}{actual length} = \\frac{1}{24}",
      "actual length = 24 \\times model length",
      "3.6 m = 360 cm = 24 \\times 15 cm"
    ]
  },
  {
    text: "The ratio of copper to zinc in brass is 7:3. How much copper is needed to make 30 kg of brass?",
    circleItems: ["7:3", "30 kg"],
    underlineItems: ["how much copper"],
    boxItems: ["ratio", "copper", "zinc", "brass"],
    solution: 21,
    operation: "part-to-whole ratio",
    formulas: [
      "\\frac{copper}{total} = \\frac{7}{7+3}",
      "copper = \\frac{7}{10} \\times total"
    ]
  },
  {
    text: "If 8 ounces of pure alcohol is added to 32 ounces of water, what is the ratio of alcohol to the total mixture?",
    circleItems: ["8 ounces", "32 ounces"],
    underlineItems: ["what is the ratio of alcohol to the total mixture"],
    boxItems: ["ratio", "alcohol", "water", "mixture", "total"],
    solution: "1:5",
    operation: "part-to-whole ratio",
    formulas: [
      "\\frac{alcohol}{total} = \\frac{8}{8+32} = \\frac{8}{40} = \\frac{1}{5}"
    ]
  },
  {
    text: "A solution contains 20% salt by weight. What is the ratio of salt to water in this solution?",
    circleItems: ["20%"],
    underlineItems: ["what is the ratio of salt to water"],
    boxItems: ["ratio", "salt", "water", "solution", "weight"],
    solution: "1:4",
    operation: "percent to ratio conversion",
    formulas: [
      "salt = 20% of total",
      "water = 80% of total",
      "\\frac{salt}{water} = \\frac{20}{80} = \\frac{1}{4}"
    ]
  },
  {
    text: "If a store sells 3 shirts for $45, how many shirts can be bought for $75?",
    circleItems: ["3 shirts", "$45", "$75"],
    underlineItems: ["how many shirts"],
    boxItems: ["ratio", "shirts", "price"],
    solution: 5,
    operation: "rate",
    formulas: [
      "\\frac{shirts}{cost} = \\frac{3}{\\$45}",
      "shirts = \\frac{3}{\\$45} \\times cost"
    ]
  },
  {
    text: "A 6-foot person casts a 4-foot shadow. At the same time, a tree casts a 30-foot shadow. How tall is the tree?",
    circleItems: ["6-foot person", "4-foot shadow", "30-foot shadow"],
    underlineItems: ["how tall is the tree"],
    boxItems: ["ratio", "person", "tree", "shadow", "tall"],
    solution: 45,
    operation: "proportion",
    formulas: [
      "\\frac{person height}{person shadow} = \\frac{tree height}{tree shadow}",
      "tree height = \\frac{person height \\times tree shadow}{person shadow}"
    ]
  },
]

export default problems;