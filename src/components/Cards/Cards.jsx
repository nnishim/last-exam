import React, { useState } from "react";
import { ContainerSC } from "../../uikit/ContainerSC";
import {
  Card,
  CardBottom,
  CardDateBlock,
  CardDateText,
  CardDesc,
  CardLink,
  CardLinkIcon,
  CardsContent,
  CardsSC,
  CardTime,
  CardTitle,
  CardTop,
} from "./CardsSC";

function Cards() {
  const [cards, setCards] = useState([
    {
      id: 1,
      date: 23,
      mounth: "Dec",
      title: "Macquarie University, Sydney, Australia",
      desc: "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat.",
      time: "10:00 AM - 2:00 PM",
    },
    {
      id: 2,
      date: 17,
      mounth: "Oct",
      title: "Federation University, Australia",
      desc: "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat.",
      time: "10:00 AM - 2:00 PM",
    },
  ],);
  return (
    <>
      <CardsSC>
        <ContainerSC>
          <CardsContent>
            {cards.map((card) => {
              return (
                <Card key={card.id}>
                  <CardTop>
                    <CardDateBlock>
                      <CardDateText>{card.date}</CardDateText>
                      <CardDateText>{card.mounth}</CardDateText>
                    </CardDateBlock>
                    <CardTitle>{card.title}</CardTitle>
                  </CardTop>
                  <CardDesc>{card.desc}</CardDesc>
                  <CardBottom>
                    <CardLink href="#">Learn More <CardLinkIcon src="./images/arrow.svg"/></CardLink>
                    <CardTime>{card.time}</CardTime>
                  </CardBottom>
                </Card>
              );
            })}
          </CardsContent>
        </ContainerSC>
      </CardsSC>
    </>
  );
}

export default Cards;
