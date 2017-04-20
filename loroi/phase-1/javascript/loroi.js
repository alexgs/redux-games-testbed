function initLoroi() {
    const createMesh = function( geom ) {
        // Create mesh material
        const meshMaterial = new THREE.MeshNormalMaterial();
        meshMaterial.side = THREE.DoubleSide;

        // Create wire frame material
        const wireFrameMat = new THREE.MeshBasicMaterial();
        wireFrameMat.wireframe = true;

        // Create and return a multi-material object
        return THREE.SceneUtils.createMultiMaterialObject( geom, [ meshMaterial, wireFrameMat ] );
    };

    const render = function() {
        cylinder.rotation.y = step;
        step += 0.01;
        requestAnimationFrame( render );
        webGLRenderer.render( scene, camera );
    };

    // GUI control setup function
    const controls = new function () {
        this.radiusTop = 20;
        this.radiusBottom = 20;
        this.height = 20;
        this.radialSegments = 8;
        this.heightSegments = 8;
        this.openEnded = false;

        this.redraw = function () {
            // Remove the old cylinder
            scene.remove(cylinder);

            // Create a new one
            cylinder = createMesh(new THREE.CylinderGeometry(controls.radiusTop, controls.radiusBottom, controls.height, controls.radialSegments, controls.heightSegments, controls.openEnded));

            // Add the new one to the scene
            scene.add(cylinder);
        };
    };

    // Create a scene to hold all our elements such as objects, cameras, and lights.
    const scene = new THREE.Scene();

    // Create a camera that controls where we're looking.
    const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );

    // Create a renderer and set the size
    const webGLRenderer = new THREE.WebGLRenderer();
    webGLRenderer.setClearColor( new THREE.Color( 0xEEEEEE, 1.0 ) );
    webGLRenderer.setSize( window.innerWidth, window.innerHeight );
    webGLRenderer.shadowMap.enabled = true;

    // Create and cylinder and add to the scene
    let cylinder = createMesh( new THREE.CylinderGeometry( 20, 20, 20 ) );
    scene.add( cylinder );

    // Position the camera and point it to the center of the scene
    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 50;
    camera.lookAt( new THREE.Vector3( 10, 0, 0 ) );

    // Add the output of the renderer to the HTML element
    document.getElementById( "WebGL-output" ).appendChild( webGLRenderer.domElement );

    // Add the GUI
    const gui = new dat.GUI();
    gui.add(controls, 'radiusTop', -40, 40).onChange(controls.redraw);
    gui.add(controls, 'radiusBottom', -40, 40).onChange(controls.redraw);
    gui.add(controls, 'height', 0, 40).onChange(controls.redraw);
    gui.add(controls, 'radialSegments', 1, 20).step(1).onChange(controls.redraw);
    gui.add(controls, 'heightSegments', 1, 20).step(1).onChange(controls.redraw);
    gui.add(controls, 'openEnded').onChange(controls.redraw);

    // call the render function
    let step = 0;
    render();
}
