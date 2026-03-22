(() => {
  const SHOW_SIDES = false;
  const COLOR_SURFACE = true;
  const COLOR_RANDOM = false;
  const COLOR_HUE = 190;
  const MAX_ROTATION = 360;
  const THICKNESS = 50;
  const DISTANCE = 100;
  let offsetX = 0, offsetY = 0, offsetZ = 0, rotationZ = 0;

  function getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = 50 + Math.floor(Math.random() * 30);
    const lightness = 40 + Math.floor(Math.random() * 30);
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  const getDOMDepth = element => [...element.children].reduce((max, child) => Math.max(max, getDOMDepth(child)), 0) + 1;
  const domDepthCache = getDOMDepth(document.body);
  const getColorByDepth = (depth, hue = 0, lighten = 0) => `hsl(${hue}, 75%, ${Math.min(10 + depth * (1 + 60 / domDepthCache), 90) + lighten}%)`;

  const body = document.body;
  body.style.overflow = "visible";
  body.style.transformStyle = "preserve-3d";
  body.style.perspective = DISTANCE;
  const perspectiveOriginX = (window.innerWidth / 2);
  const perspectiveOriginY = (window.innerHeight / 2);
  body.style.perspectiveOrigin = body.style.transformOrigin = `${perspectiveOriginX}px ${perspectiveOriginY}px`;
  traverseDOM(body, 0, 0, 0);

  function updateTransform() {
    body.style.transform = `translateX(${offsetX}px) translateY(${offsetY}px) translateZ(${offsetZ}px) rotateX(${rotationX}deg) rotateY(${rotationY}deg) rotateZ(${rotationZ}deg)`;
  }

  document.addEventListener("mousemove", (event) => {
    rotationY = (MAX_ROTATION * (1 - event.clientY / window.innerHeight) - (MAX_ROTATION / 2));
    rotationX = (MAX_ROTATION * event.clientX / window.innerWidth - (MAX_ROTATION / 2));
    updateTransform();
  });

  document.addEventListener("keydown", (event) => {
    const step = 10;
    switch(event.key) {
      case 'ArrowUp': offsetY -= step; break;
      case 'ArrowDown': offsetY += step; break;
      case 'ArrowLeft': offsetX -= step; break;
      case 'ArrowRight': offsetX += step; break;
      case 'w': offsetZ += step; break;
      case 's': offsetZ -= step; break;
      case 'a': rotationZ -= 5; break;
      case 'd': rotationZ += 5; break;
    }
    updateTransform();
  });

  function createSideFaces(element, color) {
    if (!SHOW_SIDES) return;
    const width = element.offsetWidth;
    const height = element.offsetHeight;
    const fragment = document.createDocumentFragment();

    const createFace = ({ width, height, transform, transformOrigin, top, left, right, bottom }) => {
      const face = document.createElement('div');
      face.className = 'dom-3d-side-face';
      Object.assign(face.style, {
        transformStyle: "preserve-3d",
        backfaceVisibility: 'hidden',
        position: 'absolute',
        width: `${width}px`,
        height: `${height}px`,
        background: color,
        transform,
        transformOrigin,
        overflow: 'hidden',
        willChange: 'transform',
        top,
        left,
        right,
        bottom
      });
      fragment.appendChild(face);
    }

    createFace({
      width,
      height: THICKNESS,
      transform: `rotateX(-270deg) translateY(${-THICKNESS}px)`,
      transformOrigin: 'top',
      top: '0px',
      left: '0px',
    });

    createFace({
      width: THICKNESS,
      height,
      transform: 'rotateY(90deg)',
      transformOrigin: 'left',
      top: '0px',
      left: `${width}px`
    });

    createFace({
      width,
      height: THICKNESS,
      transform: `rotateX(-90deg) translateY(${THICKNESS}px)`,
      transformOrigin: 'bottom',
      bottom: '0px',
      left: '0px'
    });

    createFace({
      width: THICKNESS,
      height,
      transform: `translateX(${-THICKNESS}px) rotateY(-90deg)`,
      transformOrigin: 'right',
      top: '0px',
      left: '0px'
    });

    element.appendChild(fragment);
  }

  function traverseDOM(parentNode, depthLevel, offsetX, offsetY) {
    for (let children = parentNode.childNodes, childrenCount = children.length, i = 0; i < childrenCount; i++) {
      const childNode = children[i];
      if (childNode.nodeType !== 1) continue;
      const color = COLOR_RANDOM ? getRandomColor() : getColorByDepth(depthLevel, COLOR_HUE, -5);
      Object.assign(childNode.style, {
        transform: `translateZ(${THICKNESS}px)`,
        overflow: "visible",
        backfaceVisibility: "hidden",
        isolation: "auto",
        transformStyle: "preserve-3d",
        backgroundColor: COLOR_SURFACE ? color : getComputedStyle(childNode).backgroundColor,
        willChange: 'transform',
      });

      let updatedOffsetX = offsetX;
      let updatedOffsetY = offsetY;
      if (childNode.offsetParent === parentNode) {
        updatedOffsetX += parentNode.offsetLeft;
        updatedOffsetY += parentNode.offsetTop;
      }
      createSideFaces(childNode, color);
      traverseDOM(childNode, depthLevel + 1, updatedOffsetX, updatedOffsetY);
    }
  }
})()