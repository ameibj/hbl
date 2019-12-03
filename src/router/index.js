import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'guide',
      component: ()=> import ('@/components/Guide/Guide.vue')
    },
      {
          path: '/home',
          name: 'home',
          component: ()=> import ('@/components/Home/HomePage.vue'),
          children:[
              {
                  path: 'pic',
                  name: 'pic',
                  component: ()=> import ('@/components/Home/Floder/PicPage.vue')
              }  ,
              {
                  path: 'player',
                  name: 'player',
                  component: ()=> import ('@/components/Home/Floder/PlayerPage.vue')
              } ,
              {
                  path: 'blackboard',
                  name: 'blackboard',
                  component: ()=> import ('@/components/Home/Floder/Blackboard.vue')
              },
              {
                  path: 'showstation',
                  name: 'showstation',
                  component: ()=> import ('@/components/Home/Floder/ShowStation.vue')
              },
              {
                  path: 'test',
                  name: 'test',
                  component: ()=> import ('@/components/Home/Interactions/TestPage.vue')
              },
              {
                  path: 'vote',
                  name: 'vote',
                  component: ()=> import ('@/components/Home/Interactions/VotePage.vue')
              },
              {
                  path: 'discuss',
                  name: 'discuss',
                  component: ()=> import ('@/components/Home/Interactions/DiscussPage.vue')
              },
              {
                  path: 'question',
                  name: 'question',
                  component: ()=> import ('@/components/Home/Interactions/QuestionPage.vue')
              }
          ]

      }
  ]
})
