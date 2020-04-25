import dispatcher from '../AppDispatcher';

class CatchesActions {

    fetchCatches(){
        dispatcher.handleViewAction({
            command: 'FETCH_DATA'
        })
    }

    addToTable(item){
        dispatcher.handleViewAction({
            command : 'ADD_CATCH',
            item : item
        });
    }
}

export default new CatchesActions();
