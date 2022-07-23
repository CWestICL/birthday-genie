const readline = require("readline");
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

const questions = [
    {qText: "Is the day number even?", qNum: 1},
    {qText: "Is the day number odd?", qNum: 2},
    {qText: "Is the day number a single digit?", qNum: 3},
    {qText: "Is the day number in the 10's?", qNum: 4},
    {qText: "Is the day number in the 20's?", qNum: 5},
    {qText: "Does your birth month end in '-ber'?", qNum: 6},
    {qText: "Is your birth month 5 letters or fewer?", qNum: 7},
    {qText: "Is your star sign represented by an animal?", qNum: 8},
    {qText: "Does your star sign end in a vowel?", qNum: 9},
    {qText: "Does your birth month end in '-uary'?", qNum: 10},
    {qText: "Does your birth month start with the letter 'J'?", qNum: 11},
    {qText: "Does your star sign end with the letter 'S'?", qNum: 12},
    {qText: "Is the day number a multiple of 3?", qNum: 13},
    //{qText: "Is the month number even?", qNum: 14},
    //{qText: "Is the month number odd?", qNum: 15}
];

const dates = genDates("2020-01-01","2020-12-31");

let possDays = genNum(31);
let possMonths = genNum(12);
let possSigns = [
    {Name: "Ari", Start: "2020-03-21", End: "2020-04-19", MonthNum: [3,4]},
    {Name: "Tau", Start: "2020-04-20", End: "2020-05-20", MonthNum: [4,5]},
    {Name: "Gem", Start: "2020-05-21", End: "2020-06-21", MonthNum: [5,6]},
    {Name: "Can", Start: "2020-06-22", End: "2020-07-22", MonthNum: [6,7]},
    {Name: "Leo", Start: "2020-07-23", End: "2020-08-22", MonthNum: [7,8]},
    {Name: "Vir", Start: "2020-08-23", End: "2020-09-22", MonthNum: [8,9]},
    {Name: "Lib", Start: "2020-09-23", End: "2020-10-23", MonthNum: [9,10]},
    {Name: "Sco", Start: "2020-10-24", End: "2020-11-21", MonthNum: [10,11]},
    {Name: "Sag", Start: "2020-11-22", End: "2020-12-21", MonthNum: [11,12]},
    {Name: "Cap1", Start: "2020-12-22", End: "2020-12-31", MonthNum: [12,1]},
    {Name: "Cap2", Start: "2020-01-01", End: "2020-01-19", MonthNum: [12,1]},
    {Name: "Aqu", Start: "2020-01-20", End: "2020-02-18", MonthNum: [1,2]},
    {Name: "Pis", Start: "2020-02-19", End: "2020-03-20", MonthNum: [2,3]}
];
let signDates = genSignDates();

function genNum(num){
    let array = [];
    for (i = 0; i < num; i++) {
        array.push(i+1);
    }
    return array;
}

function genDates(start,end) {
    let array = [];
    let startArr = start.split("-");
    let endArr = end.split("-");
    startArr[1]--;
    endArr[1]--;
    let startDate = new Date(Date.UTC(startArr[0],startArr[1],startArr[2]));
    let endDate = new Date(Date.UTC(endArr[0],endArr[1],endArr[2]));
    //console.log("Start:",start,"=>",startDate);
    //console.log("End:",end,"=>",endDate);
    while (startDate.getTime() <= endDate.getTime()) {
        //console.log("Start:",startDate.getTime(),"End:",endDate.getTime());
        array.push(new Date(startDate));
        startDate.setUTCDate(startDate.getUTCDate() + 1);
        /*
        console.log("New:",startDate);
        console.log("Check:",endDate);
        console.log("New:",startDate.getTime());
        console.log("Check:",endDate.getTime());
        console.log(startDate <= endDate);
        console.log(startDate.getTime() <= endDate.getTime());
        */
    }
    return array;
}

//console.log("Dates:",dates,dates.length);

function genSignDates() {
    let array = [];
    for (i = 0; i < possSigns.length; i++) {
        let signArray = genDates(possSigns[i].Start,possSigns[i].End);
        //console.log(possSigns[i].Name,signArray,signArray.length);
        for (x = 0; x < signArray.length; x++) {
            array.push(signArray[x]);
        }
    }
    return array;
}

//console.log("Sign Dates:",signDates,signDates.length);

function genAnimalDates() {
    let array = [];
    for (i = 0; i < possSigns.length; i++) {
        if (possSigns[i].Name === "Ari" || possSigns[i].Name === "Tau" || possSigns[i].Name === "Can" || possSigns[i].Name === "Leo" || possSigns[i].Name === "Sco" || possSigns[i].Name === "Cap1" || possSigns[i].Name === "Cap2" || possSigns[i].Name === "Pis") {
            let signArray = genDates(possSigns[i].Start,possSigns[i].End);
            //console.log(possSigns[i].Name,signArray,signArray.length);
            for (x = 0; x < signArray.length; x++) {
                array.push(signArray[x]);
            }
        }
    }
    return array;
}

const animalDates = genAnimalDates();

function genVowelDates() {
    let array = [];
    for (i = 0; i < possSigns.length; i++) {
        if (possSigns[i].Name === "Gem" || possSigns[i].Name === "Leo" || possSigns[i].Name === "Vir" || possSigns[i].Name === "Lib" || possSigns[i].Name === "Sco") {
            let signArray = genDates(possSigns[i].Start,possSigns[i].End);
            //console.log(possSigns[i].Name,signArray,signArray.length);
            for (x = 0; x < signArray.length; x++) {
                array.push(signArray[x]);
            }
        }
    }
    return array;
}

const vowelDates = genVowelDates();

function genSDates() {
    let array = [];
    for (i = 0; i < possSigns.length; i++) {
        if (possSigns[i].Name === "Ari" || possSigns[i].Name === "Tau" || possSigns[i].Name === "Sag" || possSigns[i].Name === "Aqu" || possSigns[i].Name === "Pis") {
            let signArray = genDates(possSigns[i].Start,possSigns[i].End);
            //console.log(possSigns[i].Name,signArray,signArray.length);
            for (x = 0; x < signArray.length; x++) {
                array.push(signArray[x]);
            }
        }
    }
    return array;
}

const sDates = genSDates();

let questionStr;
let questionNum;
let questionCode;

//Question functions
function genQuestion() {
    if (questions.length === 0) {
        console.log("\nYou've stumped me!\n");
    }
    else {
        questionNum = Math.floor(Math.random() * questions.length);
        //questionNum = 0;
        questionStr = questions[questionNum].qText;
        questionCode = questions[questionNum].qNum;
    }
}

function askQuestion() {
    genQuestion();
    rl.question(`${questionStr}\n`,
    (userInput) => {
        if (userInput === "yes" || userInput === "y") {
            console.log("\nHmmmm...\n");
            answerInput(true);
        }
        else if (userInput === "no" || userInput === "n") {
            console.log("\nHmmmm...\n");
            answerInput(false);
        }
        else {
            rl.setPrompt(`Please answer 'yes' or 'no'\n`);
            rl.prompt();
            rl.on("line",(userInput) => {
                if (userInput === "yes" || userInput === "y") {
                    console.log("\nHmmmm...\n");
                    answerInput(true);
                }
                else if (userInput === "no" || userInput === "n") {
                    console.log("\nHmmmm...\n");
                    answerInput(false);
                }
                else {
                    rl.prompt();
                }
            })
        }
    });
}

//Answer functions
function answerInput(answ) {
    if (questionCode === 1) {
        dayIsEven(answ);
    }
    else if (questionCode === 2) {
        dayIsEven(!answ);
    }
    else if (questionCode === 3) {
        daySingleDigit(answ);
    }
    else if (questionCode === 4) {
        dayTenDigit(answ);
    }
    else if (questionCode === 5) {
        dayTwentyDigit(answ);
    }
    else if (questionCode === 6) {
        monthBer(answ);
    }
    else if (questionCode === 7) {
        monthFive(answ);
    }
    else if (questionCode === 8) {
        signAnimal(answ);
    }
    else if (questionCode === 9) {
        signVowel(answ);
    }
    else if (questionCode === 10) {
        monthUary(answ);
    }
    else if (questionCode === 11) {
        monthJ(answ);
    }
    else if (questionCode === 12) {
        signS(answ);
    }
    else if (questionCode === 13) {
        dayThree(answ);
    }

    checkQuestions();
    askQuestion();
}

function dayIsEven(answ) {
    //console.log("Is even?",answ);
    let array = [];
    for (i = 0; i < possDays.length; i++) {
        if (answ) {
            if (possDays[i]%2 === 0) {
                array.push(possDays[i]);
            }
        }
        else {
            if (possDays[i]%2 !== 0) {
                array.push(possDays[i]);
            }
        }
    }
    possDays = array;
}

function daySingleDigit(answ) {
    let array = [];
    for (i = 0; i < possDays.length; i++) {
        if (answ) {
            if (possDays[i] < 10) {
                array.push(possDays[i]);
            }
        }
        else {
            if (possDays[i] > 9) {
                array.push(possDays[i]);
            }
        }
    }
    possDays = array;
}

function dayTenDigit(answ) {
    let array = [];
    for (i = 0; i < possDays.length; i++) {
        if (answ) {
            if (possDays[i] > 9 && possDays[i] < 20) {
                array.push(possDays[i]);
            }
        }
        else {
            if (possDays[i] < 10 || possDays[i] > 19) {
                array.push(possDays[i]);
            }
        }
    }
    possDays = array;
}

function dayTwentyDigit(answ) {
    let array = [];
    for (i = 0; i < possDays.length; i++) {
        if (answ) {
            if (possDays[i] > 19 && possDays[i] < 30) {
                array.push(possDays[i]);
            }
        }
        else {
            if (possDays[i] < 20 || possDays[i] > 29) {
                array.push(possDays[i]);
            }
        }
    }
    possDays = array;
}

function monthBer(answ) {
    let array = [];
    for (i = 0; i < possMonths.length; i++) {
        if (answ) {
            if (possMonths[i] > 8) {
                array.push(possMonths[i]);
            }
        }
        else {
            if (possMonths[i] < 9) {
                array.push(possMonths[i]);
            }
        }
    }
    possMonths = array;
}

function monthFive(answ) {
    let array = [];
    for (i = 0; i < possMonths.length; i++) {
        if (answ) {
            if (possMonths[i] > 2 && possMonths[i] < 8) {
                array.push(possMonths[i]);
            }
        }
        else {
            if (possMonths[i] < 3 || possMonths[i] > 7) {
                array.push(possMonths[i]);
            }
        }
    }
    possMonths = array;
}

function signAnimal(answ) {
    let array = [];
    for (i = 0; i < possSigns.length; i++) {
        if (answ) {
            if (possSigns[i].Name === "Ari" || possSigns[i].Name === "Tau" || possSigns[i].Name === "Can" || possSigns[i].Name === "Leo" || possSigns[i].Name === "Sco" || possSigns[i].Name === "Cap1" || possSigns[i].Name === "Cap2" || possSigns[i].Name === "Pis") {
                array.push(possSigns[i]);
            }
        }
        else {
            if (possSigns[i].Name === "Gem" || possSigns[i].Name === "Vir" || possSigns[i].Name === "Lib" || possSigns[i].Name === "Sag" || possSigns[i].Name === "Aqu") {
                array.push(possSigns[i]);
            }
        }
    }
    possSigns = array;
}

function signVowel(answ) {
    let array = [];
    for (i = 0; i < possSigns.length; i++) {
        if (answ) {
            if (possSigns[i].Name === "Gem" || possSigns[i].Name === "Leo" || possSigns[i].Name === "Vir" || possSigns[i].Name === "Lib" || possSigns[i].Name === "Sco") {
                array.push(possSigns[i]);
            }
        }
        else {
            if (possSigns[i].Name === "Ari" || possSigns[i].Name === "Tau" || possSigns[i].Name === "Can" || possSigns[i].Name === "Sag" || possSigns[i].Name === "Cap1" || possSigns[i].Name === "Cap2" || possSigns[i].Name === "Aqu" || possSigns[i].Name === "Pis") {
                array.push(possSigns[i]);
            }
        }
    }
    possSigns = array;
}

function monthUary(answ) {
    let array = [];
    for (i = 0; i < possMonths.length; i++) {
        if (answ) {
            if (possMonths[i] < 3) {
                array.push(possMonths[i]);
            }
        }
        else {
            if (possMonths[i] > 2) {
                array.push(possMonths[i]);
            }
        }
    }
    possMonths = array;
}

function monthJ(answ) {
    let array = [];
    for (i = 0; i < possMonths.length; i++) {
        if (answ) {
            if (possMonths[i] === 1 || possMonths[i] === 6 || possMonths[i] === 7) {
                array.push(possMonths[i]);
            }
        }
        else {
            if ((possMonths[i] > 1 && possMonths[i] < 6) || possMonths[i] > 7) {
                array.push(possMonths[i]);
            }
        }
    }
    possMonths = array;
}

function signS(answ) {
    let array = [];
    for (i = 0; i < possSigns.length; i++) {
        if (answ) {
            if (possSigns[i].Name === "Ari" || possSigns[i].Name === "Tau" || possSigns[i].Name === "Sag" || possSigns[i].Name === "Aqu" || possSigns[i].Name === "Pis") {
                array.push(possSigns[i]);
            }
        }
        else {
            if (possSigns[i].Name !== "Ari" && possSigns[i].Name !== "Tau" && possSigns[i].Name !== "Sag" && possSigns[i].Name !== "Aqu" && possSigns[i].Name !== "Pis") {
                array.push(possSigns[i]);
            }
        }
    }
    possSigns = array;
}

function dayThree(answ) {
    let array = [];
    for (i = 0; i < possDays.length; i++) {
        if (answ) {
            if (possDays[i]%3 === 0) {
                array.push(possDays[i]);
            }
        }
        else {
            if (possDays[i]%3 !== 0) {
                array.push(possDays[i]);
            }
        }
    }
    possDays = array;
}

//Filter functions
function genRemainingDates() {
    signDates = genSignDates();
    let possDates = [];
    let newPossDays = [];
    let newPossMonths = [];
    let newPossSigns = [];
    for (i = 0; i < dates.length; i++) {
        for (x = 0; x < possDays.length; x++) {
            if (dates[i].getDate() === possDays[x]) {
                //console.log("Date:",dates[i],"Day:",dates[i].getDate());
                for (y = 0; y < possMonths.length; y++) {
                    if (dates[i].getMonth() === possMonths[y] - 1) {
                        //console.log("Date:",dates[i],"Month:",dates[i].getMonth());
                        for (z = 0; z < signDates.length; z++) {
                            if (dates[i].getTime() === signDates[z].getTime()) {
                                possDates.push(dates[i]);
                                newPossDays.push(dates[i].getDate());
                                newPossMonths.push(dates[i].getMonth() + 1);
                            }
                        }
                    }
                }
            }
        }
    }
    possDays = [...new Set(newPossDays)];
    possMonths = [...new Set(newPossMonths)];

    for (i = 0; i < possSigns.length; i++) {
        let signDates = genDates(possSigns[i].Start,possSigns[i].End);
        //console.log(possSigns[i],signDates);
        for (x = 0; x < possDates.length; x++) {
            for (y = 0; y < signDates.length; y++) {
                //console.log(possDates[x].getTime(),signDates[y].getTime());
                if (possDates[x].getTime() === signDates[y].getTime()) {
                    newPossSigns.push(possSigns[i]);
                }
            }
        }
    }
    possSigns = [...new Set(newPossSigns)];

    console.log("Possible Days:",possDays);
    console.log("Possible Months:",possMonths);
    console.log("Possible Signs:",possSigns);
    console.log("Remaining:",possDates,possDates.length);
    return possDates;
}

function checkQuestions() {
    let possDates = genRemainingDates();
    if (possDates.length > 1) {
        console.log("\nDays left:",possDates.length);
    }
    else {
        console.log("\nGot it! Your birthday is...",possDates[0]);
    }

    //Even days
    let evenCount = 0;
    let oddCount = 0;
    for (i = 0; i < possDates.length; i++) {
        if (possDates[i].getDate()%2 === 0) {
            evenCount++;
        }
        else {
            oddCount++;
        }
    }
    if (evenCount === 0 || oddCount === 0) {
        removeQuestions([1,2]);
    }

    //Three days
    let threeCount = 0;
    let noThreeCount = 0;
    for (i = 0; i < possDates.length; i++) {
        if (possDates[i].getDate()%3 === 0) {
            threeCount++;
        }
        else {
            noThreeCount++;
        }
    }
    if (threeCount === 0 || noThreeCount === 0) {
        removeQuestions([13]);
    }

    //Digit days
    let singleCount = 0;
    let tenCount = 0;
    let twentyCount = 0;
    let thirtyCount = 0;
    for (i = 0; i < possDates.length; i++) {
        if (possDates[i].getDate() < 10) {
            singleCount++;
        }
        else if (possDates[i].getDate() < 20) {
            tenCount++;
        }
        else if (possDates[i].getDate() < 30) {
            twentyCount++;
        }
        else {
            thirtyCount++;
        }
    }
    if (tenCount === 0 && twentyCount === 0 && thirtyCount === 0) {
        removeQuestions([3,4,5]);
    }
    else if (singleCount === 0 && twentyCount === 0 && thirtyCount === 0) {
        removeQuestions([3,4,5]);
    }
    else if (singleCount === 0 && tenCount === 0 && thirtyCount === 0) {
        removeQuestions([3,4,5]);
    }
    else if (singleCount === 0 && tenCount === 0 && twentyCount === 0) {
        removeQuestions([3,4,5]);
    }
    if (singleCount === 0) {
        removeQuestions([3]);
    }
    if (tenCount === 0) {
        removeQuestions([4]);
    }
    if (twentyCount === 0) {
        removeQuestions([5]);
    }

    //Ber months
    let berCount = 0;
    let noBerCount = 0;
    for (i = 0; i < possDates.length; i++) {
        if ((possDates[i].getMonth() + 1) > 8) {
            berCount++;
        }
        else {
            noBerCount++;
        }
    }
    if (berCount === 0 || noBerCount === 0) {
        removeQuestions([6]);
    }

    //Uary months
    let uaryCount = 0;
    let noUaryCount = 0;
    for (i = 0; i < possDates.length; i++) {
        if ((possDates[i].getMonth() + 1) < 3) {
            uaryCount++;
        }
        else {
            noUaryCount++;
        }
    }
    if (uaryCount === 0 || noUaryCount === 0) {
        removeQuestions([10]);
    }

    //J months
    let jCount = 0;
    let noJCount = 0;
    for (i = 0; i < possDates.length; i++) {
        if ((possDates[i].getMonth() + 1) === 1 || (possDates[i].getMonth() + 1) === 6 || (possDates[i].getMonth() + 1) === 7) {
            jCount++;
        }
        else {
            noJCount++;
        }
    }
    if (jCount === 0 || noJCount === 0) {
        removeQuestions([11]);
    }

    //Five months
    let fiveCount = 0;
    let noFiveCount = 0;
    for (i = 0; i < possDates.length; i++) {
        if ((possDates[i].getMonth() + 1) > 2 && (possDates[i].getMonth() + 1) < 8) {
            fiveCount++;
        }
        else {
            noFiveCount++;
        }
    }
    if (fiveCount === 0 || noFiveCount === 0) {
        removeQuestions([7]);
    }

    //Animal signs
    let animalCount = 0;
    let noAnimalCount = 0;
    for (i = 0; i < possDates.length; i++) {
        let found = false;
        for (x = 0; x < animalDates.length; x++) {
            if (possDates[i].getTime() === animalDates[x].getTime()) {
                //console.log("Match:",possDates[i]);
                animalCount++;
                found = true;
                continue;
            }
        }
        if (!found) {
            //console.log("Match:",possDates[i]);
            noAnimalCount++;
        }
    }
    //console.log("animal:",animalCount,"No animal:",noAnimalCount);
    if (animalCount === 0 || noAnimalCount === 0) {
        removeQuestions([8]);
    }

    //Vowel signs
    let vowelCount = 0;
    let noVowelCount = 0;
    for (i = 0; i < possDates.length; i++) {
        let found = false;
        for (x = 0; x < vowelDates.length; x++) {
            if (possDates[i].getTime() === vowelDates[x].getTime()) {
                //console.log("Match:",possDates[i]);
                vowelCount++;
                found = true;
                continue;
            }
        }
        if (!found) {
            //console.log("Match:",possDates[i]);
            noVowelCount++;
        }
    }
    //console.log("Vowel:",vowelCount,"No vowel:",noVowelCount);
    if (vowelCount === 0 || noVowelCount === 0) {
        removeQuestions([9]);
    }

    //S signs
    let sCount = 0;
    let noSCount = 0;
    for (i = 0; i < possDates.length; i++) {
        let found = false;
        for (x = 0; x < sDates.length; x++) {
            if (possDates[i].getTime() === sDates[x].getTime()) {
                //console.log("Match:",possDates[i]);
                sCount++;
                found = true;
                continue;
            }
        }
        if (!found) {
            //console.log("Match:",possDates[i]);
            noSCount++;
        }
    }
    //console.log("Vowel:",vowelCount,"No vowel:",noVowelCount);
    if (sCount === 0 || noSCount === 0) {
        removeQuestions([12]);
    }
}

function removeQuestions(numArray) {
    for (i = 0; i < numArray.length; i++) {
        for (x = 0; x < questions.length; x++){
            if (questions[x].qNum === numArray[i]) {
                questions.splice(x,1);
            }
        }
    }
    //console.log("Removed:",questions);
}

//run

console.log("\nI am the almighty Birthday Genie\n\nAnswer my questions, and I'll guess your birthday\n");

askQuestion();