<template>
  <head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
</head>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/OqueSou">O que sou</router-link> |
    <router-link to="/teste">O que faco</router-link> |
    <router-link to="/Hobbies">Hobbies</router-link>
  </nav>
  <router-view/>
  <MDBFooter :text="['center', 'lg-start', 'muted']">

    <section>

      <div class="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
       
      </div>

      <div>
        <a href="https://www.facebook.com" class="me-4 text-reset">
          <i class="fa fa-facebook-official"></i>
  
        </a>
        <a href="" class="me-4 text-reset">

          <MDBIcon iconStyle="fab" icon="fab fa-android"></MDBIcon>
        </a>
        
        <a href="" class="me-4 text-reset">
          <MDBIcon iconStyle="fab" icon="google"></MDBIcon>
        </a>

        <a href="https://www.instagram.com" class="me-4 text-reset">
          <i class="fa fa-instagram"></i>
        </a>


        <a href="https://www.github.com" class="me-4 text-reset">
          <i class="fa fa-github"></i>
    
        </a>
      </div>
    </section>

  </MDBFooter>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 60px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}


footer {
    bottom: 0;
    position: sticky;
    height: auto;
}


</style>
<script>

import {
  MDBFooter,
  MDBIcon
} from 'mdb-vue-ui-kit';



export default {

components: {
 
  MDBFooter,
  MDBIcon,
  
}
}
</script>