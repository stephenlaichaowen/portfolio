<template>
  <div>
    <Navbar />
    <Hero v-if="$store.state.homePage" />
    <b-container>
      <b-row class="wrapper">
        <b-col lg="3" md="12" class="col-left">
          <Sidebar />
        </b-col>
        <b-col lg="9" md="12" class="content">
          <Nuxt />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap');

:root {
  --primary: #278f6e;
  --secondary: #374A59;
  --light: #afafaf;
  --item: #707070;
  --subtitle: #313131;
  --bottom: 1px solid #efefef;
  --brDefault: 30px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  font-family: 'Rubik', sans-serif;
  background: var(--bg-color);
}

main {
  display: flex;
}

.col-left {
  padding-left: 0;
}

.wrapper {
  padding-top: 50px;
}

@media (max-width: 992px) {
  .content {
    padding-top: 30px;
  }
  .wrapper {
    padding-top: 50px;
  }
}

@media (max-width: 768px) {
  .wrapper {
    padding-top: 0;
  }
  .col-left {
    padding-right: 0;
  }
}
</style>
