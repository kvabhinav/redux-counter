import { actions } from '../store/index'
import { useDispatch } from 'react-redux'

export default function IncrementButton() {
    const dispatch = useDispatch()
    const increment = () => {
        dispatch(actions.increment())
    }
    return (
        <div>
            <button onClick={increment}>Increment</button>
        </div>
    )
}