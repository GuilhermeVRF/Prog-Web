import imagemCapa from "./assets/restauranteOP.jpg";

export function Header(props){
    return <div id="div-Header">
                <img src={imagemCapa} alt="Imagem Capa" />
                <div id="div-Navegação">
                        <input type="radio" name="radio-Navegação" id="radio-Comida" onClick={() => props.mudarTipo(0)} defaultChecked/>
                        <label htmlFor="radio-Comida">Comida</label>

                        <input type="radio" name="radio-Navegação" id="radio-Sobremesa" onClick={() => props.mudarTipo(1)}/>
                        <label htmlFor="radio-Sobremesa">Sobremesa</label>

                        <input type="radio" name="radio-Navegação" id="radio-Bebida" onClick={() => props.mudarTipo(2)}/>
                        <label htmlFor="radio-Bebida">Bebida</label>
                </div>     
        </div>
}