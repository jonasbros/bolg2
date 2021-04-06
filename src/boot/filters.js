// import something here
import Filter from 'bad-words';
// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async ({Vue}) => {
  // something to do
  Vue.filter('badwordsFilter', function(value) {
    let filter = new Filter();
    if (!value) return '';
    value = value.toString();
    return filter.clean(value);
  });
}
