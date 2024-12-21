import wixData from 'wix-data';

$w.onReady(() => {
  wixData.query("Projects").find()
    .then((results) => {
      $w('#projectsRepeater').data = results.items;
    })
    .catch((err) => {
      console.error(err);
    });
});
