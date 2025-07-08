import { Component } from "../core/Component";
import { Form } from "./Form";
import { List } from "./List";
import { ListItem } from "./ListItem";

export class App extends Component {
  setup(props) {
    this.state = { total: 0, donates: [] };
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "app";

    const $h1 = document.createElement("h1");
    $h1.className = "total-amount";
    $h1.textContent = "Итого: $ ";

    this.$span = document.createElement("span");
    this.$span.textContent = `${this.state.total}`;

    $h1.appendChild(this.$span);

    this.$rootElement.appendChild($h1);
    this.donateList = new List();
    this.$rootElement.appendChild(
      new Form({
        onSubmit: (amount) => this.onItemCreate(amount),
      }).$rootElement
    );

    this.$rootElement.appendChild(this.donateList.$rootElement);
  }

  onItemCreate(amount) {
    const id = Date.now(); // Используем текущее время как уникальный ID
    this.state.donates.push({ id, amount });
    this.state.total += amount;
    this.$span.textContent = this.state.total;
    this.donateList.addItem(
      new ListItem({
        amount,
        id,
        updateTotal: (amount) => this.updateTotalAmount(amount),
      })
    );
  }

  updateTotalAmount(amount) {
    this.state.total -= amount; // Уменьшаем общую сумму
    this.$span.textContent = this.state.total; // Обновляем отображение
  }
}
