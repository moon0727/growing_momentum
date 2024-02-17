const quotes = [
    {
        quote : "When you have faults, do not fear to abandon them.",
        author : "Confucius"
    },
    {
        quote : "You will face many defeats in life, but never let yourself be defeated.",
        author : "Maya Angelou"
    },
    {
        quote : "This too shall pass.",
        author : "Et hoc transibit"
    },
    {
        quote : "When in doubt, choose change",
        author : "Lily leung"
    },
    {
        quote : "Despite the forecast, live like it's spring.",
        author : "Lilly pulitzer"
    },
    {
        quote : "Turn your wounds into wisdom.",
        author : "Oprah Gail Winfrey"
    },
    {
        quote : "Change the world by being yourself.",
        author : "Amy Poehler"
    },
    {
        quote : "Opportunities don't happen. You create them.",
        author : "Chris Grosser"
    },
    {
        quote : "I am not supposed to be here.",
        author : "Chaeyeong Jung"
    },
    {
        quote : "I like cats.",
        author : "Youbin Jang"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;