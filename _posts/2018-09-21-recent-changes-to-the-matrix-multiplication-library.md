---
layout: post
title: Recent changes to the matrix multiplication library
---

Committed to the project's goals, I improved some aspects of the library and I began optimizing it for functioning on microcontrollers.

# Optimizing for size

[The library](https://github.com/webDva/matrixmul) has a `Matrix` struct that is a construct made for the purpose of facilitating matrix multiplication operations. The `Matrix` struct looks like this:

``` C
typedef struct MatrixStruct {
    unsigned char rows;
    unsigned char columns;
    float elements[MAX_ELEMENTS];
} Matrix;
```

Since microcontrollers often have memory size constraints, I changed the `Matrix` struct's `rows` and `columns` type from `int` to `unsigned char`. The `int` type is two or four bytes large while the `unsigned char` type is one byte large. This change will limit the number of rows and columns a matrix can have to 255, but that is acceptable given the constraints.

I also changed the `elements` default array size (`MAX_ELEMENTS`) from 1,000 to 100. This is so that there can be more matrices and smaller matrices as the environment is embedded devices.

As a result of these changes, each matrix construct is now 402 bytes large. So, as an example, an allocation of 5,000 matrices would be 2,010 kilobytes large.

I'm not sure about the actual program code size, which is why I haven't included some functionality, like bounds-checking, but users should be able to modify the library's code for their own circumstances if I do add such.

# Other changes

* The library is now header only; it's all located in a single C header file. This will make it easier to use the library.

* I improved the already handy documentation.

* I implemented a testing paradigm. It's simple functional/specification testing and it's effective for this project.

# New strength leading to new fortunes

I will begin to create a portable simple vanilla artificial neural network library that can fit on microcontrollers. This matrix multiplication project was meant to facilitate the capabilities for doing so by gaining experience in implementing matrix multiplication, C programming, embedded systems development, writing documentation, testing, public open source software development, and project management.