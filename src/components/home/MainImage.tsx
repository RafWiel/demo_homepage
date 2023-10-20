import '../../assets/home/main-image.css';
import ImageSlider from './ImageSlider';
import { useState, useEffect } from 'react';

const MainImage = () => {      
    return (
        <div className="mi-container">            
            <ImageSlider 
                images={[
                    'home/images/main_image_1.jpg',
                    'home/images/main_image_2.jpg',
                    'home/images/main_image_3.jpg',
                    'home/images/main_image_4.jpg',
                    'home/images/main_image_5.jpg',
                    'home/images/main_image_6.jpg'
                    ]}
                mobileImages={[
                    'home/images/main_image_xs_1.jpg',
                    'home/images/main_image_xs_2.jpg',
                    'home/images/main_image_xs_3.jpg',
                    'home/images/main_image_xs_4.jpg',
                    'home/images/main_image_xs_5.jpg',
                    'home/images/main_image_xs_6.jpg'
                    ]}/>        
    
            {/* <div class="mi-text-1">{{ displaySize }} Nowoczesne systemy<br>i kompleksowe usługi</div>
            <div class="mi-text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim feugiat eros a eleifend. Praesent tincidunt lacus ornare, efficitur sem sed, fringilla odio. Ut sed euismod nunc. </div>
            <div class="mi-button">
                <v-btn
                    class="text-white"
                    size="large"
                    router
                    to="solutions"
                    variant="flat" >
                    Rozwiązania
                </v-btn> 
            </div>*/}
            
        </div>
    );
}

export default MainImage;