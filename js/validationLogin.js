// important
//   validation
$("form").validate({
    rules: {
        Email: "required",
        password: "required",
        Email: {
            required: true,
            minlength: 12,
            maxlength: 30
        },
        password: {
            required: true,
            minlength: 8,
            maxlength: 18
        },

    },
    messages: {
        Email: {
            required: "Please enter a Email",
            minlength: "Your Email must consist of at least 12 characters",
            maxlength: "Your Email must consist of less than 30  characters"
        },

        password: {
            required: "Please enter a password",
            minlength: "Your password must consist of at least 8 characters or numbers",
            maxlength: "Your password must consist of at less than 18"
        }
    }

});