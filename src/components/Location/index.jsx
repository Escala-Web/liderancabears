import React from 'react';
import LocationContainer from './style';

const Location = () => {
    return (
        <LocationContainer>
            <h2 className='title'>Nossa Localização</h2>
            <p className='subtitle'>R. Araritaguaba, 1144 - Vila Maria, São Paulo - SP</p>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086509486634!2d-122.4194154846814!3d37.77492927975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2s1234%20Bear%20Street%2C%20Bear%20City%2C%20BC%2056789!5e0!3m2!1sen!2sus!4v1633036800000!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Our Location"
            ></iframe>
        </LocationContainer>
    );
};

export default Location;