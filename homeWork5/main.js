/* ============================================== */
console.log('==============================================');
console.log(`-  Створити функцію конструктор для об'єкту який описує теги \n Властивості \n -назва тегу \n - опис його дій \n - масив з атрибутами (2-3 атрибути максимум) \n Кожен атрибут описати як окремий який буде містити \n -назву атрибуту \n -опис дії атрибуту \n  інформацію брати з htmlbook.ru`);
console.log('Таким чином описати теги \n - a \n - div \n - h1 \n - span \n - input \n - form \n - option \n - select');
console.log(`Приклад результату { \n titleOfTag: 'area',\n action: 'Каждый элемент <area> определяет активные области изображения, которые являются ссылками...',\n attrs: [\n { titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш' },\n { /*some props and values*/ },\n { /*...*/ },\n { /*...*/ },\n]\n}`);
console.log('==============================================');

function Tag(titleOfTag, descriptionOfTag, attributes) {
    this.titleOfTag = titleOfTag;
    this.descriptionOfTag = descriptionOfTag;
    this.attributes = attributes;
}

let aTag = new Tag(
    '<a>',
    'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы. Для создания ссылки необходимо сообщить браузеру, что является ссылкой, а также указать адрес документа, на который следует сделать ссылку. В качестве значения атрибута href используется адрес документа (URL, Universal Resource Locator, универсальный указатель ресурсов), на который происходит переход. Адрес ссылки может быть абсолютным и относительным. Абсолютные адреса работают везде и всюду независимо от имени сайта или веб-страницы, где прописана ссылка. Относительные ссылки, как следует из их названия, построены относительно текущего документа или корня сайта.', [
        { titleAttributes: 'accesskey', descriptionAttributes: 'Активация ссылки с помощью комбинации клавиш.' },
        { titleAttributes: 'coords', descriptionAttributes: 'Устанавливает координаты активной области.' },
        { titleAttributes: 'download', descriptionAttributes: 'Предлагает скачать указанный по ссылке файл.' },
        { titleAttributes: 'href', descriptionAttributes: 'Задает адрес документа, на который следует перейти.' },
        { titleAttributes: 'hreflang', descriptionAttributes: 'Идентифицирует язык текста по ссылке.' },
        { titleAttributes: 'name', descriptionAttributes: 'Устанавливает имя якоря внутри документа.' },
        { titleAttributes: 'rel', descriptionAttributes: 'Отношения между ссылаемым и текущим документами.' },
        { titleAttributes: 'rev', descriptionAttributes: 'Отношения между текущим и ссылаемым документами.' },
        { titleAttributes: 'shape', descriptionAttributes: 'Задает форму активной области ссылки для изображений.' },
        { titleAttributes: 'tabindex', descriptionAttributes: 'Определяет последовательность перехода между ссылками при нажатии на кнопку.' },
        { titleAttributes: 'target', descriptionAttributes: 'Имя окна или фрейма, куда браузер будет загружать документ.' },
        { titleAttributes: 'title', descriptionAttributes: 'Добавляет всплывающую подсказку к тексту ссылки.' },
        { titleAttributes: 'type', descriptionAttributes: 'Указывает MIME-тип документа, на который ведёт ссылка.' }
    ]
);
console.log(aTag);

let divTag = new Tag(
    '<div>',
    'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора. Как и при использовании других блочных элементов, содержимое тега <div> всегда начинается с новой строки. После него также добавляется перенос строки.', [
        { titleAttributes: 'align', descriptionAttributes: 'Задает выравнивание содержимого тега <div>.' },
        { titleAttributes: 'title', descriptionAttributes: 'Добавляет всплывающую подсказку к содержимому.' }
    ]
);
console.log(divTag);

let h1Tag = new Tag(
    '<h1>',
    'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.', [
        { titleAttributes: 'align', descriptionAttributes: 'Определяет выравнивание заголовка.' }
    ]
);
console.log(h1Tag);

let spanTag = new Tag(
    '<span>',
    'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.'
);
console.log(spanTag);

let inputTag = new Tag(
    '<input>',
    'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь контейнера <form>, ...', [
        { titleAttributes: 'accept', descriptionAttributes: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.' },
        { titleAttributes: 'accesskey', descriptionAttributes: 'Переход к элементу с помощью комбинации клавиш.' },
        { titleAttributes: 'align', descriptionAttributes: 'Определяет выравнивание изображения.' },
        { titleAttributes: 'alt', descriptionAttributes: 'Альтернативный текст для кнопки с изображением.' },
        { titleAttributes: 'autocomplete', descriptionAttributes: 'Включает или отключает автозаполнение.' },
        { titleAttributes: 'autofocus', descriptionAttributes: 'Устанавливает фокус в поле формы.' },
        { titleAttributes: 'border', descriptionAttributes: 'Толщина рамки вокруг изображения.' },
        { titleAttributes: 'checked', descriptionAttributes: 'Предварительно активированный переключатель или флажок.' },
        { titleAttributes: 'disabled', descriptionAttributes: 'Блокирует доступ и изменение элемента.' },
        { titleAttributes: 'form', descriptionAttributes: 'Связывает поле с формой по её идентификатору.' }
    ]
);
console.log(inputTag);

let formTag = new Tag(
    '<form>',
    'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.', [
        { titleAttributes: 'accept-charset', descriptionAttributes: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.' },
        { titleAttributes: 'action', descriptionAttributes: 'Адрес программы или документа, который обрабатывает данные формы.' },
        { titleAttributes: 'autocomplete', descriptionAttributes: 'Включает автозаполнение полей формы.' },
        { titleAttributes: 'enctype', descriptionAttributes: 'Способ кодирования данных формы.' },
        { titleAttributes: 'method', descriptionAttributes: 'Метод протокола HTTP.' },
        { titleAttributes: 'name', descriptionAttributes: 'Имя формы.' },
        { titleAttributes: 'novalidate', descriptionAttributes: 'Отменяет встроенную проверку данных формы на корректность ввода.' },
        { titleAttributes: 'target', descriptionAttributes: 'Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.' }
    ]
);
console.log(formTag);

let optionTag = new Tag(
    '<option>',
    'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.', [
        { titleAttributes: 'disabled', descriptionAttributes: 'Заблокировать для доступа элемент списка.' },
        { titleAttributes: 'label', descriptionAttributes: 'Указание метки пункта списка.' },
        { titleAttributes: 'selected', descriptionAttributes: 'Заранее устанавливает определенный пункт списка выделенным.' },
        { titleAttributes: 'value', descriptionAttributes: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.' },
    ]
);
console.log(optionTag);

let selectTag = new Tag(
    '<select>',
    'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.', [
        { titleAttributes: 'accesskey', descriptionAttributes: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.' },
        { titleAttributes: 'autofocus', descriptionAttributes: 'Устанавливает, что список получает фокус после загрузки страницы.' },
        { titleAttributes: 'disabled', descriptionAttributes: 'Блокирует доступ и изменение элемента.' },
        { titleAttributes: 'form', descriptionAttributes: 'Связывает список с формой.' },
        { titleAttributes: 'multiple', descriptionAttributes: 'Позволяет одновременно выбирать сразу несколько элементов списка.' },
        { titleAttributes: 'name', descriptionAttributes: 'Имя элемента для отправки на сервер или обращения через скрипты.' },
        { titleAttributes: 'required', descriptionAttributes: 'Список обязателен для выбора перед отправкой формы.' },
        { titleAttributes: 'size', descriptionAttributes: 'Количество отображаемых строк списка.' },
        { titleAttributes: 'tabindex', descriptionAttributes: 'Определяет последовательность перехода между элементами при нажатии на клавишу' }
    ]
);
console.log(selectTag);
/* ============================================== */
console.log('==============================================');
console.log(`-  Створити класс  для об'єкту який описує теги\nВластивості\n -назва тегу\n - опис його дій\n - масив з атрибутами (2-3 атрибути максимум)\n Кожен атрибут описати як окремий який буде містити\n -назву атрибуту\n -опис дії атрибуту\n інформацію брати з htmlbook.ru`);
console.log('Таким чином описати теги\n-a\n-div\n-h1\n-span\n-input\n-form\n-option\n-select');
console.log(` Приклад результату\n{\n titleOfTag: 'area',\n action: 'Каждый элемент <area> определяет активные области изображения, которые являются ссылками...',\n attrs: [\n{titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},\n {/*some props and values*/},\n {/*...*/},\n {/*...*/},\n ]\n}`);
console.log('==============================================');
class TagTask2 {
    constructor(titleOfTag, descriptionOfTag, attributes) {
        this.titleOfTag = titleOfTag;
        this.descriptionOfTag = descriptionOfTag;
        this.attributes = attributes;
    }
}

let aClass = new TagTask2(
    '<a>',
    'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы. Для создания ссылки необходимо сообщить браузеру, что является ссылкой, а также указать адрес документа, на который следует сделать ссылку. В качестве значения атрибута href используется адрес документа (URL, Universal Resource Locator, универсальный указатель ресурсов), на который происходит переход. Адрес ссылки может быть абсолютным и относительным. Абсолютные адреса работают везде и всюду независимо от имени сайта или веб-страницы, где прописана ссылка. Относительные ссылки, как следует из их названия, построены относительно текущего документа или корня сайта.', [
        { titleAttributes: 'accesskey', descriptionAttributes: 'Активация ссылки с помощью комбинации клавиш.' },
        { titleAttributes: 'coords', descriptionAttributes: 'Устанавливает координаты активной области.' },
        { titleAttributes: 'download', descriptionAttributes: 'Предлагает скачать указанный по ссылке файл.' },
        { titleAttributes: 'href', descriptionAttributes: 'Задает адрес документа, на который следует перейти.' },
        { titleAttributes: 'hreflang', descriptionAttributes: 'Идентифицирует язык текста по ссылке.' },
        { titleAttributes: 'name', descriptionAttributes: 'Устанавливает имя якоря внутри документа.' },
        { titleAttributes: 'rel', descriptionAttributes: 'Отношения между ссылаемым и текущим документами.' },
        { titleAttributes: 'rev', descriptionAttributes: 'Отношения между текущим и ссылаемым документами.' },
        { titleAttributes: 'shape', descriptionAttributes: 'Задает форму активной области ссылки для изображений.' },
        { titleAttributes: 'tabindex', descriptionAttributes: 'Определяет последовательность перехода между ссылками при нажатии на кнопку.' },
        { titleAttributes: 'target', descriptionAttributes: 'Имя окна или фрейма, куда браузер будет загружать документ.' },
        { titleAttributes: 'title', descriptionAttributes: 'Добавляет всплывающую подсказку к тексту ссылки.' },
        { titleAttributes: 'type', descriptionAttributes: 'Указывает MIME-тип документа, на который ведёт ссылка.' }
    ]
);
console.log(aClass.titleOfTag, aClass.descriptionOfTag, aClass.attributes);

let divClass = new TagTask2(
    '<div>',
    'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора. Как и при использовании других блочных элементов, содержимое тега <div> всегда начинается с новой строки. После него также добавляется перенос строки.', [
        { titleAttributes: 'align', descriptionAttributes: 'Задает выравнивание содержимого тега <div>.' },
        { titleAttributes: 'title', descriptionAttributes: 'Добавляет всплывающую подсказку к содержимому.' }
    ]
);
console.log(divClass.titleOfTag, divClass.descriptionOfTag, divClass.attributes);

let h1Class = new TagTask2(
    '<h1>',
    'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.', [
        { titleAttributes: 'align', descriptionAttributes: 'Определяет выравнивание заголовка.' }
    ]
);
console.log(h1Class.titleOfTag, h1Class.descriptionOfTag, h1Class.attributes);

let spanClass = new TagTask2(
    '<span>',
    'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.'

);
console.log(spanClass.titleOfTag, spanClass.descriptionOfTag, spanClass.attributes);

let inputClass = new TagTask2(
    '<input>',
    'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь контейнера <form>, ...', [
        { titleAttributes: 'accept', descriptionAttributes: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.' },
        { titleAttributes: 'accesskey', descriptionAttributes: 'Переход к элементу с помощью комбинации клавиш.' },
        { titleAttributes: 'align', descriptionAttributes: 'Определяет выравнивание изображения.' },
        { titleAttributes: 'alt', descriptionAttributes: 'Альтернативный текст для кнопки с изображением.' },
        { titleAttributes: 'autocomplete', descriptionAttributes: 'Включает или отключает автозаполнение.' },
        { titleAttributes: 'autofocus', descriptionAttributes: 'Устанавливает фокус в поле формы.' },
        { titleAttributes: 'border', descriptionAttributes: 'Толщина рамки вокруг изображения.' },
        { titleAttributes: 'checked', descriptionAttributes: 'Предварительно активированный переключатель или флажок.' },
        { titleAttributes: 'disabled', descriptionAttributes: 'Блокирует доступ и изменение элемента.' },
        { titleAttributes: 'form', descriptionAttributes: 'Связывает поле с формой по её идентификатору.' }
    ]
);
console.log(inputClass.titleOfTag, inputClass.descriptionOfTag, inputClass.attributes);

let formClass = new TagTask2(
    '<form>',
    'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.', [
        { titleAttributes: 'accept-charset', descriptionAttributes: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.' },
        { titleAttributes: 'action', descriptionAttributes: 'Адрес программы или документа, который обрабатывает данные формы.' },
        { titleAttributes: 'autocomplete', descriptionAttributes: 'Включает автозаполнение полей формы.' },
        { titleAttributes: 'enctype', descriptionAttributes: 'Способ кодирования данных формы.' },
        { titleAttributes: 'method', descriptionAttributes: 'Метод протокола HTTP.' },
        { titleAttributes: 'name', descriptionAttributes: 'Имя формы.' },
        { titleAttributes: 'novalidate', descriptionAttributes: 'Отменяет встроенную проверку данных формы на корректность ввода.' },
        { titleAttributes: 'target', descriptionAttributes: 'Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.' }
    ]
);
console.log(formClass.titleOfTag, formClass.descriptionOfTag, formClass.attributes);

let optionClass = new TagTask2(
    '<option>',
    'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.', [
        { titleAttributes: 'disabled', descriptionAttributes: 'Заблокировать для доступа элемент списка.' },
        { titleAttributes: 'label', descriptionAttributes: 'Указание метки пункта списка.' },
        { titleAttributes: 'selected', descriptionAttributes: 'Заранее устанавливает определенный пункт списка выделенным.' },
        { titleAttributes: 'value', descriptionAttributes: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.' },
    ]
);
console.log(optionClass.titleOfTag, optionClass.descriptionOfTag, optionClass.attributes);

let selectClass = new TagTask2(
    '<select>',
    'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.', [
        { titleAttributes: 'accesskey', descriptionAttributes: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.' },
        { titleAttributes: 'autofocus', descriptionAttributes: 'Устанавливает, что список получает фокус после загрузки страницы.' },
        { titleAttributes: 'disabled', descriptionAttributes: 'Блокирует доступ и изменение элемента.' },
        { titleAttributes: 'form', descriptionAttributes: 'Связывает список с формой.' },
        { titleAttributes: 'multiple', descriptionAttributes: 'Позволяет одновременно выбирать сразу несколько элементов списка.' },
        { titleAttributes: 'name', descriptionAttributes: 'Имя элемента для отправки на сервер или обращения через скрипты.' },
        { titleAttributes: 'required', descriptionAttributes: 'Список обязателен для выбора перед отправкой формы.' },
        { titleAttributes: 'size', descriptionAttributes: 'Количество отображаемых строк списка.' },
        { titleAttributes: 'tabindex', descriptionAttributes: 'Определяет последовательность перехода между элементами при нажатии на клавишу' }
    ]
);
console.log(selectClass.titleOfTag, selectClass.descriptionOfTag, selectClass.attributes);

/* ============================================== */
console.log('==============================================');
console.log(`- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:`);
console.log('-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"');
console.log('-- info () - яка виводить всю інформацію про автомобіль');
console.log('-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed');
console.log('-- changeYear (newValue) - змінює рік випуску на значення newValue');
console.log(`-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об 'єкт car`);
console.log('==============================================');
let car = {
    model: 'S',
    manufacturer: 'Tesla',
    yearOfIssue: 2020,
    maxSpeed: 300,
    engineCapacity: 0
}
let dimaDriver = {
    name: 'Dima',
    experience: 12
}

console.log(car);
car.drive = function() { console.log(`Їдемо зі швидкістю ${car.maxSpeed} на годину!`); }
car.info = function() { console.log(`модель: ${car.model};\nвиробник: ${car.manufacturer};\nрік випуску: ${car.yearOfIssue};\nмаксимальна швидкість: ${car.maxSpeed};\nоб'єм двигуна: ${car.engineCapacity};`); }
car.increaseMaxSpeed = function(newSpeed) { car.maxSpeed = newSpeed; }
car.changeYear = function(newValue) { car.yearOfIssue = newValue; }
car.addDriver = function(driver) {
    car.driver = driver;
}

//второй вариант записи;
let carSecond = {
    model: 'S',
    manufacturer: 'Tesla',
    yearOfIssue: 2020,
    maxSpeed: 300,
    engineCapacity: 0,
    drive() { console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину!`); },
    info() { console.log(`модель: ${this.model};\nвиробник: ${this.manufacturer};\nрік випуску: ${this.yearOfIssue};\nмаксимальна швидкість: ${this.maxSpeed};\nоб'єм двигуна: ${this.engineCapacity};`); },
    increaseMaxSpeed(newSpeed) { this.maxSpeed = newSpeed; },
    addDriver(driver) { this.driver = driver; }
}


car.drive();
car.info();
car.increaseMaxSpeed(150);
car.changeYear(2015);
car.addDriver(dimaDriver);
console.log(car);
/* ============================================== */
console.log('==============================================');
console.log(`- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:`);
console.log('-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"');
console.log('-- info () - яка виводить всю інформацію про автомобіль');
console.log('-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed');
console.log('-- changeYear (newValue) - змінює рік випуску на значення newValue');
console.log(`-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об 'єкт car`);
console.log('==============================================');

function СarTask2(model, manufacturer, yearOfIssue, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearOfIssue = yearOfIssue;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = function() {
        return console.log(`Їдемо зі швидкістю ${maxSpeed} на годину!`);
    }

    this.info = function() {
        return console.log(`модель: ${model};\nвиробник: ${manufacturer};\nрік випуску: ${yearOfIssue};\nмаксимальна швидкість: ${maxSpeed};\nоб'єм двигуна: ${engineCapacity};`);
    }

    this.increaseMaxSpeed = function(newSpeed) {
        return maxSpeed = newSpeed;
    }

    this.changeYear = function(newValue) {
        return yearOfIssue = newValue;
    }

    this.addDriver = function(driver) {
        return driver;
    }
}

let carTask2 = new СarTask2('X3', 'BMW', 2015, 250, 2.5);
carTask2.drive();
carTask2.info();
carTask2.increaseMaxSpeed(100);
carTask2.changeYear(2018);
carTask2.addDriver(dimaDriver);
console.log(carTask2);
/* ============================================== */
console.log('==============================================');
console.log(`- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:`);
console.log('-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"');
console.log('-- info () - яка виводить всю інформацію про автомобіль');
console.log('-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed');
console.log('-- changeYear (newValue) - змінює рік випуску на значення newValue');
console.log(`-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car`);
console.log('==============================================');

class Car {
    constructor(model, manufacturer, yearOfIssue, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfIssue = yearOfIssue;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }
    drive() {
        return console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину!`);
    }
    info() {
        return console.log(`модель: ${this.model};\nвиробник: ${this.manufacturer};\nрік випуску: ${this.yearOfIssue};\nмаксимальна швидкість: ${this.maxSpeed};\nоб'єм двигуна: ${this.engineCapacity};`);
    }
    increaseMaxSpeed(newSpeed) {
        return this.maxSpeed = newSpeed;
    }
    changeYear(newValue) {
        return this.yearOfIssue = newValue;
    }
    addDriver(driver) {
        return driver;
    }
}

let carTask3 = new Car('Mercedes', 'E920', 2012, 250, 2.0);
carTask3.drive();
carTask3.info();
carTask3.increaseMaxSpeed(100);
carTask3.changeYear(2018);
carTask3.addDriver(dimaDriver);
console.log(carTask3);
/* ============================================== */
console.log('==============================================');
console.log(`-створити класс попелюшка з полями ім'я, вік, розмір ноги`);
console.log('--Створити 10 попелюшок , покласти їх в масив');
console.log(`--Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.`);
console.log('-- за допоиоги циклу знайти яка попелюшка повинна бути з принцом');
console.log('==============================================');
class Cinderela {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }

}

let cin1 = new Cinderela('1', 16, 34);
let cin2 = new Cinderela('2', 17, 35);
let cin3 = new Cinderela('3', 18, 36);
let cin4 = new Cinderela('4', 19, 37);
let cin5 = new Cinderela('5', 20, 38);
let cin6 = new Cinderela('6', 21, 39);
let cin7 = new Cinderela('7', 22, 40);
let cin8 = new Cinderela('8', 23, 34.5);
let cin9 = new Cinderela('9', 24, 35.5);
let cin10 = new Cinderela('10', 25, 36.5);

let arrCinderels = [cin1, cin2, cin3, cin4, cin5, cin6, cin7, cin8, cin9, cin10];

console.log(arrCinderels);

class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let artur = new Prince('Artur', 18, 36);
console.log(artur);

for (const cin of arrCinderels) {
    if (cin.footSize === artur.shoeSize) {
        console.log('Принц ' + artur.name + ' знайшов туфельку попелюшки під імям ' + cin.name);
    }
}
/* ============================================== */
console.log('==============================================');
console.log(`-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги`);
console.log('--Створити 10 попелюшок , покласти їх в масив');
console.log(`--Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"`);
console.log('-- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить');
console.log('==============================================');

function CinderelaFunCon(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let cind1 = new CinderelaFunCon('1', 16, 34);
let cind2 = new CinderelaFunCon('2', 17, 35);
let cind3 = new CinderelaFunCon('3', 18, 36);
let cind4 = new CinderelaFunCon('4', 19, 37);
let cind5 = new CinderelaFunCon('5', 20, 38);
let cind6 = new CinderelaFunCon('6', 21, 39);
let cind7 = new CinderelaFunCon('7', 22, 40);
let cind8 = new CinderelaFunCon('8', 23, 34.5);
let cind9 = new CinderelaFunCon('9', 24, 35.5);
let cind10 = new CinderelaFunCon('10', 25, 36.5);

arrCinderels = [cind1, cind2, cind3, cind4, cind5, cind6, cind7, cind8, cind9, cind10];
console.log(arrCinderels);

function PrinceFunCon(name, age, shoeSize) {
    this.name = name;
    this.age = age;
    this.shoeSize = shoeSize;
}

artur = new PrinceFunCon('Artur', 18, 36);
console.log(artur);

function serchSinderela(arrCinderela) {
    for (const iterator of arrCinderela) {
        if (iterator.footSize === artur.shoeSize) {
            return console.log('Принц ' + artur.name + ' знайшов туфельку попелюшки під імям ' + iterator.name)
        }
    }
}
serchSinderela(arrCinderels);
/* ============================================== */