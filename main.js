import {axisBottom, axisLeft} from 'https://unpkg.com/d3-axis@1?module'
import {select} from 'https://unpkg.com/d3-selection@1?module'
import {scaleLinear} from 'https://unpkg.com/d3-scale@2?module'
import {json, csv} from 'https://unpkg.com/d3-fetch@1?module'

const HEIGHT = 250
const WIDTH = document.querySelector('#graph').parentElement.clientWidth
const GUTTER = 30
const MARGIN = 10

const graph = select('#graph')
const xScale = scaleLinear().domain([0, 110]).range([0, WIDTH-GUTTER-MARGIN])
const xAxis = axisBottom(xScale).ticks(10)
const yScale = scaleLinear().domain([1023, 90]).range([0, HEIGHT-GUTTER-MARGIN])
const yAxis = axisLeft(yScale).ticks(6)

graph
  .attr('viewBox', [0, 0, WIDTH, HEIGHT])
  .attr('height', '250')
  .attr('width', '100%')
  .attr('margin', '0 auto')
  .attr('preserveAspectRatio', 'xMinYMin')

graph.append('g')
    .attr('transform', `translate(${GUTTER}, ${HEIGHT-GUTTER})`)
    .call(xAxis)
graph.append('g')
    .attr('transform', `translate(${GUTTER}, ${MARGIN})`)
    .call(yAxis)
