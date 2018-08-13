import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import BannerRoll from '../splashpage/Banner/BannerRoll'
import BannerItem from './Banner/BannerRoll/BannerItem'
import DividerItem from './Banner/BannerRoll/DividerItem'

//required props:
//bannerItems
//possible props:
//bannerStyles, bannerWidth, fontStyles, divider, dividerStyles, spacing, *speed*

class Banner extends React.Component {
  render() {
    const { bannerWidth, spacing, icon, bannerItems } = this.props
    // Double the passed in bannerItems so it can fill the screen width
    const doubleItems = bannerItems.concat(bannerItems)

    return (
      <Container id="banner-container" style={bannerStyles} width={bannerWidth}>
        <BannerRoll
          bannerItems={bannerItems}
          bannerStyles={bannerStyles}
          fontStyles={fontStyles}
          iconStyles={iconStyles}
        >
          {doubleItems.map((item, i) => {
            return (
              <ChildrenContainer key={`${item}.${i}`}>
                <BannerItem
                  content={item}
                  fontStyles={fontStyles}
                  margin={spacing}
                />
                {icon && <DividerItem icon={icon} iconStyles={iconStyles} />}
              </ChildrenContainer>
            )
          })}
        </BannerRoll>
      </Container>
    )
  }
}

const Container = styled.div`
  width: ${props => (props.width ? `${props.width}px` : '100%')};
  margin: auto;
  overflow: hidden;
  display: block;
`

const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: row;
`

Banner.propTypes = {
  bannerItems: PropTypes.array.isRequired,
  bannerWidth: PropTypes.number,
  fontStyles: PropTypes.object,
  bannerStyles: PropTypes.object,
  iconStyles: PropTypes.object,
  divider: PropTypes.string,
  spacing: PropTypes.number
}

export default Banner

const fontStyles = {
  color: 'white',
  fontFamily: 'sans-serif'
}

const bannerStyles = {
  backgroundColor: '#544666',
  height: '35px'
}

const iconStyles = {
  color: '#85769A'
}
