"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

type ArchiveImage = {
  src: string;
  label: string;
  href: string;
  alt: string;
  angle: number;
  radius: number;
  height: number;
  size: [number, number];
};

const archiveImages: ArchiveImage[] = [
  { src: "/images/from-folder/embroidered-white-portrait.JPG", label: "COLLECTIONS", href: "/portfolio/collections", alt: "White embroidered Palestinian couture piece", angle: 0, radius: 10.2, height: 1.6, size: [2.2, 3.1] },
  { src: "/images/from-folder/wall/bridal-couple.JPG", label: "BRIDAL", href: "/portfolio/bridal", alt: "Bride and groom in embroidered garments", angle: 10, radius: 13.5, height: -1.3, size: [3.3, 2.4] },
  { src: "/images/from-folder/red-black-runway.jpg", label: "RUNWAY", href: "/portfolio/achievements", alt: "Red and black runway garment", angle: 21, radius: 11.8, height: 2.4, size: [2.1, 3.4] },
  { src: "/images/from-folder/wall/blue-overhead.jpeg", label: "COLOR", href: "/portfolio/collections", alt: "Blue garment photographed from above", angle: 31, radius: 9.5, height: -2.4, size: [2.4, 3.0] },
  { src: "/images/achievements/nadeen/nadeen-flag-portrait.jpg", label: "MISS PALESTINE", href: "/portfolio/achievements", alt: "Nadeen Ayoub in the Miss Palestine look", angle: 42, radius: 12.2, height: 0.7, size: [2.4, 3.0] },
  { src: "/images/from-folder/floral-studio-full.JPG", label: "QUEEN OF CANAAN", href: "/portfolio/queen-of-canaan", alt: "Floral studio garment", angle: 54, radius: 10.6, height: -0.2, size: [2.1, 3.4] },
  { src: "/images/from-folder/wall/pink-runway-stage.JPG", label: "ACHIEVEMENTS", href: "/portfolio/achievements", alt: "Pink runway stage look", angle: 65, radius: 13.1, height: 2.0, size: [3.5, 2.4] },
  { src: "/images/from-folder/desert-white-look.jpg", label: "BRIDAL LINE", href: "/portfolio/bridal-line", alt: "White look in desert landscape", angle: 77, radius: 9.8, height: -1.0, size: [2.8, 3.4] },
  { src: "/images/from-folder/wall/red-black-cape.jpeg", label: "CAPE", href: "/portfolio/collections", alt: "Red and black cape look", angle: 89, radius: 12.8, height: 1.1, size: [2.0, 2.7] },
  { src: "/images/from-folder/stone-desert-couple.JPG", label: "CEREMONY", href: "/portfolio/bridal", alt: "Couple in white garments in a stony desert", angle: 101, radius: 10.9, height: -2.0, size: [3.7, 2.5] },
  { src: "/images/from-folder/wall/floral-dress-stone.jpg", label: "GARMENTS", href: "/portfolio/queen-of-canaan", alt: "Floral dress against stone", angle: 112, radius: 13.7, height: 0.1, size: [2.2, 3.2] },
  { src: "/images/from-folder/vineyard-black-red.JPG", label: "JADRA", href: "/portfolio/achievements", alt: "Black and red garment under trees", angle: 123, radius: 9.6, height: 2.6, size: [2.6, 3.4] },
  { src: "/images/from-folder/wall/white-gown-cape.JPG", label: "BRIDES", href: "/portfolio/bridal", alt: "White gown with cape", angle: 134, radius: 12.0, height: -0.7, size: [2.3, 3.6] },
  { src: "/images/from-folder/wall/orange-desert-look.jpeg", label: "INSPO", href: "/journal", alt: "Orange embroidered garment in the desert", angle: 146, radius: 10.4, height: 1.9, size: [2.4, 3.0] },
  { src: "/images/from-folder/wall/two-runway-looks.JPG", label: "STAGE", href: "/portfolio/achievements", alt: "Two embroidered runway looks", angle: 158, radius: 13.3, height: -2.2, size: [3.6, 2.5] },
  { src: "/images/from-folder/wall/white-folk-look.jpeg", label: "HERITAGE", href: "/portfolio/collections", alt: "White folk-inspired embroidered look", angle: 169, radius: 9.7, height: 0.8, size: [2.2, 3.1] },
  { src: "/images/from-folder/wall/red-jewelry-portrait.JPG", label: "PORTRAIT", href: "/portfolio/palestinian-motifs", alt: "Red embroidered jewelry portrait", angle: 180, radius: 12.8, height: -1.1, size: [2.0, 2.7] },
  { src: "/images/from-folder/wall/tatreez-detail-portrait.JPG", label: "DETAIL", href: "/portfolio/collections", alt: "Tatreez detail portrait", angle: 191, radius: 10.1, height: 2.1, size: [2.2, 3.0] },
  { src: "/images/olympics/olympics-rings-team-web.jpg", label: "OLYMPICS", href: "/portfolio/dressing-our-team-at-the-olympics", alt: "Palestinian Olympic team garments", angle: 203, radius: 13.8, height: -1.5, size: [3.7, 2.4] },
  { src: "/images/from-folder/camel-editorial.jpg", label: "LANDSCAPE", href: "/portfolio/collections", alt: "Editorial garment beside camels", angle: 216, radius: 10.8, height: 0.2, size: [3.4, 2.5] },
  { src: "/images/from-folder/pink-embroidered-portrait.JPG", label: "ROSES", href: "/portfolio/collections", alt: "Pink embroidered portrait garment", angle: 228, radius: 12.5, height: 2.4, size: [2.2, 3.1] },
  { src: "/images/from-folder/red-portrait-close.JPG", label: "RED", href: "/portfolio/palestinian-motifs", alt: "Red garment portrait close-up", angle: 239, radius: 9.4, height: -1.7, size: [2.3, 3.1] },
  { src: "/images/from-folder/runway-embroidered-trousers.JPG", label: "RUNWAY", href: "/portfolio/achievements", alt: "Runway look with embroidered trousers", angle: 251, radius: 13.0, height: 0.9, size: [2.3, 3.3] },
  { src: "/images/from-folder/runway-pink-dress.JPG", label: "DRESS", href: "/portfolio/collections", alt: "Pink runway dress", angle: 263, radius: 10.3, height: -2.3, size: [2.2, 3.2] },
  { src: "/images/from-folder/studio-embroidered-white.jpg", label: "ATELIER", href: "/journal", alt: "White embroidered garment in studio", angle: 275, radius: 12.7, height: 1.7, size: [2.5, 3.2] },
  { src: "/images/from-folder/blue-interview-look.JPG", label: "PRESS", href: "/portfolio/achievements", alt: "Blue interview look", angle: 286, radius: 9.6, height: -0.5, size: [2.4, 3.0] },
  { src: "/images/from-folder/wall/bridal-balcony.JPG", label: "BALCONY", href: "/portfolio/bridal", alt: "Bridal look on a balcony", angle: 297, radius: 13.4, height: 2.5, size: [2.6, 3.4] },
  { src: "/images/from-folder/wall/red-black-stage.jpg", label: "STAGE", href: "/portfolio/achievements", alt: "Red and black stage garment", angle: 309, radius: 10.6, height: -1.1, size: [3.3, 2.4] },
  { src: "/images/from-folder/wall/pink-white-look.JPG", label: "PASTEL", href: "/portfolio/collections", alt: "Pink and white embroidered look", angle: 321, radius: 12.4, height: 0.5, size: [2.3, 3.2] },
  { src: "/images/from-folder/wall/red-tree-portrait.JPG", label: "TREE", href: "/portfolio/palestinian-motifs", alt: "Red embroidered portrait near trees", angle: 333, radius: 9.8, height: 2.0, size: [2.2, 3.0] },
  { src: "/images/from-folder/wall/white-runway-gown.JPG", label: "GOWN", href: "/portfolio/bridal", alt: "White runway gown", angle: 344, radius: 13.2, height: -2.0, size: [2.2, 3.3] },
  { src: "/images/from-folder/white-embroidered-close.JPG", label: "THREAD", href: "/journal", alt: "White embroidery close detail", angle: 354, radius: 10.0, height: -0.1, size: [2.4, 3.0] }
];

const musicTracks = [
  { src: "/music/nawwar-web.mp3", title: "Nawwar" },
  { src: "/music/roubbama-web.mp3", title: "Roubbama" },
  { src: "/music/hawana-web.mp3", title: "Hawana" },
  { src: "/music/shajan-web.mp3", title: "Shajan" },
  { src: "/music/masar-web.mp3", title: "Masar" }
];

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

export function CinematicLanding() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const router = useRouter();
  const [entered, setEntered] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);

  useEffect(() => {
    if (!entered || !audioRef.current) {
      return;
    }

    if (!isSoundOn) {
      audioRef.current.pause();
      return;
    }

    audioRef.current.volume = 0.55;
    void audioRef.current.play().catch(() => setIsSoundOn(false));
  }, [entered, isSoundOn, trackIndex]);

  useEffect(() => {
    if (!entered || !canvasRef.current) {
      return;
    }

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x030303);

    const camera = new THREE.PerspectiveCamera(68, 1, 0.1, 140);
    camera.position.set(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: false,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.65));

    const loader = new THREE.TextureLoader();
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2(10, 10);
    const targetPointer = new THREE.Vector2(0, 0);
    const lookDirection = new THREE.Vector3();
    const meshes: Array<THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial> & { userData: ArchiveImage }> = [];
    let yaw = 0;
    let pitch = 0;
    let yawVelocity = 0.0014;
    let pitchVelocity = 0;
    let dragging = false;
    let dragDistance = 0;
    let previousDragX = 0;
    let previousDragY = 0;

    archiveImages.forEach((image, index) => {
      const texture = loader.load(image.src);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.magFilter = THREE.LinearFilter;

      const sizeScatter = 0.82 + ((index * 37) % 9) * 0.095;
      const densityScale = (window.innerWidth < 768 ? 1.08 : 1.22) * sizeScatter;
      const geometry = new THREE.PlaneGeometry(image.size[0] * densityScale, image.size[1] * densityScale);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.82,
        side: THREE.DoubleSide
      });
      const mesh = new THREE.Mesh(geometry, material) as THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial> & { userData: ArchiveImage };
      const angle = THREE.MathUtils.degToRad(image.angle + Math.sin(index * 12.9898) * 5.6);
      const radius = image.radius * (window.innerWidth < 768 ? 0.82 : 0.76) + Math.cos(index * 2.31) * 1.15;
      const scatteredHeight = image.height + Math.sin(index * 4.73) * 0.78;
      mesh.position.set(Math.sin(angle) * radius, scatteredHeight, -Math.cos(angle) * radius);
      mesh.lookAt(0, scatteredHeight * 0.18, 0);
      mesh.rotateZ(Math.sin(index * 5.17) * 0.105);
      mesh.userData = image;
      meshes.push(mesh);
      scene.add(mesh);
    });

    function resize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }

    function onPointerMove(event: PointerEvent) {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;

      if (dragging) {
        const deltaX = event.clientX - previousDragX;
        const deltaY = event.clientY - previousDragY;
        yawVelocity -= deltaX * 0.00048;
        pitchVelocity -= deltaY * 0.00042;
        dragDistance += Math.abs(deltaX) + Math.abs(deltaY);
        previousDragX = event.clientX;
        previousDragY = event.clientY;
      }

      targetPointer.set((x - 0.5) * 2, (y - 0.5) * 2);
      pointer.set((x - 0.5) * 2, -(y - 0.5) * 2);
    }

    function onPointerDown(event: PointerEvent) {
      dragging = true;
      dragDistance = 0;
      previousDragX = event.clientX;
      previousDragY = event.clientY;
      canvas.setPointerCapture(event.pointerId);
    }

    function onPointerUp(event: PointerEvent) {
      dragging = false;
      if (canvas.hasPointerCapture(event.pointerId)) {
        canvas.releasePointerCapture(event.pointerId);
      }
    }

    function onPointerLeave() {
      dragging = false;
      targetPointer.set(0, 0);
      pointer.set(10, 10);
      setHovered(null);
    }

    function onWheel(event: WheelEvent) {
      event.preventDefault();
      yawVelocity += event.deltaY * 0.00008 + event.deltaX * 0.00012;
    }

    function onClick(event: MouseEvent) {
      if ((event.target as HTMLElement).closest("a, button")) {
        return;
      }

      if (dragDistance > 6) {
        dragDistance = 0;
        return;
      }

      raycaster.setFromCamera(pointer, camera);
      const hit = raycaster.intersectObjects(meshes)[0];

      if (!hit) {
        return;
      }

      const target = hit.object as THREE.Mesh & { userData: ArchiveImage };
      setIsLeaving(true);
      target.scale.setScalar(1.18);
      setTimeout(() => router.push(target.userData.href), 420);
    }

    let animationFrame = 0;
    const startTime = performance.now();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function render() {
      const elapsed = (performance.now() - startTime) / 1000;
      const passiveYaw = dragging ? 0 : 0.0007 + Math.sin(elapsed * 0.13) * 0.00025;
      const hoverYaw = targetPointer.x * (window.innerWidth < 768 ? 0.0009 : 0.0015);
      const hoverPitch = -targetPointer.y * (window.innerWidth < 768 ? 0.0005 : 0.00085);

      yaw += yawVelocity + passiveYaw + hoverYaw;
      pitch = clamp(pitch + pitchVelocity + hoverPitch, -1.18, 1.18);
      yawVelocity *= dragging ? 0.86 : 0.94;
      pitchVelocity *= dragging ? 0.82 : 0.9;

      camera.position.x = Math.sin(yaw * 0.37) * 0.18;
      camera.position.y = Math.sin(elapsed * 0.22) * 0.08;
      camera.position.z = Math.cos(yaw * 0.37) * 0.18;
      lookDirection.set(
        Math.sin(yaw) * Math.cos(pitch),
        pitch,
        -Math.cos(yaw) * Math.cos(pitch)
      );
      camera.lookAt(camera.position.x + lookDirection.x * 18, camera.position.y + lookDirection.y * 18, camera.position.z + lookDirection.z * 18);

      raycaster.setFromCamera(pointer, camera);
      const hit = raycaster.intersectObjects(meshes)[0];
      let nextHovered: string | null = null;

      meshes.forEach((mesh) => {
        const meshDirection = mesh.position.clone().sub(camera.position).normalize();
        const facing = clamp(meshDirection.dot(lookDirection), 0, 1);
        const baseOpacity = 0.22 + facing * 0.76;
        mesh.material.opacity += (baseOpacity - mesh.material.opacity) * 0.04;
        mesh.scale.x += (1 - mesh.scale.x) * 0.05;
        mesh.scale.y += (1 - mesh.scale.y) * 0.05;
      });

      if (hit) {
        const mesh = hit.object as THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial> & { userData: ArchiveImage };
        mesh.material.opacity += (1 - mesh.material.opacity) * 0.12;
        mesh.scale.x += (1.055 - mesh.scale.x) * 0.12;
        mesh.scale.y += (1.055 - mesh.scale.y) * 0.12;
        nextHovered = mesh.userData.label;
      }

      setHovered((current) => (current === nextHovered ? current : nextHovered));
      renderer.render(scene, camera);

      if (!reducedMotion) {
        animationFrame = window.requestAnimationFrame(render);
      }
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("click", onClick);
    render();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("wheel", onWheel);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("click", onClick);
      meshes.forEach((mesh) => {
        mesh.geometry.dispose();
        mesh.material.map?.dispose();
        mesh.material.dispose();
      });
      renderer.dispose();
    };
  }, [entered, router]);

  async function enter(withSound: boolean) {
    setEntered(true);
    setIsSoundOn(withSound);
  }

  async function toggleSound() {
    if (isSoundOn) {
      audioRef.current?.pause();
      setIsSoundOn(false);
      return;
    }

    setIsSoundOn(true);
    if (audioRef.current) {
      try {
        await audioRef.current.play();
      } catch {
        setIsSoundOn(false);
      }
    }
  }

  return (
    <section className="spatial-home">
      <audio
        ref={audioRef}
        src={musicTracks[trackIndex].src}
        preload="auto"
        onEnded={() => setTrackIndex((current) => (current + 1) % musicTracks.length)}
      />

      {!entered ? (
        <div className="spatial-entry">
          <button type="button" onClick={() => enter(true)} className="entry-choice">
            ENTER WITH SOUND
          </button>
          <button type="button" onClick={() => enter(false)} className="entry-choice entry-choice-secondary">
            ENTER WITHOUT SOUND
          </button>
        </div>
      ) : null}

      <div className={`spatial-viewport ${entered ? "is-visible" : ""} ${isLeaving ? "is-leaving" : ""}`}>
        <canvas ref={canvasRef} className="spatial-canvas" aria-label="Maie Salameh spatial portfolio archive" />
        <div className="spatial-shade" />

        <div className="spatial-identity" aria-label="Maie Salameh">
          <p>M A I E&nbsp;&nbsp; S A L A M E H</p>
          <span>COUTURE</span>
        </div>

        <p className="spatial-nav">
          Explore the <Link href="/portfolio">WORK</Link>, read the{" "}
          <Link href="/journal">JOURNAL</Link>, know{" "}
          <Link href="/about">ABOUT</Link> Maie, or{" "}
          <a href="https://maiecouture.com/contact" target="_blank" rel="noreferrer">
            CONTACT
          </a>
        </p>

        <div className={`view-cursor ${hovered ? "is-active" : ""}`}>
          {hovered ? `VIEW ${hovered}` : "VIEW"}
        </div>

        <div className="sound-control">
          <button type="button" onClick={toggleSound} className="sound-toggle" aria-pressed={isSoundOn}>
            {isSoundOn ? "MUTE" : "SOUND"}
          </button>
          <span className="music-credit">
            Music: {musicTracks[trackIndex].title}
          </span>
        </div>
      </div>
    </section>
  );
}
