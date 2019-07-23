import React from 'react';
// import {Link} from 'react-router-dom';
import Button from "../buttons/button";
// import { postServices} from "../../store/app/actions";


const doctors  = [
  {
    name: "Грегори Хаус",
    photo: "./images/doctors/gregoryhaus.jpg",
    experience: 30,
    profession: "Стоматолог-хирург",
    speciality: ["5d320979dae390159ff78155","5d320979dae390159ff7814d"],
    schedule: {
        "08": {
          "09": {
            "08:00": true,
            "09:00": true,
            "10:00": true,
            "11:00": true,
            "12:00": true,
            "13:00": true,
            "14:00": true,
            "15:00": true,
            "16:00": true,
            "17:00": true
          },
          "10": {
            "08:00": true,
            "09:00": true,
            "10:00": true,
            "11:00": true,
            "12:00": true,
            "13:00": true,
            "14:00": true,
            "15:00": true,
            "16:00": true,
            "17:00": true
          },
          "11": {
            "08:00": true,
            "09:00": true,
            "10:00": true,
            "11:00": true,
            "12:00": true,
            "13:00": true,
            "14:00": true,
            "15:00": true,
            "16:00": true,
            "17:00": true
          },
          "12": {
            "08:00": true,
            "09:00": true,
            "10:00": true,
            "11:00": true,
            "12:00": true,
            "13:00": true,
            "14:00": true,
            "15:00": true,
            "16:00": true,
            "17:00": true
          },
          "13": false,
          "14": false
        }
      },
    skillsname: "Образование:    <br> Московский Государственный Медико-стоматологический Университет (1986 г.), Интернатура — МГМСУ, Ординатура — кафедра хирургической стоматологии РМАПО (ЦНИИС).  <br>  Владеет современными методиками хирургической стоматологии и имплантологии, провел более 2000 операций по установке имплантатов, увеличения объема костной ткани и мягких тканей.   Прошел обучение у ведущих мировых специалистов в области имплантологии, костной пластики, пластики мягких тканей: Диплом University of Szeged, Faculty of Dentistry (Budapest) «Advanced Surgical Curriculum in Regenerative Implant Dentistry», January 2016 — June 2016 (Prof. Istvan Urban); «Пластическая хирургия в области зубов и имплантатов», Prof. Giovanni Zucchelli; «Advanced course in implant dentistry of the Clinic for fixed and Removable Prosthodontics and Material Science», University of Zurich, Switzerland; «Augmentation procedures part I: bone harvesting techniques, augmentation and soft tissue surgery», Prof. Dr. F. Khoury, Olsberg, Germany; «Augmentation procedures part II: bone grafting procedures and soft tissue management», Prof. Dr. F. Khoury, Olsberg, Germany; «SimPlant Academy Course on Computer Guided Dentistry», Leuven, Belgium; «Contemporary Esthetic Dentistry: non invasive and biological, on teeth and implants», Prof. Bernard Touati.",
    id: 1
},
{
    name: "Лиза Кадди",
    photo: "./images/doctors/lisa.jpg",
     experience: 15,
     profession: "Стоматолог-ортодонт",
     speciality: ["5d320979dae390159ff7813e","5d320979dae390159ff78142","5d320979dae390159ff78135"],
     schedule: {
        "08": {
          "09": {
            "08:00": true,
            "09:00": true,
            "10:00": true,
            "11:00": true,
            "12:00": true,
            "13:00": true,
            "14:00": true,
            "15:00": true,
            "16:00": true,
            "17:00": true
          },
          "10": {
            "08:00": true,
            "09:00": true,
            "10:00": true,
            "11:00": true,
            "12:00": true,
            "13:00": true,
            "14:00": true,
            "15:00": true,
            "16:00": true,
            "17:00": true
          },
          "11": {
            "08:00": true,
            "09:00": true,
            "10:00": true,
            "11:00": true,
            "12:00": true,
            "13:00": true,
            "14:00": true,
            "15:00": true,
            "16:00": true,
            "17:00": true
          },
          "12": {
            "08:00": true,
            "09:00": true,
            "10:00": true,
            "11:00": true,
            "12:00": true,
            "13:00": true,
            "14:00": true,
            "15:00": true,
            "16:00": true,
            "17:00": true
          },
          "13": false,
          "14": false
        }
      },
     skillsname: "Профессор, доктор медицинских наук, заслуженный врач Украины, стоматолог-ортодонт. <br> Член Профессионального общества ортодонтов Украины, член итальянского общества ортодонтов.  Владеет методиками лечения: элайнерами, функциональными аппаратами и несъемной аппаратурой у детей, подростков и взрослых пациентов. Применяет технологии 3D для планирования ортодонтического лечения. Постоянный участник международных конференций, съездов, мастер-классов ведущих специалистов в области ортодонтии.",
     id: 2
},
{
      name: "Эллисон Кэмерон",
      photo: "./images/doctors/alison.jpg",
     experience: 6,
     profession: "Стоматолог-эндодонтист ",
     speciality: ["5d320978dae390159ff780df","5d320979dae390159ff780f0","5d320979dae390159ff780f6","5d320978dae390159ff780d0","5d320979dae390159ff780ec"],
     schedule: {
        "08": {
          "09": {
            "08:00": true,
            "09:00": true,
            "10:00": true,
            "11:00": true,
            "12:00": true,
            "13:00": true,
            "14:00": true,
            "15:00": true,
            "16:00": true,
            "17:00": true
          },
          "10": {
            "08:00": true,
            "09:00": true,
            "10:00": true,
            "11:00": true,
            "12:00": true,
            "13:00": true,
            "14:00": true,
            "15:00": true,
            "16:00": true,
            "17:00": true
          },
          "11": {
            "08:00": true,
            "09:00": true,
            "10:00": true,
            "11:00": true,
            "12:00": true,
            "13:00": true,
            "14:00": true,
            "15:00": true,
            "16:00": true,
            "17:00": true
          },
          "12": {
            "08:00": true,
            "09:00": true,
            "10:00": true,
            "11:00": true,
            "12:00": true,
            "13:00": true,
            "14:00": true,
            "15:00": true,
            "16:00": true,
            "17:00": true
          },
          "13": false,
          "14": false
        }
      },
     skillsname: "врач стоматолог эндодонтист, закончила ДГМУ, сертифицированный специалист в области эндодонтии под микроскопом, реставрации зубов под микроскопом, клинической парадонтологии, гнатологии, прошедшая обучениев в Германии - VDW курс по современной эндодонтической стоматологии с микроскопом 2012, имеет множество сертификатов и дипломов.",
     id: 3
},
{
   name: "Лоренс Катнер",
    photo: "./images/doctors/lorenskatner.jpg",
     experience: 4,
     profession: "Стоматолог-терапевт",
     speciality: ["5d320979dae390159ff780fd","5d320979dae390159ff78116","5d320979dae390159ff780fa","5d320979dae390159ff78104"],
     schedule: {
        "08": {
          "09": {
            "08:00": true,
            "09:00": true,
            "10:00": true,
            "11:00": true,
            "12:00": true,
            "13:00": true,
            "14:00": true,
            "15:00": true,
            "16:00": true,
            "17:00": true
          },
          "10": {
            "08:00": true,
            "09:00": true,
            "10:00": true,
            "11:00": true,
            "12:00": true,
            "13:00": true,
            "14:00": true,
            "15:00": true,
            "16:00": true,
            "17:00": true
          },
          "11": {
            "08:00": true,
            "09:00": true,
            "10:00": true,
            "11:00": true,
            "12:00": true,
            "13:00": true,
            "14:00": true,
            "15:00": true,
            "16:00": true,
            "17:00": true
          },
          "12": {
            "08:00": true,
            "09:00": true,
            "10:00": true,
            "11:00": true,
            "12:00": true,
            "13:00": true,
            "14:00": true,
            "15:00": true,
            "16:00": true,
            "17:00": true
          },
          "13": false,
          "14": false
        }
      },
     skillsname: "Образование: <br> Киевский Государственный Медицинский Институт, Интернатура МГМСУ, Курсы повышения квалификации в Италии, Германии, США.  <br> Обучение: <br>  Арнальдо Каселлучи, Италия — «Применение электронного микроскопа в эндодонтии», Discus Dental, Cologne, Germany — «Новые технологии в эндодонтии», Discus Dental, California, USA — «Системы отбеливания», «Smart Endodontics».  <br>  Специализация:  <br>  эндодонтия, отбеливание. Врач-эксперт компании Philihs. Член жюри конкурсов по эстетической стоматологии СТАР. Автор обучающих программ и ведущий обучающих семинаров и мастер-классов по эндодонтии и отбеливанию.",
     id: 4
},
{
   name: "Эрик Форман",
    photo: "./images/doctors/ericforman.jpg",
     experience: 10,
     profession: "Стоматолог-протезист",
     speciality: ["5d320979dae390159ff78137","5d320979dae390159ff7811d","5d320979dae390159ff78140","5d320979dae390159ff78114","5d320979dae390159ff78118", "5d320979dae390159ff7811a", "5d320979dae390159ff78125", "5d32097adae390159ff7816a", "5d32097adae390159ff78161"],
     schedule: {
        "08": {
          "09": {
            "08:00": true,
            "09:00": true,
            "10:00": true,
            "11:00": true,
            "12:00": true,
            "13:00": true,
            "14:00": true,
            "15:00": true,
            "16:00": true,
            "17:00": true
          },
          "10": {
            "08:00": true,
            "09:00": true,
            "10:00": true,
            "11:00": true,
            "12:00": true,
            "13:00": true,
            "14:00": true,
            "15:00": true,
            "16:00": true,
            "17:00": true
          },
          "11": {
            "08:00": true,
            "09:00": true,
            "10:00": true,
            "11:00": true,
            "12:00": true,
            "13:00": true,
            "14:00": true,
            "15:00": true,
            "16:00": true,
            "17:00": true
          },
          "12": {
            "08:00": true,
            "09:00": true,
            "10:00": true,
            "11:00": true,
            "12:00": true,
            "13:00": true,
            "14:00": true,
            "15:00": true,
            "16:00": true,
            "17:00": true
          },
          "13": false,
          "14": false
        }
      },
     skillsname: "Образование: <br>   2009 — 2014 гг. — Ставропольский Государственный Медицинский Университет, стоматологический факультет. <br> 2014 — 2015 гг. — Интернатура, Московский Государственный Медико-стоматологический Университет по специальности «Стоматология общей практики».  <br>  2015 — 2017 гг. — Ординатура, Московский областной научно-исследовательский клинический институт имени М. Ф. Владимирского по специальности «Хирургическая стоматология». <br>   Обучение:  <br>  Курс Nobel Biocare: «Предсказуемая дентальная имплантация. От функции к эстетике» (г. Москва, 2018 год). <br>  Курс Dental Guru: «Одномоментная имплантация и немедленная нагрузка. Клинические и лабораторные этапы». <br>  Является участником международных конгрессов и мастер классов.",
     id: 5
},
{
   name: "Крис Тауб",
    photo:  "./images/doctors/kris_taub.jpg",
     experience: 20,
     profession: "Детский стоматолог",
     speciality: ["5d32097adae390159ff781a3","5d32097adae390159ff7818d","5d32097adae390159ff78178","5d32097adae390159ff7817e","5d32097adae390159ff78186", "5d32097adae390159ff781a8", "5d32097adae390159ff7816f", "5d32097adae390159ff78188", "5d32097adae390159ff7819d", "5d320979dae390159ff78147", "5d32097adae390159ff7817c"],
     schedule: {
        "08": {
          "09": {
            "08:00": true,
            "09:00": true,
            "10:00": true,
            "11:00": true,
            "12:00": true,
            "13:00": true,
            "14:00": true,
            "15:00": true,
            "16:00": true,
            "17:00": true
          },
          "10": {
            "08:00": true,
            "09:00": true,
            "10:00": true,
            "11:00": true,
            "12:00": true,
            "13:00": true,
            "14:00": true,
            "15:00": true,
            "16:00": true,
            "17:00": true
          },
          "11": {
            "08:00": true,
            "09:00": true,
            "10:00": true,
            "11:00": true,
            "12:00": true,
            "13:00": true,
            "14:00": true,
            "15:00": true,
            "16:00": true,
            "17:00": true
          },
          "12": {
            "08:00": true,
            "09:00": true,
            "10:00": true,
            "11:00": true,
            "12:00": true,
            "13:00": true,
            "14:00": true,
            "15:00": true,
            "16:00": true,
            "17:00": true
          },
          "13": false,
          "14": false
        }
      },
     skillsname: "Образование <br> Харьковский медицинский университет по специальности «Ортодонтия», «Терапевтическая стоматология», «Ортопедическая стоматология», «Детская стоматология». <br> Специализация  <br>    Исправление прикуса; лечение тканей пародонта (пародонтоз, пародонтит); художественная реставрация зубов; все виды протезирования; эстетическая стоматология и хиругрия.",
     id: 6
}
 ]


export default class Reviews extends React.Component {
    render( ) {
        const {postDoctors } = this.props
        
        return (
            <>
                <h2>Отзывы</h2>
                <div classdescription = "reviews-container">
                    <Button className = "btn" text = "POST to doctors"
                     onClick = { ( ) => {   doctors.map ( el => postDoctors ( el ) )           }  }
                        />
                 </div>
            </>
        ) 
    }
}        