import React from 'react'

const Alert = () => {
    return (
        <div>
            <div id="liveAlertPlaceholder"></div>
<button type="button" className="btn btn-primary" id="liveAlertBtn">This is a simple alert</button>
        </div>
    )
}

export default Alert


const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert('Yassine Abdelhedi','success')
  })
}