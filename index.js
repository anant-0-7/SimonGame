var colorArray = ["green", "red", "yellow", "blue"];
var order = [];

var count =0;

temp();

function temp(){
    
    count =0;
    order = [];
    $(document).on("keypress", game);
    

}

function game(){

    count++;
    $(document).off("keypress");
    $(".btn").off("click");

    var randomNumber = Math.floor(Math.random()*4);
    var color = colorArray[randomNumber];

    $("h1").text("Level "+count);
    
    order.push(color);
    $("#"+color).fadeOut("10").fadeIn("10");
    var colorAudio = new Audio("./sounds/"+color+".mp3");
    colorAudio.play();

    
    
    func();

}

function func(){
    var i = 0;
    $(".btn").on("click", function(event){

        var c = event.target.id;
        var colorAudio = new Audio("./sounds/"+c+".mp3");
        colorAudio.play();

        $("."+c).addClass("pressed");
        setTimeout(function(){
            $("."+c).removeClass("pressed");
        },100)

        console.log($("#"+"c").hasClass("pressed"));


        if(c==order[i]) {
            i++;
            if(i==order.length) {
                setTimeout(game, 500);
            }
        }
        else {
            $("h1").text("Game Over, Press Any Key to Restart");
            $("body").addClass("game-over");

            setTimeout(function(){
                $("body").removeClass("game-over");
            },150)

            var gameOver = new Audio("./sounds/wrong.mp3");
            gameOver.play();
            
            $(".btn").off("click");
            temp();
        }
        
    })
    
}



