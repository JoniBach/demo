<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
	import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
	import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
	import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
	import { Raycaster, Vector2 } from 'three';

	/*-----------------------------------------------------
	 * Global References & State
	 *-----------------------------------------------------*/
	let canvas;
	let scene, camera, renderer, composer, controls;
	let raycaster = new Raycaster();
	let mouse = new Vector2();
	let clickedObject = null;
	let hoveredObject = null;
	let hasMoved = false;

	// Overlay text reference
	let overlay;
	// Track if user has interacted and overlay fade-out has been triggered
	let userHasInteracted = false;

	/*-----------------------------------------------------
	 * Scene, Camera, Renderer, and Composer Setup
	 *-----------------------------------------------------*/
	function initScene() {
		scene = new THREE.Scene();
		// Add fog to fade the floor into the distance
		scene.fog = new THREE.Fog(0x0a0a2a, 10, 100);
		scene.background = new THREE.Color(0x0a0a2a); // Scene background color
	}

	function initCamera() {
		camera = new THREE.PerspectiveCamera(
			100, // Wider field of view
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		camera.position.set(0, 0, 50);
	}

	function initRenderer() {
		renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setPixelRatio(window.devicePixelRatio);
	}

	function initComposer() {
		composer = new EffectComposer(renderer);
		const renderPass = new RenderPass(scene, camera);
		composer.addPass(renderPass);

		// Bloom pass for glow effects
		const bloomPass = new UnrealBloomPass(
			new THREE.Vector2(window.innerWidth, window.innerHeight),
			0.2, // strength
			0.4, // radius
			0.3 // threshold
		);
		composer.addPass(bloomPass);
	}

	/*-----------------------------------------------------
	 * Floor & Basic Geometry
	 *-----------------------------------------------------*/
	function addFloor() {
		const floorGeometry = new THREE.CircleGeometry(150, 64);
		const floorMaterial = new THREE.MeshStandardMaterial({
			color: 0x222222,
			roughness: 1
		});
		const floor = new THREE.Mesh(floorGeometry, floorMaterial);
		floor.rotation.x = -Math.PI / 2;
		floor.position.y = -10;
		floor.material.color.set(0x666666); // match floor color
		scene.add(floor);
	}

	/*-----------------------------------------------------
	 * Controls Setup
	 *-----------------------------------------------------*/
	function initControls() {
		controls = new OrbitControls(camera, renderer.domElement);
		controls.enableDamping = true;
		controls.dampingFactor = 0.1;
		controls.minPolarAngle = Math.PI / 4; // Prevent going below the ground
		controls.maxPolarAngle = Math.PI / 2; // Prevent flipping the view
		controls.enablePan = false; // Disable panning
		controls.screenSpacePanning = false;
		controls.minAzimuthAngle = 0;
		controls.maxAzimuthAngle = Math.PI / 2;
		controls.minDistance = 10;
		controls.maxDistance = 50;
		controls.update();
	}

	/*-----------------------------------------------------
	 * Overlay Text
	 *-----------------------------------------------------*/
	function initOverlayText() {
		overlay = document.createElement('div');
		overlay.id = 'helper_text';
		overlay.style.position = 'absolute';
		overlay.style.top = '10%';
		overlay.style.left = '50%';
		overlay.style.transform = 'translateX(-50%)';
		overlay.style.color = 'white';
		overlay.style.fontSize = '18px';
		overlay.style.fontFamily = 'Courier New, monospace';
		overlay.style.zIndex = '1000';
		overlay.style.opacity = '0';
		overlay.style.transition = 'opacity 1s'; // fade transition
		overlay.style.textAlign = 'center';
		overlay.innerText = 'click signs to interact, drag to rotate, scroll to zoom';

		document.body.appendChild(overlay);

		// Fade in
		requestAnimationFrame(() => {
			overlay.style.opacity = '1';
		});
	}

	/*-----------------------------------------------------
	 * Fade-Out Overlay on First User Interaction
	 *-----------------------------------------------------*/
	function handleFirstInteraction() {
		if (!userHasInteracted) {
			userHasInteracted = true;
			// Fade out overlay 1 second after first interaction
			setTimeout(() => {
				if (overlay) {
					overlay.style.opacity = '0';
				}
			}, 1000);
		}
	}

	/*-----------------------------------------------------
	 * Event Listeners & Raycasting
	 *-----------------------------------------------------*/
	function handleMouseEnter(event) {
		// handleFirstInteraction(); // triggers overlay fade-out if first time
		mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
		mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
		raycaster.setFromCamera(mouse, camera);
		const intersects = raycaster.intersectObjects(scene.children, true);
		if (intersects.length > 0) {
			hoveredObject = intersects[0].object;
		}
	}

	function handleScroll(event) {
		handleFirstInteraction(); // triggers overlay fade-out if first time
	}

	function handleMouseMove() {
		// handleFirstInteraction(); // triggers overlay fade-out if first time
		hasMoved = true;
		hoveredObject = null;
	}

	function handleMouseDown(event) {
		handleFirstInteraction(); // triggers overlay fade-out if first time
		hasMoved = false;
		mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
		mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
		raycaster.setFromCamera(mouse, camera);
		const intersects = raycaster.intersectObjects(scene.children, true);
		if (intersects.length > 0) {
			clickedObject = intersects[0].object;
		}
	}

	function handleMouseUp(event) {
		handleFirstInteraction(); // triggers overlay fade-out if first time
		if (!clickedObject) return;

		mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
		mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
		raycaster.setFromCamera(mouse, camera);

		const intersects = raycaster.intersectObjects(scene.children, true);
		if (intersects.length > 0) {
			let newClickedObject = intersects[0].object;
			if (!hasMoved && clickedObject.userData.groupName === newClickedObject.userData.groupName) {
				clickedObject = null;
				while (newClickedObject.parent && !newClickedObject.userData.groupName) {
					newClickedObject = newClickedObject.parent;
				}
				if (newClickedObject.userData.groupName) {
					const groupName = newClickedObject.userData.groupName;
					const url = decodeURIComponent(groupName.replace('sign_', ''));
					window.open(url, '_blank');
				}
			} else {
				clickedObject = null;
			}
		}
	}

	function addEventListeners() {
		window.addEventListener('mouseenter', handleMouseEnter);
		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('mousedown', handleMouseDown);
		window.addEventListener('mouseup', handleMouseUp);

		window.addEventListener('resize', onWindowResize);
	}

	function removeEventListeners() {
		window.removeEventListener('mouseenter', handleMouseEnter);
		window.removeEventListener('mousemove', handleMouseMove);
		window.removeEventListener('mousedown', handleMouseDown);
		window.removeEventListener('mouseup', handleMouseUp);
		window.removeEventListener('resize', onWindowResize);
	}

	/*-----------------------------------------------------
	 * Responsive Handling
	 *-----------------------------------------------------*/
	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
		composer.setSize(window.innerWidth, window.innerHeight);
	}

	/*-----------------------------------------------------
	 * GLTF Loading & Model Setup
	 *-----------------------------------------------------*/
	function loadModel() {
		const loader = new GLTFLoader();
		loader.load(
			'/DIORAMA 3.2.gltf',
			(gltf) => {
				gltf.scene.position.set(0, -8, 0);
				scene.add(gltf.scene);

				// Traverse and store references
				const materials = [];
				const nodes = [];
				gltf.scene.traverse((child) => {
					if (child.isMesh) {
						if (Array.isArray(child.material)) {
							child.material.forEach((mat) => {
								if (!materials.includes(mat)) materials.push(mat);
							});
						} else if (child.material && !materials.includes(child.material)) {
							materials.push(child.material);
						}
					}
					nodes.push(child);
				});

				// Setup sign interaction
				setupSigns(nodes);

				// Lighting & Glow
				addSpotLight(scene);
				addNeonGlow(nodes, scene);
				addLanternLights(nodes, scene);
				addStreetLights(nodes, scene);
			},
			undefined,
			(error) => {
				console.error('Error loading GLTF model:', error);
			}
		);
	}

	/*-----------------------------------------------------
	 * Signs
	 *-----------------------------------------------------*/
	function setupSigns(nodes) {
		const signNodes = nodes.filter((node) => node.name && node.name.startsWith('sign_'));
		signNodes.forEach((group) => {
			group.children.forEach((child) => {
				child.userData.groupName = group.name; // Store the sign group name in userData
			});
		});
	}

	/*-----------------------------------------------------
	 * Lights
	 *-----------------------------------------------------*/
	function addSpotLight(scene) {
		const spotlight = new THREE.SpotLight(0xffffff, 5);
		spotlight.target.position.set(3.5, 12, -9);
		spotlight.position.set(3.5, 9, -8);
		spotlight.angle = Math.PI / 3;
		spotlight.penumbra = 0.1;
		spotlight.decay = 2;
		spotlight.distance = 5;
		spotlight.castShadow = true;

		spotlight.shadow.mapSize.width = 100;
		spotlight.shadow.mapSize.height = 100;
		spotlight.shadow.camera.near = 10;
		spotlight.shadow.camera.far = 200;
		spotlight.shadow.camera.fov = 30;

		scene.add(spotlight.target);
		scene.add(spotlight);
	}

	function addNeonGlow(nodes, scene) {
		const neonNodes = nodes.filter((node) => node.material && node.material.name === 'sign_neon');
		const neonColors = [
			new THREE.Color(0xff0000),
			new THREE.Color(0x00ff00),
			new THREE.Color(0x0000ff),
			new THREE.Color(0xffff00),
			new THREE.Color(0xff00ff),
			new THREE.Color(0x00ffff),
			new THREE.Color(0xffa500),
			new THREE.Color(0x800080)
		];

		neonNodes.forEach((node, i) => {
			if (node.material) {
				node.material = node.material.clone();
				node.material.color = new THREE.Color(0x000000);
				node.material.emissive = neonColors[i % neonColors.length];
				node.material.emissiveIntensity = 10;

				// Add point light at neon sign's position
				const neonLight = new THREE.PointLight(neonColors[i % neonColors.length], 2, 10);
				const worldPosition = new THREE.Vector3();
				node.getWorldPosition(worldPosition);
				neonLight.position.copy(worldPosition);
				scene.add(neonLight);
			}
		});
	}

	function addLanternLights(nodes, scene) {
		const lanternNodes = nodes.filter(
			(node) => node.material && node.material.name === 'lantern_red'
		);
		lanternNodes.forEach((node) => {
			if (node.material) {
				node.material = node.material.clone();
				node.material.emissiveIntensity = 4;
			}
			const lanternLight = new THREE.PointLight(0xff0000, 2, 10);
			const worldPosition = new THREE.Vector3();
			node.getWorldPosition(worldPosition);
			lanternLight.position.copy(worldPosition);
			scene.add(lanternLight);
		});
	}

	function addStreetLights(nodes, scene) {
		const streetLightNodes = nodes.filter(
			(node) => node.material && node.material.name === 'street_light'
		);
		streetLightNodes.forEach((node) => {
			const streetLight = new THREE.PointLight(0xffffff, 10, 30);
			const worldPosition = new THREE.Vector3();
			node.getWorldPosition(worldPosition);

			// Adjust position slightly
			worldPosition.y -= 2;
			worldPosition.x -= 2;
			worldPosition.z -= 2;

			streetLight.position.copy(worldPosition);
			scene.add(streetLight);
		});
	}

	/*-----------------------------------------------------
	 * Main Animate Loop
	 *-----------------------------------------------------*/
	function animate() {
		requestAnimationFrame(animate);
		controls.update();
		composer.render();
	}

	/*-----------------------------------------------------
	 * onMount Initialization
	 *-----------------------------------------------------*/
	onMount(() => {
		initScene();
		initCamera();
		initRenderer();
		initComposer();
		initControls();
		initOverlayText();
		addFloor();
		addEventListeners();
		loadModel();
		animate();

		// Cleanup
		return () => {
			removeEventListeners();
			renderer.dispose();
			controls.dispose();
			composer.dispose();
		};
	});
</script>

<canvas bind:this={canvas}></canvas>

<style>
	canvas {
		display: block;
		width: 100vw;
		height: 100vh;
		margin: 0;
		overflow: hidden;
	}
	:global(body) {
		margin: 0;
		overflow: hidden;
	}
</style>
