(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{5375:(e,t,a)=>{Promise.resolve().then(a.bind(a,6890))},6890:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var s=a(5155),n=a(2115);let i=e=>{let{words:t,typingSpeed:a=100,deletingSpeed:i=60,pauseDelay:l=1500}=e,[r,o]=(0,n.useState)(0),[c,d]=(0,n.useState)(""),[x,h]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=t[r],s=setTimeout(()=>{x?(d(t=>e.substring(0,t.length-1)),""===c&&(h(!1),o(e=>e===t.length-1?0:e+1))):(d(t=>e.substring(0,t.length+1)),c===e&&setTimeout(()=>h(!0),l))},x?i:a);return()=>clearTimeout(s)},[c,x,r,t,a,i,l]),(0,s.jsxs)("span",{className:"whitespace-nowrap",children:[c,(0,s.jsx)("span",{className:"blinking-cursor",children:"|"})]})};var l=a(470);let r=[{title:"Python",description:"Expanding my knowledge of Python3 by building web scrappers and implementing advanced algorithms."},{title:"Machine Learning",description:"Learning the fundamentals, frameworks, and build processes though group programming exercises."},{title:"GitHub Actions",description:"Building CI/CD pipelines for smoother deployments."},{title:"Azure / Public Cloud",description:"Undertaking Mircrosoft learn paths to understand the fundamentals of Azure,"},{title:"UX Design",description:"By creating & maintaining elegant web pages full of transitions and animations."}];function o(){let[e,t]=(0,n.useState)(0),a=e=>{let t=r.length;return(e+t)%t};return(0,s.jsxs)("div",{className:"relative w-full flex flex-col items-center",children:[(0,s.jsx)("div",{className:"relative w-full flex justify-center items-center h-60 overflow-hidden",children:r.map((t,n)=>{let i=a(n-e),o=0===i,c=i===r.length-1;return o||c||1===i?(0,s.jsxs)(l.P.div,{className:"absolute w-72 md:w-80 h-48 p-6 rounded-xl shadow-lg bg-fawn/80 text-neutral-800 backdrop-blur-md text-center",animate:{scale:o?1:.8,opacity:o?1:.5,x:o?0:c?"-100%":"100%",zIndex:o?2:1},transition:{duration:.6},children:[(0,s.jsx)("h3",{className:"text-xl font-semibold mb-2",children:t.title}),(0,s.jsx)("p",{className:"text-sm",children:t.description})]},t.title):null})}),(0,s.jsxs)("div",{className:"mt-6 flex gap-4",children:[(0,s.jsx)("button",{onClick:()=>{t(e=>(e-1+r.length)%r.length)},className:"px-4 py-2 bg-caput text-white rounded-lg hover:bg-caput/90 transition",children:"Prev"}),(0,s.jsx)("button",{onClick:()=>{t(e=>(e+1)%r.length)},className:"px-4 py-2 bg-caput text-white rounded-lg hover:bg-caput/90 transition",children:"Next"})]})]})}function c(){return(0,s.jsxs)("main",{className:"min-h-screen bg-gradient-to-b from-[#c2baad] to-white antialiased scroll-smooth text-neutral-800",children:[(0,s.jsx)("header",{className:"fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-lg shadow-sm",children:(0,s.jsxs)("nav",{className:"max-w-7xl mx-auto px-4 py-3 flex justify-between items-center",children:[(0,s.jsx)("span",{className:"text-lg font-semibold text-caput",children:"Jacob Greene"}),(0,s.jsxs)("ul",{className:"hidden sm:flex gap-6 text-sm text-caput",children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",className:"hover:underline",children:"Home"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#projects",className:"hover:underline",children:"Projects"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"/NIT_AP_Resume.pdf",download:!0,className:"hover:underline",children:"Resume"})})]})]})}),(0,s.jsxs)("section",{className:"min-h-screen flex relative px-6 pt-20 bg-[url('/bg.jpg')] bg-cover bg-center text-neutral-800 transition-colors duration-1000",children:[(0,s.jsx)("div",{className:"hidden md:block",children:(0,s.jsx)("div",{className:"flex flex-col md:flex-row justify-between w-full my-16 max-w-7xl mx-auto p-6",children:(0,s.jsx)("div",{className:"text-left absolute top-40 left-6 md:top-60 md:left-20",children:(0,s.jsx)("div",{className:"bg-peach/30 backdrop-blur-md p-6 rounded-xl",children:(0,s.jsxs)("h1",{className:"md:text-6xl font-bold flex flex-wrap",children:["I am a\xa0",(0,s.jsx)(i,{words:["Web Developer","Front End Engineer","Back End Engineer","Full Stack Engineer","Database Engineer","Coding Enthusiast","Code Optimizer","Software Student"]})]})})})})}),(0,s.jsx)("div",{className:"text-left max-w-md p-6 mx-auto md:absolute md:bottom-30 md:right-20",children:(0,s.jsx)("div",{className:"bg-peach/30 backdrop-blur-md p-6 rounded-xl max-w-lg",children:(0,s.jsx)("p",{className:"text-lg md:text-2xl leading-relaxed",children:"Hey, I'm Jacob — a full stack developer from North Carolina, passionate about crafting modern web experiences, exploring silicon tech, and enjoying the occasional fishing trip."})})})]}),(0,s.jsxs)("section",{className:"py-12 px-4 text-center",children:[(0,s.jsx)("p",{className:"text-lg md:text-xl text-neutral-700",children:"Currently open to full-time opportunities — let's build something great together."}),(0,s.jsx)("a",{href:"/NIT_AP_Resume.pdf",download:!0,className:"inline-block mt-4 px-6 py-2 bg-caput text-white font-medium rounded-xl hover:bg-caput/90 transition",children:"Download My Resume"})]}),(0,s.jsx)("section",{className:"py-24 px-4 max-w-4xl mx-auto",children:(0,s.jsxs)(l.P.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[(0,s.jsx)("h2",{className:"text-3xl font-bold mb-4 text-center text-caput",children:"About Me"}),(0,s.jsxs)("p",{className:"text-base leading-7",children:["I'm a full-stack software developer with a strong interest in backend systems, database management, and cloud infrastructure. I enjoy solving complex problems, optimizing performance, and exploring the internals of how code runs. My experience spans academic projects, IT consulting outreach, and professional hands-on hardware work across diverse mobile platforms.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"I'm comfortable with many languages like C++ and Python. Although I am always learning new languages and technologies. I'm always exploring new tech and approaches to stay adaptable and efficient. I collaborate well in teams and value clear communication and thoughtful problem-solving."]})]})}),(0,s.jsxs)("section",{id:"projects",className:"py-24 px-4 max-w-6xl mx-auto",children:[(0,s.jsx)(l.P.h2,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.6},viewport:{once:!0},className:"text-3xl font-bold text-caput text-center mb-12",children:"Featured Projects"}),(0,s.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-8",children:[(0,s.jsxs)(l.P.div,{whileHover:{scale:1.02},transition:{duration:.3},className:"rounded-2xl border border-caput/20 bg-white/80 backdrop-blur-md p-6 shadow-lg hover:shadow-xl",onClick:()=>window.open("https://github.com/jacobgreene-dev/jacobgreene-dev.github.io"),children:[(0,s.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"MY-PORTFOLIO"}),(0,s.jsx)("p",{className:"text-sm mb-4",children:"Next.js portfolio site with TypeScript, Tailwind CSS, and Framer Motion animations. Hosted on Github Pages."}),(0,s.jsxs)("div",{className:"flex gap-3 text-sm flex-wrap",children:[(0,s.jsx)("span",{children:"Next.js"}),(0,s.jsx)("span",{children:"TypeScript"}),(0,s.jsx)("span",{children:"Tailwind"}),(0,s.jsx)("span",{children:"GitHub"})]})]}),(0,s.jsxs)(l.P.div,{whileHover:{scale:1.02},transition:{duration:.3},className:"rounded-2xl border border-caput/20 bg-white/80 backdrop-blur-md p-6 shadow-lg hover:shadow-xl",onClick:()=>window.open("https://github.com/jacobgreene-dev/ideal-bet"),children:[(0,s.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"IDEAL-BET"}),(0,s.jsx)("p",{className:"text-sm mb-4",children:"NBA analytics web app for sports betting insights — built with Next.js, TypeScript, and API integration."}),(0,s.jsxs)("div",{className:"flex gap-3 text-sm flex-wrap",children:[(0,s.jsx)("span",{children:"Next.js"}),(0,s.jsx)("span",{children:"TypeScript"}),(0,s.jsx)("span",{children:"Python"}),(0,s.jsx)("span",{children:"Tailwind"}),(0,s.jsx)("span",{children:"Machine Learning"}),(0,s.jsx)("span",{children:"REST API"}),(0,s.jsx)("span",{children:"GitHub"})]})]}),(0,s.jsxs)(l.P.div,{whileHover:{scale:1.02},transition:{duration:.3},className:"rounded-2xl border border-caput/20 bg-white/80 backdrop-blur-md p-6 shadow-lg hover:shadow-xl",onClick:()=>window.open("https://github.com/jacobgreene-dev/CSC471-JetWebApp"),children:[(0,s.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"CSC471-JET-WEB-APP"}),(0,s.jsx)("p",{className:"text-sm mb-4",children:"Full-stack airline booking system built as part of an academic capstone project for CSC471. The application simulates a private aircraft dealership platform, supporting role-based access and real-time management of transactions."}),(0,s.jsxs)("div",{className:"flex gap-3 text-sm flex-wrap",children:[(0,s.jsx)("span",{children:"Laravel"}),(0,s.jsx)("span",{children:"Blade"}),(0,s.jsx)("span",{children:"PHP"}),(0,s.jsx)("span",{children:"PostgreSQL"}),(0,s.jsx)("span",{children:"Tailwind"}),(0,s.jsx)("span",{children:"GitHub"})]})]}),(0,s.jsxs)(l.P.div,{whileHover:{scale:1.02},transition:{duration:.3},className:"rounded-2xl border border-caput/20 bg-white/80 backdrop-blur-md p-6 shadow-lg hover:shadow-xl",onClick:()=>window.open("https://github.com/jacobgreene-dev/Cardinal"),children:[(0,s.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"CARDINAL"}),(0,s.jsx)("p",{className:"text-sm mb-4",children:"Spring application for individuals interested in hiking to find like-minded individuals for adventures on local trails. Including a map of local trails to the Piedmont area, a chatroom based on interest in a particular trail/park, and wildlife information."}),(0,s.jsxs)("div",{className:"flex gap-3 text-sm flex-wrap",children:[(0,s.jsx)("span",{children:"Spring Boot"}),(0,s.jsx)("span",{children:"Thymeleaf"}),(0,s.jsx)("span",{children:"Java"}),(0,s.jsx)("span",{children:"Javascript"}),(0,s.jsx)("span",{children:"H2 Database"}),(0,s.jsx)("span",{children:"GitHub"})]})]})]})]}),(0,s.jsxs)("section",{className:"py-24 px-4 max-w-5xl mx-auto",children:[(0,s.jsx)(l.P.h2,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.5},viewport:{once:!0},className:"text-3xl font-bold text-caput text-center mb-12",children:"Tools & Technologies"}),(0,s.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center",children:["C","C++","Python3","Java","Typescript","React","GitHub","Next.js","Spring","SQL","PostgreSQL","Docker","Azure","Mircosoft Suite","Windows","Linux"].map(e=>(0,s.jsx)("span",{className:"bg-fawn/60 text-caput text-center px-4 py-2 rounded-lg shadow-md hover:scale-105 transition-transform",children:e},e))})]}),(0,s.jsxs)("section",{className:"py-24 px-4 max-w-5xl mx-auto",children:[(0,s.jsx)("h2",{className:"text-3xl font-bold text-caput text-center mb-12",children:"What I’m Learning Now"}),(0,s.jsx)(o,{})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[470,441,684,358],()=>t(5375)),_N_E=e.O()}]);