const SPRITE = "/favicon-frames.png";
const FRAME_SIZE = 32;
const FRAME_MS = 66;

/**
 * Animates the tab icon by cycling frames from a vertical sprite sheet.
 * Browsers other than Firefox ignore animated GIF favicons, so the frames are
 * swapped in as data URLs instead. The static /favicon-32.png in index.html
 * stays in place when motion is reduced or anything fails.
 */
export const startAnimatedFavicon = () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
  if (!link) return;

  const sprite = new Image();
  sprite.src = SPRITE;
  sprite.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = FRAME_SIZE;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const frames: string[] = [];
    for (let y = 0; y + FRAME_SIZE <= sprite.height; y += FRAME_SIZE) {
      ctx.clearRect(0, 0, FRAME_SIZE, FRAME_SIZE);
      ctx.drawImage(sprite, 0, y, FRAME_SIZE, FRAME_SIZE, 0, 0, FRAME_SIZE, FRAME_SIZE);
      frames.push(canvas.toDataURL("image/png"));
    }
    if (frames.length < 2) return;

    let i = 0;
    window.setInterval(() => {
      i = (i + 1) % frames.length;
      link.href = frames[i];
    }, FRAME_MS);
  };
};
