
import Maps from '../../Components/Maps/Maps';
import Services from '../../Components/Services/Services';
import { CarouselComponent } from '../../Components/Slider/Slider';
import Tems from '../../Components/Tems/Tems';
import TestimonialSection from '../../Components/Testmonial/Testmonial';


const Home = () => {
    return (
        <div>
            <CarouselComponent></CarouselComponent>
            <Services></Services>
            <TestimonialSection></TestimonialSection>
            <Tems></Tems>
            <Maps></Maps>
            
        </div>
    );
};

export default Home;