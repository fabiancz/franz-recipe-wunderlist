module.exports = (Franz) => {
  const getMessages = function getMessages() {
    let countActivity = 0;
    let countOverdue = 0;

    // count all activites on bell icon
    let countSpan = document.querySelector('.activities-count span.count');
    if (countSpan) {
      countActivity = parseInt(countSpan.textContent);
    }

    // count all overdues
    let overdues = document.querySelectorAll('li.overdue');
    for (let i = 0; i < overdues.length; i += 1) {
      if (overdues[i].getAttribute('data-type') != "filter") {
        let countSpan = overdues[i].querySelector('span.overdue-count');
        if (countSpan && countSpan.textContent != "") {
          countOverdue += parseInt(countSpan.textContent);
        }
      }
    }

    Franz.setBadge(countActivity, countOverdue);
  };

  Franz.loop(getMessages);
};
