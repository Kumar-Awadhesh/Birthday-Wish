import { useState, useEffect, useContext } from "react";
import { BirthdayContext } from "../authorization/birthdayContext";
import axios from "axios";


const OpenWhen = () => {
    const [songs, setSongs] = useState([]);
    const [retro, setRetro] = useState(false);

    const {
        moodDown, setMoodDown, lonely, setLonely, inspiration, setInspiration,
        myCollection, setMyCollection, manyMood, setManyMood
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


    return (
        <>
            <main className="open-when-container smooth-navigation">
                <div className="toggle-btn-container">
                    <p>English</p>
                    <p className={retro ? "retro-btn-right" : "retro-btn-left"}><button onClick={() => {
                        retro ? setRetro(false) : setRetro(true)
                    }}></button></p>
                    <p>Hindi-Retro</p>
                </div>
                {
                    retro ?
                        <div>
                            {
                                songs?.openWhen?.hindiRetro?.map((song, index) => (
                                    <div key={song.id}>
                                        <div className="open-when-overlay"></div>
                                        <iframe src={song.song} frameBorder="0" scrolling="no"></iframe>
                                    </div>
                                ))
                            }
                        </div> :
                        <div>
                            {
                                inspiration &&

                                songs?.openWhen?.inspiration?.map((song, index) => (
                                    <div key={song.id}>
                                        <div className="open-when-overlay"></div>
                                        <iframe src={song.song} frameBorder="0" scrolling="no"></iframe>
                                    </div>
                                ))
                            }
                            {
                                moodDown &&
                                songs?.openWhen?.moodDown?.map((song, index) => (
                                    <div key={song.id}>
                                        <div className="open-when-overlay"></div>
                                        <iframe src={song.song} frameBorder="0" scrolling="no"></iframe>
                                    </div>
                                ))
                            }
                            {
                                lonely &&
                                songs?.openWhen?.lonely?.map((song, index) => (
                                    <div key={song.id}>
                                        <div className="open-when-overlay"></div>
                                        <iframe src={song.song} frameBorder="0" scrolling="no"></iframe>
                                    </div>
                                ))
                            }
                            {
                                manyMood &&
                                songs?.openWhen?.manyMood?.map((song, index) => (
                                    <div key={song.id}>
                                        <div className="open-when-overlay"></div>
                                        <iframe className="many-mood-iframe" src={song.song} frameBorder="0" scrolling="no" ></iframe>
                                    </div>
                                ))
                            }
                            {
                                myCollection &&
                                songs?.openWhen?.mycollection?.map((song, index) => (
                                    <div key={song.id}>
                                        <div className="open-when-overlay"></div>
                                        <iframe src={song.song} frameBorder="0" scrolling="no"></iframe>
                                    </div>
                                ))
                            }
                        </div>
                }

            </main>
        </>
    )
}

export default OpenWhen;