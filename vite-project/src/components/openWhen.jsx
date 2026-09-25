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
                console.log(song.data.openWhen.mycollection)
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

                    songs?.openWhen?.inspiration?.map((song, index)=> (
                        <div key={song.id}>
                            <div className="open-when-overlay"></div>
                            <iframe src={song.song} frameBorder="0" scrolling="no"></iframe>
                        </div>
                    ))
                }
                {
                    moodDown &&
                    songs?.openWhen?.moodDown?.map((song, index)=> (
                        <div key={song.id}>
                            <div className="open-when-overlay"></div>
                            <iframe src={song.song} frameBorder="0" scrolling="no"></iframe>
                        </div>
                    ))
                }
                {
                    lonely &&
                    songs?.openWhen?.lonely?.map((song, index)=> (
                        <div key={song.id}>
                            <div className="open-when-overlay"></div>
                            <iframe src={song.song} frameBorder="0" scrolling="no"></iframe>
                        </div>
                    ))
                }
                {
                    myCollection &&
                    songs?.openWhen?.mycollection?.map((song, index)=> (
                        <div key={song.id}>
                            <div className="open-when-overlay"></div>
                            <iframe src={song.song} frameBorder="0" scrolling="no"></iframe>
                        </div>
                    ))
                }
               
            </main>
        </>
    )
}

export default OpenWhen;