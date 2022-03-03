import data from '../../data/data.json';
import Tours from '../tours/Tours';
import Footer from '../footer/Footer';
function Home() {
    return (
        <>
            <Tours data={data} />
            <Footer />
        </>
    );
}
export default Home;