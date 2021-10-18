<<<<<<< HEAD
<template>
    <div class="rMenu" :class="{active:isShow}">
        <div class="card">
            <div class="brief">
                    <div class="brief-login" @click="gologin">
                    <img src="../assets/images/head-picture.jpg" alt="avatar">
                </div> 
                <div class="brief-name">Shallrises</div>
            </div>
            <div class="classify">
                <div class="cla-a">
                    <div class="cla-a-h">文章</div>
                    <div class="cla-a-n">17</div>
                </div>
                <div class="cla-a">
                    <div class="cla-a-h">分类</div>
                    <div class="cla-a-n">3</div>
                </div>
                <div class="cla-a">
                    <div class="cla-a-h">标签</div>
                    <div class="cla-a-n">3</div>
                </div>
            </div>
            <a href="https://github.com/Shallrise" class="follow">
            <span style="padding-left:0.5rem">Follow me</span></a>
        </div>
    </div>
</template>

<script>
export default {
      data() {
        return{ isShow: false}
           
        },
        methods: {
            toggleMenu: function() {
                this.isShow = !this.isShow;
            },
            gologin(){
                let routeData = this.$router.resolve({
                    name:'login'
                });
                window.open(routeData.href,'_blank');
            }
        },
    //     watch: {
    //         $route(to,from){
    //             if(to.path!==from.path)
    //             this.$router.go(0);
    //         }
    // }
}


</script>

<style src="../assets/css/hide.css" scoped>
    

=======
<template>
    <div class="rMenu" :class="{active:isShow}">
        <div class="card">
            <div class="brief">
                    <div class="brief-login" @click="gologin">
                    <img src="../assets/images/head-picture.jpg" alt="avatar">
                </div> 
                <div class="brief-name">Shallrises</div>
            </div>
            <div class="classify">
                <div class="cla-a">
                    <div class="cla-a-h">文章</div>
                    <div class="cla-a-n">17</div>
                </div>
                <div class="cla-a">
                    <div class="cla-a-h">分类</div>
                    <div class="cla-a-n">3</div>
                </div>
                <div class="cla-a">
                    <div class="cla-a-h">标签</div>
                    <div class="cla-a-n">3</div>
                </div>
            </div>
            <a href="https://github.com/Shallrise" class="follow">
            <span style="padding-left:0.5rem">Follow me</span></a>
        </div>
    </div>
</template>

<script>
export default {
      data() {
        return{ isShow: false}
           
        },
        methods: {
            toggleMenu: function() {
                this.isShow = !this.isShow;
            },
            gologin(){
                let routeData = this.$router.resolve({
                    name:'login'
                });
                window.open(routeData.href,'_blank');
            }
        },
    //     watch: {
    //         $route(to,from){
    //             if(to.path!==from.path)
    //             this.$router.go(0);
    //         }
    // }
}


</script>

<style src="../assets/css/hide.css" scoped>
    

>>>>>>> 7454ae7dc0c594d388f31b6970a622dfed507a79
</style>