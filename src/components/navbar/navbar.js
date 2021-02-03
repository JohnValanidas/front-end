import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'

import { HomeOutlined, ShareAltOutlined } from '@ant-design/icons';


const { Sider } = Layout;

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        }

    }

    onCollapse = collapsed => {
        this.setState({collapsed});
    }

    render() {
        const { collapsed } = this.state;
        return(
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<HomeOutlined />}>
                            <Link to="/home">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<ShareAltOutlined />}>
                            <Link to="/networking">Networking</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
        );
    }
}

export default NavBar;