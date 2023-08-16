<template>
    <div class="d-grid buttonDiv">
        <button type="button" class="btn buttonComp m-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
            title="Add Contact">
            <i class="bi bi-person-plus-fill"></i> Add
        </button>
    </div>


    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content bg-info-subtle">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">New Contact <i class="bi bi-person-circle"></i></h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="modalForm">
                        <img id="contactImg" :src="url" alt="profile">
                        <div class="mb-3">
                            <label for="formFile" class="form-label">Profile Picture</label>
                            <input class="form-control" type="file" id="formFile" @change="fileHandler">
                        </div>
                    </div>
                    <div class="modalForm">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">First Name</label>
                            <input v-model="firstName" type="text" class="form-control" id="exampleFormControlInput1"
                                placeholder="example: Petter">
                        </div>
                    </div>
                    <div class="modalForm">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                            <input v-model="lastName" type="text" class="form-control" id="exampleFormControlInput1"
                                placeholder="example: Mendoza">
                        </div>
                    </div>
                    <div class="modalForm">
                        <label>Choose your title</label>
                        <select v-model="title" class="form-select" aria-label="Default select example">
                            <option selected value="">Open this select menu</option>
                            <option value="Polivalente">Polivalente</option>
                            <option value="MultiRol">MultiRol</option>
                            <option value="Garbage">Garbage</option>
                            <option value="Jungla">Jungla</option>
                            <option value="Top">Top</option>
                            <option value="ADC">ADC</option>
                            <option value="Support">Support</option>
                            <option value="one Lane Specialist">one Lane Specialist</option>
                            <option value="Mid">Mid</option>
                        </select>
                    </div>
                    <div class="modalForm">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">PhoneNumber</label>
                            <input v-model="phoneNumber" type="tel" class="form-control" id="exampleFormControlInput1"
                                placeholder="example: 8092323423" maxlength="10">
                        </div>
                    </div>
                    <div class="modalForm">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Date of Birth</label>
                            <input v-model="dateOfBirth" type="date" class="form-control" id="exampleFormControlInput1">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> <i class="bi bi-x-circle"></i>
                        Close</button>
                    <button type="button" class="btn btn-primary"><i class="bi bi-person-add"></i> Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.buttonDiv {
    place-items: center;
}

.buttonComp {
    background-color: transparent;
    border: solid 2px black;
    transition: 1s;
}

.buttonComp:hover {
    background-color: blueviolet;
    color: white;
}</style>