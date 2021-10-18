<template>
  <div id="app">
<<<<<<< HEAD
  <router-view></router-view>
=======
    <Nav></Nav>
    <Head></Head> 
    <Message></Message>
    <Change></Change>
>>>>>>> 7454ae7dc0c594d388f31b6970a622dfed507a79
  </div>
</template>

<script>
<<<<<<< HEAD

export default {
  name: 'App',
=======
import Head from './components/Head'
import Nav from './components/Nav'
import Change from './components/Change'
import Message from './components/Message'


export default {
  name: 'App',
  components: {
    Nav,
    Head,
    Change,
    Message,
  }
>>>>>>> 7454ae7dc0c594d388f31b6970a622dfed507a79
  
}
</script>

<style>
#app{
  margin:0;
  padding:0;
  line-height:2;
  /* display: flex; */
}
</style>
