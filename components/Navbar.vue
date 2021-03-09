<template>
  <div class="main-header">
    <b-container>
      <b-row>
        <b-col cols="12" class="navbar">
          <NuxtLink to="/">
            <div class="logo">Stephen Lai</div>
          </NuxtLink>
          <div class="menu">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/blog">Blog</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink to="/work">My Work</NuxtLink>
            <!-- <NuxtLink to="/contact">Contact</NuxtLink> -->
            <select>
              <option value="eng">English</option>
              <option value="cn">Chinese</option>
            </select>
            <div class="dark-box">
              <svg class="w-6 h-6 dark" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
            </div>
          </div>
          <span class="hamburger" @click="isToggle = !isToggle">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </span>     
          <Dropdown v-if="isToggle" />     
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isToggle: false
    }
  },
  methods: {
    toggleDropdown() {
      isToggle = !isToggle

    }
  },
}
</script>

<style scoped>
.main-header {
  border-bottom: var(--bottom);
  /* margin-bottom: 50px; */
}
.navbar {
  height: 112px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid var(--primary); */
  position: relative;
}
.logo {
  font-weight: 400;
  font-size: 38px;
  color: var(--primary);
  text-transform: uppercase;
}
.menu {
  width: 525px;
  display: flex;
  justify-content: space-between;
}
.hamburger {
  height: 17px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  display: none;
}
.hamburger .line {
  width: 22px;
  height: 3px;
  background: #454149;
}
.dark-box {
  display: flex;
  align-items: center;
}
.dark {
  width: 30px;
  height: 30px;
  padding: 3px;
  background: #c3e6cb;
  color: white;
  border-radius: 50%;
}
@media (max-width: 992px) {
  .navbar {
    height: 90px;
  }
  .logo {
    font-size: 32px;
  }  
  .menu {
    display: none;
  }  
  .hamburger {
    display: flex;
  }
}
@media (max-width: 768px) {
  .navbar {
    height: 70px;
  }
  .logo {
    font-size: 24px;
  }
}
@media (max-width: 575px) {
  .navbar {
    width: 100vw;
  }
}
a {
  text-decoration: none;
  color: #707070;
  font-size: 22px;
  font-weight: 300;
}
a.nuxt-link-exact-active {
  color: var(--primary);
  font-weight: 400;
}
</style>
