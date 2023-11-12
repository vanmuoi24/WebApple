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
