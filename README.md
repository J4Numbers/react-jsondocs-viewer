# Running the Documentation Server

Please see the sister project: [jsondocs-parser][1] regarding how to generate
the documentation for a a project.

Once you have the generated documentation, place it in `json/docs.json`.

Once you have this project downloaded, run the following commands:

    npm install
    npm start

The first command installs all the necessary packages for the documentation
server to be rendered while the second starts up the webserver.

Go to [localhost:8080][2] to see the server.

When you want to kill the server off, type `Ctrl+c` in the command window and
`y` if it asks for confirmation.

## Structure of the Documentation

When accessing the server, you can choose between viewing global variables,
global functions, and classes that have been provided with documentation.

By clicking on each of these, you can see all the documented objects and read
up on them properly. The fucntions, variables, and classes pages all have
partial search functionality, which allow you to type in the partial
(case-insensitive) name of a function, variable, class, or bunny rabbit, and
return all items which match your search case.

Improvements to it are welcome, the initial build was just to get something
which could read the comments outside of the very nasty JSON file.

[1]: https://github.com/M4Numbers/jsondocs-parser
[2]: http://localhost:8080
