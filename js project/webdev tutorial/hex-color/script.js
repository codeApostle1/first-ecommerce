function changeColor() {
    var hex_num = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

    const hexcode = '';

    for (let i = 0; i < 6; i++) {
        const random = Math.floor(Math.random() * hex_num.length);
        hexcode += hex_num[random];
    }

    document.getElementById('hex-code').innerHTML = hexcode;
    document.body.style.backgroundColor = '#' + hexcode;
}