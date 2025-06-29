
const mongoose = require("mongoose");
const Question = require("./models/Question");
mongoose.connect("mongodb://localhost:27017/quiz-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const questions = [
 // Math Questions (30)
  {
    "topic": "Math",
    "question": "What is the value of $\sqrt{144}$?",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctOption": 1
  },
  {
    "topic": "Math",
    "question": "Solve for x: $3x - 7 = 8$",
    "options": [
      "x = 3",
      "x = 5",
      "x = 7",
      "x = 9"
    ],
    "correctOption": 1
  },
  {
    "topic": "Math",
    "question": "What is the circumference of a circle with a radius of 7 cm? (Use $\pi \approx 3.14$)",
    "options": [
      "21.98 cm",
      "43.96 cm",
      "153.86 cm",
      "38.47 cm"
    ],
    "correctOption": 1
  },
  {
    "topic": "Math",
    "question": "What is 75% of 40?",
    "options": [
      "10",
      "20",
      "30",
      "40"
    ],
    "correctOption": 2
  },
  {
    "topic": "Math",
    "question": "Which of the following is a composite number?",
    "options": [
      "2",
      "3",
      "5",
      "9"
    ],
    "correctOption": 3
  },
  {
    "topic": "Math",
    "question": "What is the result of $5^3$?",
    "options": [
      "15",
      "25",
      "125",
      "625"
    ],
    "correctOption": 2
  },
  {
    "topic": "Math",
    "question": "Simplify the fraction $\frac{12}{18}$",
    "options": [
      "$\frac{1}{2}$",
      "$\frac{2}{3}$",
      "$\frac{3}{4}$",
      "$\frac{4}{5}$"
    ],
    "correctOption": 1
  },
  {
    "topic": "Math",
    "question": "What is the value of $10^{-2}$?",
    "options": [
      "100",
      "10",
      "0.01",
      "0.02"
    ],
    "correctOption": 2
  },
  {
    "topic": "Math",
    "question": "Solve for y: $y/4 + 2 = 6$",
    "options": [
      "y = 8",
      "y = 12",
      "y = 16",
      "y = 20"
    ],
    "correctOption": 2
  },
  {
    "topic": "Math",
    "question": "What is the area of a triangle with a base of 10 cm and a height of 6 cm?",
    "options": [
      "16 sq cm",
      "30 sq cm",
      "60 sq cm",
      "80 sq cm"
    ],
    "correctOption": 1
  },
  {
    "topic": "Math",
    "question": "What is the sum of the interior angles of a quadrilateral?",
    "options": [
      "90 degrees",
      "180 degrees",
      "270 degrees",
      "360 degrees"
    ],
    "correctOption": 3
  },
  {
    "topic": "Math",
    "question": "What is the median of the numbers: 2, 5, 8, 1, 9?",
    "options": [
      "1",
      "5",
      "8",
      "9"
    ],
    "correctOption": 1
  },
  {
    "topic": "Math",
    "question": "What is the least common multiple (LCM) of 4 and 6?",
    "options": [
      "2",
      "10",
      "12",
      "24"
    ],
    "correctOption": 2
  },
  {
    "topic": "Math",
    "question": "What is the value of $\sin(90^\circ)$?",
    "options": [
      "0",
      "1",
      "-1",
      "0.5"
    ],
    "correctOption": 1
  },
  {
    "topic": "Math",
    "question": "If a bag contains 3 red balls and 5 blue balls, what is the probability of picking a red ball?",
    "options": [
      "3/8",
      "5/8",
      "3/5",
      "1/2"
    ],
    "correctOption": 0
  },
  {
    "topic": "Math",
    "question": "What is the slope of the line $y = 2x - 3$?",
    "options": [
      "-3",
      "2",
      "1",
      "-2"
    ],
    "correctOption": 1
  },
  {
    "topic": "Math",
    "question": "What is the value of $(-2)^4$?",
    "options": [
      "-16",
      "16",
      "-8",
      "8"
    ],
    "correctOption": 1
  },
  {
    "topic": "Math",
    "question": "Solve for z: $2(z + 3) = 10$",
    "options": [
      "z = 1",
      "z = 2",
      "z = 3",
      "z = 4"
    ],
    "correctOption": 1
  },
  {
    "topic": "Math",
    "question": "What is the area of a square with a side length of 9 cm?",
    "options": [
      "18 sq cm",
      "36 sq cm",
      "81 sq cm",
      "27 sq cm"
    ],
    "correctOption": 2
  },
  {
    "topic": "Math",
    "question": "What is 150% of 20?",
    "options": [
      "10",
      "20",
      "30",
      "40"
    ],
    "correctOption": 2
  },
  {
    "topic": "Math",
    "question": "Which of the following is an irrational number?",
    "options": [
      "$\frac{1}{3}$",
      "$\sqrt{4}$",
      "$\sqrt{2}$",
      "0.5"
    ],
    "correctOption": 2
  },
  {
    "topic": "Math",
    "question": "What is the result of $7^0$?",
    "options": [
      "0",
      "1",
      "7",
      "undefined"
    ],
    "correctOption": 1
  },
  {
    "topic": "Math",
    "question": "Simplify the expression $3x + 2y - x + 5y$",
    "options": [
      "$2x + 7y$",
      "$4x + 3y$",
      "$3x + 7y$",
      "$2x - 3y$"
    ],
    "correctOption": 0
  },
  {
    "topic": "Math",
    "question": "What is the value of $\log_{10}(1000)$?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctOption": 2
  },
  {
    "topic": "Math",
    "question": "Solve for a: $\frac{a}{3} - 1 = 4$",
    "options": [
      "a = 9",
      "a = 12",
      "a = 15",
      "a = 18"
    ],
    "correctOption": 2
  },
  {
    "topic": "Math",
    "question": "What is the volume of a cube with a side length of 4 cm?",
    "options": [
      "12 cu cm",
      "16 cu cm",
      "64 cu cm",
      "24 cu cm"
    ],
    "correctOption": 2
  },
  {
    "topic": "Math",
    "question": "What is the greatest common divisor (GCD) of 12 and 18?",
    "options": [
      "2",
      "3",
      "6",
      "36"
    ],
    "correctOption": 2
  },
  {
    "topic": "Math",
    "question": "What is the value of $\cos(0^\circ)$?",
    "options": [
      "0",
      "1",
      "-1",
      "0.5"
    ],
    "correctOption": 1
  },
  {
    "topic": "Math",
    "question": "If you roll a fair six-sided die, what is the probability of getting an even number?",
    "options": [
      "1/6",
      "1/3",
      "1/2",
      "2/3"
    ],
    "correctOption": 2
  },
  {
    "topic": "Math",
    "question": "What is the y-intercept of the line $y = -x + 5$?",
    "options": [
      "-1",
      "5",
      "0",
      "-5"
    ],
    "correctOption": 1
  },
  // Science Questions (30)
  {
    "topic": "Science",
    "question": "What is the chemical symbol for oxygen?",
    "options": [
      "Ox",
      "O",
      "Og",
      "Oy"
    ],
    "correctOption": 1
  },
  {
    "topic": "Science",
    "question": "What is the powerhouse of the cell?",
    "options": [
      "Nucleus",
      "Mitochondria",
      "Ribosome",
      "Endoplasmic Reticulum"
    ],
    "correctOption": 1
  },
  {
    "topic": "Science",
    "question": "What is the speed of light in a vacuum?",
    "options": [
      "$3 \times 10^5$ km/s",
      "$3 \times 10^8$ m/s",
      "$3 \times 10^7$ km/s",
      "$3 \times 10^{10}$ cm/s"
    ],
    "correctOption": 1
  },
  {
    "topic": "Science",
    "question": "Which gas makes up the majority of Earth's atmosphere?",
    "options": [
      "Oxygen",
      "Carbon Dioxide",
      "Nitrogen",
      "Argon"
    ],
    "correctOption": 2
  },
  {
    "topic": "Science",
    "question": "What is the process of water turning into vapor?",
    "options": [
      "Condensation",
      "Precipitation",
      "Evaporation",
      "Sublimation"
    ],
    "correctOption": 2
  },
  {
    "topic": "Science",
    "question": "What is the basic unit of heredity?",
    "options": [
      "Cell",
      "Tissue",
      "Gene",
      "Organ"
    ],
    "correctOption": 2
  },
  {
    "topic": "Science",
    "question": "What type of energy is stored in a stretched spring?",
    "options": [
      "Kinetic Energy",
      "Potential Energy",
      "Thermal Energy",
      "Chemical Energy"
    ],
    "correctOption": 1
  },
  {
    "topic": "Science",
    "question": "What is the name of the force that opposes motion between surfaces in contact?",
    "options": [
      "Gravity",
      "Magnetism",
      "Friction",
      "Tension"
    ],
    "correctOption": 2
  },
  {
    "topic": "Science",
    "question": "Which of the following is an example of a chemical change?",
    "options": [
      "Melting ice",
      "Boiling water",
      "Burning wood",
      "Dissolving sugar"
    ],
    "correctOption": 2
  },
  {
    "topic": "Science",
    "question": "What is the function of the human skeleton?",
    "options": [
      "Digestion",
      "Respiration",
      "Support and protection",
      "Circulation"
    ],
    "correctOption": 2
  },
  {
    "topic": "Science",
    "question": "What is the chemical symbol for carbon dioxide?",
    "options": [
      "CO",
      "C2O",
      "CO2",
      "CaO"
    ],
    "correctOption": 2
  },
  {
    "topic": "Science",
    "question": "What is the process by which animals take in oxygen and release carbon dioxide?",
    "options": [
      "Photosynthesis",
      "Transpiration",
      "Respiration",
      "Digestion"
    ],
    "correctOption": 2
  },
  {
    "topic": "Science",
    "question": "What is the SI unit of energy?",
    "options": [
      "Newton",
      "Pascal",
      "Watt",
      "Joule"
    ],
    "correctOption": 3
  },
  {
    "topic": "Science",
    "question": "Which of the following is a terrestrial planet?",
    "options": [
      "Jupiter",
      "Saturn",
      "Earth",
      "Neptune"
    ],
    "correctOption": 2
  },
  {
    "topic": "Science",
    "question": "What is the function of platelets in the blood?",
    "options": [
      "Transporting oxygen",
      "Fighting infections",
      "Clotting blood",
      "Producing antibodies"
    ],
    "correctOption": 2
  },
  {
    "topic": "Science",
    "question": "What is the scientific name for the study of living organisms?",
    "options": [
      "Chemistry",
      "Physics",
      "Biology",
      "Astronomy"
    ],
    "correctOption": 2
  },
  {
    "topic": "Science",
    "question": "What is the state of matter that has a definite volume but no definite shape?",
    "options": [
      "Solid",
      "Liquid",
      "Gas",
      "Plasma"
    ],
    "correctOption": 1
  },
  {
    "topic": "Science",
    "question": "What is the name of the instrument used to measure atmospheric pressure?",
    "options": [
      "Thermometer",
      "Barometer",
      "Hygrometer",
      "Anemometer"
    ],
    "correctOption": 1
  },
  {
    "topic": "Science",
    "question": "Which of the following is an example of a physical change?",
    "options": [
      "Rusting iron",
      "Cooking an egg",
      "Melting wax",
      "Burning paper"
    ],
    "correctOption": 2
  },
  {
    "topic": "Science",
    "question": "What is the main organ of the human respiratory system?",
    "options": [
      "Heart",
      "Liver",
      "Lungs",
      "Kidneys"
    ],
    "correctOption": 2
  },
  {
    "topic": "Science",
    "question": "What is the chemical symbol for sodium?",
    "options": [
      "So",
      "Sd",
      "Na",
      "Nm"
    ],
    "correctOption": 2
  },
  {
    "topic": "Science",
    "question": "What is the process of transferring pollen from the male part of a flower to the female part?",
    "options": [
      "Respiration",
      "Fertilization",
      "Pollination",
      "Germination"
    ],
    "correctOption": 2
  },
  {
    "topic": "Science",
    "question": "What is the force that pulls objects towards each other?",
    "options": [
      "Friction",
      "Gravity",
      "Magnetism",
      "Tension"
    ],
    "correctOption": 1
  },
  {
    "topic": "Science",
    "question": "Which of the following is a renewable source of energy?",
    "options": [
      "Coal",
      "Natural Gas",
      "Solar Energy",
      "Petroleum"
    ],
    "correctOption": 2
  },
  {
    "topic": "Science",
    "question": "What is the largest organ in the human body?",
    "options": [
      "Heart",
      "Liver",
      "Skin",
      "Brain"
    ],
    "correctOption": 2
  },
  {
    "topic": "Science",
    "question": "What is the chemical formula for table salt?",
    "options": [
      "H2O",
      "CO2",
      "NaCl",
      "O2"
    ],
    "correctOption": 2
  },
  {
    "topic": "Science",
    "question": "What is the process by which a liquid changes to a solid?",
    "options": [
      "Melting",
      "Freezing",
      "Boiling",
      "Condensing"
    ],
    "correctOption": 1
  },
  {
    "topic": "Science",
    "question": "What is the unit of electrical resistance?",
    "options": [
      "Ampere",
      "Volt",
      "Ohm",
      "Watt"
    ],
    "correctOption": 2
  },
  {
    "topic": "Science",
    "question": "Which planet is known as the 'Morning Star' or 'Evening Star'?",
    "options": [
      "Mars",
      "Venus",
      "Jupiter",
      "Mercury"
    ],
    "correctOption": 1
  },
  {
    "topic": "Science",
    "question": "What is the primary function of the small intestine?",
    "options": [
      "Water absorption",
      "Waste elimination",
      "Nutrient absorption",
      "Producing digestive enzymes"
    ],
    "correctOption": 2
  },
   // History Questions (30)
  {
    "topic": "History",
    "question": "In what year did Christopher Columbus first arrive in the Americas?",
    "options": [
      "1488",
      "1492",
      "1501",
      "1507"
    ],
    "correctOption": 1
  },
  {
    "topic": "History",
    "question": "Who was the Queen of England during the Spanish Armada?",
    "options": [
      "Queen Mary I",
      "Queen Elizabeth I",
      "Queen Anne",
      "Queen Victoria"
    ],
    "correctOption": 1
  },
  {
    "topic": "History",
    "question": "What was the name of the conflict fought between the North and South regions of the United States from 1861 to 1865?",
    "options": [
      "The Revolutionary War",
      "The War of 1812",
      "The Civil War",
      "World War I"
    ],
    "correctOption": 2
  },
  {
    "topic": "History",
    "question": "Who is considered the first Emperor of China?",
    "options": [
      "Confucius",
      "Lao Tzu",
      "Qin Shi Huang",
      "Mao Zedong"
    ],
    "correctOption": 2
  },
  {
    "topic": "History",
    "question": "In what year did the French Revolution officially begin?",
    "options": [
      "1776",
      "1789",
      "1799",
      "1815"
    ],
    "correctOption": 1
  },
  {
    "topic": "History",
    "question": "Who wrote the 'Declaration of Independence'?",
    "options": [
      "George Washington",
      "Benjamin Franklin",
      "Thomas Jefferson",
      "John Adams"
    ],
    "correctOption": 2
  },
  {
    "topic": "History",
    "question": "What ancient civilization developed the concept of democracy?",
    "options": [
      "Roman Empire",
      "Ancient Egypt",
      "Ancient Greece",
      "Indus Valley Civilization"
    ],
    "correctOption": 2
  },
  {
    "topic": "History",
    "question": "Who was the first man to walk on the moon?",
    "options": [
      "Buzz Aldrin",
      "Neil Armstrong",
      "Yuri Gagarin",
      "Alan Shepard"
    ],
    "correctOption": 1
  },
  {
    "topic": "History",
    "question": "What was the name of the trade route that connected the East and West for centuries?",
    "options": [
      "The Spice Route",
      "The Silk Road",
      "The Gold Road",
      "The Tea Trail"
    ],
    "correctOption": 1
  },
  {
    "topic": "History",
    "question": "In what year did World War I end?",
    "options": [
      "1916",
      "1917",
      "1918",
      "1919"
    ],
    "correctOption": 2
  },
  {
    "topic": "History",
    "question": "Who developed the theory of relativity?",
    "options": [
      "Isaac Newton",
      "Galileo Galilei",
      "Albert Einstein",
      "Stephen Hawking"
    ],
    "correctOption": 2
  },
  {
    "topic": "History",
    "question": "What was the name of the period of political upheaval and violence during the French Revolution?",
    "options": [
      "The Enlightenment",
      "The Reign of Terror",
      "The July Revolution",
      "The February Revolution"
    ],
    "correctOption": 1
  },
  {
    "topic": "History",
    "question": "Which country was the first to grant women the right to vote on a national level?",
    "options": [
      "United States",
      "United Kingdom",
      "New Zealand",
      "Australia"
    ],
    "correctOption": 2
  },
  {
    "topic": "History",
    "question": "Who painted the 'Mona Lisa'?",
    "options": [
      "Michelangelo",
      "Raphael",
      "Leonardo da Vinci",
      "Vincent van Gogh"
    ],
    "correctOption": 2
  },
  {
    "topic": "History",
    "question": "What was the main cause of the Peloponnesian War?",
    "options": [
      "Religious differences",
      "Economic competition",
      "Power struggle between Athens and Sparta",
      "Territorial disputes with Persia"
    ],
    "correctOption": 2
  },
  {
    "topic": "History",
    "question": "Who was the leader of the Soviet Union during World War II?",
    "options": [
      "Vladimir Lenin",
      "Leon Trotsky",
      "Joseph Stalin",
      "Nikita Khrushchev"
    ],
    "correctOption": 2
  },
  {
    "topic": "History",
    "question": "What was the name of the ship that carried the Pilgrims to America in 1620?",
    "options": [
      "The Santa Maria",
      "The Mayflower",
      "The Discovery",
      "The Jamestown"
    ],
    "correctOption": 1
  },
  {
    "topic": "History",
    "question": "What event is considered the start of the Protestant Reformation?",
    "options": [
      "The Council of Trent",
      "The Peace of Augsburg",
      "Martin Luther's 95 Theses",
      "The Act of Supremacy"
    ],
    "correctOption": 2
  },
  {
    "topic": "History",
    "question": "Who was the first female Prime Minister of India?",
    "options": [
      "Sarojini Naidu",
      "Indira Gandhi",
      "Vijaya Lakshmi Pandit",
      "Sonia Gandhi"
    ],
    "correctOption": 1
  },
  {
    "topic": "History",
    "question": "What was the Cold War?",
    "options": [
      "A direct military conflict between the US and USSR",
      "A series of trade disputes between European nations",
      "A period of geopolitical tension between the US and USSR",
      "A global pandemic in the mid-20th century"
    ],
    "correctOption": 2
  },
  {
    "topic": "History",
    "question": "Who is known as the 'Father of the Nation' in India?",
    "options": [
      "Jawaharlal Nehru",
      "Sardar Vallabhbhai Patel",
      "Mahatma Gandhi",
      "Subhas Chandra Bose"
    ],
    "correctOption": 2
  },
  {
    "topic": "History",
    "question": "What was the name of the dynasty that built the Great Wall of China?",
    "options": [
      "Han Dynasty",
      "Tang Dynasty",
      "Ming Dynasty",
      "Qin Dynasty"
    ],
    "correctOption": 3
  },
  {
    "topic": "History",
    "question": "In what year did the Berlin Wall fall?",
    "options": [
      "1985",
      "1989",
      "1991",
      "1995"
    ],
    "correctOption": 1
  },
  {
    "topic": "History",
    "question": "Who was the leader of Nazi Germany during World War II?",
    "options": [
      "Benito Mussolini",
      "Adolf Hitler",
      "Hideki Tojo",
      "Winston Churchill"
    ],
    "correctOption": 1
  },
  {
    "topic": "History",
    "question": "What was the Renaissance?",
    "options": [
      "A period of agricultural innovation in the Middle Ages",
      "A religious movement in the 16th century",
      "A cultural and intellectual revival in Europe",
      "A series of wars in the 18th century"
    ],
    "correctOption": 2
  },
  {
    "topic": "History",
    "question": "Who discovered penicillin?",
    "options": [
      "Marie Curie",
      "Alexander Fleming",
      "Louis Pasteur",
      "Edward Jenner"
    ],
    "correctOption": 1
  },
  {
    "topic": "History",
    "question": "What was the main cause of the American Revolutionary War?",
    "options": [
      "Religious persecution",
      "Economic grievances and taxation without representation",
      "Territorial disputes with France",
      "The issue of slavery"
    ],
    "correctOption": 1
  },
  {
    "topic": "History",
    "question": "Who was the first President of South Africa after the end of apartheid?",
    "options": [
      "Desmond Tutu",
      "F.W. de Klerk",
      "Nelson Mandela",
      "Thabo Mbeki"
    ],
    "correctOption": 2
  },
  {
    "topic": "History",
    "question": "What was the name of the dynasty that ruled India during the construction of the Taj Mahal?",
    "options": [
      "Maurya Dynasty",
      "Gupta Dynasty",
      "Mughal Dynasty",
      "Delhi Sultanate"
    ],
    "correctOption": 2
  },
  {
    "topic": "History",
    "question": "In what year did the United States drop atomic bombs on Hiroshima and Nagasaki?",
    "options": [
      "1943",
      "1944",
      "1945",
      "1946"
    ],
    "correctOption": 2
  },
   // Geography Questions (30)
  {
    "topic": "Geography",
    "question": "What is the capital city of Japan?",
    "options": [
      "Seoul",
      "Beijing",
      "Tokyo",
      "Bangkok"
    ],
    "correctOption": 2
  },
  {
    "topic": "Geography",
    "question": "Which is the largest ocean on Earth?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOption": 3
  },
  {
    "topic": "Geography",
    "question": "What is the longest mountain range in the world?",
    "options": [
      "Himalayas",
      "Andes",
      "Rocky Mountains",
      "Alps"
    ],
    "correctOption": 1
  },
  {
    "topic": "Geography",
    "question": "Which continent is known as the 'Land Down Under'?",
    "options": [
      "Africa",
      "Antarctica",
      "Australia",
      "South America"
    ],
    "correctOption": 2
  },
  {
    "topic": "Geography",
    "question": "What is the name of the desert located in northern Africa?",
    "options": [
      "Gobi Desert",
      "Arabian Desert",
      "Sahara Desert",
      "Kalahari Desert"
    ],
    "correctOption": 2
  },
  {
    "topic": "Geography",
    "question": "Which river flows through the Grand Canyon?",
    "options": [
      "Colorado River",
      "Mississippi River",
      "Amazon River",
      "Nile River"
    ],
    "correctOption": 0
  },
  {
    "topic": "Geography",
    "question": "What is the term for a landform surrounded by water on three sides?",
    "options": [
      "Island",
      "Peninsula",
      "Cape",
      "Atoll"
    ],
    "correctOption": 1
  },
  {
    "topic": "Geography",
    "question": "Which of the following is the largest freshwater lake by surface area?",
    "options": [
      "Lake Superior",
      "Lake Michigan",
      "Lake Huron",
      "Lake Ontario"
    ],
    "correctOption": 0
  },
  {
    "topic": "Geography",
    "question": "What is the name of the strait that separates Europe from Africa?",
    "options": [
      "Strait of Hormuz",
      "Strait of Magellan",
      "Strait of Gibraltar",
      "Bering Strait"
    ],
    "correctOption": 2
  },
  {
    "topic": "Geography",
    "question": "Which country is known as the 'Emerald Isle'?",
    "options": [
      "Scotland",
      "Wales",
      "Ireland",
      "New Zealand"
    ],
    "correctOption": 2
  },
  {
    "topic": "Geography",
    "question": "What is the capital city of Canada?",
    "options": [
      "Toronto",
      "Montreal",
      "Ottawa",
      "Vancouver"
    ],
    "correctOption": 2
  },
  {
    "topic": "Geography",
    "question": "Which is the saltiest sea in the world?",
    "options": [
      "Mediterranean Sea",
      "Dead Sea",
      "Red Sea",
      "Caspian Sea"
    ],
    "correctOption": 1
  },
  {
    "topic": "Geography",
    "question": "What is the name of the highest mountain in Africa?",
    "options": [
      "Mount Everest",
      "Mount Kilimanjaro",
      "Mount Fuji",
      "Mount Blanc"
    ],
    "correctOption": 1
  },
  {
    "topic": "Geography",
    "question": "Which major river flows through Egypt?",
    "options": [
      "Tigris River",
      "Euphrates River",
      "Nile River",
      "Congo River"
    ],
    "correctOption": 2
  },
  {
    "topic": "Geography",
    "question": "What is the term for a large, flat area of land that is higher than the surrounding terrain?",
    "options": [
      "Valley",
      "Canyon",
      "Plateau",
      "Basin"
    ],
    "correctOption": 2
  },
  {
    "topic": "Geography",
    "question": "Which of the following is the largest island in the world?",
    "options": [
      "Greenland",
      "Borneo",
      "Madagascar",
      "New Guinea"
    ],
    "correctOption": 0
  },
  {
    "topic": "Geography",
    "question": "What is the name of the imaginary line that circles the Earth at 0 degrees longitude?",
    "options": [
      "Equator",
      "Tropic of Cancer",
      "Prime Meridian",
      "International Date Line"
    ],
    "correctOption": 2
  },
  {
    "topic": "Geography",
    "question": "Which country is known for the fjords?",
    "options": [
      "Sweden",
      "Finland",
      "Norway",
      "Denmark"
    ],
    "correctOption": 2
  },
  {
    "topic": "Geography",
    "question": "What is the capital city of Australia?",
    "options": [
      "Sydney",
      "Melbourne",
      "Canberra",
      "Perth"
    ],
    "correctOption": 2
  },
  {
    "topic": "Geography",
    "question": "Which is the deepest point in the Earth's oceans?",
    "options": [
      "Puerto Rico Trench",
      "Mariana Trench",
      "Java Trench",
      "South Sandwich Trench"
    ],
    "correctOption": 1
  },
  {
    "topic": "Geography",
    "question": "What is the name of the large, semi-arid grassland region of Argentina?",
    "options": [
      "Pampas",
      "Savanna",
      "Steppe",
      "Prairie"
    ],
    "correctOption": 0
  },
  {
    "topic": "Geography",
    "question": "Which major mountain range runs along the western coast of North America?",
    "options": [
      "Appalachian Mountains",
      "Sierra Nevada",
      "Rocky Mountains",
      "Andes"
    ],
    "correctOption": 2
  },
  {
    "topic": "Geography",
    "question": "What is the capital city of Brazil?",
    "options": [
      "Rio de Janeiro",
      "São Paulo",
      "Brasília",
      "Buenos Aires"
    ],
    "correctOption": 2
  },
  {
    "topic": "Geography",
    "question": "Which sea is located between Europe and Asia?",
    "options": [
      "Red Sea",
      "Black Sea",
      "Mediterranean Sea",
      "Arabian Sea"
    ],
    "correctOption": 1
  },
  {
    "topic": "Geography",
    "question": "What is the term for a narrow strip of land connecting two larger land areas across an expanse of water?",
    "options": [
      "Strait",
      "Isthmus",
      "Peninsula",
      "Cape"
    ],
    "correctOption": 1
  },
  {
    "topic": "Geography",
    "question": "Which of the following countries is entirely located on the Indian subcontinent?",
    "options": [
      "China",
      "Afghanistan",
      "Bangladesh",
      "Myanmar"
    ],
    "correctOption": 2
  },
  {
    "topic": "Geography",
    "question": "What is the name of the large ice sheet covering most of Greenland?",
    "options": [
      "Antarctic Ice Sheet",
      "Arctic Ice Cap",
      "Greenland Ice Sheet",
      "Patagonian Ice Field"
    ],
    "correctOption": 2
  },
  {
    "topic": "Geography",
    "question": "Which major river flows through London?",
    "options": [
      "Thames River",
      "Seine River",
      "Rhine River",
      "Danube River"
    ],
    "correctOption": 0
  },
  {
    "topic": "Geography",
    "question": "What is the capital city of South Africa?",
    "options": [
      "Cape Town",
      "Johannesburg",
      "Pretoria",
      "Durban"
    ],
    "correctOption": 2
  },
  {
    "topic": "Geography",
    "question": "Which large lake is located on the border between the United States and Canada?",
    "options": [
      "Lake Baikal",
      "Lake Victoria",
      "Lake Ontario",
      "Lake Tanganyika"
    ],
    "correctOption": 2
  },
  //
   {
    "topic": "Sports",
    "question": "How many players are there in a standard soccer team on the field?",
    "options": [
      "9",
      "10",
      "11",
      "12"
    ],
    "correctOption": 2
  },
  {
    "topic": "Sports",
    "question": "What is the name of the trophy awarded to the winner of the FIFA World Cup?",
    "options": [
      "Jules Rimet Trophy",
      "Stanley Cup",
      "Webb Ellis Cup",
      "Larry O'Brien Trophy"
    ],
    "correctOption": 0
  },
  {
    "topic": "Sports",
    "question": "In which sport would you perform a 'hole-in-one'?",
    "options": [
      "Tennis",
      "Golf",
      "Basketball",
      "Baseball"
    ],
    "correctOption": 1
  },
  {
    "topic": "Sports",
    "question": "How many sets does a player need to win to claim victory in a standard best-of-five sets tennis match?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctOption": 1
  },
  {
    "topic": "Sports",
    "question": "What is the maximum score possible in a single frame of ten-pin bowling?",
    "options": [
      "10",
      "20",
      "30",
      "40"
    ],
    "correctOption": 2
  },
  {
    "topic": "Sports",
    "question": "Which country has won the most Olympic gold medals in swimming?",
    "options": [
      "United States",
      "Australia",
      "China",
      "Russia"
    ],
    "correctOption": 0
  },
  {
    "topic": "Sports",
    "question": "What is the length of a marathon in miles?",
    "options": [
      "24.2",
      "25.5",
      "26.2",
      "27.1"
    ],
    "correctOption": 2
  },
  {
    "topic": "Sports",
    "question": "In which sport is the term 'home run' used?",
    "options": [
      "Cricket",
      "Baseball",
      "Rugby",
      "Badminton"
    ],
    "correctOption": 1
  },
  {
    "topic": "Sports",
    "question": "How many players are there in a standard volleyball team on the court?",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "correctOption": 2
  },
  {
    "topic": "Sports",
    "question": "What is the name of the annual international cycling race primarily held in France?",
    "options": [
      "Giro d'Italia",
      "Vuelta a España",
      "Tour de France",
      "Paris-Roubaix"
    ],
    "correctOption": 2
  },
  {
    "topic": "Sports",
    "question": "How many points is a touchdown worth in American football (excluding the extra point)?",
    "options": [
      "3",
      "5",
      "6",
      "7"
    ],
    "correctOption": 2
  },
  {
    "topic": "Sports",
    "question": "In which sport would you use a 'shuttlecock'?",
    "options": [
      "Tennis",
      "Badminton",
      "Squash",
      "Table Tennis"
    ],
    "correctOption": 1
  },
  {
    "topic": "Sports",
    "question": "What is the name of the ice hockey league in North America?",
    "options": [
      "NFL",
      "NBA",
      "MLB",
      "NHL"
    ],
    "correctOption": 3
  },
  {
    "topic": "Sports",
    "question": "How many rings are there on the Olympic flag?",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "correctOption": 1
  },
  {
    "topic": "Sports",
    "question": "In which sport is the term 'birdie' used?",
    "options": [
      "Tennis",
      "Golf",
      "Basketball",
      "Soccer"
    ],
    "correctOption": 1
  },
  {
    "topic": "Sports",
    "question": "How many innings are there in a standard game of baseball?",
    "options": [
      "7",
      "8",
      "9",
      "10"
    ],
    "correctOption": 2
  },
  {
    "topic": "Sports",
    "question": "What is the name of the final match of the Wimbledon tennis championships?",
    "options": [
      "The Grand Slam Final",
      "The Centre Court Final",
      "The Championship Final",
      "The Wimbledon Decider"
    ],
    "correctOption": 2
  },
  {
    "topic": "Sports",
    "question": "In which sport would you perform a 'slam dunk'?",
    "options": [
      "Tennis",
      "Golf",
      "Basketball",
      "Soccer"
    ],
    "correctOption": 2
  },
  {
    "topic": "Sports",
    "question": "How many players are there in a standard cricket team on the field?",
    "options": [
      "9",
      "10",
      "11",
      "12"
    ],
    "correctOption": 2
  },
  {
    "topic": "Sports",
    "question": "What is the name of the trophy awarded to the winner of the Super Bowl?",
    "options": [
      "Vince Lombardi Trophy",
      "Commissioner's Trophy",
      "Walter A. Brown Trophy",
      "Grey Cup"
    ],
    "correctOption": 0
  },
  {
    "topic": "Sports",
    "question": "In which sport is the term 'try' used to score points?",
    "options": [
      "Soccer",
      "Basketball",
      "Rugby",
      "Hockey"
    ],
    "correctOption": 2
  },
  {
    "topic": "Sports",
    "question": "How many sets are there in a standard game of table tennis?",
    "options": [
      "3 or 5",
      "4 or 6",
      "5 or 7",
      "6 or 8"
    ],
    "correctOption": 0
  },
  {
    "topic": "Sports",
    "question": "What is the name of the stadium that hosts the US Open tennis tournament?",
    "options": [
      "Rod Laver Arena",
      "Arthur Ashe Stadium",
      "Wimbledon Centre Court",
      "Roland Garros Stadium"
    ],
    "correctOption": 1
  },
  {
    "topic": "Sports",
    "question": "In which sport would you use a 'puck'?",
    "options": [
      "Lacrosse",
      "Field Hockey",
      "Ice Hockey",
      "Water Polo"
    ],
    "correctOption": 2
  },
  {
    "topic": "Sports",
    "question": "How many bases are there on a baseball field?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctOption": 1
  },
  {
    "topic": "Sports",
    "question": "What is the name of the basketball league in North America?",
    "options": [
      "NFL",
      "NHL",
      "MLB",
      "NBA"
    ],
    "correctOption": 3
  },
  {
    "topic": "Sports",
    "question": "In which sport is the term 'wicket' used?",
    "options": [
      "Tennis",
      "Badminton",
      "Cricket",
      "Golf"
    ],
    "correctOption": 2
  },
  {
    "topic": "Sports",
    "question": "How many rounds are there in a standard boxing match?",
    "options": [
      "8",
      "10",
      "12",
      "15"
    ],
    "correctOption": 2
  },
  {
    "topic": "Sports",
    "question": "What is the name of the trophy awarded to the winner of the Stanley Cup?",
    "options": [
      "Larry O'Brien Trophy",
      "Stanley Cup",
      "Commissioner's Trophy",
      "Grey Cup"
    ],
    "correctOption": 1
  },
  {
    "topic": "Sports",
    "question": "In which sport would you use a 'club'?",
    "options": [
      "Soccer",
      "Volleyball",
      "Golf",
      "Swimming"
    ],
    "correctOption": 2
  },
   // Technology Questions (30)
  {
    "topic": "Technology",
    "question": "What does CPU stand for in computer terminology?",
    "options": [
      "Central Processing Unit",
      "Computer Programming Unit",
      "Central Program Utility",
      "Common Protocol Unit"
    ],
    "correctOption": 0
  },
  {
    "topic": "Technology",
    "question": "What is the primary function of RAM (Random Access Memory) in a computer?",
    "options": [
      "Long-term data storage",
      "Permanent storage of the operating system",
      "Temporary storage for active data",
      "Managing network connections"
    ],
    "correctOption": 2
  },
  {
    "topic": "Technology",
    "question": "Who is credited with inventing the World Wide Web?",
    "options": [
      "Bill Gates",
      "Steve Jobs",
      "Tim Berners-Lee",
      "Mark Zuckerberg"
    ],
    "correctOption": 2
  },
  {
    "topic": "Technology",
    "question": "What is an algorithm in the context of computer science?",
    "options": [
      "A type of computer hardware",
      "A programming language",
      "A set of instructions to solve a problem",
      "A method for data encryption"
    ],
    "correctOption": 2
  },
  {
    "topic": "Technology",
    "question": "What does the acronym URL stand for?",
    "options": [
      "Universal Resource Locator",
      "Uniform Retrieval Link",
      "Ultimate Reference Link",
      "Unified Resource Link"
    ],
    "correctOption": 0
  },
  {
    "topic": "Technology",
    "question": "What is the function of a firewall in computer security?",
    "options": [
      "To cool down the computer",
      "To provide internet access",
      "To protect against unauthorized access",
      "To improve computer speed"
    ],
    "correctOption": 2
  },
  {
    "topic": "Technology",
    "question": "Which programming language is often used for web development?",
    "options": [
      "Python",
      "Java",
      "JavaScript",
      "C++"
    ],
    "correctOption": 2
  },
  {
    "topic": "Technology",
    "question": "What is cloud computing?",
    "options": [
      "Storing data on physical hard drives",
      "Running applications on a local server",
      "Delivering computing services over the internet",
      "Using a computer without a monitor"
    ],
    "correctOption": 2
  },
  {
    "topic": "Technology",
    "question": "What is a computer virus?",
    "options": [
      "A beneficial program that speeds up your computer",
      "A type of hardware component",
      "A malicious software that can replicate itself",
      "A tool for creating documents"
    ],
    "correctOption": 2
  },
  {
    "topic": "Technology",
    "question": "What is the purpose of a router in a computer network?",
    "options": [
      "To connect devices within the same network",
      "To provide wireless internet access",
      "To forward data packets between networks",
      "To store files and data"
    ],
    "correctOption": 2
  },
  {
    "topic": "Technology",
    "question": "What is the difference between HTTP and HTTPS?",
    "options": [
      "HTTPS is faster than HTTP",
      "HTTP is used for email, HTTPS for web browsing",
      "HTTPS is a secure version of HTTP",
      "There is no difference"
    ],
    "correctOption": 2
  },
  {
    "topic": "Technology",
    "question": "What is the role of an operating system (OS) in a computer?",
    "options": [
      "To run specific applications",
      "To manage computer hardware and software resources",
      "To connect to the internet",
      "To create documents and spreadsheets"
    ],
    "correctOption": 1
  },
  {
    "topic": "Technology",
    "question": "What is a database?",
    "options": [
      "A collection of web pages",
      "A system for storing and managing data",
      "A type of computer program for calculations",
      "A physical storage device like a USB drive"
    ],
    "correctOption": 1
  },
  {
    "topic": "Technology",
    "question": "What is the meaning of 'bandwidth' in internet terms?",
    "options": [
      "The physical cable connecting to the internet",
      "The speed at which data is transferred",
      "The amount of data stored on a server",
      "The number of devices connected to a network"
    ],
    "correctOption": 1
  },
  {
    "topic": "Technology",
    "question": "What is a pixel?",
    "options": [
      "A unit of computer memory",
      "A small dot that makes up an image on a screen",
      "A type of computer processor",
      "A measure of internet speed"
    ],
    "correctOption": 1
  },
  {
    "topic": "Technology",
    "question": "What is the difference between a hard drive (HDD) and a solid-state drive (SSD)?",
    "options": [
      "SSDs are magnetic, HDDs are electronic",
      "HDDs are faster and more expensive than SSDs",
      "SSDs have no moving parts and are generally faster",
      "There is no functional difference"
    ],
    "correctOption": 2
  },
  {
    "topic": "Technology",
    "question": "What is Bluetooth technology used for?",
    "options": [
      "High-speed internet connection",
      "Short-range wireless data transfer",
      "Long-distance communication",
      "Printing documents wirelessly"
    ],
    "correctOption": 1
  },
  {
    "topic": "Technology",
    "question": "What is a mobile app?",
    "options": [
      "A physical device used for communication",
      "A website designed for mobile browsers",
      "A software application designed to run on mobile devices",
      "A type of mobile phone operating system"
    ],
    "correctOption": 2
  },
  {
    "topic": "Technology",
    "question": "What is artificial intelligence (AI)?",
    "options": [
      "A type of robot that looks like a human",
      "The ability of machines to simulate human intelligence",
      "A programming language used for complex calculations",
      "A network of interconnected computers"
    ],
    "correctOption": 1
  },
  {
    "topic": "Technology",
    "question": "What is the purpose of a web browser?",
    "options": [
      "To create websites",
      "To manage files on a computer",
      "To view and interact with web pages",
      "To send and receive emails"
    ],
    "correctOption": 2
  },
  {
    "topic": "Technology",
    "question": "What is the function of a modem?",
    "options": [
      "To connect devices to a local network",
      "To convert digital signals to analog and vice versa for internet access",
      "To amplify wireless signals",
      "To store data from the internet"
    ],
    "correctOption": 1
  },
  {
    "topic": "Technology",
    "question": "What is a domain name?",
    "options": [
      "The physical address of a website's server",
      "A human-readable web address",
      "A programming language for web development",
      "A type of internet protocol"
    ],
    "correctOption": 1
  },
  {
    "topic": "Technology",
    "question": "What is encryption?",
    "options": [
      "A method of compressing data files",
      "A way to speed up internet connections",
      "The process of encoding data to prevent unauthorized access",
      "A technique for organizing computer files"
    ],
    "correctOption": 2
  },
  {
    "topic": "Technology",
    "question": "What is a server in the context of computing?",
    "options": [
      "A type of personal computer",
      "A software application for browsing the web",
      "A computer or system that provides resources or services to other computers",
      "A device used for printing documents"
    ],
    "correctOption": 2
  },
  {
    "topic": "Technology",
    "question": "What is the Internet of Things (IoT)?",
    "options": [
      "A global network of websites",
      "The concept of connecting everyday objects to the internet",
      "A programming language for web applications",
      "A type of high-speed internet service"
    ],
    "correctOption": 1
  },
  {
    "topic": "Technology",
    "question": "What is a social media platform?",
    "options": [
      "A type of computer hardware",
      "A software used for creating documents",
      "A website or app that allows users to create and share content and connect with others",
      "A system for managing email accounts"
    ],
    "correctOption": 2
  },
  {
    "topic": "Technology",
    "question": "What is a QR code?",
    "options": [
      "A type of computer password",
      "A two-dimensional barcode that can be scanned by a smartphone",
      "A unit of data storage",
      "A type of computer processor"
    ],
    "correctOption": 1
  },
  {
    "topic": "Technology",
    "question": "What is virtual reality (VR)?",
    "options": [
      "A technology that overlays digital information onto the real world",
      "A simulated experience that can be similar to or completely different from the real world",
      "A method of video conferencing",
      "A type of high-definition television"
    ],
    "correctOption": 1
  },
  {
    "topic": "Technology",
    "question": "What is blockchain technology?",
    "options": [
      "A type of computer virus",
      "A decentralized and distributed digital ledger",
      "A programming language for web development",
      "A method for encrypting email messages"
    ],
    "correctOption": 1
  },
  {
    "topic": "Technology",
    "question": "What is a podcast?",
    "options": [
      "A live video stream",
      "An episodic series of digital audio or video files",
      "A type of social media post",
      "An online encyclopedia"
    ],
    "correctOption": 1
  }
];

Question.insertMany(questions)
  .then(() => {
    console.log("Questions inserted successfully");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Error inserting questions:", err);
    mongoose.disconnect();
  });
