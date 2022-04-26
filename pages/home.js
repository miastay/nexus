import React, { useState } from 'react'
import { useEffect } from 'react';
import SearchModule from './search';
import Container from './container';
import Module from './module';

const moduleList = [<Module name={'module 1'} searchable/>, <Module name={'this has a bunch of strings in its name'} searchable/>, <Module name={'different'} searchable/>]

const Home = () => {

    const [liveModules, setLiveModules] = useState(moduleList);

    const runQuery = (evt) => {
        let str = evt.srcElement.value;
        str ? setLiveModules(moduleList.filter(x => (x.props.searchable && x.props.name.indexOf(str) != -1))) : setLiveModules(moduleList);
    }

    return (
      <div class={'grid top'}>
          <SearchModule query={runQuery} />
          <Container modules={liveModules} />
          <Container />
      </div>
    )
 }
  
export default Home;