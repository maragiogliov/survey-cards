
# Getting Started with Create React App
    Assessment: Front-End Developer


Scenario:

We are running a legacy PHP application using CakePHP (MVC Framework).
Our dashboard pages are rendered in separate view files in PHP which is running on a number of web servers behind a load balancer.

For authentication, PHP $_SESSION is used, backed by a sessions table in a relational database. Our goal is to migrate from the PHP MVC infrastructure to a serverless backend with REST API endpoints. The new frontend is a ReactJS application (SPA), with pure clientside rendering hosted on AWS cloudflare (CDN).

# Question 1: Technologies
To optimize initial load time for our ReactJS application, we intend to host it on a CDN. This restricts the choice of ReactJS features / technologies that can be used in a feasibleway.What are differences between a common ReactJS deployment in a serverenvironment vs. a CDN deployment and how does it affect application design (routingfor example)?

# Question 2: Authentication
Login to our dashboard is still performed through PHP and the ReactJS REST backend has no access to the PHP sessions. What is a suitable way to share authentication information from PHP to the ReactJS app and what are the technical requirements?

# Question 3: Incremental Migration
The goal is to incrementally migrate from CakePHP to the new ReactJS + REST API infrastructure. This means that portions of our dashboards (whole sections or just single pages) would still
get rendered on the PHP Web Servers, while others are already implemented in the ReactJS application. Since the ReactJS application is hosted on a CDN, what are possible solutions to have a seamless dashboard experience while migrating portions to ReactJS?
 
# Question 4: Protecting Sensitive Data
Our dashboard has different access roles and limited / exclusive views to some of them. One concern is that with a purely client rendered dashboard, customers could see certain fields / information / settings that are reserved for certain admin roles (like the layout of admin-only forms).

What are options to hide or protect this kind of data with...
a.) ... purely client-side rendering and hosting on a detached CDN?
b.) ... a mix of client-side and server-side rendering with sacrifices to performance?

