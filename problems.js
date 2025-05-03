const problems = [
{
  text: "A bag contains red and blue marbles in the ratio 3:5. If there are 25 blue marbles, how many red marbles are there?",
  circleItems: ["3:5", "25"],
  underlineItems: ["how many red marbles are there"],
  boxItems: ["ratio", "red"],
  solution: 15,
  operation: "ratio"
},
{
  "text": "A square has a perimeter of 36 cm. What is its area?",
  "circleItems": ["36 cm"],
  "underlineItems": ["What is its area"],
  "boxItems": ["square", "perimeter"],
  "solution": 81,
  "operation": "area"
},
{
  text: "A rectangle has a length of 15 m and an area of 90 m². What is its width?",
  circleItems: ["15 m", "90 m²"],
  underlineItems: ["What is its width"],
  boxItems: ["rectangle", "area"],
  solution: 6,
  operation: "width"
},
{
  text: "A triangle has base 12 cm and height 8 cm. What is its area?",
  circleItems: ["12 cm", "8 cm"],
  underlineItems: ["What is its area"],
  boxItems: ["triangle", "area"],
  solution: 48,
  operation: "area"
},
{
  text: "The average of 5 numbers is 20. If one number is 25, what is the average of the remaining four?",
  circleItems: ["5 numbers", "20", "25"],
  underlineItems: ["what is the average of the remaining four"],
  boxItems: ["average", "remaining"],
  solution: 18.75,
  operation: "average"
},
{
  text: "A student scores 75, 82, and 90 in three tests. What should he score in the fourth test to have an average of 85?",
  circleItems: ["75", "82", "90", "85"],
  underlineItems: ["What should he score in the fourth test"],
  boxItems: ["average", "score"],
  solution: 93,
  operation: "average"
},
{
  text: "The average weight of 6 boxes is 15 kg. When 2 more boxes are added, the average becomes 17 kg. What is the total weight of the 2 new boxes?",
  circleItems: ["6 boxes", "15 kg", "2 more", "17 kg"],
  underlineItems: ["What is the total weight of the 2 new boxes"],
  boxItems: ["average", "total weight"],
  solution: 46,
  operation: "average"
},
  {
    text: "A recipe calls for 2 cups of flour, 1 cup of sugar, and 3 eggs to make 12 cookies. If you only want to make 6 cookies, how much flour should you use?",
    circleItems: ["2 cups", "12 cookies", "6 cookies"],
    underlineItems: ["how much flour should you use"],
    boxItems: ["much"],
    eliminateItems: ["1 cup of sugar", "3 eggs", "(Ignore the other ingredients for this question)"],
    solution: 1,
    operation: "proportion"
  },
  
];

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

export default problems;