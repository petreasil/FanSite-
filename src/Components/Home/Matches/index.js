import React from "react";
import { Tag } from "../../ui/Misc";
import Blocks from "./Blocks";

const MatchesHome = () => {
  return (
    <div className="home_matches_wrapper">
      <div className="container">
        <Tag bck="#0D1831" size="50px" color="#ffffff">
          Matches
        </Tag>
        <Blocks />
        <Tag
          bck="#ffffff"
          size="22px"
          color="#0D1831"
          link={true}
          linkTo="/the_team"
        >
          See More Matches
        </Tag>
      </div>
    </div>
  );
};

export default MatchesHome;
