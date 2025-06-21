import { Question } from "../questions";

export const questions: Question[] = [
  {
    id: 1,
    question: "В чем разница передачи параметров по ссылке и значению?",
    stack: "Java",
    position: "Junior",
    freq: 1490,
    answer: `<p>В Java есть важное различие между передачей параметров:</p>
<ul>
<li><strong>По значению</strong> - передается копия значения примитивных типов (int, double, boolean и т.д.)</li>
<li><strong>По ссылке</strong> - для объектов передается ссылка на объект в памяти, но сама ссылка передается по значению</li>
</ul>
<p>Важно понимать, что в Java всегда происходит передача по значению, но для объектов это значение является ссылкой.</p>`,
    tags: "основы java параметры ссылки",
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
  },
];
