text = `
My Name is Neeserg Parajuli. And I am not really good at talking about myself. So this bit is might feel a bit excruciating to read. Hopefully I can make it somewhat enjoyable. This page was left as just a big letter of Hello World for a while, thought I would add a bit of content to spice up the page. I thought maybe I just dump a stream consiousness into this. So yeah this is going to unprepared and raw I guess. Ok time to think about something rather than thinking about "What to put on this page." Maybe a new paragraph will help.

Ok things I like. I like maths, physics, computation, brain and just anything that really gives me that whoa! dude feeling haha. I guess I like normal things aswell, like food, beer, nice movie or good music. Yeah pretty ordinary tbh. An average of all behaviour in one person. I guess my ordinariness kinda makes me unique. Like if an alien had to abduct a the average human male, then that probably would be me. There is romanticism in ordinaryness I guess. Yes I guess I have a more than normal amount of self-talk. Kinda can be annoying, but the thoughts can be comforting on lonely day. But makes it hard to enjoy a moment without thinking yourself, "Am I enjoying this moment with sufficient vigour". Ok enough self talk time to think of a topic.

thinking...
still thinking...
ok ill take a break and resume... 

I guess I better elaborate why I like maths, physics, computation, brain and the "whoa dude!" moment. First to explain what a "whoa dude!" moment is. I think I always have this existential scratch, like you know "why am I here?", "why am I experiencing", "is there a purpose?" and "what does it all mean". The "whoa dude!" moment is when I momentarily scratch that itch upon learning something, when all the underlying assumption gets destroyed and you see the world for as it is for brief moment. I do usually get this feeling learning about physics, especially modern physics. Things get so strange, you briefly realise that the world as we percieve it isn't really the way it is. Some things in maths and computation also evokes this feeling. The ever prevelant Bertrands Paradox, that keeps coming up in things like Godel's Incompleteness or Turing Halting problem also gives me this feeling. I sometime feels like I have just the superficial understanding of these concepts and I try to chase this feeling rather than understanding these concepts at a deeper level. Maybe just having  the superficial understanding is the reason I get this feeling. Anyway one of my life's goal is to learn these things at a deeper level. 

Well why is this my life's goal? Could I not just pick a better goal, such as living a happy fulfilling life. Well maybe, but Ill try to reason why I like this goal. One thing that really resonates with me is the Carl Sagan quote: "WE ARE THE WAY FOR COSMOS TO KNOW ITSELF!". WHOA DUDE!!!. This capacity to experience and know is what makes us humans special. I think its imperative that universe know about it's own beauty. Offcourse there is variety of ways to experience such as love of your child, loving your friends or family, capturing beautiful art or many others. Im sure the Universe enjoys all that. But I like to think Universe especially enjoys learning about its own inner working. Why there is a such thing as a black hole, where it did it come from, how its going to eventually end and how is it experiencing itself? If God created the Universe then surely it created us to be its Audience, participatory audience but an audience none the less.

I mentioned God in the earlier paragraph. Now the inevitble question "Do you believe in GOD?". Well for me thats like asking "Do you believe in Infinity?". I don't know if infinity manifests itself in the Universe, but I know it exist as a concept to prove theories in Mathematics. God similarly is a concept that can be used if you need to conceptualise an entity that is omniscient, omnipotent, omnipresent and absolutely benevolent. Infact I believe absolute benevolence implies omnipotent and omniscient. Because to be good I think you need the power to do otherwise and you need to comprehend that the action you are undertaking is infact good. I think the omnipresence is the leap of faith, cause if it is omnipresent then it is everywhere and therefore everything that happens in the universe is happening because it is good. This I am not sure of! Is it good to let evil happen? Is it good to force people do only good things, like robots? I am not sure my brain kinda huurts now.

Now to why I like beer and food. This might not much explaination, people who like beer, (assuming everyone kinda likes food) will know why. I guess this is to the people who don't. Again it goes without saying, I don't endorse alcoholism, just replace beer with your favourite beverage. Hmmm, where to start. Lets start with the meta. Beer has always been potrayed in media as the ultimate refreshment that is also kinda masculine to drink. I have grown up with this image, and every taste I have enjoyed is with this context in mind. So please don't ask me, "But do you really like beer, bla bla bla?" I don't know how to be complete deconstructed individual, and I would argue no one does, so shut up and let me enjoy my beer haha. But let me try to describe it I guess the way I experience it.

Suppose you just played mean game of tennis, basketball, etc, or just did some hard labour. You come home all sweaty and sore on a hot day. You sit in the couch with your mates, cause standing up to take a shower would use up one too many joules of energy you have left. However you do have one or two quanta of energy left to go to refigerator and quench your thirst. You see the golden glimmering shine of six uncracked bottles of beer. You look to your mates and ask "Beers?". They all take a gulp of their saliva in unision and agree vehemently. "Should we order up some food?" one of them asks. You are god damn right we should! You sit back down on the couch, and wrap your lips around the end of the long neck and take mean sip. Instant refreshment. Relaxing you to your core as you sip further. Its the mixture of fizz, thick carby texture and the slight buzz of alcohol. Its you patting yourself in the back at the end of the day as the sun is at that point in the sky where its  shining beer coloured light directly at your face. Life is good, and we are gonna be alright. This is for you, Universe hope you are enjoying this refreshing experience.

This is what I mean by the romanticism of the ordinary. These days you are inundated with fast cars, fast money, beautiful women/men, exhilrating experiences and unatainable standards. But how does anyone beat a cold beer on a sweaty day. The unlimited thirst for happiness can't ever be quenched if it can't be quenched by simple beer at the end of the day. But then you will ask, "Shouldn't you strive to be better? I don't want to be content where I am." Well I do want to be better, but I don't neccessarily want to be happier. What is better then? Maybe it should be better at what? Better at better father, better husband, better member of society or anything really. Happyness is experienced, better is measured.

Ok I have told you what makes me happy, sharing a cold one with friends and family. What do I want to do make myself better? Well I want to be wiser, more knowledgable in my profession, that is a coder. I want to learn more about physics in a deeper level, more about mathematics, I want to share more of thoughts in public like this so its not always trapped inside me. 


I think this will do for now. I am starting to procrastinate, I will comeback to do this and edit it. Hopefully not many people read this before I edit it. There is gonna be plenty of spelling mistakes. I hope people point out my stupidity without calling me stupid. One makes me learn other makes me feel bad :).

TLDR: Was gonna fill this space with lorem epsum but thought instead I would ramble.
`



function get_height(element){
    var style=window.getComputedStyle(element);
    var height = parseInt(style.getPropertyValue("height"));
    return height;
}

function get_width(element){
    var style=window.getComputedStyle(element);
    var width = parseInt(style.getPropertyValue("width"));
    return width;
}

function addText(text,parentWidth,currentNode){
    let words = text.split(' ')
    currentNode.textContent = words.shift()
    let i =0
    while (words.length >0){
        i++;
        var tmpTxt = currentNode.textContent;
        var nxtWord = words.shift();
        currentNode.textContent = currentNode.textContent+' '+nxtWord;
        var width = get_width(currentNode);
        if(parentWidth< width){
            currentNode.textContent = tmpTxt;
            words = [nxtWord].concat(words)
            break;
            
        }
        
    }
    return words.join(' ')
}
function addLines(content){
    let container = document.querySelector('#container');
    let banner = document.querySelector("#banner")
    let insidecontainer = document.querySelector('#insidecontainer');
    insidecontainer.innerHTML = ""
    insidecontainer.appendChild(banner)
    var parentWidth = get_width(banner);
    var container_height = get_height(container);
    let lines = content.split('\n');
    console.log(lines);
    let current_line = lines.shift()
    console.log(lines);
    for (var i = 0; i < 5000; i++) {
        var div = document.createElement('div');
        div.setAttribute('id','div'+String(i));
        div.setAttribute('class','line');
        var p = document.createElement('p');
        p.setAttribute('id','p'+String(i));
        p.setAttribute('class','text');
        insidecontainer.appendChild(div)
        div.appendChild(p)
        current_line = addText(current_line,parentWidth,p);
        
        if (container_height < get_height(insidecontainer) &&
             lines.length==0){
                console.log(lines);
                return;
            }
        if(current_line === '' && lines.length>0){
            current_line = lines.shift()
        }


    }
         

}

addLines(text);

window.addEventListener("resize", (event) => {

    addLines(text);
});
