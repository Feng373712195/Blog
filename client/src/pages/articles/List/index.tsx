import React from 'react';
import { Tag } from 'antd'

function Item () {
  return <nav onClick={this.toArticle.bind(this, this.props.article._id)} style={{ background: this.state.isObserveitem ? 'red' : '' }}
    className="article-list" >
    {/* 文字标题 */}
    <h2 className="article-title">
      {this.props.article.title}
    </h2>

    {/* 文章详细信息 */}
    <div className="artice-detail">
      {/* 文章作者和标签信息 */}
      <div className="artice-info" >
        <div className="artice-author">作者：{this.props.article.author}</div>
        <div className={`artice-lables${this.props.article.lables.length > 0 ? '' : 'hidden'}`} >
          <div>标签：</div>
          <div>
            {this.props.article.lables.map((lable) => <Tag key={lable} color="#108ee9">{lable}</Tag>)}
          </div>
        </div>
      </div>
      {/* 文章发布时间 */}
      <div className="artice-createtime">发布于：{this.props.article.createtime}</div>
    </div>

  </nav>
}


export default function List () {

}
