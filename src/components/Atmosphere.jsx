import { useEffect, useRef } from "react";

// A lightweight procedural silk surface: no video downloads or external assets.
export default function Atmosphere({ dark = false }) {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const gl = canvas.getContext("webgl", {
      alpha: false,
      antialias: false,
      powerPreference: "low-power",
    });
    if (!gl) return;
    const compile = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };
    const vertex = compile(
      gl.VERTEX_SHADER,
      "attribute vec2 a; void main(){gl_Position=vec4(a,0.,1.);}",
    );
    const fragment = compile(
      gl.FRAGMENT_SHADER,
      `
      precision mediump float;
      uniform vec2 resolution; uniform float time; uniform float dark;
      void main(){
        vec2 p=gl_FragCoord.xy/resolution.xy;
        p.x*=resolution.x/resolution.y;
        float t=time*.13;
        vec2 q=p;
        q.x+=.23*sin(p.y*3.4+t)+.13*cos(p.y*6.-t*.7);
        q.y+=.16*sin(p.x*3.2-t*.6);
        float wave=sin(q.x*4.8+q.y*3.6+t+1.1*sin(q.y*3.5-t));
        float fold=pow(.5+.5*wave,8.);
        float glow=pow(.5+.5*sin(q.x*4.8+q.y*3.6+t+.33+1.1*sin(q.y*3.5-t)),26.);
        float shade=.84-fold*.17+glow*.20;
        vec3 silver=vec3(shade,shade,shade*.985);
        vec3 charcoal=vec3(.061)+vec3(.10,.098,.108)*fold+vec3(.025)*glow;
        gl_FragColor=vec4(mix(silver,charcoal,dark),1.);
      }`,
    );
    if (!vertex || !fragment) {
      if (vertex) gl.deleteShader(vertex);
      if (fragment) gl.deleteShader(fragment);
      return;
    }
    const program = gl.createProgram();
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
      gl.deleteProgram(program);
      return;
    }
    gl.useProgram(program);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );
    const a = gl.getAttribLocation(program, "a");
    gl.enableVertexAttribArray(a);
    gl.vertexAttribPointer(a, 2, gl.FLOAT, false, 0, 0);
    const r = gl.getUniformLocation(program, "resolution"),
      t = gl.getUniformLocation(program, "time");
    gl.uniform1f(gl.getUniformLocation(program, "dark"), dark ? 1 : 0);
    let frame = 0,
      last = 0,
      visible = false,
      disposed = false;
    function draw(now = 0) {
      frame = 0;
      if (disposed) return;
      if (now - last >= 33 || motion.matches || now === 0) {
        last = now;
        gl.uniform2f(r, canvas.width, canvas.height);
        gl.uniform1f(t, motion.matches ? 0 : now / 1000);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }
      if (visible && !document.hidden && !motion.matches)
        frame = requestAnimationFrame(draw);
    }
    function restart() {
      cancelAnimationFrame(frame);
      frame = 0;
      if (visible && !document.hidden) draw();
    }
    const resize = new ResizeObserver(() => {
      const box = canvas.getBoundingClientRect();
      const ratio = Math.min(1, 900 / Math.max(box.width, 1));
      canvas.width = Math.max(1, Math.round(box.width * ratio));
      canvas.height = Math.max(1, Math.round(box.height * ratio));
      gl.viewport(0, 0, canvas.width, canvas.height);
      restart();
    });
    resize.observe(canvas);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      restart();
    });
    observer.observe(canvas);
    motion.addEventListener("change", restart);
    document.addEventListener("visibilitychange", restart);
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      resize.disconnect();
      observer.disconnect();
      motion.removeEventListener("change", restart);
      document.removeEventListener("visibilitychange", restart);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
    };
  }, [dark]);
  return (
    <canvas
      ref={ref}
      className={`atmosphere ${dark ? "atmosphere-dark" : ""}`}
      aria-hidden="true"
    />
  );
}
