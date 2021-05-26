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
`,n=e.div`
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`,a=e.h1`
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
`,c=e.img`
    width: 52px;
`,d=e(o)`
    margin-top: auto;
`,s=({title:e,description:t,icon:o,color:s})=>r.createElement(r.Fragment,null,r.createElement(i,{color:s},r.createElement(n,null,r.createElement(c,{src:o}),r.createElement(a,null,e),r.createElement(l,null,t),r.createElement(d,{color:s},"Learn More"))));const m=e.div`
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
`;function u(){const e=[{id:1,title:"sedans",description:" Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",icon:"/3-column-preview-card-component-main/assets/icon-sedans.1b33cfa6.svg",color:"--bright-orange"},{id:2,title:"suvs",description:"Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",icon:"/3-column-preview-card-component-main/assets/icon-suvs.56b747a1.svg",color:"--dark-cyan"},{id:3,title:"luxury",description:"Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",icon:"/3-column-preview-card-component-main/assets/icon-luxury.b6728a87.svg",color:"--very-dark-cyan"}].map((e=>r.createElement(s,{title:e.title,key:e.id,description:e.description,icon:e.icon,color:e.color})));return r.createElement("div",{className:"App"},r.createElement(m,null,e))}t.render(r.createElement(r.StrictMode,null,r.createElement(u,null)),document.getElementById("root"));
