import { Component } from '../core/Component';

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    const $h2 = document.createElement('h2');
    $h2.className = 'donates-container__title';
    $h2.textContent = 'Список донатов';
    this.$rootElement.appendChild($h2);
    
    this.$listContainer = document.createElement('div');
    this.$listContainer.className = 'donates-container__donates';
    this.$rootElement.appendChild(this.$listContainer);
  }

  addItem(item) {
    this.$listContainer.appendChild(item.$rootElement);
  }
}