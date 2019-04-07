[footer]: https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true
[ico20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-20.png
[ico25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/a-level-25.png
[hw-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/briefcase-30.png
[cap-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/coffee-30.png
[warn-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/warning-25.png
[link-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/link-25.png
[err-20]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-20.png
[err-25]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-25.png
[err-30]: https://raw.githubusercontent.com/garevna/a-level-js-lessons/master/ico/no_entry-30.png


# <img src="https://avatars2.githubusercontent.com/u/19735284?s=40&v=4" width="30" title="Ⓒ Irina Fylyppova ( garevna ) 2019"/> Блок схема алгоритма

## ![ico25] Алгоритм

В основе структурного программирования лежит триада

- последовательность
- ветвление
- цикл

**Последовательность** - выполнение действий одно за другим

**Ветвление** - выбор действия в зависимости от выполнения условия

**Цикл** - неоднократное повторение одной и той же последовательности действий

Программирование начинается с *описания алгоритма*

**Алгоритм** - это пошаговая система инструкций, определяющих процесс перехода
от исходных данных ( на входе ) к искомому результату ( на выходе )

                               ВХОД -->  Процесс  --> ВЫХОД

Если результат существует, алгоритм выполняется за конечное число шагов

Если искомого результата не существует, алгоритм или никогда не завершает работу, либо заходит в тупик

Одним из способов описания алгоритма является блок-схема

____________________________________________________________________________

## ![ico25] Блок-схема

[🔗 Обозначения](https://pro-prof.com/archives/1462 "Обозначения")

☕ Последовательность

![]( https://garevna.github.io/js-samples/images/block-scheme-03.png "Варка борща")

☕ Ветвление

![]( https://garevna.github.io/js-samples/images/block-scheme-02.png "Выбор игрушки")

☕ Цикл

![]( https://garevna.github.io/js-samples/images/block-scheme-01.png "Упаковка чемодана")

#### 💼 Упражнение 1

Нарисуйте блок-схему алгоритма суммирования всех целых чисел от 1 до N

#### 💼 Упражнение 2

Нарисуйте блок-схему алгоритма суммирования всех целых нечетных чисел от 1 до N

###  Ряд Фибоначчи

> Ряд Фибоначчи - это последовательность чисел,
каждое из которых равно сумме двух предыдущих

> Первый и второй члены ряда Фибоначчи равны 1

#### Схема алгоритма вычисления члена ряда Фибоначчи по его номеру N

![]( https://garevna.github.io/js-samples/images/block-scheme-04.png "Вычисления члена ряда Фибоначчи по его номеру N")

#### 💼 Упражнение 3

Измените блок-схему алгоритма вычисления члена ряда Фибоначчи по его номеру **N**
следующим образом:

измените стартовые значения переменных и перенесите инкремент ( приращение )
переменной **n** перед блоком ветвления кода ( сравнения **n** и **N** )

    n = 1

    a = 1

    b = 1

    F = 1

    n = n + 1

    ...


***

✏️ Для выполнения блок-схемы можно воспользоваться [бесплатным сервисом](https://www.draw.io/)


# 💼 Homework

Нарисуйте блок-схему алгоритма вычисления факториала числа N

**Факториал** числа N - это произведение всех чисел от 1 до N
```
N! = 1 * 2 * 3 * 4 * .... * N
```

_________________________________________________________________________

![](https://github.com/garevna/js-course/raw/master/images/a-level-ico.png?raw=true)
