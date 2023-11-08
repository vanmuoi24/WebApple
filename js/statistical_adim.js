function statistical() {
  let dataproduct = JSON.parse(localStorage.getItem("dataproduct")) || [];
  document.getElementById("sum_product").innerHTML = dataproduct.length;
  var totalPrice;
  totalPrice = dataproduct.reduce((total, currentProduct) => {
    return total + parseFloat(currentProduct.gia);
  }, 0);
  let tongGiaTien = 0;
  for (let i = 0; i < dataproduct.length; i++) {
    tongGiaTien += parseFloat(
      dataproduct[i].gia.replace(/\./g, "").replace(",", ".")
    );
  }
  const giaTienChinhThuc = tongGiaTien.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  document.getElementById("sum_invest").innerHTML = giaTienChinhThuc;
  let tongIndex = 0;
  let tongIndex1 = 0;
  let tongIndex2 = 0;
  let tongIndex3 = 0;
  dataproduct.forEach((list, index) => {
    if (list.trangthai === "Điện thoại") {
      tongIndex++;
    }
    if (list.trangthai === "Tai nghe") {
      tongIndex1++;
    }
    if (list.trangthai === "Đồng hồ thông minh") {
      tongIndex2++;
    }
    if (list.trangthai === "iPad") {
      tongIndex3++;
    }
  });
  document.getElementById("phone").innerHTML = tongIndex;
  document.getElementById("tainghe").innerHTML = tongIndex1;
  document.getElementById("ipad").innerHTML = tongIndex3;
  document.getElementById("dongho").innerHTML = tongIndex2;
}
statistical();
