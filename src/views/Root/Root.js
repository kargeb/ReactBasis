import React from 'react';
import "./index.css";
import AppContext from '../../context.js';
import ListWrapper from '../../components/List/List.js';
import Form from '../../components/Form/Form.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TwittersView from '../TwittersView/TwittersView.js';
import ArticlesView from '../ArticlesView/ArticlesView.js';
import NotesView from '../NotesView/NotesView.js';
import Header from '../../components/Header/Header.js';
import Modal from '../../components/Modal/Modal.js';



// const initialStateItems = [
//     {
//         image: "http://myhswm.org/images/sized/images/animals/image4-581x640.JPG",
//         name: 'Dan Abramov',
//         description: 'Working on @reactjs. The demo guy.',
//         twitterLink: 'https://twitter.com/dan_abramov',
//     }
// ]

class Root extends React.Component{

    state = {
        twitter: [],
        article: [],
        note: [],
        modalVisible: false,
    }

    addItem = (e) => {
        e.preventDefault();

        console.log("piesssssssssssssss hał");

        // const newItem = {
        //     name: e.target[0].value,
        //     twitterLink: e.target[1].value,
        //     image: e.target[2].value,
        //     description: e.target[3].value,
        // }

        // this.setState( prevState => (
        //     {
        //     }
        // ))
        // e.target.reset();
    }

    showModal = () =>{
        this.setState( {modalVisible: true} )
    }

    closeModal = () =>{
        this.setState( {modalVisible: false} )
    }

    // contextElements = {
    //     ...this.state,
    //     addItem: this.addItem
    // }

    render() {

        const contextElements = {
            ...this.state,
            addItem: this.addItem
        }

        return (
            <BrowserRouter>
                <AppContext.Provider value={contextElements} >
                    <Header showModal={this.showModal} />
                    <h1>Hello piess</h1>
                    <Switch>
                        <Route exact path="/" component={TwittersView} />
                        <Route path="/articles" component={ArticlesView} />
                        <Route path="/notes" component={NotesView} />
                    </Switch>
                    { this.state.modalVisible && <Modal closeModal={this.closeModal}/> }
                </AppContext.Provider>
            </BrowserRouter>
        )
    }

}

export default Root;

// 1. usunąć initialStateItems
// 2. Przywrócić funkcjonowanie addItem
// 3. Dopasować Form.js do nowych potrzeb
// 4. Przystosować widoki podstron do nowych itemów
// 5. Wyświetlać odpowiednie notatki na podstronach 