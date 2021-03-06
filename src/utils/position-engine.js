import { getScrollbarWidth } from './scroll.js'

export function validatePosition(pos) {
  let parts = pos.split(' ')
  if (parts.length !== 2) {
    return false
  }
  if (!['top', 'center', 'bottom'].includes(parts[0])) {
    console.error(
      'Anchor/Self position must start with one of top/center/bottom'
    )
    return false
  }
  if (!['left', 'middle', 'right'].includes(parts[1])) {
    console.error('Anchor/Self position must end with one of left/middle/right')
    return false
  }
  return true
}

export function validateOffset(val) {
  if (!val) {
    return true
  }
  if (val.length !== 2) {
    return false
  }
  if (typeof val[0] !== 'number' || typeof val[1] !== 'number') {
    return false
  }
  return true
}

export function parsePosition(pos) {
  let parts = pos.split(' ')
  return { vertical: parts[0], horizontal: parts[1] }
}

export function validateCover(val) {
  if (val === true || val === false) {
    return true
  }
  return validatePosition(val)
}

export function getAnchorProps(el, offset) {
  let { top, left, right, bottom, width, height } = el.getBoundingClientRect()

  if (offset !== void 0) {
    top -= offset[1]
    left -= offset[0]
    bottom += offset[1]
    right += offset[0]

    width += offset[0]
    height += offset[1]
  }

  return {
    top,
    left,
    right,
    bottom,
    width,
    height,
    middle: left + (right - left) / 2,
    center: top + (bottom - top) / 2
  }
}

export function getTargetProps(el) {
  return {
    top: 0,
    center: el.offsetHeight / 2,
    bottom: el.offsetHeight,
    left: 0,
    middle: el.offsetWidth / 2,
    right: el.offsetWidth
  }
}

// cfg: { el, anchorEl, anchorOrigin, selfOrigin, offset, absoluteOffset, cover, fit, maxHeight, maxWidth }
export function setPosition(cfg) {
  let anchorProps

  // scroll position might change
  // if max-height changes, so we
  // need to restore it after we calculate
  // the new positioning
  const scrollTop = cfg.el.scrollTop

  cfg.el.style.maxHeight = cfg.maxHeight
  cfg.el.style.maxWidth = cfg.maxWidth

  if (cfg.absoluteOffset === void 0) {
    anchorProps = getAnchorProps(
      cfg.anchorEl,
      cfg.cover === true ? [0, 0] : cfg.offset
    )
  } else {
    const {
        top: anchorTop,
        left: anchorLeft
      } = cfg.anchorEl.getBoundingClientRect(),
      top = anchorTop + cfg.absoluteOffset.top,
      left = anchorLeft + cfg.absoluteOffset.left

    anchorProps = {
      top,
      left,
      width: 1,
      height: 1,
      right: left + 1,
      center: top,
      middle: left,
      bottom: top + 1
    }
  }

  if (cfg.fit === true || cfg.cover === true) {
    cfg.el.style.minWidth = anchorProps.width + 'px'
    if (cfg.cover === true) {
      cfg.el.style.minHeight = anchorProps.height + 'px'
    }
  }

  const targetProps = getTargetProps(cfg.el),
    props = {
      top:
        anchorProps[cfg.anchorOrigin.vertical] -
        targetProps[cfg.selfOrigin.vertical],
      left:
        anchorProps[cfg.anchorOrigin.horizontal] -
        targetProps[cfg.selfOrigin.horizontal]
    }

  applyBoundaries(
    props,
    anchorProps,
    targetProps,
    cfg.anchorOrigin,
    cfg.selfOrigin
  )

  cfg.el.style.top = Math.max(0, Math.floor(props.top)) + 'px'
  cfg.el.style.left = Math.max(0, Math.floor(props.left)) + 'px'

  if (props.maxHeight !== void 0) {
    cfg.el.style.maxHeight = Math.floor(props.maxHeight) + 'px'
  }
  if (props.maxWidth !== void 0) {
    cfg.el.style.maxWidth = Math.floor(props.maxWidth) + 'px'
  }

  // restore scroll position
  if (cfg.el.scrollTop !== scrollTop) {
    cfg.el.scrollTop = scrollTop
  }
}

function applyBoundaries(
  props,
  anchorProps,
  targetProps,
  anchorOrigin,
  selfOrigin
) {
  const margin = getScrollbarWidth()
  let { innerHeight, innerWidth } = window

  // don't go bellow scrollbars
  innerHeight -= margin
  innerWidth -= margin

  if (props.top < 0 || props.top + targetProps.bottom > innerHeight) {
    if (selfOrigin.vertical === 'center') {
      props.top =
        anchorProps[selfOrigin.vertical] > innerHeight / 2
          ? innerHeight - targetProps.bottom
          : 0
      props.maxHeight = Math.min(targetProps.bottom, innerHeight)
    } else if (anchorProps[selfOrigin.vertical] > innerHeight / 2) {
      const anchorY = Math.min(
        innerHeight,
        anchorOrigin.vertical === 'center'
          ? anchorProps.center
          : anchorOrigin.vertical === selfOrigin.vertical
          ? anchorProps.bottom
          : anchorProps.top
      )
      props.maxHeight = Math.min(targetProps.bottom, anchorY)
      props.top = Math.max(0, anchorY - props.maxHeight)
    } else {
      props.top =
        anchorOrigin.vertical === 'center'
          ? anchorProps.center
          : anchorOrigin.vertical === selfOrigin.vertical
          ? anchorProps.top
          : anchorProps.bottom
      props.maxHeight = Math.min(targetProps.bottom, innerHeight - props.top)
    }
  }

  if (props.left < 0 || props.left + targetProps.right > innerWidth) {
    props.maxWidth = Math.min(targetProps.right, innerWidth)
    if (selfOrigin.horizontal === 'middle') {
      props.left =
        anchorProps[selfOrigin.horizontal] > innerWidth / 2
          ? innerWidth - targetProps.right
          : 0
    } else if (anchorProps[selfOrigin.horizontal] > innerWidth / 2) {
      const anchorX = Math.min(
        innerWidth,
        anchorOrigin.horizontal === 'middle'
          ? anchorProps.center
          : anchorOrigin.horizontal === selfOrigin.horizontal
          ? anchorProps.right
          : anchorProps.left
      )
      props.maxWidth = Math.min(targetProps.right, anchorX)
      props.left = Math.max(0, anchorX - props.maxWidth)
    } else {
      props.left =
        anchorOrigin.horizontal === 'middle'
          ? anchorProps.center
          : anchorOrigin.horizontal === selfOrigin.horizontal
          ? anchorProps.left
          : anchorProps.right
      props.maxWidth = Math.min(targetProps.right, innerWidth - props.left)
    }
  }
}
