console.log("Moodle+ successfully loaded!");
const login_element = document.querySelector("#login"); // Fill the selector for the login element in ""
let login_text = login_element.innerText;

let question = login_text.split("\n")[3]; // Use split and array operations on the login_text string to extract the question

let answer = ""; // Use if conditions to parse the question and calculate the answer. Make cases for all types of captcha asked

if (question.includes('Please add')){
    let alpha = Number(question.split(' ')[2]);
    let beta  = Number(question.split(' ')[4]);
    answer = alpha + beta;
}else if(question.includes('Please enter first value')){
    let alpha = question.split(' ')[4];
    answer = alpha;
}else if(question.includes('Please enter second value')){
    let beta = question.split(' ')[6];
    answer = beta;
}else if(question.includes('Please subtract')){
    let alpha = Number(question.split(' ')[2]);
    let beta  = Number(question.split(' ')[4]);
    answer = alpha - beta;
}
const captcha_input_element = document.querySelector("#valuepkg3"); // Fill the selector for the captcha input element in ""
captcha_input_element.value = answer;
