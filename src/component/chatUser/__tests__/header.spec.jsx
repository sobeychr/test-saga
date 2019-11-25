import React from 'react';
import { shallow } from 'enzyme';
import { userMock } from 'Util/mock';
import toJson from 'enzyme-to-json';

import Header from './../header';

describe('src/component/charUser/header', () => {
    const {
        name: { display },
    } = userMock;

    it('should render properly', () => {
        const wrapper = shallow(<Header user={userMock} />);

        expect(wrapper).toHaveLength(1);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
