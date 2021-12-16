<template>
<div id="article">
      <el-table :data="articles">
      <el-table-column prop="title" label="标题"> </el-table-column>
      <el-table-column prop="body" label="内容"> </el-table-column>
    </el-table>
</div>
</template>

<script>
export default {
    data(){
        return{
            articles:[]
        }
    },
   methods:{
        fetch(){
        this.$http.get("/article").then((res=>{
            this.articles=res.data;
        }))
    },
   },
    created() {
      this.fetch()
  },
}
</script>

<style scoped>
 #article{
     width: 98%;
     height: 200px;
     position:relative;
     margin:auto;
     display: flex;
     /* flex:1; */
     /* background: rgba( 255, 255, 255, 0.25 ); */
     background-color: #6699CC;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
 }

</style>