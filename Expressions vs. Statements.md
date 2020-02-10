# Expressions vs statements

All computer programs written in every programming language follow the same basic structure. Programs are made of statements, statements contain expressions and expressions can contain other expressions. It is important to understand this basic structure so that you can understand types, a very important topic of this course.

Let's dive deeper.

## Expressions

An expression is any of the following

### A primitive literal
- 42
- "hello"
- `true`

### A variable
- foo
- bar
- bob
- age

### A function call.

The arguments of the function call are expressions.

- `f(true, "hello")`
- `g()`
- `add(51, 65)`
- `add(mult(2, 3), 8)`

### An object literal.

Objects have property. Object literals always start with a `{` and end with a `}`.

- `{age: 42, name: "bob"}`
- `{name: "bob", score: getScore("bob")}`
- `{address: {numer: "4", street: "pine"} }`

### Dot expression

- `x.y`
- `f().z`
- `bob.address.streetName`

### An array literal

- `[1,2,3]`
- `["hi", true, 10]`
- `[ ]`
- `[f(), {name: "bob"}, true]`

### Operator

- `3 + 4`
- `f(2) + 7`
- `true || k()`

### A function expression

There are many ways to write function expressions. We will look deeper into function expressions after we look at statements

## Statements

A computer program is simply a series of statements. Here is an exhaustive list of them:

- Variable declaration
- Assignments
- If statements
- For loops
- While loops
- Return statements
- Expression statements

### Variable declaration

A variable declaration always adds a row to the current frame.

#### Examples

- `let x = 42`
- `let y = f(10)`
- `let z = {name: generateName(), age: 15}`

#### Pattern

let <variablename> = <expression>

### Assignments

Even though variable assignments are technically expressions, they should always be used as statements to make code more readable and maintainable.

There are two kinds of assignments: variable assignments and property assignments. 

- Variable assignments modify a value in a frame.
- Property assignments modify a value in an object.

#### Examples

- `x = 5`
- `x = x + 1`
- `bob.name = "Robert"`
- `bob.address.number = 101`

#### Patterns

```js
<variable name> = <expression>
<variable name>.<property name> = <expression>
<variable name>.<property name>.<property name> = <expression>
// etc.
```

### `if` statement

#### Example

```js
if(age > 18) {
   console.log("of drinking age")
} else {
   console.log("not of drinking age")
}
```

#### Pattern

```
if(<expression>) {
  <statement>
  <statement>
  …
} else {
  <statement>
  <statement>
  …
}
```

The else part of the if statement is optional.

### For loops

#### Example

```js
for(let i = 0; i < 5; i++) {
  console.log("hi")
}
```

### While loop

#### Example

```js
while(x < 10) {
  x = x * 2
}
```

### Return statement

A return statement must in a function body. When a computer reads this statement, it immediately destroys the frame, pops the call stack and exits the function.

#### Examples

- `return 5`
- `return f(10)`
- `return {age: 42}`
- `return {}`

### Pattern

return <expression>

### Expression statements

An expression which is not contained in another expression is a statement. Historically, we would put a semicolon after an expression to indicate that it is a statement, but it's no longer necessary. 

In theory, an expression statement can be any expression. In practice, it is always a function call. If you put a function on its own line, it's an expression statement. For example 

```js
console.log("hello world");
```

### Function expressions

The only time a statement can appear inside an expression with a function expression.

#### Examples

```js
(x, y) => {
   return x + y
}

(x, y) => {
   let c = y - x
   return c
}

x => {
   let c = y - x
   return c
}
```

Pattern
<parameters> => {
   <statement>
   <statement>
   …
}


If there is one parameter, the parenthesis becomes optional
Evaluation
When a computer encounters an expression, it goes through the process of finding out what the expression represents. For example
3 + 4 is an expression that represents 7

We call this process "evaluation" and we say that 3+4 "evaluates" to 7. Statements, unlike expressions, cannot be evaluated. Different kinds of expressions are evaluated differently.
Primitive literals
Primitive literals simply evaluate to themselves.
Variables
To evaluate a variable you need to look it up in a frame (like in Wakata fundamentals).
Operator expression
Operators combine two expressions (which may contain other operator expressions). To evaluate an operator expression, you first evaluate the sub expressions and then combine them depending on the specific operator
Function call
To evaluate a function call, you first evaluate the arguments of the function call. Then you need to actually run the function body statement by statement until you hit a return statement. When a return statement is reached, the expression of the return statement is evaluated and the function call evaluates to that value. If the function ends before a return statement is reached, the function call evaluates to undefined.
Object, array and function literals
All three kinds of expressions create a wakata box on the right of the frames and they all evaluate to a reference (aka arrow) to that box. The reference (aka arrow) is always placed in a frame or another object so the value can be manipulated at a later time.
Object literal and array literals
Object literals and array literals can contain sub expressions which much be evaluated first.

Function expression
A function expression contains statements but those statements are only evaluated when the function is called. Therefore, evaluating a function expression is always a very fast operation. You just need to create a function box and a reference (aka arrow) to that box.

Function expressions vs expression statements

An expression statement is a function call that is not contained in another expression. Most of the time, they are on a single line. Each of the following is a single expression statement

f(5)
g(h(3), 5)
console.log("hello")
console.log(x.toUpperCase())

Function expressions, on the other hand, are NOT used as expression statements. They usually appear on the right hand side of variable declarations or as arguments in function calls
let upper = str => { return str.toUpperCase() }
f((y, z) => {return y + z})
let double = x => {return x * 2}

Values and types
The result of evaluating an expression is called a value. Values always belong to one of the following categories:
number
string
boolean
object reference
array reference
function reference
undefined
null

We call these categories types. All software developers use types to reason about code and communicate with other programmers. They are very important to understand.



Comprehension questions

Q1

Why is it strongly discouraged to use an assignment as an expression (and therefore assignments should be considered statements)?

Mainly because it is confusing.

if(x = 5) { … } // BAD

// Better 
x = 5
if(x === 5) { … }

Q2

Can statements be evaluated? If so, what kind of values do they evaluate to?

No, statements do not evaluate to values

Q3

Can expressions contain other expressions? 

Yes. For example, object literals are expressions and can contain other expression.

{ name: ‘age’ } (‘age’ is an expression - a primitive literal)

Q4

What kinds of expressions do not contain other expressions?

Primitive literals.

Q5

A function expression contains statements. When are those statements executed?

When the function is called

Q6

Assuming the function f does not have a return statement. What is the type of 
f()

undefined

Q7

When is it useful to have a primitive literal as an expression statement?

Never

Q8

When is it useful to have an object literal as an expression statement?

Never

Q9

Expression statements usually include what kind of expressions?

Function calls (example console.log(‘hello’))

Q10

Can object literals contain assignments?

Yes but it’s discouraged (it’s confusing)

Q11

If your program does not contain functions, is it possible that a statement is included in an expression?

No. Only function expressions can contain statements.

Q12

True or false: when calling a function, every statement in the function body is executed

False.

Example:
let f = (x) => {
  if (x > 3) return true;
  return false; // this line is never executed if x > 3
}

Q13
Which of the following contain errors, which are strongly discouraged and which are syntactically correct?

a)
f(let x = 3) // error. A variable declaration is a statement and can’t be passed as an argument.
b)
f({x: state.z = 4}) // discouraged but syntactically correct - assignment used as expression
c)
if(x = 6) { // discouraged but syntactically correct - assignment used as expression
  console.log("hi")
}
d)
y => {
  3 // discouraged but syntactically correct - expression used as statement
}
e)
if(while(true){}) {  // error. A while loop is a statement and can’t be evaluated to a Boolean
  console.log("hi")
}

Q14

Which of the following is an expression (which is not an expression statement), which is a statement and which is neither?

a)
5 + f() // expression
b)
if(true){console.log("hi")} // statement
c)
x => { // function expression
  z = 3 + 4
}
d)
f(let y = 3) // neither (invalid syntax)


Q15

How many (wakata style) table lookups will be needed to evaluate the following expression:
f(x + 3) + 5

2 - lookup f and x

Q16

True or false: the arguments of the function call need to be evaluated before the function call is made.

True

Q17

Can you think of any reasons why it is confusing when an expression has a different type depending on when it is evaluated?

Example

let f = x => {
   return x + 5
}
console.log(f(10))
console.log(f("10"))

Unpredictable and inconsistent behaviour

Q18

In theory, function expressions can appear anywhere where an expression is expected. However, based on your previous experience, in which kind of statement do you usually find function expressions?

Variable declaration

Q19

What is the type of the result of evaluating the following?

	if(x < 2) { 3 }

None. A statement does not have a type (since it has no value)

Q20

What is the problem with this function?
let isExpensive = price => {
           return if (price > 10) {
		'expensive';
	}
	else {
		'cheap';
	}
}

Can’t return a statement. We can only return expressions (because they evaluate to a value).

Q21

What is the problem with this function?
let isExpensive = price => {
	return {
		if (price > 10) {
			'expensive';
		}
		else {
			'cheap';
		}
	}
}

We are returning an object literal with an if statement inside it which is invalid.

Q22

Group the following expressions like so:
Type1
elem1, elem2
Type2
elem3, elem4
....
….
TypeN
...

Expressions:
5
true
null
{name: 'bob', age: 23}
NaN
23
'hello'
0
['mouse', 'cat', 'dog']
'cat'
{product: 'cake', price: '50$'}
['coconut', 24, 'banana']
-99
Number
5, 23, 0, -99, NaN

Boolean
true

String
‘hello’, 'cat'

Object
{name: 'bob', age: 23}, {product: 'cake', price: '50$'}, null

Array
['mouse', 'cat', 'dog'], ['coconut', 24, 'banana']

## Question 23: What do you look for to differentiate an arrow function from an object expression?

() => {} // parentheses (for the parameters), arrow, followed by {} which represent the function body
{} // empty object literal. 

## Question 24: Are function expressions sometimes used in expression statements?

Yes.

### Example

```js
let fruits = ['apple', 'coconut']

fruits.forEach((fruit) => { console.log(fruit + 's') })

The whole line is an expression statement. It contains a function expression (argument to forEach)
```

