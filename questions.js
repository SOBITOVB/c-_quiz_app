// creating an array and passing the number, questions, options, and answers
let questions = [
    {
      numb: 1,
      question: "C++da && operatori nima uchun ishlatiladi?",
      answer: "Mantiqiy va operatori",
      options: [
        "Mantiqiy yoki operatori",
        "Arifmetik ko'paytirish operatori",
        "Arifmetik qo'shish operatori",
        "Mantiqiy va operatori"
      ]
   },
  
  {
      numb: 2,
      question: "C++da qanday qilib sonni ekranga chiqarish mumkin?",
      answer: "cout << x;",
      options: [
        "cout << x;",
        "echo x;",
        "print(x);",
        "printf(x);"
      ]
   },
  
  {
      numb: 3,
      question: "C++da 'void' turining ma'nosi nima?",
      answer: "Faqat integer qiymatini qaytaradi",
      options: [
        "Faqat integer qiymatini qaytaradi",
        "Funktsiya qiymatini qaytarmaydi",
        "O'zgaruvchi turini bildiradi",
        "Funktsiya parameterini bildiradi"
      ]
   },
  
  {
      numb: 4,
      question: "C++da 'break' operatori nima qiladi?",
      answer: "Siklni to'xtatadi",
      options: [
        "Funksiyani tugatadi",
        "Dasturdan chiqadi",
        "Siklni to'xtatadi",
        "Xatolikni chiqaradi"
      ]
   },
  
  {
      numb: 5,
      question: "C++da qaysi operator ixtiyoriy qiymatlar uchun ishlatiladi?",
      answer: "switch",
      options: [
        "if",
        "else if",
        "switch",
        "try"
      ]
   },
  
  {
      numb: 6,
      question: "C++da sizeof operatori nima qiladi?",
      answer: "O'zgaruvchining xotira o'lchamini beradi",
      options: [
        "O'zgaruvchining qiymatini chiqaradi",
        "O'zgaruvchining turini ko'rsatadi",
        "O'zgaruvchining xotira o'lchamini beradi",
        "Funksiya hosil qiladi"
      ]
   },
  
  {
      numb: 7,
      question: "C++da o'zgaruvchi e'lon qilish uchun qanday sintaksis ishlatiladi?",
      answer: "int x = 10;",
      options: [
        "int x = 10;",
        "x = int 10;",
        "var x = 10;",
        "x : int = 10;"
      ]
   },
  
  {
      numb: 8,
      question: "C++da doimiy qiymatlar uchun qanday kalit so'z ishlatiladi?",
      answer: "const",
      options: [
        "bool",
        "constant",
        "int",
        "const"
      ]
   },
  
  {
      numb: 9,
      question: "C++da qaysi kalit so'z sinf (class) yaratish uchun ishlatiladi?",
      answer: "class",
      options: [
        "object",
        "class",
        "function",
        "structure"
      ]
   },
  
  {
      numb: 10,
      question: "C++da bo'sh joylarni qanday qoldirish mumkin?",
      answer: "continue",
      options: [
        "continue",
        "break",
        "int",
        "exit"
      ]
   },
  
  {
      numb: 11,
      question: "C++da qanday qilib foydalanuvchidan ma'lumot olish mumkin?",
      answer: "*",
      options: [
        "/",
        "#*",
        "**",
        "*"
      ]
   },
  
  {
      numb: 12,
      question: "C++ dasturida qanday qilib funksiya yaratish mumkin?",
      answer: "void myFunction() {}",
      options: [
        "function myFunction() {}",
        "create function myFunction() {}",
        "void myFunction() {}",
        "def myFunction() {}"
      ]
   },
  
  {
      numb: 13,
      question: "C++ dasturlash tilida qanday ma'lumotlar turini ifodalash uchun int ishlatiladi ?",
      answer: "Butun sonlar",
      options: [
        "Mantiqiy qiymatlar",
        "Haqiqiy sonlar",
        "Butun sonlar",
        "Belgilar"
      ]
   },
  
  {
      numb: 14,
      question: "C++ dasturida for siklidan foydalanib 1 dan 10 gacha bo'lgan sonlar yig'indisini qanday hisoblash mumkin?",
      answer: "for(i=1; i<=10; i++) sum+=i;",
      options: [
        "for(i=1; i<=10; i++) sum+=i;",
        "for(i=1; i<10; i++) sum+=i;",
        "sum+=i;",
        "while(i<=10) sum+=i;"
      ]
   },
  
  {
    numb: 15,
    question: " C++da massivga qanday qilib qiymat berish mumkin?",
    answer: "arr[0] = 1; arr[1] = 2; arr[2] = 3;",
    options: [
      "arr = {1, 2, 3};",
      "arr[0] = 1; arr[1] = 2; arr[2] = 3;",
      "arr[] = {1, 2, 3};",
      "int[] arr = {1, 2, 3};"
    ]
  },
  {
    numb: 16,
    question: " C++da qaysi operatorlar mantiqiy operatorlardir?",
    answer: "&&, ||, !",
    options: [
      "&;/;+",
      "&&, ||, !",
      "+;-;/;*",
      "==;-;_"
    ]
  },
  
  {
    numb: 17,
    question: " World Wide Webni kim yaratdi? ?",
    answer: "Tik Berners-Lee",
    options: [
      "Charles Babbage",
      "Tik Berners-Lee",
      "Alan Turing",
      "Mark Zuckerberg"
    ]
  },
  {
    numb: 18,
    question: "C++ dasturlash tilida cout nima uchun ishlatiladi?",
    answer: "Ma'lumotlarni chiqarish uchun",
    options: [
      "Ma'lumotlarni kiritish uchun",
      "Ma'lumotlarni chiqarish uchun",
      "O'zgaruvchilarni aniqlash uchun",
      "Funksiya yaratish uchun"
    ]
  },
  {
    numb: 19,
    question: "C++da qanday qilib ikki sonni qo'shish mumkin?",
    answer: "sum = a + b;",
    options: [
      "sum = a - b;",
      "sum = a + b;",
      "sum = a / b;",
      "sum = a * b;"
    ]
  },
  {
    numb: 20,
    question: "C++da xotira ajratish uchun qaysi kalit so'z ishlatiladi?",
    answer: "new",
    options: [
      "new",
      "malloc",
      "alloc",
      "create"
    ]
  },
  {
    numb: 21,
    question: "C++da qanday operator ikkilik bo'linishni bajaradi??",
    answer: "/",
    options: [
      "%",
      "&",
      "/",
      "//"
    ]
  },
  {
    numb: 22,
    question: "C++da massivni qanday yaratish mumkin?",
    answer: "int arr[5];",
    options: [
      "arr[] = {1, 2, 3, 4, 5};",
      "int arr[5];",
      "array<int> arr(5);",
      "int[5] arr = {1, 2, 3, 4, 5};"
    ]
  },
  {
    numb: 23,
    question: "C++da cin nima uchun ishlatiladi?",
    answer: "Ma'lumotlarni kiritish uchun",
    options: [
      "Ma'lumotlarni chiqarish uchun",
      "O'zgaruvchilarni aniqlash uchun",
      "Funksiya yaratish uchun",
      "Ma'lumotlarni kiritish uchun"
    ]
  },
  {
    numb: 24,
    question: "C++ dasturida qaysi funksiya dastur bajarilishini boshlash uchun ishlatiladi?",
    answer: "main()",
    options: [
      "main()",
      "start()",
      "execute()",
      "init()"
    ]
  },
  {
    numb: 25,
    question: "C++da qanday operator mantiqiy yoki amali uchun ishlatiladi?",
    answer: "||",
    options: [
      "&&",
      "!",
      "||",
      "=="
    ]
  },
  {
    numb: 26,
    question: "C++da qanday qilib shartli operator ishlatiladi?",
    answer: "if",
    options: [
      "loop",
      "if",
      "while",
      "for"
    ]
  },
  {
    numb: 27,
    question: "C++da 'return' kalit so'zi nima uchun ishlatiladi?",
    answer: "Funksiya qiymatini qaytarish uchun",
    options: [
    "Funksiya qiymatini qaytarish uchun",
    "Dastur bajarilishini to'xtatish uchun",
    "O'zgaruvchilarni belgilash uchun",
    "Fayllarni ochish uchun"
    ]
    },
    
    {
    numb: 28,
    question: "C++da qanday qilib 'for' siklidan foydalaniladi?",
    answer: "Barchasi to'g'ri",
    options: [
    "for(i=1; i<=10; i++)",
    "for(i=0; i<10; i++)",
    "for(i=0; i<=10; i++)",
    "Barchasi to'g'ri"
    ]
    },
    
    {
    numb: 29,
    question: "C++da xatoliklarni aniqlash uchun qaysi funksiyalar ishlatiladi?",
    answer: "assert()",
    options: [
    "error()",
    "assert()",
    "debug()",
    "check()"
    ]
    },
    
    {
    numb: 30,
    question: "C++da o'zgaruvchilarni qaysi tipda saqlash mumkin?",
    answer: "int",
    options: [
    "int",
    "for",
    "while",
    "meanwhile"
    ]
    },
    
    // {
    // numb: 31,
    // question: "Which river is the longest in the world?",
    // answer: "Nile",
    // options: [
    // "Amazon",
    // "Nile",
    // "Yangtze",
    // "Mississippi"
    // ]
    // }
  ];