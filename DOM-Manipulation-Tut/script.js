let btn = document.querySelector('.button-area');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote:' "i built this shit brick by brick"' ,
        person: "Franklin Saint"
    },
    {
        quote: ' "The best way to finf yourself is to lose yourself in the service of others"',
        person: 'Mahatma Bahubali'
    },
    {
        quote: ' "If you want to live a happy life, tie it to  a goal, not to people or things"',
        people: 'Albert Einstein'
    },
    {
        quote: ' "Your time is limited, so dont waste it living someone else\'s life" ',
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
        person: " Ajagurah"
    },
    {
        quote: ' "I am Walter white "',
        person: " Walter White"
    },
    {
        quote: ' "el taru tar tar de lai ta ta" ',
        person: " Holy child girl"
    }

   
]

btn.addEventListener('click', function(){

   let random = Math.floor(Math.random() * quotes.length);

   quote.innerHTML = quotes[random].quote;
   person.innerHTML =quotes[random].person
})