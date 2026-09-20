import { useState, useEffect, useContext } from "react";
import { BirthdayContext } from "../authorization/birthdayContext";
import axios from "axios";


const OpenWhen = () => {
    const [songs, setSongs] = useState([]);

    const {
        moodDown, setMoodDown, lonely, setLonely, inspiration, setInspiration,
        myCollection, setMyCollection
    } = useContext(BirthdayContext);


    useEffect(() => {
        const getSongs = async () => {
            try {
                const song = await axios.get("/songs.json")
                setSongs(song.data)
            } 
            catch (error) {
                console.log(error)
            }

        }
        getSongs()
    }, [])


    return(
        <>
            <main className="open-when-container smooth-navigation">
               {
                inspiration &&

                    <div>
                        <div className="open-when-overlay"></div>
                        <iframe src="https://audio.com/image-2/audio/selena-gomez-who-says-lyrics" frameborder="1" scrolling="no"  ></iframe>
                    </div> 
                }
                {
                    moodDown &&
                    <div>
                        <div className="open-when-overlay"></div>
                        <iframe src="https://audio.com/stacy-powell/audio/katy-perry-teenage-dream-lyrics" frameborder="0" scrolling="no" ></iframe>
                    </div>
                }
                {
                    lonely &&
                    <div>
                        <div className="open-when-overlay"></div>
                        <iframe src="https://audio.com/anna-1867369262008560/audio/selena-gomez-ft-marshmello-wolves" frameborder="0" scrolling="no" ></iframe>
                    </div>
                }
                {
                    myCollection &&
                    songs?.openWhen?.mycollection?.map((song, index)=> (
                        <div key={song.id}>
                            <div className="open-when-overlay"></div>
                            <iframe src={song.song} frameborder="0" scrolling="no"></iframe>
                        </div>
                    ))
                }
               
            </main>
        </>
    )
}

export default OpenWhen;