import React from "react";
import {
    CardContainer,
    CardContent,
    CardIcon,
    CardTitle,
    CardDescription,
    CardButton,
} from "./CardElement";

type Props = {
    title: string;
    description: string;
    icon: string;
    color: string;
};
const Card: React.FC<Props> = ({ title, description, icon, color }) => {
    return (
        <>
            <CardContainer color={color}>
                <CardContent>
                    <CardIcon src={icon} />
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                    <CardButton color={color}>Learn More</CardButton>
                </CardContent>
            </CardContainer>
        </>
    );
};

export default Card;
