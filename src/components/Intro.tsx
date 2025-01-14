import { HeroHeader } from "./Hero1"
import { ContactUs } from "./Contact"
import { useEffect } from "react"

type Introtype = {
  onFinish: () => void
}

export default function Intro(params:Introtype){

  useEffect(() => {
    setTimeout(() => {
      params.onFinish()
    }, 11000)
  }, [])
    return <>

    <style>
        {`


main {
  background: #111;
  border: solid 1px #222;
  padding: 2rem;
  max-width: 100%;
  width: 960px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
}
main > * {
  grid-column: 1/-1;
}

img {
  max-width: 100%;
}

p {
  line-height: 1.8;
  margin: 1rem 0;
  color: #9ea6b8;
}

h1 {
  line-height: 1.3;
  font-size: 5vw;
  margin: 1rem 0;
}

h2 {
  font-size: 4vw;
  margin: 1rem 0;
}

h3 {
  font-size: 2vw;
  font-weight: bold;
}

h2.subheader {
  font-size: 2vw;
}

section {
  grid-column: auto;
}

header {
  display: grid;
  align-content: center;
  grid-column: 1/-1;
}

.callout {
  text-align: center;
  background-color: #3173fa;
  padding: 1vw 3vw;
}
.callout > p {
  color: white;
}

/* ---------------------------------- */
.container {
  perspective: 1200px;
  transform-style: preserve-3d;
  -webkit-animation: cinematic-camera 11s cubic-bezier(0.6, 0, 0.4, 1) both infinite;
          animation: cinematic-camera 11s cubic-bezier(0.6, 0, 0.4, 1) both infinite;
}
@-webkit-keyframes cinematic-camera {
  from {
    perspective-origin: 60% 40%;
  }
  to {
    perspective-origin: 40% 60%;
  }
  /* 
    Move the fading to the containing element as to not break inside 3D transforms. 
    See: https://css-tricks.com/things-watch-working-css-3d/
  */
  from, to {
    opacity: 0;
  }
  25%, 75% {
    opacity: 1;
  }
}
@keyframes cinematic-camera {
  from {
    perspective-origin: 60% 40%;
  }
  to {
    perspective-origin: 40% 60%;
  }
  /* 
    Move the fading to the containing element as to not break inside 3D transforms. 
    See: https://css-tricks.com/things-watch-working-css-3d/
  */
  from, to {
    opacity: 0;
  }
  25%, 75% {
    opacity: 1;
  }
}
.container:after {
  content: "";
  background: linear-gradient(to bottom, #000, #0000 20%, #0000 80%, #000);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}

main {
  transform-origin: top center;
  transform-style: preserve-3d;
  -webkit-animation: inherit;
          animation: inherit;
  -webkit-animation-name: cinematic;
          animation-name: cinematic;
}
main > img {
  display: block;
  transform-style: preserve-3d;
  -webkit-animation: inherit;
          animation: inherit;
  -webkit-animation-name: image-pop;
          animation-name: image-pop;
}
@-webkit-keyframes image-pop {
  70%, 100% {
    transform: translate3d(0, 0, 60px);
  }
}
@keyframes image-pop {
  70%, 100% {
    transform: translate3d(0, 0, 60px);
  }
}
main > img:last-of-type {
  -webkit-animation-delay: 4s;
          animation-delay: 4s;
}
@-webkit-keyframes cinematic {
  from {
    transform: translateZ(-200px) rotateY(30deg) translateY(50vh);
  }
  to {
    transform: translateZ(-100px) rotateY(-30deg) translateY(-100%) translateY(50vh);
  }
}
@keyframes cinematic {
  from {
    transform: translateZ(-200px) rotateY(30deg) translateY(50vh);
  }
  to {
    transform: translateZ(-100px) rotateY(-30deg) translateY(-100%) translateY(50vh);
  }
}`}
    </style>
      <div  className="bg-black text-white h-auto min-h-[100%]  overflow-hidden">
      <div className="container">
  <main>
    <HeroHeader />
   
    <header>
      <h2 className="subheader">UI/UX Design System</h2>
      <h1>Where we bring imaginative user interfaces <em>to life.</em></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum suscipit ipsam aspernatur quasi reiciendis at eum cupiditate officiis repudiandae quae ea facere odit beatae voluptate recusandae quas, possimus laborum inventore.</p>
    </header>

    <div className="grid-cols-2">
    <ContactUs />
    </div>
   
   
  </main>
        </div>
      </div>
    
    </>
}