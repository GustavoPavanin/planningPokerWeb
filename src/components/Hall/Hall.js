import { useState } from 'react';
import JoinModal from '../../components/Modal/Actions/JoinRoom';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Room from '../../pages/room/Room';

const Hall = () => {
	const [openModalJoin, setOpenModalJoin] = useState(true);
    const locationInfo = useLocation();
    return(
		<>
        {locationInfo.state && <Room />}
		{!locationInfo.state && <Header currentScreen='hall' /> }
        {!locationInfo.state && <JoinModal isOpen={openModalJoin} onlyNick={true} /> }
		</>
    );
}

export default Hall;