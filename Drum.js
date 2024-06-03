var numberOfDrums = document.querySelectorAll('.drum').length;

// querySelectorAll selects all the elements with that class
// whereas querySelector selects one element alone

for(var i=0; i<numberOfDrums; i++)
{
    document.querySelectorAll('.drum')[i].addEventListener('click', function()
        {
            var selectedKey = this.innerHTML;  //this keyword represents which element is being selected

            musicKey(selectedKey);

           
        }
    )
}

document.addEventListener('keypress', function(event)
    {
        var ChangedKey = event.key;

        musicKey(ChangedKey.toUpperCase());

    }
)

function musicKey(selectedKey)
{
    switch (selectedKey)
    {
        case 'W':
            var music = new Audio("./Drum_Kit_Starting_Files/sounds/crash.mp3");
            music.play();

            drumAime('.drums1');
            break;

        case 'A':
            var music = new Audio("./Drum_Kit_Starting_Files/sounds/kick-bass.mp3");
            music.play();

            drumAime('.drums2');
            break;

        case 'S':
            var music = new Audio("./Drum_Kit_Starting_Files/sounds/snare.mp3");
            music.play();

            drumAime('.drums3');
            break;

        case 'D':
            var music = new Audio("./Drum_Kit_Starting_Files/sounds/tom-1.mp3");
            music.play();

            drumAime('.drums4');
            break;

        case 'J':
            var music = new Audio("./Drum_Kit_Starting_Files/sounds/tom-2.mp3");
            music.play();

            drumAime('.drums5');
            break;

        case 'K':
            var music = new Audio("./Drum_Kit_Starting_Files/sounds/tom-3.mp3");
            music.play();

            drumAime('.drums6');
            break;

        case 'L':
            var music = new Audio("./Drum_Kit_Starting_Files/sounds/tom-4.mp3");
            music.play();

            drumAime('.drums7');
            break;
        default:
            console.log('Click a proper Key -_-');    
            
    }
}


function drumAime(selectedKey)
{
   var keyToAnimate = document.querySelector(selectedKey);

   keyToAnimate.classList.add("drum-animation");

   setTimeout( function()
   {
      keyToAnimate.classList.remove("drum-animation");
   },200)
 
}









