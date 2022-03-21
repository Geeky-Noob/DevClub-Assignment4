console.log("Moodle+ successfully loaded!");
const login_element = document.querySelector("form#login"); // Fill the selector for the login element in ""
let login_text = login_element.innerText;

let question = login_text.split('\n')[3]; // Use split and array operations on the login_text string to extract the question
let main_ques=question.split(' ')
let final_ans=0

if (main_ques[1]=='enter') {
    if (main_ques[2]=='first'){
            final_ans=Number(main_ques[4])
    } else{
        final_ans=Number(main_ques[6])
    }
} else if (main_ques[1]=='add'){
    final_ans=Number(main_ques[2])+Number(main_ques[4])
} else{
    final_ans=Number(main_ques[2])-Number(main_ques[4])
}

let answer = final_ans; // Use if conditions to parse the question and calculate the answer. Make cases for all types of captcha asked

const captcha_input_element = document.querySelector("input#valuepkg3"); // Fill the selector for the captcha input element in ""
captcha_input_element.value = answer;
