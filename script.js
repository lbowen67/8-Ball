// The students will code a program that will simulate the old Eight Ball game. The user will be able to click on the Shake button and receive one of twenty pre-program responses. You will use the Math.random method and the Switch statement to code this program.

// The following are the 20 responses:

// It is decidedly so.
// Without a doubt.
// Yes definitely.
// You may rely on it.
// As I see it, yes.
// Most likely.
// Outlook good.
// Yes.
// Signs point to yes.
// Reply hazy, try again.
// Ask again later.
// Better not tell you now.
// Cannot predict now.
// Concentrate and ask again.
// Don't count on it.
// My reply is no.
// My sources say no.
// Outlook not so good.
// Very doubtful.
// It is certain.

let response;


document.getElementById("buttonShake").onclick = function() {
    response = Math.ceil(Math.random() * 20);
    console.log(response);
    switch (response) {
        case 1:
            document.getElementById("labelAnswer").innerHTML = "Your Answer: It is decidedly so.";
            break;
        case 2:
            document.getElementById("labelAnswer").innerHTML = "Your Answer: Without a doubt.";
            break;
        case 3:
            document.getElementById("labelAnswer").innerHTML = "Your Answer: Yes definitely.";
            break;
        case 4:
            document.getElementById("labelAnswer").innerHTML = "Your Answer: You may rely on it.";
            break;
        case 5:
            document.getElementById("labelAnswer").innerHTML = "Your Answer: As I see it, yes.";
            break;
        case 6:
            document.getElementById("labelAnswer").innerHTML = "Your Answer: Most likely.";
            break;
        case 7:
            document.getElementById("labelAnswer").innerHTML = "Your Answer: Outlook good.";
            break;
        case 8:
            document.getElementById("labelAnswer").innerHTML = "Your Answer: Yes.";
            break;
        case 9:
            document.getElementById("labelAnswer").innerHTML = "Your Answer: Signs point to yes.";
            break;
        case 10:
            document.getElementById("labelAnswer").innerHTML = "Your Answer: Reply hazy, try again.";
            break;
        case 11:
            document.getElementById("labelAnswer").innerHTML = "Your Answer: Ask again later.";
            break;
        case 12:
            document.getElementById("labelAnswer").innerHTML = "Your Answer: Better not tell you now.";
            break;
        case 13:
            document.getElementById("labelAnswer").innerHTML = "Your Answer: Cannot predict now.";
            break;
        case 14:
            document.getElementById("labelAnswer").innerHTML = "Your Answer: Concentrate and ask again.";
            break;
        case 15:
            document.getElementById("labelAnswer").innerHTML = "Your Answer: Don't count on it.";
            break;
        case 16:
            document.getElementById("labelAnswer").innerHTML = "Your Answer: My reply is no.";
            break;
        case 17:
            document.getElementById("labelAnswer").innerHTML = "Your Answer: My sources say no.";
            break;
        case 18:
            document.getElementById("labelAnswer").innerHTML = "Your Answer: Outlook not so good.";
            break;
        case 19:
            document.getElementById("labelAnswer").innerHTML = "Your Answer: Very doubtful.";
            break;
        case 20:
            document.getElementById("labelAnswer").innerHTML = "Your Answer: It is certain.";
            break;
    }
}

