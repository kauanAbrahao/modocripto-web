import React from 'react'
import './ServicesCardSection.css'

function ServicesCardSection() {
    return (
        <>
         <section class="features-icons bg-light text-center">
            <div class="container">
                <div class="row">
                    <h2 className='myTitle1'> Principais Dados </h2>
                    <div class="col-lg-4">
                        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div class="features-icons-icon d-flex"><i class="bi-window m-auto text-primary"></i></div>
                                <h3 className='title'>Valor</h3>
                                <h5 className="sub-title"><i>"current_price"</i></h5>
                                <p class="lead mb-0">Preço atual da criptomoeda. Calculado através da média entre as diferentes bolsas de valores nacionais e internacionais.</p>
                                <h5 className='sub-title'><i>"avg_price"</i></h5>
                                <p class="lead mb-0">Preço médio da criptomoeda. Dado exclusivamente histórico. </p>
                                <h5 className='sub-title'><span><i>"high_24h" & "low_24h" </i> </span> </h5>
                                <p class="lead mb-0">Maior e menor valor da criptomoeda para determinado dia, respectivamente </p>
                       
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div class="features-icons-icon d-flex"><i class="bi-layers m-auto text-primary"></i></div>
                                <h3 className='title'>Volume</h3>
                                <h5 className="sub-title"><i>"total_volume"</i></h5>
                                <p class="lead mb-0">Volume total de criptomoedas circulando no mercado.</p>
                                <h5 className="sub-title"><i>"total_volume_24h"</i></h5>
                                <p class="lead mb-0">Volume total de criptomoedas em determinada data.</p>
                            
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                            <div class="features-icons-icon d-flex"><i class="bi-terminal m-auto text-primary"></i></div>
                            <h3 className='title'>Capitalização de Mercado</h3>
                                <h5 className="sub-title"><i>"mkt_cap_rank"</i></h5>
                                <p class="lead mb-0">Rank de Capitalização de Mercado; ordena as criptomoedas pelo rank atual.</p>
                                <h5 className='sub-title'><i>"mkt_cap"</i></h5>
                                <p class="lead mb-0">Capitalização de mercado atual para cada criptomoeda. </p>
                                <h5 className='sub-title'><span><i>"avg_mkt_cap" </i> </span> </h5>
                                <p class="lead mb-0">Capitalização média da criptomoeda. Dado exclusivamente histórico.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            
        </>
    )
}

export default ServicesCardSection
