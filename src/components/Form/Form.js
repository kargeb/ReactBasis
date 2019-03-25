import React from 'react';
import styles from './Form.module.scss';
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

    this.setState({ activeOption: options[e.target.id] });
  }

  state = {
    activeOption: options.twitter
  }

  render() {

    return (
      <div className={styles.wrapper}> 
          <Title>Add new {this.state.activeOption}</Title>
          <Radio handleRadio={this.handleRadio}/>
          <form autoComplete="off" className={styles.form} >
            <Input 
                  name="name" 
                  label= {this.state.activeOption === options.twitter ? "Name" : "Title"}
                  maxLength={30}
            /> 
            { this.state.activeOption !== options.note && 
              <Input 
              name="link" 
              label={ this.state.activeOption === options.twitter ? "Twitter link" : "link"}
              
              />
            }
            { this.state.activeOption == options.twitter && 
            <Input 
              name="image" 
              label="Image"
              required={false}
            />
            }
            <Input 
              tag="textarea" 
              name="description" 
              label="Description"
            />
            <Button >
              add new item
            </Button>
      </form>
      </div>
    )
  }

}

export default Form;