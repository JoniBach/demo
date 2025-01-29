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

	let userHasInteracted = false; // for helper text fade-out
	let overlay; // helper text reference
	let loadingOverlay; // "Loading..." overlay reference
	let modelLoaded = false; // track GLTF loading status

	// Camera animation states
	let cameraAnimating = false;
	let targetCameraZ = 50; // the normal "close up" position
	let animationSpeed = 0.03; // tweak for faster/slower zoom-in animation

	/*-----------------------------------------------------
	 * Scene, Camera, Renderer, and Composer Setup
	 *-----------------------------------------------------*/
	function initScene() {
		scene = new THREE.Scene();
		// Add fog to fade floor into the distance
		scene.fog = new THREE.Fog(0x0a0a2a, 10, 100);
		scene.background = new THREE.Color(0x0a0a2a);
	}

	function initCamera() {
		camera = new THREE.PerspectiveCamera(
			100, // Wider field of view
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);

		// Start the camera far back so model is hidden by fog
		camera.position.set(0, 0, 300);
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
		const floorGeometry = new THREE.CircleGeometry(300, 64);
		const floorMaterial = new THREE.MeshStandardMaterial({
			color: 0x222222,
			roughness: 1
		});
		const floor = new THREE.Mesh(floorGeometry, floorMaterial);
		floor.rotation.x = -Math.PI / 2;
		floor.position.y = -10;
		floor.material.color.set(0x666666);
		scene.add(floor);
	}

	/*-----------------------------------------------------
	 * Controls Setup
	 *-----------------------------------------------------*/
	function initControls() {
		controls = new OrbitControls(camera, renderer.domElement);
		controls.enableDamping = true;
		controls.dampingFactor = 0.1;
		controls.minPolarAngle = Math.PI / 4;
		controls.maxPolarAngle = Math.PI / 2;
		controls.enablePan = false;
		controls.screenSpacePanning = false;

		// Temporarily lock zoom before model loads
		controls.enableZoom = false;
		controls.minDistance = 10;
		controls.maxDistance = 999; // large, but won't matter until zoom is re-enabled
		controls.update();
	}

	/*-----------------------------------------------------
	 * Overlay Text & Loading Screen
	 *-----------------------------------------------------*/
	function initLoadingOverlay() {
		loadingOverlay = document.createElement('div');
		loadingOverlay.id = 'loading_overlay';
		loadingOverlay.style.position = 'absolute';
		loadingOverlay.style.top = '10%';
		loadingOverlay.style.left = '50%';
		loadingOverlay.style.transform = 'translate(-50%, -50%)';
		loadingOverlay.style.color = 'white';
		loadingOverlay.style.fontSize = '24px';
		loadingOverlay.style.fontFamily = 'Courier New, monospace';
		loadingOverlay.style.zIndex = '2000';
		loadingOverlay.style.textAlign = 'center';
		loadingOverlay.innerText = 'Loading...';

		document.body.appendChild(loadingOverlay);
	}

	function removeLoadingOverlay() {
		if (loadingOverlay && loadingOverlay.parentNode) {
			loadingOverlay.parentNode.removeChild(loadingOverlay);
			loadingOverlay = null;
		}
	}

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

		// Fade in once appended (next frame)
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
		mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
		mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
		raycaster.setFromCamera(mouse, camera);
		const intersects = raycaster.intersectObjects(scene.children, true);
		if (intersects.length > 0) {
			hoveredObject = intersects[0].object;
		}
	}

	function handleScroll() {
		// If user can scroll, they've interacted
		handleFirstInteraction();
	}

	function handleMouseMove() {
		hasMoved = true;
		hoveredObject = null;
	}

	function handleMouseDown(event) {
		handleFirstInteraction();
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
		handleFirstInteraction();

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

	function handleTouchStart(event) {
		handleFirstInteraction();
	}

	function addEventListeners() {
		window.addEventListener('mouseenter', handleMouseEnter);
		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('mousedown', handleMouseDown);
		window.addEventListener('mouseup', handleMouseUp);
		window.addEventListener('wheel', handleScroll, { passive: true });
		window.addEventListener('resize', onWindowResize);
		window.addEventListener('touchstart', handleTouchStart);
	}

	function removeEventListeners() {
		window.removeEventListener('mouseenter', handleMouseEnter);
		window.removeEventListener('mousemove', handleMouseMove);
		window.removeEventListener('mousedown', handleMouseDown);
		window.removeEventListener('mouseup', handleMouseUp);
		window.removeEventListener('wheel', handleScroll);
		window.removeEventListener('resize', onWindowResize);
		window.removeEventListener('touchstart', handleTouchStart);
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
				// Model loaded
				scene.add(gltf.scene);
				gltf.scene.position.set(0, -8, 0);

				// Collect references
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

				setupSigns(nodes);
				addSpotLight(scene);
				addNeonGlow(nodes, scene);
				addLanternLights(nodes, scene);
				addStreetLights(nodes, scene);

				// Hide loading overlay & animate camera inward
				removeLoadingOverlay();
				startCameraAnimation();

				modelLoaded = true;
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
				child.userData.groupName = group.name; // Store sign group name
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
			// Adjust position
			worldPosition.y -= 2;
			worldPosition.x -= 2;
			worldPosition.z -= 2;

			streetLight.position.copy(worldPosition);
			scene.add(streetLight);
		});
	}

	/*-----------------------------------------------------
	 * Camera Animation (zoom in from fog to start dist)
	 *-----------------------------------------------------*/
	function startCameraAnimation() {
		cameraAnimating = true;
	}

	function animateCameraToTarget() {
		// Calculate the current position and the difference to the target
		const currentZ = camera.position.z;
		const delta = targetCameraZ - currentZ;
		const step = delta * animationSpeed;

		// Move the camera closer each frame
		camera.position.z = currentZ + step;

		// Check if the camera is close enough to the target position
		if (Math.abs(delta) < 0.1) {
			// Snap the camera to the exact target position
			camera.position.z = targetCameraZ;
			cameraAnimating = false;

			// Re-enable zoom and set the normal max distance
			controls.enableZoom = true;
			controls.minDistance = 10;
			controls.maxDistance = 50;

			// **Reinstate Rotation Locks**
			controls.minPolarAngle = Math.PI / 4; // Prevent camera from going below ground
			controls.maxPolarAngle = Math.PI / 2; // Prevent camera from flipping view
			controls.minAzimuthAngle = 0; // Restrict horizontal rotation to -90 degrees
			controls.maxAzimuthAngle = Math.PI / 2; // Restrict horizontal rotation to 90 degrees

			// Update the controls to apply the new settings
			controls.update();

			// Initialize the helper text (fade in)
			initOverlayText();
		}
	}

	/*-----------------------------------------------------
	 * Main Animate Loop
	 *-----------------------------------------------------*/
	function animate() {
		requestAnimationFrame(animate);

		// If camera is animating, adjust it each frame
		if (cameraAnimating) {
			animateCameraToTarget();
		}

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

		// Show loading screen
		initLoadingOverlay();

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
