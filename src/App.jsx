import { useState } from 'react'
import styled from 'styled-components'
import {
  ConfigProvider,
  Button,
  Card,
  Space,
  Typography,
  Layout,
  theme
} from 'antd'
import {
  SmileOutlined,
  HeartOutlined,
  RocketOutlined,
  ThunderboltOutlined
} from '@ant-design/icons'
import themeConfig from './theme.json'

const { Title, Paragraph } = Typography
const { Header, Content } = Layout

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`

const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`

const StyledContent = styled(Content)`
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`

const StyledCard = styled(Card)`
  max-width: 600px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`

const IconButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 8px;
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <ConfigProvider theme={themeConfig}>
      <AppContent count={count} setCount={setCount} />
    </ConfigProvider>
  )
}

function AppContent({ count, setCount }) {
  const { token } = theme.useToken()

  return (
    <StyledLayout>
      <StyledHeader>
        <Title level={2} style={{ color: 'white', margin: 0 }}>
          <RocketOutlined /> Ant Design + Vite + React + Styled Components
        </Title>
      </StyledHeader>

      <StyledContent>
        <StyledCard>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <div>
              <Title level={3}>
                Welcome to Your New Project! <SmileOutlined />
              </Title>
              <Paragraph>
                This project is set up with:
              </Paragraph>
              <ul>
                <li><strong>React 18.3.0</strong> - Pure React</li>
                <li><strong>Ant Design 5.22.0</strong> - UI Component Library with Custom Theme</li>
                <li><strong>@ant-design/icons</strong> - Icon Library</li>
                <li><strong>Styled Components 6.1.13</strong> - CSS-in-JS</li>
                <li><strong>Vite</strong> - Fast Build Tool</li>
              </ul>
              <Paragraph type="secondary">
                Theme colors: Primary <span style={{ color: token.colorPrimary }}>#{token.colorPrimary}</span>,
                Success <span style={{ color: token.colorSuccess }}>#{token.colorSuccess}</span>
              </Paragraph>
            </div>

            <div>
              <Title level={4}>Counter Example</Title>
              <Paragraph>Current count: <strong>{count}</strong></Paragraph>
              <Space wrap>
                <IconButton
                  type="primary"
                  onClick={() => setCount(count + 1)}
                >
                  <ThunderboltOutlined /> Increment
                </IconButton>
                <Button onClick={() => setCount(count - 1)}>
                  Decrement
                </Button>
                <Button danger onClick={() => setCount(0)}>
                  Reset
                </Button>
              </Space>
            </div>

            <div>
              <Button
                type="primary"
                size="large"
                icon={<HeartOutlined />}
                style={{
                  background: token.colorPrimary,
                  width: '100%'
                }}
              >
                Start Building Something Amazing!
              </Button>
            </div>
          </Space>
        </StyledCard>
      </StyledContent>
    </StyledLayout>
  )
}

export default App
