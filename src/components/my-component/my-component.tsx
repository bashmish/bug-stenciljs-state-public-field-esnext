import { Component, Host, State, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @State() myCounterState: number = 0;

  inc() {
    console.log('inc');
    this.myCounterState++;
  }

  dec() {
    console.log('dec');
    this.myCounterState--;
  }

  render() {
    console.log('render');
    return (
      <Host>
        <button onClick={() => this.dec()}>-</button>
        <span>state: {this.myCounterState}</span>
        <button onClick={() => this.inc()}>+</button>
      </Host>
    );
  }
}
