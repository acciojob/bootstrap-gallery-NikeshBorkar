//your JS code here. If required.

    $(document).ready(function(){
        $('.card-img-top').click(function(){
            var src = $(this).attr('src');
            $('#lightboxImage').attr('src', src);
        });
    });
