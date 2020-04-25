import dispatcher from '../AppDispatcher';

class CatchesActions {

    addToTable(item){
        dispatcher.handleViewAction({
            command : 'ADD_CATCH',
            item : item
        });
    }

    removeFromTable(item){
        dispatcher.handleViewAction({
            command : 'REMOVE_CATCH',
            item : item
        });
    }
}

export default new CatchesActions();
