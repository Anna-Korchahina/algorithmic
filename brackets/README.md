# Brackets

## Task

Implement function `check(str, bracketsConfig)`, that for given brackets sequence will return `true` if it is correct and `false` otherwise

In the second param there is `bracketsConfig` - the array of pairs open-closed brackets. Each subarray includes only 2 elements - opening and closing bracket

```js
check('()', [['(', ')']]) // -> true
check('((()))()', [['(', ')']]) // -> true
check('())(', [['(', ')']]) // -> false
check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]) // -> true
check('[(])', [['(', ')'], ['[', ']']]) // -> false
check('[]()', [['(', ')'], ['[', ']']]) // -> true
check('[]()(', [['(', ')'], ['[', ']']]) // -> false

// special case: opening and closing bracket can be the same :)

check('||', [['|', '|']]) // -> true
check('|()|', [['(', ')'], ['|', '|']]) // -> true
check('|(|)', [['(', ')'], ['|', '|']]) // -> false
check('|()|(||)||', [['(', ')'], ['|', '|']]) // -> true
```

Write your code in `src/index.js`

///////////////////////////////////////

Несколько вариантов решения этой задачи.
1. Стек: 
- берем первый символ строки:
  - если это открывающая скобка - помещаем в Стек
  - если закрывающая - сравниваем с последним значением стека:
    - если стек пуст или не скобки не равны - прерываем возвращаем ложь
    - если совпадают - удаляем скобку из стека и обрабатываем след.символ 

