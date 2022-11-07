<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/OqueSou">O que sou</router-link> |
    <router-link to="/teste">O que faco</router-link> |
    <router-link to="/Hobbies">Hobbies</router-link>
  </nav>
  <router-view/>
  <footer>
    <MDBFooter :text="['center', 'lg-start', 'muted']">
      <section class="mb-4"><!-- Facebook -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
          ><MDBIcon iconStyle="fab" icon="facebook-f"
        /></a>
        <!-- Twitter -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
          ><MDBIcon iconStyle="fab" icon="twitter"
        /></a>
        <!-- Google -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
          ><MDBIcon iconStyle="fab" icon="google"
        /></a>
        <!-- Instagram -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
          ><MDBIcon iconStyle="fab" icon="instagram"
        /></a>
        <!-- Linkedin -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
          ><MDBIcon iconStyle="fab" icon="linkedin-in"
        /></a>
        <!-- Github -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
          ><MDBIcon iconStyle="fab" icon="github"></MDBIcon
        ></a>
      </section>
    </MDBFooter>
  </footer>
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
