import React, { useState } from 'react'
import { useEffect } from 'react';
import SearchModule from './search';
import Container from './container';
import Module from './module';
import { useRouter } from 'next/router';
import { getPosts, getSessions, getUser, getUsers } from '../components/query.js';


const Home = () => {

    //const [liveModules, setLiveModules] = useState(moduleList);
    const [query, setQuery] = useState("");
    const [moduleList, setModuleList] = useState(null);

    const generateModules = () => {
        let modules = [];
        getPosts().then((posts) => {
            posts.forEach(x => {
                modules.push(<Module title={x.data.title} body={x.data.body} author={x.data.author} date={x.data.date} scores={x.data.score} id={x.id} query={query} searchable/>)
            })
            modules.sort((a, b) => sorter(a, b, "date"))
            setModuleList(modules);
        })
    }

    const sorter = (a, b, sort) => {
        switch(sort) {
            case "score":
                return (b.props.scores['up'].length-b.props.scores['down'].length) - (a.props.scores['up'].length-a.props.scores['down'].length);
            case "date":
            default:
                return b.props.date - a.props.date;
        }
    }

    const reSort = (sort) => {
        let modules = moduleList;
        setModuleList([]);
        modules.sort((a, b) => sorter(a, b, sort))
        setModuleList(modules);
        return;
    }

    const updateSearch = (querystr) => {
        setQuery(querystr);
    }

    const grabUser = () => {
        getUser({username: "example_user"}).then((data) => {
            console.log(data);
        });
    }

    const grabUsers = () => {
        getUsers().then((data) => {
            console.log(data);
        });
    }

    // useEffect(() => {
    //     window.addEventListener('load', generateModules());
    // })

    return (
      <div class={'grid top'}>
          <SearchModule query={updateSearch} setSort={reSort}/>
          <Container type={'modules'} modules={moduleList} query={query} refresh={() => generateModules()}/>
          <button onClick={() => {grabUser(); grabUsers()}}/>
          <Container />
          <div>
              {moduleList == null ? generateModules() : null}
          </div>
      </div>
    )
 }
  
export default Home;