//your JS code here. If required.
$(document).on("click", '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
      });