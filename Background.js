import * as THREE from 'https://cdn.skypack.dev/three@0.150.1';

let scene, camera, renderer, particles;
const PARTICLE_COUNT = 1000;
const mouse = new THREE.Vector2(-10, -10); // 초기값은 화면 밖

init();
animate();

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 200;

  // 입자(Particle) 위치 생성
  const geometry = new THREE.BufferGeometry();
  const positions = [];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    positions.push((Math.random() - 0.5) * 500); // 입자 배치 범위 확대
    positions.push((Math.random() - 0.5) * 500);
    positions.push((Math.random() - 0.5) * 500);
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    color: new THREE.Color(0x00ff00),  // 네온 그린
    size: 1.5,   // 입자 크기
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
    transparent: true,
  });

  particles = new THREE.Points(geometry, material);
  scene.add(particles);

  renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('bg-canvas'),
    alpha: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);

  window.addEventListener('resize', onWindowResize);
  window.addEventListener('mousemove', onMouseMove);
}

function onMouseMove(e) {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);

  const positions = particles.geometry.attributes.position.array;
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const i3 = i * 3;
    const dx = mouse.x * 100 - positions[i3];
    const dy = mouse.y * 100 - positions[i3 + 1];
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 30) {
      positions[i3] -= dx * 0.1;  // 입자가 마우스를 따라 이동
      positions[i3 + 1] -= dy * 0.1;
    }
  }

  particles.geometry.attributes.position.needsUpdate = true;
  renderer.render(scene, camera);
}
