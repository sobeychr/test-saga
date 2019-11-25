import React from 'react';
import { shallow } from 'enzyme';
import { userMock } from 'Util/mock';
import toJson from 'enzyme-to-json';

import Avatar from './../avatar';

describe('src/component/charUser/avatar', () => {
    const title = 'test-title';

    it('should render properly', () => {
        const wrapper = shallow(<Avatar user={userMock} title={title} />);
        const classes = wrapper.prop('className');

        expect(wrapper).toHaveLength(1);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
