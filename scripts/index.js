Vue.createApp({
  data() {
    return {
      message: '',
      count: 0,
    };
  },
  methods: {
    showResult() {
      const output = document.getElementById('output');
      if (!this.count || this.count === '') {
        output.innerText = `Enter a number`;
        return;
      }
      if (isNaN(this.count)) {
        output.innerText = `Enter a number`;
        return;
      }
      if (this.count < 0) {
        output.innerText = `number cannot be negative ${this.count}`;
        return;
      }
      output.innerText = this.message.repeat(this.count);
    },
  },
}).mount('#app');
