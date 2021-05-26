import{q as e,R as r,a as t}from"./vendor.b4f0a2ce.js";const o=e.button`
    font-family: "Lexend Deca", sans-serif;
	width: max-content;
    color: ${({color:e})=>`var(${e})`};
    background: var(--very-light-gray);
    padding: .75rem 2rem;
    border: 2px solid var(--very-light-gray);
    border-radius: 9999px;
    cursor: pointer;
    &:hover {
        background: transparent;
        color: var(--very-light-gray);

        transition: all 0.3s ease-in-out;
    }
`,i=e.div`
    min-height: 60vh;
    background-color: ${({color:e})=>`var(${e})`};
    padding: 4rem;
    &:first-child {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
    &:last-child {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    @media screen and (max-width: 525px) {
        padding: 2rem;
        &:first-child {
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            border-bottom-left-radius: 0px;
        }
        &:last-child {
            border-top-right-radius: 0px;
            border-bottom-right-radius: 5px;
            border-bottom-left-radius: 5px;
        }
    }
`,a=e.div`
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`,n=e.h1`
    font-family: "Big Shoulders Display", cursive;
    font-weight: bold;
    text-transform: uppercase;
    color: var(--very-light-gray);
    margin-top: auto;
`,l=e.p`
    font-family: "Lexend Deca", sans-serif;
    font-weight: lighter;
    line-height: 1.5rem;
    color: var(--very-light-gray);
    margin-top: auto;
`,d=e.img`
    width: 52px;
`,s=e(o)`
    margin-top: auto;
`,c=({title:e,description:t,icon:o,color:c})=>r.createElement(r.Fragment,null,r.createElement(i,{color:c},r.createElement(a,null,r.createElement(d,{src:o}),r.createElement(n,null,e),r.createElement(l,null,t),r.createElement(s,{color:c},"Learn More"))));const u=e.div`
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    min-height: 100vh;
    margin: 0 auto;
    @media screen and (max-width: 525px) {
        flex-direction: column;
    }
`;function m(){const e=[{id:1,title:"sedans",description:" Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",icon:"/assets/icon-sedans.1b33cfa6.svg",color:"--bright-orange"},{id:2,title:"suvs",description:"Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",icon:"/assets/icon-suvs.56b747a1.svg",color:"--dark-cyan"},{id:3,title:"luxury",description:"Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",icon:"/assets/icon-luxury.b6728a87.svg",color:"--very-dark-cyan"}].map((e=>r.createElement(c,{title:e.title,key:e.id,description:e.description,icon:e.icon,color:e.color})));return r.createElement("div",{className:"App"},r.createElement(u,null,e))}t.render(r.createElement(r.StrictMode,null,r.createElement(m,null)),document.getElementById("root"));
