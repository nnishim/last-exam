import React from "react";
import { ContainerSC } from "../../uikit/ContainerSC";
import { InfoContent, InfoDesc, InfoSC, InfoTitle } from "./InfoSC";

function Info() {
  return (
    <>
      <InfoSC>
        <ContainerSC>
          <InfoContent>
            <InfoTitle>Upcoming University Events</InfoTitle>
            <InfoDesc>
              Sunt autem nusquam hoc epicurus in gravissimo bello
              animadversionis metu degendae praesidia firmissima. Torquatos
              nostros? quos tu paulo ante cum teneam sententiam, quid bonum esse
              vult.
            </InfoDesc>
          </InfoContent>
        </ContainerSC>
      </InfoSC>
    </>
  );
}

export default Info;
