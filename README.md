# Plugin: active-item-menu
## Плагин выделяет актуальный пункт меню при прокрутке
### Подключение плагина
	1. Подключаем файл activeItemMenu.js в HTML код.
	2. Вставляем классы .active_list и .wr-content.
	3. Вставляем класс .active-content-menu в тег <a>, который будет активен при загрузки страницы. (Его мы и стилизуем)
	4. Добавляем собстевенные якоря.
	5. Запускаем.

### Структура HTML

	<ul class="active_list">
		<li><a href="#anchor-content-1" class="active-content-menu">Текст 1</a>
		<li><a href="#anchor-content-2">Текст 2</a>
		...
		<li><a href="#anchor-content-3">Текст 2</a>
	</ul>
	<div class="wr-content">
		<div id="anchor-content-1">
			Любой текст. Любые теги.
		</div>
		...
		<div id="anchor-content-n">
			Любой текст. Любые теги.
		</div>
	</div>
	
### Основные классы
	.active_list - класс меню, которое будет активным
	.active-content-menu - класс пункта меню, который мы хотим стилизовать при прокрутке
	.wr-content - обвертка для контена

### Якоря
	Якоря можно ставить любые.

## Plugin select active item menu while scrolling


