function statistical() {
    let dataproduct = JSON.parse(localStorage.getItem('products')) || [];
    console.log(dataproduct);
    document.getElementById('sum_product').innerHTML = dataproduct.length;

    const totalPrice = dataproduct.reduce((total, currentProduct) => {
        return total + parseFloat(currentProduct.gia);
    }, 0);

    const giaTienChinhThuc = totalPrice.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    document.getElementById('sum_invest').innerHTML = giaTienChinhThuc;

    let tongIndex = 0;
    let tongIndex1 = 0;
    let tongIndex2 = 0;

    dataproduct.forEach((list) => {
        if (list.danhmuc === 'iPhone') {
            tongIndex++;
        }
        if (list.danhmuc === 'Macbook') {
            tongIndex1++;
        }
        if (list.danhmuc === 'iPad') {
            tongIndex2++;
        }
    });

    document.getElementById('iPhone').innerHTML = tongIndex;
    document.getElementById('MacBook').innerHTML = tongIndex1;
    document.getElementById('iPad').innerHTML = tongIndex2;
}
statistical();

document.getElementById('home').addEventListener('click', () => {
    const right_header = document.getElementsByClassName('right_header')[0];

    var statis = `
    <div class="statistical">
        <div class="table_all">
            <div class="warehouse">
                <h3>Thống Kê Sản Phẩm</h3>
                <table>
                    <thead>
                        <tr>
                            <td>Apple</td>
                            <td>Số Lượng</td>
                            <td>Tổng Sản Phẩm</td>
                            <td>Tổng Tiền Đầu Tư</td>
                        </tr>
                        <tr>
                            <td>iPhone</td>
                            <td id="iPhone">10</td>
                            <td rowspan="4" id="sum_product">10000</td>
                            <td rowspan="4" id="sum_invest">10000</td>
                        </tr>

                        <tr>
                            <td>iPad</td>
                            <td id="iPad">10</td>
                        </tr>
                        <tr>
                            <td>MacBook</td>
                            <td id="MacBook">10</td>
                        </tr>
                    </thead>
                </table>
            </div>
            <div class="Revenue">
                <div class="text"><h4>Thống Kê Doanh Thu</h4></div>
                <table>
                    <thead>
                        <tr>
                            <td style="width: 200px">Số Sản Phẩm Đã Bán</td>
                            <td>Doanh Thu</td>
                        </tr>
                        <tr>
                            <td>0</td>
                            <td>0VND</td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>
    `;
    right_header.innerHTML = statis;
    statistical();
});
