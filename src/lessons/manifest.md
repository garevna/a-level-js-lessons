# ![ico-30 study] Прогрессивные веб-приложения

Прогрессивное веб-приложение с точки зрения юзера работает как обычное десктопное приложение,
называется прогрессивным веб-приложением

~~~html
<link rel="manifest" href="/manifest.json">
~~~

## ![ico-25 icon] manifest_version

Версия manifest.json, используемая приложением
В настоящее время это должно быть 2,
потому что 1-ая версия не поддерживается браузерами ( ~deprecated~ ),
а 3-я является экспериментальной

◘◘manifest.json◘◘

~~~json
{
  "manifest_version": 2
}
~~~

## ![ico-25 icon] version

Это версия расширения в [**стандартном формате**](https://semver.org/):

| MAJOR.MINOR.PATCH |


◘◘manifest.json◘◘

~~~json
{
  "manifest_version": 2,
  "version": "0.1"
}
~~~

## ![ico-25 icon] name
