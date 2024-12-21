import wixData from 'wix-data';

$w.onReady(() => {
  wixData.query("HomePageContent").find()
    .then((results) => {
      if (results.items.length > 0) {
        $w('#title').text = results.items[0].title;
        $w('#subtitle').text = results.items[0].subtitle;
      }
    })
    .catch((err) => {
      console.error(err);
    });
});
