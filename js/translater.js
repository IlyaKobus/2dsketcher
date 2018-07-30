function Translater() {

	this.phrases = {
		"Test":
				[
					"Тест",
					"Тест"
				],
		"Save":
				[
					"Сохранить",
					"Зберегти"
				],
		"Copy":
				[
					"Копировать",
					"Копіювати"
				],
		"Details":
				[
					"Детали",
					"Деталі"
				],
		"Delete":
				[
					"Удалить",
					"Видалити"
				],
		"Restore":
				[
					"Восстановить",
					"Відновити"
				],
		"Start":
				[
					"Начало",
					"Початок"
				],
		"End":
				[
					"Конец",
					"Кінець"
				],
		"Control":
				[
					"Контрольная",
					"Контрольна"
				],
		"Additional #":
				[
					"Дополнительная №",
					"Додаткова №"
				],
		"Name":
				[
					"Имя",
					"Ім'я"
				],
		"Looped":
				[
					"Замкнуть",
					"Замкнути"
				],
		"General":
				[
					"Основное",
					"Основне"
				],
		"Points":
				[
					"Точки",
					"Точки"
				],
		"Point #":
				[
					"Точка №",
					"Точка №"
				],
		"Center":
				[
					"Центр",
					"Центр"
				],
		"X Radius Control":
				[
					"Контрольная X радиуса",
					"Контрольна X радіусу"
				],
		"Y Radius Control":
				[
					"Контрольная Y радиуса",
					"Контрольна Y радіусу"
				],
		"Radius Control":
				[
					"Контроольная радиуса",
					"Контрольна радіусу"
				],
		"Curve Radius":
				[
					"Радиус скругления",
					"Радіус закруглення"
				],
		"Control #":
				[
					"Контрольная №",
					"Контрольна №"
				],
		"Add. Ctrl #":
				[
					"Допольнительная контрольная №",
					"Додаткова контрольна №"
				],
		"About":
				[
					"О программе",
					"Про програму"
				],
		"Canvas Properties":
				[
					"Свойства холста",
					"Властивості полотна"
				],
		"Usefull Links":
				[
					"Полезные ссылки",
					"Корисні посилання"
				],
		"Save to DB":
				[
					"Сохранение в БД",
					"Зберегти в БД"
				],
		"FAQ":
				[
					"ЧаВо",
					"Поширені питання"
				],
		"Import from File":
				[
					"Импорт чертежа из файла",
					"Імпорт креслення із файлу"
				],
		"Hardware Properties":
				[
					"Аппартаные настройки",
					"Апаратні налаштування"
				],
		"Sketch Properties":
				[
					"Настройки чертежа",
					"Налаштування креслення"
				],
		"Import Sketch from DB":
				[
					"Импорт чертежа из БД",
					"Імпорт креслення із БД"
				],
		"Sketch Total Info":
				[
					"Общая информация по чертежу",
					"Загальна інформація по кресленню"
				],
		"Success":
				[
					"Выполнено",
					"Виконано"
				],
		"Sketch":
				[
					"Чертёж",
					"Креслення"
				],
		"successful saved to DB":
				[
					"успешно сохранён в БД",
					"успішно збережено до БД"
				],
		"View":
				[
					"Вид",
					"Вигляд"
				],
		"Grid Params":
				[
					"Параметры сетки",
					"Параметри сітки"
				],
		"X Position":
				[
					"Позиция X",
					"Позиція X"
				],
		"Y Position":
				[
					"Позиция Y",
					"Позиція Y"
				],
		"Scale Factor":
				[
					"Масштаб",
					"Масштаб"
				],
		"Grid Size (mm)":
				[
					"Размер ячейки (мм)",
					"Розмір комірки (мм)"
				],
		"subGrids per Cell":
				[
					"Число подъячеек",
					"Кількість підкомірок"
				],
		"CANCEL":
				[
					"ОТМЕНА",
					"ВІДМІНА"
				],
		"SAVE":
				[
					"СОХРАНИТЬ",
					"ЗБЕРЕГТИ"
				],
		"UPLOAD":
				[
					"ЗАГРУЗИТЬ",
					"ЗАВАНТАЖИТИ"
				],
		"DOWNLOAD":
				[
					"СКАЧАТЬ",
					"ЗАВАНТАЖИТИ"
				],
		"Control programm generation":
				[
					"Генерация управляющей программы",
					"Генерація керуючої програми"
				],
		"Control programm for":
				[
					"Управляющая программа для",
					"Керуюча програма для"
				],
		"successful created":
				[
					"успешно создана",
					"успішно створена"
				],
		"":
				[
					"",
					""
				],
		"":
				[
					"",
					""
				],
		"":
				[
					"",
					""
				],
	};

	this.lngIndex = -1;

	this.setLanguage = function (lng) {
		switch (lng) {
			case 'English':
				this.lngIndex = -1;
				break;
			case 'Russian':
				this.lngIndex = 0;
				break;
			case 'Ukrainian':
				this.lngIndex = 1;
				break;
		}
	}
}
;


