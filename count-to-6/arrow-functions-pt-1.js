var inputs = process.argv.slice(2)
  , result =
      inputs.
        map(str => str[0]).
        reduce((accumulated, char) => accumulated + char, '')

console.log(`[${inputs}] becomes "${result}"`)
