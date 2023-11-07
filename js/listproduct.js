const right_header = document.getElementsByClassName("right_header")[0];
const product = document.getElementById("product");
console.log(product);
var list;
product.addEventListener("click", (event) => {
  list = `    
                <div class="list_product">
                <div class="product_header">
                    <h4>Danh Sach San Pham</h4>
                    <div class="input">
                    <input
                        type="text"
                        id="search_product"
                        placeholder="  Tìm kiếm sản phẩm"
                    />
                    <i class="fa-solid fa-magnifying-glass" id="seach"></i>
                    </div>
                    <button id="add_product">Thêm Sản Phẩm</button>
                </div>
                </div>
                <div class="selection_food">
                <label id="slection_food">Tim hãng điện thoại:</label>
                <select id="food_select">
                    <option>.....</option>
                    <option value="Điện thoại">Điện Thoại</option>
                    <option value="Tai nghe">Tai Nghe</option>
                    <option value="iPad">Ipad</option>
                    <option value="Đồng hồ thông minh">Đồng Hồ</option>
                </select>
                </div>
                <div class="table_product">
                <table border="0">
                    <thead>
                        <tr>
                            <td style="width: 80px">Mã Sản Phẩm</td>
                            <td>Tên Sản Phẩm</td>
                            <td>Hình Ảnh</td>
                            <td>Loai</td>
                            <td>Giá</td>
                            <td>Hành Động</td>
                            <td style="width: 100px">Thông Tin Sản Phẩm</td>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
                </div>
                <div class="pagination-buttons">
                <button id="prev">Previous</button>
                <button id="page1">1</button>
                <button id="page2">2</button>
                <button id="page3">3</button>
                <button id="page4">4</button>
                <button id="page5">5</button>
                <button id="page6">6</button>
                <button id="next">Next</button>
                </div>
                <div class="add_product">
                <div class="add_left">
                    <p id="text_p">Thêm Sản Phẩm</p>
                    <label for="fileInput" class="custom-file-upload">Chọn ảnh</label>
                    <input type="file" id="fileInput" class="input-file" />
                    <img id="PreviewImage" />
                </div>
                <div class="add_right">
                    <div class="name_product">
                    <label>Tên Món:</label>
                    <input type="text" id="name_food" />
                    </div>
                    <div class="selection">
                    <label id="slection">Chọn Món:</label>
                    <select id="select">
                    <option value="">......</option>
                    <option value="Món Heo">Món Heo</option>
                    <option value="Món Gà">Món Gà</option>
                    <option value="Món Cá">Món Cá</option>
                    <option value="Món Xào">Món Xào</option>
                    <option value="Món Hải Sản">Món Hải Sản</option>
                    <option value="Món Canh">Món Canh</option>
                    </select>
                </div>
                <div class="price_product">
                    <label for="">Mã Sản Phẩm:</label>
                    <input type="text" id="key_food" />
                    <label for="">Giá Bán:</label>
                    <input type="text" id="price_food" />
                </div>
                <div class="save_product">
                <button id="save_product">Lưu Sản Phẩm</button>
                <button id="save_product1">Lưu Chỉnh Sửa</button>
            </div>
                </div>
                <div class="icon_x">
                    <i class="fa-solid fa-x fa-beat" id="icon_add"></i>
                </div>
                </div>
          `;

  right_header.innerHTML = list;

  //ADD Product
  const add_product = document.getElementsByClassName("add_product")[0];
  const icon_add = document.getElementById("icon_add");
  const btn_add = document.getElementById("add_product");
  const table_product = document.getElementsByClassName("table_product")[0];

  btn_add.addEventListener("click", () => {
    add_product.classList.add("top");
    table_product.style.display = "none";
    document.getElementById("save_product").style.display = "block";
    document.getElementById("save_product1").style.display = "none";
    const text_p = document.getElementById("text_p");
    text_p.innerHTML = "Thêm Sản Phẩm";
    restfood();
  });
  icon_add.addEventListener("click", () => {
    add_product.classList.remove("top");
    table_product.style.display = "block";
  });

  const save_product_button = document.getElementById("save_product");
  const name_food = document.getElementById("name_food");
  const price_food = document.getElementById("price_food");
  const img_product = document.getElementById("PreviewImage");
  const key_food = document.getElementById("key_food");
  const foodSelect = document.getElementById("select");
  save_product_button.addEventListener("click", () => {
    var list_product = JSON.parse(localStorage.getItem("dataproduct")) || [];

    console.log(list_product);
    var user = {
      tensp: name_food.value,
      gia: price_food.value,
      masp: key_food.value,
      hinhanh: img_product.src,
      trangthai: foodSelect.value,
    };
    console.log(user);
    list_product.unshift(user);
    const add_product = document.getElementsByClassName("add_product")[0];
    localStorage.setItem("dataproduct", JSON.stringify(list_product));
    add_product.classList.remove("top");
    const table_product = document.getElementsByClassName("table_product")[0];
    table_product.style.display = "block";
    renderProductall();
  });
  showimgsave();
  search_product();
  food_select();
  renderProductall();
  //Tìm Món
});
function showimgsave() {
  const fileInput = document.getElementById("fileInput");
  const previewImage = document.getElementById("PreviewImage");

  fileInput.addEventListener("change", function () {
    const file = fileInput.files[0];

    const reader = new FileReader();

    reader.onloadend = function () {
      previewImage.src = reader.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      previewImage.src = "";
    }
  });
}
function search_product() {
  var list_product = JSON.parse(localStorage.getItem("dataproduct"));

  var table = document.getElementsByTagName("table")[0];
  const search_product = document.getElementById("search_product");
  var list_table = "";
  search_product.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      list_table = `
        <tr>
          <td>Mã Sản Phẩm</td>
          <td>Tên Sản Phẩm</td>
          <td>Hình Ảnh</td>
          <td>Loại</td>
          <td>Giá</td>
          <td>Hành Động</td>
          <td>Thông Tin Sản Phẩm</td>
        </tr>
      `;
      var found = false;
      list_product.forEach((list, index) => {
        const indexall = index;
        index++;

        var inputText = search_product.value.toLowerCase();
        var productName = list.tensp.toLowerCase();
        if (inputText === productName) {
          found = true;
          list_table += `
            <tr>
              <td style="width:90px">${list.masp}</td>
              <td id="tensp">${list.tensp}</td>
              <td><img src="${list.hinhanh}" alt="" /></td>
              <td>${list.trangthai}</td>
              <td>${list.gia}</td>
              <td>
               
                <i class="fa-solid fa-trash" onclick="delete_product(${indexall})"></i>
                <i class="fa-regular fa-pen-to-square" onclick="edit_product(${indexall})"></i>
              </td>
              <td style="width:90px"><button>Xem</button></td>
            </tr>
          `;
        }
      });

      if (!found) {
        list_table += `
          <tr>
            <td colspan="7">Không tìm thấy sản phẩm</td>
          </tr>
        `;
      }

      table.innerHTML = list_table;
      event.preventDefault();
    }
  });
}
function food_select() {
  var list_product = JSON.parse(localStorage.getItem("dataproduct"));

  const food_select = document.getElementById("food_select");
  var table = document.getElementsByTagName("table")[0];
  food_select.addEventListener("change", () => {
    var list_table = "";
    list_table = `
        <tr>
          <td>Mã Sản Phẩm</td>
          <td>Tên Sản Phẩm</td>
          <td>Hình Ảnh</td>
          <td>Loại</td>
          <td>Giá</td>
          <td>Hành Động</td>
          <td>Thông Tin Sản Phẩm</td>
        </tr>
      `;
    var list_product = JSON.parse(localStorage.getItem("dataproduct"));
    list_product.forEach((list, index) => {
      var indexall = index;
      index++;
      if (list.trangthai == food_select.value) {
        list_table += `
            <tr>
              <td style="width:90px">${list.masp}</td>
              <td id="tensp">${list.tensp}</td>
              <td><img src="${list.hinhanh}" alt="" /></td>
              <td>${list.trangthai}</td>
              <td>${list.gia}</td>
              <td>
              
                <i class="fa-solid fa-trash" onclick="delete_product(${indexall})"></i>
                <i class="fa-regular fa-pen-to-square" onclick="edit_product(${indexall})"></i>
              </td>
              <td style="width:90px"><button>Xem</button></td>
            </tr> 
          `;
        table.innerHTML = list_table;
      }
    });
  });
  renderProductall();
}

function delete_product(id) {
  var list_product = JSON.parse(localStorage.getItem("dataproduct"));
  let delete_ok = confirm("Bạn có chắc muốn xóa không");
  if (delete_ok) {
    console.log(list_product);
    list_product.splice(id, 1);
    localStorage.setItem("dataproduct", JSON.stringify(list_product));
    renderProductall();
  }
}
function edit_product(id) {
  var list_product = JSON.parse(localStorage.getItem("dataproduct"));
  document.getElementById("save_product1").style.display = "block";
  const save_product = document.getElementById("save_product");
  save_product.style.display = "none";
  const productToEdit = list_product[id];
  const table_product = document.getElementsByClassName("table_product")[0];
  const add_product = document.getElementsByClassName("add_product")[0];
  add_product.classList.add("top");
  table_product.style.display = "none";
  const text_p = document.getElementById("text_p");
  text_p.innerHTML = "Chỉnh Sửa sản Phẩm";
  const name_food = document.getElementById("name_food");
  const price_food = document.getElementById("price_food");
  const key_food = document.getElementById("key_food");
  const foodSelect = document.getElementById("select");
  const previewImage = document.getElementById("PreviewImage");
  const save_product1 = document.getElementById("save_product1");

  showimgsave();
  name_food.value = productToEdit.tensp;
  key_food.value = productToEdit.masp;
  price_food.value = productToEdit.gia;
  foodSelect.value = productToEdit.trangthai;
  previewImage.src = productToEdit.hinhanh;

  save_product1.addEventListener("click", (event) => {
    console.log(foodSelect.value);
    productToEdit.tensp = name_food.value;
    productToEdit.masp = key_food.value;
    productToEdit.gia = price_food.value;
    productToEdit.trangthai = foodSelect.value;
    productToEdit.hinhanh = previewImage.src;
    console.log(name_food.value);
    localStorage.setItem("dataproduct", JSON.stringify(list_product));
    add_product.classList.remove("top");

    table_product.style.display = "block";
    renderProductall();
  });
}
function renderProductall() {
  var list_product = JSON.parse(localStorage.getItem("dataproduct"));

  var table = document.getElementsByTagName("table")[0];
  let perpage = 6;
  let currentPage = 1;
  let start = 0;
  let end = perpage;
  const tatalPage = Math.ceil(list_product.length / perpage);
  const btnNext = document.getElementById("next");
  function renderProduct() {
    var list_product = JSON.parse(localStorage.getItem("dataproduct"));
    var list_table = "";
    list_table = `
              <tr>
                <td>Mã Sản Phẩm</td>
                <td>Tên Sản Phẩm</td>
                <td>Hình Ảnh</td>
                <td>Loai</td>
                <td>Giá</td>
              <td>Hành Động</td>
              <td>Thông Tin Sản Phẩm</td>
              </tr>
              `;
    list_product.map((item, index) => {
      const indexall = index;
      index++;

      if (index > start && index <= end) {
        list_table += `
      <tr>
        <td style="width:80px">${item.masp}</td>
        <td id="tensp">${item.tensp}</td>
        <td><img src="${item.hinhanh}" alt="" /></td>
        <td>${item.trangthai}</td>
        <td>${item.gia}</td>
        <td>
       
          <i class="fa-solid fa-trash" onclick="delete_product(${indexall})"></i>
          <i class="fa-regular fa-pen-to-square" onclick="edit_product(${indexall})"></i>
        </td>
        <td style="width:90px">  <button>Xem</button></td>
      </tr>
      `;
      }
    });

    table.innerHTML = list_table;
  }
  renderProduct();
  btnNext.addEventListener("click", () => {
    currentPage++;

    if (currentPage > tatalPage) {
      currentPage = tatalPage;
      currentPage = 1;
    }

    start = (currentPage - 1) * perpage;
    end = currentPage * perpage;

    renderProduct();
  });
  const page1 = document.getElementById("page1");
  page1.addEventListener("click", () => {
    currentPage = 1; // Thiết lập currentPage thành 2 khi nhấp vào "page2"
    start = (currentPage - 1) * perpage;
    end = currentPage * perpage;
    renderProduct();
  });
  const page2 = document.getElementById("page2");
  page2.addEventListener("click", () => {
    currentPage = 2; // Thiết lập currentPage thành 2 khi nhấp vào "page2"
    start = (currentPage - 1) * perpage;
    end = currentPage * perpage;
    renderProduct();
  });
  const page3 = document.getElementById("page3");
  page3.addEventListener("click", () => {
    currentPage = 3; // Thiết lập currentPage thành 2 khi nhấp vào "page2"
    start = (currentPage - 1) * perpage;
    end = currentPage * perpage;
    renderProduct();
  });
  const page4 = document.getElementById("page4");
  page4.addEventListener("click", () => {
    currentPage = 4; // Thiết lập currentPage thành 2 khi nhấp vào "page2"
    start = (currentPage - 1) * perpage;
    end = currentPage * perpage;
    renderProduct();
  });
  const page5 = document.getElementById("page5");
  page5.addEventListener("click", () => {
    currentPage = 5; // Thiết lập currentPage thành 2 khi nhấp vào "page2"
    start = (currentPage - 1) * perpage;
    end = currentPage * perpage;
    renderProduct();
  });
  const page6 = document.getElementById("page6");
  page6.addEventListener("click", () => {
    currentPage = 6; // Thiết lập currentPage thành 2 khi nhấp vào "page2"
    start = (currentPage - 1) * perpage;
    end = currentPage * perpage;
    renderProduct();
  });
}
function restfood() {
  const save_product = document.getElementById("save_product");
  const name_food = document.getElementById("name_food");
  const price_food = document.getElementById("price_food");
  const previewImage = document.getElementById("PreviewImage");
  const key_food = document.getElementById("key_food");
  const foodSelect = document.getElementById("select");
  name_food.value = "";
  key_food.value = "";
  price_food.value = "";
  foodSelect.value = "";
  previewImage.value = "";
}
