/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
let play = true;

document.addEventListener("click", function(event){
  if(event.target == document.getElementById("button") && play){
    document.getElementById("audio").play()
    play = false;
    document.getElementById("button").textContent = "DON'T DISGRACE THE MOTHERLAND"
    document.getElementById("p").innerHTML = "United forever in friendship and labour,Our mighty republics will ever endure.The Great Soviet Union will live through the ages. The dream of a people their fortress secure. Long live our Soviet motherland, Built by the people's mighty hand. Long live our people, united and free. Strong in our friendship tried by fire. Long may our crimson flag inspire, Shining in glory for all men to see. Through days dark and stormy where Great Lenin lead us Our eyes saw the bright sun of freedom above And Stalin our leader with faith in the people, Inspired us to build up the land that we love. Long live our Soviet motherland, Built by the people's mighty hand. Long live our people, united and free. Strong in our friendship tried by fire.Long may our crimson flag inspire, Shining in glory for all men to see. We fought for the future, destroyed the invaders, And brought to our homeland the laurels of fame. Our glory will live in the memory of nations And all generations will honour her name. Long live our Soviet motherland, Built by the people's mighty hand. Long live our people, united and free. Strong in our friendship tried by fire. Long may our crimson flag inspire, Shining in glory for all men to see.";  
  }else{
    document.getElementById("audio").pause()
    document.getElementById("audio").currentTime = 0;
    document.getElementById("p").innerHTML = "";
    document.getElementById("button").textContent = "Press to bless your ears"
    play = true;
  }
});