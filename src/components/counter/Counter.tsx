import React from 'react';

interface CounterProps {
  initialCount: number;
}

interface CounterState {
  count: number;
}

export class Counter extends React.Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: props.initialCount || 0,
    };
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement('p', null, `Count: ${this.state.count}`),

      React.createElement(
        'button',
        { onClick: () => this.setState({ count: this.state.count - 1 }) },
        '-'
      ),
      React.createElement(
        'button',
        { onClick: () => this.setState({ count: this.state.count + 1 }) },
        '+'
      )
    );
  }
}
