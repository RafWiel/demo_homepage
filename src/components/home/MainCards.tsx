import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BulletCard from './BulletCard';
import '../../assets/home/main-cards.css';

const MainCards = () => {   
    return (
        <div className="mc-main-container">            
            <Container className="mc-container">
                <Row>
                    <Col
                        cols="12"
                        lg="4">                                                    
                        <BulletCard
                            image="card_projects.jpg"
                            title="Projekty"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim feugiat eros a eleifend. Praesent tincidunt lacus ornare, efficitur sem sed, fringilla odio. Ut sed euismod nunc. Mauris dictum imperdiet nunc, nec sagittis felis rutrum sit amet. Nunc rhoncus quam volutpat neque gravida, consequat pulvinar felis blandit. In nulla turpis, laoreet non auctor eget, congue non mi. Morbi id dapibus massa, eu venenatis est. Quisque porta sem sed turpis euismod, eu scelerisque diam ultrices. Aenean et arcu ut erat mollis blandit id non magna. Quisque id congue risus, vel cursus orci.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim feugiat eros a eleifend. Praesent tincidunt lacus ornare, efficitur sem sed, fringilla odio. Ut sed euismod nunc. Mauris dictum imperdiet nunc, nec sagittis felis rutrum sit amet. Nunc rhoncus quam volutpat neque gravida, consequat pulvinar felis blandit. In nulla turpis, laoreet non auctor eget, congue non mi. Morbi id dapibus massa, eu venenatis est. Quisque porta sem sed turpis euismod, eu scelerisque diam ultrices. Aenean et arcu ut erat mollis blandit id non magna. Quisque id congue risus, vel cursus orci."
                            route="/solutions"/>
                    </Col>
                    <Col
                        cols="12"
                        lg="4">                            
                        <BulletCard 
                            image="card_services.jpg"
                            title="Usługi"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim feugiat eros a eleifend. Praesent tincidunt lacus ornare, efficitur sem sed, fringilla odio. Ut sed euismod nunc. Mauris dictum imperdiet nunc, nec sagittis felis rutrum sit amet. Nunc rhoncus quam volutpat neque gravida, consequat pulvinar felis blandit. In nulla turpis, laoreet non auctor eget, congue non mi. Morbi id dapibus massa, eu venenatis est. Quisque porta sem sed turpis euismod, eu scelerisque diam ultrices. Aenean et arcu ut erat mollis blandit id non magna. Quisque id congue risus, vel cursus orci."
                            route="/services"/>
                    </Col>
                    <Col
                        cols="12"
                        lg="4">                            
                        <BulletCard
                            image="card_maintenance.jpg"
                            title="Serwis"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim feugiat eros a eleifend. Praesent tincidunt lacus ornare, efficitur sem sed, fringilla odio. Ut sed euismod nunc. Mauris dictum imperdiet nunc, nec sagittis felis rutrum sit amet. Nunc rhoncus quam volutpat neque gravida, consequat pulvinar felis blandit. In nulla turpis, laoreet non auctor eget, congue non mi. Morbi id dapibus massa, eu venenatis est. Quisque porta sem sed turpis euismod, eu scelerisque diam ultrices. Aenean et arcu ut erat mollis blandit id non magna. Quisque id congue risus, vel cursus orci."
                            route="maintenance"/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MainCards;