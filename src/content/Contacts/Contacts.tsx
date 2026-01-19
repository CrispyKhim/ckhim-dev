import SendIcon from '@mui/icons-material/Send';
import { NavLink } from 'react-router-dom';

export default function Contacts() {
    return (
        <>
        <div className='w-full text-center py-20 text-xl transition-colors hover:bg-blue-300'>
            <NavLink to={'/contacts'}><SendIcon /> Send me a message</NavLink>
        </div>
        </>
    )
}