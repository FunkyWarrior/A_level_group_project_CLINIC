import React from 'react';
// import {Link} from 'react-router-dom';
import Button from "../buttons/button";
// import { postServices} from "../../store/app/actions";


const services =  [
    {
      name: "Первичное эндодонтическое лечение зуба",
        duration: 1,
     description: "Эндодонтическое лечение с помощью микроскопа",
      price: 3560
    },
    {
      name: "Удаление штифта из корневого канала",
      duration: 1,
     description:  "Эндодонтическое лечение с помощью микроскопа",
      price: 596
    },
    {
      name: "Удаление чужеродного инструмента из корневого канала",
      duration: 2,
     description:  "Эндодонтическое лечение с помощью микроскопа",
      price: 1490
    },
    {
      name: "Повторное эндодонтическое лечение зуба",
      duration: 2,
     description:  "Эндодонтическое лечение с помощью микроскопа",
      price: 3960
    },
    {
      name: "Поиск и прохождение 1 корневого канала",
      duration: 1,
     description:  "Эндодонтическое лечение с помощью микроскопа",
      price: 1600
    },
  
  
    {
      name: "Комплексная чистка зубов",
      duration: 2,
     description: "Лечение пародонтита",
      price: 945
    },
    {
      name: "Вектор-терапия (полный курс)",
      duration: 3,
     description: "Лечение пародонтита",
      price: 3300
    },
    {
      name: "Плазмолифтинг",
      duration: 1,
     description: "Лечение пародонтита",
      price: 1970
    },
    {
      name: "Закрытый кюретаж зубов",
      duration: 2,
     description: "Лечение пародонтита",
      price: 396
    },
  
  
    {
      name: "Коронка пластмассовая",
      duration: 1,
     description: "Протезирование",
      price: 590
    },
    {
      name: "Коронка металлокерамическая",
      duration: 1,
     description: "Протезирование",
      price:  4960
    },
    {
      name: "Коронка керамическая, безметалловая",
      duration: 2,
     description: "Протезирование",
      price: 6650
    },
    {
      name: "Винир керамический",
      duration: 2,
     description: "Протезирование",
      price: 7400
    },
    {
      name: "Люминиры",
      duration: 2,
     description: "Протезирование",
      price: 15500
    },
    {
      name: "Изготовление протеза",
      duration: 1,
     description: "Протезирование",
      price: 6750
    },
    {
      name: "Бюгельный протез",
      duration: 3,
     description: "Протезирование",
      price: 12600
    },
  
  
    {
      name: "Брекет-система (1 челюсть)",
      duration: 1,
     description: "Ортодонтия",
      price: 11800
    },
    {
      name: "Пластинка ортодонтическая на одну челюсть",
      duration: 1,
     description: "Ортодонтия",
      price: 4200
    },
    {
      name: "Елайнер-капа - 1 челюсть (10 кап)",
      duration: 2,
     description: "Ортодонтия",
      price: 19800
    },
  
  
    {
      name: "Удаление зуба",
      duration: 1,
     description: "Хирургия",
      price: 490
    },
    {
      name: "Удаление кисты",
      duration: 2,
     description: "Хирургия",
      price: 2800
    },
    {
      name: "Закрытие рецессии десны",
      duration: 2,
     description: "Хирургия",
      price: 2350
    },
  
  
    {
      name: "Пластика десны (в области 1-3 зубов)",
      duration: 2,
     description: "Хирургическая пародонтология",
      price: 970
    },
    {
      name: "Подрезание уздечки с помощью лазера",
      duration: 1,
     description: "Хирургическая пародонтология",
      price: 1700
    },
    {
      name: "Открытый кюретаж в области 1 зуба",
      duration: 2,
     description: "Хирургическая пародонтология",
      price: 980
    },
  
  
    {
      name: "Установка импланта",
      duration: 2,
     description: "Имплантация",
      price: 7656
    },
    {
      name: "Синус-лифтинг",
      duration: 2,
     description: "Имплантация",
      price: 3500
    },
  
  
    {
      name: "Консультация (осмотр, рекомендации) с составлением плана лчения",
      duration: 2,
     description: "Детская стоматология",
      price: 396
    },
    {
      name: "Психологическая адаптация (от 30 мн)",
      duration: 1,
     description: "Детская стоматология",
      price: 190
    },
    {
      name: "Цифровая рентгенография (в обл. 1-3 зубов)",
      duration: 1,
     description: "Детская стоматология",
      price: 145
    },
    {
      name: "Оказание помощи при острой боли",
      duration: 1,
     description: "Детская стоматология",
      price: 670
    },
    {
      name: "Медикаментозная обработка корневого канала",
      duration: 1,
     description: "Детская стоматология",
      price: 322
    },
    {
      name: "Пломбировка одного корневого канала молочного, постоянного зуба",
      duration: 2,
     description: "Детская стоматология",
      price: 320
    },
    {
      name: "Временная пломба",
      duration: 1,
     description: "Детская стоматология",
      price: 230
    },
    {
      name: "Пломба",
      duration: 1,
     description: "Детская стоматология",
      price: 965
    },
    {
      name: "Гигиеническая чистка ультразвуком (1 челюсть)",
      duration: 1,
     description: "Детская стоматология",
      price: 520
    },
    {
      name: "Удаление зуба",
      duration: 1,
     description: "Детская стоматология",
      price: 345
    },
    {
      name: "Общая анестезия – седация (медикаментозный сон ) (1 час)",
      duration: 1,
     description: "Детская стоматология",
      price: 1950
    }
  ]
  


export default class Reviews extends React.Component {
    render( ) {
        const {postServices } = this.props
        
        return (
            <>
                <h2>Отзывы</h2>
                <div classdescription = "reviews-container">
                    <Button className = "btn" text = "POST to servises"
                     onClick = { ( ) => {              }  }
                        />
                 </div>
            </>
        ) 
    }
}        