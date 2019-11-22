import React from 'react';
import { shallow } from 'enzyme';
import { userMock } from 'Util/mock';

import Avatar from './../avatar';

describe('src/component/charUser/avatar', () => {
    const title = 'test-title';

    it('should render properly', () => {
        const wrapper = shallow(<Avatar user={userMock} title={title} />);
        const classes = wrapper.prop('className');

        expect(wrapper).toHaveLength(1);
        expect(classes).toEqual(expect.stringContaining('avatar'));
        expect(classes).toEqual(expect.stringContaining('4'));
        expect(wrapper.prop('title')).toEqual(title);
    });
});
