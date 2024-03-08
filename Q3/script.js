function constructTable(formData) {
    let tableHTML = '<table class="table table-striped table-bordered">'
    for (let pair of formData.entries()) {
        tableHTML += '<tr>'
        tableHTML += '<th>' + pair[0] + '</th>'
        tableHTML += '<td>' + pair[1] + '</td>'
        console.log(pair[1])
        tableHTML += '</tr>'
    }
    tableHTML += '</table>'
    return tableHTML;
}

function logData(formData){
    console.log("Processed Data Below")
    for (let pair of formData.entries()) {
        console.log(pair[0],"           ", pair[1])
    }
}

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); 
  if (this.checkValidity()) {
    let formData = new FormData(event.target);
    logData(formData);
    document.getElementById('container').innerHTML = '<div> <h1>Your Application has been submitted.</h1> <p class="text-center">Please check your email for updates.</p> </div>';
    } else {
        event.stopPropagation();
    }

  this.classList.add("was-validated");
}, false);

document.getElementById("review").addEventListener('click',(event)=>{
    let formData = new FormData(document.getElementById("myForm"))
    document.getElementById('modal-body').innerHTML = constructTable(formData)

},false)