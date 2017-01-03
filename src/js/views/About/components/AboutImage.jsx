import React from 'react';
import radium from 'radium';
import { phone } from '../../../common/layout';
import { images } from '../../../constants';

const styles = {
  imageWrapper: {
    width: '60%',
    float: 'right',
    position: 'relative',
  },
  image: {
    height: '100%',
  },
};

const AboutImage = () => (
  <div style={styles.imageWrapper}>
    <img style={styles.image} src={images.aboutPhoto} alt="Nicolas" />
  </div>
);

export default radium(AboutImage);
