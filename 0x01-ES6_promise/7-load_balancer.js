export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
const chinaDownload = downloadFileFromChina();
const USDownload = downloadFileFromUS();

loadBalancer(chinaDownload, USDownload)
  .then(value => {
    console.log(`Download complete: ${value}`);
  })
  .catch(error => {
    console.error(`Error downloading file: ${error}`);
  });

