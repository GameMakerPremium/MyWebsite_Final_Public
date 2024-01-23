import * as THREE from 'https://unpkg.com/three@110.0.0/build/three.module.js';
import { OBJLoader } from 'https://unpkg.com/three@110.0.0/examples/jsm/loaders/OBJLoader.js';

// Set up scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('model-container').appendChild(renderer.domElement);

// Load your .obj model
var loader = new OBJLoader();
var model;

loader.load('free_head.obj', function (object) {
    model = object;
    scene.add(model);
});

// Set camera position
camera.position.z = 5;

// Animation function
function animate() {
    requestAnimationFrame(animate);

    // Rotate the model around the z-axis
    if (model) {
        model.rotation.z += 0.01;
    }

    renderer.render(scene, camera);
}

// Call the animate function
animate();

// Handle scroll event
window.addEventListener('scroll', function () {
    // Rotate the model based on the scroll position
    if (model) {
        model.rotation.z = window.scrollY * 0.001;
    }
});