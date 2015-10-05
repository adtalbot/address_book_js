$(document).ready(function() {                                                  /* A page can't be manipulated safely until the document is ready. Code inside of.ready will only run once the pageg DOM is ready for JS code to execute */
  $("#add-address").click(function() {                                          /* Adds a click listener to the add-address id. When the add-address button is clicked, it will find the new addresses div and append all of the form inputs in that div. It adds the additional form inputs to allow user to add more addresses. */
    $("#new-addresses").append('<div class="new-address">' +                    /* Appends HTML form input blanks to add more address fields when add address button is clicked */
                                 '<div class="form-group">' +
                                   '<label for="new-street"></label>' +
                                   '<input type="text" class="form-control new-street" placeholder="Street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city"></label>' +
                                   '<input type="text" class="form-control new-city" placeholder="City">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-state"></label>' +
                                   '<input type="text" class="form-control new-state" placeholder="State">' +
                                 '</div>' +
                               '</div>');
  });

  $("form#new-contact").submit(function(event) {                                /* When new-contact form is submitted... */
    event.preventDefault();                                                     /* When this method is called, the default action of the event will not be triggered. Prevents form from being submitted */

    var inputtedFirstName = $("input#new-first-name").val();                    /* Grabs the value inputted in the new-first-name field and stores it in the variable inputtedFirstName */
    var inputtedLastName = $("input#new-last-name").val();                      /* Grabs the value inputted in the new-last-name field and stores it in the variable inputtedLastName */
    var newContact = { firstName: inputtedFirstName, lastName: inputtedLastName, addresses: [] };  /* Creates a new object newContact with the variables holding the input values. Addresses will be stored in an empty array */

    $(".new-address").each(function() {                                         /* Goes to new-address class, which wraps around the address input fields and loops through them (.each is a jQuery function that can iterate over both arrays and objects) */
      var inputtedStreet = $(this).find("input.new-street").val();              /* this refers to the current element and the find method looks through all the child elements of the selected element for new street class and stores it in the variable inputtedStreet */
      var inputtedCity = $(this).find("input.new-city").val()                   /* this refers to the current element and the find method looks through all the child elements of the selected element for the new city class and stores it in the variable inputtedCity */
      var inputtedState = $(this).find("input.new-state").val();                /* this refers to the current element and the find method looks through all the child elements of the selected element for the new state class and stores it in the variable  inputtedState */

      var newAddress = { street: inputtedStreet, city: inputtedCity, state: inputtedState  }; /* Creates a new object newAddress with the variables from the new-address inputs */
      newContact.addresses.push(newAddress);                                    /* Takes newContact addresses property and pushes the newAddress into that array that is in the newContact object */
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");  /* Appends the new contact into the contacts UL. The contact will be clickable because it has the span class = "contacts" */
      $(".contact").last().click(function() {                                    /* A click listener is added to the last element in the contact class. The last element that is appended to the contact class */
        $("#show-contact").show();                                              /* On click, the 'show-contact' div will be shown */
        $(".first-name").text(newContact.firstName);                            /* The value of the firstName property is shown in the span class */
        $(".last-name").text(newContact.lastName);                              /* The value of the lastName property is shown in the span class */
        $("ul#addresses").text("");                                            /* Inserts empty line in UL */

        newContact.addresses.forEach(function(address) {                        /* Grabs newContact and loops through all the addresses that have been added to it */
          $("ul#addresses").append("<li>" + address.street + ", " + address.city + ", " + address.state + "</li>");   /* Goes to ul#addresses and inserts an <li> for each address */
        });
      });

      $("input#new-first-name").val();                                          /* Resets the input fields to blank */
      $("input#new-last-name").val();                                           /* Resets the input fields to blank */
      $("input.new-street").val();                                              /* Resets the input fields to blank */
      $("input.new-city").val();                                                /* Resets the input fields to blank */
      $("input.new-state").val();                                               /* Resets the input fields to blank */
      $("input.new-state").val();                                               /* Resets the input fields to blank */
  });
});
