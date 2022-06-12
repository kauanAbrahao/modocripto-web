import React from 'react'
import './Contact.css'

function Contact() {
    return  (  
    <section classNameName="py-5 border-bottom" id="features">
        <h1 className='myTitle'>Formulário de Contato</h1>
        <div className="forms">
        <form>
            <div >
                <label> Nome <input className='def' type="text" name="name"/> </label>
            </div>
            <div >
                <label> Assunto <input className='def' type="text" name="subject"/> </label>
            </div>
            <div >
                <label> E-mail <input  className='def' type="text" name="mail"/> </label>
            </div>
        <div>
           <label> Mensagem: </label><textarea name="message" ></textarea> 
        </div>
        <button type="submit">Enviar</button>
        </form>
            
        </div>
    </section>    
        );

}

export default Contact
