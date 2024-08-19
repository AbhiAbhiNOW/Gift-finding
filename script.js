function showNextPuzzle(currentId, nextId) {
    document.getElementById(currentId).style.display = 'none';
    document.getElementById(nextId).style.display = 'block';
}

function checkRiddle() {
    const riddleAnswer = document.getElementById('riddleAnswer').value.toLowerCase().trim();
    const correctRiddle = "vaishnodevi";
    const resultDiv = document.getElementById('result');

    if (riddleAnswer === correctRiddle) {
        resultDiv.textContent = "Brooo, ye to koi bhi kar sakta tha.";
        resultDiv.className = "correct";
        showNextPuzzle('riddle', 'mathPuzzle');
    } else {
        resultDiv.textContent = "Talliya, thoda shorts dekhna band kar de!!!";
        resultDiv.className = "wrong";
    }
}

function checkMath() {
    const mathAnswer = document.getElementById('mathAnswer').value.trim();
    const correctMath = "20";
    const resultDiv = document.getElementById('result');

    if (mathAnswer === correctMath) {
        resultDiv.textContent = "Aree ye to bacho ka saval tha vo alag baat maine bhi google se dekha tha";
        resultDiv.className = "correct";
        showNextPuzzle('mathPuzzle', 'scramblePuzzle');
    } else {
        resultDiv.textContent = "koi 5th me dalo isse";
        resultDiv.className = "wrong";
    }
}

function checkScramble() {
    const scrambleAnswer = document.getElementById('scrambleAnswer').value.toLowerCase().trim();
    const correctScramble = "all saving";
    const resultDiv = document.getElementById('result');

    if (scrambleAnswer === correctScramble) {
        resultDiv.textContent = "You’ve unscrambled the word! Now please forget about gift.";
        resultDiv.className = "correct";
        showNextPuzzle('scramblePuzzle', 'sweetPuzzle');
    } else {
        resultDiv.textContent = "Hmmmm.....";
        resultDiv.className = "wrong";
    }
}

function checkSweet() {
    const sweetAnswer = document.getElementById('sweetAnswer').value.toLowerCase().trim();
    const correctSweet = "cheesecake";
    const resultDiv = document.getElementById('result');

    if (sweetAnswer === correctSweet) {
        resultDiv.textContent = "Dimag to hai aapme";
        resultDiv.className = "correct";
        showNextPuzzle('sweetPuzzle', 'nicknamePuzzle');
    } else {
        resultDiv.textContent = "Hmmmm.. ye uumid nahi thi mujjhe";
        resultDiv.className = "wrong";
    }
}

function checkNickname() {
    const nicknameAnswer = document.getElementById('nicknameAnswer').value.toLowerCase().trim();
    const correctNickname = "alien";
    const resultDiv = document.getElementById('result');

    if (nicknameAnswer === correctNickname) {
        resultDiv.textContent = "Correct! This means you really ar a alien!";
        resultDiv.className = "correct";
        showNextPuzzle('nicknamePuzzle', 'messagePuzzle');
    } else {
        resultDiv.textContent = "Nope, think about something you are.";
        resultDiv.className = "wrong";
    }
}

function checkMessage() {
    const messageAnswer = document.getElementById('messageAnswer').value.toLowerCase().trim();
    const correctMessage = "chin tpak dam dam";
    const resultDiv = document.getElementById('result');

    if (messageAnswer === correctMessage) {
        resultDiv.textContent = "Abe chapri!";
        resultDiv.className = "correct";
        showNextPuzzle('messagePuzzle', 'quizPuzzle');
    } else {
        resultDiv.textContent = "bhai itta shorts dekhne ka kya faida";
        resultDiv.className = "wrong";
    }
}

function checkQuiz() {
    const quizAnswer = document.getElementById('quizAnswer').value.toLowerCase().trim();
    const correctQuiz = "red and yellow";
    const resultDiv = document.getElementById('result');

    if (quizAnswer === correctQuiz) {
        resultDiv.textContent = "Abe tukka acha tha.";
        resultDiv.className = "correct";
        showNextPuzzle('quizPuzzle', 'finalPuzzle');
    } else {
        resultDiv.textContent = "vaise to mujhe bhi nahi yaad , lekin do colour the.";
        resultDiv.className = "wrong";
    }
}

function checkFinal() {
    const finalAnswer = document.getElementById('finalAnswer').value.toLowerCase().trim();
    const correctFinal = "cool and smart";
    const resultDiv = document.getElementById('result');

    if (finalAnswer === correctFinal) {
        resultDiv.textContent = "Its in the place where I hide it in the last gift quiz (The best Place)!";
        resultDiv.className = "correct";
        showNextPuzzle('finalPuzzle', 'result');
    } else {
        resultDiv.textContent = "maar lagegi";
        resultDiv.className = "wrong";
    }
}
