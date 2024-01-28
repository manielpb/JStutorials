let btn = document.querySelector('.button-area');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote:' "i built this shit brick by brick and i\'ll be damned if I let you destroy it"' ,
        person: "Franklin Saint"
    },
    {
        quote: ' "The best way to find yourself is to lose yourself in the service of others"',
        person: 'Mahatma Gandhi'
    },
    {
        quote: ' "If you want to live a happy life, tie it to  a goal, not to people or things"',
        people: 'Albert Einstein'
    },
    {
        quote: ' "Your time is limited, so don\'t waste it living someone else\'s life" ',
        person: 'Steve Jobs'
    },
    {
        quote: ' "I am Batman"',
        person: "Bruce Wayne"
    },
    {
        quote: ' "I will destroy the world" ',
        person: " Dr. Maniac"
    },
    {
        quote: ' "Now I have become death" ',
        person: " Robert J Oppenheimer" 
    },
    {
        quote: '  " Boy nu wagyimi anaa"',
        person: " Ajagurajah"
    },
    {
        quote: ' "I am Walter white "',
        person: " Walter White"
    },
    {
        quote: ' "el taru tar tar de lai ta ta" ',
        person: " Holy child girl"
    },
    {
        quote: ' " Say my name" ',
        person: 'Walter White'
    },
    {
        quote: ' "I am not in danger, I am the Danger" ',
        person: 'Walter White'
    },
    {
        quote: ' "y3n ti sika nso 3k)m di y3n" ',
        person:'Addo D'

    },
    {
        quote: ' " petrol buor na ay3 din sei "',
        person: 'Optimus Prime' 
    }

   
]

btn.addEventListener('click', function(){

   let random = Math.floor(Math.random() * quotes.length);

   quote.innerHTML = quotes[random].quote;
   person.innerHTML =quotes[random].person
})