import { useState } from "react";
 
//  //predifined quotes
const quotes = [
    { text: "Be the change you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
    { text: "Imagination is more important than knowledge.", author: "Albert Einstein" }
];
 
function QuoteGenerator() {
    // State to track current quote using the useState hook.
    const [currentQuote, setCurrentQuote] = useState(quotes[0]);

    /// Function to generate a random quote
function generateRandomQuote() {

    const randomIndex = Math.floor(Math.random() * quotes.length) ;
          setCurrentQuote(quotes[randomIndex]);
    
}
return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-40">
        <blockquote className="mb-4 italic text-lg">
            {currentQuote.text}
        </blockquote>
        <p className="text-center font-bold text-gray-600">
            By : {currentQuote.author}
        </p>
        <button 
            onClick={generateRandomQuote}
            className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
            Generate New Quote
        </button>
    </div>
);


}



export default QuoteGenerator;