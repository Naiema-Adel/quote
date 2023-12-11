const arrayOfQuotes = [
    {'author': ' Bernard M. Baruch', 
    'quote': 'Beware of what you become in pursuit of what you want“Be who you are and say what you feel, because those who mind.”.'
   },
   {'author': 'Marcus Tullius Cicero', 
    'quote': '“A room without books is like a body without a soul”.'
   },
   {'author': 'Frank Sinatra', 
    'quote': 'The best revenge is massive success.'
   },
   {'author': 'Mae West', 
    'quote': '“You only live once, but if you do it right, once is enough.”'
   },
   
   {'author': 'Elbert Hubbard', 
    'quote': 'Do not take life too seriously. You will not get out alive.'
   },
]


function mainQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
    
}