import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faAngleDoubleLeft, faAngleRight, faAngleLeft} from "@fortawesome/free-solid-svg-icons";

const  PLayer = ()=> {
    return (
        <div className="player">
            <div className="time-control">
                <p>start time</p>
                <input type="range"/>
                <p>end time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
              <FontAwesomeIcon className="play" size="2x" icon={faPlay} />
                <FontAwesomeIcon className="skip-forward" size="2x"  icon={faAngleRight} />
            </div>
            <div> hello world</div>
        </div>
    )
}

export default PLayer;