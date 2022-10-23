const bill = document.querySelector(".section-container__value-input");
let valBill = parseInt(bill.value);

const people = document.querySelector(".section-container__value-people-input");
let valPeople = parseInt(people.value);
let alert = document.querySelector('#alert');

const custom = document.querySelector('.section-container__value-buttons-custom');

const reset = document.querySelector('.section-container__results-btn');

const amount = document.querySelector('.section-container__results-content1-tip-value');
const total = document.querySelector('.section-container__results-content2-total-value')
const buttons = document.querySelectorAll('.section-container__value-buttons-btn');

let tipValue = 5;
buttons.forEach(element =>{
    element.addEventListener('click', (e) =>{
        //Cambiar estilos
       removeActive();
         element.classList.add('selected');

        tipValue = parseInt(e.target.innerText.slice(0,-1));
        
        calculate();
    })
})

bill.addEventListener('input', ()=>{
    valBill = parseFloat(bill.value);
    calculate();
});

custom.addEventListener('input', () =>{
    tipValue = parseInt(custom.value);
    if(!isNaN(tipValue)){
        calculate();
    }
})

custom.addEventListener('click', ()=>{
    removeActive();
})

people.addEventListener('input', () =>{
    valPeople = parseFloat(people.value);
    if(valPeople == 0 || isNaN(valPeople)){
        people.style.borderColor = 'red';
        alert.classList.add('error');
    }else{
        people.style.borderColor = 'hsl(189, 41%, 97%)'
        alert.classList.remove('error');
        calculate();
    }
    
})

reset.addEventListener('click', ()=>{
    bill.value = 0;
    valBill = 0;

    people.value = 5;
    valPeople = 5;

    custom.value = 'Custom';
    
    calculate();
})

const removeActive = () =>{
    buttons.forEach(element =>{
        element.classList.remove('selected');
    });
}

const calculate = () =>{
     //Tip Amount
     amount.innerText = (((valBill * tipValue / 100) /valPeople)).toFixed(2);
        
     //Total
     total.innerText = (((valBill * tipValue / 100) + valBill)/valPeople).toFixed(2);
}