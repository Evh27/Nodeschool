console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(fragments, ...strings) {
  return fragments.reduce((result, fragment) => {
    return result + fragment + (strings.length ? escape(strings.shift()): '')
  }, '')
}

function escape(string) {
  return string
              .replace(/&/g, '&amp;')
              .replace(/'/g, '&#39;')
              .replace(/"/g, '&quot;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
}
