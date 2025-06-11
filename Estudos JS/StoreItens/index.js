const itens = document.getElementById('itens-container')



const teste = [{
    imagem:'./img/Nft1.jpeg',
    nome:'GridPhantom Nft #0001',
    preco:1.5,
    raridade:'Único'
},{
    imagem:'./img/Nft2.jpeg',
    nome:'GridPhantom Nft #0002',
    preco:0.5,
    raridade:'Exelente',
},{
    imagem:'./img/Nft3.jpeg',
    nome:'GridPhantom Nft #0003',
    preco:1.3,
    raridade:'Comum'
    },
    {
    imagem:'./img/Nft4.jpeg',
    nome:'GridPhantom Nft #0004',
    preco:0.8,
    raridade:'Lendário'
    },
    {
    imagem:'./img/Nft4.jpeg',
    nome:'GridPhantom Nft #0004',
    preco:0.8,
    raridade:'Épico'
    },
    {
    imagem:'./img/Nft4.jpeg',
    nome:'GridPhantom Nft #0004',
    preco:0.8,
    raridade:'Raro'
    }
]


for (const item of teste) {
    itens.innerHTML += ` <div><img src="${item.imagem}" alt="nft"> 
                        <p>${item.nome}</p>
                        <p>${item.preco} ETH</p>
                        <p>${item.raridade}</p>
                        <h4 id="buyNow"><spam>Comprar agora</h4><button><i class="fa-solid fa-cart-shopping"></i></button>
    
    
    
    </div>
    `
    
}

