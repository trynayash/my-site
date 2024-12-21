$w.onReady(() => {
    // Setup header links
    $w('#navLinks').onClick((event) => {
      const target = event.context.link;
      wixLocation.to(target);
    });
  });
  