import { useState, useEffect, useContext } from "react";
import { BirthdayContext } from "../authorization/birthdayContext";
import axios from "axios";


const OpenWhen = () => {
    const [songs, setSongs] = useState([]);
    const [retro, setRetro] = useState(false);
    const [searchSongs, setSearchSongs] = useState("");
    const [filteredSong, setFilteredSong] = useState([]);

    const {
        moodDown, setMoodDown, lonely, setLonely, inspiration, setInspiration,
        myCollection, setMyCollection, manyMood, setManyMood, passkey, setPasskey
    } = useContext(BirthdayContext);

    const user = localStorage.getItem("User")


    useEffect(() => {
        const getSongs = async () => {
            try {
                const song = await axios.get("/songs.json")
                setSongs(song.data)
            }
            catch (error) {
                console.log(error)
            }
            if (passkey !== null){
                setMyCollection(true);
            }
           
        }
        getSongs()
    }, [])

    
    useEffect(()=> {

        const timer = setTimeout(()=> {
            const searchData = songs.openWhen?.mycollection?.filter(newSong => newSong.song.includes(searchSongs))
            if(searchSongs !== "" && searchData.length === 0){
                return alert("No match found !")
            }
            setFilteredSong(searchData)
        },1000)
        return () => {
            clearTimeout(timer);
        }
    },[searchSongs])

   

    return (
        <>
            <main className="open-when-container smooth-navigation">
                {    myCollection &&
                    <div className="toggle-btn-container">
                        <p>English</p>
                        <p className={retro ? "retro-btn-right" : "retro-btn-left"}><button onClick={() => {
                            retro ? setRetro(false) : setRetro(true)
                        }}></button></p>
                        <p>Hindi-Retro</p>
                        <input className="search-box" type="text" placeholder="Search song..." onChange={(e)=> setSearchSongs(e.target.value)} />
                    </div>
                }   
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
                                searchSongs === "" ?
                                songs?.openWhen?.mycollection?.map((song, index) => (
                                    <div key={song.id}>
                                        <div className="open-when-overlay"></div>
                                        <iframe src={song.song} frameBorder="0" scrolling="no"></iframe>
                                    </div>
                                )) :
                                filteredSong?.map((song, index) => (
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