import React from "react";
import ReactDOM from "react-dom";

import {Searchable} from "../kl/klreact-searchable";

import InlineCode from "../components/inline-code";

import Playground from "component-playground";
import assign from "object-assign";

import scope from "../scope.jsx";

export default [
  new Searchable(
    "Why are we building our own components?",
    () => (
      <div className="container">We are building our own components because we have our own multi-brand styling system called Hydra. And the real question is not about why we are building our own components, but why are we building the low level ones like <InlineCode>Button</InlineCode>. Because no off-the-shelf components are going to have our rendering for product tiles, prices, carousels and so on.</div>
    ),
    {}),
  new Searchable(
    "What is isomorphic rendering?",
    () => (
      <div className="container">
        <p>Isomorphic rendering is just a fancy way of saying that a component can be rendered either on the server or on the client with no code changes.</p>
        <p>Isomorphic rendering of React components, including all the Electrode components, is supported by both Node and Java. For Node check out the Thor server architecture. And for Java it's been shown that we can render pages using the <a href="http://openjdk.java.net/projects/nashorn/">Nashorn interpreter</a>.</p>
      </div>
    ),
    {}),
  new Searchable(
    "Can Electrode components be server side rendered?",
    () => (
      <div className="container">All of the Electrode components support isomorphic rendering, which means that they can be rendered either on the client or on the server.</div>
    ),
    {
      synonyms: ["isomorphic"]
    }),
  new Searchable(
    "Why not Angular?",
    () => (
      <div className="container">
        <p>Angular is a fantastic technology for building atomic UI, which is UI based on components, or in the case of Angular, directives. The tactical issue that we needed to solve was that we wanted to replace Thorax for view rendering. React allows us to replace Thorax view rendering without changing out the Backbone model code. Where Angular would not only require changing the view, but also changing out the model and services layers as well.</p>
        <p>From an official standpoint React was chosen by the Tech Council as our choice for a component technology.</p>
      </div>
    ),
    {}),
  new Searchable(
    "Why not Thorax?",
    () => (
      <div className="container">Thorax is no longer supported by any of the maintainers and Walmart was the primary consumer of Thorax, so we need to migrate off of it.</div>
    ),
    {}),
  new Searchable(
    "What does multi-brand mean in this context?",
    () => (
      <div className="container">
        <p>In the context of the Electrode platform the term <i>multi-tenancy</i> applies to our different corporate brands; e.g. SAMS Club, ASDA, George, Walmart, etc. The Electroe platform provides a single common interface standard where components can be seamlessly reused between the different brands at any level.</p>
        <p>From a developer's standpoint this means that we can change not only the CSS of the app based on brands through use of the Hydra platform, but also the UI logic during the build phase. It also means that when we build the app for George, as an example, that only George code makes it to the client.</p>
      </div>
    ),
    {
      synonyms: ["CSS", "tenant"]
    }),
  new Searchable(
    "What about internationalization?",
    () => (
      <div className="container">The Electrode components are i18n compatible throught use of the <a href="http://formatjs.io/">FormatJS</a> standard.</div>
    ),
    {
      synonyms: ["i18n"]
    }),
  new Searchable(
    "What about accessibility?",
    () => (
      <div className="container">The Hydra framework and the Electrode components are all designed to be <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA">Aria</a> enabled.</div>
    ),
    {
      synonyms: ["aria"]
    }),
  new Searchable(
    "What about unit testing?",
    () => (
      <div className="container">Testing is a big deal to us. All of our components are tested with a high level of coverage. The <a href="https://gecgithub01.walmart.com/FEOps/electrode-bolt">Bolt</a> framework that we develop and use ensures that all of our libraries are tested and meet our coverage standards.</div>
    ),
    {
      synonyms: ["bolt"]
    }),
  new Searchable(
    "What about automated client testing?",
    () => (
      <div className="container">Our components both support automation and are tested using automation using <a href="https://github.com/testarmada">TestArmada</a> framework developed by FEOps.</div>
    ),
    {
      synonyms: ["armada", "testarmada"]
    }),
  new Searchable(
    "Does this work with IE8?",
    () => (
      <div className="container">Yep. Our components are compatible with IE8. There are some visible differences but these are because of the CSS limitations of IE8.</div>
    ),
    {
      synonyms: ["explorer", "internet explorer"]
    }),
  new Searchable(
    "How do I get started?",
    () => (
      <div className="container">The best way to get started is to clone the <a href="https://gecgithub01.walmart.com/react/getting-started">getting-started</a> project and to get cracking using these components and creating a few of your own. You should also join the <InlineCode>#react</InlineCode> channel on Slack.</div>
    ),
    {
      synonyms: ["starting", "getting-started", "#react"]
    }),
  new Searchable(
    "How do I keep up with changes to Electrode?",
    () => (
      <div className="container">We blog at least once a week on the <a href="http://blog.coreweb.walmartlabs.com/">Core Web blog</a>. And we are constantly hanging out in the <InlineCode>#react</InlineCode> channel on Slack. We also host a React Summit every quarter where we have lighting talks about all of the cool stuff that we, as a company, have done with React and where we are going.</div>
    ),
    {
      synonyms: ["#react"]
    }),
  new Searchable(
    "Why the name Electrode?",
    () => (
      <div className="container">Saying 'React component libraries for Walmart Labs' gets a little old after a while, so we wanted a brand name for the platform and decided on 'Electrode'. It kind of fits along the electricity them that is invoked by the <i>spark</i> term from Walmart and the <i>react</i>ion term from Facebook.</div>
    ),
    {
    }),
  new Searchable(
    "How easy is it to build components?",
    () => (
      <div className="container">
        <p>Really, really easy. Check this out.</p>
        <Playground
          codeText={require("raw!./examples/faq/simple-component.example")}
          scope={assign({React, ReactDOM}, scope)}
          noRender={false} />
        <p>Now, obviously, this is a very simple example that only works for components that don't have event handling or state. But yeah, it's really easy.</p>
      </div>
    ),
    {
    }),
  new Searchable(
    "What about react-native?",
    () => (
      <div className="container"><a href="https://facebook.github.io/react-native/">React-native</a> provides an intruiging alternative to either pure native code, or hybrid code. It's somewhere in the middle with Javascript controlling native components. Which gives a native feel with the development speed of Javascript. We are taking react-native very seriously and look to use it in our native applications.</div>
    ),
    {
    }),
  new Searchable(
    "Why are components important?",
    () => (
      <div className="container">Our applications are really complex. Pages need to be multi-brand, responsive, internationalized, accesible, unit tested, tested with automation and so on. If you use a templating technology like Thorax the resulting code that accounts for all that is going to be really hard to maintain. A component technology like React, makes it easy to encapsulate complexity within the component so that it doesn't leak out into other components. For eample, all of the code for a Carousel is encapsulated within that component. All you have to give it is the tiles to scroll through. And all of the logic to manage the state is completely hidden from the upper layers of the page. In other words, with components, the <strong>maximum complexity of the page is equal to the most complex single component on the page</strong>.</div>
    ),
    {
    }),
  new Searchable(
    "What types of components are there?",
    () => (
      <div className="container">The core of the Electrode platform is a set of <i>dumb</i> components for the basic controls and layout containers. And I mean <i>dumb</i> in the sense of that there is no business logic connected to them, or connection to any server. It doesn't mean that they aren't complex. The Carousel component is pretty intense. So-called <i>smart</i> components have business logic, connect to services, and so on. And these are the types of components that are built by the vertical applications teams that sit on top of the Electrode platform.</div>
    ),
    {
    }),
  new Searchable(
    "Who works on Electrode?",
    () => (
      <div className="container">The Electrode platform is supported by the Common UI team. The primary folks working on it are: Rob Gerstenberger, Alex Grigoryan, Jack Herrington, Dave Stevens, and Ken Wheeler. However, a whole bunch of folks have worked on it over time and we owe them all a debt of gratitude. In particular we would like to thank; Alex Lande, Rob Ellis, Chase Adams, Joe Hudson, Dustan Kasten, Maciej Adwent, and Stephen Melnicki.</div>
    ),
    {
      synonyms: [
        "Alex Grigoryan",
        "Rob Gerstenberger",
        "Jack Herrington",
        "Dave Stevens",
        "Ken Wheeler"
      ]
    }),
  new Searchable(
    "Who is using Electrode?",
    () => (
      <div className="container">At the time of this writing the teams either in production or developing on Electrode include: Cart and Checkout (CXO), Item Page, My Account, Pharmacy, and Pickup Scheduler.</div>
    ),
    {
      synonyms: [
        "pharmacy",
        "item page",
        "cxo"
      ]
    }),
  new Searchable(
    "Is Electrode ES6?",
    () => (
      <div className="container">Yep, absolutely, the Electrode platform is Ecmascript 6 and makes use of all of it's awesome features.</div>
    ),
    {
      synonyms: [
        "ecmascript"
      ]
    }),
  new Searchable(
    "Are you using Flow?",
    () => (
      <div className="container">At the time of this writing we are planning our conversion to <a href="http://flowtype.org/">Flow</a>. In case you don't know, Flow is Facebook's optional typing architecture for Javascript. If you think of components as an API then Flow allows you to create an even stronger contract with your API that means a more stable, reliable, easier to use platform. And we are all for that.</div>
    ),
    {
    }),
  new Searchable(
    "Can Electrode platform components be used on Atlas?",
    () => (
      <div className="container">Yes. Though it takes some doing. We have already proven this concept out with the Cart and Checkout team.</div>
    ),
    {
    }),
  new Searchable(
    "What is Thor?",
    () => (
      <div className="container">Thor is our node application <i>archiecture</i>. It's not an app server in itself, it's an <i>architecture</i> for serving apps based on <a href="http://hapijs.com/">Hapi</a>, <a href="https://webpack.github.io/">Webpack</a> and Electrode on the front end. The server running this Electrode showcase application is based on the Thor architecture.</div>
    ),
    {
      synonyms: ["node", "hapi"]
    }),
  new Searchable(
    "How do I change the fonts, colors, margins, padding?",
    () => (
      <div className="container">You can do the usual stuff, override the CSS and what not. But you probably don't want to do that for multi-tenancy reasons. We've written a fairly <a href="http://blog.coreweb.walmartlabs.com/can-the-electrode-ui/">in-depth article on it on the blog</a>.</div>
    ),
    {
      synonyms: ["css"]
    }),
  new Searchable(
    "How does Electrode handle responsive design?",
    () => (
      <div className="container">You are free to use the responsive classes defined in the Atlas style guide with Electrode. But you can also use the <InlineCode>Layout</InlineCode> and <InlineCode>MediaSelector</InlineCode> components. <InlineCode>Layout</InlineCode> makes writing a multi-column layout that changes column widths across the breakpoints using CSS very easy. And <InlineCode>MediaSelector</InlineCode> makes it easy to define one component to use at one breakpoint and another component for a different breakpoint. For example, a phone oriented list on <InlineCode>x-small</InlineCode> and a tablet/desktop designed component on <InlineCode>small</InlineCode> and above.</div>
    ),
    {
    }),
];

