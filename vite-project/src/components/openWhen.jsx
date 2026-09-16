import { useState, useContext } from "react";
import { BirthdayContext } from "../authorization/birthdayContext";


const OpenWhen = () => {


    const {moodDown, setMoodDown, lonely, setLonely, inspiration, setInspiration} = useContext(BirthdayContext);


    return(
        <>
            <main className="open-when-container smooth-navigation">
               {
                inspiration &&
                    <div>
                        <iframe src="https://audio.com/image-2/audio/selena-gomez-who-says-lyrics" frameborder="1" scrolling="no"  ></iframe>
                    </div> 
                }
                {
                    moodDown &&
                    <div>
                        <iframe src="https://audio.com/stacy-powell/audio/katy-perry-teenage-dream-lyrics" frameborder="0" scrolling="no" ></iframe>
                    </div>
                }
                {
                    lonely &&
                    <div>
                        <iframe src="https://audio.com/anna-1867369262008560/audio/selena-gomez-ft-marshmello-wolves" frameborder="0" scrolling="no" ></iframe>
                    </div>
                }
               
            </main>
        </>
    )
}

export default OpenWhen;