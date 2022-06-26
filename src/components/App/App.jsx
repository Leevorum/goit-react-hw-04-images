import { Component } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import getImages from 'service/api-servise';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export class App extends Component {
  state = {
    images: [],
    input: '',
    page: 1,
    isLoading: false,
  };

  //Add new page with images after click "Load more" button
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      const images = await getImages(this.state.input, this.state.page);

      this.setState(prevState => {
        return {
          images: [...prevState.images, ...images.data.hits],
          isLoading: !prevState.isLoading,
        };
      });
    }
  }

  //Setting input search and make API request
  handleInput = async data => {
    await this.setState({
      input: data.input,
    });

    //Throw an error if the input empty
    if (this.state.input.trim() === '') {
      alert('Please fill in input field!');
      return;
    }

    const images = await getImages(this.state.input, this.state.page);

    //Throw an error if the search query is not correct
    if (images.data.hits.length === 0) {
      alert(
        'Sorry, there are no images matching your search query. Please try again.',
      );
    }

    this.setState({
      images: images.data.hits,
    });
  };

  //If click 'Load more' button, change page in state for new request
  handleClickLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
        isLoading: !prevState.isLoading,
      };
    });
  };

  render() {
    const { images, isLoading } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleInput} />
        {images.length > 0 && (
          <>
            <ImageGallery images={images} />
            {!isLoading && <Button onClick={this.handleClickLoadMore} />}
            {isLoading && <Loader />}
          </>
        )}
      </div>
    );
  }
}
