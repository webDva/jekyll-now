---
layout: post
title: How to perform text classification using supervised learning
summary: A tutorial on how to make a neural network and classify text with it.
---

A walkthrough on how to do supervised learning with a neural network for text classification purposes.

# Objective

Our objective here is to learn how to make a simple performing neural network and operate it. We want the neural network construct to artificially learn how to classify text. This will help us gain an understanding of neural networks by seeing one perform. The neural network will not be entirely constructed by us as we will use the capabilities provided to us by the [Neataptic](https://www.npmjs.com/package/neataptic) library; we will not be concerned with the internals of how neural networks perform here in this tutorial.

## Plan of action

First, we will need a mechanism for transforming text into a numeric data format that the neural network can operate on and a bag-of-words vector model will help us achieve that. Next, we will use our text transformation mechanism on an ad-hoc vocabulary set of words to provide the training data for the neural network. We will then create the neural network and train it. Finally, we will perform text classification using the neural network.

Our programming language used will be Javascript.

# Imports

We will require the `natural` and `neataptic` Node.js packages for our objective. The `natural` package will be used for tokenizing and stemming words and the `neataptic` package will provide a neural network for us.

``` javascript
const natural = require('natural');
const neataptic = require('neataptic');
```

Use the console command `npm install --save natural neataptic` to install the packages.

Note that Neataptic requires a Node.js version of 7.6 or higher and note that it may require you to install an even higher version to satisfy its needy, large, and complex dependencies.

# Transforming text for the neural network

We need an algorithm for transforming text into a structure that the neural network can operate on. We will name the function *cleanSentence* to show that it transforms sentences into the neural network's preferred format. It will need to be provided a sentence (that is, a string) and a list of vocabulary words to function as the vocabulary superset.

Our algorithm's goal is to tokenize an individual sentence, stem each word in the tokenized sentence, and then transform the text data into a bag-of-words vector model.

## Tokenization

To tokenize a sentence means to deconstruct the sentence into segments of words, or tokens. This is equivalent to transforming a sentence string into an array of its individual word elements.

We will use the `natural` package we imported to perform tokenization for us.

``` javascript
function cleanSentence(sentence, vocabulary) {
    const naturalTokenizer = new natural.TreebankWordTokenizer();
    sentence = naturalTokenizer.tokenize(sentence);
}
```

`sentence` is now an array of tokens.

## Word stemming

To stem a word means to extract the base or stem of the word for the convenience of such. Each token in our `sentence` array will have its lexical ending removed, if applicable, resulting in the base or stemmed segment.

We will also use the `natural` package for this task. It also lowercases the words which will aid us for the sake of consistency.

``` javascript
function cleanSentence(sentence, vocabulary) {
    const naturalTokenizer = new natural.TreebankWordTokenizer();
    sentence = naturalTokenizer.tokenize(sentence);

    // stem each word/token in the sentence array
    sentence = sentence.map(word => natural.LancasterStemmer.stem(word));

    // remove duplicate words
    sentence = Array.from(new Set(sentence));    
}
```

All the tokens in `sentence` are now stemmed.

## Making a bag-of-words vector

The neural network needs continuous numeric values to operate on and words are not such. So, we will create a bag-of-words vector model from the text we're using. A bag-of-words vector model is a set of values that maps the occurences of words in a sentence from a vocabulary superset. It can record the number of occurrences of each word in a sentence mapped to a vocabulary, but we only want the model to know if a particular word occurs or not.

An illustration to facilitate understanding:

*(word1, word2, word3)* is a vocabulary set of words, *word1*, *word2*, and *word3*. A bag-of-words vector model for the sentence "word2 is a thing" using the vocabulary set would look like (0, 1, 0) as *word2* is the only occurring word from the vocabulary set and it is the second element in the vector, hence (0, 1, 0).

The following appended algorithm, and thus the complete function, creates a bag-of-words vector model for our sentence and returns it at the end of the function.

``` javascript
function cleanSentence(sentence, vocabulary) {
    const naturalTokenizer = new natural.TreebankWordTokenizer();
    sentence = naturalTokenizer.tokenize(sentence);

    sentence = sentence.map(word => natural.LancasterStemmer.stem(word));

    sentence = Array.from(new Set(sentence));
    
    let bag = [];
    vocabulary = vocabulary.map(word => natural.LancasterStemmer.stem(word)); // stem this set of words too for consistency
    vocabulary.forEach((word) => {
        if (sentence.includes(word))
            bag.push(1);
        else
            bag.push(0);
    });

    return bag;   
}
```

# Training text

The words *sleepy*, *tired*, *food*, and *hungry* will be our vocabulary set.

``` javascript
const vocabulary = ['sleepy', 'tired', 'food', 'hungry'];
```

The bag-of-words vector for our vocabulary set will be an array that maps to a set of classification encodings. The classification encodings will be [1, 0] for intents of sleepiness with the words *sleepy* and *tired* and [0, 1] for intents of hunger with the words *food* and *hungry* as that is our supervision.

As an example, the bag-of-words vector model *[1, 0, 0, 0]* will be classified as an intent of sleepiness as the word *sleepy* is the first element in the vocabulary set and the model would warrant the output *[1, 0]* due to the mapping we assigned.

The following is a set of training input-output pairs to supply the neural network with per the Neataptic library's required format.

``` javascript
const trainingSet = [
    {input: [1, 0, 0, 0], output: [1, 0]},
    {input: [0, 1, 0, 0], output: [1, 0]},
    {input: [0, 0, 1, 0], output: [0, 1]},
    {input: [0, 0, 0, 1], output: [0, 1]}
];
```

# Neural network training

A [multilayer perceptron](https://en.wikipedia.org/wiki/Multilayer_perceptron) neural network type will be chosen as it's representative of the essence of neural networks and it's simple and effective for our learning purposes.

The construction of the neural network will require the size of the input layer to be four as we have a vocabulary bag-of-words vector model of size four. The output layer size will be two as we have two classification classes. We will choose the hidden layers to be one of size six, the sum of our input layer size and output layer size. The hidden layer size and number can be altered but these current parameters suffice for this tutorial.

``` javascript
const NN = neataptic.architect.Perceptron(4, 6, 2);
```

Additional parameters of the neural network must be tuned. Our Neataptic library requires a JSON object with our parameters to be provided.

``` javascript
NN.train(trainingSet, {
    log: 10,
    iterations: 100000,
    error: 0.00001,
    rate: 0.01
});
```

The neural network will perform its task relying on the minimization of a [cost function](https://en.wikipedia.org/wiki/Cost_function).

`iterations` is the maximum number of cost function minimization iterations we want the neural network to perform should it not reach the target `error` value beforehand.

The `error` value shows how much we want to minimize the cost function. Ideally, it would be zero as that would mean no error at all, but the best the machine can do is to be as accurate as it can.

The `rate` is the step value that the cost function uses on each iteration. It relates to how fast the cost function will converge to its assigned target `error` value.

The `log` value of `10` just means that on every tenth iteration the neural network will log its current status in the console during training.

An example, when the above `train` statement that trains the neural network using the `trainingSet` is executed:

```
iteration 11140 error 0.000010074673175227337 rate 0.01
iteration 11150 error 0.000010052491208186209 rate 0.01
iteration 11160 error 0.000010030380692738644 rate 0.01
iteration 11170 error 0.000010008341326644574 rate 0.01
```

After a period of training, the neural network is now available for text classification operations.

# Neural network operation

When using the newly trained neural network, we use our `cleanSentence` function we created to transform sentences into the neural network's expected input format. The neural network's `activate` function returns the provided input's probability of belonging for each class.

``` javascript
console.log(NN.activate(cleanSentence('sleepy girl', vocabulary)));
console.log(NN.activate(cleanSentence('sleepy and tired girl', vocabulary)));
console.log(NN.activate(cleanSentence('sleepy girl, hungry too! where is food she said', vocabulary)));
```

The above statements may yield the following output, arrays where each element is a probability of belonging for each of our two classes, sleepiness and hunger:

```
[ 0.9972345487495489, 0.0027823015223758674 ]
[ 0.9993448101567569, 0.0006689189700326538 ]
[ 0.0032375739385209342, 0.9967425328909244 ]
```

The neural network has determined that the first activation statement, the one with the sentence "sleepy girl," is of the sleepiness class with a 99% probability of being so and that it belongs to the hunger class with a 0% probability of doing so. Likewise, the second activation, the one with the sentence "sleepy and tired girl," yielded a 99% probability of belonging to the sleepiness class and a 0% probability of belonging to the hunger class.

The last activation, which has a mixture of intent classes, yielded a 0-to-99 sleepiness-hunger classification ratio instead of a more fractional result like 33-to-66, because we did not train the neural network to do so. If we provided and supervised more training samples, then the neural network would learn the additional phenomena as that is the essence of supervised learning.