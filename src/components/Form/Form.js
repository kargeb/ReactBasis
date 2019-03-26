import React from 'react';
import styles from './Form.module.scss';
import AppContext from '../../context';
import Input from '../Input/Input.js';
import Button from '../Button/Button.js';
import Title from '../Title/Title.js';
import Radio from '../Radio/Radio';


const options = {
  twitter: "twitter",
  note: "note",
  article: "article"
}


class Form extends React.Component{

  handleRadio = (e) =>{

    if(e.target.nodName === "LABEL") {
      return;
    }

    this.setState({ type: options[e.target.id] });
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    console.log(`
      title: ${this.state.title},
      link: ${this.state.link},
      image: ${this.state.image},
      description: ${this.state.description},
    `);
  }

  state = {
    title: '',
    link: '',
    image: '',
    description: '',
    type: options.twitter
  }

  render() {

    return (
      <AppContext.Consumer>
      {(context) => ( 
              <div className={styles.wrapper}> 
                  <Title>Add new {this.state.type}</Title>
                  <Radio handleRadio={this.handleRadio}/>
                  <form autoComplete="off" className={styles.form} onSubmit={ (e) => context.addItem(e, this.state)} >
                      <Input 
                            name="title" 
                            label= {this.state.type === options.twitter ? "Name" : "Title"}
                            maxLength={30}
                            onChange={this.handleInputChange}
                            value={this.state.title}
                      /> 
                      { this.state.type !== options.note && 
                        <Input 
                        name="link" 
                        label={ this.state.type === options.twitter ? "Twitter link" : "link"}
                        onChange={this.handleInputChange}
                        value={this.state.link}
                        />
                      }
                      { this.state.type == options.twitter && 
                      <Input 
                        name="image" 
                        label="Image"
                        required={false}
                        onChange={this.handleInputChange}
                        value={this.state.image}
                      />
                      }
                      <Input 
                        tag="textarea" 
                        name="description" 
                        label="Description"
                        onChange={this.handleInputChange}
                        value={this.state.description}
                      />
                      <Button >
                        add new item
                      </Button>
                  </form>
              </div>
             )}
      </AppContext.Consumer>
    )
  }

}

export default Form;