const topic = location.hash.slice(1)
location.href = topic.indexOf ( ".md" ) >= 0 ?
    `https://github.com/garevna/a-level-js-lessons/blob/master/md/${topic}` :
    `https://garevna.github.io/a-level-js-lessons/html/${topic}`
