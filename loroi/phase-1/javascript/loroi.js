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
    const cylinder = createMesh( new THREE.CylinderGeometry( 20, 20, 20 ) );
    scene.add( cylinder );

    // Position the camera and point it to the center of the scene
    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 50;
    camera.lookAt( new THREE.Vector3( 10, 0, 0 ) );

    // Add the output of the renderer to the HTML element
    document.getElementById( "WebGL-output" ).appendChild( webGLRenderer.domElement );

    // call the render function
    let step = 0;
    render();
}
