const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let newWords = "";
let randWords ="";
let play = false;
let sWords = ['python','javascript','c++','php','java','c#','html','css','reactjs','angular','swift','android','sql'];

const  createNewWords =() => {
           let randomNum = Math.floor(Math.random() * sWords.length);
        //    console.log(randomNum);
        let newTempSwords = sWords[randomNum];
        // console.log(newTempSwords.split(""));
        return newTempSwords;
}


const scrambleWords = (arr) => {
        for(let i= arr.length - 1; i>0; i--){
            let temp = arr[i];
            // console.log(temp);
            let j = Math.floor(Math.random()*(i+1));
            console.log(i);
            console.log(j);

            arr[i] = arr[j];
            arr[j] = temp;  
            // swap the value
        }
        return arr;
}


btn.addEventListener('click', function(){
       if(!play){
            play = true;
            btn.innerHTML = "Guess";
            guess.classList.toggle('hidden');
            newWords = createNewWords();
             randWords = scrambleWords(newWords.split("")).join("");
            //  console.log(randwords.join(""));
             msg.innerHTML = `Guess the word: ${randWords}`;
       }
       else{
           let tempWord = guess.value;
           if(tempWord === newWords){
            // console.log('correct');
            play = false;
            msg.innerHTML = `Awesome It's Correct. it is ${newWords}`;
            btn.innerHTML = "Start Again";
            guess.classList.toggle('hidden');
            guess.value = "";
           }
           else{
            console.log('incorrect');
            msg.innerHTML = `Sorry Boss. It's not Correct. plz try again ${randWords}`;
            guess.value = "";
           }
       }
})
