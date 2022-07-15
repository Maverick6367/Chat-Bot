



const chatPlace = document.querySelector('.chat-box');
const sendBox = document.querySelector('.send-box');
const chatHead = document.querySelector('.chat-bot-head ');
const chatBotContainer = document.querySelector('.chat-bot-container ');
const upbutton = document.getElementById('upBtn');
const downbutton = document.getElementById('downBtn');
const sendBtn = document.getElementById('send-btn');
let userInput = document.getElementById('message-input');
let botCurrentTime = document.getElementById('currentTimeBot');


downbutton.addEventListener('click', () => {
    chatBotContainer.style.height = '5vh';
    sendBox.style.display = 'none';
    chatPlace.style.display = 'none';
    chatHead.style.opacity = 0.6;
    downbutton.style.display = 'none';
    upbutton.style.display = 'block';
    
    
})
upbutton.addEventListener('click', () => {
    chatHead.style.opacity = 1;
    chatBotContainer.style.height = '50vh';
    sendBox.style.display = 'flex';
    chatPlace.style.display = 'block';
    downbutton.style.display = 'block';
    upbutton.style.display = 'none';
   
})




// Targeting button on input press key enter without form


userInput.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        sendBtn.click();
    }

})


// Escape to Mininize Chat bot

sendBtn.addEventListener('click', () => {
    animationMessage.style.display = 'block';

    let messageLenght = Array.from(userInput.value).length;
    // console.log(Array.from(userInput.value)[messageLenght - 1]);



    const createdDiv = document.createElement('div');
    const createdDivAnswer = document.createElement('div');
    createdDiv.className = 'right-chat-box message-chat';
    createdDivAnswer.className = 'left-chat-box message-chat';


    // Converting the question into lower case and passing to a function

    let lowerQuestion = userInput.value.toLowerCase().toString();
    let answer = responseCheck(lowerQuestion);
    createdDivAnswer.innerHTML = `<p>${answer}<p>`;

    // creeated time div for user
    const createdUserTimeDiv = document.createElement('div');
    createdUserTimeDiv.id = 'currentTimeUser';
    createdUserTimeDiv.className = 'currentTime';
    let hours = showHours();
    let mins = showMins();
    if (hours < 10) {
        if (mins < 10) {
            createdUserTimeDiv.innerText = `${"0" + hours + ":" + "0" + mins}`;
        }
        else {
            createdUserTimeDiv.innerText = `${"0" + hours + ":" + mins}`;

        }
    }
    else {
        createdUserTimeDiv.innerText = `${hours + ":" + mins}`;

    }
    // Bolding the text

    if (Array.from(userInput.value)[messageLenght - 1] == '*' && Array.from(userInput.value)[0] == '*') {

        let Text = (userInput.value).toString();
        Text = Text.slice(0, -1);
        Text = Text.slice(1);


        createdDiv.innerHTML = `<b><p>${Text}</p></b>`;

    }
    else {
        createdDiv.innerHTML = `<p>${userInput.value}</p>`;
    }
    chatPlace.appendChild(createdDiv);
    createdDiv.appendChild(createdUserTimeDiv);



    setTimeout(() => {

        // created time div for bot
        const createdBotTimeDiv = document.createElement('div');
        createdBotTimeDiv.id = 'currentTimeBot';
        createdBotTimeDiv.className = 'currentTime';
        let hours = showHours();
        let mins = showMins();
        if (hours < 10) {
            if (mins < 10) {
                createdBotTimeDiv.innerText = `${"0" + hours + ":" + "0" + mins}`;
            }
            else {
                createdBotTimeDiv.innerText = `${"0" + hours + ":" + mins}`;

            }
        }
        else {
            createdBotTimeDiv.innerText = `${hours + ":" + mins}`;

        }


        loadingAnimation();

        setTimeout(() => {

            chatPlace.appendChild(createdDivAnswer);
            createdDivAnswer.appendChild(createdBotTimeDiv);
            chatPlace.scrollTo(0, chatPlace.scrollHeight);
            animationMessage.style.display = 'none';



        }, 1000);

    }, 0);
    userInput.value = '';
    chatPlace.scrollTo(0, chatPlace.scrollHeight);

})


// ----------------------Q & A---------------------------------
// function responseCheck(ques) {



// }
const responseCheck = (question) => {

    if (question == 'hello' || question == 'hi' || question == 'hey') {
        return "Hi! How may i assist you?";
    }
    else if (question == '') {
        userInput.value = `<i>Empty message can't be sent :(</i>`
        return `<i><i class="fa-solid fa-ban" style="color:grey;"></i> Oops! type something please<i>`;
    }
    else if (question.includes("my name is")) {
        let nameString = userInput.value.toString();
        let searchNameIndex = nameString.search('my name is');
        let userName = nameString.substring(searchNameIndex + 11);
        localStorage.setItem("name", userName);
        return "Okay I'll remember that";
    }
    else if (question == `what's my name` || question.includes("what is my name") || question.includes('tell me my name')) {

        return ("Your name is " + localStorage.getItem('name')) + " :)";
    }
    else if (question.includes('thanks') || question.includes('thank you') || question.includes('thankyou')) {
        return "Always here to help " + localStorage.getItem('name') + " :)";
    }
    else if (question.includes('are you human')) {
        return "No i'm a programmed Robot.";
    }
    else if (question.includes('what day is today') || question.includes(`what's the day`)) {

        const myDayObj = {
            '0': "Sunday",
            '1': "Monday",
            '2': "Tuesday",
            '3': "Wednesday",
            '4': "Thursday",
            '5': "Friday",
            '6': "Saturday"
        }
        let myday = new Date().getDay();
        return myDayObj[myday];
    }
    else if (question == 'ok' || question == 'okay' || question == 'alright' || question == 'got it' || question == 'got that') {
        return "Yeah ;)";
    }
    else if (question == 'bye' || question == 'see you later' || question == 'see you') {
        return "You can come here anytime.";
    }
    else if (question.includes('who made you') || question.includes('who created you') || question.includes('who developed you')) {
        return `His name is Mohit, to know more about him <a href="https://www.linkedin.com/in/mohit-khatri-1b521922a/">click here</a> to visit his LinkedIn `;
    }
    else if(question.includes('who is your mother') || question.includes(`tell me your mother's name`)){
        return "I am Robot I have no parents and no childern as well :|";
    }
    else if(question.includes('where do you live') || question.includes(`your address`)){
        return "I live in clouds :)";
    }
    else if(question.includes('how are you') || question.includes('how about you')){
        return "I am learning and doing great";
    }
    else if(question.includes('what should i ask you') || question.includes("what thing you know")){
        return `<ul id="listOfQues"> <li><i>where do you live</li><br><li>who made you</li><br> <li>what day is today</li><br><li>you can also tell me your name just by typing "my name is (your name)"</li><br><li>you can also suggest my creater about more question at <b>mohit4bug@gmail.com<b> <button title="copy" id="copyEmail"><i class="fa-solid fa-copy"></i></button></i></ul>`;
    }
    else {
        return "Sorry! I didn't understand";
    }




}


const showHours = () => {
    let mydate = new Date();
    return mydate.getHours();
}
const showMins = () => {
    let mydate = new Date();
    return mydate.getMinutes();
}


// Created a whole animation div and insides spans
const animationMessage = document.createElement('div');
animationMessage.id = 'loadAnimation';
// const createdAnimationref = document.getElementById('loadAnimation');
animationMessage.className = 'message-chat loadChat';

const dot_1_created = document.createElement('span');
const dot_2_created = document.createElement('span');
const dot_3_created = document.createElement('span');
dot_1_created.className = 'dots';
dot_2_created.className = 'dots';
dot_3_created.className = 'dots';
dot_1_created.id = 'first-dot';
dot_2_created.id = 'second-dot';
dot_3_created.id = 'third-dot';
dot_1_created.innerText = `●`;
dot_2_created.innerText = `●`;
dot_3_created.innerText = `●`;
dot_1_created.style.top = '4x';
dot_3_created.style.top = '4px';
dot_2_created.style.top = '4px';
animationMessage.appendChild(dot_1_created);
animationMessage.appendChild(dot_2_created);
animationMessage.appendChild(dot_3_created);


const dot_1 = document.getElementById('first-dot');
const dot_2 = document.getElementById('second-dot');
const dot_3 = document.getElementById('third-dot');



const loadingAnimation = () => {
    chatPlace.appendChild(animationMessage);

    setTimeout(() => {
        clearInterval(resetTime);
    }, 750);

    const resetTime = setInterval(() => {


        setTimeout(() => {

            dot_1_created.style.top = '1px';
            dot_3_created.style.top = '7px';
        }, 0);
        setTimeout(() => {

            dot_2_created.style.top = '1px';
            dot_1_created.style.top = '7px';
        }, 100);
        setTimeout(() => {

            dot_3_created.style.top = '1px';
            dot_2_created.style.top = '7px';
        }, 200);

    }, 300);


}



