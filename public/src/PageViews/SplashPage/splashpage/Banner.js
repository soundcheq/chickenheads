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
    const extraItems = bannerItems.concat(bannerItems)
    const { bannerWidth, spacing, icon } = this.props
    return (
      <Container id="banner-container" style={bannerStyles} width={bannerWidth}>
        <BannerRoll
          bannerItems={bannerItems}
          bannerStyles={bannerStyles}
          fontStyles={fontStyles}
          iconStyles={iconStyles}
        >
          {extraItems.map((item, i) => {
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

const bannerItems = [
  'NU-DISCO',
  'BREAKBEAT',
  'DRUM AND BASS',
  'DUBSTEP',
  'TRAP',
  'HIP HOP',
  'TECHNO',
  'METAL',
  'LOUNGE',
  'DEEP HOUSE',
  'POP',
  'PUNK',
  'JAZZ',
  'AVANT-GARDE',
  'REGGAE'
]

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
