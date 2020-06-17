import React, { CSSProperties } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Utils from '../classes/Utils';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

interface ImageProps {
  src: string;
  alt: string;
  center: boolean;
  width?: string;
  height?: string;
  style?: CSSProperties;
}

export default class Image extends React.Component<ImageProps, {}> {
  render() {
    const props = this.props;
    let { src, alt } = props;
    src = '/images/posts' + Utils.prependSlash(src);

    //Build styles
    const style: CSSProperties = Object.assign({}, props.style ? props.style : {});

    if (props.center) {
      style.margin = 'auto';
      style.display = 'block';
    }
    if (props.width) {
      style.width = props.width;
      style.maxWidth = '100%';
    } if (props.height) {
      style.height = props.height;
    }

    return (
      <img src={src} alt={alt} style={style} />
    );
  }
}



/*
const Image = () => {
 const data = useStaticQuery(graphql`
   query {
     placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
       childImageSharp {
         fluid(maxWidth: 300) {
           ...GatsbyImageSharpFluid
         }
       }
     }
   }
 `)

 return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Image
*/
