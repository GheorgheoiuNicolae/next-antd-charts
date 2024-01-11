import { Layout } from "antd";
const { Header } = Layout;
import { Avatar, Divider } from 'antd';
import { UserOutlined, MessageOutlined } from '@ant-design/icons';
import '../globals.css';

const widgetStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  lineHeight: "64px",
  display: "block",
  boxShadow: "2px 3px 3px 0 rgb(0 0 0 / 8%)",
  border: '1px solid #eaeaea',
  marginBottom: "20px",
  maxHeight: '600px',
  overflow: 'hidden',
  borderRadius: '20px'
};
const widgetFooterStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  borderTop: '1px solid #f8f7f8',
  display: 'flex',
  justifyContent: 'space-between'
};


const Widget = ({
    children,
    title
  }: { children: React.ReactNode, title: string }) => (
  <div style={widgetStyle}>
    <h3 style={{ margin: 0, padding: '0px 10px 0 10px' }}>{title}</h3>
    <Divider style={{margin: 0}} />
    {children}
    <div style={widgetFooterStyle}>
      <Avatar style={{margin: '10px'}} icon={<UserOutlined />} />
      <div style={{margin: '-5px 20px', color: '#c2c7cb', }}>
        <span style={{marginRight: '5px'}}>44</span>
        <MessageOutlined />
      </div>
    </div>
  </div>
)
export default Widget;