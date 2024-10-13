import React from 'react'
import proptype from 'prop-types'

export default function Tag(tag) {
  return (
    <div className='tag'>
{tag.tag}
    </div>
  )
}

Tag.propTypes = {
  tag: proptype.string.isRequired,
}