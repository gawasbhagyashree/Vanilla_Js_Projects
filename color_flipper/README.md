###Script.js There are 4 colors to choose from, which are given in an array You have to randomly select one of those elements of array;Hence we use: [ Math.floor(Math.random() * colors.length) Math.random() generates nums from 0(inclusive) to 1(exclusive) Math.floor rounds the number to the lowest example: 5.9 =>5, 4.2=>4, etc. ] Once a random number is gerenrates, colors[randomNum] will give you the result.

###Hex.js The hexcode for colors includes A-F and 0-9, six values. ex: #f1f5f8 So we need an array of hexValues=["A", "B"....9] the hexColor should randomly be 6 of the values from hexValues

Random value selected from hexValues: This selects 1 random value. Math.floor(Math.random() * hex.length)

To make it 6 random values: hexColor='#' for (i=0;i<6;i++){ hexColor+=hexValues[RandomNum] } console.log('Final hexColor:' hexColor)