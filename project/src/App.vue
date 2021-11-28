<template>
  <div id="app">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/astronomy">Astronomy</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  font-size: 18px;
  color: #2c3e50;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0px 60px;
}

#nav a.router-link-exact-active {
  color: white;
}
</style>
