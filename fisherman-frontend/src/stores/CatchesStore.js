import EventEmitter from 'events';
import dispatcher from '../AppDispatcher';
import axios from 'axios'

class CatchesStore extends EventEmitter {
  _items = [];

  emitChange() {
    this.emit('Change');
  }

  addChangeListener(callback) {
    this.on('Change', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('Change', callback);
  }
}
const store = new CatchesStore();

dispatcher.register((action) => {
  if (action.payload.command === 'ADD_CATCH') {
    let item = action.payload.item;
    store._items.push(item);
    store.emitChange();
  }
  if (action.payload.command === 'FETCH_DATA') {
    store._items = axios.get('/catches').then((res) => {
      const catches = res.data;
      this.setState({ data: catches });
    });
  }
});

export default store;
