
Professional Portfolio: https://www.jnydam.com

-----------------------------------------------------

Most Popular Github Repository Reader Project

Deployed Project: https://githubviewer.jnydam.com/

Figma Link: https://www.figma.com/file/CjMDfn7w4BN45y7oHz6kw0/GithubRepoViewerPublic?type=design&node-id=0-1&mode=design

This full-stack project is composed of a frontend written with React + Typescript (./frontend),
a backend REST API written in Java Spring Boot (./springbootreader), backend NodeJS worker (./nodejsworker),
and a MongoDB instance

The NodeJS worker periodically pings Github REST API service once a day for the most popular programming languages for 4
languages, specifically JavaScript, Java, C++, and Python.

Once retrieved, the worker populates the MongoDB instance with the repositories retrieved at that given time.

The Spring Boot REST API then reads off the MongoDB instance and exposes the data.

The frontend React + Typescript app reads off of the Spring REST API to display the data.

These services are connected together using Kubernetes primitives and the whole project is deployed in a AWS EKS (Amazon Elastic Kubernetes Service) cluster.
