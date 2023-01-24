import useAppSelector from './useAppSelector'

const useCounter = () => useAppSelector(state => state.counter)

export default useCounter
