import React, { Component, lazy, Suspense } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

const Login = lazy(() => import("../Components/Login"))
const NotFound = lazy(() => import("../Components/NotFoundPage"));

const loader = <div style={{ background: 'rgba(255,255,255,0.8)', width: '100%', height: '100%', position: 'fixed', left: '0', top: '0', zIndex: '999' }}>
    <div style={{ textAlign: 'center', position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)', top: '50%', width: '0', height: '0', }}>
        <div className={`loader-wrapper`} >
            <div className="loader">
                <div className="whirly-loader"> </div>
            </div>
        </div>
    </div>
</div>

class Routes extends Component {
    render() {
        return (
            <Suspense fallback={loader}>
                <Router>
                    <Switch>
                        <Route exact path={`/`} component={Login} />
                        <Route exact path={`/login`} component={Login} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </Suspense>
        )
    }
}

export default Routes;