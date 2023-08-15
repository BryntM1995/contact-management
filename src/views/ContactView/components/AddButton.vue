<template>
    
   <div class="d-grid buttonDiv">
    <button type="button" class="btn buttonComp m-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop" title="Add Contact">
        <i class="bi bi-person-plus-fill"></i>  Add
    </button>
   </div>

    
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Understood</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.buttonDiv{
    place-items: center;
}
.buttonComp{
    background-color: transparent;
    border: solid 2px black;
    transition: 1s;
}
.buttonComp:hover{
    background-color: blueviolet;
    color: white;
}
</style>