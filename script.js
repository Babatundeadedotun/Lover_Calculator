function check() {

    var audio1 = new Audio('audio/sorry.mp3');
    var audio2 = new Audio('audio/Are-you-playing-what-type-of-play-is-this....mp3');
    var audio3 = new Audio('audio/Camera-Shutter.mp3');
    var audio4 = new Audio('audio/short-crowd-cheer-6713.mp3');

    display.style.display = "block";

    // display.innerHTML = "";

    var player = input1.value;
    var lover = input2.value;

    if(player == "" || lover == "") {
        display.innerHTML = `<h3 class="text-center">Kindly Enter a Player name and a Lover Name</h3>`;
    } else{
       var percent = Math.round(Math.random() * 100);

        if(percent >= 0 && percent <= 40) {
            display.innerHTML = `
            <div class="text-center">
            <p>🏃‍♂️🏃‍♂️🏃‍♂️</p>
            <h2>You and ${lover}</h2>
            <h3 class="text-center text-danger"><strong>${percent}</strong></h3> 
            <h5>Not a Match, Ruuunnn</h5>
            </div>
            `;
            audio1.play();
        } else if(percent > 40 && percent <= 60) {
            display.innerHTML = `
            <div class="text-center">
            <p>👽👽👽</p
            <h2>You and ${lover}</h2>
            <h3 class="text-center text-warning"><strong>${percent}</strong></h3> 
            <h5>Not a Match, You are warned</h5>
            </div>
            `;
            audio2.play();
        } else if(percent > 60 && percent <= 80){
            display.innerHTML = `
            <div class="text-center">
            <p>😎😎😎</p>
            <h2>You and ${lover}</h2>
            <h3 class="text-center text-primary"><strong>${percent}</strong></h3>
            <h5>Match, But not Perfect</h5>
            </div>
            `;
            audio3.play();
        } else if(percent > 80 && percent <= 100) {
            display.innerHTML = `
            <div class="text-center">
            <p>😊😊😊</p>
            <h2>You and ${lover}</h2>
            <h3 class="text-center text-success"><strong>${percent}</strong></h3>
            <h5>Perfect Match</h5>
            </div>
            `;
            
                audio4.play();
        }

        input1.value = "";
        input2.value = "";
    }
}