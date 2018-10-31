import React from 'react';
import { shallow } from 'enzyme';

import GuildList from './guild-list';

describe('<GuildList />', () => {
  it('Renders without crashing', () => {
    const data = {};
    shallow(<GuildList data={data}/>);
  });
});