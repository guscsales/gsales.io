import React from 'react';
import { IBlogPostDetail } from '@contexts/blog/services/blog-database';
import classNames from 'classnames';
import hljs from 'highlight.js';
import styles from './blog-component.module.css';
import 'highlight.js/styles/dark.css';

type Props = {
  post: IBlogPostDetail;
};

function BlogContent({ post }: Props) {
  React.useEffect(() => {
    document.querySelectorAll('pre code').forEach((el: HTMLElement) => {
      hljs.highlightElement(el);
    });
  }, [post]);

  return (
    <section
      className={classNames('mt-8', styles.blogContent)}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: post.content }}
    />
  );
}

export default BlogContent;
