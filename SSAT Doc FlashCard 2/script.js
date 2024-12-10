const flashCard = document.querySelector(".flashcard-container")
const front_flash_card = document.querySelector(".front")
const back_flash_card = document.querySelector(".back")

const previous_button = document.querySelector(".previous_flashcard")
const next_button = document.querySelector(".next_flashcard")

const question = document.querySelector(".question")
const question_content = document.querySelector(".question-content")
const question_no = document.querySelector("#q-no")
const answer_no = document.querySelector("#a-no")
const answer_content = document.querySelector(".answer-content")
const example = document.querySelector(".example")

console.log(back_flash_card.style.transform);

const flipCard = () => {
  flashCard.classList.toggle("to-back")
  const flashCardStat = window.getComputedStyle(front_flash_card).display;
  
  if (flashCardStat === "flex") {
      front_flash_card.style.display = "none";
      back_flash_card.style.display = "flex";    
  } else {
    front_flash_card.style.display = "flex";
    back_flash_card.style.display = "none";    
  }
 }

 const clickedButton = (button) => {
  button.classList.add("clicked"); 
  setTimeout(() => {
    button.classList.remove("clicked")
  }, 300)
 }

// Define MathJax configuration globally
window.MathJax = {
  tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$', '$$'], ['\\[', '\\]']]
  }
};

// Dynamically load the MathJax library
const script = document.createElement('script');
script.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.min.js";
script.async = true; // Ensure non-blocking
document.head.appendChild(script);


flashCard.addEventListener("click", flipCard)


const questions_bank = [
    {
        id: 1,
        vocabulary_word: "Eminent",
        definition: "Adjective: Famous and respected within a particular sphere.",
        example: "The eminent scientist received numerous awards for her work."
    },
    {
        id: 2,
        vocabulary_word: "Frugal",
        definition: "Adjective: Sparing or economical with regard to money or food.",
        example: "His frugal lifestyle helped him save for retirement."
    },
    {
        id: 3,
        vocabulary_word: "Placate",
        definition: "Verb: To make someone less angry or hostile.",
        example: "The manager tried to placate the upset customer with a refund."
    },
    {
        id: 4,
        vocabulary_word: "Irrational",
        definition: "Adjective: Not logical or reasonable.",
        example: "Her fear of harmless insects seemed irrational."
    },
    {
        id: 5,
        vocabulary_word: "Novel",
        definition: "Adjective: New or unusual in an interesting way.",
        example: "The novel idea won the company a major innovation award."
    },
    {
        id: 6,
        vocabulary_word: "Hindrance",
        definition: "Noun: A thing that provides resistance, delay, or obstruction.",
        example: "The heavy traffic was a hindrance to their progress."
    },
    {
        id: 7,
        vocabulary_word: "Scrupulous",
        definition: "Adjective: Diligent, thorough, and extremely attentive to details.",
        example: "The scrupulous editor caught every typo in the manuscript."
    },
    {
        id: 8,
        vocabulary_word: "Benevolent",
        definition: "Adjective: Well-meaning and kindly.",
        example: "Her benevolent gestures brought smiles to the children’s faces."
    },
    {
        id: 9,
        vocabulary_word: "Quaint",
        definition: "Adjective: Attractively unusual or old-fashioned.",
        example: "The quaint cottage was surrounded by colorful flowers."
    },
    {
        id: 10,
        vocabulary_word: "Imminent",
        definition: "Adjective: About to happen.",
        example: "Dark clouds indicated that a storm was imminent."
    },
    {
        id: 11,
        vocabulary_word: "Voracious",
        definition: "Adjective: Having a very eager approach to an activity, especially consuming large quantities.",
        example: "The voracious reader finished five books in a week."
    },
    {
        id: 12,
        vocabulary_word: "Mitigate",
        definition: "Verb: To make something less severe, harmful, or painful.",
        example: "The doctor prescribed medicine to mitigate the symptoms of the cold."
    },
    {
        id: 13,
        vocabulary_word: "Doubtful",
        definition: "Adjective: Feeling uncertain about something.",
        example: "She was doubtful that the plan would work as expected."
    },
    {
        id: 14,
        vocabulary_word: "Taciturn",
        definition: "Adjective: Reserved or uncommunicative in speech; saying little.",
        example: "The taciturn man sat quietly at the meeting, avoiding conversation."
    },
    {
        id: 15,
        vocabulary_word: "Cursory",
        definition: "Adjective: Hasty and therefore not thorough or detailed.",
        example: "He gave a cursory glance at the report before submitting it."
    },
    {
        id: 16,
        vocabulary_word: "Belligerent",
        definition: "Adjective: Hostile and aggressive.",
        example: "The belligerent fan argued with the referee during the entire game."
    },
    {
        id: 17,
        vocabulary_word: "Ravenous",
        definition: "Adjective: Extremely hungry.",
        example: "After the long hike, they were ravenous and quickly ate their packed lunches."
    },
    {
        id: 18,
        vocabulary_word: "Exuberant",
        definition: "Adjective: Filled with energy, excitement, and cheerfulness.",
        example: "The children’s exuberant laughter filled the playground."
    },
    {
        id: 19,
        vocabulary_word: "Cognizant",
        definition: "Adjective: Aware or conscious of something.",
        example: "She was cognizant of the challenges ahead and prepared accordingly."
    },
    {
        id: 20,
        vocabulary_word: "Skeptical",
        definition: "Adjective: Not easily convinced; having doubts or reservations.",
        example: "He was skeptical about the new product’s effectiveness."
    },
    {
        id: 21,
        vocabulary_word: "Candor",
        definition: "Noun: The quality of being open and honest in expression; frankness.",
        example: "He spoke with candor about his past mistakes."
    },
    {
        id: 22,
        vocabulary_word: "Adversity",
        definition: "Noun: Difficulties or misfortune.",
        example: "She overcame adversity to become a successful entrepreneur."
    },
    {
        id: 23,
        vocabulary_word: "Condescend",
        definition: "Verb: To show feelings of superiority; to be patronizing.",
        example: "The manager’s tone felt condescending to the employees."
    },
    {
        id: 24,
        vocabulary_word: "Altruistic",
        definition: "Adjective: Showing a selfless concern for the well-being of others.",
        example: "The altruistic donor contributed millions to charity."
    },
    {
        id: 25,
        vocabulary_word: "Tangible",
        definition: "Adjective: Perceptible by touch; clear and definite.",
        example: "The excitement in the room was almost tangible."
    },
    {
        id: 26,
        vocabulary_word: "Resilient",
        definition: "Adjective: Able to recover quickly from difficulties.",
        example: "The resilient athlete returned to the field after the injury."
    },
    {
        id: 27,
        vocabulary_word: "Pertinent",
        definition: "Adjective: Relevant or applicable to a particular matter.",
        example: "The lawyer asked only pertinent questions during the trial."
    },
    {
        id: 28,
        vocabulary_word: "Ambivalent",
        definition: "Adjective: Having mixed feelings or contradictory ideas about something or someone.",
        example: "She felt ambivalent about moving to a new city."
    },
    {
        id: 29,
        vocabulary_word: "Reverence",
        definition: "Noun: Deep respect for someone or something.",
        example: "The students showed reverence during the national anthem."
    },
    {
        id: 30,
        vocabulary_word: "Tenacious",
        definition: "Adjective: Not readily relinquishing a position or principle; determined.",
        example: "The tenacious journalist pursued the story despite obstacles."
    },
    {
        id: 31,
        vocabulary_word: "Trivial",
        definition: "Adjective: Of little value or importance.",
        example: "The argument over the color of the walls seemed trivial compared to the bigger issues."
    },
    {
        id: 32,
        vocabulary_word: "Vivid",
        definition: "Adjective: Producing powerful feelings or strong, clear images in the mind.",
        example: "Her vivid description of the landscape painted a beautiful picture."
    },
    {
        id: 33,
        vocabulary_word: "Oblivious",
        definition: "Adjective: Not aware of or concerned about what is happening around one.",
        example: "He was oblivious to the fact that everyone had already left the party."
    },
    {
        id: 34,
        vocabulary_word: "Enigmatic",
        definition: "Adjective: Mysterious or difficult to understand.",
        example: "The enigmatic smile on her face made everyone wonder what she was thinking."
    },
    {
        id: 35,
        vocabulary_word: "Rejuvenate",
        definition: "Verb: To make someone or something look or feel better, younger, or more lively.",
        example: "A good night’s sleep can rejuvenate your body and mind."
    },
    {
        id: 36,
        vocabulary_word: "Superficial",
        definition: "Adjective: Existing or occurring at or on the surface; shallow.",
        example: "His understanding of the subject was superficial, lacking depth."
    },
    {
        id: 37,
        vocabulary_word: "Trepidation",
        definition: "Noun: A feeling of fear or anxiety about something that may happen.",
        example: "She approached the stage with trepidation before giving her speech."
    },
    {
        id: 38,
        vocabulary_word: "Exemplary",
        definition: "Adjective: Serving as a desirable model; representing the best of its kind.",
        example: "His exemplary behavior in class earned him a certificate of achievement."
    },
    {
        id: 39,
        vocabulary_word: "Apathy",
        definition: "Noun: Lack of interest, enthusiasm, or concern.",
        example: "The student’s apathy toward his studies led to his poor grades."
    },
    {
        id: 40,
        vocabulary_word: "Ponder",
        definition: "Verb: To think about something carefully, especially before making a decision or forming an opinion.",
        example: "He took a moment to ponder the question before answering."
    },
    {
        id: 41,
        vocabulary_word: "Metamorphosis",
        definition: "Noun: A change of the form or nature of a thing or person into a completely different one.",
        example: "The caterpillar’s metamorphosis into a butterfly is fascinating."
    },
    {
        id: 42,
        vocabulary_word: "Disparage",
        definition: "Verb: To speak about someone or something in a way that shows strong disapproval and lack of respect.",
        example: "The critic disparaged the movie, calling it a waste of time."
    },
    {
        id: 43,
        vocabulary_word: "Rescind",
        definition: "Verb: To revoke, cancel, or repeal a law, order, or agreement.",
        example: "The company decided to rescind the policy after receiving customer complaints."
    },
    {
        id: 44,
        vocabulary_word: "Prudent",
        definition: "Adjective: Acting with or showing care and thought for the future.",
        example: "It is prudent to save money for unexpected expenses."
    },
    {
        id: 45,
        vocabulary_word: "Dubious",
        definition: "Adjective: Hesitating or doubting; not to be relied upon.",
        example: "His dubious claim about the product's effectiveness raised some questions."
    },
    {
        id: 46,
        vocabulary_word: "Stagnant",
        definition: "Adjective: Not flowing or moving; inactive.",
        example: "The stagnant water in the pond began to grow algae."
    },
    {
        id: 47,
        vocabulary_word: "Vicarious",
        definition: "Adjective: Experienced in the imagination through the feelings or actions of another person.",
        example: "She lived vicariously through her friend’s travels, hearing about every adventure."
    },
    {
        id: 48,
        vocabulary_word: "Furtive",
        definition: "Adjective: Secretive, attempting to avoid notice or attention, typically because of guilt or a belief that discovery would lead to trouble.",
        example: "He cast a furtive glance at the clock, worried he was running late."
    },
    {
        id: 49,
        vocabulary_word: "Ameliorate",
        definition: "Verb: To make something better or more tolerable.",
        example: "The new policy aims to ameliorate the working conditions for employees."
    },
    {
        id: 50,
        vocabulary_word: "Jovial",
        definition: "Adjective: Cheerful and friendly.",
        example: "His jovial personality made him popular at parties."
    }
];




let flashCard_no = 0;

next_button.addEventListener("click", function() {
  clickedButton(this)
  flashCard.classList.add("flashcard-reflect")
  setTimeout(() => {
    flashCard.classList.remove("flashcard-reflect")
  }, 1000)

  if (flashCard_no < questions_bank.length - 1) {
    flashCard_no = flashCard_no + 1;
    question_no.innerHTML = questions_bank[flashCard_no].id;
    question_content.innerHTML = questions_bank[flashCard_no].vocabulary_word;
    answer_no.innerHTML = questions_bank[flashCard_no].id;
    answer_content.innerHTML = questions_bank[flashCard_no].definition;
    example.innerHTML = questions_bank[0].example;
    

    MathJax.typeset();


    if (flashCard.classList.contains("to-back")) {
      // front_flash_card.style.display = "none";
      flipCard()
    }
  }
})

previous_button.addEventListener("click", function() {
  clickedButton(this)

  flashCard.classList.add("flashcard-reflect")
  setTimeout(() => {
    flashCard.classList.remove("flashcard-reflect")
  }, 1000)

  if (flashCard_no >= 1) {
    console.log(flashCard_no);
    flashCard_no = flashCard_no - 1;
    // alert(questions_bank[flashCard_no].answer)
    question_no.innerHTML = questions_bank[flashCard_no].id;
    question_content.innerHTML = questions_bank[flashCard_no].vocabulary_word;
    answer_no.innerHTML = questions_bank[flashCard_no].id;
    answer_content.innerHTML = questions_bank[flashCard_no].definition;
    front_flash_card.style.display = "flex";


    MathJax.typeset();

  }
    
  if (flashCard.classList.contains("to-back")) {
    front_flash_card.style.display = "none";
    flipCard()
  }
})

console.log(question_no.innerHTML);
console.log(question_content.innerHTML);

question_no.innerHTML = questions_bank[0].id;
question_content.innerHTML = questions_bank[0].vocabulary_word;
answer_no.innerHTML = questions_bank[0].id;
answer_content.innerHTML = questions_bank[0].definition;
example.innerHTML = questions_bank[0].example;

if (typeof MathJax !== 'undefined') {
  console.log("MathJax is loaded successfully!");
} else {
  console.error("MathJax failed to load.");
}


