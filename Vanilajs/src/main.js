import './style.css'

const btn1 = document.getElementById('CliqueMe')
const btn2 = document.getElementById('CliqueMe2')
const paragraph1 = document.getElementById('paragraph1')

btn1.addEventListener('mouseover',()=>{
    paragraph1.textContent = "obrigado por ler essa mensagem!!! Você será um grande homem."
    console.log('funcção 1 executada')
})
btn2.addEventListener('mouseover',()=>{
    paragraph1.textContent = ``
    console.log('função 2 executada!')
})


const caixa = document.getElementById('caixa');

    let isDragging = false;
    let offsetX, offsetY;

    caixa.addEventListener('mousedown', function(e) {
        isDragging = true;
        // Calcula a diferença entre o canto superior esquerdo da caixa e a posição do mouse
        offsetX = e.clientX - caixa.offsetLeft;
        offsetY = e.clientY - caixa.offsetTop;
        caixa.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            caixa.style.left = (e.clientX - offsetX) + 'px';
            caixa.style.top = (e.clientY - offsetY) + 'px';
        }
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
        caixa.style.cursor = 'grab';
    });