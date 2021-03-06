const yo = require('yo-yo');
import Soshi from '../core';

class Button extends Soshi {
  el: HTMLElement;
  props: {
    eventName: string,
    text: string,
  }
  
  constructor(props) {
    super(props);
    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent() {
    // Create the even
    const event = document.createEvent('Event');
    event.initEvent(this.props.eventName, true, true);
    // Listen for the event.
    // target can be any Element or other EventTarget.
    this.node.dispatchEvent(event);
  }

  template() {
    return yo`<button onclick=${this.clickEvent}>
          ${this.props.text}
    </button>`;
  }
}
export default Button;
