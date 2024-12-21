import wixData from 'wix-data';

$w.onReady(() => {
  wixData.query("Services").find()
    .then((results) => {
      $w('#servicesRepeater').data = results.items;
    })
    .catch((err) => {
      console.error(err);
    });
});
