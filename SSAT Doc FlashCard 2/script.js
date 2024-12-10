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


