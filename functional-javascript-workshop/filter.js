function getShortMessages(messages) {
  return messages.
    map(function(o) {
      return o.message;
    }).
    filter(function(m) {
      return m.length < 50;
    });
}

module.exports = getShortMessages;
