install: #установить зависимости
		npm ci
brain-games: #запуск игры без глобальной установки
			node bin/brain-games.js
publish: #отладка публикации
			npm publish --dry-run
lint: #запускает проверку стиля 
		npx eslint .
