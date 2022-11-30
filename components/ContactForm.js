import { Fragment } from "react";


export default function ContactForm() {
  return (
    <Fragment>
        <h1 className="text-center md:text-left md:px-0 text-5xl font-bold md:inline-block py-2 rounded-md text-[#FBED04]">
            O que prometemos? Mais que likes, uma gestão estratégica das suas redes sociais! 
        </h1>
        <h3 className="text-[1rem] mb-8 md:w-[100%] md:text-left text-center">
            Preencha os campos abaixo para obter a nossa oferta especial Black Friday
        </h3>

            <div id="mlb2-5795111" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-5795111">
                    <div className="ml-form-align-center">
                        <div className="ml-form-embedWrapper embedForm">
                        <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
                            <div className="ml-form-embedContent" style={{marginBottom:0}}></div>
                            <form className="ml-block-form" action="https://static.mailerlite.com/webforms/submit/d6m8v4" data-code="d6m8v4" method="post" target="_blank">
                            <div className="ml-form-formContent">
                                <div class="ml-form-fieldRow">
                                    <div class="ml-field-group ml-field-name ml-validate-required">
                                        <input aria-label="name" aria-required="true" type="text" class="form-control" data-inputmask="" name="fields[name]" placeholder="Nome" autocomplete="name" />
                                    </div>
                                </div>
                                <div className="ml-form-fieldRow">
                                    <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                                        <input aria-label="email" aria-required="true" type="email" className="form-control" data-inputmask="" name="fields[email]" placeholder="E-mail" autoComplete="email" />
                                    </div>
                                </div>
                                <div class="ml-form-fieldRow">
                                    <div class="ml-field-group ml-field-phone ml-validate-required">
                                        <input aria-label="phone" aria-required="true" type="text" class="form-control" data-inputmask="" name="fields[phone]" placeholder="Telefone" autocomplete="" />
                                    </div>
                                </div>
                                <div className="ml-form-fieldRow ml-last-item">
                                    <div className="ml-field-group ml-field-company">
                                        <input aria-label="company" type="text" className="form-control" data-inputmask="" name="fields[company]" placeholder="Empresa" autoComplete="" />
                                    </div>
                                </div>
                            </div>
                            <input type="hidden" name="ml-submit" value="1" />
                            <div className="ml-form-embedSubmit">
                                <button type="submit" className="primary">Enviar</button>
                                <button disabled="disabled" style={{display:'none'}} type="button" className="loading"> <div className="ml-form-embedSubmitLoad"></div> <span className="sr-only">Loading...</span> </button>
                            </div>
                            <input type="hidden" name="anticsrf" value="true" />
                            </form>
                        </div>
                        <div className="ml-form-successBody row-success" style={{display:'none'}}>
                            <div className="ml-form-successContent">
                                <h4>Obrigado!</h4>
                                <p>Enviaremos sua proposta o mais rápido possível.</p>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
    </Fragment>
  );
}