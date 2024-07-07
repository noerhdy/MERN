import React from "react";
import CardIndex from "../Elements/card/cardNormal/CardIndex";
import CardClick from "../Elements/card/cardClick/CardClick";

const CardMain = () => {
  return (
    <>
      <div className="text-zinc-400 w-2/3 font-mono items-center text-[12px]">
        <h2>
          Some design experiments I learned and some I came up with and designed
          myself.
        </h2>
      </div>
      <CardClick
        defaultImg="./IMG/zen-wire.webp"
        clickImg="./IMG/zen.webp"
        titleName="Zen layout"
        titleText="Design"
        titleText2="Development"
      />
      <CardClick
        defaultImg="./IMG/ayuki-wire.webp"
        clickImg="./IMG/ayuki.webp"
        titleName="Ayuki (Single Page)"
        titleText="Design"
        titleText2="Development"
      />
      <CardIndex
        imgUrl="./IMG/sec3.webp"
        titleName="Dhome (Landing Page)"
        titleText="Design"
      />
      <CardIndex
        imgUrl="./IMG/af.webp"
        titleName="AS (Landing Page)"
        titleText="Design"
      />
      <div className="text-zinc-400 pt-12 w-2/3 font-mono items-center text-[12px]">
        <h2>Other</h2>
      </div>
      <CardIndex imgUrl="./IMG/sec5.webp" titleName="WF " titleText="..." />
      <CardIndex imgUrl="./IMG/sec6.webp" titleName="Vctr " titleText="..." />
      <CardIndex imgUrl="./IMG/sec7.webp" titleName="Swift " titleText="..." />
    </>
  );
};

export default CardMain;
