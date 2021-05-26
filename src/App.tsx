import React from "react";
import Card from "./components/Card";
import IconSedan from "@/assets/images/icon-sedans.svg";
import IconSuvs from "@/assets/images/icon-suvs.svg";
import IconLuxury from "@/assets/images/icon-luxury.svg";
import styled from "styled-components";
type DataCar = {
    id: number;
    title: string;
    description: string;
    icon: string;
    color: string;
};

const Wrapper = styled.div`
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
`;
function App() {
    const data: DataCar[] = [
        {
            id: 1,
            title: "sedans",
            description:
                " Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
            icon: IconSedan,
            color: "--bright-orange",
        },
        {
            id: 2,
            title: "suvs",
            description:
                "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
            icon: IconSuvs,
            color: "--dark-cyan",
        },
        {
            id: 3,
            title: "luxury",
            description:
                "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
            icon: IconLuxury,
            color: "--very-dark-cyan",
        },
    ];
    const CardList = data.map(card => {
        return (
            <Card
                title={card.title}
                key={card.id}
                description={card.description}
                icon={card.icon}
                color={card.color}
            />
        );
    });
    return (
        <div className="App">
            <Wrapper>{CardList}</Wrapper>
        </div>
    );
}

export default App;
