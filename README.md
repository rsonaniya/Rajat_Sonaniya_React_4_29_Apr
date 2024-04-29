# React-Router Second Project Integrated with Redux-Toolkit

## Folder Structure

in Src app folder was created in order to keep the redux store
in features folder, postSlice.js has been created to hold actions and provider a reducer to the store,
in postSlice, three reducers have been created: fetchPostsStart,fetchPostsSuccessfetchPostsError

fetchPosts function has been defined to handle async fetchdata, as thunk is used by default by Redux-toolkit, there was no seperate requirement to manually apply it.
index.js was wrapped with Provider by providing store value to ensure the store is always accessible in every component



## Available Routes

homeRoute = '/", when the route is set as homeroute, AllPosts component is rendered 
when route is /Post/id, the user is redirected to post detail page
when a wrong route is entered by user, NotFount page is rendered

in Postdetails component, id of the post is being read dynamically from the url using useParams hook of react-router-dom

A close button is also added in the postDetail page in order to allow user to come back to the homepage 

## Deployment on netlify:

The Production build of this site has been hosted on netlify on URL: https://rs-socialmedia.netlify.app/
