const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const results = document.querySelector('#results')
    const weight = parseInt(document.querySelector('#weight').value)

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = "Please give a valid height"
    }

    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please give a valid height"
    }
    else {
       const bmi = (weight / ((height*height)/10000)).toFixed(2)

       results.innerHTML = `<span>${bmi}</span`
    }

})