export const jsAnimationsInit = () => {
  const animationElement = document.createElement('div');
  animationElement.style.position = 'absolute';
  animationElement.style.width = '32px';
  animationElement.style.height = '32px';
  animationElement.style.backgroundColor = 'red';
  animationElement.style.top = '16px';
  animationElement.style.left = '16px';
  document.body.appendChild(animationElement);
  let left = 16;
  let direction = 0;
  requestAnimationFrame(function animate() {
    if (left > 360) {
      direction = 1;
    } else if (left === 16) {
      direction = 0;
    }
    left += (direction ? -1 : 1);
    animationElement.style.left = left + 'px';
    return requestAnimationFrame(animate);
  });
};
