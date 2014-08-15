
LMC Методология
===============
> ***layout module component***

> Принципом методологии является максимальная модульность, независимость
> и переиспользование блоков верстки.

Структура:
---------

  - Базовый слой (base)
  - Слой разметки (layout)
  - Слой модулей (module)
  - Слой компонентов (component)
  - Слой модификаций

![](wiki/flat.png)

Base
----
  Основные правила для этого слоя:
  - сбросы стилей ( normalize, reset, etc. );
  - конфигураци, миксины, функции, переменные sass и compass
  - стили для общих элементов без классов и id ( html, body, a, ul, etc. );

![](wiki/base.png)


Layout
------
  Основные правила для этого слоя:
  - стили для общей разметки и сетки страницы ( .l-header, .l-col_12, .l-aside,
      etc. ).
  - классы начинаются с префикса ".l-";

![](wiki/layout.png)



Module
------

  Основные правила для этого слоя:
  - стили для абсолютно независимых блоков, которые могу в себе содержать другие модули, подмодули, либо компоненты;
  - классы начинаются с префикса ".m-";
  - имя модуля состоящего из более чем 1-го слова разделяются
      символом тире "-" ( .m-reg-form, .m-shopping-cart, etc. );
  - имя подмодуля составляется из имени модуля + символ нижнего подчеркивания "_" + имя подмодуля (.m-form_item)

![](wiki/module.png)


Component
---------
  Основные правила для этого слоя:
  - наименьшие целостные элементы страницы (.c-input, .c-button, .c-dropdown-menu, .c-select);
  - классы начинаются с префикса ".с-";

![](wiki/component.png)


Modification
------------
  Основные правила для этого слоя:
  - добавляет дополнительные свойства для layout, module или component
  - классы начинаются с префикса ".__";


![](wiki/all.png)




Ссылки на частоиспользуемые плагины:
------------------------------------
 - Стилизация форм [<https://github.com/Dimox/jQueryFormStyler>]
 - Кастомизация скролла [<https://github.com/inuyaksa/jquery.nicescroll>]
 - Скролл эффекты [<https://github.com/chayka/jQuery.Scroolly>]
 - Датапикер [<https://github.com/dbushell/Pikaday>]
 - Слайдер [<https://github.com/nolimits4web/Swiper>]
 - Рейтинг [<https://github.com/wbotelhos/raty>]

 
```sh

[
  {
    category: "Стилизация форм",
    listPlugins: [
      {
        title: "jQueryFormStyler",
        link: "https://github.com/Dimox/jQueryFormStyler",
        description: ""
      }
    ]
  },
  {
    category: "Кастомизация скролла",
    listPlugins: [
      {
        title: "Nicescroll",
        link: "https://github.com/inuyaksa/jquery.nicescroll",
        description: ""
      }
    ]
  },
  {
    category: "Скролл эффекты",
    listPlugins: [
      {
        title: "Scroolly",
        link: "https://github.com/chayka/jQuery.Scroolly",
        description: ""
      }
    ]
  },
  {
    category: "Датапикеры",
    listPlugins: [
      {
        title: "Pikaday",
        link: "https://github.com/dbushell/Pikaday",
        description: ""
      },
      {
        title: "Pikadate",
        link: "https://github.com/amsul/pickadate.js",
        description: "ie9+"
      }
    ]
  },
  {
    category: "Слайдеры",
    listPlugins: [
      {
        title: "Swiper",
        link: "https://github.com/nolimits4web/Swiper",
        description: ""
      }
    ]
  },
  {
    category: "Рейтинги",
    listPlugins: [
      {
        title: "Raty",
        link: "https://github.com/wbotelhos/raty",
        description: ""
      }
    ]
  }
]


```
