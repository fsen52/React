import React from 'react'
import TestimonialItem from './TestimonialItem.js'
import SectionTitle from './SectionTitle.js'

const Testimonial = (props) => {
    return (
        <section id="testimonial" class="testimonial-02 py-6 bg-grey">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle baslik="Testimonial" isim="What people say"/>
                        
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="owl-carousel">
                            {/* <!-- Item 01 --> */}
                            <TestimonialItem resim="assets/img/man.png" mesaj=" In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready." isim="John Doe" unvan="Seo Manager"/>
                            
                            {/* <!-- Item 02 --> */}
                            <TestimonialItem resim="assets/img/woman-avator.png" mesaj=" In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready." isim="Mery Doe" unvan="Seo Manager"/>
                            
                            {/* <!-- Item 03 --> */}
                            <TestimonialItem resim="assets/img/woman.png" mesaj=" In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready." isim="Sarah Doe" unvan="Seo Manager"/>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
