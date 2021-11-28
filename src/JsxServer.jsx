import expressJsx from "../lib";
import { Server, Middleware, Get } from "../lib/components";

function JsxServer() {
    const middlewareHandler = (req, res, next) => {
        console.log('Request:', req.url);
        next();
    }

    const routeOneHandler = (req, res) => {
        res.send('Hello from JSX!');
    }

    const routeTwoHandler = (req, res) => {
        res.send('Hello, ' + (req.query.name ?? 'Anon'));
    }

    return <Server port={3000}>
        <Get url={'/'} handler={routeOneHandler} />
        <Middleware handler={middlewareHandler}>
            <Get url={'/two'} handler={routeTwoHandler} />
        </Middleware>
    </Server>
}

JsxServer();