import "./Module.css"

function Form (){

    return(
        <div>
            <form className="conteiner">
                <div className="inputs">
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <label htmlFor="nome"></label>
                        <input type="text" name="nome"  id="nome" placeholder="nome do produto"/>
                    </div>
                <br />
                    <div>
                        <label htmlFor="preco"></label>
                        <input type="numer" id="preco" name="preco" placeholder="digite o preco" min={1}  /> 
                    </div>
                <br />
                    <div>
                        <label htmlFor="categoria"></label>
                        <input type="text" name="categoria"  id="categoria" placeholder="categoria"/>
                    </div>
                <br />
                    <div>
                        <label htmlFor="descricao"></label>
                        <input type="text" name="descricao"  id="descricao" placeholder="descricao"/>
                    </div>
                <br />
                    <div>
                        <button>concluir</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form;