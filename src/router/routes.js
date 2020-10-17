import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
const Home = () => import(/* webpackChunkName: "dashboard" */"@/pages/Home.vue");
const Profile = () => import(/* webpackChunkName: "common" */ "@/pages/Profile.vue");
const Calendar = () => import(/* webpackChunkName: "common" */"@/pages/Calendar.vue");
const Course = () => import(/* webpackChunkName: "common" */ "@/pages/Course.vue");

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "home",
        component: Home
      },
      {
        path: "profile",
        name: "profile",
        component: Profile
      },
      {
        path: "calendar",
        name: "calendar",
        component: Calendar
      },
      {
        path: "course",
        name: "course",
        component: Course
      },
    ]
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
