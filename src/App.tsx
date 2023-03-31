import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import { Button } from 'antd'
import Counter from '@/pages/Counter'

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>欢迎使用React18</h1>
        <h4>
          <Button type="primary">Antd v4</Button>
        </h4>
        <Counter />
        <h4>study everyday</h4>
      </div>
    </Provider>
  )
}

export default App
