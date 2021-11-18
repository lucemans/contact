# Resume

This is a revamp of the original `resume.lvk.sh`-resume. The repository belonging to that domain can be found at [lucemans/resume-react](https://github.com/lucemans/resume-react)

## Design Decisions

The complexities within this project aswell as the wish to maintain a persistent style between related websites yield that the following requirements have been set:

### React

The Usage of React  seems pretty self-explainatory, react is an awesome framework that comes packes with a ton of features.
Aswell as its shorthand function syntax apired with the fact that my recent projects have been mostly react-dominant, I have chosen to use react for this iteration.

### Why not NextJS or React-Static

Server-side rendering is a thing, and its great. I won't get around that. But personally for the simplicity of this page, aswell as the fact that there is practically no need for server-side rendered content, we will be using plain react here. Other sites do require the usage of static/server-side rendering, for example [luc.computer](https://luc.computer) and [luc.contact](https://luc.contact), which both rely on [react-static](https://github.com/react-static/react-static) to function to their full extend.
