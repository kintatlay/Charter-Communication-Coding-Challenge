import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Router from './Router';
import { Route } from 'react-router-dom';
import Loader from './Loader';

configure({adapter: new Adapter()});
let pathMap = {};
describe('routes using array of routers', () => {
    beforeAll(() => {
        const component = shallow(<Router />);
        pathMap = component.find(Route).reduce((pathMap, route) => {
            const routeProps = route.props();
            pathMap[routeProps.path] = routeProps.element;
            return pathMap;
        }, {});
    })

    it('Should show Loader as Suspense component for /Home router (getting array of routes', () => {
        expect(pathMap['/Home'].props.fallback).toStrictEqual(<Loader/>);
    })
})