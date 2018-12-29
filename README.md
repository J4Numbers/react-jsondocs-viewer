# Running the Documentation Server

In order to view the compiled documentation from the Trap Quest `story.ni`
file, you must first have installed the following programs:

+ [Python][1]
+ [Node.js][2]

Once these programs are installed, open a command line in the `Source/`
directory and type: `python InformDocs.py`.

This will generate a JSON file of all the documentation that was contained
within the story.ni file which will be rendered in the website.

Now type `cd docs` to get into this directory, and run the following:

    npm install
    npm start

The first command installs all the necessary packages for the documentation
server to be rendered while the second starts up the webserver.

Go to [localhost:8080][3] to see the server.

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

[1]: https://www.python.org/
[2]: https://nodejs.org/
[3]: http://localhost:8080
