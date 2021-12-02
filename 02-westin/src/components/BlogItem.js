import React from 'react'

const BlogItem = (props) => {
    return (
        <div class="blog-item">
        <div class="image-blog">
            <img src={props.resim} alt="/"/>
        </div>
        <div class="blog-box">
            <div class="blog-time">{props.tarih}</div>
            <h5 class="Blog-title mb-0"><a href="javascript:void(0)">{props.baslik}</a></h5>
            <ul class="list-inline">
                <li class="list-inline-item">
                    <a href="javascript:void(0)">
                        <i class="fas fa-user-alt base-color"></i>
                        <span >{props.isim}</span>
                    </a>
                </li>
                <li class="list-inline-item">
                    <a href="javascript:void(0)">
                        <i class="fas fa-comment base-color"></i>
                        <span >{props.yorumSayi}</span>
                    </a>
                </li>
            </ul>
            <p class="mb-0">{props.yorum}</p>
            <div class="blog-link">
                <a href="blog-single-colorfull.html">Read More...</a>
            </div>
        </div>
    </div>
    )
}

export default BlogItem
