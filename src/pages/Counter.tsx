import { Button } from 'antd'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { increment } from '@/redux/slices/counter'
import styles from './index.module.scss'
import { fetchAccount } from '@/api'
import { useEffect } from 'react'

function Counter() {
  const count = useAppSelector((state) => state.counter.count)
  const dispatch = useAppDispatch()

  useEffect(() => {
    fetchAccount()
  }, [])

  return (
    <div>
      <div className={styles['count-text']}>{count}</div>
      <Button
        onClick={() => {
          dispatch(increment())
        }}
      >
        +
      </Button>
    </div>
  )
}

export default Counter
