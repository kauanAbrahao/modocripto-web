import React from 'react'
import ServicesCards from './ServicesCards'
import './ServicesHeroSection.css'
import {config} from '../Constants'

function ServicesHeroSection() {
    const swagger_url = config.url.SWAGGER_URL;
    return (
        <>
   <section classNameName="py-5 border-bottom" id="features">
       <h1 className='myTitle'>Conheça a API da ModoCripto</h1>
            <div className="container px-5 my-5">
                <div className="row gx-5">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                       <div className="feature bg-gradient text-white rounded-3 mb-3">{/*<i className="bi bi-collection"></i>*/}</div>
                        <div className='jsonImg'></div>
                        <h2 className="h4 fw-bolder">Interface REST</h2>
                        <p>Faça requisições rápidas e simples nos edpoints da ModoCripto, consumindo dados em formato JSON em tempo real.</p>
                        <a className="text-decoration-none" href="https://www.devmedia.com.br/rest-tutorial/28912" target='_blank' rel="noreferrer">
                            Implementação REST
                            <i className="bi bi-arrow-right"></i>
                        </a>
                        <br/>
                        <a className="text-decoration-none" href={swagger_url} target='_blank' rel="noreferrer">
                            Documentação Swagger
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <div className="feature-2 bg-primary bg-gradient text-white rounded-3 mb-3">{/*<i className="bi bi-building"></i>*/}</div>
                        <h2 className="h4 fw-bolder">Origem dos Dados</h2>
                        <p>A ModoCripto reúne dados de uma série de bolsas, aplicações, casas e mercados que comercializam criptomoedas. Dessa forma,
                            não há mais necessidade de conectar-se em uma série de endpoints, atendendo às demandas da sua aplicação em apenas um. Entre as plataformas
                            centralizadas na ModoCripto, estão a CoinGecko e o Mercado Bitcoin.

                        </p>
                        <a className="text-decoration-none" href="https://www.coingecko.com/pt" target='_blank' rel="noreferrer">
                            CoinGecko
                            <i className="bi bi-arrow-right"></i>
                        </a>
                        <br/>
                        <a className="text-decoration-none" href="https://www.mercadobitcoin.com.br/en/" target='_blank' rel="noreferrer">
                            Mercado Bitcoin
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                    <div className="col-lg-4">
                        <div className="feature-3  bg-gradient text-white rounded-3 mb-3">{/*<i className="bi bi-toggles2"></i>*/}</div>
                        <h2 className="h4 fw-bolder">Principais Criptomoedas</h2>
                       <span> <p>A ModoCripto conta com mais de 90 criptomoedas, incluindo dados históricos e atuais. Entre elas, Bitcoin (BTC), Ethereum (ETH) e Litecoin (LTC). </p> </span>
                    </div>
                </div>
            </div>
        </section>

{/* 
        <section className="py-5 border-bottom">
            <div className="container px-5 my-5 px-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bolder">Customer testimonials</h2>
                    <p className="lead mb-0">Our customers love working with us</p>
                </div>
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-6">

                        <div className="card mb-4">
                            <div className="card-body p-4">
                                <div className="d-flex">
                                    <div className="flex-shrink-0"><i className="bi bi-chat-right-quote-fill text-primary fs-1"></i></div>
                                    <div className="ms-4">
                                        <p className="mb-1">Thank you for putting together such a great product. We loved working with you and the whole team, and we will be recommending you to others!</p>
                                        <div className="small text-muted">- Client Name, Location</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body p-4">
                                <div className="d-flex">
                                    <div className="flex-shrink-0"><i className="bi bi-chat-right-quote-fill text-primary fs-1"></i></div>
                                    <div className="ms-4">
                                        <p className="mb-1">The whole team was a huge help with putting things together for our company and brand. We will be hiring them again in the near future for additional work!</p>
                                        <div className="small text-muted">- Client Name, Location</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
*/}
            
        </>
    )
}

export default ServicesHeroSection
