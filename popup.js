document.getElementById('run-script').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      alert('Script rodando no navegador!');
      // Aqui você pode adicionar o código JS que você quer rodar no navegador
    }
  });
});