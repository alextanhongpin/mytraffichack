const data = require('./week_2016-01-11/summary_week_2016-01-11.json')
// console.log(Object.keys(data), null, 2)

const keys = Object.keys(data)

const fs = require('fs')
const output = Array(24).fill(0).map((_, i) => i).reduce((schema, index) => {
  schema[`hour_${index}_average`] = []
  return schema
}, {})

console.log(output)

console.log(output, null, 2)
const values = Object.values(data)

keys.forEach((key) => {
  Array(24).fill(0).map((_, i) => i).forEach((hour) => {
    console.log(data[key].hour_avg[hour])
    const average = data[key].hour_avg[hour]

    if (average) {
      output[`hour_${hour}_average`].push({
	    	segmentId: key,
	    	average: average
	    })
    }
  })
})

fs.writeFile('output.json', JSON.stringify(output), 'utf-8', (err, data) => {
  console.log('Successfully wrote to output.json')
})
