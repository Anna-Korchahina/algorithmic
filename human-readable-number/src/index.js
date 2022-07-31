const unit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

const dozen = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

const aDozen = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

const aHundred = 'hundred';

// module.exports = function toReadable(number) {
function toReadable(number) {

    const numString = "" + number;
    const bitDepth = numString.length;

    if (bitDepth === 1) {
        return unit[number];
    }

    if (bitDepth === 2) {
        if (number % 10 === 0) {
            return aDozen[+(numString[0]) - 1];
        }
        if (+(numString[0]) === 1) {
            return dozen[+(numString[1]) - 1];
        }

        return `${aDozen[+(numString[0])-1]} ${unit[numString[1]]}`;
    }

    if (bitDepth === 3) {
        if (number % 100 === 0) {
            return `${unit[+(numString[0])]} ${aHundred}`;
        }

        return `${unit[+(numString[0])]} ${aHundred} ${toReadable(+numString.slice(1))}`;
    }
}

console.log(toReadable(301));
