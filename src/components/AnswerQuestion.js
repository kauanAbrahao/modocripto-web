import React from 'react'
import './AnswerQuestion.css'

function AnswerQuestion() {
    return  (
        <section classNameName="py-5 border-bottom" id="features">
            <h1 className='myTitle'>FAQ</h1>
            <div className="container px-5 my-5">
                <h4 className="h4 fw-bolder">1. Quais são os principais dados oferecidos pela plataforma?</h4>
                <p>Os principais dados disponibilizados pela plataforma são: Valor, Volume e Capitalização de mercado. 
               Mais informações  <br></br>
                <a className="text-decoration-none" href="http://localhost:3000/servicos" target='_blank' rel="noreferrer">
                            Clique aqui
                </a>
                </p>


                <h5 className="h4 fw-bolder">2. Qual a origem dos dados disponibilizados pelo ModoCripto</h5>
                <p>Os dados do ModoCripto são calculados com base em vários mercados de criptomoedas a fim de obter 
                    uma média mais consistente.
                </p>


                <h5 className="h4 fw-bolder">3. Quantos dias são necessários para a disponibilização dos dados históricos?</h5>
                <p>O sistema inicia o processamento e tratamento dos dados a partir da meia-noite do dia seguinte 
                    e os dados são disponibilizados ao final do processo. Este processo é bem rápido e os dados são 
                    disponibilizados em poucos minutos.<br></br>
                </p>


                <h5 className="h4 fw-bolder">4. Quais criptomoedas são disponibilizadas pela plataforma?</h5>
                <p>No momento ainda não possuímos uma lista no website, 
                    mas há uma requisição que retorna todas as criptomoedas suportadas pelo ModoCripto<br></br>  
                <a className="text-decoration-none" href="http://localhost:3000/servicos" target='_blank' rel="noreferrer">
                            Clique aqui
                </a>
                </p>
            </div>
        </section>
    
    );
}

export default AnswerQuestion