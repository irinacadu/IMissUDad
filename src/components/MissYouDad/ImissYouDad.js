import './missYouDad.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import getApi from './get_api';


export default function ImissYouDad() {
 
getApi();


    return (
        <div class="miss_you_dad">
            <div class="title bebas-neue-regular">
                <h1 class="">I Miss you </h1>
                <h1 class="dad">DAD <div class="love"></div></h1>

            </div>
            <div class="music_miss_you_dad">
                <h1 class="bebas-neue-regular">thank you for giving me the gift of a vision of life through music.</h1>

                <div class="reproductor">
                    <div class="music_miss_you_dad">
                        {musicData.map((song) => (
                            <div key={song.id}>
                                <h2>{song.title}</h2>
                                {/* ... other song details */}
                            </div>
                        ))}
                    </div>

                    <FontAwesomeIcon icon={faArrowLeft} />
                    <FontAwesomeIcon icon={faPlay} />
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>
        </div>

    );


}