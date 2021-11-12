import React from 'react'
import ServicesCards from './ServicesCards'
import './ServicesHeroSection.css'

function ServicesHeroSection() {
    return (
        <>
   <section classNameName="py-5 border-bottom" id="features">
       <h1 className='myTitle'>Conheça a API da ModoCripto</h1>
            <div className="container px-5 my-5">
                <div className="row gx-5">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                       <div className="feature bg-gradient text-white rounded-3 mb-3"><i className="bi bi-collection"></i></div>
                        <div className='jsonImg'></div>
                        <h2 className="h4 fw-bolder">Interface REST</h2>
                        <p>Faça requisições rápidas e simples nos edpoints da ModoCripto, consumindo dados em formato JSON em tempo real.</p>
                        <a className="text-decoration-none" href="https://www.devmedia.com.br/rest-tutorial/28912" target='_blank' rel="noreferrer">
                            Implementação REST
                            <i className="bi bi-arrow-right"></i>
                        </a>
                        <br/>
                        <a className="text-decoration-none" href="http://localhost:4321/swagger-ui.html" target='_blank' rel="noreferrer">
                            Documentação Swagger
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <div className="feature-2 bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-building"></i></div>
                        <h2 className="h4 fw-bolder">Origem dos Dados</h2>
                        <p>A ModoCripto reúne dados de uma série de bolsas, aplicações, casas e mercados que comercializam criptomoedas. Dessa forma,
                            não há mais necessidade de conectar-se em uma série de endpoints, atendendo às demanas da sua aplicação. Entre as plataformas
                            centralizadas na ModoCripto, estão a CoinGecko e o Mercado Bitcoin.

                        </p>
                        <a className="text-decoration-none" href="https://www.coingecko.com/pt">
                            CoinGecko
                            <i className="bi bi-arrow-right"></i>
                        </a>
                        <br/>
                        <a className="text-decoration-none" href="https://www.mercadobitcoin.com.br/en/">
                            Mercado Bitcoin
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                    <div className="col-lg-4">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-toggles2"></i></div>
                        <h2 className="h4 fw-bolder">Featured title</h2>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                        <a className="text-decoration-none" href="#!">
                            Call to action
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-light py-5 border-bottom">
            <div className="container px-5 my-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bolder">Pay as you grow</h2>
                    <p className="lead mb-0">With our no hassle pricing plans</p>
                </div>
                <div className="row gx-5 justify-content-center">

                    <div className="col-lg-6 col-xl-4">
                        <div className="card mb-5 mb-xl-0">
                            <div className="card-body p-5">
                                <div className="small text-uppercase fw-bold text-muted">Free</div>
                                <div className="mb-3">
                                    <span className="display-4 fw-bold">$0</span>
                                    <span className="text-muted">/ mo.</span>
                                </div>
                                <ul className="list-unstyled mb-4">
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        <strong>1 users</strong>
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        5GB storage
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Unlimited public projects
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Community access
                                    </li>
                                    <li className="mb-2 text-muted">
                                        <i className="bi bi-x"></i>
                                        Unlimited private projects
                                    </li>
                                    <li className="mb-2 text-muted">
                                        <i className="bi bi-x"></i>
                                        Dedicated support
                                    </li>
                                    <li className="mb-2 text-muted">
                                        <i className="bi bi-x"></i>
                                        Free linked domain
                                    </li>
                                    <li className="text-muted">
                                        <i className="bi bi-x"></i>
                                        Monthly status reports
                                    </li>
                                </ul>
                                <div className="d-grid"><a className="btn btn-outline-primary" href="#!">Choose plan</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-xl-4">
                        <div className="card mb-5 mb-xl-0">
                            <div className="card-body p-5">
                                <div className="small text-uppercase fw-bold">
                                    <i className="bi bi-star-fill text-warning"></i>
                                    Pro
                                </div>
                                <div className="mb-3">
                                    <span className="display-4 fw-bold">$9</span>
                                    <span className="text-muted">/ mo.</span>
                                </div>
                                <ul className="list-unstyled mb-4">
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        <strong>5 users</strong>
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        5GB storage
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Unlimited public projects
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Community access
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Unlimited private projects
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Dedicated support
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Free linked domain
                                    </li>
                                    <li className="text-muted">
                                        <i className="bi bi-x"></i>
                                        Monthly status reports
                                    </li>
                                </ul>
                                <div className="d-grid"><a className="btn btn-primary" href="#!">Choose plan</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-xl-4">
                        <div className="card">
                            <div className="card-body p-5">
                                <div className="small text-uppercase fw-bold text-muted">Enterprise</div>
                                <div className="mb-3">
                                    <span className="display-4 fw-bold">$49</span>
                                    <span className="text-muted">/ mo.</span>
                                </div>
                                <ul className="list-unstyled mb-4">
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        <strong>Unlimited users</strong>
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        5GB storage
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Unlimited public projects
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Community access
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Unlimited private projects
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Dedicated support
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        <strong>Unlimited</strong>
                                        linked domains
                                    </li>
                                    <li className="text-muted">
                                        <i className="bi bi-check text-primary"></i>
                                        Monthly status reports
                                    </li>
                                </ul>
                                <div className="d-grid"><a className="btn btn-outline-primary" href="#!">Choose plan</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

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
            
        </>
    )
}

export default ServicesHeroSection
