import { Question } from "../questions";

const answer = `
<p>
  В Java все аргументы метода передаются по значению, то есть копируется
  значение переменной (даже если она ссылочного типа). Однако у ссылочных
  переменных копируется лишь значение ссылки, а не объекта, на который она
  ссылается. Поэтому, если произойдет изменение состояния объекта, на который
  ссылается переданная ссылка, то эти изменения будут отражены на объекте, на
  который ссылается исходная переменная.
</p>
<p>
  Таким образом, то, что большинство людей называют "передачей по ссылке", на
  самом деле называется "передачей значения ссылки".
</p>
<h2>Пример</h2>
<pre>
  <code>
    <span class="keyword">public class</span> <span class="name">Test</span> {
      <span class="keyword">public static void</span> <span class="name">main</span>(String[] args) {
          <span class="highlight">StringBuffer str</span> = <span class="keyword">new</span> <span class="name">StringBuffer</span>(<span class="var">"hello"</span>);
          change(str);
          System.out.println(str);
      }
  
      <span class="keyword">public static void</span> <span class="name">change</span>(StringBuffer newStr) {
          newStr.append(<span class="var">" world"</span>);
      }
  }
  </code>
</pre>

<h2>Дополнительный пример, который отражает js</h2>
<pre>
  <code>
    "use strict";

document.addEventListener("DOMContentLoaded", function () {
  if (window.restaraunts && window.restaraunts.length > 0) {
    <span class="comment">// Дожидаемся загрузки API Яндекс.Карт</span>
    if (typeof ymaps === "undefined") {
      let script = document.createElement("script");
      script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      ymaps.ready(initMap);
    }
  }
});
  </code>
</pre>
`;

export const questionsMock: Question[] = [
  {
    id: 1,
    question: "В чем разница передачи параметров по ссылке и значению?",
    stack: "Java",
    position: "Junior",
    freq: 1490,
    answer,
    tags: "основы java параметры ссылки",
    next: "2",
  },
  {
    id: 2,
    question:
      "Какие знаете шаблоны проектирования? Расскажите о двух шаблонах, используемых в работе.",
    stack: "Java",
    position: "Middle",
    freq: 1050,
    answer: `<p>Основные шаблоны проектирования:</p>
<h3>Singleton (Одиночка)</h3>
<p>Гарантирует существование только одного экземпляра класса:</p>
<pre><code>public class Singleton {
    private static Singleton instance;
    private Singleton() {}
    
    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}</code></pre>
<h3>Factory Method (Фабричный метод)</h3>
<p>Создает объекты без указания точных классов:</p>
<pre><code>interface Product { void use(); }
class ConcreteProduct implements Product {
    public void use() { /* реализация */ }
}</code></pre>`,
    tags: "паттерны проектирование архитектура",
    next: "2",
  },
  {
    id: 3,
    question:
      "Какие типы данных в Java? Чем отличается объект от простых типов данных?",
    stack: "Java",
    position: "Junior",
    freq: 920,
    answer: `<p>В Java существует два основных типа данных:</p>
<h3>Примитивные типы:</h3>
<ul>
<li><code>byte</code>, <code>short</code>, <code>int</code>, <code>long</code> - целые числа</li>
<li><code>float</code>, <code>double</code> - числа с плавающей точкой</li>
<li><code>boolean</code> - логический тип</li>
<li><code>char</code> - символ</li>
</ul>
<h3>Ссылочные типы (объекты):</h3>
<p>Все остальные типы данных, включая массивы, строки, пользовательские классы.</p>
<p><strong>Различия:</strong></p>
<ul>
<li>Примитивы хранятся в стеке, объекты - в куче</li>
<li>Примитивы передаются по значению, объекты - по ссылке</li>
<li>Примитивы не могут быть null</li>
</ul>`,
    tags: "типы данных примитивы объекты",
    next: "2",
  },
  {
    id: 4,
    question: "Что такое JVM, JDK, JRE?",
    stack: "Java",
    position: "Junior",
    freq: 506,
    answer: `<div>
<h3>JVM (Java Virtual Machine)</h3>
<p>Виртуальная машина Java - исполняет байт-код Java программ. Обеспечивает платформонезависимость.</p>

<h3>JRE (Java Runtime Environment)</h3>
<p>Среда выполнения Java, включает JVM + стандартные библиотеки. Необходима для запуска Java приложений.</p>

<h3>JDK (Java Development Kit)</h3>
<p>Комплект разработчика Java, включает JRE + компилятор javac + отладчик + другие инструменты разработки.</p>

<p><strong>Связь:</strong> JDK включает JRE, JRE включает JVM</p>
</div>`,
    tags: "jvm jdk jre основы java",
    next: "2",
  },
  {
    id: 5,
    question: "Зачем используют JVM?",
    stack: "Java",
    position: "Junior",
    freq: 429,
    answer: `<p>JVM используется для:</p>
<ol>
<li><strong>Платформонезависимость</strong> - "Write once, run anywhere"</li>
<li><strong>Управление памятью</strong> - автоматическая сборка мусора</li>
<li><strong>Безопасность</strong> - контроль доступа к системным ресурсам</li>
<li><strong>Оптимизация</strong> - JIT-компиляция для повышения производительности</li>
<li><strong>Многопоточность</strong> - встроенная поддержка потоков</li>
</ol>
<p>JVM абстрагирует Java код от операционной системы и предоставляет единую среду выполнения.</p>`,
    tags: "jvm назначение преимущества",
    next: "2",
  },
  {
    id: 6,
    question: "Что такое bytecode?",
    stack: "Java",
    position: "Junior",
    freq: 292,
    answer: `<p><strong>Bytecode</strong> - это промежуточный код, в который компилируется Java код.</p>
<h4>Особенности:</h4>
<ul>
<li>Платформонезависимый формат</li>
<li>Хранится в .class файлах</li>
<li>Интерпретируется или компилируется JVM</li>
<li>Можно просмотреть командой <code>javap -c ClassName</code></li>
</ul>
<p><strong>Процесс:</strong></p>
<p><code>.java</code> → <em>javac</em> → <code>.class</code> (bytecode) → <em>JVM</em> → машинный код</p>
<p>Bytecode обеспечивает портируемость Java программ между различными платформами.</p>`,
    tags: "bytecode компиляция jvm",
    next: "2",
  },
  {
    id: 7,
    question: "Какие признаки JavaBean?",
    stack: "Java",
    position: "Middle",
    freq: 94,
    answer: `<p>JavaBean - это Java класс, который соответствует определенным соглашениям:</p>
<h3>Основные требования:</h3>
<ol>
<li><strong>Публичный конструктор без параметров</strong></li>  
<li><strong>Приватные поля</strong> с публичными getter/setter методами</li>
<li><strong>Сериализуемость</strong> (implements Serializable)</li>
</ol>
<h4>Пример:</h4>
<pre><code>public class PersonBean implements Serializable {
    private String name;
    private int age;
    
    public PersonBean() {} // конструктор по умолчанию
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }
}</code></pre>
<p>JavaBeans используются в JSP, фреймворках и для создания компонентов.</p>`,
    tags: "javabean конвенции getter setter",
    next: "2",
  },
];
