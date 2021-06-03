import { Component } from 'react';

import './styles.css';

import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts'
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 25,
    searchValue: ''
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  }

  handleChange = (e) => {
  
    const { value } = e.target;
    console.log({value})
    this.setState({searchValue: value});
  }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPost = searchValue ? allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase());
    }) : posts;

    return (
      <section className="container">
        <div className='seach-container'>
          {searchValue && (
            <h2>Search value: {searchValue}</h2>
          )}
          
          <TextInput
          searchValue={this.searchValue} 
          handleChange={this.handleChange}
          />
        </div>

        {filteredPost.length > 0 && (
          <Posts posts={filteredPost} />
        )}

        {filteredPost.length == 0 && (
          <h3>Não existe este post =( </h3>
        )}
        
        <div className="button-container">
          {!searchValue && (
             <Button
             text="Load more posts"
             onClick={this.loadMorePosts}
             disabled={noMorePosts}
           />
          )}
         
        </div>
      </section>
    );
  }
}