
const Carddetails = (props) =>{

    const closeModal = ()=>{
        props.closeModal();
    }
    return(
        <div class="popup-modal">
              <div class="modal__window flex modal-flex">
                <div class="flex modal-head">
                    <h3 class="">Modal title</h3>
                    <button type="button" class="btn-close" onClick={closeModal}></button>
                </div>
                <div class="modal-body">
                   {JSON.parse(props.ProductDetails).description}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-dark" onClick={closeModal}>Close</button>
                    <button type="button" class="btn btn-warning">Add to Cart</button>
                </div>
             </div>
        </div>
     );
}

export default Carddetails;