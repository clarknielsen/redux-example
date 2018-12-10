# Super Simple Redux Example

Based off of Valentino Gagliardi's tutorial, [React Redux Tutorial for Beginners](https://www.valentinog.com/blog/react-redux-tutorial-beginners/).

This is a pure Redux example integrated into a small React app. No `react-redux` add-on here. I'm not necessarily following best practices, because I wanted to simplify the file structure as much as possible to make it more clear.

All Redux-specific files are in `src/store/`. The `App.js` component only imports the store, because it only listens (subscribes) for changes. The `Child.js` component imports the store _and_ action function, because it sends updates (dispatches) to the store.
