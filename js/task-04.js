const getCounterElIncrease = document.querySelector('[data-action="increment"]');

getCounterElIncrease.addEventListener("click", handleIncreaseButton);
 let counterValue = 0;
    
    function handleIncreaseButton() {
    
    counterValue += 1;
    value.textContent = counterValue;
};

const getCounterElDecrease = document.querySelector('[data-action="decrement"]');

getCounterElDecrease.addEventListener("click", handleDecreaseButton);

    function handleDecreaseButton() {
    
    counterValue -= 1;
    value.textContent = counterValue;
};