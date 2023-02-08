'use strict'
document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function (e) {
    return false;
}
console.log("Helloworld")

let generateBtn = document.getElementById("generate-btn")
let copyBtn     = document.getElementById("copy-btn")
// Love Quotes From https://github.com/iamhimanshu0/love-quotes-generator-AI
let arr = [
    [1,'Let’s slow dance with the moon, and feel the stars kiss our eyes.'],
    [2,'I love planting kisses in all the forgotten places- between the blades, the curves connecting legs to torso, the calf, the ankle, the nails, the places often ignored by love. This is the lost garden of intimacy, where love grove from lips.'],
    [3,'Make love to my blood, tease my veins.'],
    [4,'You get my mind naked'],
    [5,'I want you between my lips speaking French.'],
    [6,'You’re the scent I want to wear.'],
    [7,'Etch your presences into the corners of my soul, painting several shades of love, building foundations of eternity as we take this walk down the aisle of eternity. Let the eclipse of our soul dominate the clouds.'],
    [8,'If there is a parallel universe, I will fight through the stars to find you- Dallylondon'],
    [9,'Let’s dance our heaven together.'],
    [10,'Kiss me like you want to taste my soul.'],
    [11,'I want to feel the sunrise between your thigh-Dallylodon'],
    [12,'Let’s get high tonight, and dive naked into an ocean of stars.'],
    [13,'Let’s die this life together, under the heartbeats of stars, as we born ourselves again, becoming lions of the dark.'],
    [14,'I don’t need a thousand reasons to feel special. All I need is you to live in this world. You are the sunshine of my life.'],
    [15,'I want to be inside you, and feel what love feels like beating from your heart.'],
    [16,'I find you in my dreams, so my mind doesn’t miss you, while we sleep.'],
    [17,'Even if the stars fail to shine and the moon refuses to light up the world, I know I have nothing to fear. I have my guardian angel to look after me, care for me and love me forever and always. I love you!'],
    [18,'I want to drown with your lips, in the ocean of our kiss.'],
    [19,'I wish you could hear, how my butterflies sound when you get near.'],
    [20,'Each time I make a wish, I wish for us to be together forever. I know it will come true because you already live in my heart. I love you.'],
    [21,'Give me your hand of today, and I’ll walk with you, through lifetimes of tomorrow.'],
    [22,'My day is not complete if I don’t tell you I love you.'],
    [23,'I want to get drunk in your skin, as it glistens drops of love, pouring from our sin.'],
    [24,'You worth more than diamonds, worth more than gold, all those things are mere rocks compared to what you mean to me.'],
    [25,'I would climb a thousand mountains to see you smile. I love you so much!'],
    [26,'They say you only fall in love once, I doubt that to be true cos every time I look at you, I fall in love all over again.'],
    [27,'Let’s make love with the moonlight, and cuddle sunrises of fading stars.'],
    [28,'I want to make love with my tongue, and whisper kisses, through your mind, until your body comes, undone- Body language.'],
    [29,'Just when I thought I couldn’t be any happier, I see you and all that changes again.'],
    [30,'Shakespeare would have been right if he said “a life without love is miserable” Without you, I am nothing but empty nothing. Thanks for being mine. I love you.'],
    [31,'And at my funeral, don’t be sad for us my love, I have a soul that will fight lifetimes in the dark, waiting for your light to come.'],
    [32,'When I think of it, you are my favorite hello and hardest goodbye. My heart skips a beat every time I set my eyes on you. You are my sunshine baby.'],
    [33,'My heart for you will never break. My smile for you will never fade. My love for you will never end. I love you a million more!'],
    [34,'You have this incredible way of making my heart happy. You are my treasure always.'],
    [35,'Sometimes I wonder if love is worth fighting for, then I remember your face and I’m ready for war.'],
    [36,'Meeting you was fate, becoming your friend was a choice, but falling in love with you was beyond my control.'],
    [37,'I am willing to spread my wings and fly around the world if you stay with me. I want to give the whole world to you, my fancy doll.'],
    [38,'I am not a romantic man, but I am deeply in love with you, and I want to shout how happy I am until the end of times.'],
    [39,'I dissolve in you just like sugar melts in the water. You are my one and only sweetheart.'],
    [40,'I love to look into your eyes. They reflect my happiness.'],
    [41,'I want to nibble on your neck and make your goosebumps, a mess.'],
    [42,'I never knew that I was rich until I met you. You are the most expensive gift in my life.'],
    [43,'And when our lips finally touch, the universe will darken the sky, lighting up a parade of stars, as we kiss into the night.'],
    [44,'Before you, I looked at life as at the combination of black and white colors with grey shadows. With you, I finally see the bright colors that make me happy and bring love into my every day.'],
    [45,'If I were a cupcake, you would be the delicious vanilla filling to me. Without it, the cake would lose its fantastic flavor. Without you, I would lose myself.'],
    [46,'I do not need a box of chocolate candies because I already have you. You sweeten my days and coat my nights with sugar.'],
    [47,'I adore you like a bee loves the flowers. You are my honey, my dream, my everything.'],
    [48,'You are my life battery. When I feel that my power is soon to go off, I kiss you and respire your belief in me.'],
    [49,'I want to go down on your thoughts, and taste feelings deep within, as we grow desire’s bloom in the garden of our insatiable hearts.'],
    [50,'I am not good at saying ‘I love you’ so I would send this short message as a virtual kiss.'],
    [51,'When you smile, I imagine how the gates to Heaven open. You are my angel who I love so much that I will be lucky to stay by your side till the end of our days.'],
    [52,'Roses are pink, and the skies are blue. I cannot think clear without you.'],
    [53,'My heart pulsates so fast when I look at you. In my eyes, you are the most beautiful angel who flew from Heaven to our Earth to steal my love.'],
    [54,'Honey, have you seen my heart? I think I have left it with you this morning.'],
    [55,'When you see a falling star tonight, make a wish, it will come true because I wished and I found you.'],
    [56,'Let’s journey to forever together.'],
    [57,'Attraction brought us closer. Love’s gonna keep us that way, forever.'],
    [58,'The only word to describe you, is MINE and the only word to describe us, is forever.'],
    [59,'To survive, humans need air, food, and water. I just need your hugs, smiles, and kisses. I love you.'],
    [60,'I’m having one of those days that make me realize how lost I’d be without you.'],
    [61,'I only saw you for a second, but it made my day.'],
    [62,'There are only two times that I want to be with you… Now and Forever.'],
    [63,'Your love is the only armor I need to fight all of life’s battles.'],
    [64,'If I could be anything I would be your tear, so I could be born in your eye, live down your cheek and die on your lips.'],
    [65,'My heart for you will never break. My smile for you will never fade. My love for you will never end. I love you!'],
    [66,'Every time we cuddle turns into my life’s newest priceless memory.'],
    [67,'If you were Facebook, I would check your updates 24/7. If you were twitter, I would keep tweeting I Love You constantly. If you were Instagram, I would keep uploading selfies all day long. If you were Pinterest, I would pin my heart on you.'],
    [68,'The only hashtag trending in my life, right now and forever, is #YOU. Good morning.'],
    [69,'The day can’t start without a hug and a kiss. So, wake up and come outside – I will be waiting.'],
    [70,'Just now I was called by Inspector Dream that all the nightmares have arrested and you can now sleep well, my sweetheart. Good Night.'],
    [71,'Your soul is like outer space: so large and so mysterious. I believe that true love is a special connection of two souls and I really wish I could be the astronaut who would discover all the secrets you hide.'],
    [72,'You are like a rainbow: so many colors and shadows. You always make me admire you. Nature has created you so beautiful, and sometimes I doubt if I am a good match for you.'],
    [73,'you were a beautiful song, you would be my favorite one. If you were a book, you would change my mind forever. But you are you, and I love you no matter what.'],
    [74,'They say love is blind, but actually, it has opened my eyes and changed me for the better. Thanks to you, now I know what true love is.'],
    [75,'You’re like a picture painted by a genius artist: so beautiful and so mysterious. I hope one day you will allow me to solve this riddle, because I’m a fool for you and you’re all I can think about.'],
    [76,'My heart sings for you only. You’re my perfect love.'],
    [77,'You are my first thought in the morning and last thought before sleep. You are my love in life and always.'],
    [78,'Distance is nothing. You’re right here in my heart and I love you more than ever.'],
    [79,'May your day be as bright as you make mine. A happy new day.'],
    [80,'The moon is bright, the stars are out. My love for you shines through, brighter than the brightest star.'],
    [81,'There’s no measuring my love for you. It’d break every scale known to man. I love you beyond measure.'],
    [82,'Why do I have to love you so much? Why do I have to carry you in my heart everywhere I go? You’re my addiction. I’m high on you.'],
    [83,'Ever wondered why I glow? Of course, you’re the guilty one. Loving you gives so much joy and my skin responds by glowing.'],
    [84,'My honey pie, after God, it’s you. I love you more than words can say.'],
    [85,'You’re an awesome package of all that is pleasant and beautiful. You’re an angel and I’m lucky you’re mine.'],
    [86,'“I dreamt that you were mine, and then I woke up smiling because I realized it was not a dream. You are already mine!'],
    [87,'“My permanent relationship status – taken forever by the most gorgeous woman in this universe. Love ya!”'],
    [88,'Spin your mind with me, let’s twist the moon, and dance through stardust, of life’s ballroom.'],
    [89,'“You are my answered prayer, My fulfilled wish, my realized dream.”'],
    [90,'“If our lives were a ship, I would call it LOVE FOREVER. Happy sailing!”'],
    [91,'You make waves in my blood, pulsing feelings to my heart, drowning beats with love.'],
    [92,'I thought that love was overrated until the day I fell in love with you. You changed everything, my world, my life.'],
    [93,'I love you more than I did yesterday but not more than I will tomorrow.'],
    [94,'Just had to let you know… loving you is the best thing that happened to me.'],
    [95,'Can I borrow a kiss? I promise to give it back.'],
    [96,'If Van Gogh had you as a subject, the sunflowers would have gone in the trash.'],
    [97,'If I were a stoplight, I would turn red every time you passed by so that I could stare at you a bit longer.'],
    [98,'You wanna know who I’m in love with? Read the first word again.'],
    [99,'If nothing lasts forever, can I be your nothing?'],
    [100,'I can’t decide if the best part of my day is waking up next to you, or going to sleep with you. Hurry home so I can compare the two again.'],
    [101,'Everyone has their own motivation to get up in the morning and face the day. You are mine.'],
    [102,'Whenever my phone vibrates, I hope you’re the reason for it.'],
    [103,'Forget the butterflies, I feel the whole zoo when I am with you!'],
    [104,'Every day I spend with you is the new best day of my life. Can’t wait for the morning. Goodnight!'],
    [105,'The brightest thing in this world are your eyes when you look at me. I don’t want to see stars, but your eyes. Have a good night.'],
    [106,'I choose you. And I’ll choose you over and over. Without pause, without a doubt, in a heartbeat. I’ll keep choosing you.'],
    [107,'Color your lips with my skin.'],
    [108,'“You have me. Until every last star in the galaxy dies. You have me.”'],
    [109,'My soul saw you and it kind of went, “Oh, there you are. I’ve been looking for you.”'],
    [110,'I want to make out with your mind, and fall in love with thoughts, as we kiss away the time.'],
    [111,'If I could give you one thing in life, I’d give you the ability to see yourself through my eyes, only then would you realize how special you are to me.'],
    [112,'My six-word love story: “I can’t imagine life without you.”'],
    [113,'You’re my paradise and I’d happily get stranded on you for a lifetime.'],
    [114,'You have gripped my soul with a ferocity reserved for a castaway clinging to a raft in the middle of the ocean. If my soul is the raft, it is your hold that keeps me afloat. Don’t ever let go. I love you.'],
    [115,'“If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.”'],
    [116,'“In French, you don’t say ‘I miss you.’ You say ‘Tu me manques’, which means ‘you are missing from me.’ I love that.”'],
    [117,'“By the way, I’m wearing the smile you gave me.”'],
    [118,'“I am totally completely eye-popping seriously groundbreaking passionately deliciously in love with you.”'],
    [119,'“I was, and I remain, utterly and completely and totally in love with you.”'],
    [120,'“You are my favorite notification.”'],
    [121,'Come live in my heart and pay no rent.'],
    [122,'Loved you yesterday, love you still, always have, always will.'],
    [123,'Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive.'],
    [124,'You are the best part of my life. I love spending time with you.'],
    [125,'I love you more than coffee – but please don’t make me prove it.'],
    [126,'My heart for you will never break. My smile for you will never fade. My love for you will never end. I love you a million more!'],
    [127,'Sometimes I wonder if love is worth fighting for, then I remember your face and I’m ready for war.'],
    [128,'I want to be your favorite hello and hardest goodbye.'],
    [129,'Love, you are the sky and the clouds; you are the gentle river and the birds that sing. I feel you in the air, long for your touch, recall you in a way that sends electricity to spark my mind, body, and soul. You are medicine; you are light; you are laughter and hope. I slipped my heart into your pocket some time ago and there it will stay, safe and sound.'],
    [130,'To kill you and me, there would only ever have to be one bullet.'],
    [131,'You stole my heart but I’ll let you keep it cos you make me happy in a thousand ways. I love you to the moon and back.']
]

generateBtn.addEventListener("click", function(){
    console.log("Generate Clicked")

    // Generate Number
    let random_number =  Math.floor(Math.random() * 131)
    console.log(arr[random_number][0])
    console.log(arr[random_number][1])
    
    let result = null;
    result = arr[random_number][1];
    console.log(result)

    document.getElementById("generate-txt").textContent = result;
    console.log(document.getElementById("generate-txt").textContent)
})

copyBtn.addEventListener("click", function(){
    // document.getElementById("generate-txt").textContent = "Copy"
    console.log("Copy Clicked")

    var text = document.getElementById("generate-txt");
    console.log(text.innerText);

    copyTxt();
})

// Copy Text From Generate Text
function copyTxt() {
    // Get the text field
    var copyText = document.getElementById("generate-txt");
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.innerText);
}

