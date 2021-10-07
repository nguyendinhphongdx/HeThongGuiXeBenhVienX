import {DocumentConstant} from '../config/constant';
class DocumentActions{
    Get_All_Document=(documents) => {
        return {
           type: DocumentConstant.GET_ALL_DOCUMENT,
           payload: documents
       }
   }
   Add_Document=(document) => {
       return {
          type: DocumentConstant.ADD_DOCUMENT,
          payload: document
      }
   }
   Update_Document=(document) => {
       return {
          type: DocumentConstant.UPDATE_DOCUMENT,
          payload: document
      }
   }
   Remove_Document=(idDocument) => {
       return {
          type: DocumentConstant.REMOVE_DOCUMENT,
          payload: idDocument
      }
   }
}
export default new DocumentActions();