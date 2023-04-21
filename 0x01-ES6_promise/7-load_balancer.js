//Write a function named loadBalancer
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]).then((value) => value);
}
