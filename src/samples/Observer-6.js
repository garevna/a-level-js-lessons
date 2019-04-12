subscriber.showInfo = function ( data ) {
    this.topic = data.topic ? data.topic : this.topic ? this.topic : ""
    this.author = data.author ? data.author: this.author ? this.author : ""
    this.message = data.message ? data.message: this.message ? this.message : ""
    this.innerHTML = `
       <h3>${this.topic}</h3>
       <small>${this.author}</small>
       <p>${this.message}</p>
    `
}.bind ( subscriber )
