import React from 'react';
import "./../../Styles/Content/Content.css"

const Content = () => {
    return (
        <div className="content">
            <div className="content-container">
                <div className="img">
                    <img src="https://media.istockphoto.com/id/1035676256/photo/background-of-galaxy-and-stars.jpg?s=612x612&w=0&k=20&c=dh7eWJ6ovqnQZ9QwQQlq2wxqmAR7mgRlQTgaIylgBwc=" alt="" className="img-content"/>
                </div>
                <div className="profile__info">
                        <div className="user__info">
                            <div className="photo__user">
                                <img className="img__photo__user" src="https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg" alt=""/>
                            </div>
                            <div className="name__user">
                                    <h3 className="text__name__user">Matvey Khodosevich</h3>
                                    <p className="desc__name__user">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem blanditiis ipsam itaque libero maiores minus nostrum repellat repudiandae sint? </p>
                            </div>
                        </div>
                        <div className="new__posts">
                            <p>create a new post:</p>
                            <input type="text"/>
                      </div>

                    <div className="old__posts">
                        <div className="old__post__item">
                            <p>Post is godd</p>
                        </div>
                        <div className="old__post__item">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores nam nihil obcaecati placeat rem. Architecto blanditiis, iure perspiciatis placeat quia rerum ullam. Ad quod soluta unde. Necessitatibus quia voluptate voluptatibus?</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Content;