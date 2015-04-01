dev:
	sass scss:assets/css --watch

compress:
	sass scss/app.scss:assets/css/app.css --style compressed --scss

.PHONY: dev compress
