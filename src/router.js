import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "@/store"

import Navbar from '@/views/Navbar.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Work from '@/views/Work.vue'
import WorkContent from '@/views/WorkContent.vue'
import Resume from '@/views/Resume.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      navbar: Navbar,
      main: Home
    }
  },
  {
    path: '/about',
    name: 'About',
    components: {
      navbar: Navbar,
      main: About
    }
  },
  {
    path: '/work',
    name: 'Work',
    components: {
      navbar: Navbar,
      main: Work
    }
  },
  {
    path: '/work/:project',
    name: 'WorkContent',
    components: {
      navbar: Navbar,
      main: WorkContent
    },
    props: {main: true},
    beforeEnter: (to, from, next) => {
      store.dispatch("fetchApiContent", to.params.project)
        .then(() => {
          // Proceed to route
          next();
        })
        .catch(() => {
          // Redirect to home if project doesn't exist
          next({path: '/'});
        })
    }
  },
  {
    path: '/resume',
    name: 'Resume',
    components: {
      navbar: Navbar,
      main: Resume
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    // Redirect to home if specified route doesn't exist
    next({path: '/'});
  } else {
    // Proceed to route
    next();
  }
})

export default router
