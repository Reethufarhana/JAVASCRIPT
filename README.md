<!-- Stack -->
Stack: Static memory allocation
A stack is a data structure that JavaScript uses to store static data. Static data is data where the engine knows the size at compile time. In JavaScript, this includes primitive values (strings, numbers, booleans, undefined, and null) and references, which point to objects and functions.

(or)

Stack: It is a data structure used to store static data. Static data refers to data whose size is known by the engine during compile time. In JavaScript, static data includes primitive values like strings, numbers, boolean, null, and undefined. References that point to objects and functions are also included. A fixed amount of memory is allocated for static data. This process is known as static memory allocation.

Stack(primitive) Heap(non-primitive)

Stack = which takes copy of the declared data type. here if we change the value first declared value wont change

<!-- Heap -->
Heap: Dynamic memory allocation
The heap is a different space for storing data where JavaScript stores objects and functions.
Unlike the stack, the engine doesn't allocate a fixed amount of memory for these objects. Instead, more space will be allocated as needed.

(or)

Heap: It is used to store objects and functions in JavaScript. The engine doesn’t allocate a fixed amount of memory. Instead, it allocates more space as required.

Heap = Heap is a different space for storing data where JavaScript stores objects and functions. which takes the reference of the data type. here if we change the value first declared value also get change.


Releasing the memory when not in use anymore. In JavaScript, this is handled automatically (it is called JavaScript garbage collection).


<!-- Numbers -->
here in numbers there are some functions which are used to convert number to string by using "toString()" function.

we can convert decimal value to round figure number by using "toPrecision()" function.

we can take limited value after the decimal by using "toFixed()" function.