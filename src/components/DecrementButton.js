import { actions } from '../store/index'
import { useDispatch } from 'react-redux'

export default function DecrementButton() {
    const dispatch = useDispatch()
    const decrement = () => {
        dispatch(actions.decrement())
    }
    return (
        <div>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}