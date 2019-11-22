import React from 'react';
import { shallow } from 'enzyme';

import Avatar from './../avatar';

describe('src/component/charUser/avatar', () => {
    const title = 'test-title';
    const user = { id: 1, name: 'test1'};

    it('should render properly', () => {
        const wrapper = shallow(<Avatar user={user} title={title}/>);
        const classes = wrapper.prop('className');

        expect(wrapper).toHaveLength(1);
        expect(classes).toEqual(expect.stringContaining('avatar'));
        expect(classes).toEqual(expect.stringContaining('1'));
        expect(wrapper.prop('title')).toEqual(title);
    });
});
