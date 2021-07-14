import React, { useState, useEffect } from 'react';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Catalog } from './components/Catalog/Catalog';

import { api } from './service/api';

import bannerImg from './assets/banner.svg';
import arrowLeft from './assets/arrow-left.svg';
import arrowRigth from './assets/arrow-rigth.svg';

import './app.css';

function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [catalog, setCatalog] = useState([]);
  const [numberPurchase, setNumberPurchase] = useState(0);
  const [numberCar, setNumberCar] = useState(0);
  const [controller, setController] = useState(false);

  //Toda vez que a página recarregar, irá fazer um GET na API para pegar todos os dados.
  useEffect(() => {
    //Requisiçõa na API
    async function loadedCatalog() {
      await api.get('api/v1/products')
      //Caso ocorra sucesso, retornará os dados
      .then((resposta) => {
        setCatalog(resposta.data)
      })
      //Caso ocorra erro, irá mostrar um log com o erro
      .catch(erro => console.log(erro))
    }

    loadedCatalog();

    setNumberPurchase(localStorage.getItem('numberCar'));
  }, []);

  //Fazer cadastro de usuário na base de tados.
  async function handlerSubmit(){

    //Válidações do input
    if(user === '' || email === ''){
      alert('Por Favor, digite um usuário válido!');
      setUser('');
      setEmail('');
      return;
    }

    //Criando o metódo da requisiçaõ POST
    api.post('api/v1/newsletter',{
      "email": email,
      "name": user
    })
    //Caso ocorra sucesso
    .then((resp) => {
      alert('E-mail cadastrado com sucesso!!!');
      setUser('');
      setEmail('');
    })
    //Caso ocorra erro
    .catch((error) => console.log(error))
  }

  function handlerAddCar(){
    setController(true);
    setNumberCar(numberCar + 1);
    localStorage.setItem('numberCar', numberCar + 1);
  }

  function handlerClearCar(){
    localStorage.clear();
    document.location.reload();
  }

  return (
    <div className="App">
      {/* Header */}
        <Header 
          numberPurchase={numberPurchase} 
          numberCar={numberCar} 
          clearCar={handlerClearCar}
          controller={controller}
        />
    
      {/* Banner */}
      <img src={bannerImg} alt="bannerImg" />

      {/* Title Best Sellers */}
      <div className="container-shelf">
        <span> Mais vendidos </span>
        <div className="details-bar"></div>
      </div>

      {/* Container Catalog */}
      <div className="viewMain-catalog">
        <img src={arrowLeft} alt="arrowLeft"/>

        {catalog.map((item) =>  {
          return(
            <Catalog 
              Id={item.productId}
              key={item.productId}
              image={item.imageUrl}
              nameProduct={item.productName}
              discout={item.listPrice}
              price={item.price}
              installments={item.installments}
              handlerAddCar={handlerAddCar} 
            />
          );
        })}

        <img src={arrowRigth} alt="arrowRigth"/>
      </div>

      {/* Container Event */}
      <div className="container-event">
        <h1> Participe de nossas news com promoções e novidades! </h1>
        <div className="container-form">
          <input 
            type="text" 
            className="input" 
            placeholder="Digite seu nome"
            value={user}
            onChange={(text) => setUser(text.target.value)}
          />
          <input 
            type="email" 
            className="input" 
            placeholder="Digite seu email"
            value={email}
            onChange={(text) => setEmail(text.target.value)}
          />
          <button onClick={handlerSubmit} className="button-submit">
            <p> Eu quero! </p>
          </button>
        </div>
      </div>


      {/* Footer */}
      <div className="contianer-footer">
        <Footer/>
      </div>

    </div>
  );
}

export default App;
