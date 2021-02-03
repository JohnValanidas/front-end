import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";


import logo from '../../images/logo.svg';
import './app.css';
import {Navbar} from '../../../src/components'
import {Breadcrumb, Layout} from "antd";

const {Content, Header, Footer} = Layout

function App() {
    return (
        <div className="App">
            <Router>
                <Layout style={{minHeight: '100vh'}}>
                    <Header className="site-layout-background" style={{padding: 0}}/>
                    <Navbar/>
                    <Layout className="site-layout">
                        <Content style={{margin: '0 16px'}}>
                            <Switch>
                                <Route path="/networking">
                                    <Networking/>
                                </Route>
                                <Route path="/">
                                    <Home/>
                                </Route>
                            </Switch>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>Network Emulator and Simulator</Footer>
                    </Layout>
                </Layout>
            </Router>
        </div>

    );
}

function Home() {
    return (
        <div>Home</div>
    );
}

function Networking() {
    return (
        <div>Networking page stand-in!</div>
    );
}

export default App;
