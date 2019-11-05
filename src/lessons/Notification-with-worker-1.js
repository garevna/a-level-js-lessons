const section = document.body

Notification.requestPermission( permission => {
  if ( permission ) {
    const messageWorker = new Worker( "/src/lessons/Notification-worker-1.js" )
    messageWorker.postMessage({
        icon: 'https://garevna.github.io/js-course/images/a-level-ico.png',
        image: "https://garevna.github.io/js-course/images/AJAX.png",
        message: "Hello, students! Do you like JS ?",
        title: "garevna"
    })

    const addElem = tag => section.appendChild (
        document.createElement ( tag )
    )

    const addImage = url => {
      let img = addElem ( "img" )
      img.src = url
      return img
    }

    messageWorker.onmessage = function ( event ) {
        if ( event.data.messageType === "images" ) {
          addImage ( event.data.image ).width = 300
          addImage ( event.data.icon ).width = 30
        } else addElem ( "p" ).innerText = event.data.text

        messageWorker.terminate()
    }
  }
})
                               
                               



