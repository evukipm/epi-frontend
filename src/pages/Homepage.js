import React, { Component } from 'react'
import post from '../lib/post-service';
import Container from '../components/Container';

export default class Homepage extends Component {

  state = {
    data: [
    //{
    //   title: "Hola_mundo",
    //   text: "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo",
    //   author: "Rana Gustavo",
    // },
    // {
    //   title: "Adios_mundo",
    //   text: "Tienes metaanfetamina????",
    //   author: "Rana Gustavo",
    // },
    // {
    //   title: "La vampiresa",
    //   text: "VAAAAAAOSCURESIENDOOOOOOO",
    //   author: "Rana Gustavo",
    // }
    ],
    isLoading: true,
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    this.setState({
      isLoading: true,
    })
    post.getPost()
    .then((result)=>{
      console.log(result)
      this.setState({
        data: result,
        isLoading: false,
      })
    })
    .catch((error) =>{
      console.log(error)
    })
  }

  render() {
    const {data} = this.state;
    return (
      <div>
        {data.map( (post, index) => {
          return <Container 
            data = {post}
            key = {index}
            index = {index}
          />
        })}
      </div>
    )
  }
}
