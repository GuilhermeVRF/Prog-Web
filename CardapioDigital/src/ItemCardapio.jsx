export function ItemCardapio(props){
    return <div id="div-ItemCardapio">
                <div id="div-infoItem">
                    <h1>{props.nome}</h1>
                    <p>{props.preco}</p>
                    <p>{props.descricao}</p>
                </div>
                
                <img src={props.imagem} alt="Imagem do produto" id="img-Item" />
                
            </div>
}