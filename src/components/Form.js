import { Component } from '../core/Component';

export class Form extends Component {
  setup(props) {
    this.state = { amount: '' };
    
    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    const label = document.createElement('label');
    label.className = 'donate-form__input-label';
    label.textContent = 'Введите сумму в $';

    this.$input = document.createElement('input');
    this.$input.className = 'donate-form__donate-input';
    this.$input.name = 'amount';
    this.$input.type = 'number';
    this.$input.max = '100';
    this.$input.min = '1';
    this.$input.required = true;

    label.appendChild(this.$input);
    
    this.$button = document.createElement('button');
    this.$button.disabled = true;
    this.$button.className = 'donate-form__submit-button';
    this.$button.type = 'submit';
    this.$button.textContent = 'Задонатить';

    this.$rootElement.append(label, this.$button);

    // Устранение привязок через bind
    this.$input.addEventListener('input', (event) => this.handleInput(event));
    this.$rootElement.addEventListener('submit', (event) => this.handleSubmit(event));
  }

  handleInput(event) {
    const inputValue = event.target.value;
    this.state.amount = inputValue;
    this.$button.disabled = !this.isValid();
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid()) {
      this.props.onSubmit(Number(this.state.amount));
      this.state.amount = '';
      this.$input.value = '';
      this.$button.disabled = true;
    }
  }

  isValid() {
    const value = Number(this.state.amount);
    return value >= 1 && value <= 100;
  }
}