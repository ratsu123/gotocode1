// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require('~/main.css')
import 'tw-elements';
import fonts from './assets/css/fonts.css'
import components from './components/UI/index'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  // Vue.component('Layout', DefaultLayout)
  components.forEach(element => {
    Vue.component(element.name, element)
  });
}
