var guess = Math.floor(Math.random()*100)+1
function findNumber()
{
    if(document.getElementById('in').value == '')
    {
        document.getElementById('out').innerHTML = 'Enter a valid number'
        return
    }
    var num = parseInt(document.getElementById('in').value)
    if(num > 100 || num < 1)
    {
        document.getElementById('out').innerHTML = 'Out of range'
        return
    }
    if (num === guess)
    document.getElementById('out').innerHTML = 'Congrats...! Got it Correctly.'
    else if(num > guess)
    document.getElementById('out').innerHTML = 'Guess the smaller number'
    else
    document.getElementById('out').innerHTML = 'Guess the greater number'
}