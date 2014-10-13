
LMM Методология
===============
> ***layout module modificator***

> Принципом методологии является максимальная модульность, независимость
> и переиспользование блоков верстки.

 - [Методология] (#structure)
 - [Javascript Plugins] (#plugins)
 - [Sublime text] (#sublime)

Structure
---------

  - Базовый слой (base)
  - Слой разметки (layout)
  - Слой модулей (module)
  - Модификации

![](https://dl.dropboxusercontent.com/u/80313909/github/flat.png)

Base
----
  Основные правила для этого слоя:
  - сбросы стилей ( normalize, reset, etc. );
  - конфигураци, миксины, функции, переменные sass и compass
  - стили для общих элементов без классов и id ( html, body, a, ul, etc. );

![](https://dl.dropboxusercontent.com/u/80313909/github/base.png)


Layout
------
  Основные правила для этого слоя:
  - стили для общей разметки и сетки страницы ( .l-header, .l-col_12, .l-aside,
      etc. ).
  - классы начинаются с префикса ".l-";

![](https://dl.dropboxusercontent.com/u/80313909/github/layout.png)



Module
------

  Основные правила для этого слоя:
  - стили для абсолютно независимых блоков, которые могу в себе содержать другие модули и подмодули;
  - классы начинаются с префикса ".m-";
  - имя модуля состоящего из более чем 1-го слова разделяются
      символом тире "-" ( .m-reg-form, .m-shopping-cart, etc. );

![](https://dl.dropboxusercontent.com/u/80313909/github/module.png)


Sub-module
---------

  - имя подмодуля составляется из имени модуля + символ нижнего подчеркивания "_" + имя подмодуля (.m-form_item)

![](https://dl.dropboxusercontent.com/u/80313909/github/component.png)


Modification
------------

  - добавляет дополнительные свойства для общих элементов layout и module
  - классы начинаются с префикса ".__";


![](https://dl.dropboxusercontent.com/u/80313909/github/all.png)




Plugins
========

```sh

[
  {
    category: "Загрузка ресурсов",
    listPlugins: [
      {
        title: "Head.js",
        link: "https://github.com/headjs/headjs",
        description: ""
      }
    ]
  },
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
        title: "Baron",
        link: "https://github.com/Diokuz/baron",
        description: ""
      },
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
Sublime
========

Sublime packages
----------------

```sh

[
  {
    title: "Emmet",
    link: "https://github.com/sergeche/emmet-sublime",
    description: "Ускорение работы с HTML и CSS"
  },
  {
    title: "BracketHighlighter",
    link: "https://github.com/facelessuser/BracketHighlighter",
    description: "Подсветка скобок и тэгов"
  },
  {
    title: "AutoFileName",
    link: "https://github.com/BoundInCode/AutoFileName",
    description: "Автокомплит для путей и файлов"
  },
  {
    title: "Nettuts-Fetch",
    link: "https://github.com/weslly/Nettuts-Fetch",
    description: "Скачивание файлов с удаленного репозитория"
  },
  {
    title: "SideBarEnhancements",
    link: "https://github.com/titoBouzout/SideBarEnhancements",
    description: "Расширяет функционал боковой панели"
  },
  {
    title: "SublimeGit",
    link: "https://sublimegit.net",
    description: "Интеграция гита в sublime"
  },
  {
    title: "theme-spacegray",
    link: "https://github.com/kkga/spacegray",
    description: "Тема для sublime text"
  },
  {
    title: "LiveStyle",
    link: "http://livestyle.emmet.io",
    description: "Двунаправленное редактирование css"
  },
  {
    title: "SCSS",
    link: "https://github.com/MarioRicalde/SCSS.tmbundle",
    description: "Подсветка синтаксиса SCSS и автокомплит"
  },
  {
    title: "GitGutter",
    link: "https://github.com/jisaacks/GitGutter",
    description: "Показывает изменения в сравнении с закомиченной версией"
  }
]

```

Sublime snippets
----------------

**Placehold.it**

```sh
<snippet>
  <content><![CDATA[
http://placehold.it/${1:300}x${2:300}
]]></content>
  <tabTrigger>ph</tabTrigger>
  <scope>text.html</scope>
</snippet>
```

**Lorempixel**

```sh
<snippet>
  <content><![CDATA[
http://lorempixel.com/${1:300}/${2:300}/${3}
]]></content>
  <tabTrigger>lp</tabTrigger>
  <scope>text.html</scope>
</snippet>
```

**Comments**

```sh
<snippet>
  <content><![CDATA[
<!-- BEGIN $1  -->
  $2
<!-- END $1 -->
]]></content>
  <tabTrigger>co</tabTrigger>
  <scope>text.html</scope>
</snippet>
```

**Comments with div**

```sh
<snippet>
	<content><![CDATA[
<!-- BEGIN $1  -->
<${2:div} class="$1">
	$3
</${2:div} >
<!-- END $1 -->
]]></content>
	<tabTrigger>di</tabTrigger>
	<scope>text.html</scope>
</snippet>
```

**Javascript comments**

```sh
<snippet>
  <content><![CDATA[
// ==============================
// ${1}
// ==============================
]]></content>
  <tabTrigger>//</tabTrigger>
  <scope>source.js</scope>
</snippet>
```

**Function**

```sh
<snippet>
  <content><![CDATA[
function(${1}) {
  ${2}
}
]]></content>
  <tabTrigger>></tabTrigger>
  <scope>source.js</scope>
</snippet>
```


Sublime config
----------------
```sh
{
	"draw_white_space": "all",
	"translate_tabs_to_spaces": true,
	"tab_size": 2,
	"ignored_packages":[],
	"theme": "Spacegray.sublime-theme"
}

```
