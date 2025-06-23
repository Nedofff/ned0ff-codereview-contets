import { Vacancy } from "@/data/vacancies";

const description = `
  <div>
    <h3>О позиции</h3>
    <p>Компания IT_ONE запускает стажировку для будущих Java разработчиков, целью которой является подготовка специалистов уровня от Junior+ до Middle-.</p>
    <p>Наши стажеры смогут получить опыт работы в профессиональной среде, развить свои навыки под руководством высококвалифицированных специалистов и открыть новые возможности для своей карьеры в IT-индустрии.</p>
    
    <h3>О программе:</h3>
   <ul>
   
  <li> Период стажировки: июнь-август 2025;</li>
  <li>Продолжительность 3 месяца;</li>
  <li>Онлайн формат;</li>
  <li>До 30 часов в неделю;</li>
  <li>Обучение с тренером soft skills;</li>
  <li>Работа над собственным проектом с ментором. Встречи раз в неделю по 2 часа;</li>
  <li>Материалы для изучения + домашние задания + контрольные работы;</li>
  <li>Этапы отбора: отправка резюме -> заполнение анкеты -> собеседование с рекрутером -> собеседование с техническим специалистом.</li>
   </ul>

   <h3>Ожидания от кандидата:</h3>
   <ul>
    <li>Мы ищем выпускников технических вузов, которые имеют базовые знания Java Core, Spring Framework, SQL.</li>
    <li>Будет плюсом наличие опыта работы в технической сфере, а также в IT в целом и в разработке в частности.</li>
   </ul>
   <div id='advertising'></div>
      <h3>Дополнительное преимущество:</h3>
   <ul>
    <li>Понимание ООП</li>
    <li>Понимание микросервисной архитектуры и многопоточности</li>
   </ul>
   <h3>Что мы предлагаем после успешного прохождения стажировки:</h3>
  <ul>
  <li>Официальное трудоустройство по ТК РФ в аккредитованную IT-компанию;</li>
  <li>Возможность удаленной работы из любого города;</li>
  <li>ДМС после прохождения испытательного срока;</li>
  <li>Работа в команде высококвалифицированных профессионалов;</li>
  <li>Дополнительное обучение, библиотека, возможность посещения конференций, вебинаров, тренингов;</li>
  <li>Корпоративные скидки от партнеров;</li>
  <li>Насыщенная корпоративная культура.</li>
  </div>
`;

export const vacanciesData: Vacancy[] = [
  {
    id: 1,
    active: true,
    externalId: "bell-integrator-1",
    title:
      "Тестировщик Java/QA инженер по автоматизированному тестированию Java с нуля (стажер)",
    companyName: "Bell Integrator",
    location: "Воронеж",
    datePublication: "01.03.2025",
    salary: "от 50 000 ₽",
    specialty: "QA/Testing",
    remote: true,
    internship: true,
    image: "/companies/bell-integrator.png",
    url: "https://example.com/vacancy/1",
    description,
    source: "hh.ru",
    similarVacancies: [
      {
        id: 2,
        title: "Начинающий тестировщик / AQA Engineer (Java)",
        companyName: "Инфомаксимум",
      },
      {
        id: 3,
        title: "Стажер Java разработчик",
        companyName: "Wanted.",
      },
    ],
  },
  {
    id: 2,
    active: true,
    externalId: "infomaximum-1",
    title: "Начинающий тестировщик / AQA Engineer (Java)",
    companyName: "Инфомаксимум",
    location: "Санкт-Петербург",
    datePublication: "01.03.2025",
    salary: null,
    specialty: "QA/Testing",
    remote: true,
    internship: true,
    image: "/companies/info-spb.png",
    url: "https://example.com/vacancy/2",
    description: `
      <div>
        <h3>О позиции</h3>
        <p>Ищем начинающего специалиста по автоматизированному тестированию для работы с Java-проектами. Готовы обучать и развивать перспективного кандидата.</p>
        
        <h3>Требования</h3>
        <ul>
          <li>Высшее техническое образование</li>
          <li>Базовые знания Java или другого ОО языка</li>
          <li>Понимание основ тестирования</li>
          <li>Желание развиваться в области автоматизации</li>
          <li>Аналитический склад ума</li>
        </ul>
        
        <h3>Будет плюсом</h3>
        <ul>
          <li>Опыт программирования на Java</li>
          <li>Знание Maven/Gradle</li>
          <li>Понимание REST API</li>
          <li>Опыт работы с базами данных</li>
        </ul>
        
        <h3>Мы предлагаем</h3>
        <ul>
          <li>Обучение с нуля</li>
          <li>Менторство опытных коллег</li>
          <li>Гибкий график работы</li>
          <li>Современный офис в центре города</li>
          <li>Корпоративные мероприятия</li>
        </ul>
      </div>
    `,
    source: "hh.ru",
    similarVacancies: [
      {
        id: 1,
        title:
          "Тестировщик Java/QA инженер по автоматизированному тестированию Java с нуля (стажер)",
        companyName: "Bell Integrator",
      },
      {
        id: 7,
        title: "Junior Java QA engineer",
        companyName: "Button One",
      },
    ],
  },
  {
    id: 3,
    active: true,
    externalId: "wanted-1",
    title: "Стажер Java разработчик",
    companyName: "Wanted.",
    location: "Нижний-Новгород",
    datePublication: "01.03.2025",
    salary: "15 000 ₽",
    specialty: "Backend Development",
    remote: true,
    internship: true,
    image: "/companies/wanted.png",
    url: "https://example.com/vacancy/3",
    description: `
      <div>
        <h3>О позиции</h3>
        <p>Приглашаем на стажировку будущего Java-разработчика. Участие в разработке корпоративных веб-приложений под руководством опытных менторов.</p>
        
        <h3>Требования</h3>
        <ul>
          <li>Знание основ Java (Core Java)</li>
          <li>Понимание ООП принципов</li>
          <li>Базовые знания HTML/CSS</li>
          <li>Опыт работы с Git</li>
          <li>Знание английского языка на базовом уровне</li>
        </ul>
        
        <h3>Будет плюсом</h3>
        <ul>
          <li>Знание Spring Framework</li>
          <li>Опыт работы с MySQL/PostgreSQL</li>
          <li>Понимание REST API</li>
          <li>Опыт работы с Maven</li>
        </ul>
        
        <h3>Мы предлагаем</h3>
        <ul>
          <li>Стажировку с последующим трудоустройством</li>
          <li>Персональное менторство</li>
          <li>Участие в реальных проектах</li>
          <li>Обучающие курсы и семинары</li>
          <li>Молодая команда разработчиков</li>
        </ul>
      </div>
    `,
    source: "hh.ru",
    similarVacancies: [
      {
        id: 4,
        title: "Специалист технической поддержки (java junior)",
        companyName: "Инфомаксимум",
      },
      {
        id: 5,
        title: "Intern Java developer (Платформа дистрибуции)",
        companyName: "СберТех",
      },
    ],
  },
  {
    id: 4,
    active: true,
    externalId: "infomaximum-2",
    title: "Специалист технической поддержки (java junior)",
    companyName: "Инфомаксимум",
    location: "Иркутск",
    datePublication: "11.02.2025",
    salary: "50 000 ₽",
    specialty: "Backend Development",
    remote: true,
    internship: false,
    image: "/companies/info-irkt.png",
    url: "https://example.com/vacancy/4",
    description: `
      <div>
        <h3>О позиции</h3>
        <p>Ищем специалиста технической поддержки для работы с Java-продуктами. Вы будете помогать клиентам решать технические вопросы и участвовать в доработке продуктов.</p>
        
        <h3>Требования</h3>
        <ul>
          <li>Высшее техническое образование</li>
          <li>Базовые знания Java</li>
          <li>Опыт работы с базами данных</li>
          <li>Навыки работы с Linux</li>
          <li>Умение работать с клиентами</li>
          <li>Стрессоустойчивость</li>
        </ul>
        
        <h3>Будет плюсом</h3>
        <ul>
          <li>Опыт в технической поддержке</li>
          <li>Знание SQL на продвинутом уровне</li>
          <li>Понимание веб-технологий</li>
          <li>Опыт работы с системами мониторинга</li>
        </ul>
        
        <h3>Мы предлагаем</h3>
        <ul>
          <li>Официальное трудоустройство</li>
          <li>Стабильную зарплату</li>
          <li>Медицинскую страховку</li>
          <li>Профессиональное развитие</li>
          <li>Офис в центре города</li>
        </ul>
      </div>
    `,
    source: "hh.ru",
    similarVacancies: [
      {
        id: 3,
        title: "Стажер Java разработчик",
        companyName: "Wanted.",
      },
      {
        id: 5,
        title: "Intern Java developer (Платформа дистрибуции)",
        companyName: "СберТех",
      },
    ],
  },
  {
    id: 5,
    active: true,
    externalId: "sbertech-1",
    title: "Intern Java developer (Платформа дистрибуции)",
    companyName: "СберТех",
    location: "Волгоград",
    datePublication: "05.02.2025",
    salary: "не указана",
    specialty: "Backend Development",
    remote: true,
    internship: true,
    image: "/companies/sber.png",
    url: "https://example.com/vacancy/5",
    description: `
      <div>
        <h3>О позиции</h3>
        <p>СберТех приглашает Java-разработчика стажера для работы над платформой дистрибуции. Возможность работать в команде лучших разработчиков и изучать современные технологии.</p>
        
        <h3>Требования</h3>
        <ul>
          <li>Знание Java Core</li>
          <li>Понимание принципов ООП</li>
          <li>Базовые знания Spring Framework</li>
          <li>Опыт работы с Git</li>
          <li>Знание основ SQL</li>
          <li>Английский язык для чтения документации</li>
        </ul>
        
        <h3>Будет плюсом</h3>
        <ul>
          <li>Опыт работы с микросервисами</li>
          <li>Знание Docker</li>
          <li>Понимание CI/CD процессов</li>
          <li>Опыт работы с Kafka</li>
          <li>Знание паттернов проектирования</li>
        </ul>
        
        <h3>Мы предлагаем</h3>
        <ul>
          <li>Работу в крупнейшем IT-холдинге России</li>
          <li>Конкурентную зарплату</li>
          <li>Полный соцпакет</li>
          <li>Обучение и сертификации</li>
          <li>Современные технологии</li>
          <li>Карьерный рост</li>
        </ul>
      </div>
    `,
    source: "hh.ru",
    similarVacancies: [
      {
        id: 3,
        title: "Стажер Java разработчик",
        companyName: "Wanted.",
      },
      {
        id: 4,
        title: "Специалист технической поддержки (java junior)",
        companyName: "Инфомаксимум",
      },
    ],
  },
  {
    id: 6,
    active: true,
    externalId: "aston-1",
    title:
      "Тестировщик Java/QA инженер по автоматизированному тестированию Java с нуля (стажер)",
    companyName: "Aston",
    location: "Санкт-Петербург",
    datePublication: "21.03.2025",
    salary: "15 000 ₽",
    specialty: "QA/Testing",
    remote: false,
    internship: true,
    image: "/companies/aston.png",
    url: "https://example.com/vacancy/6",
    description: `
      <div>
        <h3>О позиции</h3>
        <p>Aston ищет мотивированного тестировщика Java для работы в офисе. Возможность изучать автоматизированное тестирование в команде профессионалов.</p>
        
        <h3>Требования</h3>
        <ul>
          <li>Понимание основ тестирования ПО</li>
          <li>Базовые знания Java</li>
          <li>Желание изучать автоматизацию</li>
          <li>Внимательность к деталям</li>
          <li>Готовность работать в офисе</li>
        </ul>
        
        <h3>Будет плюсом</h3>
        <ul>
          <li>Опыт написания тест-кейсов</li>
          <li>Знание Selenium</li>
          <li>Понимание Agile/Scrum</li>
          <li>Опыт работы с Jira</li>
        </ul>
        
        <h3>Мы предлагаем</h3>
        <ul>
          <li>Стажировку с трудоустройством</li>
          <li>Обучение современным методам тестирования</li>
          <li>Дружную команду</li>
          <li>Офис в центре Санкт-Петербурга</li>
          <li>Корпоративные мероприятия</li>
        </ul>
      </div>
    `,
    source: "hh.ru",
    similarVacancies: [
      {
        id: 1,
        title:
          "Тестировщик Java/QA инженер по автоматизированному тестированию Java с нуля (стажер)",
        companyName: "Bell Integrator",
      },
      {
        id: 7,
        title: "Junior Java QA engineer",
        companyName: "Button One",
      },
    ],
  },
  {
    id: 7,
    active: true,
    externalId: "button-one-1",
    title: "Junior Java QA engineer",
    companyName: "Button One",
    location: "Санкт-Петербург",
    datePublication: "21.03.2025",
    salary: "не указана",
    specialty: "QA/Testing",
    remote: true,
    internship: false,
    image: "/companies/button-one.png",
    url: "https://example.com/vacancy/7",
    description: `
      <div>
        <h3>О позиции</h3>
        <p>Button One приглашает Junior QA engineer для работы с Java-проектами. Присоединяйтесь к команде профессионалов и развивайтесь в области качества ПО.</p>
        
        <h3>Требования</h3>
        <ul>
          <li>Опыт тестирования ПО от 6 месяцев</li>
          <li>Знание Java на базовом уровне</li>
          <li>Опыт функционального тестирования</li>
          <li>Понимание жизненного цикла разработки ПО</li>
          <li>Знание основ SQL</li>
        </ul>
        
        <h3>Будет плюсом</h3>
        <ul>
          <li>Опыт автоматизированного тестирования</li>
          <li>Знание TestNG или JUnit</li>
          <li>Опыт тестирования API</li>
          <li>Знание инструментов CI/CD</li>
          <li>Опыт работы с тест-дизайном</li>
        </ul>
        
        <h3>Мы предлагаем</h3>
        <ul>
          <li>Работу в динамично развивающейся компании</li>
          <li>Интересные и сложные проекты</li>
          <li>Возможность профессионального роста</li>
          <li>Удаленную работу</li>
          <li>Конкурентную зарплату</li>
          <li>Командную работу</li>
        </ul>
      </div>
    `,
    source: "hh.ru",
    similarVacancies: [
      {
        id: 2,
        title: "Начинающий тестировщик / AQA Engineer (Java)",
        companyName: "Инфомаксимум",
      },
      {
        id: 6,
        title:
          "Тестировщик Java/QA инженер по автоматизированному тестированию Java с нуля (стажер)",
        companyName: "Aston",
      },
    ],
  },
  {
    id: 8,
    active: true,
    externalId: "button-one-2",
    title: "Junior Java QA engineer",
    companyName: "Button One",
    location: "Санкт-Петербург",
    datePublication: "21.03.2025",
    salary: "не указана",
    specialty: "QA/Testing",
    remote: true,
    internship: false,
    image: "/companies/button-one.png",
    url: "https://example.com/vacancy/8",
    description: `
      <div>
        <h3>О позиции</h3>
        <p>Button One ищет талантливого Junior QA engineer для укрепления нашей команды тестирования. Работа с современными Java-технологиями в амбициозных проектах.</p>
        
        <h3>Требования</h3>
        <ul>
          <li>Опыт в области тестирования от 1 года</li>
          <li>Знание Java и понимание ООП</li>
          <li>Опыт написания и выполнения тест-кейсов</li>
          <li>Знание основ баг-трекинга</li>
          <li>Умение работать в команде</li>
        </ul>
        
        <h3>Будет плюсом</h3>
        <ul>
          <li>Опыт работы с Selenium WebDriver</li>
          <li>Знание Rest Assured для API-тестирования</li>
          <li>Понимание паттернов Page Object</li>
          <li>Опыт работы с Jenkins</li>
          <li>Знание Allure Framework</li>
        </ul>
        
        <h3>Мы предлагаем</h3>
        <ul>
          <li>Конкурентную заработную плату</li>
          <li>Возможность работать удаленно</li>
          <li>Профессиональное развитие</li>
          <li>Участие в интересных проектах</li>
          <li>Дружный коллектив</li>
          <li>Гибкий рабочий график</li>
        </ul>
      </div>
    `,
    source: "hh.ru",
    similarVacancies: [
      {
        id: 7,
        title: "Junior Java QA engineer",
        companyName: "Button One",
      },
      {
        id: 1,
        title:
          "Тестировщик Java/QA инженер по автоматизированному тестированию Java с нуля (стажер)",
        companyName: "Bell Integrator",
      },
    ],
  },
];
