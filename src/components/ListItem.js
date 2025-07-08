import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
    this.state = { amount: props.amount, id: props.id };
    this.updateTotal = props.updateTotal;
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donate-item";

    const amountText = document.createElement("span");
    amountText.innerHTML = `${new Date().toLocaleString()} - <b>$${
      this.state.amount
    }</b>`;
    this.$rootElement.appendChild(amountText);

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Удалить";
    deleteButton.addEventListener("click", () => {
      this.remove();
      this.updateTotal(this.state.amount);
    });

    this.$rootElement.appendChild(deleteButton);
  }
  remove() {
    this.$rootElement.remove();
  }
}