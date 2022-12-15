function productList() {
  console.log('productList');
    // Call Web API to get a list of Product
    $.ajax({
      url: 'https://script.googleusercontent.com/macros/echo?user_content_key=61RnUtQJUeWTNrbiKlOkWbDher7R1PMAqtFapFxZQEmtWoRKwGayGDPpAKqfJH27uZAMcl9hf2r1SqlqFOxqAQH6eRHLaelTm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMfISo38izSjt4QVmgjONp1yNjMTi4Xyv2lsTqW_x8kaYVxysINYZOiezBNcMGFQceIENn0XDjw6qydn_OX-LMZZr3eOZigE6tz9Jw9Md8uu&lib=M-3rGwz2vKgMkWX0ph3dLJW_yCJ7QuvMt',
      type: 'GET',
      dataType: 'json',
      success: function (products) {
        productListSuccess(products,$("#positivemomentum tbody"));
      },
      error: function (request, message, error) {
        handleException(request, message, error);
      }
    });
    productListNegative();
  }

  function productListNegative() {
    console.log('productListNegative');
    // Call Web API to get a list of Product
    $.ajax({
      url: 'https://script.googleusercontent.com/macros/echo?user_content_key=-yQ87-B7a2_2XpMeXGtK-EWxyT5a1l6tgWnfMUQag1b6l1rySzbNRolvFVWs1MEE6HvKFsQ43TZ5eetIPhE28EgSaZKfJysSm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCcBv6YuEVTyf1op_0nNDVV7O70bD6Pvs4wTj45WEKDTwBI1_Ni2ExO5RtXPhRHkQKrvg35aL2l7KUxzuWWZKTGx2nJX4aRLm9z9Jw9Md8uu&lib=M-3rGwz2vKgMkWX0ph3dLJW_yCJ7QuvMt',
      type: 'GET',
      dataType: 'json',
      success: function (products) {
        productListSuccess(products,$("#negativemomentum tbody"));
      },
      error: function (request, message, error) {
        handleException(request, message, error);
      }
    });
  }

  function productListSuccess(products,element) {
    // Iterate over the collection of data
    $.each(products.data, function (index, product) {
      // Add a row to the Product table
      productAddRow(product,element);
    });
  }

  function productAddRow(product,element) {
    // Check if <tbody> tag exists, add one if not
     // Append row to <table>
     $(element.append(
       productBuildTableRow(product)));
   }

   function productBuildTableRow(product) {
    var ret =
      "<tr>" +
       "<td>" + product.name + "</td>" +
       "<td>" + product.price + "</td>"
        + "<td>" + product.priceChange+"%" + "</td>" +
      "</tr>";
    return ret;
  }

  function handleException(request, message, error) {
    var msg = "";
    msg += "Code: " + request.status + "\n";
    msg += "Text: " + request.statusText + "\n";
    if (request.responseJSON != null) {
      msg += "Message" + request.responseJSON.Message + "\n";
    }
    alert(msg);
  }

  $(document).ready(function () {
    console.log("document.ready");
    productList();
  });