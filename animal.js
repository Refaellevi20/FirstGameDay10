
const gQuests = [
    { id: 101, opts: ['Fish', 'Horse'], correctOptIndex: 0 },
    { id: 102, opts: ['Cat', 'Cow'], correctOptIndex: 1 },
    { id: 103, opts: ['Dog', 'Cat'], correctOptIndex: 1 },
    { id: 104, opts: ['Bird', 'Horse'], correctOptIndex: 0 },
    { id: 105, opts: ['Horse', 'Dog'], correctOptIndex: 1 },
    { id: 106, opts: ['Dog', 'Horse'], correctOptIndex: 1 },
    { id: 107, opts: ['butterfly', 'fox'], correctOptIndex: 0 },
    { id: 108, opts: ['Cat', 'monkey'], correctOptIndex: 1 },
    { id: 109, opts: ['Dog', 'fox'], correctOptIndex: 1 },
    { id: 110, opts: ['tiger', 'Horse'], correctOptIndex: 0 },
    { id: 111, opts: ['Horse', 'parrot'], correctOptIndex: 1 },
    { id: 112, opts: ['squirrel', 'seaTurtle'], correctOptIndex: 1 },
    { id: 113, opts: ['tiger', 'squirrel'], correctOptIndex: 1 },
    { id: 114, opts: ['butterfly', 'snake'], correctOptIndex: 1 },
    { id: 115, opts: ['fox', 'parrot'], correctOptIndex: 0 }
]

// // not make sense to create for each animal id + opts + correctOptIndex:
// // have to be another way
var gCurrQuestIdx = 0

const audioRight = new Audio('audio/right.mp3')
const audioWrong = new Audio('audio/wrong.mp3')

function onInitGame() {
    gCurrQuestIdx = 0
    renderQuest()
}
// // changing the pic to jpg
function renderQuest() {
    const currQuest = gQuests[gCurrQuestIdx]
    const elImg = document.querySelector('.game-img')
    elImg.src = `images/${currQuest.id}.jpg`
    // //  currQuest.opts.length on every pic with id ('btn' + i)
    for (var i = 0; i < currQuest.opts.length; i++) {
        var btn = document.getElementById('btn' + i)
        btn.innerText = currQuest.opts[i]
    }
}

function onCheckAnswer(optIdx) {
    // console.log(optIdx)
    const currQuest = gQuests[gCurrQuestIdx]
    // console.log(gQuests);
    // // doest not work with currQuest[gCurrQuestIdx].correctOptIndex
    if (optIdx === currQuest.correctOptIndex) {
        audioRight.play()
        gCurrQuestIdx++
        //         //Check for Remaining Questions

        if (gCurrQuestIdx < gQuests.length) {
            renderQuest()
            //   // if they are still questions move to the next question
        } else {
            showVictoryMessage()
            alert('victory! (wow! ! ! u finish the game cong!.)')
            //         // if he finish all the question he won 
        }
    } else {
        audioWrong.play()
        alert('Try again!')
        // // if he clicked on the wrong answer

    }
}

// // new element in html h1
// // onclick active the function onInitGame() in html.
// //  in every pic it has been replaced by the next pic
// // (for example id 100 is the first and the second is id 101)
function showVictoryMessage() {
    const elGame = document.querySelector('.game')
    elGame.innerHTML = `<h1>Victorious!</h1>
        <button onclick="onInitGame()">Restart</button>`
}


