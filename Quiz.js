let Deities = {
  "Verity": 0,
  "Aphrodite": 0,
  "Demeter": 0,
  "Poseidon": 0,
  "Aphrodite": 0,
  "Apollo": 0,
  "Artemis": 0,
  "Persephone": 0,
  "Athena": 0,
  "Hades": 0,
} //Deity, score


let quiz_choice = document.getElementById("quiz_choice")
const quiz_choice_container = document.getElementById("quiz_choice_container")
const questionnare_quiz = document.getElementById("questionnare_quiz")
const question_counter = document.getElementById("question_counter")
let current_question = 0

let questions = [
  ["What is your ideal weekend?",
  [
    ["Hosting a massive party with great music, food, and zero bedtime.", ["Poseidon", "Aphrodite", "Artemis"]],
    ["Going on a solo hike, camping, or spending time around animals", ["Artemis","Persephone","Demeter"]],
    ["Curled up at home reading, researching, or learning a new skill.", ["Athena","Demeter","Hades"]],
    ["Traveling somewhere new on a whim without an itinerary.", ["Artemis", "Apollo", "Persephone"]]
  ]
  ],

  ["What motivates you most in life?",
  [
    ["Power, leadership, and leaving a lasting legacy.", ["Poseidon","Ares"]],
    ["Knowledge, wisdom, and solving complex problems.", ["Athena","Hades"]],
    ["Freedom, adventure, and living by your own rules.", ["Artemis","Apollo"]],
    ["Love, beauty, and deep emotional connections.", ["Aphrodite", "Persephone", "Demeter"]]
  ]
  ],

  ["Someone wrongs you or a close friend. What’s your reaction?",
  [
    ["Confront them head-on—no one disrespects you or your people.", ["Poseidon", "Ares"]],
    ["Teach them a lesson so they never try it again.", ["Athena","Persephone"]],
    ["Brush it off; they aren't worth the energy.", ["Demeter","Apollo"]],
    ["Go elsewhere and never look back.", ["Hades", "Artemis", "Aphrodite"]]
  ]
  ],

  ["What is your biggest strength?",
  [
    ["Unshakeable confidence and decisiveness.", ["Aphrodite", "Ares", "Poseidon"]],
    ["Sharp logic and staying cool under pressure.", ["Athena","Hades"]],
    ["Boundless energy and bringing joy to others.", ["Apollo","Persephone"]],
    ["Loyalty, focus, and incredible craftsmanship.", ["Demeter", "Athena", "Artemis"]],
  ]
  ],

  ["What matters most to you at the end of the day?",
  [
    ["Respect and authority.", ["Poseidon", "Ares"]],
    ["Wisdom and truth.", ["Athena","Artemis"]],
    ["Freedom and fun.", ["Apollo","Artemis","Persephone"]],
    ["Peace and loyalty.", ["Demeter", "Athena", "Artemis"]],
  ]
  ],

  ["Pick a signature aesthetic or style:",
  [
    ["Sharp, tailored power outfits and statement gold jewelry.", ["Poseidon","Ares","Apollo"]],
    ["Minimalist, practical, and effortlessly put-together.", ["Athena","Hades","Demeter"]],
    ["Bold colors, vintage prints, and expressive accessories. ", ["Persephone","Aphrodite","Apollo"]],
    ["All-black, leather, silver rings, and cozy dark layers.", ["Hades", "Ares"]],
  ]
  ],

  ["What compliment means the most to you?",
  [
    ["You make everyone feel safe and loved.", ["Demeter","Persephone","Artemis"]],
    ["You’re the smartest person in the room.", ["Athena","Ares","Hades"]],
    ["Life is never boring when you’re around.", ["Apollo","Poseidon","Aphrodite"]],
    ["I trust you more than anyone else.", ["Persephone", "Athena"]],
  ]
  ],

  ["What’s your biggest pet peeve in other people?",
  [
    ["Cowardice.", ["Athena","Ares"]],
    ["Ignorance.", ["Athena","Persephone","Hades"]],
    ["Taking life too serious or killjoy.", ["Apollo","Poseidon"]],
    ["Fake friendliness and breaking promises.", ["Demeter", "Artemis","Persephone"]],
  ]
  ],

  ["Choose a mythical artifact to keep in your pocket:",
  [
    ["A crown that commands instant respect from anyone who sees it.", ["Poseidon","Ares"]],
    ["An hourglass that lets you pause time for five minutes to think.", ["Hades","Athena","Demeter"]],
    ["A mirror that reveals what people truly desire in their hearts.", ["Aphrodite","Artemis","Persephone"]],
    ["A skeleton key that opens any locked door in the world.", ["Athena", "Apollo","Persephone"]],
  ]
  ],

  ["You’re offered a seat on the Olympian Council. What’s your first demand?",
  [
    ["Final say whenever the rest of the gods reach a stalemate.", ["Poseidon","Athena","Ares"]],
    ["Complete access to all historical records and secret prophecies.", ["Hades","Athena"]],
    ["Weekly festivals—mandatory attendance for all gods.", ["Apollo","Aphrodite","Persephone"]],
    ["Strictly zero meetings after sunset—nights are for celebrating.", ["Artemis", "Demeter","Persephone"]],
  ]
  ],

]



















function next_question() {
  question_counter.textContent = current_question+1+"/"+questions.length
  quiz_choice_container.replaceChildren()
  questionnare_quiz.textContent = questions[current_question][0]

  //questions_set[questionnumber][query and set of choices][choice answer and assigned deity]
  //questions[current_question][0][0][0] //

  for (let choice = 0; choice < questions[current_question][1].length; choice++) {

    let clone_button = quiz_choice.cloneNode(true)
    quiz_choice_container.append(clone_button)
    clone_button.textContent = questions[current_question][1][choice][0]

    clone_button.addEventListener("click", function () {
      for (let pointed_deity in questions[current_question][1][choice][1]) {
        console.log(questions[current_question][1][choice][1][pointed_deity])
        Deities[questions[current_question][1][choice][1][pointed_deity]] += 1
      }

      current_question += 1
      console.log(Deities)
      if (current_question >= questions.length){
        quiz_finished()
      }
      else {
        next_question()
      }



    })


  }



}


function quiz_finished() {
  console.log("loser")
  quiz_choice_container.replaceChildren()
  let highest_score = 0
  let chosen_deity = "n/a"

  for (let deity in Deities) {
    if (Deities[deity] > highest_score) {
      highest_score = Deities[deity]
      chosen_deity = deity
    }
  }
  questionnare_quiz.textContent = "Your Deity is: "+chosen_deity
}


next_question()
