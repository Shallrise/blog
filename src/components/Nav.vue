<<<<<<< HEAD
<template>
<div id="nav">
    <header class="header fixed-top" id="header">
         <div class="page">
             <el-button type="primary" round @click="toggleMen">get</el-button>
              <!-- <el-button type="primary" round @click="fly">飞行</el-button> -->
             <Hide ref="hideRef"></Hide>
        </div>
        </header>
       
 <section class="hero-banner">
         
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div>
                    <div class="hero-inner">
                         <canvas id="canvas"></canvas>
                        <h1>Welcome to blog</h1>
                        <div class="btn-group">
                            <a href="#" class="primary-outline-btn">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="last">
             <div class="move">
            <ul>
                <li>
                    <div class="clound1"></div>
                </li>
                <li>
                    <div class="clound2"></div>
                </li>
                <li>
                    <div class="clound3"></div>
                </li>
                <li>
                    <div class="clound1"></div>
                </li>
                <li>
                    <div class="clound2"></div>
                </li>
                <li>
                    <div class="clound3"></div>
                </li>
            </ul>
        </div>
        </div>
    </section>
</div>
</template>

<script>
import * as THREE from "three";
import Hide from './Hide'

export default {
    components:{
        Hide
    },
     mounted(){
      this.initCa()
    },
    methods: {
        toggleMen(){
            // console.log(this);
            this.$refs.hideRef.toggleMenu();
        },
        fly(){
            this.$router.push('/change');
        },
        initCa(){
        /* DaTouWang URL: www.datouwang.com */
var scene = new THREE.Scene();
// var h = screenHeight + 'px',
//     w = screenWidth + 'px';
// var h=window.innerHeight,
//     w=window.innerWidth;
var aspectRatio = 1,
    fieldOfView = 25,
    nearPlane = .1,
    farPlane = 1000;
var camera = new THREE.PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane);
    var canvas=document.getElementById("canvas");
var renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setSize(300,300);
renderer.shadowMapEnabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);


camera.position.set(-5, 6, 8);

camera.lookAt(new THREE.Vector3(0, 0, 0));

//Ambient light
var light = new THREE.AmbientLight(0xffffff, .5);

var shadowLight = new THREE.DirectionalLight(0xffffff, .5);
shadowLight.position.set(200, 200, 200);
shadowLight.castShadow = true;

var backLight = new THREE.DirectionalLight(0xffffff, .2);
backLight.position.set(-100, 200, 50);
backLight.castShadow = true;
scene.add(backLight);
scene.add(light);
scene.add(shadowLight);

// grassland left
var geometry_left = new THREE.BoxGeometry(2, .2, 2);
var material_grass = new THREE.MeshLambertMaterial({ color: 0xABD66A });
var ground_left = new THREE.Mesh(geometry_left, material_grass);
ground_left.position.set(-1, 0.1, 0);
scene.add(ground_left);
customizeShadow(ground_left, .25) // mess, opacity

//river
var geometry_river = new THREE.BoxGeometry(1, .1, 2);
var material_river = new THREE.MeshLambertMaterial({ color: 0x70B7E3 });
var river = new THREE.Mesh(geometry_river, material_river);
river.position.set(.5, .1, 0);
scene.add(river);
customizeShadow(river, .08) // mess, opacity
    //river bed
var geometry_bed = new THREE.BoxGeometry(1, .05, 2);
var bed = new THREE.Mesh(geometry_bed, material_grass);
bed.position.set(.5, .025, 0);
scene.add(bed);

//grassland right
var geometry_right = new THREE.BoxGeometry(1, .2, 2);
var ground_right = new THREE.Mesh(geometry_right, material_grass);
ground_right.position.set(1.5, 0.1, 0);
scene.add(ground_right);
customizeShadow(ground_right, .25) // mess, opacity
var tree = function() {
   var x = 300;
  var z = 300;
    //trunk
    var material_trunk = new THREE.MeshLambertMaterial({ color: 0x9A6169 });
    var geometry_trunk = new THREE.BoxGeometry(.15, .15, .15);
    var trunk = new THREE.Mesh(geometry_trunk, material_trunk);
    trunk.position.set(x, .275, z);
    trunk.castShadow = true;
    trunk.receiveShadow = true;
    scene.add(trunk);

    //leaves
    var geometry_leaves = new THREE.BoxGeometry(.25, .4, .25);
    var material_leaves = new THREE.MeshLambertMaterial({ color: 0x65BB61 });
    var leaves = new THREE.Mesh(geometry_leaves, material_leaves);
    leaves.position.set(x, .2 + .15 + .4 / 2, z);
    leaves.castShadow = true;
    customizeShadow(leaves, .25) // mess, opacity
    scene.add(leaves);
}

//left
tree(-1.75, -.85);
tree(-1.75, -.15);
tree(-1.5, -.5);
tree(-1.5, .4);
tree(-1.25, -.85);
tree(-1.25, .75);
tree(-.75, -.85);
tree(-.75, -.25);
tree(-.25, -.85);
//right
tree(1.25, -.85);
tree(1.25, .75);
tree(1.5, -.5);
tree(1.75, -.85);
tree(1.75, .35);

function customizeShadow(t, a) { //opacity, target mesh
    var material_shadow = new THREE.ShadowMaterial({ opacity: a });
    var mesh_shadow = new THREE.Mesh(t.geometry, material_shadow);
    mesh_shadow.position.set(t.position.x, t.position.y, t.position.z);
    mesh_shadow.receiveShadow = true;
    scene.add(mesh_shadow);
}


var material_wood = new THREE.MeshLambertMaterial({ color: 0xA98F78 });

//bridge - wood block
for (var i = 0; i < 6; i++) {
    var geometry_block = new THREE.BoxGeometry(.15, .02, .4);
    var block = new THREE.Mesh(geometry_block, material_wood);
    block.position.set(0 + .2 * i, .21, .2);
    block.castShadow = true;
    block.receiveShadow = true;
    scene.add(block);
}
//bridge - rail
var geometry_rail_v = new THREE.BoxGeometry(.04, .3, .04);
var rail_1 = new THREE.Mesh(geometry_rail_v, material_wood);
rail_1.position.set(-.1, .35, .4);
rail_1.castShadow = true;
customizeShadow(rail_1, .2);
scene.add(rail_1);

var rail_2 = new THREE.Mesh(geometry_rail_v, material_wood);
rail_2.position.set(1.1, .35, .4);
rail_2.castShadow = true;
customizeShadow(rail_2, .2);
scene.add(rail_2);

var rail_3 = new THREE.Mesh(geometry_rail_v, material_wood);
rail_3.position.set(-.1, .35, 0);
rail_3.castShadow = true;
customizeShadow(rail_3, .2);
scene.add(rail_3);

var rail_4 = new THREE.Mesh(geometry_rail_v, material_wood);
rail_4.position.set(1.1, .35, 0);
rail_4.castShadow = true;
customizeShadow(rail_4, .2);
scene.add(rail_4);

var geometry_rail_h = new THREE.BoxGeometry(1.2, .04, .04);
var rail_h1 = new THREE.Mesh(geometry_rail_h, material_wood);
rail_h1.position.set(0.5, .42, .4);
rail_h1.castShadow = true;
customizeShadow(rail_h1, .2);
scene.add(rail_h1);

var rail_h2 = new THREE.Mesh(geometry_rail_h, material_wood);
rail_h2.position.set(0.5, .42, 0);
rail_h2.castShadow = true;
customizeShadow(rail_h2, .2);
scene.add(rail_h2);

var Drop = function() {
    this.geometry = new THREE.BoxGeometry(.1, .1, .1);
    this.drop = new THREE.Mesh(this.geometry, material_river);
    this.drop.position.set(Math.random(.1, .9), 0.1, 1 + (Math.random() - .5) * .1);
    scene.add(this.drop);
    this.speed = 0;
    this.lifespan = (Math.random() * 50) + 50;

    this.update = function() {
        this.speed += .0007;
        this.lifespan--;
        this.drop.position.x += (.5 - this.drop.position.x) / 70;
        this.drop.position.y -= this.speed;
    }
}
var drops = [];

var count = 0;
var render = function() {
    requestAnimationFrame(render);
    if (count % 3 == 0) {
        for (var i = 0; i < 5; i++) {
            drops.push(new Drop());
        }
    }
    count++;
    for (var j = 0; j < drops.length; j++) {
        drops[j].update();
        if (drops[j].lifespan < 0) {
            scene.remove(scene.getObjectById(drops[j].drop.id));
            drops.splice(j, 1);
        }
    }
    renderer.render(scene, camera);
}
render();
      },
  
    },
  
}
</script>

<style src="../assets/css/nav.css" scoped>

=======
<template>
<div id="nav">
    <header class="header fixed-top" id="header">
         <div class="page">
             <el-button type="primary" round @click="toggleMen">登录</el-button>
             <Hide ref="hideRef"></Hide>
        </div>
        </header>
 <section class="hero-banner">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div>
                    <div class="hero-inner">
                        <h1>Welcome to blog</h1>
                        <div class="btn-group">
                            <a href="#" class="primary-outline-btn">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="last">
             <div class="move">
            <ul>
                <li>
                    <div class="clound1"></div>
                </li>
                <li>
                    <div class="clound2"></div>
                </li>
                <li>
                    <div class="clound3"></div>
                </li>
                <li>
                    <div class="clound1"></div>
                </li>
                <li>
                    <div class="clound2"></div>
                </li>
                <li>
                    <div class="clound3"></div>
                </li>
            </ul>
        </div>
        </div>
    </section>
</div>
</template>

<script>
import Hide from './Hide'
export default {
    components:{
        Hide
    },
    methods: {
        toggleMen(){
            // console.log(this);
            this.$refs.hideRef.toggleMenu();
        }
    },
  
}
</script>

<style src="../assets/css/nav.css" scoped>

>>>>>>> 7454ae7dc0c594d388f31b6970a622dfed507a79
</style>