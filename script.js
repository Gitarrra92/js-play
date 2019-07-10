const quotes = [
    {
        name: "Dr. Suess",
        quote: "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams."
    },
    {
        name: "Marilyn Monroe",
        quote: "I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best"
    },
    {
        name: "Stephen King",
        quote: "Get busy living or get busy dying."
    },
    {
        name: "Mark Caine",
        quote: "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself"
    },
    {
        name: "Helen Keller",
        quote: "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us"
    },
    {
        name: "Mark Twain",
        quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do"
    }
];

let myButton = document.querySelector(".button");
let centerSquare = document.querySelectorAll(".center-square");
let one = document.querySelector("#one");
let changeTxt = document.querySelector(".changeTxt");
let two = document.querySelector("#two");
let spinning = document.querySelector("#spinning");
let donald = document.querySelector("#donald1");
let displaytxt = document.querySelector("#display-txt");

let endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';


myButton.addEventListener("click", showQuote);
one.addEventListener("click", changeBackground);
two.addEventListener("click", rotateSquare);
donald.addEventListener(("click"), getDonald);

function showQuote() {
    let randomQuote = Math.floor(Math.random() * quotes.length);

    centerSquare.forEach(function (element) {
        element.innerHTML = quotes[randomQuote].quote;
        element.style.transform = "rotate(10deg)";
    });
}


function changeBackground() {
    changeTxt.innerHTML = "Hello, World!";
    changeTxt.style.color = "white";
    one.style.backgroundColor = "red";
    one.style.borderRadius = "50%";
}

function rotateSquare() {
    two.setAttribute("class", "animated-square");
    spinning.innerHTML = "You spin me right round, Right round round round"
    spinning.style.textAlign = "center";
    spinning.style.padding = "10px";
    spinning.style.color = "white";
}

function getDonald(){
    fetch(endpoint)
        .then(function (response) {
            return response.json();
        })
        .then(function (data){
            displayQuote(data.message);
        })
        .catch(function (){
            console.log("there is an error");
        })
}

function displayQuote(quote) {
    displaytxt.innerHTML = `" `+ quote + ` "`;
}