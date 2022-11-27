import React from 'react';

const Blogs = () => {
    return (
        <div className=''>
            <div className="card  bg-neutral text-neutral-content mt-3 mb-3">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-info ">Q-1: What are the different ways to manage a state in a React application?</h2>
                    <p>Ans:Local (UI) state – Local state is data we manage in one or another component.

                        Local state is most often managed in React using the useState hook.

                        For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.

                        Global (UI) state – Global state is data we manage across multiple.</p>

                </div>
            </div>
            <div className="card  bg-neutral text-neutral-content mb-3">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-info ">Q-2: How does prototypical inheritance work?</h2>
                    <p>Ans:The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>

                </div>
            </div>
            <div className="card  bg-neutral text-neutral-content mb-3">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-info">Q-3: What is a unit test? Why should we write unit tests?</h2>
                    <p>Ans:A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property.
                        The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>

                </div>
            </div>
            <div className="card  bg-neutral text-neutral-content mb-3">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-info ">Q-4:React vs. Angular vs. Vue?</h2>
                    <p>Ans:1-React, developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). Similar to Vue,
                        .
                        2.Angular, developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name – AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular.
                        3.Vue, also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn’t have the backing of a large company. The most current version is always announced on the official Vue website on their releases page. Contributors for Vue are supported by Patreon. It should be noted that Vue also has its own GitHub repo, and functions using TypeScript.</p>

                </div>
            </div>
        </div>
    );
};

export default Blogs;