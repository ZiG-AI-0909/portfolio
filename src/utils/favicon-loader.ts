let canvas: HTMLCanvasElement;
let context: CanvasRenderingContext2D;
let n = 0;
let loadingInterval: NodeJS.Timeout;

export function initFaviconLoader() {
  canvas = document.querySelector('canvas') as HTMLCanvasElement;
  const faviconLink = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
  
  if (!canvas) return;
  
  context = canvas.getContext('2d')!;
  
  if (!context) return;

  // Cyberpunk style gradient - vibrant neon colors with green
  const gradient = context.createLinearGradient(0, 0, 32, 32);
  gradient.addColorStop(0, '#00ff88');      // Neon green
  gradient.addColorStop(0.5, '#00ffff');    // Cyan
  gradient.addColorStop(1, '#00ff00');      // Bright green
  
  context.strokeStyle = gradient;
  context.lineWidth = 3;
  context.lineCap = 'square';
  context.lineJoin = 'square';

  // Function to draw the loader with cyberpunk effects
  function drawLoader() {
    // Dark background with slight glow
    context.fillStyle = 'rgba(10, 10, 20, 0.3)';
    context.fillRect(0, 0, 32, 32);
    
    context.beginPath();

    /* Up to 25% of the time assigned to draw */
    if (n <= 25) {
      context.moveTo(0, 0);
      context.lineTo((32 / 25) * n, 0);
    }
    /* Between 25 to 50 percent */
    else if (n > 25 && n <= 50) {
      context.moveTo(0, 0);
      context.lineTo(32, 0);
      context.moveTo(32, 0);
      context.lineTo(32, (32 / 25) * (n - 25));
    }
    /* Between 50 to 75 percent */
    else if (n > 50 && n <= 75) {
      context.moveTo(0, 0);
      context.lineTo(32, 0);
      context.moveTo(32, 0);
      context.lineTo(32, 32);
      context.moveTo(32, 32);
      context.lineTo(-((32 / 25) * (n - 75)), 32);
    }
    /* Between 75 to 100 percent */
    else if (n > 75 && n <= 100) {
      context.moveTo(0, 0);
      context.lineTo(32, 0);
      context.moveTo(32, 0);
      context.lineTo(32, 32);
      context.moveTo(32, 32);
      context.lineTo(0, 32);
      context.moveTo(0, 32);
      context.lineTo(0, -((32 / 25) * (n - 100)));
    }

    context.stroke();

    // Add glow/shadow effect for cyberpunk feel
    context.strokeStyle = `rgba(0, 255, 136, ${0.3 - (n / 300)})`;
    context.lineWidth = 5;
    context.globalCompositeOperation = 'lighter';
    context.beginPath();
    
    if (n <= 25) {
      context.moveTo(0, 0);
      context.lineTo((32 / 25) * n, 0);
    } else if (n > 25 && n <= 50) {
      context.moveTo(0, 0);
      context.lineTo(32, 0);
      context.moveTo(32, 0);
      context.lineTo(32, (32 / 25) * (n - 25));
    } else if (n > 50 && n <= 75) {
      context.moveTo(0, 0);
      context.lineTo(32, 0);
      context.moveTo(32, 0);
      context.lineTo(32, 32);
      context.moveTo(32, 32);
      context.lineTo(-((32 / 25) * (n - 75)), 32);
    } else if (n > 75 && n <= 100) {
      context.moveTo(0, 0);
      context.lineTo(32, 0);
      context.moveTo(32, 0);
      context.lineTo(32, 32);
      context.moveTo(32, 32);
      context.lineTo(0, 32);
      context.moveTo(0, 32);
      context.lineTo(0, -((32 / 25) * (n - 100)));
    }
    
    context.stroke();
    context.globalCompositeOperation = 'source-over';

    // Draw red triangle inside
    context.fillStyle = '#ff0000';
    context.beginPath();
    context.moveTo(16, 6);      // Top point
    context.lineTo(26, 26);     // Bottom right
    context.lineTo(6, 26);      // Bottom left
    context.closePath();
    context.fill();

    // Convert the Canvas drawing to PNG and assign it to the favicon
    if (faviconLink) {
      faviconLink.href = canvas.toDataURL('image/png');
    }

    /* When finished drawing, loop the animation */
    if (n === 100) {
      n = 0; // Reset to create infinite loop
      return;
    }

    n++;
  }

  // Start the animation automatically on page load
  startFaviconLoader();

  return startFaviconLoader;
}

export function startFaviconLoader() {
  n = 0;
  loadingInterval = setInterval(() => {
    drawLoader();
  }, 50);
}

function drawLoader() {
  // Dark background with slight glow
  context.fillStyle = 'rgba(10, 10, 20, 0.3)';
  context.fillRect(0, 0, 32, 32);
  
  // Main neon gradient
  const gradient = context.createLinearGradient(0, 0, 32, 32);
  gradient.addColorStop(0, '#00ff88');
  gradient.addColorStop(0.5, '#00ffff');
  gradient.addColorStop(1, '#00ff00');
  
  context.strokeStyle = gradient;
  context.lineWidth = 3;
  context.lineCap = 'square';
  context.lineJoin = 'square';
  
  context.beginPath();

  if (n <= 25) {
    context.moveTo(0, 0);
    context.lineTo((32 / 25) * n, 0);
  } else if (n > 25 && n <= 50) {
    context.moveTo(0, 0);
    context.lineTo(32, 0);
    context.moveTo(32, 0);
    context.lineTo(32, (32 / 25) * (n - 25));
  } else if (n > 50 && n <= 75) {
    context.moveTo(0, 0);
    context.lineTo(32, 0);
    context.moveTo(32, 0);
    context.lineTo(32, 32);
    context.moveTo(32, 32);
    context.lineTo(-((32 / 25) * (n - 75)), 32);
  } else if (n > 75 && n <= 100) {
    context.moveTo(0, 0);
    context.lineTo(32, 0);
    context.moveTo(32, 0);
    context.lineTo(32, 32);
    context.moveTo(32, 32);
    context.lineTo(0, 32);
    context.moveTo(0, 32);
    context.lineTo(0, -((32 / 25) * (n - 100)));
  }

  context.stroke();

  // Add intense glow effect for cyberpunk feel
  context.strokeStyle = `rgba(0, 255, 136, ${0.4 - (n / 250)})`;
  context.lineWidth = 6;
  context.globalCompositeOperation = 'lighter';
  context.beginPath();
  
  if (n <= 25) {
    context.moveTo(0, 0);
    context.lineTo((32 / 25) * n, 0);
  } else if (n > 25 && n <= 50) {
    context.moveTo(0, 0);
    context.lineTo(32, 0);
    context.moveTo(32, 0);
    context.lineTo(32, (32 / 25) * (n - 25));
  } else if (n > 50 && n <= 75) {
    context.moveTo(0, 0);
    context.lineTo(32, 0);
    context.moveTo(32, 0);
    context.lineTo(32, 32);
    context.moveTo(32, 32);
    context.lineTo(-((32 / 25) * (n - 75)), 32);
  } else if (n > 75 && n <= 100) {
    context.moveTo(0, 0);
    context.lineTo(32, 0);
    context.moveTo(32, 0);
    context.lineTo(32, 32);
    context.moveTo(32, 32);
    context.lineTo(0, 32);
    context.moveTo(0, 32);
    context.lineTo(0, -((32 / 25) * (n - 100)));
  }
  
  context.stroke();
  context.globalCompositeOperation = 'source-over';

  // Draw red triangle inside
  context.fillStyle = '#ff0000';
  context.beginPath();
  context.moveTo(16, 6);      // Top point
  context.lineTo(26, 26);     // Bottom right
  context.lineTo(6, 26);      // Bottom left
  context.closePath();
  context.fill();

  const faviconLink = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
  if (faviconLink) {
    faviconLink.href = canvas.toDataURL('image/png');
  }

  if (n === 100) {
    n = 0;
    return;
  }

  n++;
}
