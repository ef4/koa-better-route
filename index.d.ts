// Adapted from type definitions for koa-route 3.2

import * as Koa from 'koa';
import * as pathToRegexp from 'path-to-regexp';

export declare namespace KoaRoute {

    interface RouteContext {
        routePath: string;
        routeParams: { [name: string]: string };
    }

    type Context<StateT = Koa.DefaultState, CustomT = Koa.DefaultContext> = Koa.ParameterizedContext<StateT, CustomT> & RouteContext;

    type Path = string | RegExp | Array<string | RegExp>;

    type Handler<StateT, CustomT> = (this: Context<StateT, CustomT>, ctx: Context<StateT, CustomT>, next: Koa.Next) => any;

    interface Method {
        <StateT, CustomT>(path: Path): (routeFunc: Handler<StateT, CustomT>) => Handler<StateT, CustomT>;
        <StateT, CustomT>(path: Path, fn: Handler<StateT, CustomT>, opts?: pathToRegexp.ParseOptions & pathToRegexp.RegExpOptions): Handler<StateT, CustomT>;
    }

    interface Routes {
        all: Method;
        acl: Method;
        bind: Method;
        checkout: Method;
        connect: Method;
        copy: Method;
        delete: Method;
        del: Method;
        get: Method;
        head: Method;
        link: Method;
        lock: Method;
        msearch: Method;
        merge: Method;
        mkactivity: Method;
        mkcalendar: Method;
        mkcol: Method;
        move: Method;
        notify: Method;
        options: Method;
        patch: Method;
        post: Method;
        propfind: Method;
        proppatch: Method;
        purge: Method;
        put: Method;
        rebind: Method;
        report: Method;
        search: Method;
        subscribe: Method;
        trace: Method;
        unbind: Method;
        unlink: Method;
        unlock: Method;
        unsubscribe: Method;
    }
}

declare const routes: KoaRoute.Routes;

export default routes;

