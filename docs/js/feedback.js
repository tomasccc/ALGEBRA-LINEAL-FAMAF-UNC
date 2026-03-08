document$.subscribe(function() {
  var feedback = document.forms.feedback;
  if (typeof feedback === "undefined") return;
  
  feedback.hidden = false;
  feedback.addEventListener("submit", function(ev) {
    ev.preventDefault();
    feedback.firstElementChild.disabled = true;
    
    var data = ev.submitter.getAttribute("data-md-value");
    var note = feedback.querySelector(".md-feedback__note [data-md-value='" + data + "']");
    if (note) {
      note.hidden = false;
    }
  });
});