---
layout: post
title:  "The Best Programming Language!"
date:   2023-09-22 18:30:04 +1000
categories: Opinions
usemathjax: false

---
## ACCORDING TO ME


Okay, this title was a bit clickbaity, but this is my general philosophy for programming language. I am not a huge fan of learning a whole new programming language every couple of weeks. I don't enjoy that process, I enjoy using tools to solve a problem. I think you should learn enough tools that allow you to solve as many problems as possible.  This blog is somewhat based on [Bjarne Stroustrup: The 5 Programming Languages You Need to Know ](https://www.youtube.com/watch?v=NvWTnIoQZj4&ab_channel=BigThink) 

How good a programming language is, depends on the use case, but I think a programming language needs is most often judged on the following metric: (I was going to add popularity but maybe it can be encapsulated with ECH)

1. Speed of Execution (SE): This is the speed at which the computer executes your instructions.
2. Speed of Development (SD): This is the speed it takes to write the instructions.
3. Error communicating to Computer (ECC): This can include how likely is the code to compile, how easy is it to write bugs in, etc. How likely is your program understood by a machine?
4. Error communicating to Humans (ECH): How likely is it that someone else can understand your code? For example how likely is your colleague able to understand the code?

 In the real world, certain projects will require prioritization of one of these metrics over the other. For example, if you are writing an embedded system software you have to prioritize SE and ECC, if you want to be first to market then option SD is the best, etc. I think in general you can have a handful of programming languages that can satisfy each of these metrics depending on the projects. I don't think there is a singular programming language that excels in each of these categories. I think as long as you 

### Scripting: Python

I think for the first language I want a language that would first use to get a thought into code. Something that has extensive support and is very close to natural language. So we want something that maximizes SD, minimizes ECH and somewhat minimizes ECC. We sacrifice SE, but that is alright.

Python meets these requirements and I think the perfect language for scripting an idea, and getting that project started. Its extensive support, easy syntax and libraries make it an exceptional tool to get things done.

Other Options:
- Perl
- Ruby

### Speed Queen: C++

For this category, I wanted a language that makes up for the speed that Python lacked, for those projects where speed is a necessity. We should be able to write close to the hardware and do so without much hassle. I was tossing up between C++ and Rust. I am not too familiar with Rust but am with C/C++. If we assume the speed is almost similar, I believe Rust has C++ beat in ECC in terms of the ability to write bug-free software. But my choice is still C++ and this is why.

- Speed of development: There are a lot more libraries for C++. I know the languages better. More information online to assist with a query.
Error Communicating With Humans: More people write in C++ so understand it better.
- Error Communicating with Computers: Cuda is written in C++, more hardware can compile C++, even if it may be really easy to create bugs.

Rust does seem like a very interesting language, and I do want to learn it. But at the moment I think if I think of a project that requires speed of execution and low-level access, then I must turn to C++

- Rust

### Web: Javascript, HTML, CSS

Easy Javascript, HTML, CSS. I think it's obvious. Maybe Typescript can write cleaner code, but it's all javascript at the end. Let's not spend valuable words in this section


### Catch all: Java

This is a hard one. I want a language that is more robust than Python but not as low-level as C++. I am basically picking Java right now since I have some experience in it before. Maybe for a large project that requires a robust codebase. 

### Honorable Mentions

- Swift: Want to learn to create iphone/ios apps, me being an Apple user. Dont know the language, need to learn it, but keen to.
- Haskell: Know the language to learn functional paradigm, never used it.
- Go: The philosophy of the language seems interesting. Simple is better. But won't learn it unless I have to.


## Conclusion

The purpose of this article is to promote a problem-focused mentality rather than tool focused one. I often find myself focusing too much on the tools, but I think this is flawed. I think I am at a stage in my life where I want to focus more on building expert-level knowledge in the tools I already know rather than trying to learn more. I think this is more important after you have developed familiarity with a few categories of languages to start using it, rather than changing the tool-set regularly.