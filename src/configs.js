import React from 'react'
import ImgWithPreview from './ImgWithPreview';

const namedColors = {
  "aliceblue": "#f0f8ff",
  "antiquewhite": "#faebd7",
  "aqua": "#00ffff",
  "aquamarine": "#7fffd4",
  "azure": "#f0ffff",
  "beige": "#f5f5dc",
  "bisque": "#ffe4c4",
  "black": "#000000",
  "blanchedalmond": "#ffebcd",
  "blue": "#0000ff",
  "blueviolet": "#8a2be2",
  "brown": "#a52a2a",
  "burlywood": "#deb887",
  "cadetblue": "#5f9ea0",
  "chartreuse": "#7fff00",
  "chocolate": "#d2691e",
  "coral": "#ff7f50",
  "cornflowerblue": "#6495ed",
  "cornsilk": "#fff8dc",
  "crimson": "#dc143c",
  "cyan": "#00ffff",
  "darkblue": "#00008b",
  "darkcyan": "#008b8b",
  "darkgoldenrod": "#b8860b",
  "darkgray": "#a9a9a9",
  "darkgreen": "#006400",
  "darkkhaki": "#bdb76b",
  "darkmagenta": "#8b008b",
  "darkolivegreen": "#556b2f",
  "darkorange": "#ff8c00",
  "darkorchid": "#9932cc",
  "darkred": "#8b0000",
  "darksalmon": "#e9967a",
  "darkseagreen": "#8fbc8f",
  "darkslateblue": "#483d8b",
  "darkslategray": "#2f4f4f",
  "darkturquoise": "#00ced1",
  "darkviolet": "#9400d3",
  "deeppink": "#ff1493",
  "deepskyblue": "#00bfff",
  "dimgray": "#696969",
  "dodgerblue": "#1e90ff",
  "firebrick": "#b22222",
  "floralwhite": "#fffaf0",
  "forestgreen": "#228b22",
  "fuchsia": "#ff00ff",
  "gainsboro": "#dcdcdc",
  "ghostwhite": "#f8f8ff",
  "gold": "#ffd700",
  "goldenrod": "#daa520",
  "gray": "#808080",
  "green": "#008000",
  "greenyellow": "#adff2f",
  "honeydew": "#f0fff0",
  "hotpink": "#ff69b4",
  "indianred ": "#cd5c5c",
  "indigo": "#4b0082",
  "ivory": "#fffff0",
  "khaki": "#f0e68c",
  "lavender": "#e6e6fa",
  "lavenderblush": "#fff0f5",
  "lawngreen": "#7cfc00",
  "lemonchiffon": "#fffacd",
  "lightblue": "#add8e6",
  "lightcoral": "#f08080",
  "lightcyan": "#e0ffff",
  "lightgoldenrodyellow": "#fafad2",
  "lightgrey": "#d3d3d3",
  "lightgreen": "#90ee90",
  "lightpink": "#ffb6c1",
  "lightsalmon": "#ffa07a",
  "lightseagreen": "#20b2aa",
  "lightskyblue": "#87cefa",
  "lightslategray": "#778899",
  "lightsteelblue": "#b0c4de",
  "lightyellow": "#ffffe0",
  "lime": "#00ff00",
  "limegreen": "#32cd32",
  "linen": "#faf0e6",
  "magenta": "#ff00ff",
  "maroon": "#800000",
  "mediumaquamarine": "#66cdaa",
  "mediumblue": "#0000cd",
  "mediumorchid": "#ba55d3",
  "mediumpurple": "#9370d8",
  "mediumseagreen": "#3cb371",
  "mediumslateblue": "#7b68ee",
  "mediumspringgreen": "#00fa9a",
  "mediumturquoise": "#48d1cc",
  "mediumvioletred": "#c71585",
  "midnightblue": "#191970",
  "mintcream": "#f5fffa",
  "mistyrose": "#ffe4e1",
  "moccasin": "#ffe4b5",
  "navajowhite": "#ffdead",
  "navy": "#000080",
  "oldlace": "#fdf5e6",
  "olive": "#808000",
  "olivedrab": "#6b8e23",
  "orange": "#ffa500",
  "orangered": "#ff4500",
  "orchid": "#da70d6",
  "palegoldenrod": "#eee8aa",
  "palegreen": "#98fb98",
  "paleturquoise": "#afeeee",
  "palevioletred": "#d87093",
  "papayawhip": "#ffefd5",
  "peachpuff": "#ffdab9",
  "peru": "#cd853f",
  "pink": "#ffc0cb",
  "plum": "#dda0dd",
  "powderblue": "#b0e0e6",
  "purple": "#800080",
  "rebeccapurple": "#663399",
  "red": "#ff0000",
  "rosybrown": "#bc8f8f",
  "royalblue": "#4169e1",
  "saddlebrown": "#8b4513",
  "salmon": "#fa8072",
  "sandybrown": "#f4a460",
  "seagreen": "#2e8b57",
  "seashell": "#fff5ee",
  "sienna": "#a0522d",
  "silver": "#c0c0c0",
  "skyblue": "#87ceeb",
  "slateblue": "#6a5acd",
  "slategray": "#708090",
  "snow": "#fffafa",
  "springgreen": "#00ff7f",
  "steelblue": "#4682b4",
  "tan": "#d2b48c",
  "teal": "#008080",
  "thistle": "#d8bfd8",
  "tomato": "#ff6347",
  "turquoise": "#40e0d0",
  "violet": "#ee82ee",
  "wheat": "#f5deb3",
  "white": "#ffffff",
  "whitesmoke": "#f5f5f5",
  "yellow": "#ffff00",
  "yellowgreen": "#9acd32"
}

export const defaultFontFamilies = [{
    name: 'Araial',
    family: 'Arial, Helvetica, sans-serif'
  }, {
    name: 'Georgia',
    family: 'Georgia, serif'
  }, {
    name: 'Impact',
    family: 'Impact, serif'
  }, {
    name: 'Monospace',
    family: '"Courier New", Courier, monospace'
  }, {
    name: 'Tahoma',
    family: "tahoma, arial, 'Hiragino Sans GB', 宋体, sans-serif"
}]

export const getHexColor = (color) => {

  color = color.replace('color:', '').replace(';', '').replace(' ', '')

  if (/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(color)) {
    return color
  } else if (namedColors[color]) {
    return namedColors[color]
  } else if (color.indexOf('rgb') === 0) {

    let rgbArray = color.split(',')
    let convertedColor = rgbArray.length < 3 ? null : '#' + [rgbArray[0], rgbArray[1], rgbArray[2]].map(x => {
      const hex = parseInt(x.replace(/\D/g, ''), 10).toString(16)
      return hex.length === 1 ? '0' + hex : hex
    }).join('')

    return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(convertedColor) ? convertedColor : null

  } else {
    return null
  }

}

export const blocks = {
  'header-one': 'h1',
  'header-two': 'h2',
  'header-three': 'h3',
  'header-four': 'h4',
  'header-fiv': 'h5',
  'header-six': 'h6',
  'unstyled': 'p',
  'blockquote': 'blockquote'
}

const blockTypes = Object.keys(blocks)
const blockNames = blockTypes.map(key => blocks[key])

const convertAtomicBlock = (block, contentState) => {

  if (!block || !block.key) {
    return <p></p>
  }

  const contentBlock = contentState.getBlockForKey(block.key)

  if (!contentBlock) {
    return <p></p>
  }

  const entityKey = contentBlock.getEntityAt(0)

  if (!entityKey) {
    return <p></p>
  }

  const entity = contentState.getEntity(entityKey)
  const mediaType = entity.getType().toLowerCase()

  let { float, alignment } = block.data
  let { url, link, link_target, width, height, meta } = entity.getData()

  if (mediaType === 'sidebarimage') {

    let imageWrapStyle = {}
    let styledClassName = ''

    if (float) {
      imageWrapStyle.float = float
      styledClassName += ' float-' + float
    } else if (alignment) {
      imageWrapStyle.textAlign = alignment
      styledClassName += ' align-' + alignment
    }

    if (link) {
      return (
        <div className={"media-wrap image-wrap" + styledClassName} style={imageWrapStyle}>
          <a style={{display:'inline-block'}} href={link} target={link_target}>
            <img {...meta} src={url} width={width} height={height} style={{width, height}} />
          </a>
        </div>
      )
    } else {
      return (
        <div className="braft-editor-custom-block">
          <ImgWithPreview src={url} width={width} style={{width: '60%', height: 'auto', border: '1px solid #ccc'}} />
        </div>
      )
    }

  } else if (mediaType === 'audio') {
    return <div className="media-wrap audio-wrap"><audio controls {...meta} src={url} /></div>
  } else if (mediaType === 'video') {
    return <div className="media-wrap video-wrap"><video controls {...meta} src={url} width={width} height={height} /></div>
  } else if (mediaType === 'embed') {
    return <div className="media-wrap embed-wrap"><div dangerouslySetInnerHTML={{__html: url}}/></div>
  } else if (mediaType === 'hr') {
    return <hr></hr>
  } else if (mediaType === 'sidebarsearchitem') {
    const mediaData = entity.getData();
    return `
      <div class="braft-editor-custom-block">
        <div class="braft-editor-search-item-wrap">
          <div class="braft-editor-search-item-cover">
            <div class="ice-img sharp">
              <a href=${mediaData.resourceUrl} target="_blank"><img src=${mediaData.coverUrl} /></a>
            </div>
          </div>
          <a href=${mediaData.resourceUrl} target="_blank" class="braft-editor-search-item-title">${mediaData.title}</a>
          <span class="braft-editor-search-item-price" >${mediaData.price}</span>
        </div>
      </div>
    `
  } else if(mediaType === 'sidebarhotspaceimage') {
    const mediaData = entity.getData();
    let height = mediaData.picHeight*200 / mediaData.picWidth;
    let width = 200;
    let { hotSpaces } = mediaData;
    hotSpaces = hotSpaces.map((hotspot, index) => {
      const x = width * hotspot.x/100;
      const y = height * hotspot.y/100;
      const spotWidth = width * hotspot.width/100;
      const spotHeight = height * hotspot.height/100;
      return `
        <a key=${index} href="${hotspot.data.url}" target="_blank" class="braft-editor-hotspot-area-wrap" style="top: ${y}px; left: ${x}px; width: ${spotWidth}px; height: ${spotHeight}px;"></a>
      `;
    });
    return `
      <div class="braft-editor-custom-block">
        <div class="braft-editor-hotspot-image-wrap" style="width: 200px; height: ${height}px">
          <div class="braft-editor-hotspot-image-cover" style="width: 200px; height: ${height}px">
            <div class="ice-img sharp" style="width: 200px; height: ${height}px">
              <img src=${mediaData.url} style="width: 200px; height: ${height}px" />
            </div>
          </div>
          <div class="braft-editor-hotspot-list" style="width: 200px; height: ${height}px">
            <div className="braft-ediotr-hotspot-area" style="width: 200px; height: ${height}px">
              ${hotSpaces}
            </div>
          </div>
        </div>
      </div>
    `
  }else {
    return <p></p>
  }

}

const styleToHTML = (props) => (style) => {

  style = style.toLowerCase()

  if (style === 'strikethrough') {
    return <span style={{textDecoration: 'line-through'}}/>
  } else if (style === 'superscript') {
    return <sup/>
  } else if (style === 'subscript') {
    return <sub/>
  } else if (style.indexOf('color-') === 0) {
    return <span style={{color: '#' + style.split('-')[1]}}/>
  } else if (style.indexOf('bgcolor-') === 0) {
    return <span style={{backgroundColor: '#' + style.split('-')[1]}}/>
  } else if (style.indexOf('fontsize-') === 0) {
    return <span style={{fontSize: style.split('-')[1] + 'px'}}/>
  } else if (style.indexOf('lineheight-') === 0) {
    return <span style={{lineHeight: style.split('-')[1]}}/> 
  } else if (style.indexOf('letterspacing-') === 0) {
    return <span style={{letterSpacing: style.split('-')[1] + 'px'}}/>
  } else if (style.indexOf('indent-') === 0) {
    return <span style={{paddingLeft: style.split('-')[1] + 'px', paddingRight: style.split('-')[1] + 'px' }}/>
  } else if (style.indexOf('fontfamily-') === 0) {
    let fontFamily = props.fontFamilies.find((item) => item.name.toLowerCase() === style.split('-')[1])
    if (!fontFamily) return
    return <span style={{fontFamily: fontFamily.family}}/>
  }

}

const blockToHTML = (contentState) => (block) => {

  let result = null
  let blockStyle = ""

  const blockType = block.type.toLowerCase()
  const { textAlign } = block.data

  if (textAlign) {
    blockStyle = ` style="text-align:${textAlign};"`
  }

  if (blockType === 'atomic') {
    return convertAtomicBlock(block, contentState)
  } else if (blockType === 'code-block') {

    const previousBlock = contentState.getBlockBefore(block.key)
    const nextBlock = contentState.getBlockAfter(block.key)
    const previousBlockType = previousBlock && previousBlock.getType()
    const nextBlockType = nextBlock && nextBlock.getType()
    const codeBreakLine = block.text ? '' : '<br>'

    if (previousBlockType === 'code-block' && nextBlockType === 'code-block') {
      return {
        start: `<code><div>${codeBreakLine}`,
        end: '</div></code>'
      }
    } else if (previousBlockType === 'code-block') {
      return {
        start: `<code><div>${codeBreakLine}`,
        end: '</div></code></pre>'
      }
    } else if (nextBlockType === 'code-block') {
      return {
        start: `<pre><code><div>${codeBreakLine}`,
        end: '</div></code>'
      }
    } else {
      return {
        start: `<pre><code><div>${codeBreakLine}`,
        end: '</div></code></pre>'
      }
    }

  } else if (blocks[blockType]) {
    return {
      start: `<${blocks[blockType]}${blockStyle}>`,
      end: `</${blocks[blockType]}>`
    }
  } else if (blockType === 'unordered-list-item') {
    return {
      start: `<li${blockStyle}>`,
      end: '</li>',
      nestStart: '<ul>',
      nestEnd: '</ul>'
    }
  } else if (blockType === 'ordered-list-item') {
    return {
      start: `<li${blockStyle}>`,
      end: '</li>',
      nestStart: '<ol>',
      nestEnd: '</ol>'
    }
  }

}

const entityToHTML = (entity, originalText) => {

  let result = originalText
  const entityType = entity.type.toLowerCase()

  if (entityType === 'link') {
    return <a href={entity.data.href} target={entity.data.target}>{originalText}</a>
  } else if (entityType === 'color') {
    return <span style={{color:entity.data.color}}>{originalText}</span>
  } else if (entityType === 'bg-color') {
    return <span style={{backgroundColor:entity.data.color}}>{originalText}</span>
  }

}

const htmlToStyle = (props) => (nodeName, node, currentStyle) => {

  if (!node || !node.style) {
    return currentStyle
  }

  let newStyle = currentStyle

  for (let i = 0; i < node.style.length; i++) {
    if (nodeName === 'span' && node.style[i] === 'color') {
      let color = getHexColor(node.style.color)
      newStyle = color ? newStyle.add('COLOR-' + color.replace('#', '').toUpperCase()) : newStyle
    } else if (nodeName === 'span' && node.style[i] === 'background-color') {
      let color = getHexColor(node.style.backgroundColor)
      newStyle = color ? newStyle.add('BGCOLOR-' + color.replace('#', '').toUpperCase()) : newStyle
    } else if (nodeName === 'span' && node.style[i] === 'font-size') {
      newStyle = newStyle.add('FONTSIZE-' + parseInt(node.style.fontSize, 10))
    } else if (nodeName === 'span' && node.style[i] === 'line-height') {
      newStyle = newStyle.add('LINEHEIGHT-' + node.style.lineHeight)
    } else if (nodeName === 'span' && node.style[i] === 'letter-spacing' && !isNaN(node.style.letterSpacing.replace('px', ''))) {
      newStyle = newStyle.add('LETTERSPACING-' + parseInt(node.style.letterSpacing, 10))
    } else if (nodeName === 'span' && (node.style[i] === 'padding-left' || node.style[i] === 'padding-right')) {
      newStyle = newStyle.add('INDENT-' + parseInt(node.style.paddingLeft, 10))
    } else if (nodeName === 'span' && node.style[i] === 'text-decoration' && node.style.textDecoration === 'line-through') {
      newStyle = newStyle.add('STRIKETHROUGH')
    } else if (nodeName === 'span' && node.style[i] === 'font-family') {
      let fontFamily = props.fontFamilies.find((item) => item.family.toLowerCase() === node.style.fontFamily.toLowerCase())
      if (!fontFamily) continue;
      newStyle = newStyle.add('FONTFAMILY-' + fontFamily.name.toUpperCase())
    }
  }

  if (nodeName === 'sup') {
    newStyle = newStyle.add('SUPERSCRIPT')
  } else if (nodeName === 'sub') {
    newStyle = newStyle.add('SUBSCRIPT')
  } 

  return newStyle

}

const htmlToEntity = (nodeName, node, createEntity) => {

  const { alt, title, id, controls, autoplay, loop, poster } = node
  let meta = {}

  id && (meta.id = id)
  alt && (meta.alt = alt)
  title && (meta.title = title)
  controls && (meta.controls = controls)
  autoplay && (meta.autoPlay = autoplay)
  loop && (meta.loop = loop)
  poster && (meta.poster = poster)

  if (nodeName === 'a' && !node.querySelectorAll('img').length) {
    let { href, target } = node
    return createEntity('LINK', 'MUTABLE',{ href, target })
  } else if (nodeName === 'audio') {
    return createEntity('AUDIO', 'IMMUTABLE',{ url: node.src, meta }) 
  } else if (nodeName === 'video') {
    return createEntity('VIDEO', 'IMMUTABLE',{ url: node.src, meta }) 
  } else if (nodeName === 'img') {

    let parentNode = node.parentNode
    let entityData = { meta }
    let { width, height } = node.style

    entityData.url = node.src
    width && (entityData.width = width)
    height && (entityData.height = height)

    if (parentNode.nodeName.toLowerCase() === 'a') {
      entityData.link = parentNode.href
      entityData.link_target = parentNode.target
    }

    return createEntity('SIDEBARIMAGE', 'IMMUTABLE', entityData) 

  } else if (nodeName === 'hr') {
    return createEntity('HR', 'IMMUTABLE', {}) 
  } else if (node.parentNode && node.parentNode.classList.contains('embed-wrap')) {

    const embedContent = node.innerHTML || node.outerHTML

    if (embedContent) {
      return createEntity('EMBED', 'IMMUTABLE', {
        url: embedContent
      })   
    }

  }

}

const htmlToBlock = (nodeName, node) => {

  let nodeStyle = node.style || {}

  if (node.classList && node.classList.contains('media-wrap')) {

    return {
      type: 'atomic',
      data: {
        float: nodeStyle.float,
        alignment: nodeStyle.textAlign
      }
    }

  } else if (nodeName === 'img') {

    return {
      type: 'atomic',
      data: {
        float: nodeStyle.float,
        alignment: nodeStyle.textAlign
      }
    }

  } else if (nodeName === 'hr') {

    return {
      type: 'atomic',
      data: {}
    }

  } else if (nodeStyle.textAlign && blockNames.indexOf(nodeName) > -1) {

    return {
      type: blockTypes[blockNames.indexOf(nodeName)],
      data: {
        textAlign: nodeStyle.textAlign
      }
    }

  }

}

export const getToHTMLConfig = (props) => {

  return {
    styleToHTML: styleToHTML(props),
    entityToHTML: entityToHTML,
    blockToHTML: blockToHTML(props.contentState)
  }

}

export const getFromHTMLConfig = (props) => {

  return { 
    htmlToStyle: htmlToStyle(props),
    htmlToEntity,
    htmlToBlock 
  }

}

export const mergeStyledSpans = (htmlContent) => {
  return htmlContent
}

export const convertCodeBlock = (htmlContent) => {

  const result = htmlContent
    .replace(/\<code\>\<div\>\<br\>\<\/div\>\<\/code\>/g, `<code><div></div></code>`)
    .replace(/\<pre\>\<code\>\<div\>/g, '<code><div>')
    .replace(/\<\/div\>\<\/code\>\<\/pre\>/g, '</div></code>')
    .replace(/\<code\>\<div\>/g, '<pre><code>')
    .replace(/\<\/div\>\<\/code\>/g, '</code></pre>')

  return result

}