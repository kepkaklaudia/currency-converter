{
  const calculateResult = (quantity, rate) => {
    const EUR = 4.70;
    const USD = 4.51;
    const GBP = 5.37;
    const CHF = 4.80;

    switch (rate) {
      case "EUR":
        return quantity / EUR;
      case "USD":
        return quantity / USD;
      case "GBP":
        return quantity / GBP;
      case "CHF":
        return quantity / CHF;
    }
  }

  const updateResultText = (amount, rate) => {
    const amountElement = document.querySelector(".js-amount");
    amountElement.innerText = `${amount.toFixed(2)} ${rate}`;
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const quantityElement = document.querySelector(".js-quantity");
    const rateElement = document.querySelector(".js-rate");
    const rate = rateElement.value;

    let amount = calculateResult(+quantityElement.value, rate);
    updateResultText(amount, rate);
  }

  const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);
  }

  init();
}