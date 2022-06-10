import HomeButton from './HomeButton'
import GitButton from './GitButton'
import BackButton from './BackButton'

const NavGroup = props => (
    <div className='fixed left-0'>
        <div className='flex'>
            <GitButton />
            { props.home ? <HomeButton /> : '' }
            { props.back ? <BackButton /> : '' }
        </div>
    </div>
);

export default NavGroup;