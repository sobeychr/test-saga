import React from 'react';
import { shallow } from 'enzyme';
import { userMock } from 'Util/mock';

import Header from './../header';

describe('src/component/charUser/header', () => {
    const {
        name: { display },
    } = userMock;

    it('should render properly', () => {
        const wrapper = shallow(<Header user={userMock} />);

        expect(wrapper).toHaveLength(1);
        expect(wrapper.text()).toEqual(expect.stringContaining(display));
    });
});
