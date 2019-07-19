import React from 'react';
// import {Link} from 'react-router-dom';
import Button from "../buttons/button";
// import { postServices} from "../../store/app/actions";


const services =  [
    {
      description: "Первичное эндодонтическое лечение зуба",
        duration: 1,
     name: "Эндодонтическое лечение с помощью микроскопа",
      price: 3560
    },
    {
      description: "Удаление штифта из корневого канала",
      duration: 1,
     name:  "Эндодонтическое лечение с помощью микроскопа",
      price: 596
    },
    {
      description: "Удаление чужеродного инструмента из корневого канала",
      duration: 2,
     name:  "Эндодонтическое лечение с помощью микроскопа",
      price: 1490
    },
    {
      description: "Повторное эндодонтическое лечение зуба",
      duration: 2,
     name:  "Эндодонтическое лечение с помощью микроскопа",
      price: 3960
    },
    {
      description: "Поиск и прохождение 1 корневого канала",
      duration: 1,
     name:  "Эндодонтическое лечение с помощью микроскопа",
      price: 1600
    },
  
  
    {
      description: "Комплексная чистка зубов",
      duration: 2,
     name: "Лечение пародонтита",
      price: 945
    },
    {
      description: "Вектор-терапия (полный курс)",
      duration: 3,
     name: "Лечение пародонтита",
      price: 3300
    },
    {
      description: "Плазмолифтинг",
      duration: 1,
     name: "Лечение пародонтита",
      price: 1970
    },
    {
      description: "Закрытый кюретаж зубов",
      duration: 2,
     name: "Лечение пародонтита",
      price: 396
    },
  
  
    {
      description: "Коронка пластмассовая",
      duration: 1,
     name: "Протезирование",
      price: 590
    },
    {
      description: "Коронка металлокерамическая",
      duration: 1,
     name: "Протезирование",
      price:  4960
    },
    {
      description: "Коронка керамическая, безметалловая",
      duration: 2,
     name: "Протезирование",
      price: 6650
    },
    {
      description: "Винир керамический",
      duration: 2,
     name: "Протезирование",
      price: 7400
    },
    {
      description: "Люминиры",
      duration: 2,
     name: "Протезирование",
      price: 15500
    },
    {
      description: "Изготовление протеза",
      duration: 1,
     name: "Протезирование",
      price: 6750
    },
    {
      description: "Бюгельный протез",
      duration: 3,
     name: "Протезирование",
      price: 12600
    },
  
  
    {
      description: "Брекет-система (1 челюсть)",
      duration: 1,
     name: "Ортодонтия",
      price: 11800
    },
    {
      description: "Пластинка ортодонтическая на одну челюсть",
      duration: 1,
     name: "Ортодонтия",
      price: 4200
    },
    {
      description: "Елайнер-капа - 1 челюсть (10 кап)",
      duration: 2,
     name: "Ортодонтия",
      price: 19800
    },
  
  
    {
      description: "Удаление зуба",
      duration: 1,
     name: "Хирургия",
      price: 490
    },
    {
      description: "Удаление кисты",
      duration: 2,
     name: "Хирургия",
      price: 2800
    },
    {
      description: "Закрытие рецессии десны",
      duration: 2,
     name: "Хирургия",
      price: 2350
    },
  
  
    {
      description: "Пластика десны (в области 1-3 зубов)",
      duration: 2,
     name: "Хирургическая пародонтология",
      price: 970
    },
    {
      description: "Подрезание уздечки с помощью лазера",
      duration: 1,
     name: "Хирургическая пародонтология",
      price: 1700
    },
    {
      description: "Открытый кюретаж в области 1 зуба",
      duration: 2,
     name: "Хирургическая пародонтология",
      price: 980
    },
  
  
    {
      description: "Установка импланта",
      duration: 2,
     name: "Имплантация",
      price: 7656
    },
    {
      description: "Синус-лифтинг",
      duration: 2,
     name: "Имплантация",
      price: 3500
    },
  
  
    {
      description: "Консультация (осмотр, рекомендации) с составлением плана лчения",
      duration: 2,
     name: "Детская стоматология",
      price: 396
    },
    {
      description: "Психологическая адаптация (от 30 мн)",
      duration: 1,
     name: "Детская стоматология",
      price: 190
    },
    {
      description: "Цифровая рентгенография (в обл. 1-3 зубов)",
      duration: 1,
     name: "Детская стоматология",
      price: 145
    },
    {
      description: "Оказание помощи при острой боли",
      duration: 1,
     name: "Детская стоматология",
      price: 670
    },
    {
      description: "Медикаментозная обработка корневого канала",
      duration: 1,
     name: "Детская стоматология",
      price: 322
    },
    {
      description: "Пломбировка одного корневого канала молочного, постоянного зуба",
      duration: 2,
     name: "Детская стоматология",
      price: 320
    },
    {
      description: "Временная пломба",
      duration: 1,
     name: "Детская стоматология",
      price: 230
    },
    {
      description: "Пломба",
      duration: 1,
     name: "Детская стоматология",
      price: 965
    },
    {
      description: "Гигиеническая чистка ультразвуком (1 челюсть)",
      duration: 1,
     name: "Детская стоматология",
      price: 520
    },
    {
      description: "Удаление зуба",
      duration: 1,
     name: "Детская стоматология",
      price: 345
    },
    {
      description: "Общая анестезия – седация (медикаментозный сон ) (1 час)",
      duration: 1,
     name: "Детская стоматология",
      price: 1950
    }
  ]
  


export default class Reviews extends React.Component {
    render( ) {
        const {postServices } = this.props
        
        return (
            <>
                <h2>Отзывы</h2>
                <div className = "reviews-container">
                    <Button className = "btn" text = "POST to servises" onClick = { ( ) => { 
                        console.log ( "hello" )
                        services.map  ( el => postServices ( el )  ) } } />
                 </div>
            </>
        ) 
    }
}        