<template>
  <div class="main-header">
    <b-container>
      <b-row>
        <b-col cols="12" class="navbar">
          <NuxtLink to="/">
            <div class="logo">{{ $t('title') }}</div>
          </NuxtLink>
          <div class="menu-right">
            <div class="menu">
              <NuxtLink to="/">{{ $t('navbarHome') }}</NuxtLink>
              <NuxtLink to="/blog">{{ $t('navbarBlog') }}</NuxtLink>
              <NuxtLink to="/about">{{ $t('navbarAbout') }}</NuxtLink>
              <NuxtLink to="/work">{{ $t('navbarWork') }}</NuxtLink>
              <LangSwitcher />
              <div class="dark-box" @click="toggleMode">
              <svg
                :class="{ 'dark-mode': isDarkmode }"
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                ></path>
              </svg>
            </div>
            </div>
            <span class="hamburger" @click="isToggle = !isToggle">
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
            </span>
            
          </div>
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
      selected: '',
      isToggle: false,
      isDarkmode: false,
    }
  },
  methods: {
    toggleDropdown() {
      isToggle = !isToggle
    },
    toggleMode() {
      this.isDarkmode = !this.isDarkmode
      if (this.isDarkmode) console.log(`mode: Dark`)
      if (!this.isDarkmode) console.log(`mode: Light`)
    },
  },
  mounted() {
    if (this.isDarkmode) console.log(`mode: Dark`)
    if (!this.isDarkmode) console.log(`mode: Light`)
  },
}
</script>

<style scoped>
.menu-right {
  display: flex;
  align-items: center;
}
.main-header {
  border-bottom: var(--bottom);
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
  /* margin-right: 0.5rem; */
}
.hamburger .line {
  width: 22px;
  height: 3px;
  background: #454149;
}
.dark-box {
  display: flex;
  align-items: center;
  /* margin-left: 1rem; */
}
.dark-mode {
  background: #c3e6cb;
  transition: all 0.3s ease-in;
}
svg {
  width: 30px;
  height: 30px;
  padding: 3px;
  background: var(--primary);
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
    /* margin-right: 0; */
  }
  svg {
    width: 20px;
    height: 20px;
    padding: 2px;
    background: #c3e6cb;
    color: white;
    border-radius: 50%;
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
  color: var(--item);
  font-size: 22px;
  font-weight: 300;
}
a.nuxt-link-exact-active {
  color: var(--primary);
  font-weight: 400;
}
</style>
