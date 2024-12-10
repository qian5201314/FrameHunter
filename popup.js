document.addEventListener('DOMContentLoaded', async () => {
  const urlsContainer = document.getElementById('urls');

  // 从当前活动标签中提取 iframe URLs
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => Array.from(document.querySelectorAll('iframe')).map(iframe => iframe.src || '当前 iframe src 为空'),
  }, (results) => {
    const iframeUrls = results[0].result;

    if (iframeUrls.length === 0) {
      const noUrlsMessage = document.createElement('div');
      noUrlsMessage.className = 'no-urls';
      noUrlsMessage.textContent = 'No iframes found on this page.';
      urlsContainer.appendChild(noUrlsMessage);
    } else {
      iframeUrls.forEach(url => {
        const urlItem = document.createElement('div');
        urlItem.className = 'url-item';

        const urlText = document.createElement('span');
        urlText.textContent = url;

        const openButton = document.createElement('button');
        openButton.textContent = 'Open';
        openButton.className = 'open';
        openButton.addEventListener('click', () => {
          if (url !== '当前 iframe src 为空') {
            window.open(url, '_blank');
          }
        });

        const copyButton = document.createElement('button');
        copyButton.textContent = 'Copy';
        copyButton.className = 'copy';
        copyButton.addEventListener('click', () => {
          navigator.clipboard.writeText(url).then(() => {
            copyButton.textContent = 'Copied!';
            setTimeout(() => copyButton.textContent = 'Copy', 1500);
          });
        });

        urlItem.appendChild(urlText);
        urlItem.appendChild(openButton);
        urlItem.appendChild(copyButton);
        urlsContainer.appendChild(urlItem);
      });
    }
  });
});
