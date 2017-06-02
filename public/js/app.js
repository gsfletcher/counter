/*jshint esversion: 6 */
const Counter = {
  rootElement: '#app',
  count: 0,
  start: function(){
    this.cacheDOM();
    this.bindEvents();
    this.render();
  },
  cacheDOM: function(){  //making bridges to individual tags in HTML
    this.root = document.querySelector('#app');
    this.button = document.querySelector('#increment');
    this.output = document.querySelector('#output');
  },
  bindEvents: function(){
    // only click events and only on the button
    this.button.addEventListener('click', () => {
    this.count += 1;
    this.render();
    });
  },
  render: function(){
    this.output.textContent = this.count;
  }
};
Counter.start();
