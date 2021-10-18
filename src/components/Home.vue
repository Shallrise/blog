<template>
  <div id="io">
    <Nav></Nav>
    <Head></Head> 
    <Message></Message>
    <Change></Change>
  </div>
</template>

<script>
import Head from './Head.vue'
import Nav from './Nav'
import Change from './Change'
import Message from './Message'
export default {
    name:'Home',
  components: {
    Nav,
    Head,
    Change,
    Message,
  }
}
</script>

<style>
#io{
  margin:0;
  padding:0;
  line-height:2;
  overflow-y:hidden;
  /* display: flex; */
   background-image: -moz-linear-gradient(0deg, rgb(204, 244, 255), rgb(255, 204, 233));
    background-image: -webkit-linear-gradient(0deg, rgb(204, 244, 255), rgb(255, 204, 233));
    background-image: linear-gradient(0deg, rgb(204, 244, 255), rgb(255, 204, 233));
}

</style>
