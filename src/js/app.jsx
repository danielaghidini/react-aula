import ReactDOM from 'react-dom';
import React from 'react';

import Navbar from './navbar/navbar';
import Titulo from './titulo/titulo';
import ListaCartao from './cartao/lista-cartao';

let App = (
    <div>
        <Navbar titulo="React" cor="red" />
        <div className="container">
            <Titulo />
            <ListaCartao qtdLinha="3" tamanhoCol="4" />
        </div>
    </div>
);

ReactDOM.render(App, document.getElementById('app'));