function productList() {
    // Call Web API to get a list of Product
    $.ajax({
      url: 'https://script.googleusercontent.com/macros/echo?user_content_key=61RnUtQJUeWTNrbiKlOkWbDher7R1PMAqtFapFxZQEmtWoRKwGayGDPpAKqfJH27uZAMcl9hf2r1SqlqFOxqAQH6eRHLaelTm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMfISo38izSjt4QVmgjONp1yNjMTi4Xyv2lsTqW_x8kaYVxysINYZOiezBNcMGFQceIENn0XDjw6qydn_OX-LMZZr3eOZigE6tz9Jw9Md8uu&lib=M-3rGwz2vKgMkWX0ph3dLJW_yCJ7QuvMt',
      type: 'GET',
      dataType: 'json',
      success: function (products) {
        productListSuccess(products);
      },
      error: function (request, message, error) {
        handleException(request, message, error);
      }
    });
  }

  function productListSuccess(products) {
    // Iterate over the collection of data
    $.each(products.data, function (index, product) {
      // Add a row to the Product table
      productAddRow(product);
    });
  }

  function productAddRow(product) {
    // Check if <tbody> tag exists, add one if not
     if ($("#positivemomentum tbody").length == 0) {
      $("#positivemomentum").append("<tbody></tbody>");
     }
     // Append row to <table>
     $("#positivemomentum tbody").append(
       productBuildTableRow(product));
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