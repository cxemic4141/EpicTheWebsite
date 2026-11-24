let Deities = {
  "Verity": 0,
  "Aphrodite": 0,
  "Demeter": 0,
} //Deity, score


let quiz_choice = document.getElementById("quiz_choice")
let quiz_choice_container = document.getElementById("quiz_choice_container")
let questionnare_quiz = document.getElementById("questionnare_quiz")
let current_question = 0

let questions = [
  ["template question", [ ["choice1", "Aphrodite"], ["choice2", "Verity"], ["choice3", "Demeter"], ["choice4", "Demeter"] ]],
  ["What field of study do you prefer more?", [ ["STEM", "Demeter"], ["Humanities", "Aphrodite"] ]],
  ["What's your sexuality", [["Heterosexual", "Demeter"], ["Homosexual", "Aphrodite"], ["Asexual", "Demeter"], ["Bisexual", "Aphrodite"], ["Pansexual", "Aphrodite"]]],
  ["How many backflips can you do?", [ ["1", "Demeter"], ["10", "Aphrodite"], ["9990", "Aphrodite"], ["No...", "Demeter"] ]],
]











function next_question() {
  quiz_choice_container.replaceChildren()
  questionnare_quiz.textContent = questions[current_question][0]

  //questions_set[questionnumber][query and set of choices][choice answer and assigned deity]
  //questions[current_question][0][0][0] //

  for (let choice = 0; choice < questions[current_question][1].length; choice++) {

    let clone_button = quiz_choice.cloneNode(true)
    quiz_choice_container.append(clone_button)
    clone_button.textContent = questions[current_question][1][choice][0]

    clone_button.addEventListener("click", function () {
      Deities[questions[current_question][1][choice][1]] += 1
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
