# Plugin: active-item-menu
## Плагин выделяет актуальный пункт меню при прокрутке
### Подключение плагина
	1. Подключаем файл activeItemMenu.js в HTML код.
	2. Вставляем классы .active_list и .wr-content.
	3. Добавляем собстевенные якоря.
	4. Запускаем.


### Структура HTML

	<ul class="active_list">
		<li><a href="#anchor-content1">Текст 1</a>
		<li><a href="#anchor-content2">Текст 2</a>
		...
		<li><a href="#anchor-content3">Текст 2</a>
	</ul>
	<div class="wr-content">
		<div id="anchor-content1">
			Любой текст. Любые теги.
		</div>
	</div>
	
### Основные классы
	.active_list - меню, которое будет активным
	.wr-content - обвертка для контена

### Якоря
	Якоря можно ставить любые.
	

## Plugin select active item menu while scrolling


