const addUrlParam = (link, param) => {
  const allLinks = document.getElementsByTagName("a");
  for (let i = 0; i < allLinks.length; i++) {
    if (allLinks[i].href.indexOf(link) !== -1) {
      const currentValue = allLinks[i].href.match(new RegExp(param.split("=")[0] + "=([^&]+)"));
      if (currentValue) {
        if (currentValue[1] !== param.split("=")[1]) {
          allLinks[i].href = allLinks[i].href.replace(currentValue[0], param);
        }
      } else {
        if (allLinks[i].href.indexOf("?") !== -1) {
          allLinks[i].href += "&" + param;
        } else {
          allLinks[i].href += "?" + param;
        }
      }
    }
  }
}  
