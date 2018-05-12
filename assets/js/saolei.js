function closePop() {
        var pop = document.getElementById('pop');
        var closePop = document.getElementById('closePop');
        var container = document.getElementById('container');
        if (closePop.innerText == '展开》') {
                pop.style.width = "1000px";
                closePop.innerText = '《开始游戏';
                container.style.display = 'block'
        } else {
                pop.style.width = 0;
                closePop.innerText = '展开》';
                container.style.display = 'none'
        }



}

function changeValue() {
        var result = document.getElementById('result');
        result.innerText = document.getElementById('file').value

        console.log(document.getElementById('file').value)
}
